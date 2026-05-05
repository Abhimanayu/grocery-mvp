import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { buildCartSummary, createToken, getOrCreateCart, getSession } from "@/lib/store";

export async function getCartToken() {
  const cookieStore = await cookies();
  let cartToken = cookieStore.get("cart_token")?.value;
  let created = false;

  if (!cartToken) {
    cartToken = createToken("cart");
    created = true;
  }

  const cookieItems = parseCartItems(cookieStore.get("cart_items")?.value);
  if (cookieItems) {
    const cart = getOrCreateCart(cartToken);
    cart.items.clear();
    for (const [variantId, quantity] of Object.entries(cookieItems)) {
      if (quantity > 0) cart.items.set(variantId, quantity);
    }
  }

  return { cartToken, created };
}

export function withCartCookie<T>(payload: T, cartToken: string, created: boolean, init?: ResponseInit) {
  const response = NextResponse.json(payload, init);
  if (created) {
    response.cookies.set("cart_token", cartToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 90
    });
  }

  response.cookies.set("cart_items", serializeCartItems(cartToken), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 90
  });

  return response;
}

export async function currentSession() {
  const cookieStore = await cookies();
  return getSession(cookieStore.get("session_token")?.value);
}

export function badRequest(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

function parseCartItems(value?: string) {
  if (!value) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(value)) as Record<string, unknown>;
    const items: Record<string, number> = {};
    for (const [variantId, quantity] of Object.entries(parsed)) {
      if (typeof quantity === "number" && Number.isInteger(quantity) && quantity > 0 && quantity <= 50) {
        items[variantId] = quantity;
      }
    }
    return items;
  } catch {
    return null;
  }
}

function serializeCartItems(cartToken: string) {
  const summary = buildCartSummary(cartToken);
  const items = Object.fromEntries(summary.items.map((item) => [item.variantId, item.quantity]));
  return JSON.stringify(items);
}
