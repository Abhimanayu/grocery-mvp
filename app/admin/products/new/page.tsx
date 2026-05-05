import { AdminShell } from "@/components/admin/admin-shell";

export default function NewProductPage() {
  return (
    <AdminShell>
      <ProductForm title="New product" />
    </AdminShell>
  );
}

function ProductForm({ title }: { title: string }) {
  return (
    <form className="card max-w-3xl p-5">
      <h1 className="text-3xl font-black">{title}</h1>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input className="h-11 rounded-md border border-[var(--border)] px-3" placeholder="Product name" />
        <input className="h-11 rounded-md border border-[var(--border)] px-3" placeholder="Slug" />
        <input className="h-11 rounded-md border border-[var(--border)] px-3" placeholder="Unit label" />
        <input className="h-11 rounded-md border border-[var(--border)] px-3" placeholder="Sale price" />
        <textarea className="min-h-28 rounded-md border border-[var(--border)] px-3 py-3 sm:col-span-2" placeholder="Description" />
      </div>
      <button className="mt-5 rounded-md bg-[var(--brand)] px-5 py-3 font-bold text-white" type="button">Save product</button>
    </form>
  );
}
