"use client";

import { BadgePercent, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "foydn_coupon_popup_seen";

export function CouponPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = window.localStorage.getItem(STORAGE_KEY);
    if (seen) return;
    const timer = window.setTimeout(() => setVisible(true), 1800);
    return () => window.clearTimeout(timer);
  }, []);

  function close() {
    window.localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-[154px] z-50 mx-auto max-w-md rounded-[24px] border border-[#d7edcc] bg-white p-4 shadow-[0_18px_48px_rgba(36,49,38,0.2)] md:bottom-6 md:left-auto md:right-6 md:mx-0 md:w-96">
      <button className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-[#f8fffa] text-[var(--muted)]" aria-label="Close coupon popup" type="button" onClick={close}>
        <X size={16} />
      </button>
      <span className="inline-flex rounded-full bg-[#fff5da] p-2 text-[#9a6500]">
        <BadgePercent size={19} />
      </span>
      <p className="mt-3 text-xs font-black uppercase tracking-[0.14em] text-[var(--orange)]">Today offer</p>
      <h2 className="mt-1 text-xl font-black leading-tight text-[var(--brand-dark)]">Save with FRESH50</h2>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Apply on checkout for eligible baskets above Rs 299. Helps the demo feel conversion-ready.</p>
      <div className="mt-4 flex gap-2">
        <Link className="flex-1 rounded-full bg-[var(--brand)] px-4 py-3 text-center text-sm font-black text-white" href="/checkout" onClick={close}>
          Use coupon
        </Link>
        <button className="rounded-full border border-[#d7edcc] px-4 py-3 text-sm font-black text-[var(--brand-dark)]" type="button" onClick={close}>
          Later
        </button>
      </div>
    </div>
  );
}
