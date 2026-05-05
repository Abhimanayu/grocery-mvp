import type { Banner, BlogPost, Category, Product } from "@/lib/types";

export const siteConfig = {
  name: "Foydn Fresh",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
  logo: "https://foydn.in/public/assets/images/logo.png",
  phone: "+91-7412916917",
  whatsapp: "+917412916917",
  email: "info@foydn.in",
  city: "Jaipur",
  minimumOrder: 199,
  freeDeliveryThreshold: 499,
  deliveryFee: 25
};

export const categories: Category[] = [
  {
    id: "cat-veg",
    name: "Fresh Vegetables",
    slug: "fresh-vegetables",
    image: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=900&q=80",
    sortOrder: 1,
    productCount: 18
  },
  {
    id: "cat-fruit",
    name: "Fresh Fruits",
    slug: "fresh-fruits",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=900&q=80",
    sortOrder: 2,
    productCount: 14
  },
  {
    id: "cat-leafy",
    name: "Leafy Greens",
    slug: "leafy-greens",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=80",
    sortOrder: 3,
    productCount: 9
  },
  {
    id: "cat-cut",
    name: "Cut & Peeled",
    slug: "cut-peeled",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    sortOrder: 4,
    productCount: 7
  }
];

const productImages = {
  potato: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
  onion: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=900&q=80",
  tomato: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80",
  carrot: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=900&q=80",
  apple: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=900&q=80",
  banana: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=900&q=80",
  spinach: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=80",
  salad: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80"
};

export const products: Product[] = [
  {
    id: "prod-potato",
    name: "Potato",
    slug: "potato",
    description: "Firm, clean potatoes for curries, fries, roasting, and daily cooking.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: true,
    images: [productImages.potato],
    rating: 4.7,
    reviewCount: 82,
    seoTitle: "Buy Potato Online in Jaipur",
    seoDescription: "Order fresh potatoes online with quick grocery delivery in Jaipur.",
    variants: [
      { id: "var-potato-1kg", sku: "FOY-POTATO-1KG", unitLabel: "1 kg", mrp: 30, salePrice: 22, stockQty: 120, minQty: 1, maxQty: 20, isActive: true },
      { id: "var-potato-5kg", sku: "FOY-POTATO-5KG", unitLabel: "5 kg", mrp: 150, salePrice: 105, stockQty: 30, minQty: 1, maxQty: 10, isActive: true }
    ]
  },
  {
    id: "prod-onion",
    name: "Onion Red",
    slug: "onion-red",
    description: "Sharp, fresh red onions selected for long shelf life and strong flavor.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: true,
    images: [productImages.onion],
    rating: 4.6,
    reviewCount: 64,
    variants: [
      { id: "var-onion-1kg", sku: "FOY-ONION-1KG", unitLabel: "1 kg", mrp: 40, salePrice: 32, stockQty: 90, minQty: 1, maxQty: 20, isActive: true }
    ]
  },
  {
    id: "prod-tomato",
    name: "Tomato",
    slug: "tomato",
    description: "Juicy tomatoes for gravies, salads, chutneys, and fresh cooking.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: true,
    images: [productImages.tomato],
    rating: 4.5,
    reviewCount: 58,
    variants: [
      { id: "var-tomato-500g", sku: "FOY-TOMATO-500G", unitLabel: "500 g", mrp: 30, salePrice: 24, stockQty: 75, minQty: 1, maxQty: 15, isActive: true }
    ]
  },
  {
    id: "prod-carrot",
    name: "Red Carrot",
    slug: "red-carrot",
    description: "Sweet seasonal carrots for juice, salad, halwa, and everyday meals.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.carrot],
    rating: 4.5,
    reviewCount: 41,
    variants: [
      { id: "var-carrot-500g", sku: "FOY-CARROT-500G", unitLabel: "500 g", mrp: 45, salePrice: 36, stockQty: 44, minQty: 1, maxQty: 12, isActive: true }
    ]
  },
  {
    id: "prod-apple",
    name: "Apple Kinnaur",
    slug: "apple-kinnaur",
    description: "Crisp, sweet apples packed carefully for safe doorstep delivery.",
    categorySlug: "fresh-fruits",
    categoryName: "Fresh Fruits",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: true,
    images: [productImages.apple],
    rating: 4.8,
    reviewCount: 103,
    variants: [
      { id: "var-apple-500g", sku: "FOY-APPLE-500G", unitLabel: "500 g", mrp: 130, salePrice: 105, stockQty: 52, minQty: 1, maxQty: 10, isActive: true }
    ]
  },
  {
    id: "prod-banana",
    name: "Banana",
    slug: "banana",
    description: "Naturally sweet bananas, ideal for breakfast, smoothies, and kids.",
    categorySlug: "fresh-fruits",
    categoryName: "Fresh Fruits",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: true,
    images: [productImages.banana],
    rating: 4.6,
    reviewCount: 77,
    variants: [
      { id: "var-banana-dozen", sku: "FOY-BANANA-DOZEN", unitLabel: "1 dozen", mrp: 75, salePrice: 58, stockQty: 66, minQty: 1, maxQty: 8, isActive: true }
    ]
  },
  {
    id: "prod-spinach",
    name: "Spinach",
    slug: "spinach",
    description: "Washed leafy spinach bunches for soups, curries, parathas, and salads.",
    categorySlug: "leafy-greens",
    categoryName: "Leafy Greens",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.spinach],
    rating: 4.4,
    reviewCount: 36,
    variants: [
      { id: "var-spinach-250g", sku: "FOY-SPINACH-250G", unitLabel: "250 g", mrp: 35, salePrice: 26, stockQty: 38, minQty: 1, maxQty: 10, isActive: true }
    ]
  },
  {
    id: "prod-salad",
    name: "Mixed Salad Pack",
    slug: "mixed-salad-pack",
    description: "Ready-to-use salad vegetables cut fresh for quick healthy meals.",
    categorySlug: "cut-peeled",
    categoryName: "Cut & Peeled",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: true,
    images: [productImages.salad],
    rating: 4.7,
    reviewCount: 29,
    variants: [
      { id: "var-salad-300g", sku: "FOY-SALAD-300G", unitLabel: "300 g", mrp: 99, salePrice: 79, stockQty: 24, minQty: 1, maxQty: 6, isActive: true }
    ]
  }
];

