import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Edit, Trash2, Star, StarOff, ExternalLink, Download } from "lucide-react";
import { getProducts, deleteProduct, toggleProductFeatured } from "@/lib/products";
import { getCategoryLabel } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Products",
};

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-label-copper mb-1">CATALOGUE</p>
          <h1 className="font-heading text-xl font-bold text-[#F5F5F0]">Products</h1>
        </div>
        <Link href="/admin/products/new" className="btn-primary text-xs py-2.5 px-5">
          <Plus size={13} />
          ADD PRODUCT
        </Link>
      </div>

      {/* Products table */}
      <div className="border border-[#303030] bg-[#101010] overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-5 py-3 border-b border-[#303030] bg-[#151515]">
          <span className="text-label">PRODUCT</span>
          <span className="text-label">CATEGORY</span>
          <span className="text-label">MODEL</span>
          <span className="text-label">FEATURED</span>
          <span className="text-label">ACTIONS</span>
        </div>

        {products.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-label text-[#6b6b6b] mb-2">NO PRODUCTS</p>
            <p className="text-sm text-[#9A9A9A] mb-6">
              Add your first product to get started.
            </p>
            <Link href="/admin/products/new" className="btn-primary inline-flex">
              <Plus size={13} />
              ADD PRODUCT
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-[#303030]">
            {products.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-4 px-5 py-4 items-center hover:bg-[#151515] transition-colors"
              >
                <div className="min-w-0">
                  <p className="text-sm text-[#F5F5F0] font-medium truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-[#6b6b6b] truncate">
                    {product.short_description}
                  </p>
                </div>
                <span className="text-label text-[#9A9A9A]">
                  {getCategoryLabel(product.category)}
                </span>
                <span className="font-mono text-xs text-[#9A9A9A]">
                  {product.model_number}
                </span>
                <div>
                  {product.is_featured ? (
                    <span className="badge-new">FEATURED</span>
                  ) : (
                    <span className="text-label text-[#6b6b6b]">—</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/products/${product.slug}`}
                    target="_blank"
                    className="p-1.5 text-[#6b6b6b] hover:text-[#F5F5F0] transition-colors"
                    title="View on site"
                  >
                    <ExternalLink size={14} />
                  </Link>
                  <Link
                    href={`/admin/products/${product.id}/edit`}
                    className="p-1.5 text-[#6b6b6b] hover:text-[#F5F5F0] transition-colors"
                    title="Edit product"
                  >
                    <Edit size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
