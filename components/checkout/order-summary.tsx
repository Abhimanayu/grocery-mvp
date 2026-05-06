import { MinimumOrderProgress } from "@/components/checkout/minimum-order-progress";
import { formatPrice } from "@/lib/format";
import type { CartSummary } from "@/lib/types";

export function OrderSummary({ cart }: { cart: CartSummary }) {
  return (
    <aside className="card h-fit p-4 md:p-5">
      <h2 className="text-lg font-black md:text-xl">Order summary</h2>
      <div className="mt-4 space-y-3">
        <MinimumOrderProgress cart={cart} />
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