export const banners: Banner[] = [
  {
    id: "banner-hero",
    title: "Freshness at your door",
    subtitle: "Jaipur's trusted fruits and vegetables, handpicked daily and delivered with local care.",
    image: "https://foydn.in/public/thumbnail_fullimage/1772111984.webp",
    href: "/shop",
    placement: "hero"
  },
  {
    id: "banner-free-delivery",
    title: "Free delivery above ₹499",
    subtitle: "Add daily essentials and save more on every order.",
    image: "https://foydn.in/public/thumbnail_fullimage/1772111984.webp",
    href: "/shop?offer=free-delivery",
    placement: "strip"
  }
];

export const blogs: BlogPost[] = [
  {
    id: "blog-seasonal",
    title: "How to buy seasonal fruits smarter",
    slug: "buy-seasonal-fruits-smarter",
    excerpt: "A quick guide to picking fruit that tastes better and costs less.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80",
    publishedAt: "2026-05-01"
  },
  {
    id: "blog-storage",
    title: "Keep vegetables fresh for longer",
    slug: "keep-vegetables-fresh-longer",
    excerpt: "Simple storage habits that reduce waste in Indian kitchens.",
    image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=900&q=80",
    publishedAt: "2026-04-21"
  }
];

export const deliveryZones = [
  { name: "Vaishali Nagar", pincode: "302021", minOrder: siteConfig.minimumOrder, deliveryFee: siteConfig.deliveryFee, isActive: true },
  { name: "Sanganer", pincode: "302029", minOrder: siteConfig.minimumOrder, deliveryFee: siteConfig.deliveryFee, isActive: true },
  { name: "Mansarovar", pincode: "302020", minOrder: siteConfig.minimumOrder, deliveryFee: siteConfig.deliveryFee, isActive: true }
];

