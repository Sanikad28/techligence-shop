export const runtime = "nodejs";

import { NextResponse } from "next/server";
import supabaseAdmin from "@/lib/supabaseAdmin";

export async function GET() {
  const { data, error } = await supabaseAdmin.from("products").select("*");

  if (error) {
    console.error("PRODUCTS API ERROR:", error);
    return NextResponse.json({ data: [], error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data, error: null });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, description, price, stock, image_url } = body;

    if (!name || !price || !stock) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("products")
      .insert([{ name, description, price, stock, image_url }])
      .select();

    if (error) {
      console.error("Insert error:", error);
      return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
    }

    return NextResponse.json({ success: true, product: data }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
