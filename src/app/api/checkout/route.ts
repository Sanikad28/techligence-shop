import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2024-06-20",
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body || !body.items || body.items.length === 0) {
      return NextResponse.json(
        { error: "No items provided" },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",

      line_items: body.items.map((item: any) => ({
        price_data: {
          currency: "inr",
          product_data: { name: item.name },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),

      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment?status=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment?status=failed`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      { error: "Checkout failed" },
      { status: 500 }
    );
  }
}
