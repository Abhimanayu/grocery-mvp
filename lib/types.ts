export type Category = {
  id: string;
  name: string;
  slug: string;
  image: string;
  sortOrder: number;
  productCount: number;
};

export type ProductVariant = {
  id: string;
  sku: string;
  unitLabel: string;
  mrp: number;
  salePrice: number;
  stockQty: number;
  minQty: number;
  maxQty: number;
  isActive: boolean;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  categorySlug: string;
  categoryName: string;
  brand: string;
  status: "DRAFT" | "ACTIVE" | "ARCHIVED";
  isFeatured: boolean;
  images: string[];
  variants: ProductVariant[];
  seoTitle?: string;
  seoDescription?: string;
  rating: number;
  reviewCount: number;
};

export type Banner = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  placement: "hero" | "strip" | "category";
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  publishedAt: string;
};

export type CartItem = {
  id: string;
  variantId: string;
  productId: string;
  productSlug: string;
  productName: string;
  image: string;
  unitLabel: string;
  quantity: number;
  unitPrice: number;
  mrp: number;
  maxQty: number;
  stockQty: number;
};

export type CartSummary = {
  cartToken: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  minimumOrder: number;
  freeDeliveryThreshold: number;
};

export type AddressInput = {
  name: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  pincode: string;
};

export type Order = {
  id: string;
  orderNo: string;
  status: "PENDING" | "CONFIRMED" | "PACKING" | "OUT_FOR_DELIVERY" | "DELIVERED" | "CANCELLED";
  paymentMethod: "COD" | "RAZORPAY";
  paymentStatus: "PENDING" | "PAID" | "FAILED";
  address: AddressInput;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
};
