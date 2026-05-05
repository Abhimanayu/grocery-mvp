export const metadata = { title: "Refund Policy" };

export default function RefundPage() {
  return (
    <section className="container py-12 pb-24">
      <div className="card mx-auto max-w-3xl p-6">
        <h1 className="text-3xl font-black">Refund Policy</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Freshness issues should be reported to support soon after delivery. Eligible items can be refunded or replaced.
        </p>
      </div>
    </section>
  );
}
