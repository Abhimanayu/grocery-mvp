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
    <div className="inline-grid grid-cols-[36px_42px_36px] overflow-hidden rounded-md border border-[var(--border)] bg-white">
      <button className="grid h-9 place-items-center disabled:opacity-40" disabled={value <= min} onClick={() => onChange(value - 1)} aria-label="Decrease quantity">
        <Minus size={16} />
      </button>
      <span className="grid h-9 place-items-center border-x border-[var(--border)] text-sm font-bold">{value}</span>
      <button className="grid h-9 place-items-center disabled:opacity-40" disabled={value >= max} onClick={() => onChange(value + 1)} aria-label="Increase quantity">
        <Plus size={16} />
      </button>
    </div>
  );
}
