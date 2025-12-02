export const runtime = "nodejs";

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    SUPABASE_URL_present: !!process.env.SUPABASE_URL,
    SUPABASE_SERVICE_ROLE_KEY_present: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    NEXT_PUBLIC_SUPABASE_URL_present: !!process.env.NEXT_PUBLIC_SUPABASE_URL
  });
}
