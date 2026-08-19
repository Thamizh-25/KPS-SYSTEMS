import type { Metadata } from "next";
import ProductForm from "@/components/admin/ProductForm";

export const metadata: Metadata = {
  title: "Add Product",
};

export default function NewProductPage() {
  return (
    <div>
      <div className="mb-6">
        <p className="text-label-copper mb-1">PRODUCTS</p>
        <h1 className="font-heading text-xl font-bold text-[#F5F5F0]">Add New Product</h1>
      </div>
      <ProductForm mode="create" />
    </div>
  );
}
