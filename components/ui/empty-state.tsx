import Link from "next/link";

type EmptyStateProps = {
  title: string;
  text: string;
  href?: string;
  action?: string;
};

export function EmptyState({ title, text, href = "/shop", action = "Shop now" }: EmptyStateProps) {
  return (
    <div className="card grid place-items-center px-4 py-14 text-center">
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mx-auto mt-2 max-w-md text-[var(--muted)]">{text}</p>
        <Link className="mt-5 inline-flex rounded-md bg-[var(--brand)] px-5 py-3 font-semibold text-white" href={href}>
          {action}
        </Link>
      </div>
    </div>
  );
}
