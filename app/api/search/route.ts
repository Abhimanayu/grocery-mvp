import { NextResponse } from "next/server";
import { getProducts } from "@/lib/catalog";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") ?? "";
  return NextResponse.json({ q, results: getProducts({ q }) });
}
