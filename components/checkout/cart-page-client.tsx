"use client";

import { CartItemRow } from "@/components/checkout/cart-item-row";
import { OrderSummary } from "@/components/checkout/order-summary";
import { useCart } from "@/components/storefront/cart-provider";
import { EmptyState } from "@/components/ui/empty-state";
import Link from "next/link";

export function CartPageClient() {
  const { cart, isLoading } = useCart();

  if (isLoading) {
    return (
      <section className="container grid gap-6 py-8 pb-24 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          <div className="h-10 w-32 animate-pulse rounded-xl bg-[#eef3e9]" />
          <div className="space-y-3">
            {[0, 1].map((index) => (
              <div className="card flex gap-4 p-4" key={index}>
                <div className="h-24 w-24 animate-pulse rounded-2xl bg-[#eef3e9]" />
                <div className="flex-1 space-y-3">
                  <div className="h-4 w-40 animate-pulse rounded bg-[#eef3e9]" />
                  <div className="h-4 w-24 animate-pulse rounded bg-[#eef3e9]" />
                  <div className="h-10 w-28 animate-pulse rounded-full bg-[#eef3e9]" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card space-y-3 p-5">
          <div className="h-5 w-28 animate-pulse rounded bg-[#eef3e9]" />
          <div className="h-4 w-full animate-pulse rounded bg-[#eef3e9]" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-[#eef3e9]" />
          <div className="h-12 w-full animate-pulse rounded-xl bg-[#eef3e9]" />
        </div>
      </section>
    );
  }

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
