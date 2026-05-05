import { badRequest, getCartToken, withCartCookie } from "@/lib/api";
import { createOrder } from "@/lib/store";
import { orderSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const parsed = orderSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return badRequest(parsed.error.issues[0]?.message ?? "Invalid order details");

  const { cartToken, created } = await getCartToken();

  try {
    const order = createOrder(cartToken, parsed.data.address, parsed.data.paymentMethod, parsed.data.couponCode);
    return withCartCookie(order, cartToken, created);
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : "Unable to create order");
  }
}
