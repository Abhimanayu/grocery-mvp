import { getCartToken, withCartCookie } from "@/lib/api";
import { buildCartSummary } from "@/lib/store";

export async function GET() {
  const { cartToken, created } = await getCartToken();
  return withCartCookie(buildCartSummary(cartToken), cartToken, created);
}
