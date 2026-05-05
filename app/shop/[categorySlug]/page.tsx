import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryFilter } from "@/components/storefront/category-filter";
import { ProductGrid } from "@/components/storefront/product-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { CategorySpotlight } from "@/components/storefront/category-spotlight";
import { ShopToolbar } from "@/components/storefront/shop-toolbar";
import { getCategoryBySlug, getProducts } from "@/lib/catalog";

type CategoryPageProps = {
  params: Promise<{ categorySlug: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};

  return {
    title: `${category.name} Online in Jaipur`,
    description: `Buy ${category.name.toLowerCase()} online with same-day grocery delivery in Jaipur.`
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const products = getProducts({ categorySlug });

  return (
    <section className="container py-6 pb-24">
      <CategorySpotlight
        category={category}
        title={category.name}
        subtitle={`${category.name} selected for Jaipur homes, with clear units, offers, and same-day delivery.`}
      />
      <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
        <CategoryFilter activeSlug={category.slug} />
        <div>
          <SectionHeader eyebrow="Available now" title={`${products.length} ${category.name.toLowerCase()} items`} />
          <ShopToolbar count={products.length} />
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
}
