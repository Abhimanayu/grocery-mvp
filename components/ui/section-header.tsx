import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
};

export function SectionHeader({ eyebrow, title, action }: SectionHeaderProps) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4 md:mb-6">
      <div className="min-w-0">
        {eyebrow ? <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--orange)] md:text-sm">{eyebrow}</p> : null}
        <h2 className="mt-1 text-balance text-[1.9rem] font-black leading-tight text-[var(--brand-dark)] md:text-3xl">{title}</h2>
      </div>
      {action ? <div className="rounded-full bg-[#eef9e8] px-3 py-2 text-xs font-black text-[var(--brand)] md:text-sm">{action}</div> : null}
    </div>
  );
}
