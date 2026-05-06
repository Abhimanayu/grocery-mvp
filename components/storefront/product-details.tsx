"use client";

import type { ReactNode } from "react";

import { AddToCartButton } from "@/components/storefront/add-to-cart-button";
import { PriceBlock } from "@/components/storefront/price-block";
import { SafeImage } from "@/components/ui/safe-image";
import type { Product } from "@/lib/types";
import { Clock3, Flame, RotateCcw, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useState } from "react";

export function ProductDetails({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const variant = product.variants.find((item) => item.id === variantId) ?? product.variants[0];

  return (
    <section className="container grid gap-4 py-4 pb-24 md:gap-8 md:py-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="section-surface overflow-hidden p-3 md:p-4">
        <div className="relative aspect-square overflow-hidden rounded-[22px] bg-[#eef3e9]">
          <SafeImage src={product.images[0]} alt={product.name} fallbackLabel={product.name} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,47,23,0.12)] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/94 px-4 py-3 shadow-soft backdrop-blur">
            <span className="block text-xs font-black uppercase tracking-wide text-[var(--brand)]">Freshly sorted</span>
            <span className="mt-1 block text-lg font-black text-[var(--brand-dark)]">Daily grocery quality</span>
          </div>
        </div>
      </div>
      <div className="section-surface p-4 md:p-7 lg:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <p className="rounded-full bg-[#eef9e8] px-3 py-1.5 text-sm font-bold text-[var(--brand)]">{product.categoryName}</p>
          <p className="rounded-full bg-[#fff5da] px-3 py-1.5 text-sm font-bold text-[#7a5300]">Same-day in Jaipur</p>
          <p className="inline-flex items-center gap-1 rounded-full bg-[#fff5da] px-3 py-1.5 text-sm font-bold text-[#7a5300]"><Flame size={14} fill="currentColor" /> Fast selling</p>
        </div>
        <h1 className="mt-3 text-balance text-4xl font-black leading-none text-[var(--brand-dark)] md:text-5xl">{product.name}</h1>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#e7f6df] px-3 py-1.5 font-bold text-[var(--brand)]">
            <Star size={15} fill="currentColor" />
            {product.rating}
          </span>
          <span className="text-[var(--muted)]">{product.reviewCount} customer ratings</span>
          <span className="inline-flex items-center gap-1 text-[var(--muted)]">
            <Sparkles size={14} className="text-[var(--brand)]" />
            Handpicked for repeat home orders
          </span>
        </div>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">{product.description}</p>
        <div className="mt-4 flex flex-wrap gap-2 md:hidden">
          <CompactFact text="ETA 45-90 min" />
          <CompactFact text="Only few left today" />
          <CompactFact text="Free above Rs 499" />
        </div>
        <div className="mt-6 hidden gap-3 rounded-[22px] bg-[#f8fbf6] p-4 md:grid md:grid-cols-3">
          <QuickFact icon={<Clock3 size={17} />} title="Delivery ETA" text="45-90 min in active Jaipur zones." />
          <QuickFact icon={<RotateCcw size={17} />} title="Freshness guarantee" text="Support if freshness does not feel right." />
          <QuickFact icon={<ShieldCheck size={17} />} title="COD clarity" text="Pay cash or use online payment at checkout." />
        </div>
        <div className="mt-6">
          <p className="mb-2 text-sm font-bold">Choose pack size</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((item) => (
              <button
                className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                  item.id === variant.id ? "border-[var(--brand)] bg-[#e7f6df] text-[var(--brand)]" : "border-[var(--border)] bg-white hover:border-[#cbe8bd]"
                }`}
                key={item.id}
                onClick={() => setVariantId(item.id)}
              >
                {item.unitLabel}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-[22px] border border-[#e4efdd] bg-white p-4 md:p-5">
          <PriceBlock mrp={variant.mrp} salePrice={variant.salePrice} unitLabel={variant.unitLabel} />
          <div className="mt-5 flex flex-wrap gap-3">
            <AddToCartButton variantId={variant.id} />
            <a className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] px-5 font-bold" href="/checkout">
              Buy now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CompactFact({ text }: { text: string }) {
  return <span className="rounded-full border border-[#d7edcc] bg-white px-3 py-2 text-[11px] font-bold text-[var(--brand-dark)]">{text}</span>;
}

function QuickFact({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_8px_20px_rgba(57,64,74,0.06)]">
      <span className="text-[var(--brand)]">{icon}</span>
      <span className="mt-2 block font-bold text-[var(--brand-dark)]">{title}</span>
      <span className="mt-1 block text-sm text-[var(--muted)]">{text}</span>
    </div>
  );
}
