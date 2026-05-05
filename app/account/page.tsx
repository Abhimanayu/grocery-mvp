import Link from "next/link";

export const metadata = {
  title: "Account"
};

export default function AccountPage() {
  return (
    <section className="container py-10 pb-24">
      <h1 className="text-3xl font-black">Account</h1>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <AccountCard title="Orders" text="Track grocery orders and reorder." href="/account/orders" />
        <AccountCard title="Addresses" text="Manage delivery addresses." href="/account/addresses" />
        <AccountCard title="Wishlist" text="Saved fresh picks." href="/wishlist" />
      </div>
    </section>
  );
}

function AccountCard({ title, text, href }: { title: string; text: string; href: string }) {
  return (
    <Link className="card p-5 hover:border-[var(--brand)]" href={href}>
      <h2 className="text-xl font-black">{title}</h2>
      <p className="mt-2 text-sm text-[var(--muted)]">{text}</p>
    </Link>
  );
}
