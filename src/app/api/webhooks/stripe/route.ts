import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import supabaseAdmin from "@/lib/supabaseAdmin";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-10-29.clover",
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const headersList = await headers();
    const sig = headersList.get("stripe-signature");

    if (!sig) {
      console.error("❌ [WEBHOOK] No Stripe signature provided");
      return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err: any) {
      console.error("❌ [WEBHOOK] Webhook signature verification failed:", err.message);
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    console.log("✅ [WEBHOOK] Event received:", event.type);

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("💳 [WEBHOOK] Processing checkout.session.completed for session:", session.id);

        // Extract metadata
        const userId = session.metadata?.userId;
        const cart = session.metadata?.cart ? JSON.parse(session.metadata.cart) : [];
        const total = session.metadata?.total;
        const shipping = session.metadata?.shipping ? JSON.parse(session.metadata.shipping) : null;

        if (!userId) {
          console.error("❌ [WEBHOOK] No userId in session metadata");
          return NextResponse.json({ error: "No user ID" }, { status: 400 });
        }

        // Store payment data in payments table
        const paymentData = {
          user_id: userId,
          stripe_session_id: session.id,
          stripe_payment_intent_id: session.payment_intent as string,
          amount: session.amount_total,
          currency: session.currency,
          status: session.payment_status,
          customer_email: session.customer_details?.email || session.customer_email,
          customer_name: session.customer_details?.name,
          payment_method_types: session.payment_method_types,
          metadata: session.metadata,
          created_at: new Date(),
          updated_at: new Date(),
        };

        const { data: payment, error: paymentError } = await supabaseAdmin
          .from("payments")
          .insert(paymentData)
          .select()
          .single();

        if (paymentError) {
          console.error("❌ [WEBHOOK] Failed to store payment:", paymentError.message);
          return NextResponse.json({ error: "Failed to store payment" }, { status: 500 });
        }

        console.log("✅ [WEBHOOK] Payment stored successfully:", payment.id);

        // If customer doesn't exist in Stripe, we might want to create one
        // But for now, the session already has customer details

        break;
      }

      case "payment_intent.succeeded": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("💳 [WEBHOOK] Payment intent succeeded:", paymentIntent.id);

        // Update payment status if needed
        const { error: updateError } = await supabaseAdmin
          .from("payments")
          .update({
            status: "succeeded",
            updated_at: new Date()
          })
          .eq("stripe_payment_intent_id", paymentIntent.id);

        if (updateError) {
          console.error("❌ [WEBHOOK] Failed to update payment status:", updateError.message);
        } else {
          console.log("✅ [WEBHOOK] Payment status updated to succeeded");
        }

        break;
      }

      case "payment_intent.payment_failed": {
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log("❌ [WEBHOOK] Payment intent failed:", paymentIntent.id);

        // Update payment status to failed
        const { error: updateError } = await supabaseAdmin
          .from("payments")
          .update({
            status: "failed",
            updated_at: new Date()
          })
          .eq("stripe_payment_intent_id", paymentIntent.id);

        if (updateError) {
          console.error("❌ [WEBHOOK] Failed to update payment status:", updateError.message);
        } else {
          console.log("✅ [WEBHOOK] Payment status updated to failed");
        }

        break;
      }

      default:
        console.log("ℹ️ [WEBHOOK] Unhandled event type:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("❌ [WEBHOOK] Error processing webhook:", err);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
