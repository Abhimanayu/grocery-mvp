export default function AdminLoginPage() {
  return (
    <section className="container grid min-h-[70vh] place-items-center py-12">
      <form className="card w-full max-w-md p-6">
        <h1 className="text-3xl font-black">Admin login</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">MVP placeholder for role-based admin authentication.</p>
        <input className="mt-5 h-11 w-full rounded-md border border-[var(--border)] px-3" placeholder="Phone or email" />
        <input className="mt-3 h-11 w-full rounded-md border border-[var(--border)] px-3" placeholder="Password" type="password" />
        <button className="mt-5 w-full rounded-md bg-[var(--brand)] px-5 py-3 font-bold text-white" type="button">
          Login
        </button>
      </form>
    </section>
  );
}
