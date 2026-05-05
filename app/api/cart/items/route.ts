import { badRequest, getCartToken, withCartCookie } from "@/lib/api";
import { cartItemSchema } from "@/lib/validation";
import { addCartItem } from "@/lib/store";

export async function POST(request: Request) {
  const parsed = cartItemSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return badRequest(parsed.error.issues[0]?.message ?? "Invalid cart item");

  const { cartToken, created } = await getCartToken();

  try {
    const cart = addCartItem(cartToken, parsed.data.variantId, parsed.data.quantity);
    return withCartCookie(cart, cartToken, created);
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : "Unable to add item");
  }
}
