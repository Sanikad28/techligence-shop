"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, fetchCart, removeFromCart, increaseQty, decreaseQty } = useCart();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!cart.length) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        <Link
          href="/store"
          className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-md"
        >
          Go to Store
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              {item.image && (
                <img
                  src={item.image}
                  className="w-24 h-24 object-contain rounded"
                />
              )}
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-600">₹{item.price}</p>

                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="w-8 h-8 flex items-center justify-center border rounded"
                  >
                    -
                  </button>

                  <span className="text-lg font-semibold w-6 text-center">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="w-8 h-8 flex items-center justify-center border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: ₹{total}</h2>
        <Link
          href="/checkout"
          className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
