"use client";

import { MapPin, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useCart } from "@/components/storefront/cart-provider";
import { CartDrawer } from "@/components/storefront/cart-drawer";
import { TopCategoryNav } from "@/components/storefront/top-category-nav";
import { siteConfig } from "@/lib/mock-data";

export function Header() {
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const { count } = useCart();
  const router = useRouter();

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = query.trim();
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/95 shadow-[0_10px_35px_rgba(57,64,74,0.08)] backdrop-blur">
        <div className="hidden bg-[var(--brand-dark)] py-2 text-sm text-white md:block">
          <div className="container flex items-center justify-between gap-4">
            <span>Fresh fruits and vegetables delivered across Jaipur</span>
            <span className="font-semibold">{siteConfig.phone} | {siteConfig.email}</span>
          </div>
        </div>
        <div className="container flex min-h-[76px] items-center gap-2 py-3 md:gap-3 md:py-4">
          <button className="focus-ring grid size-11 place-items-center rounded-full border border-[var(--border)] bg-[#f8fffa] lg:hidden" aria-label="Open menu">
            <Menu size={20} />
          </button>
          <Link className="relative mr-1 h-12 w-[120px] min-w-[120px] md:mr-2 md:w-[132px] md:min-w-[132px]" href="/" aria-label="Foydn home">
            <Image src={siteConfig.logo} alt="Foydn" fill priority className="object-contain" sizes="132px" />
          </Link>
          <button className="focus-ring hidden min-w-[210px] items-center gap-2 rounded-full border border-[#d7edcc] bg-[#f8fffa] px-4 py-2 text-left text-sm lg:flex">
            <MapPin size={18} className="text-[var(--brand)]" />
            <span>
              <span className="block font-semibold">Delivering in</span>
              <span className="text-[var(--muted)]">{siteConfig.city}</span>
            </span>
          </button>
          <form className="relative min-w-0 flex-1" onSubmit={onSearch}>
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={20} />
            <input
              className="focus-ring h-12 w-full rounded-full border border-[#d7edcc] bg-[#f8fffa] pl-10 pr-4 text-sm shadow-inner md:h-14 md:text-base"
              placeholder="Search milk, potato, apple, spinach..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </form>
          <Link className="focus-ring hidden size-12 place-items-center rounded-full border border-[var(--border)] bg-white md:grid" href="/account" aria-label="Account">
            <UserRound size={20} />
          </Link>
          <button
            className="focus-ring relative grid size-12 place-items-center rounded-full bg-[var(--brand)] text-white shadow-[0_12px_24px_rgba(101,176,27,0.25)] md:size-14"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingCart size={20} />
            {count > 0 ? (
              <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-[var(--accent)] text-xs font-bold text-black ring-2 ring-white">
                {count}
              </span>
            ) : null}
          </button>
        </div>
        <TopCategoryNav />
      </header>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}