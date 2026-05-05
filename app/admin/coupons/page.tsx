import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";

export default function AdminCouponsPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Coupons</h1>
      <div className="mt-5">
        <DataTable columns={["Code", "Rule", "Status"]} rows={[["FRESH50", "₹50 off above ₹299", "Active"], ["WELCOME10", "10% off above ₹199", "Active"]]} />
      </div>
    </AdminShell>
  );
}
