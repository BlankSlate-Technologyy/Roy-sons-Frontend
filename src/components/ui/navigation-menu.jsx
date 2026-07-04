"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import BrandLogo from "@/components/ui/logo";
import { HEADER_ROUTES } from "@/lib/constants";

export default function HeaderNavbar({ activeRoute = "/" }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && query.trim()) {
      console.log("Searching repository for:", query);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.05)]">
      <div className="mx-auto flex h-[72px] max-w-screen-xl items-center justify-between px-6">
        
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
                    className={`px-2 py-2 text-[10.5px] font-bold tracking-[0.14em] uppercase transition-all duration-300 relative whitespace-nowrap rounded-sm
                      ${isActive
                        ? "text-black after:absolute after:bottom-[-22px] after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-[3px] after:bg-black"
                        : "text-neutral-500 hover:text-black hover:bg-neutral-50/50"
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
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-neutral-500 hover:text-black rounded-full hover:bg-neutral-50 transition-colors cursor-pointer"
          >
            <Search size={19} strokeWidth={2.2} />
          </button>
          
          <button
            id="navbar-mobile-btn"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-500 hover:text-black rounded-full hover:bg-neutral-50 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X size={21} strokeWidth={2.2} /> : <Menu size={21} strokeWidth={2.2} />}
          </button>
        </div>
      </div>

      {isSearchOpen && (
        <div className="border-t border-neutral-100 bg-neutral-50/50 px-6 py-4 animate-fade-in-up">
          <div className="mx-auto w-full max-w-screen-xl relative">
            <input
              autoFocus
              type="text"
              placeholder="Search documents, projects, announcements..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearchSubmit}
              className="w-full border-b-2 border-neutral-300 bg-transparent pb-1.5 text-sm outline-none focus:border-black placeholder-neutral-400 font-medium transition-colors"
            />
          </div>
        </div>
      )}

      {isMobileMenuOpen && (
        <nav aria-label="Mobile Navigation" className="lg:hidden border-t border-neutral-150 bg-white">
          <ul className="flex flex-col py-2">
            {HEADER_ROUTES.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3.5 text-[11px] font-bold tracking-[0.16em] uppercase text-neutral-700 hover:bg-neutral-50 hover:text-black border-b border-neutral-50"
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
