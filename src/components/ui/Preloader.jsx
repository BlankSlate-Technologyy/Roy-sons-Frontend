"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Lock body scroll during preloader
    document.body.style.overflow = "hidden";

    // Smooth simulated progress (spread over ~3s)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth progression with slight acceleration near completion
        const step = prev > 80 ? 3 : 1;
        return Math.min(prev + step, 100);
      });
    }, 35);

    // Fade out after completion (increased by 2s: 1.5s -> 3.5s)
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="corporate-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#101518] select-none"
        >
          {/* Subtle Ambient Gold Glow Background */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full bg-[#C6A15A]/10 blur-[100px] animate-pulse" />
          </div>

          {/* Center Logo Content */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Top Corporate Line */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-3 mb-5"
            >
              <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C6A15A]/70" />
              <p
                className="text-[#C6A15A] text-[11px] sm:text-xs md:text-sm font-semibold tracking-[0.3em] uppercase"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  textShadow: "0 0 14px rgba(198, 161, 90, 0.45)",
                }}
              >
                A PROJECT OF ROYSONS TRUST
              </p>
              <div className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C6A15A]/70" />
            </motion.div>

            {/* Enlarged Roy Sons Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              <Image
                src="/logos/Roysons logo_logo png (1).png"
                alt="Roy Sons Corporate Logo"
                width={500}
                height={200}
                className="w-auto h-28 sm:h-36 md:h-44 lg:h-48 max-w-[88vw] object-contain drop-shadow-[0_0_35px_rgba(198,161,90,0.4)]"
                priority
              />
            </motion.div>

            {/* Luxury Gold Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-52 sm:w-64 md:w-72 h-[2px] bg-white/10 rounded-full overflow-hidden relative"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#8B7248] via-[#C6A15A] to-[#F7E7B4] rounded-full"
                style={{ width: `${progress}%`, transition: "width 0.08s ease-out" }}
              />
            </motion.div>

            {/* Percentage indicator */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[11px] sm:text-xs font-mono tracking-widest text-[#C6A15A]/85 mt-3"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
