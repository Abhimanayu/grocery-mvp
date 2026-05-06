"use client";

import type { AddressInput } from "@/lib/types";
import { LocateFixed } from "lucide-react";
import { useState } from "react";

type AddressFormProps = {
  value: AddressInput;
  onChange: (value: AddressInput) => void;
};

export function AddressForm({ value, onChange }: AddressFormProps) {
  const [locationMessage, setLocationMessage] = useState("");

  function set<K extends keyof AddressInput>(key: K, nextValue: AddressInput[K]) {
    onChange({ ...value, [key]: nextValue });
  }

  function useCurrentLocation() {
    if (!("geolocation" in navigator)) {
      setLocationMessage("Current location is not available on this browser.");
      return;
    }

    setLocationMessage("Detecting current location...");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        onChange({
          ...value,
          city: value.city || "Jaipur",
          lat: Number(position.coords.latitude.toFixed(6)),
          lng: Number(position.coords.longitude.toFixed(6))
        });
        setLocationMessage("Current location added for delivery accuracy.");
      },
      () => setLocationMessage("Allow location access to auto-pick delivery point."),
      { enableHighAccuracy: true, timeout: 8000 }
    );
  }

  return (
    <section className="card p-4 md:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-black md:text-xl">Delivery address</h2>
        <button
          className="inline-flex items-center gap-2 rounded-full border border-[#d7edcc] bg-[#f8fffa] px-3 py-2 text-xs font-black text-[var(--brand)]"
          type="button"
          onClick={useCurrentLocation}
        >
          <LocateFixed size={15} />
          Use current location
        </button>
      </div>
      {locationMessage ? <p className="mt-3 rounded-2xl bg-[#f8fffa] px-3 py-2 text-xs font-semibold text-[var(--muted)]">{locationMessage}</p> : null}
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
