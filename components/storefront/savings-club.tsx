import { BadgePercent, Gift, LocateFixed, Repeat2 } from "lucide-react";

const benefits = [
  {
    icon: <Repeat2 size={18} />,
    title: "Weekly subscription",
    text: "Repeat milk, fruit, and sabzi baskets without rebuilding the cart."
  },
  {
    icon: <BadgePercent size={18} />,
    title: "Coupons and deals",
    text: "Apply codes like FRESH50 and see clear savings before payment."
  },
  {
    icon: <Gift size={18} />,
    title: "Refer and earn",
    text: "Share Foydn with Jaipur families and unlock wallet rewards."
  },
  {
    icon: <LocateFixed size={18} />,
    title: "Live location delivery",
    text: "Use current location at checkout for faster, cleaner address capture."
  }
];

export function SavingsClub() {
  return (
    <div className="section-surface p-4 md:p-6 lg:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--orange)]">More value</p>
          <h2 className="mt-2 text-2xl font-black leading-tight text-[var(--brand-dark)] md:text-3xl">Built for repeat grocery buyers</h2>
        </div>
        <span className="rounded-full bg-[#ddffd5] px-3 py-2 text-xs font-black text-[var(--brand-dark)]">Owner-ready sales hooks</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <div className="rounded-[22px] border border-[#dce8d5] bg-white p-4 shadow-[0_10px_24px_rgba(57,64,74,0.05)]" key={benefit.title}>
            <span className="inline-flex rounded-full bg-[#eef9e8] p-2 text-[var(--brand)]">{benefit.icon}</span>
            <p className="mt-3 text-sm font-black text-[var(--brand-dark)]">{benefit.title}</p>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{benefit.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
