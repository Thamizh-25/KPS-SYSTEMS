"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ProductListItem, ProductCategory } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: ProductListItem[];
  category?: ProductCategory;
  emptyMessage?: string;
}

export default function ProductGrid({
  products,
  emptyMessage = "No products found.",
}: ProductGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  if (products.length === 0) {
    return (
      <div className="py-24 text-center border border-[#303030] bg-[#101010]">
        <div className="mb-4">
          <div className="w-12 h-px bg-[#303030] mx-auto" />
        </div>
        <p className="text-label text-[#6b6b6b] mb-2">NO PRODUCTS</p>
        <p className="text-sm text-[#9A9A9A]">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.4 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {products.map((product, i) => (
        <ProductCard key={product.id} product={product} index={i} />
      ))}
    </motion.div>
  );
}
