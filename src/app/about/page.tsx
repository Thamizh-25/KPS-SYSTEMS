import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companyData } from "@/data/companyData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${companyData.name} — manufacturer of precision electronic motherboards and power transformers.`,
};

const sections = [
  {
    number: "01",
    title: "WHO WE ARE",
    content: companyData.about.who,
  },
  {
    number: "02",
    title: "WHAT WE BUILD",
    content: companyData.about.what,
  },
  {
    number: "03",
    title: "HOW WE WORK",
    content: companyData.about.how,
  },
  {
    number: "04",
    title: "WHY WORK WITH US",
    content: companyData.about.why,
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="border-b border-[#303030] bg-[#080808]">
          <div className="container-kps py-20">
            <p className="text-label-copper mb-4">ABOUT</p>
            <h1
              className="text-display text-[#F5F5F0] mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              PRECISION
              <br />
              <span className="text-[#9A9A9A]">BY DESIGN.</span>
            </h1>
            <p className="text-base text-[#9A9A9A] max-w-xl leading-relaxed">
              {companyData.shortTagline}
            </p>
          </div>
        </div>

        {/* About sections */}
        <div className="container-kps py-16">
          <div className="max-w-3xl mx-auto space-y-0">
            {sections.map((section, i) => (
              <div
                key={section.number}
                className={`py-12 ${i < sections.length - 1 ? "border-b border-[#303030]" : ""}`}
              >
                <div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6">
                  <div>
                    <span className="font-mono text-xs text-[#B87333]">{section.number}</span>
                    <h2 className="font-heading text-sm font-semibold text-[#F5F5F0] mt-1 tracking-wide">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-sm text-[#9A9A9A] leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-[#303030] bg-[#101010]">
          <div className="container-kps py-16 text-center">
            <p className="text-label-copper mb-3">EXPLORE FURTHER</p>
            <h2 className="font-heading text-2xl font-semibold text-[#F5F5F0] mb-6">
              SEE HOW WE WORK
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/capabilities" className="btn-primary">
                OUR CAPABILITIES
                <ArrowRight size={13} />
              </Link>
              <Link href="/products" className="btn-secondary">
                VIEW PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
