import type { Category } from "@/lib/types";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:grid-cols-4 md:gap-4">
      {categories.map((category) => (
        <Link
          className="card group overflow-hidden bg-white transition duration-200 hover:-translate-y-1 hover:border-[#cbe8bd] hover:shadow-soft"
          href={`/shop/${category.slug}`}
          key={category.id}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-b-[28px]">
            <Image src={category.image} alt={category.name} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(7,47,23,0.02)] via-transparent to-[rgba(248,119,35,0.12)]" />
            <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-black text-[var(--brand-dark)] shadow-soft">
              <Sparkles size={12} className="text-[var(--brand)]" />
              Best for repeat orders
            </div>
          </div>
          <div className="p-4 md:p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-black text-[var(--brand-dark)]">{category.name}</h3>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{getCategoryHint(category.slug)}</p>
                <p className="mt-2 text-sm font-black text-[var(--brand)]">{category.productCount}+ items</p>
              </div>
              <span className="rounded-full bg-[#eef9e8] p-2 text-[var(--brand)] transition group-hover:bg-[var(--brand)] group-hover:text-white">
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function getCategoryHint(slug: string) {
  switch (slug) {
    case "fresh-vegetables":
      return "Daily sabzi picks with cleaner unit pricing.";
    case "fresh-fruits":
      return "Breakfast fruit and sweet seasonal picks.";
    case "leafy-greens":
      return "Saag, soups, parathas, and lighter meals.";
    case "cut-peeled":
      return "Prep-saving packs for faster weekday cooking.";
    default:
      return "Fresh grocery selected for repeat baskets.";
  }
}
