"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import BackgroundSequence from "./BackgroundSequence";

const techTags = ["ELECTRONICS", "POWER", "CUSTOM ENGINEERING"];

// Decorative PCB trace lines
function TechLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Horizontal lines */}
      <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#B87333" strokeWidth="0.5" />
      <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#B87333" strokeWidth="0.5" />
      {/* Vertical lines */}
      <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#B87333" strokeWidth="0.5" />
      <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#B87333" strokeWidth="0.5" />
      {/* Corner marks */}
      <rect x="14%" y="19%" width="2%" height="2%" fill="none" stroke="#B87333" strokeWidth="0.5" />
      <rect x="83%" y="19%" width="2%" height="2%" fill="none" stroke="#B87333" strokeWidth="0.5" />
      <rect x="14%" y="79%" width="2%" height="2%" fill="none" stroke="#B87333" strokeWidth="0.5" />
      <rect x="83%" y="79%" width="2%" height="2%" fill="none" stroke="#B87333" strokeWidth="0.5" />
      {/* Circuit traces */}
      <path d="M 0 50% L 10% 50% L 10% 30% L 15% 30%" stroke="#B87333" strokeWidth="0.5" fill="none" />
      <path d="M 100% 60% L 90% 60% L 90% 70% L 85% 70%" stroke="#B87333" strokeWidth="0.5" fill="none" />
      {/* Coordinate marks */}
      <text x="15.5%" y="18%" fill="#B87333" fontSize="6" fontFamily="monospace">0,0</text>
      <text x="84%" y="18%" fill="#B87333" fontSize="6" fontFamily="monospace">1,0</text>
    </svg>
  );
}

// Measurement marks along the edges
function MeasurementMarks() {
  const marks = Array.from({ length: 20 }, (_, i) => i * 5);
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.12]">
      {/* Top edge marks */}
      <div className="absolute top-0 left-0 right-0 flex justify-between px-16">
        {marks.map((m) => (
          <div key={m} className="flex flex-col items-center">
            <div className={`w-px bg-[#B87333] ${m % 10 === 0 ? "h-3" : "h-1.5"}`} />
          </div>
        ))}
      </div>
      {/* Left edge marks */}
      <div className="absolute top-0 bottom-0 left-4 flex flex-col justify-between py-16">
        {marks.slice(0, 10).map((m) => (
          <div key={m} className="flex items-center gap-1">
            <div className={`h-px bg-[#B87333] ${m % 10 === 0 ? "w-3" : "w-1.5"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]"
    >
      {/* Animated Image Sequence from ezgif frames */}
      <BackgroundSequence opacity={0.4} fps={24} />

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Decorative elements */}
      <TechLines />
      <MeasurementMarks />

      {/* Background gradient vignette */}
      <div
        className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 30%, #080808 80%)",
        }}
      />

      {/* Hero content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container-kps pt-28 pb-20"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Tech tags */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-10"
          >
            {techTags.map((tag, i) => (
              <div key={tag} className="flex items-center gap-4">
                <span className="text-label">{tag}</span>
                {i < techTags.length - 1 && (
                  <div className="w-px h-3 bg-[#303030]" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            className="text-display text-[#F5F5F0] mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)" }}
          >
            ENGINEERED
            <br />
            <span className="text-[#B87333]">FOR THE</span>
            <br />
            REAL WORLD.
          </motion.h1>

          {/* Supporting copy */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[#9A9A9A] max-w-xl leading-relaxed mb-10"
          >
            Precision-built motherboards and transformers
            <br />
            for demanding electronic and electrical applications.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/products" className="btn-primary">
              EXPLORE PRODUCTS
              <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              CONTACT MANUFACTURER
            </Link>
          </motion.div>

          {/* Metadata line */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-6 mt-16 pt-8 border-t border-[#202020]"
          >
            <div>
              <p className="text-label mb-1">PRODUCT RANGE</p>
              <p className="text-sm text-[#F5F5F0]">Motherboards + Transformers</p>
            </div>
            <div className="w-px h-8 bg-[#303030]" />
            <div>
              <p className="text-label mb-1">APPLICATIONS</p>
              <p className="text-sm text-[#F5F5F0]">Industrial + OEM + Custom</p>
            </div>
            <div className="w-px h-8 bg-[#303030]" />
            <div>
              <p className="text-label mb-1">SUPPLY</p>
              <p className="text-sm text-[#F5F5F0]">Direct Manufacturer</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-label text-[#6b6b6b]">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[#6b6b6b]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
