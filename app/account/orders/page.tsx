import { EmptyState } from "@/components/ui/empty-state";

export const metadata = {
  title: "My Orders"
};

export default function AccountOrdersPage() {
  return (
    <section className="container py-10 pb-24">
      <EmptyState title="No account orders yet" text="Orders created in mock mode show on the success page. Database persistence is ready as the next integration." href="/shop" />
    </section>
  );
}
