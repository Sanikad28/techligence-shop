import { NextResponse } from "next/server";
import Stripe from "stripe";
import supabaseAdmin from "@/lib/supabaseAdmin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-10-29.clover",
});

export async function POST(req: Request) {
  try {
    console.log("🛒 [CHECKOUT] Request received");
    const body = await req.json();
    console.log("🛒 [CHECKOUT] Request body:", JSON.stringify(body, null, 2));

    if (!body || !body.cart || !Array.isArray(body.cart) || body.cart.length === 0) {
      console.warn("🛒 [CHECKOUT] Invalid cart:", body?.cart);
      return NextResponse.json({ error: "No items provided" }, { status: 400 });
    }

    console.log(`🛒 [CHECKOUT] Cart items count: ${body.cart.length}`);
    console.log("🛒 [CHECKOUT] Total amount:", body.total);
    console.log("🛒 [CHECKOUT] Shipping form:", body.form);

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      `${req.headers.get("x-forwarded-proto")}://${req.headers.get("host")}`;

    console.log("🛒 [CHECKOUT] Base URL:", baseUrl);

    // Get auth token from Authorization header
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.warn("🛒 [CHECKOUT] No auth token provided");
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    const token = authHeader.substring(7);
    console.log("🛒 [CHECKOUT] Auth token found");

    // Verify token with Supabase admin
    const { data, error } = await supabaseAdmin.auth.getUser(token);
    if (error || !data.user) {
      console.warn("🛒 [CHECKOUT] Invalid token:", error?.message);
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    const userId = data.user.id;
    console.log("🛒 [CHECKOUT] User ID:", userId);

    console.log("🛒 [CHECKOUT] Creating Stripe session...");
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: body.cart.map((item: any) => ({
        price_data: {
          currency: "inr",
          product_data: { name: item.name },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity || 1,
      })),
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      client_reference_id: userId,
      metadata: {
        userId: userId,
        cart: JSON.stringify(body.cart),
        total: body.total,
        shipping: body.form ? JSON.stringify(body.form) : "",
      },
    });

    console.log("✅ [CHECKOUT] Stripe session created successfully");
    console.log("✅ [CHECKOUT] Session ID:", session.id);
    console.log("✅ [CHECKOUT] Session URL:", session.url);
    console.log("✅ [CHECKOUT] Session created (initial payment_status):", session.payment_status);

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error("❌ [CHECKOUT] Error occurred:");
    console.error("❌ [CHECKOUT] Error message:", err?.message);
    console.error("❌ [CHECKOUT] Error type:", err?.type);
    console.error("❌ [CHECKOUT] Error code:", err?.code);
    console.error("❌ [CHECKOUT] Full error:", err);

    const message = err?.message || (err?.raw && err.raw.message) || "Checkout failed";
    return NextResponse.json(
      { error: message, details: String(err) },
      { status: 500 }
    );
  }
}
