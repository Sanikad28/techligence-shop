"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart, Eye, Star, Zap } from "lucide-react";
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
  const [isHovered, setIsHovered] = useState(false);

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
        className="group relative bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => router.push(`/store/${product.id}`)}
      >
        {/* Subtle background on hover */}
        <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 bg-gray-900 text-white text-xs font-semibold rounded-full transition-all duration-300">
            Available
          </span>
        </div>

        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <div
            className="w-full h-64 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative"
            onClick={(e) => {
              e.stopPropagation();
              setShowPreview(true);
            }}
          >
            <img
              src={image}
              alt={product.name}
              className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay with quick actions */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPreview(true);
                }}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              >
                <Eye className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setWishlisted(!wishlisted);
                }}
                className={`p-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                  wishlisted
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-white/20 backdrop-blur-sm hover:bg-white/30"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${wishlisted ? "text-white fill-white" : "text-white"}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 relative">
          <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>

          <p className="text-sm text-gray-600 mt-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-300">
            {product.shortDescription || product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center mt-3 space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < 4 ? "text-gray-800 fill-gray-800" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">(4.8)</span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <p className="font-bold text-2xl text-gray-900 transition-colors duration-300">
                ₹{product.price}
              </p>
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <span className="font-medium">In Stock</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-3 mt-6">
            {/* ADD TO CART */}
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                isAdded
                  ? "bg-gray-800 hover:bg-gray-900 text-white shadow-lg"
                  : "bg-gray-900 hover:bg-black text-white shadow-lg"
              }`}
            >
              {isAdded ? (
                <>
                  <ShoppingCart size={18} />
                  Go to Cart
                </>
              ) : (
                <>
                  <ShoppingCart size={18} />
                  Add to Cart
                </>
              )}
            </button>

            {/* ENQUIRY */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowEnquiry(true);
              }}
              className="px-4 py-3 bg-white hover:bg-gray-50 text-gray-700 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-md border border-gray-300"
            >
              <span className="hidden sm:inline">Enquire</span>
              <span className="sm:hidden">?</span>
            </button>
          </div>
        </div>

      </div>

      {/* IMAGE PREVIEW */}
      {showPreview && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 animate-in fade-in duration-300"
          onClick={() => setShowPreview(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4">
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowPreview(false);
              }}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300 p-2 hover:bg-white/10 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image with zoom effect */}
            <img
              src={image}
              alt={product.name}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />

            {/* Product info overlay */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-4 text-white">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-200 text-sm mb-2">{product.shortDescription || product.description}</p>
              <p className="text-2xl font-bold text-blue-400">₹{product.price}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
