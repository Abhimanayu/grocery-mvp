import { EmptyState } from "@/components/ui/empty-state";
import { ProductCard } from "@/components/storefront/product-card";
import type { Product } from "@/lib/types";

export function ProductGrid({ products, className = "" }: { products: Product[]; className?: string }) {
  if (!products.length) {
    return <EmptyState title="No products found" text="Try a different category or search term." />;
  }

  return (
    <div className={`grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-3 lg:grid-cols-4 ${className}`}>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
