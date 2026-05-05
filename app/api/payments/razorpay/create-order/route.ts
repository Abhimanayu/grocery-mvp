import { NextResponse } from "next/server";
import { getCartToken } from "@/lib/api";
import { buildCartSummary, createToken } from "@/lib/store";

export async function POST() {
  const { cartToken } = await getCartToken();
  const cart = buildCartSummary(cartToken);

  return NextResponse.json({
    provider: "razorpay",
    keyId: process.env.RAZORPAY_KEY_ID ?? "rzp_test_mock",
    providerOrderId: createToken("rzp_order"),
    amount: Math.round(cart.total * 100),
    currency: "INR",
    status: "created"
  });
}
