"use client";

import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { PriceBlock } from "@/components/storefront/price-block";
import type { Product } from "@/lib/types";
import { ShieldCheck, Star, Truck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function ProductDetails({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const variant = product.variants.find((item) => item.id === variantId) ?? product.variants[0];

  return (
    <section className="container grid gap-8 py-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="card overflow-hidden">
        <div className="relative aspect-square bg-[#eef3e9]">
          <Image src={product.images[0]} alt={product.name} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">{product.categoryName}</p>
        <h1 className="mt-2 text-3xl font-black md:text-5xl">{product.name}</h1>
        <div className="mt-3 flex items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1 rounded bg-[#e7f6df] px-2 py-1 font-bold text-[var(--brand)]">
            <Star size={15} fill="currentColor" />
            {product.rating}
          </span>
          <span className="text-[var(--muted)]">{product.reviewCount} customer ratings</span>
        </div>
        <p className="mt-5 max-w-2xl text-[var(--muted)]">{product.description}</p>
        <div className="mt-6">
          <p className="mb-2 text-sm font-bold">Choose pack size</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((item) => (
              <button
                className={`rounded-md border px-4 py-2 text-sm font-bold ${
                  item.id === variant.id ? "border-[var(--brand)] bg-[#e7f6df] text-[var(--brand)]" : "border-[var(--border)] bg-white"
                }`}
                key={item.id}
                onClick={() => setVariantId(item.id)}
              >
                {item.unitLabel}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <PriceBlock mrp={variant.mrp} salePrice={variant.salePrice} unitLabel={variant.unitLabel} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <AddToCartButton variantId={variant.id} />
          <a className="inline-flex h-11 items-center justify-center rounded-md border border-[var(--border)] px-5 font-bold" href="/checkout">
            Buy now
          </a>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Info icon={<Truck size={18} />} title="Same-day delivery" text="Available in active Jaipur service zones." />
          <Info icon={<ShieldCheck size={18} />} title="Freshness refund" text="Issue with produce? Support will resolve quickly." />
        </div>
      </div>
    </section>
  );
}

function Info({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="card flex gap-3 p-4">
      <span className="text-[var(--brand)]">{icon}</span>
      <span>
        <span className="block font-bold">{title}</span>
        <span className="text-sm text-[var(--muted)]">{text}</span>
      </span>
    </div>
  );
}
