"use client";

import type { AddressInput } from "@/lib/types";

type AddressFormProps = {
  value: AddressInput;
  onChange: (value: AddressInput) => void;
};

export function AddressForm({ value, onChange }: AddressFormProps) {
  function set<K extends keyof AddressInput>(key: K, nextValue: AddressInput[K]) {
    onChange({ ...value, [key]: nextValue });
  }

  return (
    <section className="card p-4 md:p-5">
      <h2 className="text-lg font-black md:text-xl">Delivery address</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <input className="h-11 rounded-xl border border-[var(--border)] px-3" placeholder="Name" value={value.name} onChange={(event) => set("name", event.target.value)} />
        <input className="h-11 rounded-xl border border-[var(--border)] px-3" placeholder="Phone" value={value.phone} onChange={(event) => set("phone", event.target.value)} />
        <input className="h-11 rounded-xl border border-[var(--border)] px-3 sm:col-span-2" placeholder="House / street" value={value.line1} onChange={(event) => set("line1", event.target.value)} />
        <input className="h-11 rounded-xl border border-[var(--border)] px-3" placeholder="Landmark" value={value.line2 ?? ""} onChange={(event) => set("line2", event.target.value)} />
        <input className="h-11 rounded-xl border border-[var(--border)] px-3" placeholder="City" value={value.city} onChange={(event) => set("city", event.target.value)} />
        <input className="h-11 rounded-xl border border-[var(--border)] px-3" placeholder="Pincode" value={value.pincode} onChange={(event) => set("pincode", event.target.value)} />
      </div>
    </section>
  );
}
