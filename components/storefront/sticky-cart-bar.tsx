"use client";

import { MinimumOrderProgress } from "@/components/checkout/minimum-order-progress";
import { useCart } from "@/components/storefront/cart-provider";
import { formatPrice } from "@/lib/format";
import { Clock3, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function StickyCartBar() {
  const { cart } = useCart();
  const pathname = usePathname();

  if (!cart?.items.length || pathname.startsWith("/cart") || pathname.startsWith("/checkout")) return null;

  return (
    <div className="fixed inset-x-0 bottom-[76px] z-40 px-3 pb-[env(safe-area-inset-bottom)] md:hidden">
      <div className="mx-auto max-w-md rounded-[24px] border border-[#d7edcc] bg-white/96 p-3 shadow-[0_-12px_34px_rgba(36,49,38,0.16)] backdrop-blur">
        <MinimumOrderProgress cart={cart} compact />
        <div className="mt-3 flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-full bg-[#eef9e8] text-[var(--brand)]">
            <ShoppingBag size={19} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold text-[var(--muted)]">Basket total</p>
            <p className="text-lg font-black leading-none text-[var(--brand-dark)]">{formatPrice(cart.total)}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-[11px] font-bold text-[var(--muted)]">
              <Clock3 size={12} />
              ETA 45-90 min
            </p>
          </div>
          <Link className="rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-black text-white shadow-[0_10px_22px_rgba(101,176,27,0.24)]" href="/checkout">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
