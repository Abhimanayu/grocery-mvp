export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return <PolicyPage title="Terms & Conditions" text="Customers must provide accurate delivery details, pay applicable charges, and follow order cancellation rules shown during checkout." />;
}

function PolicyPage({ title, text }: { title: string; text: string }) {
  return (
    <section className="container py-12 pb-24">
      <div className="card mx-auto max-w-3xl p-6">
        <h1 className="text-3xl font-black">{title}</h1>
        <p className="mt-4 leading-7 text-[var(--muted)]">{text}</p>
      </div>
    </section>
  );
}
