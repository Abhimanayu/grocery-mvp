import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { banners } from "@/lib/mock-data";

export default function AdminBannersPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Banners</h1>
      <div className="mt-5">
        <DataTable columns={["Title", "Placement", "Link"]} rows={banners.map((banner) => [banner.title, banner.placement, banner.href])} />
      </div>
    </AdminShell>
  );
}
