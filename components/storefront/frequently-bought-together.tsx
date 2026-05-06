import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { PriceBlock } from "@/components/storefront/price-block";
import { SafeImage } from "@/components/ui/safe-image";
import type { Product } from "@/lib/types";
import { PackagePlus, Sparkles } from "lucide-react";
import Link from "next/link";

export function FrequentlyBoughtTogether({ products }: { products: Product[] }) {
  if (!products.length) return null;

  return (
    <div className="section-surface p-5 md:p-6 lg:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--orange)]">Basket builder</p>
          <h2 className="mt-2 text-2xl font-black leading-tight text-[var(--brand-dark)] md:text-3xl">Frequently bought together</h2>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#eef9e8] px-3 py-2 text-xs font-black text-[var(--brand)]">
          <PackagePlus size={15} />
          Increase basket value
        </span>
      </div>
      <div className="mt-4 grid gap-3 md:grid-cols-3">
        {products.slice(0, 3).map((product) => {
          const variant = product.variants[0];

          return (
            <article className="grid grid-cols-[76px_1fr] gap-3 rounded-[22px] border border-[#dce8d5] bg-white p-3 shadow-[0_10px_24px_rgba(57,64,74,0.05)] md:grid-cols-1" key={product.id}>
              <Link className="relative aspect-square overflow-hidden rounded-2xl bg-[#eef3e9]" href={`/product/${product.slug}`}>
                <SafeImage src={product.images[0]} alt={product.name} fallbackLabel={product.name} fill className="object-cover" sizes="160px" />
                <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/94 px-2 py-1 text-[10px] font-black text-[var(--brand)]">
                  <Sparkles size={11} />
                  Pair
                </span>
              </Link>
              <div className="min-w-0">
                <Link href={`/product/${product.slug}`}>
                  <h3 className="line-clamp-2 text-sm font-black text-[var(--brand-dark)] md:text-base">{product.name}</h3>
                </Link>
                <p className="mt-1 text-xs font-semibold text-[var(--muted)]">{variant.unitLabel} | ETA 45-90 min</p>
                <div className="mt-3 flex items-end justify-between gap-2">
                  <PriceBlock mrp={variant.mrp} salePrice={variant.salePrice} />
                  <AddToCartButton compact variantId={variant.id} />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
