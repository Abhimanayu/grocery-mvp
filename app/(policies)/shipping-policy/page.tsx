export const metadata = { title: "Shipping Policy" };

export default function ShippingPage() {
  return (
    <section className="container py-12 pb-24">
      <div className="card mx-auto max-w-3xl p-6">
        <h1 className="text-3xl font-black">Shipping Policy</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          Orders are delivered in active Jaipur service zones. Delivery slots, fees, and minimum order value are validated at checkout.
        </p>
      </div>
    </section>
  );
}
