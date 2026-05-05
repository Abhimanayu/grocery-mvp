import { NextResponse } from "next/server";
import { validateServiceability } from "@/lib/store";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const pincode = url.searchParams.get("pincode") ?? "";
  const zone = validateServiceability(pincode);

  return NextResponse.json({
    pincode,
    serviceable: Boolean(zone),
    zone
  });
}
