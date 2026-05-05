import { NextResponse } from "next/server";
import { store } from "@/lib/store";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const order = store.orders.get(id);
  if (!order) return NextResponse.json({ error: "Order not found" }, { status: 404 });
  order.status = body.status ?? order.status;
  store.orders.set(id, order);
  return NextResponse.json(order);
}
