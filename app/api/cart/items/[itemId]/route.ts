import { badRequest, getCartToken, withCartCookie } from "@/lib/api";
import { updateCartItem, removeCartItem } from "@/lib/store";
import { z } from "zod";

const updateSchema = z.object({
  quantity: z.number().int().min(0).max(50)
});

export async function PATCH(request: Request, { params }: { params: Promise<{ itemId: string }> }) {
  const parsed = updateSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return badRequest(parsed.error.issues[0]?.message ?? "Invalid quantity");

  const { itemId } = await params;
  const { cartToken, created } = await getCartToken();

  try {
    const cart = updateCartItem(cartToken, itemId, parsed.data.quantity);
    return withCartCookie(cart, cartToken, created);
  } catch (error) {
    return badRequest(error instanceof Error ? error.message : "Unable to update item");
  }
}

export async function DELETE(_: Request, { params }: { params: Promise<{ itemId: string }> }) {
  const { itemId } = await params;
  const { cartToken, created } = await getCartToken();
  const cart = removeCartItem(cartToken, itemId);
  return withCartCookie(cart, cartToken, created);
}
