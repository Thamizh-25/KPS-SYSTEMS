"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X, SlidersHorizontal } from "lucide-react";
import ProductGrid from "@/components/ProductGrid";
import { getProducts, searchProducts } from "@/lib/products";
import type { ProductListItem, ProductCategory } from "@/types/product";
import { cn } from "@/lib/utils";

const categories: { label: string; value: ProductCategory | "all" }[] = [
  { label: "ALL", value: "all" },
  { label: "MOTHERBOARDS", value: "motherboard" },
  { label: "TRANSFORMERS", value: "transformer" },
];

interface ProductCatalogueClientProps {
  initialProducts: ProductListItem[];
  initialCategory?: ProductCategory | "all";
}

export default function ProductCatalogueClient({
  initialProducts,
  initialCategory = "all",
}: ProductCatalogueClientProps) {
  const [products, setProducts] = useState(initialProducts);
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">(initialCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async (cat: ProductCategory | "all", query: string) => {
    setLoading(true);
    try {
      let result: ProductListItem[];
      if (query.trim()) {
        result = await searchProducts(query);
        if (cat !== "all") {
          result = result.filter((p) => p.category === cat);
        }
      } else {
        result = await getProducts(cat === "all" ? undefined : cat);
      }
      setProducts(result);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchProducts(activeCategory, searchQuery);
    }, 300);
    return () => clearTimeout(timeout);
  }, [activeCategory, searchQuery, fetchProducts]);

  const handleCategoryChange = (cat: ProductCategory | "all") => {
    setActiveCategory(cat);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      {/* Filters + Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-8 pb-6 border-b border-[#303030]">
        {/* Category filter */}
        <div className="flex items-center gap-1">
          <SlidersHorizontal size={12} className="text-[#9A9A9A] mr-2" />
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategoryChange(cat.value)}
              className={cn(
                "px-4 py-2 text-label transition-colors duration-150",
                activeCategory === cat.value
                  ? "bg-[#B87333] text-[#080808]"
                  : "text-[#9A9A9A] hover:text-[#F5F5F0] border border-[#303030] hover:border-[#6b6b6b]"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b6b6b]" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-industrial pl-9 pr-9 py-2.5 text-sm"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6b6b6b] hover:text-[#F5F5F0] transition-colors"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Results info */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-label text-[#6b6b6b]">
          {loading ? "LOADING..." : `${products.length} PRODUCT${products.length !== 1 ? "S" : ""}`}
        </p>
        {searchQuery && (
          <p className="text-xs text-[#9A9A9A]">
            Results for &quot;{searchQuery}&quot;
          </p>
        )}
      </div>

      {/* Grid */}
      <div className={cn("transition-opacity duration-200", loading && "opacity-50")}>
        <ProductGrid
          products={products}
          emptyMessage={
            searchQuery
              ? `No products match "${searchQuery}"`
              : "No products in this category yet."
          }
        />
      </div>
    </>
  );
}
