import { blogs } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blogs",
  description: "Fresh grocery tips and seasonal buying guides."
};

export default function BlogsPage() {
  return (
    <section className="container py-10 pb-24">
      <h1 className="text-3xl font-black">Fresh grocery guides</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {blogs.map((blog) => (
          <Link className="card grid overflow-hidden md:grid-cols-[220px_1fr]" href={`/blog/${blog.slug}`} key={blog.id}>
            <div className="relative min-h-48">
              <Image src={blog.image} alt={blog.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 220px" />
            </div>
            <div className="p-5">
              <p className="text-sm font-bold text-[var(--brand)]">{blog.publishedAt}</p>
              <h2 className="mt-2 text-xl font-black">{blog.title}</h2>
              <p className="mt-2 text-sm text-[var(--muted)]">{blog.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
