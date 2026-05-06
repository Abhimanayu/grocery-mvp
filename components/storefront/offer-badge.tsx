import { percentOff } from "@/lib/format";

export function OfferBadge({ mrp, salePrice }: { mrp: number; salePrice: number }) {
  const discount = percentOff(mrp, salePrice);
  if (!discount) return null;

  return (
    <span className="absolute left-2 top-2 rounded-full bg-[var(--accent)] px-2 py-1 text-[11px] font-black text-black shadow-[0_8px_18px_rgba(255,171,16,0.18)] md:rounded md:text-xs">
      {discount}% OFF
    </span>
  );
}
