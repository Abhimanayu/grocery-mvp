import { Boxes, ChartNoAxesCombined, ClipboardList, Gift, LayoutDashboard, MapPinned, Settings, Tags, Users } from "lucide-react";
import Link from "next/link";

const nav = [
  ["Dashboard", "/admin", LayoutDashboard],
  ["Products", "/admin/products", Boxes],
  ["Categories", "/admin/categories", Tags],
  ["Orders", "/admin/orders", ClipboardList],
  ["Customers", "/admin/customers", Users],
  ["Coupons", "/admin/coupons", Gift],
  ["Inventory", "/admin/inventory", ChartNoAxesCombined],
  ["Delivery zones", "/admin/delivery-zones", MapPinned],
  ["Settings", "/admin/settings", Settings]
] as const;

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="container grid gap-5 py-8 pb-24 lg:grid-cols-[240px_1fr]">
      <aside className="card h-fit p-3">
        <p className="px-3 py-2 text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Admin</p>
        <nav className="mt-2 space-y-1">
          {nav.map(([label, href, Icon]) => (
            <Link className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-bold hover:bg-[#eef3e9]" href={href} key={href}>
              <Icon size={17} />
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <div>{children}</div>
    </section>
  );
}
