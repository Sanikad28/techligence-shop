// src/app/api/cart/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// ================= GET CART =================
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const userId = url.searchParams.get("userId");
    if (!userId) return NextResponse.json({ error: "Missing userId" }, { status: 400 });

    const cart = await prisma.cart.findFirst({
      where: { userId },
      include: { cartItems: { include: { product: true } } },
    });

    const items = (cart?.cartItems ?? []).map((ci) => ({
      id: ci.id,
      cartId: ci.cartId,
      productId: ci.productId,
      quantity: ci.quantity,
      addedAt: ci.createdAt,
      product: ci.product
        ? { ...ci.product, price: Number(ci.product.price) }
        : null,
    }));

    const total = items.reduce((sum, it) => it.product ? sum + it.product.price * it.quantity : sum, 0);

    return NextResponse.json({ items, total });
  } catch (err) {
    console.error("GET CART ERROR:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// ================= ADD TO CART =================
export async function POST(req: Request) {
  try {
    const { userId, productId } = await req.json();
    if (!userId || !productId) return NextResponse.json({ error: "Missing data" }, { status: 400 });

    let cart = await prisma.cart.findFirst({ where: { userId } });
    if (!cart) cart = await prisma.cart.create({ data: { userId } });

    const existing = await prisma.cartItem.findFirst({ where: { cartId: cart.id, productId } });

    if (existing) {
      const updated = await prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + 1 },
      });
      return NextResponse.json({ success: true, item: updated });
    }

    const created = await prisma.cartItem.create({
      data: { cartId: cart.id, productId, quantity: 1 },
    });
    return NextResponse.json({ success: true, item: created });
  } catch (err) {
    console.error("POST CART ERROR:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// ================= UPDATE QUANTITY =================
export async function PATCH(req: Request) {
  try {
    const { cartItemId, quantity } = await req.json();
    if (!cartItemId || typeof quantity !== "number")
      return NextResponse.json({ error: "Missing data" }, { status: 400 });

    const updated = await prisma.cartItem.update({
      where: { id: cartItemId },
      data: { quantity: Math.max(1, quantity) },
    });
    return NextResponse.json({ success: true, item: updated });
  } catch (err) {
    console.error("PATCH CART ITEM ERROR:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// ================= DELETE SINGLE ITEM =================
export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    let cartItemId = url.searchParams.get("cartItemId");

    if (!cartItemId) {
      const body = await req.json().catch(() => null);
      if (body?.cartItemId) cartItemId = body.cartItemId;
    }

    if (!cartItemId) return NextResponse.json({ error: "cartItemId required" }, { status: 400 });

    await prisma.cartItem.delete({ where: { id: cartItemId } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("DELETE ITEM ERROR:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}

// ================= CLEAR CART =================
export async function PUT(req: Request) {
  try {
    const { userId } = await req.json();
    if (!userId) return NextResponse.json({ error: "userId required" }, { status: 400 });

    const cart = await prisma.cart.findFirst({ where: { userId } });
    if (!cart) return NextResponse.json({ success: true });

    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CLEAR CART ERROR:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
