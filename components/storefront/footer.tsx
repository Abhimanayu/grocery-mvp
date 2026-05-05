import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/mock-data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--brand-dark)] pb-20 pt-12 text-white md:pb-8">
      <div className="container grid gap-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link className="relative block h-14 w-36 rounded-md bg-white px-3 py-2" href="/" aria-label="Foydn home">
            <Image src={siteConfig.logo} alt="Foydn" fill className="object-contain p-2" sizes="144px" />
          </Link>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            Fresh fruits and vegetables delivered across Jaipur with careful packing and local support.
          </p>
          <div className="mt-5 flex gap-3">
            <Link className="grid size-10 place-items-center rounded-md bg-white/10" href="https://www.instagram.com/foydn.in/" aria-label="Instagram">
              <Instagram size={18} />
            </Link>
            <Link className="grid size-10 place-items-center rounded-md bg-white/10" href="https://www.facebook.com/p/Foydn-61553555259260" aria-label="Facebook">
              <Facebook size={18} />
            </Link>
          </div>
        </div>
        <FooterLinks title="Shop" links={[["Fresh Vegetables", "/shop/fresh-vegetables"], ["Fresh Fruits", "/shop/fresh-fruits"], ["Leafy Greens", "/shop/leafy-greens"], ["Cut & Peeled", "/shop/cut-peeled"]]} />
        <FooterLinks title="Company" links={[["About", "/about"], ["Contact", "/contact"], ["FAQs", "/faqs"], ["Blogs", "/blogs"]]} />
        <div>
          <h3 className="font-bold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/75">
            <li className="flex gap-2"><Phone size={17} /> {siteConfig.phone}</li>
            <li className="flex gap-2"><Mail size={17} /> {siteConfig.email}</li>
            <li className="flex gap-2"><MapPin size={17} /> Jaipur, Rajasthan</li>
          </ul>
          <div className="mt-5 space-y-2 text-sm text-white/70">
            <Link className="block" href="/privacy-policy">Privacy Policy</Link>
            <Link className="block" href="/shipping-policy">Shipping Policy</Link>
            <Link className="block" href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t border-white/10 pt-5 text-sm text-white/55">
        © 2026 Foydn Fresh. Built for fast local grocery delivery in Jaipur.
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <div className="mt-4 space-y-2 text-sm text-white/70">
        {links.map(([label, href]) => (
          <Link className="block hover:text-white" href={href} key={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

