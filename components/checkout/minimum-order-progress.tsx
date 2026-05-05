import { formatPrice } from "@/lib/format";
import type { CartSummary } from "@/lib/types";

export function MinimumOrderProgress({ cart }: { cart: CartSummary }) {
  const remaining = Math.max(0, cart.freeDeliveryThreshold - cart.subtotal);
  const progress = Math.min(100, Math.round((cart.subtotal / cart.freeDeliveryThreshold) * 100));

  return (
    <div className="rounded-md bg-[#e7f6df] p-3">
      <div className="flex justify-between gap-3 text-sm font-bold text-[var(--brand)]">
        <span>{remaining > 0 ? `Add ${formatPrice(remaining)} for free delivery` : "Free delivery unlocked"}</span>
        <span>{progress}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
        <div className="h-full rounded-full bg-[var(--brand)]" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
