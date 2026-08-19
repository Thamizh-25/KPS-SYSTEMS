import Link from "next/link";
import { Phone, MessageCircle, Mail, ArrowRight } from "lucide-react";
import { companyData } from "@/data/companyData";

interface ContactCTAProps {
  headline?: string;
  subtext?: string;
  productName?: string;
  productId?: string;
}

export default function ContactCTA({
  headline = "INTERESTED IN THIS PRODUCT?",
  subtext = "Talk directly with our team about availability, technical requirements, customization and pricing.",
  productName,
  productId,
}: ContactCTAProps) {
  const enquiryHref = productName
    ? `/contact?product=${encodeURIComponent(productName)}&id=${productId ?? ""}`
    : "/contact";

  return (
    <div className="border border-[#303030] bg-[#101010] p-6 md:p-8">
      <p className="text-label-copper mb-2">DIRECT MANUFACTURER</p>
      <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#F5F5F0] mb-3 tracking-tight">
        {headline}
      </h3>
      <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6 max-w-sm">
        {subtext}
      </p>

      <div className="space-y-3 mb-6">
        <Link href={enquiryHref} className="btn-primary w-full justify-center">
          REQUEST A QUOTE
          <ArrowRight size={13} />
        </Link>
      </div>

      <div className="pt-5 border-t border-[#202020] grid grid-cols-3 gap-3">
        <a
          href={`tel:${companyData.phone}`}
          className="flex flex-col items-center gap-1.5 p-3 border border-[#303030] hover:border-[#B87333]/50 transition-colors duration-200 group"
        >
          <Phone size={16} className="text-[#9A9A9A] group-hover:text-[#B87333] transition-colors" />
          <span className="text-label text-[#6b6b6b] group-hover:text-[#9A9A9A] transition-colors">CALL</span>
        </a>
        <a
          href={companyData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1.5 p-3 border border-[#303030] hover:border-[#B87333]/50 transition-colors duration-200 group"
        >
          <MessageCircle size={16} className="text-[#9A9A9A] group-hover:text-[#B87333] transition-colors" />
          <span className="text-label text-[#6b6b6b] group-hover:text-[#9A9A9A] transition-colors">WHATSAPP</span>
        </a>
        <a
          href={`mailto:${companyData.email}`}
          className="flex flex-col items-center gap-1.5 p-3 border border-[#303030] hover:border-[#B87333]/50 transition-colors duration-200 group"
        >
          <Mail size={16} className="text-[#9A9A9A] group-hover:text-[#B87333] transition-colors" />
          <span className="text-label text-[#6b6b6b] group-hover:text-[#9A9A9A] transition-colors">EMAIL</span>
        </a>
      </div>
    </div>
  );
}
