"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  ctaLabel: string;
  tag: string;
  delay?: number;
}

function CategoryCard({
  title,
  subtitle,
  description,
  href,
  ctaLabel,
  tag,
  delay = 0,
}: CategoryCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      <Link href={href} className="group block">
        <div className="relative overflow-hidden border border-[#303030] bg-[#101010] transition-all duration-500 group-hover:border-[#B87333]/50">
          {/* Top category tag */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#202020]">
            <span className="text-label text-[#B87333]">{tag}</span>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-label text-[#9A9A9A]">EXPLORE</span>
              <ArrowRight size={12} className="text-[#9A9A9A]" />
            </div>
          </div>

          {/* Image area */}
          <div className="relative aspect-[16/9] overflow-hidden bg-[#151515]">
            {/* Placeholder engineering visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* PCB-style decorative grid */}
              <svg
                viewBox="0 0 800 450"
                className="w-full h-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                preserveAspectRatio="xMidYMid slice"
              >
                {/* Grid lines */}
                {Array.from({ length: 16 }, (_, i) => (
                  <line
                    key={`v${i}`}
                    x1={50 * i}
                    y1="0"
                    x2={50 * i}
                    y2="450"
                    stroke="#B87333"
                    strokeWidth="0.5"
                    opacity="0.4"
                  />
                ))}
                {Array.from({ length: 9 }, (_, i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    y1={50 * i}
                    x2="800"
                    y2={50 * i}
                    stroke="#B87333"
                    strokeWidth="0.5"
                    opacity="0.4"
                  />
                ))}
                {/* Circuit traces */}
                <path
                  d="M 100 225 L 250 225 L 250 150 L 400 150 L 400 300 L 550 300 L 550 225 L 700 225"
                  stroke="#B87333"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M 200 100 L 200 200 L 350 200 L 350 350 L 500 350 L 500 200 L 600 200"
                  stroke="#6FA8DC"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.6"
                />
                {/* Pads */}
                {[250, 400, 550].map((x) => (
                  <circle key={x} cx={x} cy={150} r="8" fill="none" stroke="#B87333" strokeWidth="1.5" />
                ))}
                {[250, 400, 550].map((x) => (
                  <circle key={x} cx={x} cy={300} r="8" fill="none" stroke="#B87333" strokeWidth="1.5" />
                ))}
                {/* Components */}
                <rect x="320" y="180" width="80" height="40" fill="none" stroke="#B87333" strokeWidth="1" />
                <rect x="470" y="230" width="60" height="30" fill="none" stroke="#6FA8DC" strokeWidth="1" opacity="0.6" />
              </svg>
            </div>

            {/* Large category text overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div
                  className="font-heading font-bold text-[#F5F5F0] opacity-[0.04] group-hover:opacity-[0.06] transition-opacity duration-500 select-none"
                  style={{ fontSize: "clamp(3rem, 8vw, 8rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
                >
                  {title}
                </div>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#B87333]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-[#F5F5F0] mb-3 tracking-tight">
              {subtitle}
            </h2>
            <p className="text-sm text-[#9A9A9A] leading-relaxed mb-6">
              {description}
            </p>
            <div className="flex items-center gap-2 text-[#B87333] font-mono text-xs font-semibold tracking-widest uppercase group-hover:gap-3 transition-all duration-200">
              {ctaLabel}
              <ArrowRight size={12} />
            </div>
          </div>

          {/* Bottom border accent — appears on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-[#B87333] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>
      </Link>
    </motion.div>
  );
}

export default function CategoryShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="section bg-[#080808]">
      <div className="container-kps">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-label-copper mb-3">PRODUCT RANGE</p>
          <h2 className="text-display text-[#F5F5F0]" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
            BUILT WITH
            <br />
            <span className="text-[#9A9A9A]">ENGINEERING PRECISION.</span>
          </h2>
        </motion.div>

        {/* Category cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CategoryCard
            title="MOTHERBOARDS"
            subtitle="Electronic Motherboards"
            description="Precision-built electronic control boards designed for reliable operation in industrial, commercial, and OEM applications."
            href="/products/motherboards"
            ctaLabel="EXPLORE MOTHERBOARDS"
            tag="CATEGORY / ELECTRONICS"
            delay={0.1}
          />
          <CategoryCard
            title="TRANSFORMERS"
            subtitle="Power Transformers"
            description="Engineered power transformation solutions for electronic and industrial applications. Built for efficiency, stability, and longevity."
            href="/products/transformers"
            ctaLabel="EXPLORE TRANSFORMERS"
            tag="CATEGORY / POWER"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
}
