import { NextResponse } from "next/server";
import supabaseAdmin from "@/lib/supabaseAdmin";

// ================ GET CART =================
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    // Get or create cart
    let { data: cart } = await supabaseAdmin
      .from("carts")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    if (!cart) {
      const { data: newCart, error: cartErr } = await supabaseAdmin
        .from("carts")
        .insert([{ user_id: userId }])
        .select()
        .single();

      if (cartErr) throw cartErr;
      cart = newCart;
    }

    // Fetch cart items + products
    const { data: items, error } = await supabaseAdmin
      .from("cart_items")
      .select("id, quantity, product_id, products(*)")
      .eq("cart_id", cart.id);

    if (error) throw error;

    const formatted = (items ?? []).map((it: any) => ({
      id: it.id,
      quantity: it.quantity,
      product_id: it.product_id,
      product: it.products ? { ...it.products, price: Number(it.products.price) } : null,
    }));

    const total = formatted.reduce(
      (sum, it) => (it.product ? sum + it.product.price * it.quantity : sum),
      0
    );

    return NextResponse.json({ items: formatted, total });
  } catch (err) {
    console.error("GET CART ERROR:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// ================ ADD TO CART =================
export async function POST(req: Request) {
  try {
    const { userId, productId } = await req.json();

    if (!userId || !productId) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    // Get or create cart
    let { data: cart } = await supabaseAdmin
      .from("carts")
      .select("*")
      .eq("user_id", userId)
      .maybeSingle();

    if (!cart) {
      const { data: newCart } = await supabaseAdmin
        .from("carts")
        .insert([{ user_id: userId }])
        .select()
        .single();
      cart = newCart;
    }

    // Check if item exists
    const { data: existing } = await supabaseAdmin
      .from("cart_items")
      .select("*")
      .eq("cart_id", cart.id)
      .eq("product_id", productId)
      .maybeSingle();

    if (existing) {
      const { data } = await supabaseAdmin
        .from("cart_items")
        .update({ quantity: existing.quantity + 1 })
        .eq("id", existing.id)
        .select()
        .single();
      return NextResponse.json({ success: true, item: data });
    }

    // Add new item
    const { data } = await supabaseAdmin
      .from("cart_items")
      .insert([{ cart_id: cart.id, product_id: productId, quantity: 1 }])
      .select()
      .single();

    return NextResponse.json({ success: true, item: data });
  } catch (err) {
    console.error("POST CART ERROR:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// ================ UPDATE QUANTITY =================
export async function PATCH(req: Request) {
  try {
    const { cartItemId, quantity } = await req.json();
    if (!cartItemId || typeof quantity !== "number") {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const { data } = await supabaseAdmin
      .from("cart_items")
      .update({ quantity: Math.max(1, quantity) })
      .eq("id", cartItemId)
      .select()
      .single();

    return NextResponse.json({ success: true, item: data });
  } catch (err) {
    console.error("PATCH CART ERROR:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// ================ REMOVE ITEM =================
export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const cartItemId = url.searchParams.get("cartItemId");

    if (!cartItemId) {
      return NextResponse.json({ error: "cartItemId required" }, { status: 400 });
    }

    await supabaseAdmin.from("cart_items").delete().eq("id", cartItemId);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE ITEM ERROR:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// ================ CLEAR CART =================
export async function PUT(req: Request) {
  try {
    const { userId } = await req.json();
    if (!userId) {
      return NextResponse.json({ error: "userId required" }, { status: 400 });
    }

    const { data: cart } = await supabaseAdmin
      .from("carts")
      .select("id")
      .eq("user_id", userId)
      .maybeSingle();

    if (!cart) return NextResponse.json({ success: true });

    await supabaseAdmin.from("cart_items").delete().eq("cart_id", cart.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CLEAR CART ERROR:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
