export const metadata = {
  title: "FAQs",
  description: "Common questions about Foydn Fresh grocery delivery."
};

const faqs = [
  ["Can I add items before login?", "Yes. The rebuilt flow keeps a guest cart and asks for OTP only during checkout."],
  ["Where do you deliver?", "The MVP supports selected Jaipur pincodes through delivery zone configuration."],
  ["Do you support COD?", "Yes. COD is supported in the MVP, with Razorpay prepared for online payments."],
  ["What if produce is not fresh?", "The support team can resolve freshness issues through refund or replacement policy."]
];

export default function FaqPage() {
  return (
    <section className="container py-12 pb-24">
      <h1 className="text-4xl font-black">FAQs</h1>
      <div className="mt-6 space-y-3">
        {faqs.map(([question, answer]) => (
          <details className="card p-4" key={question}>
            <summary className="cursor-pointer font-bold">{question}</summary>
            <p className="mt-3 text-[var(--muted)]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
