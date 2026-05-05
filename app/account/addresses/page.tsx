export const metadata = {
  title: "Addresses"
};

export default function AccountAddressesPage() {
  return (
    <section className="container py-10 pb-24">
      <div className="card max-w-3xl p-5">
        <h1 className="text-3xl font-black">Addresses</h1>
        <p className="mt-2 text-[var(--muted)]">Saved address management is ready for OTP-authenticated users.</p>
      </div>
    </section>
  );
}
