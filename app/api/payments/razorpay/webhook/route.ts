import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  return NextResponse.json({
    received: true,
    signatureValidation: process.env.RAZORPAY_WEBHOOK_SECRET ? "pending-implementation" : "mock-mode",
    event: payload.event ?? "unknown"
  });
}
