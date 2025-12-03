"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

interface ProductType {
  id: string;
  name: string;
  price: number | string;
  description?: string;
  shortDescription?: string;
  image_url: string;
}

export default function ProductCard({ product }: { product: ProductType }) {
  const router = useRouter();

  const [wishlisted, setWishlisted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const image = product.image_url || "/placeholder.png";

  // ⭐ ADD TO CART
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push("/profile"); // redirect to login/register page
      return;
    }

    if (!isAdded) {
      // Send to our API (this handles carts + cart_items correctly)
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          productId: product.id,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        console.error("ADD TO CART ERROR:", result);
        alert("Failed to add to cart");
        return;
      }

      setIsAdded(true);
    } else {
      router.push("/cart");
    }
  };

  return (
    <>
      {/* PRODUCT CARD */}
      <div
        className="border rounded-xl shadow-sm p-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
        onClick={() => router.push(`/store/${product.id}`)}
      >
        {/* IMAGE */}
        <div
          className="w-full h-64 rounded-md border border-gray-400 bg-white flex items-center justify-center overflow-hidden"
          onClick={(e) => {
            e.stopPropagation();
            setShowPreview(true);
          }}
        >
          <img
            src={image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>

        <p className="text-sm text-gray-600 mt-1">
          {product.shortDescription || product.description}
        </p>

        <p className="mt-2 font-bold text-gray-900">₹{product.price}</p>

        {/* BUTTONS */}
        <div className="flex items-center gap-3 mt-4">

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition ${isAdded
              ? "bg-green-600 hover:bg-green-700 text-white"
              : "bg-black hover:bg-gray-900 text-white"
            }`}
          >
            {isAdded ? "Go to Cart" : (
              <>
                <ShoppingCart size={16} />
                Add to Cart
              </>
            )}
          </button>

          {/* WISHLIST */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setWishlisted(!wishlisted);
            }}
            className={`p-2 border rounded-md transition ${wishlisted ? "bg-red-100 border-red-300" : "hover:bg-gray-100"
              }`}
          >
            <Heart
              size={18}
              className={wishlisted ? "text-red-600 fill-red-600" : "text-gray-600"}
            />
          </button>

          {/* ENQUIRY */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowEnquiry(true);
            }}
            className="px-3 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
          >
            Enquiry
          </button>
        </div>
      </div>

      {/* IMAGE PREVIEW */}
      {showPreview && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setShowPreview(false)}
        >
          <img
            src={image}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  );
}
