import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { code: "FRESH50", type: "FLAT", value: 50, minOrder: 299, isActive: true },
    { code: "WELCOME10", type: "PERCENT", value: 10, minOrder: 199, isActive: true }
  ]);
}

export async function POST(request: Request) {
  return NextResponse.json({ status: "created_mock", coupon: await request.json().catch(() => ({})) }, { status: 201 });
}
