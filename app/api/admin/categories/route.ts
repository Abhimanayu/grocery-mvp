import { NextResponse } from "next/server";
import { getCategories } from "@/lib/catalog";

export async function GET() {
  return NextResponse.json(getCategories());
}

export async function POST(request: Request) {
  return NextResponse.json({ status: "created_mock", category: await request.json().catch(() => ({})) }, { status: 201 });
}
