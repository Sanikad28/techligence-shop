import { NextResponse } from "next/server";
import supabaseAdmin from "@/lib/supabaseAdmin";


export async function GET(
  _req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  if (!id) {
    return NextResponse.json({ data: null, error: "Missing product ID" }, { status: 400 });
  }

  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("PRODUCT FETCH ERROR:", error);
    return NextResponse.json({ data: null, error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ data: null, error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json({ data, error: null });
}
