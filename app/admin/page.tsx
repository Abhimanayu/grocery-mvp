import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { getProducts } from "@/lib/catalog";
import { formatPrice } from "@/lib/format";

export default function AdminDashboardPage() {
  const products = getProducts();
  const stockValue = products.reduce((sum, product) => sum + product.variants.reduce((inner, variant) => inner + variant.stockQty * variant.salePrice, 0), 0);

  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Dashboard</h1>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <Stat label="Active products" value={products.length.toString()} />
        <Stat label="Stock value" value={formatPrice(stockValue)} />
        <Stat label="Pending orders" value="0" />
      </div>
      <div className="mt-6">
        <DataTable
          columns={["Metric", "Status", "Next action"]}
          rows={[
            ["Guest cart", "Enabled", "Connect database persistence"],
            ["OTP login", "Mock mode", "Add SMS provider credentials"],
            ["Razorpay", "Mock mode", "Add keys and webhook validation"]
          ]}
        />
      </div>
    </AdminShell>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card p-4">
      <p className="text-sm font-bold text-[var(--muted)]">{label}</p>
      <p className="mt-2 text-3xl font-black">{value}</p>
    </div>
  );
}
