import { NextResponse } from "next/server";
import { banners } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(banners);
}

export async function POST(request: Request) {
  return NextResponse.json({ status: "created_mock", banner: await request.json().catch(() => ({})) }, { status: 201 });
}
