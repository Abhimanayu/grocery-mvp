import type { MetadataRoute } from "next";
import { getCategories, getProducts } from "@/lib/catalog";
import { blogs, siteConfig } from "@/lib/mock-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/shop", "/about", "/contact", "/faqs", "/terms-conditions", "/privacy-policy", "/shipping-policy", "/refund-policy", "/blogs"];
  const urls: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7
  }));

  for (const category of getCategories()) {
    urls.push({
      url: `${siteConfig.url}/shop/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    });
  }

  for (const product of getProducts()) {
    urls.push({
      url: `${siteConfig.url}/product/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    });
  }

  for (const blog of blogs) {
    urls.push({
      url: `${siteConfig.url}/blog/${blog.slug}`,
      lastModified: new Date(blog.publishedAt),
      changeFrequency: "monthly",
      priority: 0.5
    });
  }

  return urls;
}
