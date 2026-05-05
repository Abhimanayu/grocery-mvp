export const metadata = {
  title: "Order Details"
};

export default async function AccountOrderDetailPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;

  return (
    <section className="container py-10 pb-24">
      <div className="card p-5">
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Order</p>
        <h1 className="mt-2 text-3xl font-black">{orderId}</h1>
        <p className="mt-3 text-[var(--muted)]">Detailed order tracking connects once PostgreSQL order persistence is enabled.</p>
      </div>
    </section>
  );
}
