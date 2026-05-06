import { formatPrice } from "@/lib/format";
import type { CartSummary } from "@/lib/types";

export function MinimumOrderProgress({ cart, compact = false }: { cart: CartSummary; compact?: boolean }) {
  const remaining = Math.max(0, cart.freeDeliveryThreshold - cart.subtotal);
  const progress = Math.min(100, Math.round((cart.subtotal / cart.freeDeliveryThreshold) * 100));
  const eta = cart.subtotal >= cart.freeDeliveryThreshold ? "ETA 35-60 min" : "ETA 45-90 min";

  return (
    <div className={`rounded-2xl border border-[#d1e8c5] bg-[linear-gradient(180deg,#f1fbe9_0%,#e7f6df_100%)] ${compact ? "p-2.5" : "p-3"}`}>
      <div className={`flex justify-between gap-3 font-bold text-[var(--brand)] ${compact ? "text-xs" : "text-sm"}`}>
        <span>{remaining > 0 ? `Add ${formatPrice(remaining)} for free delivery` : "Free delivery unlocked for this order"}</span>
        <span>{progress}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/90">
        <div
          className="h-full rounded-full bg-[linear-gradient(90deg,#65b01b_0%,#89d53f_100%)] transition-[width] duration-700 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      {!compact ? <p className="mt-2 text-[11px] font-bold text-[var(--muted)]">{eta} • Packed fresh and dispatched by live slot availability.</p> : null}
    </div>
  );
}
