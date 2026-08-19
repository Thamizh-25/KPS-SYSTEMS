import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import { companyData } from "@/data/companyData";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${companyData.name} for product enquiries, technical questions, and custom requirements.`,
};

interface ContactPageProps {
  searchParams: Promise<{ product?: string; id?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const productName = params.product ?? "";
  const productId = params.id ?? "";

  const contactDetails = [
    {
      icon: Phone,
      label: "PHONE",
      value: companyData.phone,
      href: `tel:${companyData.phone}`,
      description: "Call us directly",
    },
    {
      icon: MessageCircle,
      label: "WHATSAPP",
      value: "Message on WhatsApp",
      href: companyData.whatsappUrl,
      description: "Quick enquiries",
      external: true,
    },
    {
      icon: Mail,
      label: "EMAIL",
      value: companyData.email,
      href: `mailto:${companyData.email}`,
      description: "Detailed enquiries",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: companyData.address.full,
      href: companyData.googleMapsUrl,
      description: "View on maps",
      external: true,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="border-b border-[#303030] bg-[#080808]">
          <div className="container-kps py-20">
            <p className="text-label-copper mb-4">CONTACT</p>
            <h1
              className="text-display text-[#F5F5F0] mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              LET&apos;S BUILD
              <br />
              <span className="text-[#9A9A9A]">SOMETHING RELIABLE.</span>
            </h1>
            <p className="text-base text-[#9A9A9A] max-w-lg">
              Contact our team for product enquiries, technical requirements,
              custom configurations, or any questions.
            </p>
          </div>
        </div>

        {/* Contact content */}
        <div className="container-kps py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            {/* Left: Contact details */}
            <div className="space-y-8">
              <div>
                <p className="text-label text-[#F5F5F0] mb-6">REACH US DIRECTLY</p>
                <div className="space-y-4">
                  {contactDetails.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 p-4 border border-[#303030] bg-[#101010] hover:border-[#B87333]/40 transition-colors duration-200 group"
                      >
                        <div className="w-8 h-8 flex items-center justify-center border border-[#303030] group-hover:border-[#B87333]/50 transition-colors shrink-0">
                          <Icon size={14} className="text-[#9A9A9A] group-hover:text-[#B87333] transition-colors" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-label mb-0.5">{item.label}</p>
                          <p className="text-sm text-[#F5F5F0] truncate">{item.value}</p>
                          <p className="text-xs text-[#6b6b6b] mt-0.5">{item.description}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Business hours placeholder */}
              <div className="border border-[#303030] bg-[#101010] p-5">
                <p className="text-label text-[#F5F5F0] mb-4">BUSINESS HOURS</p>
                <div className="space-y-2">
                  <div className="spec-row mx-0 px-0">
                    <span className="spec-label">MON – SAT</span>
                    <span className="spec-value text-xs">[TO BE ADDED]</span>
                  </div>
                  <div className="spec-row mx-0 px-0">
                    <span className="spec-label">SUNDAY</span>
                    <span className="spec-value text-xs">[TO BE ADDED]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Enquiry form */}
            <div>
              <p className="text-label text-[#F5F5F0] mb-6">
                {productName ? `ENQUIRE ABOUT: ${productName.toUpperCase()}` : "SEND AN ENQUIRY"}
              </p>
              <EnquiryForm
                defaultProductId={productId}
                defaultProductName={productName}
              />
            </div>
          </div>
        </div>

        {/* Google Maps placeholder */}
        <div className="border-t border-[#303030] bg-[#101010] h-64 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={32} className="text-[#303030] mx-auto mb-3" />
            <p className="text-label text-[#6b6b6b] mb-2">LOCATION MAP</p>
            <a
              href={companyData.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-xs"
            >
              OPEN IN GOOGLE MAPS
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
