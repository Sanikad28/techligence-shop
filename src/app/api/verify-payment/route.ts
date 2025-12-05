import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-10-29.clover",
});

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get("session_id");

    if (!sessionId) {
      console.warn("❌ [VERIFY_PAYMENT] No session_id provided");
      return NextResponse.json({ error: "No session ID provided" }, { status: 400 });
    }

    console.log("🔍 [VERIFY_PAYMENT] Retrieving session:", sessionId);

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Format amount from paise (minor currency) to INR (major currency)
    const amountRaw = session.amount_total ?? 0;
    const amountFormatted = (amountRaw / 100).toFixed(2);

    // Prefer customer_details.email if available, fall back to customer_email
    const email = session.customer_details?.email || session.customer_email || null;

    console.log("✅ [VERIFY_PAYMENT] Session retrieved");
    console.log("✅ [VERIFY_PAYMENT] Payment status:", session.payment_status);
    console.log("✅ [VERIFY_PAYMENT] Amount total (paise):", amountRaw);
    console.log("✅ [VERIFY_PAYMENT] Amount total (INR):", amountFormatted);
    console.log("✅ [VERIFY_PAYMENT] Customer email:", email);

    return NextResponse.json({
      success: true,
      paymentStatus: session.payment_status,
      amount: amountRaw,
      amountFormatted,
      customerEmail: email,
      customerId: session.client_reference_id,
      sessionId: session.id,
    });
  } catch (err: any) {
    console.error("❌ [VERIFY_PAYMENT] Error:", err?.message || err);
    return NextResponse.json(
      { error: "Failed to verify payment", details: err?.message },
      { status: 500 }
    );
  }
}
