"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cart } = useCart();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
  });

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckout = async () => {
    for (const v of Object.values(form)) {
      if (!v.trim()) {
        alert("Fill all details");
        return;
      }
    }

    setLoading(true);

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, total, form }),
    });

    const data = await res.json();

    if (data.url) window.location.href = data.url;
    else alert("Checkout failed");

    setLoading(false);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-24 text-center">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        <a
          href="/store"
          className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-md"
        >
          Go to Store
        </a>
      </div>
    );
  }

  return (
    <div className="pt-24 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {[
          { label: "Name", name: "name" },
          { label: "Phone", name: "phone" },
          { label: "Address", name: "address" },
          { label: "Pincode", name: "pincode" },
          { label: "City", name: "city" },
          { label: "State", name: "state" },
        ].map((f) => (
          <input
            key={f.name}
            name={f.name}
            placeholder={f.label}
            value={form[f.name as keyof typeof form]}
            onChange={handleChange}
            className="border p-3 rounded-md"
          />
        ))}
      </div>

      {/* ORDER SUMMARY */}
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-gray-600">₹{item.price}</p>
            </div>
            <img
              src={item.images[0]}
              className="w-16 h-16 object-contain rounded"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <h2 className="text-xl font-bold">Total: ₹{total}</h2>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 disabled:opacity-50"
        >
          {loading ? "Redirecting..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
}
