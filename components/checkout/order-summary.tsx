import { MinimumOrderProgress } from "@/components/checkout/minimum-order-progress";
import { formatPrice } from "@/lib/format";
import type { CartSummary } from "@/lib/types";
import { Clock3, ShieldCheck } from "lucide-react";

export function OrderSummary({ cart }: { cart: CartSummary }) {
  return (
    <aside className="card h-fit p-4 md:sticky md:top-28 md:p-5">
      <h2 className="text-lg font-black md:text-xl">Order summary</h2>
      <div className="mt-4 space-y-3">
        <MinimumOrderProgress cart={cart} />
        <div className="grid gap-2 rounded-2xl bg-[#f8fffa] p-3 text-xs font-bold text-[var(--brand-dark)]">
          <span className="inline-flex items-center gap-2"><Clock3 size={15} className="text-[var(--brand)]" /> Delivery ETA 45-90 min</span>
          <span className="inline-flex items-center gap-2"><ShieldCheck size={15} className="text-[var(--brand)]" /> Freshness support after delivery</span>
        </div>
        <Row label="Subtotal" value={formatPrice(cart.subtotal)} />
        <Row label="Discount" value={`-${formatPrice(cart.discount)}`} />
        <Row label="Delivery fee" value={cart.deliveryFee ? formatPrice(cart.deliveryFee) : "Free"} />
        <div className="border-t border-[var(--border)] pt-3">
          <Row strong label="Total" value={formatPrice(cart.total)} />
        </div>
      </div>
    </aside>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between gap-4 ${strong ? "text-base font-black md:text-lg" : "text-sm"}`}>
      <span className="text-[var(--muted)]">{label}</span>
      <span className="font-bold text-right">{value}</span>
    </div>
  );
}
