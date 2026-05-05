import type { Category } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {categories.map((category) => (
        <Link className="card group overflow-hidden bg-white transition duration-200 hover:-translate-y-1 hover:border-[#cbe8bd] hover:shadow-soft" href={`/shop/${category.slug}`} key={category.id}>
          <div className="relative aspect-[4/3]">
            <Image src={category.image} alt={category.name} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 25vw" />
          </div>
          <div className="p-3">
            <h3 className="font-bold">{category.name}</h3>
            <p className="text-sm font-semibold text-[var(--brand)]">{category.productCount} items</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
