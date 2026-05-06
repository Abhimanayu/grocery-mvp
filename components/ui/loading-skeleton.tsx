export function LoadingSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div className="card fade-in-up p-3" key={index}>
          <div className="skeleton aspect-square rounded-md" />
          <div className="skeleton mt-4 h-4 rounded" />
          <div className="skeleton mt-2 h-4 w-2/3 rounded" />
          <div className="skeleton mt-5 h-10 rounded" />
        </div>
      ))}
    </div>
  );
}
