import type { Category } from "@/lib/types";

type ShopHeroProps = {
  title: string;
  subtitle: string;
  category?: Category;
};

export function ShopHero({ title, subtitle, category }: ShopHeroProps) {
  return (
    <section className="rounded-[24px] border border-[#d7edcc] bg-gradient-to-br from-white via-[#f8fffa] to-[#eaf8df] p-5 shadow-soft md:p-7">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-wide text-[var(--orange)]">
            {category ? "Category" : "Catalog"}
          </p>
          <h1 className="mt-2 text-3xl font-black text-[var(--brand-dark)] md:text-5xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-[var(--muted)]">{subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center">
          <Stat value="Same day" label="Delivery" />
          <Stat value="Fresh" label="Quality" />
          <Stat value="₹499+" label="Free delivery" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white px-4 py-3 shadow-[0_8px_20px_rgba(57,64,74,0.07)]">
      <p className="text-sm font-black text-[var(--brand)]">{value}</p>
      <p className="mt-1 text-xs font-semibold text-[var(--muted)]">{label}</p>
    </div>
  );
}
