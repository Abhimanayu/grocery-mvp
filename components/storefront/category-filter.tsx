import { getCategories } from "@/lib/catalog";
import Link from "next/link";

export function CategoryFilter({ activeSlug }: { activeSlug?: string }) {
  const categories = getCategories();

  return (
    <aside className="card h-fit bg-white p-4 lg:sticky lg:top-36">
      <h2 className="text-lg font-black text-[var(--brand-dark)]">Fresh Fruits & Veg.</h2>
      <p className="mt-1 text-sm text-[var(--muted)]">Choose a category</p>
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
      className={`block min-w-max rounded-full px-4 py-2 text-sm font-bold lg:rounded-md ${
        active ? "bg-[var(--brand)] text-white" : "bg-[#f8fffa] text-[var(--foreground)] hover:bg-[#ddffd5]"
      }`}
      href={href}
    >
      {label}
    </Link>
  );
}
