import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080808] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-[8rem] font-bold text-[#151515] leading-none mb-4 select-none">
          404
        </p>
        <p className="text-label-copper mb-3">PAGE NOT FOUND</p>
        <h1 className="font-heading text-2xl font-semibold text-[#F5F5F0] mb-4">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-sm text-[#9A9A9A] max-w-sm mx-auto mb-8">
          The page you are looking for may have been moved or the link may be incorrect.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-primary">
            <ArrowLeft size={13} />
            GO HOME
          </Link>
          <Link href="/products" className="btn-secondary">
            VIEW PRODUCTS
          </Link>
        </div>
      </div>
    </main>
  );
}
