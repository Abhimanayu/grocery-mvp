import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    app: "foydn-next-grocery-mvp",
    timestamp: new Date().toISOString()
  });
}
