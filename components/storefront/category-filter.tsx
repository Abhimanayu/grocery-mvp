import { getCategories } from "@/lib/catalog";
import Link from "next/link";

export function CategoryFilter({ activeSlug }: { activeSlug?: string }) {
  const categories = getCategories();

  return (
    <aside className="section-surface h-fit p-4 lg:sticky lg:top-36">
      <h2 className="text-lg font-black text-[var(--brand-dark)]">Fresh Fruits and Veg.</h2>
      <p className="mt-1 text-sm text-[var(--muted)]">Curated for fast Jaipur grocery orders</p>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:block lg:space-y-2 lg:overflow-visible lg:pb-0">
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
      className={`block min-w-max rounded-full px-4 py-2.5 text-sm font-bold transition lg:rounded-2xl ${
        active ? "bg-[var(--brand)] text-white shadow-[0_8px_18px_rgba(101,176,27,0.18)]" : "bg-[#f8fffa] text-[var(--foreground)] hover:bg-[#ddffd5]"
      }`}
      href={href}
    >
      {label}
    </Link>
  );
}
