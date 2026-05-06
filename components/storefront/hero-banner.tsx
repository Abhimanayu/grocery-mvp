import type { ReactNode } from "react";
import type { Banner } from "@/lib/types";
import { ArrowRight, ShieldCheck, Sparkles, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HeroBanner({ banner }: { banner: Banner }) {
  return (
    <section className="container py-3 md:py-7">
      <div className="section-surface relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_top_left,rgba(101,176,27,0.16),transparent_34rem)]" />
        <div className="relative grid min-h-[auto] lg:min-h-[520px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 flex min-w-0 items-center px-4 py-5 md:px-8 md:py-10 lg:px-12">
            <div className="min-w-0 max-w-xl">
              <p className="mb-3 inline-flex rounded-full bg-[#ddffd5] px-3 py-1.5 text-xs font-bold text-[var(--brand-dark)] md:mb-4 md:px-4 md:py-2 md:text-sm">
                Foydn Online Grocery
              </p>
              <h1 className="text-balance break-words text-[2.15rem] font-black leading-[0.98] text-[var(--brand-dark)] md:text-5xl lg:text-6xl">
                {banner.title}
              </h1>
              <p className="mt-3 max-w-xl text-base leading-7 text-[var(--muted)] md:mt-4 md:text-lg md:leading-8">{banner.subtitle}</p>
              <div className="mt-5 flex flex-wrap gap-2.5 md:mt-7 md:gap-3">
                <Link
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-black shadow-[0_10px_25px_rgba(255,171,16,0.3)] md:px-6 md:text-base"
                  href={banner.href}
                >
                  Start shopping
                  <ArrowRight size={17} />
                </Link>
                <Link className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#cbe8bd] bg-white px-5 py-3 text-sm font-bold text-[var(--brand)] md:px-6 md:text-base" href="/shop/fresh-vegetables">
                  Fresh vegetables
                </Link>
              </div>
              <div className="mt-5 grid gap-2.5 sm:mt-7 sm:grid-cols-3 md:gap-3">
                <HeroStat icon={<Truck size={16} />} title="Same-day" text="Jaipur dispatch" />
                <HeroStat icon={<ShieldCheck size={16} />} title="Packed well" text="Handled with care" />
                <HeroStat icon={<Sparkles size={16} />} title="Free delivery" text="Above Rs 499" />
              </div>
            </div>
          </div>
          <div className="relative hidden min-h-[240px] lg:block lg:min-h-full">
            <Image src={banner.image} alt="Fresh grocery hero" fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 58vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,47,23,0.24)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[rgba(255,255,255,0.08)]" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-3 md:bottom-6 md:left-6 md:right-auto">
              <div className="rounded-2xl bg-white/94 px-4 py-3 text-[var(--foreground)] shadow-soft backdrop-blur md:px-5 md:py-4">
                <span className="block text-xs font-bold text-[var(--brand)] md:text-sm">Morning sorted produce</span>
                <span className="block text-lg font-black text-[var(--brand-dark)] md:text-xl">Delivered with local care</span>
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
    <div className="rounded-2xl border border-[#e4efdd] bg-white/88 p-3 shadow-[0_10px_22px_rgba(36,49,38,0.05)] backdrop-blur sm:p-4">
      <span className="inline-flex rounded-full bg-[#eef9e8] p-2 text-[var(--brand)]">{icon}</span>
      <p className="mt-2 text-sm font-black text-[var(--brand-dark)]">{title}</p>
      <p className="text-xs font-semibold text-[var(--muted)]">{text}</p>
    </div>
  );
}
