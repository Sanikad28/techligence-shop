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
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return router.push("/");

      const { data, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error || !data || data.role !== "admin") return router.push("/");

      setAuthorized(true);
    }

    checkAdmin();
  }, [router]);

  // Form States
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // Submit handler
  // inside admin page component
  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    // get current user (client)
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert("You must be signed in");
      return;
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user.id,        // IMPORTANT: send user id for server-side check
        name,
        description,
        price,
        stock,
        image_url: imageUrl,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Failed to create product");
      return;
    }

    alert("Product created successfully!");

    setName("");
    setDescription("");
    setPrice("");
    setStock("");
    setImageUrl("");
  };


  if (!authorized) return <p className="pt-20 text-center">Checking access...</p>;

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 border rounded">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>

      <form className="space-y-4" onSubmit={handleAddProduct}>
        <input
          className="border p-2 w-full"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          className="border p-2 w-full"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          className="border p-2 w-full"
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          className="border p-2 w-full"
          placeholder="Stock"
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />

        <input
          className="border p-2 w-full"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

        <button className="bg-black text-white w-full p-2" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}
