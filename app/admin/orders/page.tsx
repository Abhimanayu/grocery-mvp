import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";

export default function AdminOrdersPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Orders</h1>
      <div className="mt-5">
        <DataTable columns={["Order", "Customer", "Total", "Status"]} rows={[["No database orders yet", "MVP mock mode", "-", "Ready"]]} />
      </div>
    </AdminShell>
  );
}
