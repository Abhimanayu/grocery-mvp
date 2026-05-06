"use client";

import { QuantityStepper } from "@/components/storefront/quantity-stepper";
import { useCart } from "@/components/storefront/cart-provider";
import { formatPrice } from "@/lib/format";
import type { CartItem } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";

export function CartItemRow({ item }: { item: CartItem }) {
  const { updateItem, removeItem } = useCart();
  const [pending, setPending] = useState(false);

  async function updateQuantity(value: number) {
    setPending(true);
    try {
      await updateItem(item.id, value);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className={`grid grid-cols-[76px_1fr] gap-3 rounded-[22px] border border-[#dce8d5] bg-white p-3 shadow-[0_10px_24px_rgba(57,64,74,0.05)] transition ${pending ? "opacity-70" : ""} md:grid-cols-[86px_1fr]`}>
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#eef3e9]">
        <Image src={item.image} alt={item.productName} fill className="object-cover" sizes="90px" />
      </div>
      <div>
        <div className="flex justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold md:text-base">{item.productName}</h3>
            <p className="text-xs text-[var(--muted)] md:text-sm">{item.unitLabel}</p>
          </div>
          <button className="text-xs font-bold text-red-600 md:text-sm" type="button" onClick={() => void removeItem(item.id)}>
            Remove
          </button>
        </div>
        <div className="mt-3 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <QuantityStepper value={item.quantity} max={item.maxQty} onChange={(value) => void updateQuantity(value)} />
          <p className="text-sm font-black md:text-base">{formatPrice(item.quantity * item.unitPrice)}</p>
        </div>
      </div>
    </div>
  );
}
