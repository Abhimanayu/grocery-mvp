import Link from "next/link";

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
        <Link className="mt-6 inline-flex rounded-md bg-[var(--brand)] px-5 py-3 font-bold text-white" href="/shop">
          Continue shopping
        </Link>
      </div>
    </section>
  );
}
