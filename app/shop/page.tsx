import { ProductGrid } from "@/components/storefront/product-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { CategoryFilter } from "@/components/storefront/category-filter";
import { CategorySpotlight } from "@/components/storefront/category-spotlight";
import { ShopToolbar } from "@/components/storefront/shop-toolbar";
import { getProducts } from "@/lib/catalog";

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
        subtitle="Browse fresh fruits, vegetables, leafy greens, cut packs, and daily grocery essentials."
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
        <CategoryFilter />
        <div>
          <SectionHeader eyebrow="Today" title={`${products.length} fresh items available`} />
          <ShopToolbar count={products.length} />
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
}
