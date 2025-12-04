"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface CartProduct {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartContextType {
  cart: CartProduct[];
  cartCount: number;
  fetchCart: () => Promise<void>;
  addToCart: (productId: string) => Promise<void>;
  removeFromCart: (cartItemId: string) => Promise<void>;
  increaseQty: (cartItemId: string) => Promise<void>;
  decreaseQty: (cartItemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const fetchCart = async () => {
    const { data: auth } = await supabase.auth.getUser();
    if (!auth?.user?.id) return;

    const res = await fetch(`/api/cart?userId=${auth.user.id}`);
    const json = await res.json();
    if (json.items && Array.isArray(json.items)) {
      setCart(
        json.items.map((item: any) => ({
          id: item.id,
          productId: item.product_id,
          name: item.product.name,
          price: Number(item.product.price),
          quantity: item.quantity,
          image: item.product.image,
        }))
      );
    } else {
      setCart([]);
    }
  };

  const addToCart = async (productId: string) => {
    const { data: auth } = await supabase.auth.getUser();
    if (!auth?.user?.id) return;

    await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ userId: auth.user.id, productId }),
    });

    fetchCart();
  };

  const removeFromCart = async (cartItemId: string) => {
    await fetch(`/api/cart?cartItemId=${cartItemId}`, { method: "DELETE" });
    fetchCart();
  };

  const increaseQty = async (cartItemId: string) => {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    await fetch("/api/cart", {
      method: "PATCH",
      body: JSON.stringify({ cartItemId, quantity: item.quantity + 1 }),
    });

    fetchCart();
  };

  const decreaseQty = async (cartItemId: string) => {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    await fetch("/api/cart", {
      method: "PATCH",
      body: JSON.stringify({ cartItemId, quantity: Math.max(1, item.quantity - 1) }),
    });

    fetchCart();
  };

  const clearCart = async () => {
    const { data: auth } = await supabase.auth.getUser();
    if (!auth?.user?.id) return;

    await fetch("/api/cart", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: auth.user.id }),
    });

    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        fetchCart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
