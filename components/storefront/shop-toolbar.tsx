import { ArrowDownAZ, Clock3, MapPin, ShieldCheck } from "lucide-react";

export function ShopToolbar({ count }: { count: number }) {
  return (
    <div className="mb-4 grid gap-3 xl:grid-cols-[1fr_auto]">
      <div className="grid gap-3 sm:grid-cols-3">
        <TrustPill icon={<Clock3 size={17} />} title="Today delivery" text="Selected Jaipur zones" />
        <TrustPill icon={<ShieldCheck size={17} />} title="Fresh check" text="Quality packed" />
        <TrustPill icon={<MapPin size={17} />} title="302021 ready" text="Serviceable pincode" />
      </div>
      <div className="flex gap-2">
        <div className="inline-flex h-11 items-center gap-2 rounded-full border border-[#d7edcc] bg-[#f8fffa] px-4 text-sm font-bold text-[var(--muted)]">
          Ready for same-day dispatch
        </div>
        <div className="inline-flex h-11 items-center gap-2 rounded-full border border-[#d7edcc] bg-white px-4 text-sm font-bold">
          <ArrowDownAZ size={17} />
          Popular
        </div>
      </div>
      <p className="text-sm font-semibold text-[var(--muted)] xl:col-span-2">
        Showing {count} handpicked items. Prices and stock are checked before delivery.
      </p>
    </div>
  );
}

function TrustPill({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[#d7edcc] bg-white px-4 py-3">
      <span className="grid size-9 place-items-center rounded-full bg-[#ddffd5] text-[var(--brand)]">{icon}</span>
      <span>
        <span className="block text-sm font-black">{title}</span>
        <span className="text-xs font-semibold text-[var(--muted)]">{text}</span>
      </span>
    </div>
  );
}
