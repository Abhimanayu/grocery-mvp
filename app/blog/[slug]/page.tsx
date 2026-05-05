import { notFound } from "next/navigation";
import { getBlogBySlug } from "@/lib/catalog";
import Image from "next/image";

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  return (
    <article className="container py-10 pb-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">{blog.publishedAt}</p>
        <h1 className="mt-2 text-4xl font-black">{blog.title}</h1>
        <p className="mt-3 text-lg text-[var(--muted)]">{blog.excerpt}</p>
        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-lg">
          <Image src={blog.image} alt={blog.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 760px" />
        </div>
        <div className="mt-6 space-y-4 leading-7 text-[var(--muted)]">
          <p>
            Fresh grocery shopping works best when customers can quickly compare seasonal availability, unit size, and
            delivery timing. Foydn Fresh uses this blog section as an SEO-ready content area for useful local guides.
          </p>
          <p>
            In production, these posts will be editable from the admin panel and published with structured metadata.
          </p>
        </div>
      </div>
    </article>
  );
}
