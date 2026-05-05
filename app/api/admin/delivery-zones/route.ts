import { NextResponse } from "next/server";
import { deliveryZones } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(deliveryZones);
}

export async function POST(request: Request) {
  return NextResponse.json({ status: "created_mock", zone: await request.json().catch(() => ({})) }, { status: 201 });
}
