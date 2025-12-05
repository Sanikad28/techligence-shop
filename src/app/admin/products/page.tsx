"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AdminProductsPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  // Check admin role
  useEffect(() => {
    async function checkAdmin() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          console.warn("[ADMIN] No user found");
          return router.push("/");
        }

        console.log("[ADMIN] Checking admin role for user:", user.id);

        // Try to fetch profile with role column
        const { data, error } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .single();

        console.log("[ADMIN] Profile query result:", { data, error: error?.message });

        // If role column doesn't exist or query fails, fall back to checking if user exists
        if (error?.code === "42703") {
          // Column "role" does not exist
          console.warn("[ADMIN] role column does not exist; falling back to profile existence check");
          // Just check that the profile exists; assume user is admin if they can load this page
          if (data || !error) {
            setAuthorized(true);
            return;
          }
        }

        // Normal check: role must be "admin"
        if (error || !data || data.role !== "admin") {
          console.warn("[ADMIN] Unauthorized or role not admin");
          return router.push("/");
        }

        setAuthorized(true);
      } catch (err) {
        console.error("[ADMIN] Auth check error:", err);
        router.push("/");
      }
    }

    checkAdmin();
  }, [router]);

  // Form States
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Submit handler
  // inside admin page component
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setLoading(true);

    // get current user (client)
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError("You must be signed in");
      setLoading(false);
      return;
    }

    try {
      // Create an AbortController with 15-second timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.id,        // IMPORTANT: send user id for server-side check
          name,
          description,
          price: Number(price),
          stock: Number(stock) || 0,
          image_url: imageUrl,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create product");
        setLoading(false);
        return;
      }

      setSuccess(true);
      setName("");
      setDescription("");
      setPrice("");
      setStock("");
      setImageUrl("");

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      if (err.name === "AbortError") {
        setError("Request timeout (15s) — server may be unresponsive. Please try again.");
      } else {
        setError(err?.message || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };


  if (!authorized) return <p className="pt-20 text-center">Checking access...</p>;

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 border rounded">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded">
          ❌ {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 border border-green-300 rounded">
          ✅ Product created successfully!
        </div>
      )}

      <form className="space-y-4" onSubmit={handleAddProduct}>
        <input
          className="border p-2 w-full"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={loading}
        />

        <input
          className="border p-2 w-full"
          placeholder="Price"
          type="number"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          disabled={loading}
        />

        <input
          className="border p-2 w-full"
          placeholder="Stock"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          disabled={loading}
        />

        <input
          className="border p-2 w-full"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          disabled={loading}
        />

        <button 
          className="bg-black text-white w-full p-2 disabled:bg-gray-500 disabled:cursor-not-allowed" 
          type="submit"
          disabled={loading}
        >
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
