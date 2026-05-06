import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/storefront/footer";
import { Header } from "@/components/storefront/header";
import { MobileBottomNav } from "@/components/storefront/mobile-bottom-nav";
import { CartProvider } from "@/components/storefront/cart-provider";
import { siteConfig } from "@/lib/mock-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} - Fresh Grocery Delivery in Jaipur`,
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Order fresh fruits, vegetables, leafy greens, and daily groceries online with same-day delivery in Jaipur.",
  openGraph: {
    title: `${siteConfig.name} - Fresh Grocery Delivery in Jaipur`,
    description:
      "Handpicked fruits and vegetables delivered same day across Jaipur.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <MobileBottomNav />
        </CartProvider>
      </body>
    </html>
  );
}
