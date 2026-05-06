import { ProductGrid } from "@/components/storefront/product-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { CategoryFilter } from "@/components/storefront/category-filter";
import { CategorySpotlight } from "@/components/storefront/category-spotlight";
import { SavingsClub } from "@/components/storefront/savings-club";
import { ShopToolbar } from "@/components/storefront/shop-toolbar";
import { getProducts } from "@/lib/catalog";
import Link from "next/link";

export const metadata = {
  title: "Shop Fresh Groceries",
  description: "Browse fresh fruits, vegetables, leafy greens, and cut packs for Jaipur delivery."
};

export default function ShopPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  return <ShopContent searchParams={searchParams} />;
}

async function ShopContent({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const products = getProducts({ q: params.q });

  return (
    <section className="container py-6 pb-24">
      <CategorySpotlight
        title={params.q ? `Results for "${params.q}"` : "Shop all groceries"}
        subtitle="Browse fruits, vegetables, leafy greens, cut packs, and daily kitchen staples with clearer pricing and faster Jaipur delivery."
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
        <CategoryFilter />
        <div className="section-surface p-4 md:p-6">
          <SectionHeader eyebrow="Today" title="Fresh picks ready for Jaipur" />
          <div className="mb-4 flex flex-wrap gap-2 text-xs font-black text-[var(--brand-dark)]">
            <Link className="rounded-full bg-[#eef9e8] px-3 py-2" href="/search?q=potato">Daily sabzi</Link>
            <Link className="rounded-full bg-[#fff5da] px-3 py-2" href="/shop/fresh-fruits">Breakfast fruit</Link>
            <Link className="rounded-full bg-white px-3 py-2" href="/shop/cut-peeled">Prep-saving packs</Link>
          </div>
          <ShopToolbar count={products.length} />
          <ProductGrid products={products} />
        </div>
      </div>
      <div className="mt-6">
        <SavingsClub />
      </div>
    </section>
  );
}
