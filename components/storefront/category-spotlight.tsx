import type { Category } from "@/lib/types";
import { BadgePercent, Leaf, Truck } from "lucide-react";
import Image from "next/image";

export function CategorySpotlight({ category, title, subtitle }: { category?: Category; title: string; subtitle: string }) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-[#d7edcc] bg-white shadow-soft">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 bg-gradient-to-br from-white via-[#f8fffa] to-[#eaf8df] p-6 md:p-9">
          <p className="inline-flex rounded-full bg-[#ddffd5] px-4 py-2 text-sm font-black uppercase tracking-wide text-[var(--brand-dark)]">
            {category ? "Fresh category" : "Grocery catalog"}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-[var(--brand-dark)] md:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">{subtitle}</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <MiniStat icon={<Leaf size={18} />} value="Daily" label="fresh stock" />
            <MiniStat icon={<Truck size={18} />} value="Same-day" label="delivery" />
            <MiniStat icon={<BadgePercent size={18} />} value="Best" label="local prices" />
          </div>
        </div>
        <div className="relative min-h-[280px] bg-[#eaf8df]">
          <Image
            src={category?.image ?? "https://foydn.in/public/thumbnail_fullimage/1772111984.webp"}
            alt={category?.name ?? "Fresh grocery"}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#eaf8df] via-transparent to-transparent opacity-75" />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-soft backdrop-blur">
            <span className="block text-sm font-black text-[var(--brand)]">Foydn promise</span>
            <span className="block text-xl font-black text-[var(--brand-dark)]">Elegance of freshness</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-[0_8px_20px_rgba(57,64,74,0.07)]">
      <span className="text-[var(--brand)]">{icon}</span>
      <p className="mt-2 text-lg font-black text-[var(--brand-dark)]">{value}</p>
      <p className="text-xs font-semibold text-[var(--muted)]">{label}</p>
    </div>
  );
}
