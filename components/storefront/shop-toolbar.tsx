import { ArrowDownAZ, Clock3, MapPin, ShieldCheck } from "lucide-react";

export function ShopToolbar({ count }: { count: number }) {
  return (
    <div className="mb-4 grid gap-3 xl:grid-cols-[1fr_auto]">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        <TrustPill icon={<Clock3 size={17} />} title="Today delivery" text="Selected Jaipur zones" />
        <TrustPill icon={<ShieldCheck size={17} />} title="Fresh check" text="Quality packed" />
        <TrustPill icon={<MapPin size={17} />} title="302021 ready" text="Serviceable pincode" />
      </div>
      <div className="flex flex-wrap gap-2">
        <div className="inline-flex h-10 items-center gap-2 rounded-full border border-[#d7edcc] bg-[#f8fffa] px-3 text-xs font-bold text-[var(--muted)] md:h-11 md:px-4 md:text-sm">
          Ready for same-day dispatch
        </div>
        <div className="inline-flex h-10 items-center gap-2 rounded-full border border-[#d7edcc] bg-white px-3 text-xs font-bold md:h-11 md:px-4 md:text-sm">
          <ArrowDownAZ size={17} />
          Popular
        </div>
      </div>
      <p className="text-xs font-semibold leading-5 text-[var(--muted)] md:text-sm xl:col-span-2">
        Showing {count} handpicked items. Prices and stock are checked before delivery.
      </p>
    </div>
  );
}

function TrustPill({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex min-w-0 flex-col items-start gap-2 rounded-2xl border border-[#d7edcc] bg-white px-3 py-3 md:flex-row md:items-center md:gap-3 md:px-4">
      <span className="grid size-8 place-items-center rounded-full bg-[#ddffd5] text-[var(--brand)] md:size-9">{icon}</span>
      <span>
        <span className="block text-xs font-black leading-4 md:text-sm">{title}</span>
        <span className="text-[10px] font-semibold leading-4 text-[var(--muted)] md:text-xs">{text}</span>
      </span>
    </div>
  );
}
