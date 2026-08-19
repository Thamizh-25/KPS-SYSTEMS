"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ProductFeaturesProps {
  features: string[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (!features || features.length === 0) return null;

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-heading text-lg font-semibold text-[#F5F5F0] tracking-tight">
          ENGINEERED FEATURES
        </h3>
        <div className="flex-1 h-px bg-[#303030] ml-6" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-start gap-3 p-4 bg-[#101010] border border-[#303030]"
          >
            <CheckCircle2 size={14} className="text-[#B87333] shrink-0 mt-0.5" />
            <span className="text-sm text-[#9A9A9A] leading-relaxed">{feature}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
