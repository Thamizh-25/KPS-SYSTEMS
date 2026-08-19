"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ProductSpecification } from "@/types/product";

interface ProductSpecsProps {
  specifications: ProductSpecification;
}

export default function ProductSpecs({ specifications }: ProductSpecsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const entries = Object.entries(specifications);

  if (entries.length === 0) {
    return (
      <div className="py-8 border border-[#303030] bg-[#101010] text-center">
        <p className="text-label text-[#6b6b6b]">SPECIFICATIONS TO BE ADDED</p>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-heading text-lg font-semibold text-[#F5F5F0] tracking-tight">
          TECHNICAL SPECIFICATIONS
        </h3>
        <div className="flex-1 h-px bg-[#303030] ml-6" />
      </div>

      <div className="border border-[#303030] bg-[#101010]">
        {entries.map(([label, value], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -12 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="spec-row mx-0 px-5"
          >
            <span className="spec-label">{label.toUpperCase()}</span>
            <span className="spec-value">{value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
