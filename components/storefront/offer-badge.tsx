import { percentOff } from "@/lib/format";

export function OfferBadge({ mrp, salePrice }: { mrp: number; salePrice: number }) {
  const discount = percentOff(mrp, salePrice);
  if (!discount) return null;

  return (
    <span className="absolute left-2 top-2 rounded bg-[var(--accent)] px-2 py-1 text-xs font-black text-black">
      {discount}% OFF
    </span>
  );
}
