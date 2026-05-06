"use client";

export function PaymentSelector({ value, onChange }: { value: "COD" | "RAZORPAY"; onChange: (value: "COD" | "RAZORPAY") => void }) {
  return (
    <section className="card p-4 md:p-5">
      <h2 className="text-lg font-black md:text-xl">Payment</h2>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 md:gap-3">
        {[
          ["COD", "Cash on delivery"],
          ["RAZORPAY", "Razorpay online"]
        ].map(([id, label]) => (
          <button
            className={`rounded-xl border p-4 text-left text-sm font-bold ${value === id ? "border-[var(--brand)] bg-[#e7f6df] text-[var(--brand)]" : "border-[var(--border)] bg-white"}`}
            key={id}
            type="button"
            onClick={() => onChange(id as "COD" | "RAZORPAY")}
          >
            {label}
          </button>
        ))}
      </div>
    </section>
  );
}
