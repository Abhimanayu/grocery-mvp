"use client";

import { Minus, Plus } from "lucide-react";

type QuantityStepperProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

export function QuantityStepper({ value, min = 1, max = 99, onChange }: QuantityStepperProps) {
  return (
    <div className="inline-grid grid-cols-[38px_44px_38px] overflow-hidden rounded-full border border-[#d7edcc] bg-white shadow-[0_8px_18px_rgba(57,64,74,0.05)]">
      <button className="grid h-10 place-items-center transition active:scale-90 disabled:opacity-40" disabled={value <= min} onClick={() => onChange(value - 1)} aria-label="Decrease quantity" type="button">
        <Minus size={16} />
      </button>
      <span className="grid h-10 place-items-center border-x border-[#d7edcc] text-sm font-black text-[var(--brand-dark)]">{value}</span>
      <button className="grid h-10 place-items-center bg-[#f8fffa] text-[var(--brand)] transition active:scale-90 disabled:opacity-40" disabled={value >= max} onClick={() => onChange(value + 1)} aria-label="Increase quantity" type="button">
        <Plus size={16} />
      </button>
    </div>
  );
}
