import type { ReactNode } from "react";
import type { Category } from "@/lib/types";
import { BadgePercent, Leaf, Truck } from "lucide-react";
import Image from "next/image";

export function CategorySpotlight({ category, title, subtitle }: { category?: Category; title: string; subtitle: string }) {
  return (
    <section className="section-surface relative overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_0.92fr]">
        <div className="relative z-10 px-5 py-7 md:px-8 md:py-9 lg:px-10">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-[#ddffd5] px-4 py-2 text-sm font-black uppercase tracking-wide text-[var(--brand-dark)]">
              {category ? "Fresh category" : "Grocery catalog"}
            </p>
            <h1 className="mt-5 text-balance text-4xl font-black leading-tight text-[var(--brand-dark)] md:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">{subtitle}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <MiniStat icon={<Leaf size={18} />} value="Morning" label="sorted produce" />
              <MiniStat icon={<Truck size={18} />} value="Same-day" label="Jaipur dispatch" />
              <MiniStat icon={<BadgePercent size={18} />} value="Better" label="basket value" />
            </div>
          </div>
        </div>
        <div className="relative min-h-[300px] bg-[#eaf8df]">
          <Image
            src={category?.image ?? "https://foydn.in/public/thumbnail_fullimage/1776686434.jpg"}
            alt={category?.name ?? "Fresh grocery"}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eaf8df] via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-5 left-5 max-w-[260px] rounded-2xl bg-white/95 px-5 py-4 shadow-soft backdrop-blur">
            <span className="block text-sm font-black text-[var(--brand)]">Foydn promise</span>
            <span className="mt-1 block text-xl font-black text-[var(--brand-dark)]">Thoughtful grocery quality for Jaipur homes</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-[#e4efdd] bg-white p-4 shadow-[0_8px_20px_rgba(57,64,74,0.06)]">
      <span className="text-[var(--brand)]">{icon}</span>
      <p className="mt-2 text-lg font-black text-[var(--brand-dark)]">{value}</p>
      <p className="text-xs font-semibold text-[var(--muted)]">{label}</p>
    </div>
  );
}
