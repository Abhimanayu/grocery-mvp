import { AdminShell } from "@/components/admin/admin-shell";
import { siteConfig } from "@/lib/mock-data";

export default function AdminSettingsPage() {
  return (
    <AdminShell>
      <form className="card max-w-3xl p-5">
        <h1 className="text-3xl font-black">Settings</h1>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <input className="h-11 rounded-md border border-[var(--border)] px-3" defaultValue={siteConfig.name} />
          <input className="h-11 rounded-md border border-[var(--border)] px-3" defaultValue={siteConfig.city} />
          <input className="h-11 rounded-md border border-[var(--border)] px-3" defaultValue={siteConfig.phone} />
          <input className="h-11 rounded-md border border-[var(--border)] px-3" defaultValue={siteConfig.email} />
        </div>
        <button className="mt-5 rounded-md bg-[var(--brand)] px-5 py-3 font-bold text-white" type="button">Save settings</button>
      </form>
    </AdminShell>
  );
}
