import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/mock-data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--brand-dark)] pb-20 pt-8 text-white md:pb-8 md:pt-12">
      <div className="container grid gap-6 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-8">
        <div>
          <Link className="relative block h-12 w-32 rounded-md bg-white px-3 py-2 md:h-14 md:w-36" href="/" aria-label="Foydn home">
            <Image src={siteConfig.logo} alt="Foydn" fill className="object-contain p-2" sizes="144px" />
          </Link>
          <p className="mt-3 max-w-sm text-xs leading-5 text-white/70 md:text-sm">
            Fresh fruits and vegetables delivered across Jaipur with careful packing and local support.
          </p>
          <div className="mt-4 flex gap-3 md:mt-5">
            <Link className="grid size-9 place-items-center rounded-md bg-white/10 md:size-10" href="https://www.instagram.com/foydn.in/" aria-label="Instagram">
              <Instagram size={18} />
            </Link>
            <Link className="grid size-9 place-items-center rounded-md bg-white/10 md:size-10" href="https://www.facebook.com/p/Foydn-61553555259260" aria-label="Facebook">
              <Facebook size={18} />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 md:contents">
          <FooterLinks title="Shop" links={[["Fresh Vegetables", "/shop/fresh-vegetables"], ["Fresh Fruits", "/shop/fresh-fruits"], ["Leafy Greens", "/shop/leafy-greens"], ["Cut & Peeled", "/shop/cut-peeled"]]} />
          <FooterLinks title="Company" links={[["About", "/about"], ["Contact", "/contact"], ["FAQs", "/faqs"], ["Blogs", "/blogs"]]} />
        </div>
        <div>
          <h3 className="text-sm font-bold md:text-base">Contact</h3>
          <ul className="mt-3 space-y-2 text-xs text-white/75 md:mt-4 md:space-y-3 md:text-sm">
            <li className="flex gap-2"><Phone size={16} /> {siteConfig.phone}</li>
            <li className="flex gap-2"><Mail size={16} /> {siteConfig.email}</li>
            <li className="flex gap-2"><MapPin size={16} /> Jaipur, Rajasthan</li>
          </ul>
          <div className="mt-4 space-y-2 text-xs text-white/70 md:mt-5 md:text-sm">
            <Link className="block" href="/privacy-policy">Privacy Policy</Link>
            <Link className="block" href="/shipping-policy">Shipping Policy</Link>
            <Link className="block" href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t border-white/10 pt-4 text-xs text-white/55 md:mt-10 md:pt-5 md:text-sm">
        Copyright 2026 Foydn Fresh. Built for fast local grocery delivery in Jaipur.
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <div>
      <h3 className="text-sm font-bold md:text-base">{title}</h3>
      <div className="mt-3 space-y-2 text-xs text-white/70 md:mt-4 md:text-sm">
        {links.map(([label, href]) => (
          <Link className="block hover:text-white" href={href} key={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}