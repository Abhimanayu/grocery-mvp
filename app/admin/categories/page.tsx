import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { getCategories } from "@/lib/catalog";

export default function AdminCategoriesPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Categories</h1>
      <div className="mt-5">
        <DataTable columns={["Name", "Slug", "Products", "Status"]} rows={getCategories().map((category) => [category.name, category.slug, category.productCount, "Active"])} />
      </div>
    </AdminShell>
  );
}
