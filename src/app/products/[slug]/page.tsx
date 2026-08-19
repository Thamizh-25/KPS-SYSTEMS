import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import ProductSpecs from "@/components/ProductSpecs";
import ProductFeatures from "@/components/ProductFeatures";
import ProductApplications from "@/components/ProductApplications";
import DatasheetDownload from "@/components/DatasheetDownload";
import ContactCTA from "@/components/ContactCTA";
import { getProductBySlug, getProducts } from "@/lib/products";
import { getCategoryLabel } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.model_number} ${product.name}`,
    description: product.short_description,
    openGraph: {
      title: `${product.model_number} ${product.name}`,
      description: product.short_description,
      images: product.primary_image ? [product.primary_image] : [],
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categoryHref =
    product.category === "motherboard"
      ? "/products/motherboards"
      : "/products/transformers";

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="border-b border-[#303030] bg-[#080808]">
          <div className="container-kps py-4">
            <div className="flex items-center gap-2 text-label text-[#6b6b6b]">
              <Link href="/products" className="hover:text-[#9A9A9A] transition-colors">
                PRODUCTS
              </Link>
              <ArrowRight size={10} className="text-[#303030]" />
              <Link href={categoryHref} className="hover:text-[#9A9A9A] transition-colors">
                {getCategoryLabel(product.category)}
              </Link>
              <ArrowRight size={10} className="text-[#303030]" />
              <span className="text-[#9A9A9A]">{product.model_number}</span>
            </div>
          </div>
        </div>

        {/* Product Hero */}
        <div className="container-kps py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            {/* Left: Gallery */}
            <div>
              <ProductGallery
                primaryImage={product.primary_image}
                galleryImages={product.gallery_images ?? []}
                productName={product.name}
              />
            </div>

            {/* Right: Product info */}
            <div className="space-y-6">
              {/* Category + Model */}
              <div>
                <p className="text-label-copper mb-1">
                  {getCategoryLabel(product.category)}
                </p>
                <p className="font-mono text-sm text-[#9A9A9A] mb-3">
                  {product.model_number}
                </p>
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#F5F5F0] leading-tight tracking-tight">
                  {product.name}
                </h1>
              </div>

              {/* Short description */}
              <p className="text-base text-[#9A9A9A] leading-relaxed border-l-2 border-[#303030] pl-4">
                {product.short_description}
              </p>

              {/* Quick specs (top 3) */}
              {Object.keys(product.specifications ?? {}).length > 0 && (
                <div className="border border-[#303030] bg-[#101010]">
                  {Object.entries(product.specifications)
                    .slice(0, 3)
                    .map(([label, value]) => (
                      <div key={label} className="spec-row mx-0 px-5">
                        <span className="spec-label">{label.toUpperCase()}</span>
                        <span className="spec-value">{value}</span>
                      </div>
                    ))}
                </div>
              )}

              {/* PDF Datasheet */}
              <DatasheetDownload
                pdfUrl={product.pdf_url}
                productName={product.name}
                modelNumber={product.model_number}
              />

              {/* Contact CTA */}
              <ContactCTA
                productName={product.name}
                productId={product.id}
              />
            </div>
          </div>
        </div>

        <div className="border-t border-[#303030]" />

        {/* Full product details */}
        <div className="container-kps py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              {product.description && (
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <h2 className="font-heading text-lg font-semibold text-[#F5F5F0] tracking-tight">
                      PRODUCT OVERVIEW
                    </h2>
                    <div className="flex-1 h-px bg-[#303030] ml-6" />
                  </div>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-[#9A9A9A] leading-relaxed text-sm">
                      {product.description}
                    </p>
                  </div>
                </div>
              )}

              {/* Full Specifications */}
              <ProductSpecs specifications={product.specifications ?? {}} />

              {/* Features */}
              <ProductFeatures features={product.features ?? []} />

              {/* Applications */}
              <ProductApplications applications={product.applications ?? []} />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Product meta */}
              <div className="border border-[#303030] bg-[#101010] p-5 space-y-4">
                <p className="text-label text-[#F5F5F0]">PRODUCT DETAILS</p>
                <div className="spec-row mx-0 px-0 border-b border-[#202020]">
                  <span className="spec-label">PRODUCT CODE</span>
                  <span className="spec-value">{product.model_number}</span>
                </div>
                <div className="spec-row mx-0 px-0 border-b border-[#202020]">
                  <span className="spec-label">CATEGORY</span>
                  <span className="spec-value">{getCategoryLabel(product.category)}</span>
                </div>
                <div className="spec-row mx-0 px-0">
                  <span className="spec-label">STATUS</span>
                  <span className="text-xs font-mono text-[#4a9e6e]">ACTIVE</span>
                </div>
              </div>

              {/* Repeat Contact CTA in sidebar (desktop) */}
              <div className="hidden lg:block">
                <ContactCTA
                  headline="NEED THIS PRODUCT?"
                  subtext="Contact our team for pricing, customization, and availability."
                  productName={product.name}
                  productId={product.id}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="border-t border-[#303030]">
          <div className="container-kps py-6">
            <Link href={categoryHref} className="btn-ghost">
              <ArrowLeft size={12} />
              BACK TO {getCategoryLabel(product.category)}S
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
