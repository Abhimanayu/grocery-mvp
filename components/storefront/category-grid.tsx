import type { Category } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {categories.map((category) => (
        <Link
          className="card group overflow-hidden bg-white transition duration-200 hover:-translate-y-1 hover:border-[#cbe8bd] hover:shadow-soft"
          href={`/shop/${category.slug}`}
          key={category.id}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={category.image} alt={category.name} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[rgba(7,47,23,0.5)] to-transparent" />
          </div>
          <div className="p-3.5 md:p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-[var(--brand-dark)]">{category.name}</h3>
                <p className="mt-1 text-sm font-semibold text-[var(--brand)]">{category.productCount}+ items</p>
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
