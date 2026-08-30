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
        className="fixed top-0 left-0 h-[3px] bg-[#C6A15A] z-[9999] transition-all duration-150 ease-out pointer-events-none"
        style={{
          width: `${scrollProgress}%`,
          boxShadow: "0 0 10px rgba(198, 161, 90, 0.7)",
        }}
        aria-hidden="true"
      />

      {/* Main App Content */}
      {children}

      {/* Banu Mukhtar Style Floating Back-to-Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-[3px] border-2 border-[#C6A15A] bg-[#101518]/90 text-[#C6A15A] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.5)] backdrop-blur-sm cursor-pointer transition-all duration-500 group hover:bg-[#C6A15A] hover:text-[#101518] hover:-translate-y-1 ${
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <ChevronUp
          size={22}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />
      </button>
    </>
  );
}
