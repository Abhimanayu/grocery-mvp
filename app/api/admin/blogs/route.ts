import { NextResponse } from "next/server";
import { blogs } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(blogs);
}

export async function POST(request: Request) {
  return NextResponse.json({ status: "created_mock", blog: await request.json().catch(() => ({})) }, { status: 201 });
}
