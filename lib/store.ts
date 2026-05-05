import { getProductByVariantId } from "@/lib/catalog";
import { siteConfig, deliveryZones } from "@/lib/mock-data";
import type { AddressInput, CartItem, CartSummary, Order } from "@/lib/types";

type CartRecord = {
  cartToken: string;
  items: Map<string, number>;
};

type OtpRecord = {
  phone: string;
  code: string;
  expiresAt: number;
  attempts: number;
};

type SessionRecord = {
  phone: string;
  createdAt: string;
};

type StoreState = {
  carts: Map<string, CartRecord>;
  orders: Map<string, Order>;
  otps: Map<string, OtpRecord>;
  sessions: Map<string, SessionRecord>;
};

const globalForStore = globalThis as unknown as { groceryStore?: StoreState };

export const store =
  globalForStore.groceryStore ??
  {
    carts: new Map<string, CartRecord>(),
    orders: new Map<string, Order>(),
    otps: new Map<string, OtpRecord>(),
    sessions: new Map<string, SessionRecord>()
  };

globalForStore.groceryStore = store;

export function createToken(prefix: string) {
  return `${prefix}_${crypto.randomUUID().replaceAll("-", "")}`;
}

export function getOrCreateCart(cartToken: string) {
  const existing = store.carts.get(cartToken);
  if (existing) return existing;

  const cart = { cartToken, items: new Map<string, number>() };
  store.carts.set(cartToken, cart);
  return cart;
}

export function addCartItem(cartToken: string, variantId: string, quantity: number) {
  const cart = getOrCreateCart(cartToken);
  const current = cart.items.get(variantId) ?? 0;
  const productData = getProductByVariantId(variantId);
  if (!productData) throw new Error("Variant not found");
  const nextQuantity = Math.min(current + quantity, productData.variant.maxQty, productData.variant.stockQty);
  cart.items.set(variantId, nextQuantity);
  return buildCartSummary(cartToken);
}

export function updateCartItem(cartToken: string, variantId: string, quantity: number) {
  const cart = getOrCreateCart(cartToken);
  if (quantity <= 0) {
    cart.items.delete(variantId);
    return buildCartSummary(cartToken);
  }

  const productData = getProductByVariantId(variantId);
  if (!productData) throw new Error("Variant not found");
  cart.items.set(variantId, Math.min(quantity, productData.variant.maxQty, productData.variant.stockQty));
  return buildCartSummary(cartToken);
}

export function removeCartItem(cartToken: string, variantId: string) {
  const cart = getOrCreateCart(cartToken);
  cart.items.delete(variantId);
  return buildCartSummary(cartToken);
}

export function buildCartSummary(cartToken: string, couponCode?: string): CartSummary {
  const cart = getOrCreateCart(cartToken);
  const items: CartItem[] = [];

  for (const [variantId, quantity] of cart.items.entries()) {
    const productData = getProductByVariantId(variantId);
    if (!productData) continue;
    const { product, variant } = productData;
    items.push({
      id: variant.id,
      variantId: variant.id,
      productId: product.id,
      productSlug: product.slug,
      productName: product.name,
      image: product.images[0],
      unitLabel: variant.unitLabel,
      quantity,
      unitPrice: variant.salePrice,
      mrp: variant.mrp,
      maxQty: variant.maxQty,
      stockQty: variant.stockQty
    });
  }

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const discount = calculateDiscount(subtotal, couponCode);
  const deliveryFee = subtotal >= siteConfig.freeDeliveryThreshold || subtotal === 0 ? 0 : siteConfig.deliveryFee;
  const total = Math.max(0, subtotal - discount + deliveryFee);

  return {
    cartToken,
    items,
    subtotal,
    discount,
    deliveryFee,
    total,
    minimumOrder: siteConfig.minimumOrder,
    freeDeliveryThreshold: siteConfig.freeDeliveryThreshold
  };
}

export function calculateDiscount(subtotal: number, couponCode?: string) {
  const code = couponCode?.trim().toUpperCase();
  if (!code) return 0;
  if (code === "FRESH50" && subtotal >= 299) return Math.min(50, subtotal);
  if (code === "WELCOME10" && subtotal >= 199) return Math.round(subtotal * 0.1);
  return 0;
}

export function validateServiceability(pincode: string) {
  return deliveryZones.find((zone) => zone.pincode === pincode && zone.isActive) ?? null;
}

export function createOrder(cartToken: string, address: AddressInput, paymentMethod: "COD" | "RAZORPAY", couponCode?: string) {
  const cart = buildCartSummary(cartToken, couponCode);
  if (!cart.items.length) throw new Error("Cart is empty");
  if (cart.subtotal < cart.minimumOrder) throw new Error(`Minimum order is ₹${cart.minimumOrder}`);
  if (!validateServiceability(address.pincode)) throw new Error("Pincode is not serviceable yet");

  const order: Order = {
    id: createToken("ord"),
    orderNo: `FOY${Date.now().toString().slice(-8)}`,
    status: "CONFIRMED",
    paymentMethod,
    paymentStatus: paymentMethod === "COD" ? "PENDING" : "PENDING",
    address,
    items: cart.items,
    subtotal: cart.subtotal,
    discount: cart.discount,
    deliveryFee: cart.deliveryFee,
    total: cart.total,
    createdAt: new Date().toISOString()
  };

  store.orders.set(order.id, order);
  getOrCreateCart(cartToken).items.clear();
  return order;
}

export function createOtp(phone: string) {
  const code = process.env.OTP_PROVIDER === "mock" || !process.env.OTP_PROVIDER ? "123456" : Math.floor(100000 + Math.random() * 900000).toString();
  const record = { phone, code, expiresAt: Date.now() + 5 * 60 * 1000, attempts: 0 };
  store.otps.set(phone, record);
  return record;
}

export function verifyOtp(phone: string, otp: string) {
  if ((process.env.OTP_PROVIDER === "mock" || !process.env.OTP_PROVIDER) && otp === "123456") {
    store.otps.delete(phone);
    return true;
  }

  const record = store.otps.get(phone);
  if (!record || record.expiresAt < Date.now()) return false;
  record.attempts += 1;
  if (record.attempts > 5) return false;
  const ok = record.code === otp;
  if (ok) store.otps.delete(phone);
  return ok;
}

export function createSession(phone: string) {
  const sessionToken = createToken("sess");
  store.sessions.set(sessionToken, { phone, createdAt: new Date().toISOString() });
  return sessionToken;
}

export function getSession(sessionToken?: string) {
  return sessionToken ? store.sessions.get(sessionToken) ?? null : null;
}
