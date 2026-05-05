import { CheckoutPageClient } from "@/components/checkout/checkout-page-client";

export const metadata = {
  title: "Checkout",
  description: "Verify phone, choose delivery address, and place your grocery order."
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}
