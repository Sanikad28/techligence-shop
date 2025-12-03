import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma.config";

export async function GET() {
  const result = await prisma.$queryRawUnsafe(`SELECT current_user;`);
  return NextResponse.json(result);
}
