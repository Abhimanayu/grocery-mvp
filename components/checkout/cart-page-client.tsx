"use client";

import { CartItemRow } from "@/components/checkout/cart-item-row";
import { OrderSummary } from "@/components/checkout/order-summary";
import { FrequentlyBoughtTogether } from "@/components/storefront/frequently-bought-together";
import { TrustReviews } from "@/components/storefront/trust-reviews";
import { useCart } from "@/components/storefront/cart-provider";
import { EmptyState } from "@/components/ui/empty-state";
import { getProducts } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import { Clock3, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function CartPageClient() {
  const { cart, isLoading } = useCart();
  const suggestions = getProducts().slice(0, 3);

  if (isLoading) {
    return (
      <section className="container grid gap-6 py-6 pb-24 lg:grid-cols-[minmax(0,1fr)_390px] xl:grid-cols-[minmax(0,1fr)_420px]">
        <div className="space-y-4">
          <div className="skeleton h-10 w-32 rounded-xl" />
          <div className="space-y-3">
            {[0, 1].map((index) => (
              <div className="card fade-in-up flex gap-4 p-4" key={index}>
                <div className="skeleton h-24 w-24 rounded-2xl" />
                <div className="flex-1 space-y-3">
                  <div className="skeleton h-4 w-40 rounded" />
                  <div className="skeleton h-4 w-24 rounded" />
                  <div className="skeleton h-10 w-28 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card space-y-3 p-5">
          <div className="skeleton h-5 w-28 rounded" />
          <div className="skeleton h-4 w-full rounded" />
          <div className="skeleton h-4 w-5/6 rounded" />
          <div className="skeleton h-12 w-full rounded-xl" />
        </div>
      </section>
    );
  }

  if (!cart?.items.length) {
    return <section className="container py-8 pb-24"><EmptyState title="Your cart is empty" text="Add fresh grocery items before checkout." /></section>;
  }

  return (
    <>
      <section className="container grid gap-5 py-6 pb-24 lg:grid-cols-[minmax(0,1fr)_390px] xl:grid-cols-[minmax(0,1fr)_420px]">
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
        <div className="space-y-3 pb-20 md:pb-0">
          <OrderSummary cart={cart} />
          <Link className="hidden rounded-xl bg-[var(--brand)] px-5 py-3 text-center font-bold text-white md:block" href="/checkout">
            Continue to checkout
          </Link>
        </div>
      </section>

      <section className="container py-2 pb-24 md:py-3">
        <FrequentlyBoughtTogether products={suggestions} />
      </section>
      <section className="container py-2 pb-28 md:py-3 md:pb-24">
        <TrustReviews />
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#dce8d5] bg-white/95 p-3 shadow-[0_-8px_26px_rgba(36,49,38,0.14)] backdrop-blur md:hidden">
        <div className="container flex items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-black uppercase tracking-wide text-[var(--muted)]">Payable now</p>
            <p className="truncate text-lg font-black text-[var(--brand-dark)]">{formatPrice(cart.total)}</p>
          </div>
          <Link className="rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-black text-white" href="/checkout">
            Checkout
          </Link>
        </div>
      </div>
    </>
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
