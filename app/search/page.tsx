import { ProductGrid } from "@/components/storefront/product-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { getProducts } from "@/lib/catalog";

export const metadata = {
  title: "Search Groceries",
  description: "Search fresh fruits, vegetables, and daily grocery essentials."
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const params = await searchParams;
  const q = params.q ?? "";
  const products = getProducts({ q });

  return (
    <section className="container py-8 pb-24">
      <SectionHeader eyebrow="Search" title={q ? `Results for "${q}"` : "Search groceries"} />
      <ProductGrid products={products} />
    </section>
  );
}
