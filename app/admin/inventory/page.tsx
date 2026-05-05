import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { getProducts } from "@/lib/catalog";

export default function AdminInventoryPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Inventory</h1>
      <div className="mt-5">
        <DataTable columns={["SKU", "Product", "Unit", "Stock"]} rows={getProducts().flatMap((product) => product.variants.map((variant) => [variant.sku, product.name, variant.unitLabel, variant.stockQty]))} />
      </div>
    </AdminShell>
  );
}
