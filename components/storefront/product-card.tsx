import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { OfferBadge } from "@/components/storefront/offer-badge";
import { PriceBlock } from "@/components/storefront/price-block";
import { SafeImage } from "@/components/ui/safe-image";
import type { Product } from "@/lib/types";
import { Clock3, Flame, Sparkles, Star, Truck } from "lucide-react";
import Link from "next/link";

export function ProductCard({ product }: { product: Product }) {
  const variant = product.variants[0];
  const categoryLabel = product.categoryName
    .replace("Fresh Vegetables", "Veg")
    .replace("Fresh Fruits", "Fruit")
    .replace("Leafy Greens", "Leafy")
    .replace("Cut & Peeled", "Cut");
  const isFastSelling = product.isFeatured || product.reviewCount >= 50;
  const onlyFewLeft = variant.stockQty <= 35;

  return (
    <article className="card group flex h-full flex-col overflow-hidden bg-white transition duration-200 hover:-translate-y-1 hover:border-[#cbe8bd] hover:shadow-soft">
      <Link className="relative block aspect-square bg-[#f8fffa]" href={`/product/${product.slug}`}>
        <SafeImage
          src={product.images[0]}
          alt={product.name}
          fallbackLabel={product.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,47,23,0.18)] via-transparent to-transparent" />
        <OfferBadge mrp={variant.mrp} salePrice={variant.salePrice} />
        {isFastSelling ? (
          <span className="absolute left-1.5 top-10 inline-flex items-center gap-1 rounded-full bg-[#fff5da] px-2 py-1 text-[9px] font-black text-[#7a5300] shadow-soft md:left-2 md:top-12 md:text-xs">
            <Flame size={11} fill="currentColor" />
            Fast selling
          </span>
        ) : null}
        <span className="absolute right-1.5 top-1.5 inline-flex items-center gap-1 rounded-full bg-white/95 px-2 py-1 text-[9px] font-bold text-[var(--brand-dark)] shadow-soft md:right-2 md:top-2 md:px-3 md:py-2 md:text-xs">
          <Sparkles size={12} className="text-[var(--brand)] md:size-[14px]" />
          Fresh pick
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-2.5 md:p-4">
        <div className="flex items-start justify-between gap-1.5">
          <p className="line-clamp-1 rounded-full bg-[#eef9e8] px-2 py-1 text-[10px] font-bold text-[var(--brand)] md:px-2.5 md:text-xs">{categoryLabel}</p>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#fff5da] px-1.5 py-1 text-[9px] font-bold text-[#7a5300] md:px-2 md:text-[11px]">
            <Truck size={12} />
            Today
          </span>
        </div>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-2 line-clamp-2 min-h-9 text-sm font-black leading-tight text-[var(--brand-dark)] md:min-h-11 md:text-base">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-xs text-[var(--muted)] md:text-sm">{variant.unitLabel}</p>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[var(--brand)] md:text-xs">
            <Star size={13} fill="currentColor" />
            {product.rating}
          </span>
        </div>
        <div className="mt-2 grid gap-1 rounded-2xl bg-[#f8fbf6] p-2 text-[10px] font-semibold leading-4 text-[var(--muted)] md:mt-3 md:gap-2 md:p-3 md:text-xs md:leading-5">
          <span className="inline-flex items-center gap-1">
            <Clock3 size={12} />
            Morning sorted
          </span>
          <span className="text-[var(--brand)]">{onlyFewLeft ? "Only few left" : "Clean pricing"}</span>
        </div>
        <div className="mt-auto flex flex-col items-stretch gap-2 pt-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0 flex-1">
            <PriceBlock mrp={variant.mrp} salePrice={variant.salePrice} />
          </div>
          <div className="flex w-full justify-end sm:w-auto">
            <AddToCartButton compact variantId={variant.id} />
          </div>
        </div>
      </div>
    </article>
  );
}
