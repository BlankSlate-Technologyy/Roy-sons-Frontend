"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/logo";
import { HEADER_ROUTES } from "@/lib/constants";
import SearchModal from "@/components/ui/SearchModal";

export default function HeaderNavbar({ activeRoute = "/" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Dynamic header elevation on scroll (matching Banu Mukhtar header-scrolled)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Global Ctrl+K / Cmd+K hotkey
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#C6A15A]/30 shadow-[0_6px_24px_rgba(0,0,0,0.65)] bg-[#101518]/95 backdrop-blur-md"
            : "border-b border-neutral-800 shadow-[0_1px_8px_0_rgba(0,0,0,0.4)] bg-[#2D3136]"
        }`}
      >
        <div
          className={`mx-auto flex max-w-screen-xl items-center justify-between px-6 transition-all duration-300 ${
            isScrolled ? "h-16 md:h-20 lg:h-[84px]" : "h-20 md:h-24 lg:h-[104px]"
          }`}
        >
          
          <Link href="/" className="inline-block flex-shrink-0">
            <BrandLogo />
          </Link>

          <nav aria-label="Desktop Navigation" className="hidden lg:flex h-full items-center">
            <ul className="flex h-full items-center gap-1">
              {HEADER_ROUTES.map((route) => {
                const isActive = activeRoute === route.path;
                return (
                  <li key={route.path} className="relative flex h-full items-center">
                    <Link
                      href={route.path}
                      className={`px-3 py-2 text-[15px] font-bold tracking-[0.1em] uppercase transition-all duration-300 relative whitespace-nowrap bg-transparent hover:bg-transparent
                        ${isActive
                          ? "text-[#C6A15A] after:absolute after:bottom-[-22px] after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-[3px] after:bg-[#C6A15A]"
                          : "text-[#C6A15A]/70 hover:text-[#C6A15A] after:absolute after:bottom-[-22px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-[#C6A15A] hover:after:w-8 after:transition-all after:duration-300"
                        }`}
                    >
                      {route.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              id="navbar-search-btn"
              aria-label="Toggle search bar"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-[#C6A15A] hover:text-white bg-transparent hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              title="Search website (Ctrl + K)"
            >
              <Search size={20} strokeWidth={2.2} />
            </button>
            
            <button
              id="navbar-mobile-btn"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#C6A15A] bg-transparent cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={21} strokeWidth={2.2} /> : <Menu size={21} strokeWidth={2.2} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav aria-label="Mobile Navigation" className="lg:hidden border-t" style={{backgroundColor:'#2D3136', borderColor:'rgba(198,161,90,0.2)'}}>
            <ul className="flex flex-col py-2">
              {HEADER_ROUTES.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-6 py-3.5 text-[13px] font-bold tracking-[0.16em] uppercase text-[#C6A15A] hover:bg-white/5 border-b border-white/10 transition-colors"
                  >
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Global Search Modal with Live Filtering */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}
