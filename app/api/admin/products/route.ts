import { NextResponse } from "next/server";
import { getProducts } from "@/lib/catalog";

export async function GET() {
  return NextResponse.json(getProducts());
}

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  return NextResponse.json({ status: "created_mock", product: payload }, { status: 201 });
}
