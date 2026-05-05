import { NextResponse } from "next/server";
import { getProducts } from "@/lib/catalog";

export async function GET(request: Request) {
  const url = new URL(request.url);
  return NextResponse.json(
    getProducts({
      q: url.searchParams.get("q") ?? undefined,
      categorySlug: url.searchParams.get("category") ?? undefined
    })
  );
}
