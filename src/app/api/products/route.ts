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
    const { name, description, price, image_url } = body;

    if (!name || !price) {
      return NextResponse.json(
        { error: "Missing required fields (name, price)" },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from("products")
      .insert([{ name, description, price, image_url }])
      .select()
      .single();

    if (error) {
      console.error("INSERT PRODUCT ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, product: data }, { status: 201 });
  } catch (err) {
    console.error("SERVER ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
