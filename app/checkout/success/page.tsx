import Link from "next/link";
import { Gift, Repeat2 } from "lucide-react";

export const metadata = {
  title: "Order Placed"
};

export default async function SuccessPage({ searchParams }: { searchParams: Promise<{ order?: string }> }) {
  const params = await searchParams;

  return (
    <section className="container grid min-h-[60vh] place-items-center py-12 pb-24 text-center">
      <div className="card max-w-xl p-8">
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Order confirmed</p>
        <h1 className="mt-2 text-3xl font-black">Fresh groceries are on the way</h1>
        <p className="mt-3 text-[var(--muted)]">Order reference: {params.order ?? "created"}</p>
        <div className="mt-5 grid gap-3 text-left sm:grid-cols-2">
          <div className="rounded-[22px] border border-[#dce8d5] bg-[#f8fffa] p-4">
            <Repeat2 size={18} className="text-[var(--brand)]" />
            <p className="mt-2 text-sm font-black">Repeat this order</p>
            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">Turn regular groceries into a weekly basket.</p>
          </div>
          <div className="rounded-[22px] border border-[#dce8d5] bg-[#fffaf0] p-4">
            <Gift size={18} className="text-[#9a6500]" />
            <p className="mt-2 text-sm font-black">Refer and earn</p>
            <p className="mt-1 text-xs leading-5 text-[var(--muted)]">Share FOYDNFRIEND after delivery.</p>
          </div>
        </div>
        <Link className="mt-6 inline-flex rounded-md bg-[var(--brand)] px-5 py-3 font-bold text-white" href="/shop">
          Continue shopping
        </Link>
      </div>
    </section>
  );
}
