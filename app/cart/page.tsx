import { CartPageClient } from "@/components/checkout/cart-page-client";

export const metadata = {
  title: "Cart",
  description: "Review your grocery cart before checkout."
};

export default function CartPage() {
  return <CartPageClient />;
}
