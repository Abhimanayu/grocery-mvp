"use client";

export function PaymentSelector({ value, onChange }: { value: "COD" | "RAZORPAY"; onChange: (value: "COD" | "RAZORPAY") => void }) {
  return (
    <section className="card p-4">
      <h2 className="text-xl font-black">Payment</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {[
          ["COD", "Cash on delivery"],
          ["RAZORPAY", "Razorpay online"]
        ].map(([id, label]) => (
          <button
            className={`rounded-md border p-4 text-left font-bold ${value === id ? "border-[var(--brand)] bg-[#e7f6df] text-[var(--brand)]" : "border-[var(--border)] bg-white"}`}
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
