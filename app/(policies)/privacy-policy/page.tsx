export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="container py-12 pb-24">
      <div className="card mx-auto max-w-3xl p-6">
        <h1 className="text-3xl font-black">Privacy Policy</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">
          The store collects phone, address, cart, and order information only to process grocery delivery and customer support.
        </p>
      </div>
    </section>
  );
}
