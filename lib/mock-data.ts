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
    image: "https://foydn.in/public/thumbnail_fullimage/1772111962.webp",
    sortOrder: 1,
    productCount: 20
  },
  {
    id: "cat-fruit",
    name: "Fresh Fruits",
    slug: "fresh-fruits",
    image: "https://foydn.in/public/thumbnail_fullimage/1772112056.webp",
    sortOrder: 2,
    productCount: 16
  },
  {
    id: "cat-leafy",
    name: "Leafy Greens",
    slug: "leafy-greens",
    image: "https://foydn.in/public/thumbnail_fullimage/1772112007.webp",
    sortOrder: 3,
    productCount: 10
  },
  {
    id: "cat-cut",
    name: "Cut & Peeled",
    slug: "cut-peeled",
    image: "https://foydn.in/public/thumbnail_fullimage/1772112041.webp",
    sortOrder: 4,
    productCount: 8
  }
];

const productImages = {
  potato: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
  onion: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=900&q=80",
  tomato: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=900&q=80",
  carrot: "https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=900&q=80",
  apple: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=900&q=80",
  banana: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80",
  spinach: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=80",
  salad: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
  cauliflower: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=900&q=80",
  cucumber: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=900&q=80",
  capsicum: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&w=900&q=80",
  cabbage: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=900&q=80",
  orange: "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=900&q=80",
  grapes: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=900&q=80",
  papaya: "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&w=900&q=80",
  pomegranate: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=900&q=80",
  coriander: "https://images.unsplash.com/photo-1528796745738-41048802f99a?auto=format&fit=crop&w=900&q=80",
  mint: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?auto=format&fit=crop&w=900&q=80",
  garlic: "https://images.unsplash.com/photo-1615477550927-6ec9a0eab3e2?auto=format&fit=crop&w=900&q=80",
  sprouts: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=900&q=80",
  beetroot: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&w=900&q=80",
  brinjal: "https://images.unsplash.com/photo-1604321272882-07c73743be32?auto=format&fit=crop&w=900&q=80",
  chilli: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?auto=format&fit=crop&w=900&q=80",
  ginger: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=80",
  lemon: "https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&w=900&q=80",
  okra: "https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?auto=format&fit=crop&w=900&q=80",
  gourd: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=900&q=80"
};

