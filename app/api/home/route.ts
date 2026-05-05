import { NextResponse } from "next/server";
import { getHomeData } from "@/lib/catalog";

export async function GET() {
  return NextResponse.json(getHomeData());
}
