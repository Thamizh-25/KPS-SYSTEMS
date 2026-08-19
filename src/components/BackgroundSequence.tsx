"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

interface BackgroundSequenceProps {
  totalFrames?: number;
  framePrefix?: string;
  frameExtension?: string;
  fps?: number;
  opacity?: number;
  className?: string;
}

export default function BackgroundSequence({
  totalFrames = 240,
  framePrefix = "/frames/ezgif-frame-",
  frameExtension = ".jpg",
  fps = 24,
  opacity = 0.45,
  className = "",
}: BackgroundSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameRef = useRef(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Hook into Framer Motion's useScroll for smooth scroll-driven scrubbing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Calculate zero-padded frame URL: 1 -> "001", 42 -> "042", 240 -> "240"
  const getFrameUrl = (index: number) => {
    const frameNum = String(index + 1).padStart(3, "0");
    return `${framePrefix}${frameNum}${frameExtension}`;
  };

  // Helper to draw image on canvas with cover scaling
  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Wrap index within bounds
    const safeIndex = ((index % totalFrames) + totalFrames) % totalFrames;
    const img = imagesRef.current[safeIndex];

    if (!img || !img.complete || img.naturalWidth === 0) {
      // Fallback to nearest loaded frame
      for (let offset = 1; offset < 15; offset++) {
        const prev = imagesRef.current[(safeIndex - offset + totalFrames) % totalFrames];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          renderImageToCanvas(ctx, canvas, prev);
          return;
        }
      }
      return;
    }

    renderImageToCanvas(ctx, canvas, img);
  };

  const renderImageToCanvas = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    img: HTMLImageElement
  ) => {
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    // Calculate aspect ratio cover
    const hRatio = width / img.naturalWidth;
    const vRatio = height / img.naturalHeight;
    const ratio = Math.max(hRatio, vRatio);

    const centerShiftX = (width - img.naturalWidth * ratio) / 2;
    const centerShiftY = (height - img.naturalHeight * ratio) / 2;

    ctx.drawImage(
      img,
      0,
      0,
      img.naturalWidth,
      img.naturalHeight,
      centerShiftX,
      centerShiftY,
      img.naturalWidth * ratio,
      img.naturalHeight * ratio
    );
  };

  // Preload frames in chunks
  useEffect(() => {
    imagesRef.current = new Array(totalFrames).fill(null);
    let isCancelled = false;

    // Load first frame first
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      if (isCancelled) return;
      imagesRef.current[0] = firstImg;
      setIsLoaded(true);
      drawFrame(0);

      // Load initial quick batch (first 30 frames)
      for (let i = 1; i < Math.min(30, totalFrames); i++) {
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          if (!isCancelled) imagesRef.current[i] = img;
        };
      }

      // Load remaining frames sequentially / in background idle
      let nextIndex = 30;
      const loadNextBatch = () => {
        if (isCancelled || nextIndex >= totalFrames) return;
        const batchEnd = Math.min(nextIndex + 15, totalFrames);
        for (let i = nextIndex; i < batchEnd; i++) {
          const img = new Image();
          img.src = getFrameUrl(i);
          img.onload = () => {
            if (!isCancelled) imagesRef.current[i] = img;
          };
        }
        nextIndex = batchEnd;
        if (nextIndex < totalFrames) {
          setTimeout(loadNextBatch, 80);
        }
      };

      setTimeout(loadNextBatch, 200);
    };

    return () => {
      isCancelled = true;
    };
  }, [totalFrames, framePrefix, frameExtension]);

  // Resize handler
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      drawFrame(currentFrameRef.current);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded]);

  // Playback loop + scroll modulation
  useEffect(() => {
    let animFrameId: number;
    let lastTimestamp = 0;
    const frameInterval = 1000 / fps;
    let isVisible = true;

    // Pause when scrolled out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const loop = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;

      if (isVisible && elapsed >= frameInterval) {
        lastTimestamp = timestamp - (elapsed % frameInterval);

        // Get scroll influence
        const scrollVal = scrollYProgress.get();
        if (scrollVal > 0.01) {
          // Scrub based on scroll
          const targetFrame = Math.floor(scrollVal * (totalFrames - 1));
          currentFrameRef.current = targetFrame;
        } else {
          // Play continuous ambient loop
          currentFrameRef.current = (currentFrameRef.current + 1) % totalFrames;
        }

        drawFrame(currentFrameRef.current);
      }

      animFrameId = requestAnimationFrame(loop);
    };

    animFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animFrameId);
      observer.disconnect();
    };
  }, [fps, totalFrames, scrollYProgress, isLoaded]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transition-opacity duration-1000"
        style={{
          opacity: isLoaded ? opacity : 0,
          mixBlendMode: "screen",
          filter: "contrast(1.15) brightness(0.85)",
        }}
      />

      {/* Industrial gradient vignettes to keep text crisp & readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(8,8,8,0.15) 0%, rgba(8,8,8,0.8) 70%, #080808 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 via-transparent to-[#080808] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/90 via-transparent to-[#080808]/90 pointer-events-none" />
    </div>
  );
}