export const products: Product[] = [
  {
    id: "prod-potato",
    name: "Potato",
    slug: "potato",
    description: "Handpicked potatoes sorted for daily Jaipur kitchens, from sabzi and poha to crispy fries and comfort curries.",
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
    description: "Fresh red onions with sharp flavour, selected for dependable shelf life and everyday cooking prep.",
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
    description: "Juicy tomatoes with bright colour and clean sorting for gravies, salads, chutneys, and daily meals.",
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
    description: "Seasonal red carrots with sweetness and crunch, packed carefully for juice, salad, halwa, and home cooking.",
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
    description: "Crisp Kinnaur apples with natural sweetness, packed carefully so they arrive fresh and presentable.",
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
    description: "Naturally sweet bananas chosen for breakfast bowls, smoothies, lunch boxes, and easy repeat orders.",
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
    description: "Leafy spinach bunches cleaned for soups, saag, parathas, curries, and quick weekday prep.",
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
    description: "Ready-to-use salad vegetables cut fresh for quick healthy meals, office lunches, and dinner sides.",
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
  },
  {
    id: "prod-cauliflower",
    name: "Cauliflower",
    slug: "cauliflower",
    description: "Tight, clean cauliflower heads selected for sabzi, paratha stuffing, and quick weekday curries.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: true,
    images: [productImages.cauliflower],
    rating: 4.5,
    reviewCount: 47,
    variants: [{ id: "var-cauliflower-1pc", sku: "FOY-CAULIFLOWER-1PC", unitLabel: "1 pc", mrp: 60, salePrice: 48, stockQty: 36, minQty: 1, maxQty: 8, isActive: true }]
  },
  {
    id: "prod-cucumber",
    name: "Cucumber",
    slug: "cucumber",
    description: "Crunchy cucumbers for salads, raita, and lunch boxes, packed fresh for same-day use.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.cucumber],
    rating: 4.4,
    reviewCount: 39,
    variants: [{ id: "var-cucumber-500g", sku: "FOY-CUCUMBER-500G", unitLabel: "500 g", mrp: 40, salePrice: 32, stockQty: 54, minQty: 1, maxQty: 10, isActive: true }]
  },
  {
    id: "prod-capsicum",
    name: "Green Capsicum",
    slug: "green-capsicum",
    description: "Firm green capsicum for noodles, paneer dishes, sandwiches, and quick stir fries.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.capsicum],
    rating: 4.6,
    reviewCount: 51,
    variants: [{ id: "var-capsicum-250g", sku: "FOY-CAPSICUM-250G", unitLabel: "250 g", mrp: 35, salePrice: 28, stockQty: 46, minQty: 1, maxQty: 8, isActive: true }]
  },
  {
    id: "prod-cabbage",
    name: "Cabbage",
    slug: "cabbage",
    description: "Fresh cabbage heads selected for thoran, chowmein, paratha stuffing, and crunchy salads.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.cabbage],
    rating: 4.4,
    reviewCount: 34,
    variants: [{ id: "var-cabbage-1pc", sku: "FOY-CABBAGE-1PC", unitLabel: "1 pc", mrp: 45, salePrice: 36, stockQty: 32, minQty: 1, maxQty: 6, isActive: true }]
  },
  {
    id: "prod-orange",
    name: "Orange",
    slug: "orange",
    description: "Juicy oranges for breakfast, tiffin, and fresh juice, chosen for sweetness and clean skin.",
    categorySlug: "fresh-fruits",
    categoryName: "Fresh Fruits",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: true,
    images: [productImages.orange],
    rating: 4.7,
    reviewCount: 71,
    variants: [{ id: "var-orange-500g", sku: "FOY-ORANGE-500G", unitLabel: "500 g", mrp: 95, salePrice: 78, stockQty: 48, minQty: 1, maxQty: 8, isActive: true }]
  },
  {
    id: "prod-grapes",
    name: "Green Grapes",
    slug: "green-grapes",
    description: "Sweet green grapes packed for easy snacking, fruit bowls, and school tiffins.",
    categorySlug: "fresh-fruits",
    categoryName: "Fresh Fruits",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.grapes],
    rating: 4.6,
    reviewCount: 63,
    variants: [{ id: "var-grapes-500g", sku: "FOY-GRAPES-500G", unitLabel: "500 g", mrp: 120, salePrice: 96, stockQty: 40, minQty: 1, maxQty: 8, isActive: true }]
  },
  {
    id: "prod-papaya",
    name: "Papaya",
    slug: "papaya",
    description: "Naturally sweet papaya selected for breakfast plates, smoothies, and digestive-friendly snacking.",
    categorySlug: "fresh-fruits",
    categoryName: "Fresh Fruits",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.papaya],
    rating: 4.5,
    reviewCount: 42,
    variants: [{ id: "var-papaya-1pc", sku: "FOY-PAPAYA-1PC", unitLabel: "1 pc", mrp: 90, salePrice: 72, stockQty: 28, minQty: 1, maxQty: 5, isActive: true }]
  },
  {
    id: "prod-pomegranate",
    name: "Pomegranate",
    slug: "pomegranate",
    description: "Ruby pomegranates for juice, salads, and healthy snacking, packed carefully to avoid bruising.",
    categorySlug: "fresh-fruits",
    categoryName: "Fresh Fruits",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.pomegranate],
    rating: 4.7,
    reviewCount: 59,
    variants: [{ id: "var-pomegranate-500g", sku: "FOY-POMEGRANATE-500G", unitLabel: "500 g", mrp: 150, salePrice: 128, stockQty: 35, minQty: 1, maxQty: 6, isActive: true }]
  },
  {
    id: "prod-coriander",
    name: "Coriander",
    slug: "coriander",
    description: "Aromatic coriander bunches for garnish, chutney, tadka, and everyday Indian cooking.",
    categorySlug: "leafy-greens",
    categoryName: "Leafy Greens",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.coriander],
    rating: 4.4,
    reviewCount: 31,
    variants: [{ id: "var-coriander-bunch", sku: "FOY-CORIANDER-BUNCH", unitLabel: "1 bunch", mrp: 20, salePrice: 15, stockQty: 70, minQty: 1, maxQty: 10, isActive: true }]
  },
  {
    id: "prod-mint",
    name: "Mint Leaves",
    slug: "mint-leaves",
    description: "Fresh mint leaves for chutney, detox water, raita, and summer drinks.",
    categorySlug: "leafy-greens",
    categoryName: "Leafy Greens",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.mint],
    rating: 4.3,
    reviewCount: 27,
    variants: [{ id: "var-mint-bunch", sku: "FOY-MINT-BUNCH", unitLabel: "1 bunch", mrp: 25, salePrice: 18, stockQty: 52, minQty: 1, maxQty: 8, isActive: true }]
  },
  {
    id: "prod-peeled-garlic",
    name: "Peeled Garlic",
    slug: "peeled-garlic",
    description: "Kitchen-ready peeled garlic for faster tadka, curries, chutneys, and meal prep.",
    categorySlug: "cut-peeled",
    categoryName: "Cut & Peeled",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.garlic],
    rating: 4.6,
    reviewCount: 44,
    variants: [{ id: "var-peeled-garlic-100g", sku: "FOY-GARLIC-100G", unitLabel: "100 g", mrp: 55, salePrice: 42, stockQty: 30, minQty: 1, maxQty: 6, isActive: true }]
  },
  {
    id: "prod-sprouts",
    name: "Ready Sprouts",
    slug: "ready-sprouts",
    description: "Fresh ready sprouts for breakfast bowls, salads, and quick protein-rich snacks.",
    categorySlug: "cut-peeled",
    categoryName: "Cut & Peeled",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.sprouts],
    rating: 4.5,
    reviewCount: 33,
    variants: [{ id: "var-sprouts-200g", sku: "FOY-SPROUTS-200G", unitLabel: "200 g", mrp: 60, salePrice: 48, stockQty: 22, minQty: 1, maxQty: 5, isActive: true }]
  },
  {
    id: "prod-beetroot",
    name: "Beetroot",
    slug: "beetroot",
    description: "Deep red beetroot for salads, juice, cutlets, and healthy weekday meal prep.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.beetroot],
    rating: 4.5,
    reviewCount: 38,
    variants: [{ id: "var-beetroot-500g", sku: "FOY-BEETROOT-500G", unitLabel: "500 g", mrp: 50, salePrice: 39, stockQty: 42, minQty: 1, maxQty: 8, isActive: true }]
  },
  {
    id: "prod-brinjal",
    name: "Brinjal",
    slug: "brinjal",
    description: "Fresh brinjal selected for bharta, stuffed sabzi, sambar, and everyday curries.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.brinjal],
    rating: 4.4,
    reviewCount: 36,
    variants: [{ id: "var-brinjal-500g", sku: "FOY-BRINJAL-500G", unitLabel: "500 g", mrp: 45, salePrice: 34, stockQty: 46, minQty: 1, maxQty: 8, isActive: true }]
  },
  {
    id: "prod-green-chilli",
    name: "Green Chilli",
    slug: "green-chilli",
    description: "Spicy green chillies for tadka, chutney, pickles, and daily cooking.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.chilli],
    rating: 4.3,
    reviewCount: 28,
    variants: [{ id: "var-chilli-100g", sku: "FOY-CHILLI-100G", unitLabel: "100 g", mrp: 20, salePrice: 14, stockQty: 60, minQty: 1, maxQty: 8, isActive: true }]
  },
  {
    id: "prod-ginger",
    name: "Ginger",
    slug: "ginger",
    description: "Fresh ginger for chai, curries, kadha, marinades, and everyday Indian kitchens.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.ginger],
    rating: 4.6,
    reviewCount: 48,
    variants: [{ id: "var-ginger-250g", sku: "FOY-GINGER-250G", unitLabel: "250 g", mrp: 45, salePrice: 36, stockQty: 45, minQty: 1, maxQty: 8, isActive: true }]
  },
  {
    id: "prod-lemon",
    name: "Lemon",
    slug: "lemon",
    description: "Juicy lemons for nimbu pani, dal, salads, marinades, and daily freshness.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.lemon],
    rating: 4.5,
    reviewCount: 52,
    variants: [{ id: "var-lemon-250g", sku: "FOY-LEMON-250G", unitLabel: "250 g", mrp: 45, salePrice: 32, stockQty: 58, minQty: 1, maxQty: 8, isActive: true }]
  },
  {
    id: "prod-lady-finger",
    name: "Lady Finger",
    slug: "lady-finger",
    description: "Tender lady finger for dry sabzi, masala bhindi, and lunch box meals.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.okra],
    rating: 4.4,
    reviewCount: 37,
    variants: [{ id: "var-okra-500g", sku: "FOY-OKRA-500G", unitLabel: "500 g", mrp: 55, salePrice: 42, stockQty: 44, minQty: 1, maxQty: 8, isActive: true }]
  },
  {
    id: "prod-bottle-gourd",
    name: "Bottle Gourd",
    slug: "bottle-gourd",
    description: "Light bottle gourd for lauki sabzi, kofta, juice, and healthy home meals.",
    categorySlug: "fresh-vegetables",
    categoryName: "Fresh Vegetables",
    brand: "Foydn Fresh",
    status: "ACTIVE",
    isFeatured: false,
    images: [productImages.gourd],
    rating: 4.3,
    reviewCount: 26,
    variants: [{ id: "var-gourd-1pc", sku: "FOY-GOURD-1PC", unitLabel: "1 pc", mrp: 50, salePrice: 38, stockQty: 30, minQty: 1, maxQty: 5, isActive: true }]
  }
];

export const banners: Banner[] = [
  {
    id: "banner-hero",
    title: "Fresh produce that feels thoughtfully delivered",
    subtitle: "Fresh fruits, vegetables, and cut packs for Jaipur homes with same-day delivery, careful packing, and local support.",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
    href: "/shop",
    placement: "hero"
  },
  {
    id: "banner-free-delivery",
    title: "Free delivery above Rs 499",
    subtitle: "Build a fuller basket with fresh staples, fruit, and greens and save more on every order.",
    image: "https://foydn.in/public/thumbnail_fullimage/1776685696.jpg",
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

