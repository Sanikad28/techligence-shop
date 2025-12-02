// app/api/orders/route.ts
import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

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
  const { items, totalAmount } = await req.json();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({ user_id: user.id, total_amount: totalAmount })
    .select()
    .single();

  if (orderError || !order) return NextResponse.json({ error: orderError?.message || "Order failed" }, { status: 400 });

  // Insert order items
  const itemsToInsert = items.map((i: any) => ({
    order_id: order.id,
    product_id: i.product_id,
    quantity: i.quantity,
    price_at_purchase: i.price
  }));

  const { error: itemsError } = await supabase
    .from("order_items")
    .insert(itemsToInsert);

  if (itemsError) return NextResponse.json({ error: itemsError.message }, { status: 400 });

  return NextResponse.json({ success: true, orderId: order.id });
}
