"use client";

import { siteConfig } from "@/lib/mock-data";
import { MessageCircleMore } from "lucide-react";
import { usePathname } from "next/navigation";

export function WhatsappFloatingButton() {
  const pathname = usePathname();
  const isCheckoutFlow = pathname.startsWith("/cart") || pathname.startsWith("/checkout");

  return (
    <a
      aria-label="Chat on WhatsApp"
      className={`fixed right-4 z-40 grid size-12 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.28)] transition hover:-translate-y-0.5 md:bottom-6 md:right-6 md:size-14 ${
        isCheckoutFlow ? "bottom-28" : "bottom-24"
      }`}
      href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}?text=Hi%20Foydn%2C%20I%20need%20help%20with%20my%20grocery%20order`}
      rel="noreferrer"
      target="_blank"
    >
      <MessageCircleMore size={24} />
    </a>
  );
}
