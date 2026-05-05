import type { Banner } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export function HeroBanner({ banner }: { banner: Banner }) {
  return (
    <section className="container py-6">
      <div className="relative grid min-h-[470px] overflow-hidden rounded-[28px] border border-[#d7edcc] bg-white shadow-soft lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10 flex items-center bg-gradient-to-br from-white via-[#f8fffa] to-[#eaf8df] p-6 md:p-10 lg:p-12">
          <div className="max-w-xl">
            <p className="mb-4 inline-flex rounded-full bg-[#ddffd5] px-4 py-2 text-sm font-bold text-[var(--brand-dark)]">
              Foydn Online Grocery
            </p>
            <h1 className="text-balance text-4xl font-black leading-tight text-[var(--brand-dark)] md:text-6xl">{banner.title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">{banner.subtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="rounded-full bg-[var(--accent)] px-6 py-3 font-bold text-black shadow-[0_10px_25px_rgba(255,171,16,0.3)]" href={banner.href}>
                Start shopping
              </Link>
              <Link className="rounded-full border border-[#cbe8bd] bg-white px-6 py-3 font-bold text-[var(--brand)]" href="/shop/fresh-vegetables">
                Fresh vegetables
              </Link>
            </div>
          </div>
        </div>
        <div className="relative min-h-[300px] lg:min-h-full">
          <Image src={banner.image} alt="" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-[rgba(101,176,27,0.25)] lg:to-transparent" />
          <div className="absolute bottom-5 left-5 rounded-2xl bg-white/92 px-5 py-4 text-[var(--foreground)] shadow-soft backdrop-blur">
            <span className="block text-sm font-bold text-[var(--brand)]">Save more today</span>
            <span className="block text-2xl font-black">Free delivery ₹499+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
