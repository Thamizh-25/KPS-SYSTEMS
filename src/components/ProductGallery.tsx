"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ProductGalleryProps {
  primaryImage: string | null;
  galleryImages: string[];
  productName: string;
}

export default function ProductGallery({
  primaryImage,
  galleryImages,
  productName,
}: ProductGalleryProps) {
  const allImages = [
    ...(primaryImage ? [primaryImage] : []),
    ...galleryImages.filter((img) => img !== primaryImage),
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (allImages.length === 0) {
    return (
      <div className="aspect-[4/3] bg-[#101010] border border-[#303030] flex items-center justify-center">
        <div className="text-center">
          <svg viewBox="0 0 200 200" className="w-24 h-24 mx-auto opacity-10 mb-4">
            <rect x="40" y="60" width="120" height="80" fill="none" stroke="#B87333" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="25" fill="none" stroke="#B87333" strokeWidth="1.5" />
            <path d="M 60 100 L 80 100 L 80 80 L 100 80" stroke="#B87333" strokeWidth="1" fill="none" />
          </svg>
          <p className="text-label text-[#6b6b6b]">IMAGE PENDING</p>
        </div>
      </div>
    );
  }

  const goNext = () => setSelectedIndex((i) => (i + 1) % allImages.length);
  const goPrev = () => setSelectedIndex((i) => (i - 1 + allImages.length) % allImages.length);

  return (
    <>
      {/* Main gallery */}
      <div className="space-y-3">
        {/* Primary image */}
        <div
          className="relative aspect-[4/3] overflow-hidden bg-[#101010] border border-[#303030] cursor-zoom-in group"
          onClick={() => setLightboxOpen(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0"
            >
              <Image
                src={allImages[selectedIndex]}
                alt={`${productName} — image ${selectedIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                priority={selectedIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Zoom hint */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex items-center gap-1.5 bg-[#080808]/80 px-2.5 py-1.5">
              <ZoomIn size={12} className="text-[#9A9A9A]" />
              <span className="text-label text-[#9A9A9A]">ZOOM</span>
            </div>
          </div>

          {/* Navigation arrows (only if multiple images) */}
          {allImages.length > 1 && (
            <>
              <button
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#080808]/80 hover:bg-[#080808] border border-[#303030] transition-colors duration-200"
                onClick={(e) => { e.stopPropagation(); goPrev(); }}
                aria-label="Previous image"
              >
                <ChevronLeft size={16} className="text-[#F5F5F0]" />
              </button>
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#080808]/80 hover:bg-[#080808] border border-[#303030] transition-colors duration-200"
                onClick={(e) => { e.stopPropagation(); goNext(); }}
                aria-label="Next image"
              >
                <ChevronRight size={16} className="text-[#F5F5F0]" />
              </button>
            </>
          )}

          {/* Counter */}
          {allImages.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-[#080808]/80 px-2.5 py-1">
              <span className="text-label">
                {selectedIndex + 1} / {allImages.length}
              </span>
            </div>
          )}
        </div>

        {/* Thumbnails */}
        {allImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`relative flex-shrink-0 w-16 h-16 overflow-hidden border transition-colors duration-150 ${
                  i === selectedIndex
                    ? "border-[#B87333]"
                    : "border-[#303030] hover:border-[#6b6b6b]"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`${productName} thumbnail ${i + 1}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#080808]/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center border border-[#303030] bg-[#101010] hover:border-[#F5F5F0] transition-colors"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              <X size={18} className="text-[#F5F5F0]" />
            </button>

            {/* Image */}
            <div
              className="relative max-w-5xl w-full max-h-[90vh] aspect-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={allImages[selectedIndex]}
                  alt={`${productName} — fullscreen`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Lightbox nav */}
            {allImages.length > 1 && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-[#303030] bg-[#101010] hover:border-[#F5F5F0] transition-colors"
                  onClick={(e) => { e.stopPropagation(); goPrev(); }}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={18} className="text-[#F5F5F0]" />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-[#303030] bg-[#101010] hover:border-[#F5F5F0] transition-colors"
                  onClick={(e) => { e.stopPropagation(); goNext(); }}
                  aria-label="Next image"
                >
                  <ChevronRight size={18} className="text-[#F5F5F0]" />
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <span className="text-label">
                {selectedIndex + 1} / {allImages.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
