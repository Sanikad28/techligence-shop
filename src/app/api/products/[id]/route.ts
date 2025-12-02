import { NextResponse } from "next/server";
import supabaseAdmin from "@/lib/supabaseAdmin";

export async function GET(req: Request, context: any) {
  const { id } = await context.params; // <-- FIX

  console.log("FETCHING PRODUCT ID:", id);

  if (!id) {
    return NextResponse.json(
      { error: "Invalid product ID" },
      { status: 400 }
    );
  }

  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !data) {
    return NextResponse.json(
      { error: "Product not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ data });
}
