import { NextResponse } from "next/server";
import supabaseAdmin from "@/lib/supabaseAdmin";

export async function DELETE(req: Request) {
  try {
    const { user_id } = await req.json();
    if (!user_id) return NextResponse.json({ error: "Missing user_id" }, { status: 400 });

    const { error: profileError } = await supabaseAdmin
      .from("profiles")
      .delete()
      .eq("id", user_id);

    if (profileError) return NextResponse.json({ error: profileError.message }, { status: 500 });

    const { error: userError } = await supabaseAdmin.auth.admin.deleteUser(user_id);
    if (userError) return NextResponse.json({ error: userError.message }, { status: 500 });

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
