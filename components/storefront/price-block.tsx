import { formatPrice, percentOff } from "@/lib/format";

type PriceBlockProps = {
  mrp: number;
  salePrice: number;
  unitLabel?: string;
};

export function PriceBlock({ mrp, salePrice, unitLabel }: PriceBlockProps) {
  const discount = percentOff(mrp, salePrice);

  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-1.5 md:gap-2">
        <span className="text-[1.6rem] font-black leading-none md:text-lg">{formatPrice(salePrice)}</span>
        {mrp > salePrice ? <span className="text-[11px] text-[var(--muted)] line-through md:text-sm">{formatPrice(mrp)}</span> : null}
        {discount ? <span className="rounded-xl bg-[#e7f6df] px-2 py-1 text-[10px] font-bold text-[var(--brand)] md:px-2 md:text-xs">{discount}% off</span> : null}
      </div>
      {unitLabel ? <p className="mt-1 text-xs font-semibold text-[var(--muted)]">per {unitLabel}</p> : null}
    </div>
  );
}
