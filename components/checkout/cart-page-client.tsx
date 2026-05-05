"use client";

import { CartItemRow } from "@/components/checkout/cart-item-row";
import { OrderSummary } from "@/components/checkout/order-summary";
import { useCart } from "@/components/storefront/cart-provider";
import { EmptyState } from "@/components/ui/empty-state";
import Link from "next/link";

export function CartPageClient() {
  const { cart, isLoading } = useCart();

  if (isLoading) return <section className="container py-10">Loading cart...</section>;
  if (!cart?.items.length) {
    return <section className="container py-10 pb-24"><EmptyState title="Your cart is empty" text="Add fresh grocery items before checkout." /></section>;
  }

  return (
    <section className="container grid gap-6 py-8 pb-24 lg:grid-cols-[1fr_360px]">
      <div>
        <h1 className="text-3xl font-black">Cart</h1>
        <div className="mt-5 space-y-3">
          {cart.items.map((item) => (
            <CartItemRow item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <OrderSummary cart={cart} />
        <Link className="block rounded-md bg-[var(--brand)] px-5 py-3 text-center font-bold text-white" href="/checkout">
          Continue to checkout
        </Link>
      </div>
    </section>
  );
}
