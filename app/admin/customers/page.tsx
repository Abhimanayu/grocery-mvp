import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";

export default function AdminCustomersPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Customers</h1>
      <div className="mt-5">
        <DataTable columns={["Customer", "Phone", "Orders", "Status"]} rows={[["OTP users", "After login", "0", "Ready"]]} />
      </div>
    </AdminShell>
  );
}
