import { NextResponse } from "next/server";
import supabaseAdmin from "@/lib/supabaseAdmin";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("id");

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (error) {
      console.error("PROFILE FETCH ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 404 });
    }

    return NextResponse.json({ success: true, profile: data });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { id, email, firstName, lastName } = await req.json();

    if (!id || !email || !firstName || !lastName) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("profiles")
      .insert([
        {
          id,                // must match auth.users.id
          email,
          first_name: firstName,
          last_name: lastName,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("PROFILE INSERT ERROR:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, profile: data });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
