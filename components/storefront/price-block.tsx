import { formatPrice, percentOff } from "@/lib/format";

type PriceBlockProps = {
  mrp: number;
  salePrice: number;
  unitLabel?: string;
};

export function PriceBlock({ mrp, salePrice, unitLabel }: PriceBlockProps) {
  const discount = percentOff(mrp, salePrice);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-lg font-black">{formatPrice(salePrice)}</span>
        {mrp > salePrice ? <span className="text-sm text-[var(--muted)] line-through">{formatPrice(mrp)}</span> : null}
        {discount ? <span className="rounded bg-[#e7f6df] px-2 py-1 text-xs font-bold text-[var(--brand)]">{discount}% off</span> : null}
      </div>
      {unitLabel ? <p className="mt-1 text-xs font-semibold text-[var(--muted)]">per {unitLabel}</p> : null}
    </div>
  );
}
