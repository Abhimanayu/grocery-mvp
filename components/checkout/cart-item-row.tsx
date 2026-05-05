"use client";

import { QuantityStepper } from "@/components/storefront/quantity-stepper";
import { useCart } from "@/components/storefront/cart-provider";
import { formatPrice } from "@/lib/format";
import type { CartItem } from "@/lib/types";
import Image from "next/image";

export function CartItemRow({ item }: { item: CartItem }) {
  const { updateItem, removeItem } = useCart();

  return (
    <div className="grid grid-cols-[78px_1fr] gap-3 rounded-md border border-[var(--border)] bg-white p-3">
      <div className="relative aspect-square overflow-hidden rounded-md bg-[#eef3e9]">
        <Image src={item.image} alt={item.productName} fill className="object-cover" sizes="90px" />
      </div>
      <div>
        <div className="flex justify-between gap-3">
          <div>
            <h3 className="font-bold">{item.productName}</h3>
            <p className="text-sm text-[var(--muted)]">{item.unitLabel}</p>
          </div>
          <button className="text-sm font-bold text-red-600" type="button" onClick={() => void removeItem(item.id)}>
            Remove
          </button>
        </div>
        <div className="mt-3 flex items-center justify-between gap-3">
          <QuantityStepper value={item.quantity} max={item.maxQty} onChange={(value) => void updateItem(item.id, value)} />
          <p className="font-black">{formatPrice(item.quantity * item.unitPrice)}</p>
        </div>
      </div>
    </div>
  );
}
