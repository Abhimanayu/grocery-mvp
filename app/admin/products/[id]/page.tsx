import { AdminShell } from "@/components/admin/admin-shell";

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <AdminShell>
      <div className="card max-w-3xl p-5">
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Product ID: {id}</p>
        <h1 className="mt-2 text-3xl font-black">Edit product</h1>
        <p className="mt-3 text-[var(--muted)]">This page is ready for database-backed product editing in the next step.</p>
      </div>
    </AdminShell>
  );
}
