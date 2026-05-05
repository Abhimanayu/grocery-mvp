import type { Banner } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function OfferBanner({ banner }: { banner: Banner }) {
  return (
    <Link className="section-surface group grid overflow-hidden md:grid-cols-[1.1fr_0.9fr]" href={banner.href}>
      <div className="relative overflow-hidden px-5 py-7 md:px-8 md:py-10">
        <div className="absolute -right-12 top-0 size-40 rounded-full bg-[var(--accent)]/18" />
        <div className="absolute -bottom-20 left-6 size-48 rounded-full bg-[var(--brand)]/10" />
        <div className="relative max-w-xl">
          <p className="inline-flex rounded-full bg-[#ddffd5] px-4 py-2 text-sm font-black uppercase tracking-wide text-[var(--brand-dark)]">
            Limited offer
          </p>
          <h2 className="mt-5 text-balance text-3xl font-black leading-tight text-[var(--brand-dark)] md:text-5xl">
            {banner.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">{banner.subtitle}</p>
          <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 font-bold text-white shadow-[0_12px_28px_rgba(101,176,27,0.24)]">
            View offer
            <ArrowRight size={17} />
          </span>
        </div>
      </div>
      <div className="relative min-h-72 overflow-hidden bg-[#eaf8df]">
        <Image
          src={banner.image}
          alt="Fresh vegetables offer"
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 42vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(234,248,223,0.72)] via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-soft backdrop-blur">
          <span className="block text-sm font-black text-[var(--brand)]">Fresh basket savings</span>
          <span className="block text-2xl font-black text-[var(--brand-dark)]">Built for repeat orders</span>
        </div>
      </div>
    </Link>
  );
}
