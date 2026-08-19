"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ProductApplicationsProps {
  applications: string[];
}

export default function ProductApplications({ applications }: ProductApplicationsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  if (!applications || applications.length === 0) return null;

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-heading text-lg font-semibold text-[#F5F5F0] tracking-tight">
          APPLICATIONS
        </h3>
        <div className="flex-1 h-px bg-[#303030] ml-6" />
      </div>

      <div className="flex flex-wrap gap-2">
        {applications.map((app, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="px-4 py-2.5 bg-[#101010] border border-[#303030] text-label hover:border-[#B87333]/50 transition-colors duration-200"
          >
            {app.toUpperCase()}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
