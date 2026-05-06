"use client";

export function DeliverySlotPicker() {
  return (
    <section className="card p-4 md:p-5">
      <h2 className="text-lg font-black md:text-xl">Delivery slot</h2>
      <div className="mt-4 grid gap-2 sm:grid-cols-3 md:gap-3">
        {["Today 6-8 PM", "Tomorrow 8-10 AM", "Tomorrow 5-7 PM"].map((slot, index) => (
          <button
            className={`rounded-xl border p-3 text-left text-sm font-bold ${index === 0 ? "border-[var(--brand)] bg-[#e7f6df] text-[var(--brand)]" : "border-[var(--border)] bg-white"}`}
            key={slot}
            type="button"
          >
            {slot}
          </button>
        ))}
      </div>
    </section>
  );
}
