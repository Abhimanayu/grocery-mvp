"use client";

import { CartDrawer } from "@/components/storefront/cart-drawer";
import { useCart } from "@/components/storefront/cart-provider";
import { getCategories } from "@/lib/catalog";
import { siteConfig } from "@/lib/mock-data";
import { MapPin, Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { TopCategoryNav } from "@/components/storefront/top-category-nav";

export function Header() {
  const [query, setQuery] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count } = useCart();
  const router = useRouter();
  const categories = useMemo(() => getCategories(), []);

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = query.trim();
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
      setMenuOpen(false);
    }
  }

  function closeMenu() {
    setMenuOpen(false);
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
          <button
            className="focus-ring grid size-11 place-items-center rounded-full border border-[var(--border)] bg-[#f8fffa] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link className="relative mr-1 h-12 w-[120px] min-w-[120px] md:mr-2 md:w-[132px] md:min-w-[132px]" href="/" aria-label="Foydn home" onClick={closeMenu}>
            <Image src={siteConfig.logo} alt="Foydn" fill priority className="object-contain" sizes="132px" />
          </Link>
          <button className="focus-ring hidden min-w-[210px] items-center gap-2 rounded-full border border-[#d7edcc] bg-[#f8fffa] px-4 py-2 text-left text-sm lg:flex" type="button">
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
          <Link className="focus-ring hidden size-12 place-items-center rounded-full border border-[var(--border)] bg-white md:grid" href="/account" aria-label="Account" onClick={closeMenu}>
            <UserRound size={20} />
          </Link>
          <button
            className="focus-ring relative grid size-12 place-items-center rounded-full bg-[var(--brand)] text-white shadow-[0_12px_24px_rgba(101,176,27,0.25)] md:size-14"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
            type="button"
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
        {menuOpen ? (
          <div className="border-t border-[#e8f3e1] bg-white lg:hidden">
            <div className="container py-4">
              <div className="rounded-[24px] border border-[#dce9d2] bg-[#f8fffa] p-4 shadow-[0_12px_30px_rgba(36,49,38,0.06)]">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-black uppercase tracking-wide text-[var(--brand)]">Quick shop</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">Browse fresh grocery categories and get back to your basket fast.</p>
                  </div>
                  <button className="rounded-full border border-[var(--border)] bg-white p-2 text-[var(--muted)]" onClick={closeMenu} type="button" aria-label="Close mobile menu">
                    <X size={16} />
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <MobileMenuLink href="/shop" label="All groceries" onClick={closeMenu} />
                  <MobileMenuLink href="/account" label="My account" onClick={closeMenu} />
                  <MobileMenuLink href="/cart" label="Cart" onClick={closeMenu} />
                  <MobileMenuLink href="/checkout" label="Checkout" onClick={closeMenu} />
                </div>
                <div className="mt-4 rounded-2xl bg-white p-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--brand-dark)]">
                    <MapPin size={16} className="text-[var(--brand)]" />
                    Delivering in {siteConfig.city}
                  </div>
                  <div className="mt-3 grid gap-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/shop/${category.slug}`}
                        onClick={closeMenu}
                        className="flex items-center justify-between rounded-2xl border border-[#e4efdd] bg-white px-4 py-3 text-sm font-bold text-[var(--brand-dark)]"
                      >
                        <span>{category.name}</span>
                        <span className="text-[var(--brand)]">{category.productCount}+</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

type MobileMenuLinkProps = {
  href: string;
  label: string;
  onClick: () => void;
};

function MobileMenuLink({ href, label, onClick }: MobileMenuLinkProps) {
  return (
    <Link href={href} onClick={onClick} className="rounded-2xl border border-[#e4efdd] bg-white px-4 py-3 text-sm font-bold text-[var(--brand-dark)]">
      {label}
    </Link>
  );
}
