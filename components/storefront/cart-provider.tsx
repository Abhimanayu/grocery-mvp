"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { CartSummary } from "@/lib/types";

type CartContextValue = {
  cart: CartSummary | null;
  count: number;
  isLoading: boolean;
  refreshCart: () => Promise<void>;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateItem: (itemId: string, quantity: number) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshCart = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch("/api/cart", { cache: "no-store" });
    const data = (await response.json()) as CartSummary;
    setCart(data);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Initial cart hydration is an external API sync; subsequent updates are explicit user actions.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void refreshCart();
  }, [refreshCart]);

  const addItem = useCallback(
    async (variantId: string, quantity = 1) => {
      const response = await fetch("/api/cart/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ variantId, quantity })
      });
      if (!response.ok) throw new Error("Unable to add item");
      await refreshCart();
    },
    [refreshCart]
  );

  const updateItem = useCallback(
    async (itemId: string, quantity: number) => {
      const response = await fetch(`/api/cart/items/${itemId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity })
      });
      if (!response.ok) throw new Error("Unable to update cart");
      await refreshCart();
    },
    [refreshCart]
  );

  const removeItem = useCallback(
    async (itemId: string) => {
      const response = await fetch(`/api/cart/items/${itemId}`, { method: "DELETE" });
      if (!response.ok) throw new Error("Unable to remove item");
      await refreshCart();
    },
    [refreshCart]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      cart,
      count: cart?.items.reduce((sum, item) => sum + item.quantity, 0) ?? 0,
      isLoading,
      refreshCart,
      addItem,
      updateItem,
      removeItem
    }),
    [addItem, cart, isLoading, refreshCart, removeItem, updateItem]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
