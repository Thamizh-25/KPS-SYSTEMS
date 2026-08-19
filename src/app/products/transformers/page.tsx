import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/products";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Power Transformers",
  description:
    "Engineered power transformation solutions for electronic and industrial applications.",
};

export default async function TransformersPage() {
  const products = await getProducts("transformer");

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="border-b border-[#303030] bg-[#080808]">
          <div className="container-kps py-16">
            <Link href="/products" className="btn-ghost mb-6 text-xs">
              <ArrowLeft size={12} />
              ALL PRODUCTS
            </Link>
            <p className="text-label-copper mb-3">CATEGORY / POWER</p>
            <h1
              className="text-display text-[#F5F5F0] mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              POWER
              <br />
              TRANSFORMERS
            </h1>
            <p className="text-base text-[#9A9A9A] max-w-lg">
              Engineered power transformation solutions for electronic and
              industrial applications. Built for efficiency, stability, and longevity.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="container-kps py-12">
          <div className="flex items-center justify-between mb-8">
            <p className="text-label text-[#6b6b6b]">
              {products.length} PRODUCT{products.length !== 1 ? "S" : ""}
            </p>
          </div>
          <ProductGrid
            products={products}
            category="transformer"
            emptyMessage="No transformer products have been added yet."
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
