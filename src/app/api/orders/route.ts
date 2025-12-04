// app/api/orders/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import supabaseAdmin from "@/lib/supabaseAdmin";

// GET: fetch user orders
export async function GET() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabase
    .from("orders")
    .select("*, order_items(*, products(*))")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ orders: data });
}

// POST: create new order (checkout)
export async function POST(req: NextRequest) {
  try {
    const { items, totalAmount, stripeSessionId, customerEmail } = await req.json();

    console.log("📦 [ORDERS] Creating order - Total:", totalAmount, "Items:", items.length);

    // Get auth token from Authorization header
    const authHeader = req.headers.get("authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      console.warn("📦 [ORDERS] No auth token provided");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.substring(7);
    
    // Verify token with Supabase admin
    const { data, error: tokenError } = await supabaseAdmin.auth.getUser(token);
    if (tokenError || !data.user) {
      console.warn("📦 [ORDERS] Invalid token:", tokenError?.message);
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = data.user.id;
    console.log("📦 [ORDERS] User ID:", userId);

    // Create order in database (only include optional fields if provided)
    const orderPayload: any = {
      user_id: userId,
      total_amount: totalAmount,
      status: "completed",
    };

    if (stripeSessionId) orderPayload.stripe_session_id = stripeSessionId;
    if (customerEmail) orderPayload.customer_email = customerEmail;

    const { data: order, error: orderError } = await supabaseAdmin
      .from("orders")
      .insert(orderPayload)
      .select()
      .single();

    if (orderError || !order) {
      console.error("❌ [ORDERS] Order creation error:", orderError?.message);
      return NextResponse.json(
        { error: orderError?.message || "Order failed" },
        { status: 400 }
      );
    }

    console.log("✅ [ORDERS] Order created:", order.id);

    // Insert order items
    const itemsToInsert = items.map((i: any) => ({
      order_id: order.id,
      product_id: i.productId || i.product_id,
      quantity: i.quantity || 1,
      price: i.price,
    }));

    console.log("📦 [ORDERS] Inserting order items:", itemsToInsert.length);

    const { error: itemsError } = await supabaseAdmin
      .from("order_items")
      .insert(itemsToInsert);

    if (itemsError) {
      console.error("❌ [ORDERS] Order items error:", itemsError.message);
      return NextResponse.json(
        { error: itemsError.message },
        { status: 400 }
      );
    }

    console.log("✅ [ORDERS] Order items inserted successfully");

    return NextResponse.json({ success: true, orderId: order.id });
  } catch (err: any) {
    console.error("❌ [ORDERS] Error:", err);
    return NextResponse.json(
      { error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
