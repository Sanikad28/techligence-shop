"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [orderCreated, setOrderCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyPaymentAndCreateOrder = async () => {
      if (!sessionId) {
        console.log("❌ [SUCCESS] No session_id found");
        setError("No session ID found");
        setLoading(false);
        return;
      }

      try {
        console.log("🔍 [SUCCESS] Verifying payment for session:", sessionId);

        // Verify payment with Stripe
        const verifyRes = await fetch(`/api/verify-payment?session_id=${sessionId}`);
        const verifyData = await verifyRes.json();

        console.log("🔍 [SUCCESS] Payment verification response:", verifyData);

        if (!verifyData.success || verifyData.paymentStatus !== "paid") {
          console.warn("❌ [SUCCESS] Payment not completed. Status:", verifyData.paymentStatus);
          setError("Payment verification failed");
          setLoading(false);
          return;
        }

        console.log("✅ [SUCCESS] Payment verified as paid");

        // Create order in database
        if (cart.length > 0) {
          console.log("📦 [SUCCESS] Creating order with", cart.length, "items");

          // Get auth token
          const { data: { session } } = await supabase.auth.getSession();
          const token = session?.access_token;

          if (!token) {
            console.error("❌ [SUCCESS] No auth token available");
            setError("Authentication error");
            setLoading(false);
            return;
          }

          const orderRes = await fetch("/api/orders", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify({
              items: cart,
              totalAmount: verifyData.amount ? verifyData.amount / 100 : 0,
              stripeSessionId: sessionId,
              customerEmail: verifyData.customerEmail,
            }),
          });

          const orderData = await orderRes.json();

          if (!orderRes.ok) {
            console.error("❌ [SUCCESS] Order creation failed:", orderData.error);
            setError("Failed to create order");
            setLoading(false);
            return;
          }

          console.log("✅ [SUCCESS] Order created successfully. Order ID:", orderData.orderId);
          await clearCart();
          setOrderCreated(true);
        }

        setLoading(false);
      } catch (err) {
        console.error("❌ [SUCCESS] Error:", err);
        setError("An error occurred");
        setLoading(false);
      }
    };

    verifyPaymentAndCreateOrder();
  }, [sessionId, cart.length, clearCart]);

  if (loading) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold">Processing your payment...</h1>
        <p className="mt-2 text-gray-600">Please wait while we verify your order.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-32 text-center">
        <h1 className="text-2xl font-bold text-red-600">⚠️ Payment Issue</h1>
        <p className="mt-2 text-gray-700">{error}</p>
        <a
          href="/checkout"
          className="mt-6 inline-block bg-orange-600 text-white py-2 px-6 rounded-md hover:bg-orange-700"
        >
          Back to Checkout
        </a>
      </div>
    );
  }

  return (
    <div className="pt-32 text-center">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful 🎉</h1>
      <p className="mt-2 text-gray-700">Your order has been placed and confirmed.</p>
      {orderCreated && <p className="mt-2 text-sm text-gray-600">Order details have been saved to your account.</p>}

      <a
        href="/store"
        className="mt-6 inline-block bg-black text-white py-2 px-6 rounded-md hover:bg-gray-900"
      >
        Continue Shopping
      </a>
    </div>
  );
}
