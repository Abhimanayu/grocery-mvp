import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/storefront/product-details";
import { ProductGrid } from "@/components/storefront/product-grid";
import { SectionHeader } from "@/components/ui/section-header";
import { getProductBySlug, getProducts } from "@/lib/catalog";
import { siteConfig } from "@/lib/mock-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.seoTitle ?? `${product.name} Online in Jaipur`,
    description: product.seoDescription ?? product.description,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.images
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getProducts({ categorySlug: product.categorySlug }).filter((item) => item.id !== product.id).slice(0, 4);
  const variant = product.variants[0];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    brand: product.brand,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: variant.salePrice,
      availability: variant.stockQty > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      url: `${siteConfig.url}/product/${product.slug}`
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ProductDetails product={product} />
      <section className="container py-8 pb-24">
        <SectionHeader eyebrow="More like this" title="Related products" />
        <ProductGrid products={related} />
      </section>
    </>
  );
}
