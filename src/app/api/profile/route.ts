import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma.config";

export async function POST(req: Request) {
  try {
    const { id, email, firstName, lastName } = await req.json();

    if (!id || !email || !firstName || !lastName) {
      return NextResponse.json({ error: "Missing data" }, { status: 400 });
    }

    const profile = await prisma.profile.upsert({
      where: { id },
      update: { email, firstName, lastName, userId: id },
      create: { id, email, firstName, lastName, userId: id }, // <-- add userId here
    });

    return NextResponse.json(profile);
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
