"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import AOS from "aos";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Refresh AOS animations on route mount
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        if (typeof AOS !== "undefined" && AOS.refreshHard) {
          AOS.refreshHard();
        } else if (typeof AOS !== "undefined" && AOS.refresh) {
          AOS.refresh();
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative w-full flex-1 flex flex-col min-h-screen">
      {/* Top Brand Bluish-Greenish Route Progress Sweep Bar */}
      <motion.div
        key={`top-bar-${pathname}`}
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], times: [0, 0.7, 1] }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] origin-left z-[99999] pointer-events-none shadow-[0_0_14px_rgba(10,122,140,0.85)]"
        aria-hidden="true"
      />

      {/* Main Page Entrance Motion Wrapper */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full flex-1 flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}
