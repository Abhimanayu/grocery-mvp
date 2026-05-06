export const metadata = {
  title: "About Foydn Fresh",
  description: "A Jaipur grocery delivery service focused on fresh fruits and vegetables."
};

export default function AboutPage() {
  return (
    <ContentPage title="About Foydn Fresh">
      <p>
        Foydn Fresh is a local grocery delivery experience designed for Jaipur customers who want reliable fruits,
        vegetables, leafy greens, and daily essentials without cart friction.
      </p>
      <p>
        This rebuild focuses on faster mobile shopping, cleaner product data, guest cart, serviceability checks, and
        operational admin tools.
      </p>
    </ContentPage>
  );
}

function ContentPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="container py-8 pb-28 md:py-12 md:pb-24">
      <div className="card mx-auto max-w-3xl p-6 md:p-8">
        <h1 className="text-2xl font-black md:text-3xl">{title}</h1>
        <div className="mt-5 space-y-4 leading-7 text-[var(--muted)]">{children}</div>
      </div>
    </section>
  );
}
