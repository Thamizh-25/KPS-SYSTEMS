import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductForm from "@/components/admin/ProductForm";
import { getProductById } from "@/lib/products";

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export const metadata: Metadata = {
  title: "Edit Product",
};

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) notFound();

  return (
    <div>
      <div className="mb-6">
        <p className="text-label-copper mb-1">PRODUCTS / EDIT</p>
        <h1 className="font-heading text-xl font-bold text-[#F5F5F0]">
          Edit: {product.model_number} {product.name}
        </h1>
      </div>
      <ProductForm product={product} mode="edit" />
    </div>
  );
}
