"use client";

import { CartDrawer } from "@/components/storefront/cart-drawer";
import { useCart } from "@/components/storefront/cart-provider";
import { getCategories } from "@/lib/catalog";
import { siteConfig } from "@/lib/mock-data";
import { ChevronRight, MapPin, Menu, Search, ShoppingCart, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import { TopCategoryNav } from "@/components/storefront/top-category-nav";

export function Header() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationLabel, setLocationLabel] = useState(`Delivering in ${siteConfig.city}`);
  const [locationStatus, setLocationStatus] = useState("");
  const { count } = useCart();
  const router = useRouter();
  const pathname = usePathname();
  const categories = useMemo(() => getCategories(), []);

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const q = String(new FormData(form).get("q") ?? "").trim();
    if (q) {
      router.push(`/search?q=${encodeURIComponent(q)}`);
      form.reset();
      setMenuOpen(false);
    }
  }

  function useCurrentLocation() {
    if (!("geolocation" in navigator)) {
      setLocationStatus("Current location is not available on this browser.");
      return;
    }

    setLocationStatus("Detecting current location...");
    navigator.geolocation.getCurrentPosition(
      () => {
        setLocationLabel("Current location selected");
        setLocationStatus("We will use your live location at checkout.");
      },
      () => {
        setLocationStatus("Please allow location access to auto-pick delivery area.");
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
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
        <div className="container flex flex-wrap items-center gap-2 py-2.5 max-[380px]:gap-1.5 md:min-h-[76px] md:flex-nowrap md:gap-3 md:py-4">
          <button
            className="focus-ring order-1 grid size-11 place-items-center rounded-full border border-[var(--border)] bg-[#f8fffa] max-[380px]:size-10 md:size-11 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <Link className="relative order-2 h-10 w-[112px] min-w-0 flex-1 justify-self-center max-[380px]:h-9 max-[380px]:w-[96px] md:mr-2 md:h-12 md:w-[132px] md:min-w-[132px] md:flex-none" href="/" aria-label="Foydn home" onClick={closeMenu}>
            <Image src={siteConfig.logo} alt="Foydn" fill priority className="object-contain" sizes="132px" />
          </Link>
          <button className="focus-ring hidden min-w-[210px] items-center gap-2 rounded-full border border-[#d7edcc] bg-[#f8fffa] px-4 py-2 text-left text-sm lg:flex" type="button" onClick={useCurrentLocation}>
            <MapPin size={18} className="text-[var(--brand)]" />
            <span>
              <span className="block font-semibold">{locationLabel}</span>
              <span className="text-[var(--muted)]">Use current location</span>
            </span>
          </button>
          <form key={pathname} className="relative order-4 basis-full md:order-3 md:basis-auto md:min-w-0 md:flex-1" onSubmit={onSearch}>
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={20} />
            <input
              className="focus-ring h-12 w-full rounded-full border border-[#d7edcc] bg-[#f8fffa] pl-11 pr-16 text-sm shadow-inner max-[380px]:h-10 max-[380px]:pl-10 max-[380px]:pr-14 max-[380px]:text-xs md:h-14 md:text-base"
              name="q"
              placeholder="Search milk, potato, apple, spinach..."
            />
            <button
              className="absolute right-1.5 top-1/2 h-9 -translate-y-1/2 rounded-full bg-[var(--brand)] px-4 text-xs font-black text-white shadow-[0_10px_20px_rgba(101,176,27,0.2)] max-[380px]:h-8 max-[380px]:px-3 md:h-11 md:px-5 md:text-sm"
              type="submit"
            >
              Go
            </button>
          </form>
          <Link className="focus-ring hidden size-12 place-items-center rounded-full border border-[var(--border)] bg-white md:grid" href="/account" aria-label="Account" onClick={closeMenu}>
            <UserRound size={20} />
          </Link>
          <button
            className="focus-ring order-3 relative grid size-11 place-items-center rounded-full bg-[var(--brand)] text-white shadow-[0_12px_24px_rgba(101,176,27,0.25)] max-[380px]:size-10 md:order-5 md:size-14"
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
          <button className="order-5 flex basis-full items-center gap-2 rounded-full border border-[#e4efdd] bg-[#f8fffa] px-3 py-2.5 text-left text-sm font-semibold text-[var(--brand-dark)] lg:hidden" type="button" onClick={useCurrentLocation}>
            <MapPin size={16} className="text-[var(--brand)]" />
            <span>{locationLabel}</span>
          </button>
          {locationStatus ? <p className="order-6 basis-full px-2 text-xs font-semibold text-[var(--muted)] lg:hidden">{locationStatus}</p> : null}
        </div>
        <TopCategoryNav />
        {menuOpen ? (
          <div className="border-t border-[#e8f3e1] bg-[#f7fbf4] lg:hidden">
            <div className="container py-3">
              <div className="rounded-[26px] border border-[#dce9d2] bg-white p-4 shadow-[0_14px_32px_rgba(36,49,38,0.08)]">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-[var(--brand)]">Quick shop</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">Fresh categories, basket and checkout in one tap.</p>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2.5">
                  <MobileMenuLink href="/shop" label="All groceries" onClick={closeMenu} />
                  <MobileMenuLink href="/cart" label="My basket" onClick={closeMenu} />
                  <MobileMenuLink href="/checkout" label="Checkout" onClick={closeMenu} />
                  <MobileMenuLink href="/account" label="Account" onClick={closeMenu} />
                </div>
                <div className="mt-4 rounded-[22px] bg-[#f8fffa] p-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--brand-dark)]">
                    <MapPin size={16} className="text-[var(--brand)]" />
                    {locationLabel}
                  </div>
                  <button className="mt-3 w-full rounded-2xl border border-[#d7edcc] bg-white px-3 py-3 text-left text-sm font-black text-[var(--brand)]" type="button" onClick={useCurrentLocation}>
                    Use my current location
                  </button>
                  {locationStatus ? <p className="mt-2 text-xs font-semibold text-[var(--muted)]">{locationStatus}</p> : null}
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/shop/${category.slug}`}
                        onClick={closeMenu}
                        className="flex min-h-16 flex-col justify-between rounded-2xl border border-[#e4efdd] bg-white px-3 py-3 text-sm font-bold text-[var(--brand-dark)] shadow-[0_8px_18px_rgba(36,49,38,0.04)]"
                      >
                        <span className="leading-5">{category.name}</span>
                        <span className="mt-2 text-xs font-black text-[var(--brand)]">{category.productCount}+ items</span>
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
    <Link href={href} onClick={onClick} className="flex min-h-12 items-center justify-between rounded-2xl border border-[#e4efdd] bg-white px-3 py-3 text-sm font-bold text-[var(--brand-dark)] shadow-[0_8px_18px_rgba(36,49,38,0.04)]">
      <span>{label}</span>
      <ChevronRight size={16} className="text-[var(--brand)]" />
    </Link>
  );
}
