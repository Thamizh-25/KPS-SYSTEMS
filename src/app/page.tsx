import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CategoryShowcase from "@/components/CategoryShowcase";
import ManufacturingProcess from "@/components/ManufacturingProcess";
import ProductGrid from "@/components/ProductGrid";
import { getFeaturedProducts } from "@/lib/products";
import { companyData } from "@/data/companyData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: companyData.seo.defaultTitle,
  description: companyData.seo.defaultDescription,
};

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <Hero />

        {/* Company introduction */}
        <section className="section bg-[#101010] border-y border-[#303030]">
          <div className="container-kps">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: large type */}
              <div>
                <p className="text-label-copper mb-4">WHO WE ARE</p>
                <h2
                  className="text-display text-[#F5F5F0]"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 4rem)" }}
                >
                  BUILT WITH
                  <br />
                  ENGINEERING
                  <br />
                  <span className="text-[#9A9A9A]">PRECISION.</span>
                </h2>
              </div>

              {/* Right: description */}
              <div className="space-y-5">
                <p className="text-base text-[#9A9A9A] leading-relaxed">
                  {companyData.description}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { label: "PRODUCT TYPES", value: "2 Core Ranges" },
                    { label: "SUPPLY MODEL", value: "Direct Manufacturer" },
                    { label: "CUSTOMIZATION", value: "Available" },
                    { label: "SUPPORT", value: "Direct Engineering Team" },
                  ].map((item) => (
                    <div key={item.label} className="border-l-2 border-[#B87333] pl-4">
                      <p className="text-label mb-1">{item.label}</p>
                      <p className="text-sm text-[#F5F5F0] font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="btn-ghost">
                  LEARN MORE ABOUT US
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Category Showcase */}
        <CategoryShowcase />

        {/* Featured Products */}
        {featuredProducts.length > 0 && (
          <section className="section bg-[#101010] border-y border-[#303030]">
            <div className="container-kps">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <p className="text-label-copper mb-3">CATALOGUE</p>
                  <h2
                    className="text-display text-[#F5F5F0]"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                  >
                    FEATURED PRODUCTS
                  </h2>
                </div>
                <Link href="/products" className="hidden sm:flex btn-ghost">
                  VIEW ALL
                  <ArrowRight size={12} />
                </Link>
              </div>
              <ProductGrid products={featuredProducts} />
              <div className="mt-8 sm:hidden">
                <Link href="/products" className="btn-secondary w-full justify-center">
                  VIEW ALL PRODUCTS
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Manufacturing Process */}
        <ManufacturingProcess />

        {/* Final CTA Band */}
        <section className="py-24 bg-[#B87333]">
          <div className="container-kps text-center">
            <p className="text-label text-[#080808]/70 mb-4">READY TO START?</p>
            <h2
              className="text-display text-[#080808] mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              LET&apos;S BUILD SOMETHING
              <br />
              RELIABLE.
            </h2>
            <p className="text-sm text-[#080808]/80 max-w-md mx-auto mb-8">
              Contact our engineering team to discuss your requirements,
              request a quote, or download product documentation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#080808] text-[#F5F5F0] font-mono text-xs font-bold tracking-widest uppercase"
              >
                GET IN TOUCH
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-[#080808] font-mono text-xs font-bold tracking-widest uppercase border border-[#080808]/30 hover:bg-[#080808]/10 transition-colors"
              >
                EXPLORE PRODUCTS
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
