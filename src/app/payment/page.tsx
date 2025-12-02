"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const { cart } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + Number(item.price), 0);

  const handlePay = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product: {
          name: "Order Payment",
          price: total,
        },
      }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Checkout failed");
    }
  };

  return (
    <div className="pt-24 text-center">
      <h1 className="text-3xl font-bold mb-4">Final Payment</h1>
      <p className="text-xl mb-6">Total Amount: ₹{total}</p>

      <button
        onClick={handlePay}
        className="bg-orange-600 text-white px-8 py-3 rounded-md"
      >
        Pay Now
      </button>
    </div>
  );
}
