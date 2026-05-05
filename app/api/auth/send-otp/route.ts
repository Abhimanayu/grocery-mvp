import { NextResponse } from "next/server";
import { badRequest } from "@/lib/api";
import { createOtp } from "@/lib/store";
import { otpSendSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const parsed = otpSendSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return badRequest(parsed.error.issues[0]?.message ?? "Invalid phone number");
  const otp = createOtp(parsed.data.phone);

  return NextResponse.json({
    status: "sent",
    phone: parsed.data.phone,
    mockOtp: process.env.NODE_ENV === "production" ? undefined : otp.code
  });
}
