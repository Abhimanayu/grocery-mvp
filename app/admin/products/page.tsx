import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { getProducts } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";
import Link from "next/link";

export default function AdminProductsPage() {
  const rows = getProducts().map((product) => {
    const variant = product.variants[0];
    return [
      product.name,
      product.categoryName,
      variant.unitLabel,
      formatPrice(variant.salePrice),
      variant.stockQty,
      <Link className="font-bold text-[var(--brand)]" href={`/admin/products/${product.id}`} key={product.id}>Edit</Link>
    ];
  });

  return (
    <AdminShell>
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-3xl font-black">Products</h1>
        <Link className="rounded-md bg-[var(--brand)] px-4 py-2 font-bold text-white" href="/admin/products/new">New product</Link>
      </div>
      <div className="mt-5">
        <DataTable columns={["Product", "Category", "Unit", "Price", "Stock", "Action"]} rows={rows} />
      </div>
    </AdminShell>
  );
}
