import type { ReactNode } from "react";
import { CategoryGrid } from "@/components/storefront/category-grid";
import { HeroBanner } from "@/components/storefront/hero-banner";
import { OfferBanner } from "@/components/storefront/offer-banner";
import { ProductGrid } from "@/components/storefront/product-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { getHomeData } from "@/lib/catalog";
import { siteConfig } from "@/lib/mock-data";
import { Clock3, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const data = getHomeData();
  const hero = data.banners.find((banner) => banner.placement === "hero") ?? data.banners[0];
  const strip = data.banners.find((banner) => banner.placement === "strip");

  return (
    <>
      <HeroBanner banner={hero} />
      <section className="container py-4 md:py-5">
        <div className="grid gap-3 sm:grid-cols-3">
          <TrustCard icon={<Clock3 size={18} />} title="Same-day delivery" text={`${siteConfig.city} service areas`} />
          <TrustCard icon={<ShieldCheck size={18} />} title="Freshness promise" text="Handpicked morning produce" />
          <TrustCard icon={<Sparkles size={18} />} title="Free delivery" text={`Above Rs ${siteConfig.freeDeliveryThreshold}`} />
        </div>
      </section>
      <section className="container py-4 md:py-5">
        <div className="section-surface p-5 md:p-6 lg:p-7">
          <SectionHeader eyebrow="Shop faster" title="Popular categories" action={<Link href="/shop">View all</Link>} />
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
          <ProductGrid products={data.featuredProducts} />
        </div>
      </section>
      <section className="container py-5 pb-24 md:py-7">
        <div className="section-surface p-5 md:p-6 lg:p-7">
          <SectionHeader eyebrow="Seasonal" title="Fresh picks for this week" action={<Link href="/shop?sort=seasonal">Explore</Link>} />
          <ProductGrid products={data.seasonalProducts} />
        </div>
      </section>
    </>
  );
}

function TrustCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="section-surface rounded-2xl p-4 md:p-5">
      <span className="inline-flex rounded-full bg-[#eef9e8] p-2 text-[var(--brand)]">{icon}</span>
      <p className="mt-3 text-sm font-black text-[var(--brand-dark)]">{title}</p>
      <p className="mt-1 text-sm text-[var(--muted)]">{text}</p>
    </div>
  );
}
