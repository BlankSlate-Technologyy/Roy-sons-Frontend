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

    // Smooth simulated progress (spread over ~2.4s)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth progression with slight acceleration near completion
        const step = prev > 80 ? 3 : 2;
        return Math.min(prev + step, 100);
      });
    }, 35);

    // Fade out after completion (total ~2.6s)
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2600);

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
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white select-none"
        >
          {/* Subtle Ambient Glow Background */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full bg-[#0a7a8c]/10 blur-[100px] animate-pulse" />
          </div>

          {/* Center Logo Content */}
          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Enlarged Roy Sons Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-8"
            >
              <Image
                src="/logos/Roysons-03.png"
                alt="Roy Sons Corporate Logo"
                width={500}
                height={200}
                className="w-auto h-28 sm:h-36 md:h-44 lg:h-48 max-w-[88vw] object-contain drop-shadow-[0_4px_18px_rgba(10,122,140,0.15)]"
                priority
              />
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "100%" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="w-52 sm:w-64 md:w-72 h-[3px] bg-[#0a7a8c]/15 rounded-full overflow-hidden relative shadow-inner"
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] rounded-full shadow-[0_0_12px_rgba(13,148,136,0.6)]"
                style={{ width: `${progress}%`, transition: "width 0.08s ease-out" }}
              />
            </motion.div>

            {/* Percentage indicator */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-[#0a7a8c] mt-3"
            >
              {progress}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
