import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getProducts } from "@/lib/products";
import ProductCatalogueClient from "./ProductCatalogueClient";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Product Catalog",
  description:
    "Explore our full range of precision-manufactured electronic motherboards and power transformers.",
};

function CatalogSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-[#101010] border border-[#303030] animate-pulse">
          <div className="aspect-[4/3] bg-[#151515]" />
          <div className="p-5 space-y-3">
            <div className="h-3 bg-[#202020] w-24" />
            <div className="h-5 bg-[#202020] w-3/4" />
            <div className="h-3 bg-[#202020] w-full" />
            <div className="h-3 bg-[#202020] w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <div className="border-b border-[#303030] bg-[#080808]">
          <div className="container-kps py-16">
            <p className="text-label-copper mb-3">PRODUCT RANGE</p>
            <h1
              className="text-display text-[#F5F5F0] mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
            >
              PRODUCT CATALOG
            </h1>
            <p className="text-base text-[#9A9A9A] max-w-lg">
              Explore our range of engineered electronic and power products.
              Each product is manufactured to precise specifications.
            </p>
          </div>
        </div>

        {/* Catalogue */}
        <div className="container-kps py-12">
          <Suspense fallback={<CatalogSkeleton />}>
            <ProductCatalogueClient initialProducts={products} />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
