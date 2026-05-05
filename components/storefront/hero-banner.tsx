import type { ReactNode } from "react";
import type { Banner } from "@/lib/types";
import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroBanner({ banner }: { banner: Banner }) {
  return (
    <section className="container py-5 md:py-7">
      <div className="section-surface relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_top_left,rgba(101,176,27,0.16),transparent_34rem)]" />
        <div className="relative grid min-h-[520px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 flex items-center px-5 py-8 md:px-8 md:py-10 lg:px-12">
            <div className="max-w-xl">
              <p className="mb-4 inline-flex rounded-full bg-[#ddffd5] px-4 py-2 text-sm font-bold text-[var(--brand-dark)]">
                Foydn Online Grocery
              </p>
              <h1 className="text-balance text-4xl font-black leading-[1.05] text-[var(--brand-dark)] md:text-5xl lg:text-6xl">
                {banner.title}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-[var(--muted)] md:text-lg md:leading-8">{banner.subtitle}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 font-bold text-black shadow-[0_10px_25px_rgba(255,171,16,0.3)]"
                  href={banner.href}
                >
                  Start shopping
                  <ArrowRight size={17} />
                </Link>
                <Link className="rounded-full border border-[#cbe8bd] bg-white px-6 py-3 font-bold text-[var(--brand)]" href="/shop/fresh-vegetables">
                  Fresh vegetables
                </Link>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <HeroStat icon={<Truck size={16} />} title="Same-day" text="Jaipur dispatch" />
                <HeroStat icon={<ShieldCheck size={16} />} title="Packed well" text="Handled with care" />
                <HeroStat icon={<Sparkles size={16} />} title="Free delivery" text="Above Rs 499" />
              </div>
            </div>
          </div>
          <div className="relative min-h-[320px] lg:min-h-full">
            <Image src={banner.image} alt="Fresh grocery hero" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,47,23,0.24)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[rgba(255,255,255,0.08)]" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3 md:bottom-6 md:left-6 md:right-auto">
              <div className="rounded-2xl bg-white/94 px-5 py-4 text-[var(--foreground)] shadow-soft backdrop-blur">
                <span className="block text-sm font-bold text-[var(--brand)]">Morning sorted produce</span>
                <span className="block text-xl font-black text-[var(--brand-dark)]">Delivered with local care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-[#e4efdd] bg-white/88 p-4 shadow-[0_10px_22px_rgba(36,49,38,0.05)] backdrop-blur">
      <span className="inline-flex rounded-full bg-[#eef9e8] p-2 text-[var(--brand)]">{icon}</span>
      <p className="mt-3 text-sm font-black text-[var(--brand-dark)]">{title}</p>
      <p className="text-xs font-semibold text-[var(--muted)]">{text}</p>
    </div>
  );
}
