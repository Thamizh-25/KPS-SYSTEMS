import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { companyData } from "@/data/companyData";

const productLinks = [
  { label: "All Products", href: "/products" },
  { label: "Motherboards", href: "/products/motherboards" },
  { label: "Transformers", href: "/products/transformers" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#303030] bg-[#080808]">
      {/* Main Footer */}
      <div className="container-kps py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative w-8 h-8 flex items-center justify-center border border-[#B87333]">
                <div className="w-4 h-4 border border-[#B87333] rotate-45" />
              </div>
              <span
                className="font-heading font-bold text-base tracking-widest"
                style={{ letterSpacing: "0.2em" }}
              >
                {companyData.name}
              </span>
            </Link>
            <p className="text-sm text-[#9A9A9A] leading-relaxed max-w-xs">
              {companyData.shortTagline}
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-label text-[#F5F5F0] mb-5">PRODUCTS</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-label text-[#F5F5F0] mb-5">COMPANY</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-label text-[#F5F5F0] mb-5">CONTACT</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${companyData.phone}`}
                  className="flex items-center gap-2 text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors duration-200"
                >
                  <Phone size={13} className="text-[#B87333]" />
                  {companyData.phone}
                </a>
              </li>
              <li>
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors duration-200"
                >
                  <MessageCircle size={13} className="text-[#B87333]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-center gap-2 text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors duration-200"
                >
                  <Mail size={13} className="text-[#B87333]" />
                  {companyData.email}
                </a>
              </li>
              <li>
                <a
                  href={companyData.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors duration-200"
                >
                  <MapPin size={13} className="text-[#B87333] mt-0.5 shrink-0" />
                  <span>{companyData.address.full}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#202020]">
        <div className="container-kps py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-label text-[#6b6b6b]">
            © {year} {companyData.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-label text-[#6b6b6b]">
              PRECISION ELECTRONICS & POWER
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
