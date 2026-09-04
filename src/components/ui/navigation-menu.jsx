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
            ? "border-b border-[#0a7a8c]/15 bg-white/95 backdrop-blur-md shadow-none"
            : "border-b border-[#042E3A]/10 bg-white shadow-none"
        }`}
        style={{ boxShadow: "none" }}
      >
        <div
          className={`mx-auto flex w-full max-w-screen-2xl items-center justify-between px-3 sm:px-5 lg:px-6 xl:px-8 transition-all duration-300 ${
            isScrolled ? "h-16 md:h-20 lg:h-[84px]" : "h-20 md:h-24 lg:h-[104px]"
          }`}
        >
          
          <Link href="/" className="inline-block flex-shrink-0 pr-2 xl:pr-4">
            <BrandLogo />
          </Link>

          <nav aria-label="Desktop Navigation" className="hidden lg:flex h-full items-center justify-center flex-1 px-1 xl:px-3">
            <ul className="flex h-full items-center gap-0 xl:gap-1">
              {HEADER_ROUTES.map((route) => {
                const isActive = activeRoute === route.path;
                return (
                  <li key={route.path} className="relative flex h-full items-center">
                    <Link
                      href={route.path}
                      className={`nav-text-link px-2 xl:px-3 py-1.5 text-[12px] xl:text-[13.5px] 2xl:text-[14.5px] font-bold tracking-[0.02em] xl:tracking-[0.06em] uppercase transition-all duration-300 relative whitespace-nowrap !bg-transparent hover:!bg-transparent !border-none !shadow-none
                        ${isActive
                          ? "!text-[#042E3A] after:absolute after:bottom-[-22px] after:left-1/2 after:-translate-x-1/2 after:w-6 xl:after:w-7 after:h-[3px] after:bg-[#0a7a8c] after:rounded-full"
                          : "!text-[#042E3A]/80 hover:!text-[#0a7a8c] after:absolute after:bottom-[-22px] after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[3px] after:bg-[#0a7a8c] hover:after:w-6 xl:hover:after:w-7 after:rounded-full after:transition-all after:duration-300"
                        }`}
                      style={{
                        background: "none",
                        backgroundColor: "transparent",
                        backgroundImage: "none",
                        border: "none",
                        boxShadow: "none",
                      }}
                    >
                      {route.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0 pl-2">
            <button
              id="navbar-search-btn"
              aria-label="Toggle search bar"
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 sm:p-2 text-[#042E3A] hover:text-[#0891b2] bg-transparent hover:bg-[#042E3A]/5 rounded-lg transition-all cursor-pointer flex-shrink-0"
              title="Search website (Ctrl + K)"
            >
              <Search size={18} strokeWidth={2.2} />
            </button>
            
            <Link
              href="/contact"
              id="navbar-inquire-btn"
              className="hidden sm:inline-flex items-center justify-center px-4 xl:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] text-white text-[11px] xl:text-[12px] font-black uppercase tracking-wider rounded-[3px] transition-all duration-300 active:scale-95 whitespace-nowrap flex-shrink-0 shadow-[0_4px_16px_rgba(10,122,140,0.35)] hover:shadow-[0_8px_26px_rgba(13,148,136,0.55)]"
              style={{ whiteSpace: "nowrap" }}
            >
              <span className="text-white font-black whitespace-nowrap inline-block" style={{ whiteSpace: "nowrap" }}>Inquire Now</span>
            </Link>

            <button
              id="navbar-mobile-btn"
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#042E3A] bg-transparent cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={21} strokeWidth={2.2} /> : <Menu size={21} strokeWidth={2.2} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav aria-label="Mobile Navigation" className="lg:hidden border-t bg-white" style={{backgroundColor:'#ffffff', borderColor:'rgba(4,46,58,0.15)'}}>
            <ul className="flex flex-col py-2">
              {HEADER_ROUTES.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="nav-text-link block px-6 py-3.5 text-[13px] font-bold tracking-[0.16em] uppercase !text-[#042E3A] hover:!text-[#0a7a8c] !bg-transparent hover:!bg-[#042E3A]/5 border-b border-[#042E3A]/10 transition-colors"
                    style={{
                      background: "none",
                      backgroundColor: "transparent",
                      backgroundImage: "none",
                      border: "none",
                      borderBottom: "1px solid rgba(4,46,58,0.1)",
                      boxShadow: "none",
                    }}
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
