import type { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  action?: ReactNode;
};

export function SectionHeader({ eyebrow, title, action }: SectionHeaderProps) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4 md:mb-6">
      <div>
        {eyebrow ? <p className="text-sm font-bold uppercase tracking-wide text-[var(--orange)]">{eyebrow}</p> : null}
        <h2 className="mt-1 text-balance text-2xl font-black text-[var(--brand-dark)] md:text-3xl">{title}</h2>
      </div>
      {action ? <div className="text-sm font-semibold text-[var(--brand)]">{action}</div> : null}
    </div>
  );
}
