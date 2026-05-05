import { AdminShell } from "@/components/admin/admin-shell";

export default async function AdminOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <AdminShell>
      <div className="card p-5">
        <h1 className="text-3xl font-black">Order {id}</h1>
        <p className="mt-3 text-[var(--muted)]">Order timeline and status updates will connect to PostgreSQL orders.</p>
      </div>
    </AdminShell>
  );
}
