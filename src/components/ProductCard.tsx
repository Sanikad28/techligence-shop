"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { supabase } from "@/lib/supabaseClient";

interface ProductType {
  id: number;
  name: string;
  price: string | number;
  description?: string;
  shortDescription?: string;
  image_url: string; // single main image
}

export default function ProductCard({ product }: { product: ProductType }) {
  const router = useRouter();

  const [wishlisted, setWishlisted] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const { addToCart } = useCart();

  const [enquiryData, setEnquiryData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const image = product.image_url || "/placeholder.png";

  // ⭐ Wishlist Fetch
  useEffect(() => {
    async function fetchWishlist() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const { data } = await supabase
          .from("wishlist")
          .select("product_id")
          .eq("user_id", user.id)
          .eq("product_id", product.id)
          .single();

        if (data) setWishlisted(true);
      } catch (err) {
        console.error("Wishlist fetch error:", err);
      }
    }
    fetchWishlist();
  }, [product.id]);

  // ⭐ Wishlist Toggle
  const toggleWishlist = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      if (wishlisted) {
        await supabase
          .from("wishlist")
          .delete()
          .eq("user_id", user.id)
          .eq("product_id", product.id);
        setWishlisted(false);
      } else {
        await supabase
          .from("wishlist")
          .insert({ user_id: user.id, product_id: product.id });
        setWishlisted(true);
      }
    } catch (err) {
      console.error("Wishlist toggle error:", err);
    }
  };

  // ⭐ Enquiry Submit
  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry:", enquiryData);
    setShowEnquiry(false);
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
            onClick={async (e) => {
              e.stopPropagation();

              if (!isAdded) {
                const { data: { user } } = await supabase.auth.getUser();
                if (!user) {
                  router.push("/login");
                  return;
                }

                // 🟦 store in local cart context
                addToCart({
                  id: String(product.id),
                  name: product.name,
                  price: Number(product.price),
                  image_url: product.image_url,
                  description: product.description || "",
                  stock: 1,
                });

                // 🟧 store in database cart table
                await supabase.from("cart").insert({
                  user_id: user.id,
                  product_id: product.id,  // 🔥 now this works because you added the column
                });

                setIsAdded(true);
              } else {
                router.push("/cart");
              }
            }}

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
            onClick={toggleWishlist}
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

      {/* FULLSCREEN PREVIEW */}
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

      {/* ENQUIRY MODAL */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Product Enquiry</h2>

            <form onSubmit={handleEnquirySubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 w-full rounded"
                value={enquiryData.name}
                onChange={(e) =>
                  setEnquiryData({ ...enquiryData, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border p-2 w-full rounded"
                value={enquiryData.email}
                onChange={(e) =>
                  setEnquiryData({ ...enquiryData, email: e.target.value })
                }
              />

              <textarea
                placeholder="Message"
                className="border p-2 w-full rounded"
                value={enquiryData.message}
                onChange={(e) =>
                  setEnquiryData({ ...enquiryData, message: e.target.value })
                }
              />

              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded w-full"
              >
                Send Enquiry
              </button>
            </form>

            <button
              className="mt-4 text-gray-600 underline w-full text-center"
              onClick={() => setShowEnquiry(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
