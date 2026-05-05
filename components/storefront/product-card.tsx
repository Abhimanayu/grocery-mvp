import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { OfferBadge } from "@/components/storefront/offer-badge";
import { PriceBlock } from "@/components/storefront/price-block";
import type { Product } from "@/lib/types";
import { Clock3, Heart, Star } from "lucide-react";
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
        <OfferBadge mrp={variant.mrp} salePrice={variant.salePrice} />
        <button className="absolute right-2 top-2 grid size-9 place-items-center rounded-full bg-white/95 text-[var(--muted)] shadow-soft" type="button" aria-label="Save product">
          <Heart size={17} />
        </button>
      </Link>
      <div className="flex flex-1 flex-col p-3.5">
        <p className="inline-flex rounded-full bg-[#eef9e8] px-2.5 py-1 text-xs font-bold text-[var(--brand)]">{product.categoryName}</p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 mt-1 min-h-11 font-bold leading-snug">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="text-sm text-[var(--muted)]">{variant.unitLabel}</p>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--brand)]">
            <Star size={13} fill="currentColor" />
            {product.rating}
          </span>
        </div>
        <div className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[var(--muted)]">
          <Clock3 size={13} />
          Today delivery
        </div>
        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <PriceBlock mrp={variant.mrp} salePrice={variant.salePrice} />
          <AddToCartButton compact variantId={variant.id} />
        </div>
      </div>
    </article>
  );
}
