"use client";

import { useState } from "react";

type CheckoutLoginStepProps = {
  onVerified: (phone: string) => void;
};

export function CheckoutLoginStep({ onVerified }: CheckoutLoginStepProps) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState("");

  async function sendOtp() {
    setMessage("");
    const response = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone })
    });
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.error ?? "Unable to send OTP");
      return;
    }
    setSent(true);
    setMessage(data.mockOtp ? `Mock OTP: ${data.mockOtp}` : "OTP sent");
  }

  async function verify() {
    setMessage("");
    const response = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, otp })
    });
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.error ?? "Invalid OTP");
      return;
    }
    onVerified(data.phone);
    setMessage("Phone verified");
  }

  return (
    <section className="card p-4">
      <h2 className="text-xl font-black">Login with OTP</h2>
      <p className="mt-1 text-sm text-[var(--muted)]">Cart stays guest-friendly. We verify phone only before order placement.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
        <input className="h-11 rounded-md border border-[var(--border)] px-3" placeholder="10 digit mobile number" value={phone} onChange={(event) => setPhone(event.target.value)} />
        <button className="rounded-md bg-[var(--brand)] px-5 font-bold text-white" type="button" onClick={sendOtp}>
          Send OTP
        </button>
      </div>
      {sent ? (
        <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
          <input className="h-11 rounded-md border border-[var(--border)] px-3" placeholder="Enter OTP" value={otp} onChange={(event) => setOtp(event.target.value)} />
          <button className="rounded-md border border-[var(--border)] px-5 font-bold" type="button" onClick={verify}>
            Verify OTP
          </button>
        </div>
      ) : null}
      {message ? <p className="mt-2 text-sm font-bold text-[var(--brand)]">{message}</p> : null}
    </section>
  );
}
