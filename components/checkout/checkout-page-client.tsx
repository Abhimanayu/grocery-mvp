"use client";

import { AddressForm } from "@/components/checkout/address-form";
import { CheckoutLoginStep } from "@/components/checkout/checkout-login-step";
import { CouponInput } from "@/components/checkout/coupon-input";
import { DeliverySlotPicker } from "@/components/checkout/delivery-slot-picker";
import { OrderSummary } from "@/components/checkout/order-summary";
import { PaymentSelector } from "@/components/checkout/payment-selector";
import { useCart } from "@/components/storefront/cart-provider";
import { EmptyState } from "@/components/ui/empty-state";
import type { AddressInput } from "@/lib/types";
import { Gift, Repeat2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CheckoutPageClient() {
  const { cart, isLoading, refreshCart } = useCart();
  const router = useRouter();
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"COD" | "RAZORPAY">("COD");
  const [message, setMessage] = useState("");
  const [address, setAddress] = useState<AddressInput>({
    name: "",
    phone: "",
    line1: "",
    line2: "",
    city: "Jaipur",
    pincode: "302021"
  });

  async function placeOrder() {
    setMessage("");
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address, paymentMethod, couponCode })
    });
    const data = await response.json();
    if (!response.ok) {
      setMessage(data.error ?? "Unable to place order");
      return;
    }
    await refreshCart();
    router.push(`/checkout/success?order=${data.id}`);
  }

  if (isLoading) {
    return (
      <section className="container grid gap-6 py-6 pb-24 lg:grid-cols-[1fr_360px]">
        <div className="space-y-4">
          <div>
            <div className="h-4 w-24 animate-pulse rounded bg-[#eef3e9]" />
            <div className="mt-2 h-10 w-52 animate-pulse rounded-xl bg-[#eef3e9]" />
          </div>
          {[0, 1, 2, 3].map((index) => (
            <div className="card space-y-3 p-5" key={index}>
              <div className="h-5 w-36 animate-pulse rounded bg-[#eef3e9]" />
              <div className="h-12 w-full animate-pulse rounded-xl bg-[#eef3e9]" />
              <div className="h-12 w-full animate-pulse rounded-xl bg-[#eef3e9]" />
            </div>
          ))}
        </div>
        <div className="card space-y-3 p-5">
          <div className="h-5 w-28 animate-pulse rounded bg-[#eef3e9]" />
          <div className="h-4 w-full animate-pulse rounded bg-[#eef3e9]" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-[#eef3e9]" />
          <div className="h-12 w-full animate-pulse rounded-xl bg-[#eef3e9]" />
        </div>
      </section>
    );
  }

  if (!cart?.items.length) {
    return <section className="container py-8 pb-24"><EmptyState title="Cart is empty" text="Add items to continue checkout." /></section>;
  }

  return (
    <section className="container grid gap-5 py-6 pb-24 lg:grid-cols-[1fr_360px]">
      <div className="space-y-4">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Checkout</p>
          <h1 className="mt-1 text-2xl font-black md:text-3xl">Place your order</h1>
          <p className="mt-2 text-sm font-semibold text-[var(--muted)]">ETA 45-90 min after confirmation in active Jaipur zones.</p>
        </div>
        <CheckoutLoginStep
          onVerified={(phone) => {
            setPhoneVerified(true);
            setAddress((current) => ({ ...current, phone }));
          }}
        />
        <AddressForm value={address} onChange={setAddress} />
        <DeliverySlotPicker />
        <PaymentSelector value={paymentMethod} onChange={setPaymentMethod} />
        <section className="card p-4">
          <h2 className="text-lg font-black md:text-xl">Coupon</h2>
          <p className="mt-1 text-sm text-[var(--muted)]">Try FRESH50 for the demo discount flow.</p>
          <div className="mt-4">
            <CouponInput onApplied={setCouponCode} />
          </div>
        </section>
        <section className="grid gap-3 sm:grid-cols-2">
          <div className="card p-4">
            <span className="inline-flex rounded-full bg-[#eef9e8] p-2 text-[var(--brand)]"><Repeat2 size={17} /></span>
            <h2 className="mt-3 text-base font-black">Make this a weekly basket</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">Useful for repeat fruit, sabzi, and breakfast orders. Owner can enable subscription plans in admin.</p>
            <label className="mt-3 flex items-center gap-2 text-sm font-bold text-[var(--brand-dark)]">
              <input type="checkbox" className="size-4 accent-[var(--brand)]" />
              Remind me every week
            </label>
          </div>
          <div className="card p-4">
            <span className="inline-flex rounded-full bg-[#fff5da] p-2 text-[#9a6500]"><Gift size={17} /></span>
            <h2 className="mt-3 text-base font-black">Refer and earn</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--muted)]">After order placement, customers can share a referral code and earn wallet credit on the next order.</p>
            <p className="mt-3 rounded-2xl bg-[#f8fffa] px-3 py-2 text-xs font-black text-[var(--brand)]">Demo code: FOYDNFRIEND</p>
          </div>
        </section>
        {message ? <p className="rounded-md bg-red-50 p-3 text-sm font-bold text-red-700">{message}</p> : null}
      </div>
      <div className="space-y-3">
        <OrderSummary cart={cart} />
        <button
          className="w-full rounded-xl bg-[var(--brand)] px-5 py-3 font-bold text-white disabled:opacity-60"
          disabled={!phoneVerified}
          onClick={placeOrder}
          type="button"
        >
          {phoneVerified ? "Place order" : "Verify phone to place order"}
        </button>
      </div>
    </section>
  );
}
