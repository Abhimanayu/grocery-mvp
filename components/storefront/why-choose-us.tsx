import { Clock3, HeartHandshake, MapPin, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";

const reasons = [
  { icon: <Clock3 size={17} />, title: "45-90 min ETA", text: "Clear delivery timing for active Jaipur service zones." },
  { icon: <PackageCheck size={17} />, title: "Morning sorting", text: "Produce is sorted and packed for daily home cooking." },
  { icon: <ShieldCheck size={17} />, title: "Freshness guarantee", text: "Quick support if an item does not meet freshness expectations." },
  { icon: <MapPin size={17} />, title: "Location-aware checkout", text: "Use current location to make delivery capture cleaner." }
];

export function WhyChooseUs() {
  return (
    <div className="section-surface overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-72 overflow-hidden lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
            alt="Fresh produce farm"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(7,47,23,0.42)] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 rounded-[24px] bg-white/94 p-4 shadow-soft backdrop-blur">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#eef9e8] px-3 py-1.5 text-xs font-black text-[var(--brand)]">
              <HeartHandshake size={14} />
              Foydn freshness promise
            </span>
            <p className="mt-3 text-xl font-black leading-tight text-[var(--brand-dark)]">Better than a static grocery listing: trust, timing, support.</p>
          </div>
        </div>
        <div className="p-5 md:p-6 lg:p-8">
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--orange)]">Why choose us</p>
          <h2 className="mt-2 text-2xl font-black leading-tight text-[var(--brand-dark)] md:text-4xl">Made for fast repeat grocery orders</h2>
          <p className="mt-3 text-sm leading-6 text-[var(--muted)] md:text-base md:leading-7">
            Old grocery sites often feel like a product list. This flow makes delivery confidence, savings, support, and repeat purchase visible before checkout.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div className="rounded-[22px] border border-[#dce8d5] bg-[#f8fffa] p-4" key={reason.title}>
                <span className="inline-flex rounded-full bg-white p-2 text-[var(--brand)] shadow-[0_8px_18px_rgba(57,64,74,0.05)]">{reason.icon}</span>
                <p className="mt-3 text-sm font-black text-[var(--brand-dark)]">{reason.title}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{reason.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-[22px] bg-[#fff5da] p-4 text-sm font-black text-[#7a5300]">
            <Truck size={17} />
            COD and online payment clarity, with free delivery progress before payment.
          </div>
        </div>
      </div>
    </div>
  );
}
