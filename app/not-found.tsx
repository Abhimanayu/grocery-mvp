import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand)]">404</p>
        <h1 className="mt-2 text-3xl font-bold">This aisle is empty</h1>
        <p className="mt-3 text-[var(--muted)]">The page you opened is unavailable or has moved.</p>
        <Link className="mt-6 inline-flex rounded-md bg-[var(--brand)] px-5 py-3 font-semibold text-white" href="/shop">
          Continue shopping
        </Link>
      </div>
    </section>
  );
}
