"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { ChevronUp } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Initialize AOS exactly matching Banu Mukhtar's signature config
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      offset: 50,
    });
  }, []);

  // Refresh AOS when navigating to another route in Next.js
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        AOS.refreshHard ? AOS.refreshHard() : AOS.refresh();
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Handle scroll progress and scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (totalHeight > 0) {
        setScrollProgress((scrollY / totalHeight) * 100);
      }

      if (scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] z-[9999] transition-all duration-150 ease-out pointer-events-none"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: "0 0 12px rgba(10, 122, 140, 0.75)",
        }}
        aria-hidden="true"
      />

      {/* Main App Content */}
      {children}
    </>
  );
}
