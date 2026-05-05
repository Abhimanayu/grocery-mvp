import { EmptyState } from "@/components/ui/empty-state";

export const metadata = {
  title: "Wishlist",
  description: "Save favorite groceries for later."
};

export default function WishlistPage() {
  return (
    <section className="container py-10 pb-24">
      <EmptyState title="Wishlist is ready for login" text="Once OTP login is connected, customers can save and reorder favorite grocery items." />
    </section>
  );
}
