import Link from "next/link";

export const metadata = {
  title: "Payment Failed"
};

export default function FailedPage() {
  return (
    <section className="container grid min-h-[60vh] place-items-center py-12 pb-24 text-center">
      <div className="card max-w-xl p-8">
        <p className="text-sm font-bold uppercase tracking-wide text-red-600">Payment failed</p>
        <h1 className="mt-2 text-3xl font-black">Please try again</h1>
        <p className="mt-3 text-[var(--muted)]">No order was charged. You can retry checkout or switch to COD.</p>
        <Link className="mt-6 inline-flex rounded-md bg-[var(--brand)] px-5 py-3 font-bold text-white" href="/checkout">
          Back to checkout
        </Link>
      </div>
    </section>
  );
}
