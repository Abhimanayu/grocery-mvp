export function LoadingSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="card animate-pulse p-3" key={index}>
          <div className="aspect-square rounded-md bg-slate-200" />
          <div className="mt-4 h-4 rounded bg-slate-200" />
          <div className="mt-2 h-4 w-2/3 rounded bg-slate-200" />
          <div className="mt-5 h-10 rounded bg-slate-200" />
        </div>
      ))}
    </div>
  );
}
