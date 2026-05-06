import type { ReactNode } from "react";
import { CategoryGrid } from "@/components/storefront/category-grid";
import { HeroBanner } from "@/components/storefront/hero-banner";
import { OfferBanner } from "@/components/storefront/offer-banner";
import { ProductGrid } from "@/components/storefront/product-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { getHomeData } from "@/lib/catalog";
import { siteConfig } from "@/lib/mock-data";
import { ArrowRight, Clock3, MessageCircleMore, ShieldCheck, WalletCards } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const data = getHomeData();
  const hero = data.banners.find((banner) => banner.placement === "hero") ?? data.banners[0];
  const strip = data.banners.find((banner) => banner.placement === "strip");

  return (
    <>
      <HeroBanner banner={hero} />
      <section className="container py-4 md:py-5">
        <div className="section-surface overflow-hidden p-4 md:p-6">
          <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--orange)]">Quick basket</p>
              <h2 className="mt-2 text-balance text-[1.9rem] font-black leading-tight text-[var(--brand-dark)] md:text-3xl">
                Faster grocery ordering for repeat household needs
              </h2>
              <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                Built around the real Foydn use case: quick fruit and sabzi browsing, cleaner pricing, same-day Jaipur dispatch, and easy repeat ordering.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <MetricPill icon={<Clock3 size={15} />} text="Same-day Jaipur delivery" />
                <MetricPill icon={<WalletCards size={15} />} text={`Min basket Rs ${siteConfig.minimumOrder}`} />
                <MetricPill icon={<ShieldCheck size={15} />} text={`Free above Rs ${siteConfig.freeDeliveryThreshold}`} />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <TrustCard icon={<Clock3 size={18} />} title="Same-day delivery" text={`${siteConfig.city} service areas`} />
              <TrustCard icon={<ShieldCheck size={18} />} title="Freshness promise" text="Handpicked morning produce" />
              <TrustCard icon={<MessageCircleMore size={18} />} title="WhatsApp support" text="Fast help for repeat orders" />
            </div>
          </div>
        </div>
      </section>
      <section className="container py-4 md:py-5">
        <div className="section-surface p-5 md:p-6 lg:p-7">
          <SectionHeader eyebrow="Shop faster" title="Browse by category" action={<Link href="/shop">View all</Link>} />
          <CategoryGrid categories={data.categories} />
        </div>
      </section>
      {strip ? (
        <section className="container py-5 md:py-7">
          <OfferBanner banner={strip} />
        </section>
      ) : null}
      <section className="container py-5 md:py-7">
        <div className="section-surface p-5 md:p-6 lg:p-7">
          <SectionHeader eyebrow="Today" title="Best sellers in Jaipur" action={<Link href="/shop">Shop all</Link>} />
          <div className="mb-5 flex flex-wrap gap-2 text-xs font-black text-[var(--brand-dark)]">
            <span className="rounded-full bg-[#eef9e8] px-3 py-2">High repeat purchase</span>
            <span className="rounded-full bg-[#fff5da] px-3 py-2">Good for daily cooking</span>
            <span className="rounded-full bg-white px-3 py-2">Fast-moving fresh stock</span>
          </div>
          <ProductGrid products={data.featuredProducts} />
        </div>
      </section>
      <section className="container py-5 pb-24 md:py-7">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="section-surface p-5 md:p-6 lg:p-7">
            <SectionHeader eyebrow="Seasonal" title="Fresh picks for this week" action={<Link href="/shop?sort=seasonal">Explore</Link>} />
            <ProductGrid products={data.seasonalProducts} />
          </div>
          <div className="section-surface p-5 md:p-6 lg:p-7">
            <SectionHeader eyebrow="Support" title="Helpful before checkout" />
            <div className="grid gap-3">
              <ExperienceCard title="Free delivery unlock" text={`Add more than Rs ${siteConfig.freeDeliveryThreshold} to unlock free delivery and better repeat-basket value.`} />
              <ExperienceCard title="Need quick help?" text={`Use WhatsApp on ${siteConfig.whatsapp} for item checks, support, or bulk household requirements.`} />
              <Link href="/shop" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-5 py-3 text-sm font-black text-white shadow-[0_12px_24px_rgba(101,176,27,0.24)]">
                Continue shopping
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-[#dbe8d5] bg-white p-4 md:p-5">
      <span className="inline-flex rounded-full bg-[#eef9e8] p-2 text-[var(--brand)]">{icon}</span>
      <p className="mt-3 text-sm font-black text-[var(--brand-dark)]">{title}</p>
      <p className="mt-1 text-sm text-[var(--muted)]">{text}</p>
    </div>
  );
}

function MetricPill({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#dce8d5] bg-white px-3 py-2 text-xs font-black text-[var(--brand-dark)]">
      <span className="text-[var(--brand)]">{icon}</span>
      {text}
    </span>
  );
}

function ExperienceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[24px] border border-[#dce8d5] bg-[#f8fffa] p-4">
      <p className="text-base font-black text-[var(--brand-dark)]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
    </div>
  );
}
