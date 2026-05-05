import { CategoryGrid } from "@/components/storefront/category-grid";
import { HeroBanner } from "@/components/storefront/hero-banner";
import { OfferBanner } from "@/components/storefront/offer-banner";
import { ProductGrid } from "@/components/storefront/product-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { getHomeData } from "@/lib/catalog";
import { siteConfig } from "@/lib/mock-data";
import Link from "next/link";

export default function HomePage() {
  const data = getHomeData();
  const hero = data.banners.find((banner) => banner.placement === "hero") ?? data.banners[0];
  const strip = data.banners.find((banner) => banner.placement === "strip");

  return (
    <>
      <HeroBanner banner={hero} />
      <section className="container py-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["Same-day delivery", `${siteConfig.city} service areas`],
            ["Freshness promise", "Handpicked morning produce"],
            ["Free delivery", `Above ₹${siteConfig.freeDeliveryThreshold}`]
          ].map(([title, text]) => (
            <div className="card p-4" key={title}>
              <p className="text-sm font-semibold text-[var(--brand)]">{title}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container py-4">
        <SectionHeader
          eyebrow="Shop faster"
          title="Popular categories"
          action={<Link href="/shop">View all</Link>}
        />
        <CategoryGrid categories={data.categories} />
      </section>
      {strip ? (
        <section className="container py-8">
          <OfferBanner banner={strip} />
        </section>
      ) : null}
      <section className="container py-8">
        <SectionHeader
          eyebrow="Today"
          title="Best sellers in Jaipur"
          action={<Link href="/shop">Shop all</Link>}
        />
        <ProductGrid products={data.featuredProducts} />
      </section>
      <section className="container py-8 pb-24">
        <SectionHeader
          eyebrow="Seasonal"
          title="Fresh picks for this week"
          action={<Link href="/shop?sort=seasonal">Explore</Link>}
        />
        <ProductGrid products={data.seasonalProducts} />
      </section>
    </>
  );
}
