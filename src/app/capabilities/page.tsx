import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import { companyData } from "@/data/companyData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities",
  description: `Explore the manufacturing capabilities of ${companyData.name} — from design to delivery.`,
};

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="border-b border-[#303030] bg-[#080808]">
          <div className="container-kps py-20">
            <p className="text-label-copper mb-4">CAPABILITIES</p>
            <h1
              className="text-display text-[#F5F5F0] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              MANUFACTURING
              <br />
              <span className="text-[#9A9A9A]">EXPERTISE.</span>
            </h1>
            <p className="text-base text-[#9A9A9A] max-w-xl leading-relaxed">
              Every product we manufacture goes through a rigorous process
              of design, assembly, testing, and quality control.
            </p>
          </div>
        </div>

        {/* Process */}
        <ManufacturingProcess />

        {/* Product ranges */}
        <div className="border-y border-[#303030] bg-[#101010]">
          <div className="container-kps py-16">
            <p className="text-label-copper mb-6">WHAT WE MANUFACTURE</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "ELECTRONIC MOTHERBOARDS",
                  description:
                    "Precision-built control boards for industrial, commercial, and OEM applications. Custom configurations available.",
                  href: "/products/motherboards",
                  cta: "VIEW MOTHERBOARDS",
                },
                {
                  title: "POWER TRANSFORMERS",
                  description:
                    "Engineered transformer solutions for electronics and industrial power applications. Standard and custom ratings.",
                  href: "/products/transformers",
                  cta: "VIEW TRANSFORMERS",
                },
              ].map((item) => (
                <div key={item.title} className="border border-[#303030] p-6 bg-[#080808]">
                  <h3 className="font-heading text-base font-semibold text-[#F5F5F0] mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Link href={item.href} className="btn-ghost">
                    {item.cta}
                    <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="container-kps py-16 text-center">
          <p className="text-label-copper mb-3">READY TO ORDER?</p>
          <h2 className="font-heading text-2xl font-semibold text-[#F5F5F0] mb-6">
            DISCUSS YOUR REQUIREMENTS
          </h2>
          <Link href="/contact" className="btn-primary">
            CONTACT OUR TEAM
            <ArrowRight size={13} />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
