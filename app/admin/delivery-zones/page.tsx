import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { deliveryZones } from "@/lib/mock-data";
import { formatPrice } from "@/lib/format";

export default function AdminDeliveryZonesPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Delivery zones</h1>
      <div className="mt-5">
        <DataTable columns={["Zone", "Pincode", "Minimum", "Fee", "Status"]} rows={deliveryZones.map((zone) => [zone.name, zone.pincode, formatPrice(zone.minOrder), formatPrice(zone.deliveryFee), zone.isActive ? "Active" : "Inactive"])} />
      </div>
    </AdminShell>
  );
}
