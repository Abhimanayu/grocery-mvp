import { NextResponse } from "next/server";
import { getProducts } from "@/lib/catalog";

export async function GET() {
  return NextResponse.json(
    getProducts().flatMap((product) =>
      product.variants.map((variant) => ({
        productId: product.id,
        productName: product.name,
        variantId: variant.id,
        sku: variant.sku,
        stockQty: variant.stockQty
      }))
    )
  );
}
