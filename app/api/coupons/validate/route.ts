import { badRequest, getCartToken, withCartCookie } from "@/lib/api";
import { buildCartSummary, calculateDiscount } from "@/lib/store";
import { couponSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const parsed = couponSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return badRequest("Enter a valid coupon code");
  const { cartToken, created } = await getCartToken();
  const cart = buildCartSummary(cartToken, parsed.data.code);
  const discount = calculateDiscount(cart.subtotal, parsed.data.code);

  if (!discount) return badRequest("Coupon is invalid or minimum order is not met");

  return withCartCookie({ ...cart, couponCode: parsed.data.code.toUpperCase() }, cartToken, created);
}
