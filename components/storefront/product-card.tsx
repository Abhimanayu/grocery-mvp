import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { OfferBadge } from "@/components/storefront/offer-badge";
import { PriceBlock } from "@/components/storefront/price-block";
import type { Product } from "@/lib/types";
import { Clock3, Sparkles, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const variant = product.variants[0];

  return (
    <article className="card group flex h-full flex-col overflow-hidden bg-white transition duration-200 hover:-translate-y-1 hover:border-[#cbe8bd] hover:shadow-soft">
      <Link className="relative block aspect-square bg-[#f8fffa]" href={`/product/${product.slug}`}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,47,23,0.18)] via-transparent to-transparent" />
        <OfferBadge mrp={variant.mrp} salePrice={variant.salePrice} />
        <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1.5 text-[10px] font-bold text-[var(--brand-dark)] shadow-soft md:px-3 md:py-2 md:text-xs">
          <Sparkles size={14} className="text-[var(--brand)]" />
          Fresh pick
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-2 md:p-4">
        <div className="flex items-start justify-between gap-2">
          <p className="inline-flex max-w-[68%] rounded-full bg-[#eef9e8] px-2 py-1 text-[10px] font-bold text-[var(--brand)] md:px-2.5 md:text-xs">{product.categoryName}</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-[#fff5da] px-1.5 py-1 text-[10px] font-bold text-[#7a5300] md:px-2 md:text-[11px]">
            <Truck size={12} />
            Today
          </span>
        </div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-2 line-clamp-2 min-h-10 text-[14px] font-bold leading-snug text-[var(--brand-dark)] md:min-h-11 md:text-base">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-[13px] text-[var(--muted)] md:text-sm">{variant.unitLabel}</p>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[var(--brand)] md:text-xs">
            <Star size={13} fill="currentColor" />
            {product.rating}
          </span>
        </div>
        <div className="mt-2 grid gap-1 rounded-2xl bg-[#f8fbf6] p-2 text-[10px] font-semibold leading-4 text-[var(--muted)] md:mt-3 md:gap-2 md:p-3 md:text-xs md:leading-5">
          <span className="inline-flex items-center gap-1">
            <Clock3 size={12} />
            Morning sorted
          </span>
          <span className="text-[var(--brand)]">Clean pricing</span>
        </div>
        <div className="mt-auto flex items-end justify-between gap-2 pt-2.5">
          <PriceBlock mrp={variant.mrp} salePrice={variant.salePrice} />
          <AddToCartButton compact variantId={variant.id} />
        </div>
      </div>
    </article>
  );
}
