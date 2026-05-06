"use client";

import { Plus, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/storefront/cart-provider";
import { QuantityStepper } from "@/components/storefront/quantity-stepper";

type AddToCartButtonProps = {
  variantId: string;
  compact?: boolean;
};

export function AddToCartButton({ variantId, compact = false }: AddToCartButtonProps) {
  const { addItem, cart, updateItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const item = cart?.items.find((cartItem) => cartItem.variantId === variantId);

  async function onAdd() {
    setIsAdding(true);
    try {
      await addItem(variantId, 1);
    } finally {
      setIsAdding(false);
    }
  }

  async function onQuantityChange(quantity: number) {
    if (!item) return;
    setIsUpdating(true);
    try {
      await updateItem(item.id, quantity);
    } finally {
      setIsUpdating(false);
    }
  }

  if (item) {
    return (
      <div className={`rounded-full transition duration-200 ${isUpdating ? "scale-[0.98] opacity-70" : "scale-100 opacity-100"}`}>
        <QuantityStepper value={item.quantity} min={0} max={item.maxQty} onChange={(value) => void onQuantityChange(value)} />
      </div>
    );
  }

  return (
    <button
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] font-bold text-white shadow-[0_8px_18px_rgba(101,176,27,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#579a16] active:scale-95 disabled:opacity-60 ${
        compact ? "h-9 min-w-[76px] px-2.5 text-sm md:h-10 md:min-w-[92px] md:px-4 md:text-sm" : "h-10 px-4 text-sm"
      }`}
      disabled={isAdding}
      onClick={onAdd}
    >
      {compact ? <Plus size={17} /> : <ShoppingBasket size={17} />}
      {isAdding ? "Adding" : compact ? "Add" : "Add to cart"}
    </button>
  );
}
