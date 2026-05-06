export default function Loading() {
  return (
    <section className="container py-6 pb-24">
      <div className="section-surface p-5">
        <div className="h-8 w-40 animate-pulse rounded-full bg-[#e7f6df]" />
        <div className="mt-5 h-14 w-3/4 animate-pulse rounded-2xl bg-[#eef3e9]" />
        <div className="mt-3 h-5 w-full animate-pulse rounded-full bg-[#eef3e9]" />
        <div className="mt-2 h-5 w-2/3 animate-pulse rounded-full bg-[#eef3e9]" />
      </div>
      <div className="mt-5 grid grid-cols-2 gap-2.5 md:grid-cols-4">
        {[0, 1, 2, 3].map((item) => (
          <div className="card overflow-hidden bg-white" key={item}>
            <div className="aspect-square animate-pulse bg-[#eef3e9]" />
            <div className="space-y-3 p-3">
              <div className="h-4 w-20 animate-pulse rounded-full bg-[#eef3e9]" />
              <div className="h-6 w-28 animate-pulse rounded-full bg-[#eef3e9]" />
              <div className="h-10 w-full animate-pulse rounded-2xl bg-[#eef3e9]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
