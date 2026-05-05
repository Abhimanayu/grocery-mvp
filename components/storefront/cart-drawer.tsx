"use client";

import { QuantityStepper } from "@/components/storefront/quantity-stepper";
import { useCart } from "@/components/storefront/cart-provider";
import { formatPrice } from "@/lib/format";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { cart, updateItem, removeItem } = useCart();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button className="absolute inset-0 bg-black/40" onClick={onClose} aria-label="Close cart overlay" />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#fbfcf8] shadow-soft">
        <div className="flex items-center justify-between border-b border-[var(--border)] p-4">
          <h2 className="text-xl font-black">My cart</h2>
          <button className="grid size-9 place-items-center rounded-md border border-[var(--border)]" onClick={onClose} aria-label="Close cart">
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-auto p-4">
          {!cart?.items.length ? (
            <div className="grid h-full place-items-center text-center">
              <div>
                <h3 className="text-xl font-bold">Your cart is empty</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">Add fresh groceries before checkout.</p>
                <Link className="mt-5 inline-flex rounded-full bg-[var(--brand)] px-5 py-3 font-bold text-white" href="/shop" onClick={onClose}>
                  Shop now
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.items.map((item) => (
                <div className="grid grid-cols-[72px_1fr] gap-3 rounded-md border border-[var(--border)] p-2" key={item.id}>
                  <div className="relative aspect-square overflow-hidden rounded bg-[#eef3e9]">
                    <Image src={item.image} alt={item.productName} fill className="object-cover" sizes="80px" />
                  </div>
                  <div>
                    <div className="flex justify-between gap-2">
                      <div>
                        <p className="font-bold">{item.productName}</p>
                        <p className="text-sm text-[var(--muted)]">{item.unitLabel}</p>
                      </div>
                      <button className="text-sm font-bold text-red-600" onClick={() => void removeItem(item.id)}>
                        Remove
                      </button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <QuantityStepper value={item.quantity} max={item.maxQty} onChange={(value) => void updateItem(item.id, value)} />
                      <p className="font-black">{formatPrice(item.quantity * item.unitPrice)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {cart?.items.length ? (
          <div className="border-t border-[var(--border)] p-4">
            <div className="mb-3 flex justify-between font-bold">
              <span>Total</span>
              <span>{formatPrice(cart.total)}</span>
            </div>
            <Link className="block rounded-full bg-[var(--brand)] px-5 py-3 text-center font-bold text-white" href="/checkout" onClick={onClose}>
              Checkout
            </Link>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
