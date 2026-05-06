"use client";

import { Plus, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/components/storefront/cart-provider";

type AddToCartButtonProps = {
  variantId: string;
  compact?: boolean;
};

export function AddToCartButton({ variantId, compact = false }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  async function onAdd() {
    setIsAdding(true);
    try {
      await addItem(variantId, 1);
    } finally {
      setIsAdding(false);
    }
  }

  return (
    <button
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] font-bold text-white shadow-[0_8px_18px_rgba(101,176,27,0.22)] transition hover:bg-[#579a16] disabled:opacity-60 ${
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
