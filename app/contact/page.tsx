import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/mock-data";

export const metadata = {
  title: "Contact",
  description: "Contact Foydn Fresh support for grocery delivery help in Jaipur."
};

export default function ContactPage() {
  return (
    <section className="container py-8 pb-28 md:py-12 md:pb-24">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Support</p>
          <h1 className="mt-2 text-3xl font-black md:text-4xl">Contact us</h1>
          <p className="mt-3 text-[var(--muted)]">Need order help, bulk supply, or freshness support? Reach us here.</p>
          <div className="mt-6 space-y-3">
            <Info icon={<Phone size={18} />} text={siteConfig.phone} />
            <Info icon={<Mail size={18} />} text={siteConfig.email} />
            <Info icon={<MapPin size={18} />} text="Jaipur, Rajasthan" />
          </div>
        </div>
        <form className="card p-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="rounded-md border border-[var(--border)] px-3 py-3" placeholder="Name" />
            <input className="rounded-md border border-[var(--border)] px-3 py-3" placeholder="Phone" />
          </div>
          <input className="mt-4 w-full rounded-md border border-[var(--border)] px-3 py-3" placeholder="Subject" />
          <textarea className="mt-4 min-h-36 w-full rounded-md border border-[var(--border)] px-3 py-3" placeholder="Message" />
          <button className="mt-4 rounded-md bg-[var(--brand)] px-5 py-3 font-bold text-white" type="button">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

function Info({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-[var(--border)] bg-white p-3">
      <span className="text-[var(--brand)]">{icon}</span>
      <span className="font-semibold">{text}</span>
    </div>
  );
}
