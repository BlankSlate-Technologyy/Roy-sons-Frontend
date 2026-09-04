"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, Building2, Briefcase, FileText, Layers } from "lucide-react";
import { SEARCHABLE_ITEMS } from "@/lib/search-data";
import BrandLogo from "@/components/ui/logo";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Focus input when opened and lock body scroll
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Filter items based on query
  const filteredResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return [];
    }

    return SEARCHABLE_ITEMS.filter((item) => {
      const matchTitle = item.title?.toLowerCase().includes(trimmed);
      const matchSubtitle = item.subtitle?.toLowerCase().includes(trimmed);
      const matchDescription = item.description?.toLowerCase().includes(trimmed);
      const matchKeywords = item.keywords?.toLowerCase().includes(trimmed);

      return matchTitle || matchSubtitle || matchDescription || matchKeywords;
    });
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center p-3 sm:p-6 lg:p-10 pt-16 sm:pt-20">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] z-10 border animate-scale-up"
        style={{
          backgroundColor: "#ffffff",
          borderColor: "rgba(4, 46, 58, 0.15)",
        }}
      >
        {/* Top Header with Roysons Logo and Close button */}
        <div
          className="p-5 sm:p-6 border-b relative flex flex-col items-center"
          style={{
            backgroundColor: "#f8fafc",
            borderColor: "rgba(4, 46, 58, 0.1)",
          }}
        >
          {/* Top Right Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 p-1.5 rounded-lg text-[#042E3A]/60 hover:text-[#042E3A] hover:bg-[#042E3A]/5 transition-colors cursor-pointer"
            aria-label="Close search"
          >
            <X size={20} />
          </button>

          {/* Roysons Logo above search bar */}
          <div className="mb-4 flex items-center justify-center">
            <Link href="/" onClick={onClose} className="inline-block transition-transform hover:scale-102">
              <BrandLogo />
            </Link>
          </div>

          {/* Search Input Bar */}
          <div className="relative flex items-center w-full">
            <Search className="absolute left-3.5 text-[#042E3A] pointer-events-none" size={20} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search companies, services, projects, keywords..."
              className="w-full pl-11 pr-10 py-3 rounded-lg bg-white text-[#042E3A] placeholder-[#042E3A]/50 text-sm sm:text-base font-medium outline-none border border-[#042E3A]/20 focus:border-[#042E3A] transition-colors shadow-xs"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 p-1 rounded-md text-[#042E3A]/60 hover:text-[#042E3A] hover:bg-[#042E3A]/5 transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2.5 divide-y divide-[#042E3A]/10">
          {query.trim() === "" ? (
            <div className="py-10 px-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#042E3A]/5 border border-[#042E3A]/15 flex items-center justify-center mx-auto mb-3 text-[#042E3A]/60">
                <Search size={22} />
              </div>
              <h4 className="text-base font-bold text-[#042E3A] mb-1">
                Search Roysons Holding
              </h4>
              <p className="text-xs text-[#042E3A]/70 max-w-sm mx-auto">
                Type any company, subsidiary, service, project, or keyword to find what you need.
              </p>
            </div>
          ) : filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className="group flex items-start justify-between gap-4 p-3 rounded-lg hover:bg-[#042E3A]/5 transition-all border border-transparent hover:border-[#042E3A]/15 pt-3"
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  {item.image ? (
                    <div className="relative w-11 h-11 rounded-md bg-white p-1 flex-shrink-0 flex items-center justify-center border border-[#042E3A]/15 shadow-2xs">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-md bg-[#042E3A]/5 flex-shrink-0 flex items-center justify-center text-[#042E3A] border border-[#042E3A]/15">
                      {item.category === "services" && <Briefcase size={18} />}
                      {item.category === "projects" && <Layers size={18} />}
                      {item.category === "pages" && <FileText size={18} />}
                      {item.category === "companies" && <Building2 size={18} />}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h4 className="text-sm sm:text-[18.5px] font-black text-[#042E3A] group-hover:text-[#074656] transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <span
                        className={`text-[13.5px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {item.subtitle && (
                      <p className="text-[15.5px] font-semibold text-[#042E3A]/70 mb-1 leading-snug">
                        {item.subtitle}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-[16px] text-[#042E3A]/80 line-clamp-2 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center self-center text-[#042E3A]/60 group-hover:text-[#042E3A] group-hover:translate-x-1 transition-all flex-shrink-0">
                  <ArrowRight size={17} />
                </div>
              </Link>
            ))
          ) : (
            <div className="py-10 px-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#042E3A]/5 border border-[#042E3A]/15 flex items-center justify-center mx-auto mb-3 text-[#042E3A]/60">
                <Search size={22} />
              </div>
              <h4 className="text-base font-bold text-[#042E3A] mb-1">
                No matching results found
              </h4>
              <p className="text-xs text-[#042E3A]/70 max-w-sm mx-auto mb-4">
                We couldn&apos;t find any matches for &ldquo;<span className="text-[#042E3A] font-semibold">{query}</span>&rdquo;. Try another keyword.
              </p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#042E3A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#074656] transition-colors cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div
          className="p-3 px-5 border-t flex items-center justify-between text-[14px] sm:text-[15px] text-[#042E3A]/70"
          style={{
            backgroundColor: "#f8fafc",
            borderColor: "rgba(4, 46, 58, 0.1)",
          }}
        >
          {query.trim() !== "" ? (
            <span>
              Showing <strong className="text-[#042E3A]">{filteredResults.length}</strong> results
            </span>
          ) : (
            <span>
              Search across all companies & services
            </span>
          )}

          <span className="text-xs text-[#042E3A]/60 flex items-center gap-1.5">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white text-[#042E3A] border border-[#042E3A]/20 font-mono text-[12px] sm:text-[13px]">Esc</kbd> to close
          </span>
        </div>
      </div>
    </div>
  );
}
