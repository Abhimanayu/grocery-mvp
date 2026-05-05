import { banners, blogs, categories, products } from "@/lib/mock-data";

export function getHomeData() {
  return {
    banners,
    categories: categories.toSorted((a, b) => a.sortOrder - b.sortOrder),
    featuredProducts: products.filter((product) => product.isFeatured && product.status === "ACTIVE").slice(0, 8),
    seasonalProducts: products.filter((product) => product.status === "ACTIVE").slice(0, 6),
    blogs
  };
}

export function getCategories() {
  return categories.toSorted((a, b) => a.sortOrder - b.sortOrder);
}

export function getProducts(filters?: { categorySlug?: string; q?: string }) {
  const q = filters?.q?.trim().toLowerCase();

  return products.filter((product) => {
    const categoryMatches = filters?.categorySlug ? product.categorySlug === filters.categorySlug : true;
    const queryMatches = q
      ? [product.name, product.description, product.categoryName, product.brand].some((value) => value.toLowerCase().includes(q))
      : true;

    return product.status === "ACTIVE" && categoryMatches && queryMatches;
  });
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug && product.status === "ACTIVE") ?? null;
}

export function getProductByVariantId(variantId: string) {
  for (const product of products) {
    const variant = product.variants.find((item) => item.id === variantId);
    if (variant) return { product, variant };
  }

  return null;
}

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug) ?? null;
}

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug) ?? null;
}
