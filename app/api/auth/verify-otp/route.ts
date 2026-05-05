import { NextResponse } from "next/server";
import { badRequest } from "@/lib/api";
import { createSession, verifyOtp } from "@/lib/store";
import { otpVerifySchema } from "@/lib/validation";

export async function POST(request: Request) {
  const parsed = otpVerifySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return badRequest(parsed.error.issues[0]?.message ?? "Invalid OTP");
  const ok = verifyOtp(parsed.data.phone, parsed.data.otp);
  if (!ok) return badRequest("OTP is invalid or expired");

  const sessionToken = createSession(parsed.data.phone);
  const response = NextResponse.json({ status: "verified", phone: parsed.data.phone });
  response.cookies.set("session_token", sessionToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30
  });
  return response;
}
