import { Clock3, Quote, ShieldCheck, Star, Truck } from "lucide-react";

const reviews = [
  { name: "Ritika, Vaishali Nagar", text: "Vegetables arrived clean and packed better than our usual online orders.", rating: "4.9" },
  { name: "Amit, Mansarovar", text: "Repeat basket and clear unit pricing make daily grocery ordering faster.", rating: "4.8" },
  { name: "Neha, Sanganer", text: "Delivery timing and WhatsApp support feel more reliable for fresh items.", rating: "4.7" }
];

export function TrustReviews() {
  return (
    <div className="section-surface p-5 md:p-6 lg:p-7">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--orange)]">Trust signals</p>
          <h2 className="mt-2 text-2xl font-black leading-tight text-[var(--brand-dark)] md:text-3xl">A fresher, safer grocery experience</h2>
          <div className="mt-4 grid gap-2">
            <TrustPill icon={<Clock3 size={16} />} text="ETA 45-90 min in active Jaipur zones" />
            <TrustPill icon={<ShieldCheck size={16} />} text="Freshness support after delivery" />
            <TrustPill icon={<Truck size={16} />} text="Morning sorted produce, packed with care" />
          </div>
        </div>
        <div className="grid gap-3">
          {reviews.map((review) => (
            <article className="rounded-[22px] border border-[#dce8d5] bg-white p-4 shadow-[0_10px_24px_rgba(57,64,74,0.05)]" key={review.name}>
              <div className="flex items-start gap-3">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#eef9e8] text-[var(--brand)]"><Quote size={16} /></span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-black text-[var(--brand-dark)]">{review.name}</p>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#fff5da] px-2 py-1 text-xs font-black text-[#7a5300]">
                      <Star size={12} fill="currentColor" />
                      {review.rating}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{review.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrustPill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-[#d7edcc] bg-white px-3 py-3 text-sm font-bold text-[var(--brand-dark)]">
      <span className="text-[var(--brand)]">{icon}</span>
      {text}
    </div>
  );
}
