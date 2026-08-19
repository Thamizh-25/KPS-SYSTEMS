"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { companyData } from "@/data/companyData";

export default function ManufacturingProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section bg-[#080808]">
      <div className="container-kps">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-label-copper mb-3">HOW WE WORK</p>
          <h2
            className="text-display text-[#F5F5F0]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            FROM DESIGN
            <br />
            <span className="text-[#9A9A9A]">TO DELIVERY.</span>
          </h2>
        </motion.div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[40px] right-[40px] h-px bg-[#303030] z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 relative z-10">
            {companyData.capabilities.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="relative"
              >
                {/* Step */}
                <div className="flex lg:flex-col lg:items-start items-center gap-6 lg:gap-0 p-6 lg:p-0 border-b lg:border-b-0 border-[#303030] last:border-b-0">
                  {/* Number circle */}
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[#080808] border border-[#303030] lg:mb-6 relative z-10">
                    <span className="font-mono text-base font-bold text-[#B87333]">
                      {step.step}
                    </span>
                  </div>

                  <div className="lg:mt-0">
                    <h3 className="font-heading text-base font-semibold text-[#F5F5F0] mb-2 lg:mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#9A9A9A] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
