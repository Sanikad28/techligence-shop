export const runtime = "nodejs";

import { NextResponse } from "next/server";
import supabaseAdmin from "@/lib/supabaseAdmin";


export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("PRODUCTS API ERROR:", error);
    return NextResponse.json({ data: [], error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data, error: null });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📦 [PRODUCTS] POST received", JSON.stringify(body));
    const { user_id, name, description, price, stock, image_url } = body;

    // Verify admin authorization
    if (!user_id) {
      console.warn("📦 [PRODUCTS] No user_id provided");
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      );
    }

    const { data: profile, error: profileError } = await supabaseAdmin
      .from("profiles")
      .select("role")
      .eq("id", user_id)
      .single();

    console.log("📦 [PRODUCTS] profile lookup result:", { profile, profileError });

    if (profileError || !profile || profile.role !== "admin") {
      console.warn("📦 [PRODUCTS] Unauthorized user:", user_id, profileError?.message);
      return NextResponse.json(
        { error: "Admin access required" },
        { status: 403 }
      );
    }

    if (!name || !price) {
      return NextResponse.json(
        { error: "Missing required fields (name, price)" },
        { status: 400 }
      );
    }

    console.log("📦 [PRODUCTS] Creating product:", { name, price, stock });

    const { data, error } = await supabaseAdmin
      .from("products")
      .insert([{ 
        name, 
        description, 
        price: Number(price),
        stock: stock ? Number(stock) : 0,
        image_url 
      }])
      .select()
      .single();

    if (error) {
      console.error("❌ [PRODUCTS] Insert error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("✅ [PRODUCTS] Product created:", data.id);
    return NextResponse.json({ success: true, product: data }, { status: 201 });
  } catch (err: any) {
    console.error("❌ [PRODUCTS] Server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
