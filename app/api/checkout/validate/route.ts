import { NextResponse } from "next/server";
import { getCartToken } from "@/lib/api";
import { buildCartSummary, validateServiceability } from "@/lib/store";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const pincode = String(body.pincode ?? "");
  const { cartToken } = await getCartToken();
  const cart = buildCartSummary(cartToken, body.couponCode);
  const zone = validateServiceability(pincode);
  const errors: string[] = [];

  if (!cart.items.length) errors.push("Cart is empty");
  if (cart.subtotal < cart.minimumOrder) errors.push(`Minimum order is ₹${cart.minimumOrder}`);
  if (!zone) errors.push("Pincode is not serviceable yet");

  return NextResponse.json({ valid: errors.length === 0, errors, cart, zone });
}
