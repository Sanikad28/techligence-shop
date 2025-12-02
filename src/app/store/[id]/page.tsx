"use client";

import { use, useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // <-- REQUIRED in Next.js 16

  const [product, setProduct] = useState<any>(null);
  const { cart, addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((resData) => setProduct(resData.data || null));
  }, [id]);

  useEffect(() => {
    if (cart.some((item) => String(item.id) === String(id))) {
      setIsAdded(true);
    }
  }, [cart, id]);

  if (!product) {
    return (
      <div className="pt-24 text-center text-red-600 text-xl">
        Product not found
      </div>
    );
  }

  const handleAdd = () => {
    addToCart({
      id: String(product.id),
      name: product.name,
      price: product.price,
      image_url: product.image_url,
      description: product.description,
      stock: product.stock,
    });
    setIsAdded(true);
  };

  return (
  <div className="pt-24 px-6 max-w-5xl mx-auto">

    <div className="flex gap-12">
      {/* LEFT SIDE IMAGE */}
      <img
        src={product.image_url}
        alt={product.name}
        className="w-1/2 rounded-lg object-cover"
      />

      {/* RIGHT SIDE DETAILS */}
      <div className="w-1/2">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-4">{product.description}</p>
        <p className="text-2xl font-bold mt-4">₹{product.price}</p>

        <div className="flex gap-4 mt-6">
          {isAdded ? (
            <Link
              href="/cart"
              className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700"
            >
              Go to Cart
            </Link>
          ) : (
            <button
              onClick={handleAdd}
              className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>

  </div>
);
}
