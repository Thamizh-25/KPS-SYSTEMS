"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { companyData } from "@/data/companyData";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "PRODUCTS",
    href: "/products",
    children: [
      { label: "ALL PRODUCTS", href: "/products" },
      { label: "MOTHERBOARDS", href: "/products/motherboards" },
      { label: "TRANSFORMERS", href: "/products/transformers" },
    ],
  },
  { label: "CAPABILITIES", href: "/capabilities" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#080808]/95 backdrop-blur-md border-b border-[#303030]"
            : "bg-transparent"
        )}
      >
        <div className="container-kps">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8 flex items-center justify-center border border-[#B87333] group-hover:border-[#D99555] transition-colors duration-200">
                <div className="w-4 h-4 border border-[#B87333] group-hover:border-[#D99555] transition-colors duration-200 rotate-45" />
              </div>
              <span
                className="font-heading font-bold text-base tracking-widest text-[#F5F5F0]"
                style={{ letterSpacing: "0.2em" }}
              >
                {companyData.name}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setProductsOpen(true)}
                    onMouseLeave={() => setProductsOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 text-label transition-colors duration-200",
                        pathname.startsWith(link.href)
                          ? "text-[#F5F5F0]"
                          : "hover:text-[#F5F5F0]"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        className={cn(
                          "transition-transform duration-200",
                          productsOpen ? "rotate-180" : ""
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {productsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-[#101010] border border-[#303030] py-1"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-3 text-label hover:text-[#F5F5F0] hover:bg-[#151515] transition-colors duration-150"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-label transition-colors duration-200",
                      pathname === link.href
                        ? "text-[#F5F5F0]"
                        : "hover:text-[#F5F5F0]"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden md:inline-flex btn-primary text-xs py-2.5 px-5"
              >
                GET IN TOUCH
              </Link>
              <button
                className="md:hidden p-2 text-[#9A9A9A] hover:text-[#F5F5F0] transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle navigation"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col pt-20"
          >
            <div className="container-kps flex-1 flex flex-col py-8">
              <div className="space-y-0 border-t border-[#303030]">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    {link.children ? (
                      <div>
                        <div className="py-5 border-b border-[#303030]">
                          <span className="text-label text-[#9A9A9A]">
                            {link.label}
                          </span>
                        </div>
                        <div className="pl-4">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex py-4 border-b border-[#202020] text-label hover:text-[#F5F5F0] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex py-5 border-b border-[#303030] font-heading text-xl font-medium tracking-tight hover:text-[#B87333] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-8 space-y-3">
                <Link href="/contact" className="btn-primary w-full justify-center">
                  GET IN TOUCH
                </Link>
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full justify-center"
                >
                  WHATSAPP US
                </a>
              </div>

              <div className="pt-6 pb-2">
                <p className="text-label text-[#6b6b6b]">{companyData.phone}</p>
                <p className="text-label text-[#6b6b6b]">{companyData.email}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
