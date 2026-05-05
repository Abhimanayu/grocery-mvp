export function formatPrice(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

export function percentOff(mrp: number, salePrice: number) {
  if (mrp <= salePrice) return 0;
  return Math.round(((mrp - salePrice) / mrp) * 100);
}
