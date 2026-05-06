"use client";

import { useState } from "react";

type CouponInputProps = {
  onApplied: (code: string, discount: number) => void;
};

export function CouponInput({ onApplied }: CouponInputProps) {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  async function applyCoupon() {
    setMessage("");
    const response = await fetch("/api/coupons/validate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code })
    });
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.error ?? "Coupon failed");
      return;
    }
    onApplied(code.toUpperCase(), data.discount ?? 0);
    setMessage(`${code.toUpperCase()} applied`);
  }

  return (
    <div>
      <div className="flex gap-2">
        <input
          className="h-11 flex-1 rounded-md border border-[var(--border)] px-3"
          placeholder="Try FRESH50"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <button className="rounded-md border border-[var(--border)] px-4 font-bold" type="button" onClick={applyCoupon}>
          Apply
        </button>
      </div>
      {message ? <p className="mt-2 text-sm font-semibold text-[var(--brand)]">{message}</p> : null}
    </div>
  );
}
