"use client";

import { Home, LayoutGrid, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/components/storefront/cart-provider";

export function MobileBottomNav() {
  const { count } = useCart();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[var(--border)] bg-white/95 shadow-[0_-10px_30px_rgba(57,64,74,0.08)] backdrop-blur md:hidden">
      <div className="grid grid-cols-4">
        <MobileNavLink href="/" label="Home" icon={<Home size={20} />} />
        <MobileNavLink href="/shop" label="Shop" icon={<LayoutGrid size={20} />} />
        <MobileNavLink href="/cart" label="Cart" icon={<ShoppingCart size={20} />} badge={count} />
        <MobileNavLink href="/account" label="Account" icon={<UserRound size={20} />} />
      </div>
    </nav>
  );
}

function MobileNavLink({ href, label, icon, badge }: { href: string; label: string; icon: React.ReactNode; badge?: number }) {
  return (
    <Link className="relative flex h-16 flex-col items-center justify-center gap-1 text-xs font-semibold" href={href}>
      <span className="relative">
        {icon}
        {badge ? (
          <span className="absolute -right-3 -top-2 grid size-5 place-items-center rounded-full bg-[var(--accent)] text-[10px] text-black">
            {badge}
          </span>
        ) : null}
      </span>
      {label}
    </Link>
  );
}
