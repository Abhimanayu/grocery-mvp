"use client";

import { CartItemRow } from "@/components/checkout/cart-item-row";
import { OrderSummary } from "@/components/checkout/order-summary";
import { useCart } from "@/components/storefront/cart-provider";
import { EmptyState } from "@/components/ui/empty-state";
import { Clock3, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function CartPageClient() {
  const { cart, isLoading } = useCart();

  if (isLoading) {
    return (
      <section className="container grid gap-6 py-6 pb-24 lg:grid-cols-[1fr_360px]">
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
    return <section className="container py-8 pb-24"><EmptyState title="Your cart is empty" text="Add fresh grocery items before checkout." /></section>;
  }

  return (
    <section className="container grid gap-5 py-6 pb-24 lg:grid-cols-[1fr_360px]">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--orange)]">Review basket</p>
        <h1 className="mt-1 text-2xl font-black md:text-3xl">Cart</h1>
        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          <CartPromise icon={<Clock3 size={16} />} text="Delivery ETA 45-90 min" />
          <CartPromise icon={<ShieldCheck size={16} />} text="Freshness support after delivery" />
        </div>
        <div className="mt-4 space-y-3">
          {cart.items.map((item) => (
            <CartItemRow item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <OrderSummary cart={cart} />
        <Link className="block rounded-xl bg-[var(--brand)] px-5 py-3 text-center font-bold text-white" href="/checkout">
          Continue to checkout
        </Link>
      </div>
    </section>
  );
}

function CartPromise({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-[#d7edcc] bg-[#f8fffa] px-3 py-3 text-sm font-bold text-[var(--brand-dark)]">
      <span className="text-[var(--brand)]">{icon}</span>
      {text}
    </div>
  );
}
