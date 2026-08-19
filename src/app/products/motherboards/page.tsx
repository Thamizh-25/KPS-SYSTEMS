import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { getProducts } from "@/lib/products";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Electronic Motherboards",
  description:
    "Precision-built electronic control boards designed for reliable operation in industrial and commercial applications.",
};

export default async function MotherboardsPage() {
  const products = await getProducts("motherboard");

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
            <p className="text-label-copper mb-3">CATEGORY / ELECTRONICS</p>
            <h1
              className="text-display text-[#F5F5F0] mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              ELECTRONIC
              <br />
              MOTHERBOARDS
            </h1>
            <p className="text-base text-[#9A9A9A] max-w-lg">
              Precision-built electronic control boards designed for reliable
              operation in industrial, commercial, and OEM applications.
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
            category="motherboard"
            emptyMessage="No motherboard products have been added yet."
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
