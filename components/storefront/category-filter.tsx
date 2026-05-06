import { getCategories } from "@/lib/catalog";
import Link from "next/link";

export function CategoryFilter({ activeSlug }: { activeSlug?: string }) {
  const categories = getCategories();

  return (
    <aside className="h-fit lg:sticky lg:top-36">
      <div className="hidden lg:block">
        <h2 className="text-base font-black text-[var(--brand-dark)] md:text-lg">Fresh Fruits and Veg.</h2>
        <p className="mt-1 text-xs text-[var(--muted)] md:text-sm">Curated for fast Jaipur grocery orders</p>
      </div>
      <div className="section-surface flex flex-wrap gap-2 p-3 pb-3 lg:mt-3 lg:block lg:space-y-2 lg:p-4">
        <CategoryLink href="/shop" label="All" active={!activeSlug} />
        {categories.map((category) => (
          <CategoryLink
            active={activeSlug === category.slug}
            href={`/shop/${category.slug}`}
            key={category.id}
            label={category.name}
          />
        ))}
      </div>
    </aside>
  );
}

function CategoryLink({ href, label, active }: { href: string; label: string; active?: boolean }) {
  return (
    <Link
      className={`block min-w-max rounded-full px-4 py-2.5 text-sm font-bold transition md:px-4 md:py-2.5 md:text-sm lg:rounded-2xl ${
        active ? "bg-[var(--brand)] text-white shadow-[0_8px_18px_rgba(101,176,27,0.18)]" : "bg-[#f8fffa] text-[var(--foreground)] hover:bg-[#ddffd5]"
      }`}
      href={href}
    >
      {label}
    </Link>
  );
}
