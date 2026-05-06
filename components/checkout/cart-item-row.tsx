"use client";

import { QuantityStepper } from "@/components/storefront/quantity-stepper";
import { useCart } from "@/components/storefront/cart-provider";
import { formatPrice } from "@/lib/format";
import type { CartItem } from "@/lib/types";
import Image from "next/image";

export function CartItemRow({ item }: { item: CartItem }) {
  const { updateItem, removeItem } = useCart();

  return (
    <div className="grid grid-cols-[68px_1fr] gap-3 rounded-xl border border-[var(--border)] bg-white p-3 md:grid-cols-[78px_1fr]">
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
          <QuantityStepper value={item.quantity} max={item.maxQty} onChange={(value) => void updateItem(item.id, value)} />
          <p className="text-sm font-black md:text-base">{formatPrice(item.quantity * item.unitPrice)}</p>
        </div>
      </div>
    </div>
  );
}
