import type { Banner } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

export function OfferBanner({ banner }: { banner: Banner }) {
  return (
    <Link
      className="group grid overflow-hidden rounded-[24px] border border-[#d7edcc] bg-white shadow-soft md:grid-cols-[1.15fr_0.85fr]"
      href={banner.href}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-[#fffdf3] to-[#eaf8df] p-6 md:p-10">
        <div className="absolute -right-12 -top-12 size-40 rounded-full bg-[var(--accent)]/20" />
        <div className="absolute -bottom-16 left-8 size-44 rounded-full bg-[var(--brand)]/10" />
        <div className="relative">
          <p className="inline-flex rounded-full bg-[#ddffd5] px-4 py-2 text-sm font-black uppercase tracking-wide text-[var(--brand-dark)]">
            Limited offer
          </p>
          <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight text-[var(--brand-dark)] md:text-5xl">
            {banner.title}
          </h2>
          <p className="mt-4 max-w-lg text-lg text-[var(--muted)]">{banner.subtitle}</p>
          <span className="mt-7 inline-flex rounded-full bg-[var(--brand)] px-6 py-3 font-bold text-white shadow-[0_12px_28px_rgba(101,176,27,0.24)]">
            View offer
          </span>
        </div>
      </div>
      <div className="relative min-h-64 overflow-hidden bg-[#eaf8df]">
        <Image
          src={banner.image}
          alt="Fresh vegetables offer"
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 42vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#eaf8df] via-transparent to-transparent opacity-70" />
        <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-5 py-4 shadow-soft backdrop-blur">
          <span className="block text-sm font-black text-[var(--brand)]">Fresh picks</span>
          <span className="block text-2xl font-black text-[var(--brand-dark)]">Best prices</span>
        </div>
      </div>
    </Link>
  );
}
