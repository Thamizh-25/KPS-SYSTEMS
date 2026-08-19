import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductNotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen flex items-center">
        <div className="container-kps py-24 text-center">
          <p className="font-mono text-7xl font-bold text-[#303030] mb-6">404</p>
          <p className="text-label-copper mb-3">PRODUCT NOT FOUND</p>
          <h1 className="font-heading text-2xl font-semibold text-[#F5F5F0] mb-4">
            This product does not exist.
          </h1>
          <p className="text-sm text-[#9A9A9A] max-w-sm mx-auto mb-8">
            The product you are looking for may have been removed or the link may be incorrect.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-primary">
              VIEW ALL PRODUCTS
            </Link>
            <Link href="/contact" className="btn-secondary">
              CONTACT US
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
