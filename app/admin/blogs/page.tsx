import { AdminShell } from "@/components/admin/admin-shell";
import { DataTable } from "@/components/admin/data-table";
import { blogs } from "@/lib/mock-data";

export default function AdminBlogsPage() {
  return (
    <AdminShell>
      <h1 className="text-3xl font-black">Blogs</h1>
      <div className="mt-5">
        <DataTable columns={["Title", "Slug", "Published"]} rows={blogs.map((blog) => [blog.title, blog.slug, blog.publishedAt])} />
      </div>
    </AdminShell>
  );
}
