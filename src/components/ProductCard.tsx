"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import type { ProductListItem } from "@/types/product";
import { getCategoryLabel } from "@/lib/utils";

interface ProductCardProps {
  product: ProductListItem;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const firstSpec = Object.entries(product.specifications ?? {})[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className="group"
    >
      <div className="card-industrial flex flex-col h-full">
        {/* Image */}
        <Link href={`/products/${product.slug}`} className="block overflow-hidden relative aspect-[4/3] bg-[#101010]">
          {product.primary_image ? (
            <Image
              src={product.primary_image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 400 300" className="w-full h-full opacity-10">
                {Array.from({ length: 8 }, (_, i) => (
                  <line key={`v${i}`} x1={50 * i} y1="0" x2={50 * i} y2="300" stroke="#B87333" strokeWidth="0.5" />
                ))}
                {Array.from({ length: 6 }, (_, i) => (
                  <line key={`h${i}`} x1="0" y1={50 * i} x2="400" y2={50 * i} stroke="#B87333" strokeWidth="0.5" />
                ))}
                <rect x="150" y="100" width="100" height="60" fill="none" stroke="#B87333" strokeWidth="1" />
                <circle cx="200" cy="130" r="20" fill="none" stroke="#B87333" strokeWidth="1" />
              </svg>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="text-label bg-[#080808]/80 px-2.5 py-1">
              {getCategoryLabel(product.category)}
            </span>
          </div>

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#101010] to-transparent" />
        </Link>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <div className="mb-3">
            <p className="text-label text-[#B87333] mb-1">{product.model_number}</p>
            <h3 className="font-heading text-base font-semibold text-[#F5F5F0] leading-snug">
              {product.name}
            </h3>
          </div>

          <p className="text-sm text-[#9A9A9A] leading-relaxed mb-4 flex-1 line-clamp-2">
            {product.short_description}
          </p>

          {/* Key spec */}
          {firstSpec && (
            <div className="flex items-center gap-2 py-2.5 border-t border-[#202020] mb-4">
              <span className="spec-label">{firstSpec[0]}</span>
              <div className="w-px h-3 bg-[#303030]" />
              <span className="spec-value text-xs">{firstSpec[1]}</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href={`/products/${product.slug}`}
              className="btn-ghost text-xs flex-1"
            >
              VIEW PRODUCT
              <ArrowRight size={11} />
            </Link>
            {product.pdf_url && (
              <a
                href={product.pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-label text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors py-2"
                title="Download PDF Datasheet"
                onClick={(e) => e.stopPropagation()}
              >
                <Download size={12} />
                <span>PDF</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
