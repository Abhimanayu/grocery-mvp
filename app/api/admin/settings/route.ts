import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/mock-data";

export async function GET() {
  return NextResponse.json(siteConfig);
}

export async function PATCH(request: Request) {
  return NextResponse.json({ status: "updated_mock", settings: await request.json().catch(() => ({})) });
}
