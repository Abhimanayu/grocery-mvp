"use client";

export function DeliverySlotPicker() {
  return (
    <section className="card p-4">
      <h2 className="text-xl font-black">Delivery slot</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {["Today 6-8 PM", "Tomorrow 8-10 AM", "Tomorrow 5-7 PM"].map((slot, index) => (
          <button
            className={`rounded-md border p-3 text-left font-bold ${index === 0 ? "border-[var(--brand)] bg-[#e7f6df] text-[var(--brand)]" : "border-[var(--border)] bg-white"}`}
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
