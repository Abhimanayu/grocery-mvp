import { getCategories } from "@/lib/catalog";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function TopCategoryNav() {
  const categories = getCategories();

  return (
    <div className="hidden border-t border-[#e8f3e1] bg-white lg:block">
      <div className="container flex h-12 items-center gap-2 overflow-x-auto">
        <Link
          className="flex min-w-max items-center gap-2 rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-black text-white shadow-[0_8px_18px_rgba(101,176,27,0.18)]"
          href="/shop"
        >
          All categories
          <ChevronRight size={16} />
        </Link>
        {categories.map((category) => (
          <Link
            className="min-w-max rounded-full px-4 py-2 text-sm font-bold text-[var(--foreground)] transition hover:bg-[#ddffd5] hover:text-[var(--brand-dark)]"
            href={`/shop/${category.slug}`}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
