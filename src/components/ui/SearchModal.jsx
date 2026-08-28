"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, Building2, Briefcase, FileText, Layers, Sparkles } from "lucide-react";
import { SEARCHABLE_ITEMS, SEARCH_CATEGORIES, POPULAR_SEARCH_TERMS } from "@/lib/search-data";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const inputRef = useRef(null);

  // Focus input when opened and lock body scroll
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setQuery("");
      setActiveCategory("all");
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

  // Filter items based on query & category
  const filteredResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    
    return SEARCHABLE_ITEMS.filter((item) => {
      // Category check
      if (activeCategory !== "all" && item.category !== activeCategory) {
        return false;
      }

      // If query is empty, return top items in this category or all
      if (!trimmed) {
        return true;
      }

      const matchTitle = item.title?.toLowerCase().includes(trimmed);
      const matchSubtitle = item.subtitle?.toLowerCase().includes(trimmed);
      const matchDescription = item.description?.toLowerCase().includes(trimmed);
      const matchKeywords = item.keywords?.toLowerCase().includes(trimmed);

      return matchTitle || matchSubtitle || matchDescription || matchKeywords;
    });
  }, [query, activeCategory]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    const counts = { all: 0, companies: 0, services: 0, projects: 0, pages: 0 };

    SEARCHABLE_ITEMS.forEach((item) => {
      const match =
        !trimmed ||
        item.title?.toLowerCase().includes(trimmed) ||
        item.subtitle?.toLowerCase().includes(trimmed) ||
        item.description?.toLowerCase().includes(trimmed) ||
        item.keywords?.toLowerCase().includes(trimmed);

      if (match) {
        counts.all += 1;
        if (counts[item.category] !== undefined) {
          counts[item.category] += 1;
        }
      }
    });

    return counts;
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center p-3 sm:p-6 lg:p-10">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-3xl rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[88vh] z-10 border animate-scale-up"
        style={{
          backgroundColor: "#1F2328",
          borderColor: "rgba(198, 161, 90, 0.3)",
        }}
      >
        {/* Top Header & Search Bar */}
        <div
          className="p-4 sm:p-5 border-b"
          style={{
            backgroundColor: "#272B31",
            borderColor: "rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 text-[#C6A15A] pointer-events-none" size={20} />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search companies, services, projects, keywords..."
              className="w-full pl-11 pr-10 py-3 rounded-lg bg-black/40 text-white placeholder-neutral-400 text-sm sm:text-base font-medium outline-none border border-white/10 focus:border-[#C6A15A] transition-colors"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="absolute right-3 p-1 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 sm:gap-2 mt-3.5 overflow-x-auto pb-1 no-scrollbar">
            {SEARCH_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = categoryCounts[cat.id] || 0;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-md text-[15px] sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-[#C6A15A] text-[#121518] shadow-sm"
                      : "bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[14px] px-1.5 py-0.2 rounded-full font-extrabold ${
                      isActive ? "bg-black/20 text-[#121518]" : "bg-black/40 text-neutral-400"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Popular searches suggestions if query is empty */}
        {!query && (
          <div className="px-5 py-3 border-b border-white/5 bg-black/20 flex items-center gap-2 flex-wrap">
            <span className="text-[15px] font-bold text-neutral-400 flex items-center gap-1 uppercase tracking-wider">
              <Sparkles size={13} className="text-[#C6A15A]" /> Popular:
            </span>
            {POPULAR_SEARCH_TERMS.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="text-[15px] px-2.5 py-0.5 rounded-full bg-white/5 text-neutral-300 hover:text-[#C6A15A] hover:bg-white/10 transition-colors border border-white/5 cursor-pointer"
              >
                {term}
              </button>
            ))}
          </div>
        )}

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-2.5 divide-y divide-white/5">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className="group flex items-start justify-between gap-4 p-3 rounded-lg hover:bg-white/5 transition-all border border-transparent hover:border-white/10 pt-3"
              >
                <div className="flex items-start gap-3.5 min-w-0">
                  {item.image ? (
                    <div className="relative w-11 h-11 rounded-md bg-white p-1 flex-shrink-0 flex items-center justify-center border border-white/20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-md bg-white/10 flex-shrink-0 flex items-center justify-center text-[#C6A15A] border border-white/10">
                      {item.category === "services" && <Briefcase size={18} />}
                      {item.category === "projects" && <Layers size={18} />}
                      {item.category === "pages" && <FileText size={18} />}
                      {item.category === "companies" && <Building2 size={18} />}
                    </div>
                  )}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h4 className="text-sm sm:text-[18.5px] font-black text-white group-hover:text-[#C6A15A] transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <span
                        className={`text-[13.5px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border ${item.badgeColor}`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {item.subtitle && (
                      <p className="text-[15.5px] font-semibold text-neutral-400 mb-1 leading-snug">
                        {item.subtitle}
                      </p>
                    )}

                    {item.description && (
                      <p className="text-[16px] text-neutral-400 line-clamp-2 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center self-center text-neutral-500 group-hover:text-[#C6A15A] group-hover:translate-x-1 transition-all flex-shrink-0">
                  <ArrowRight size={17} />
                </div>
              </Link>
            ))
          ) : (
            <div className="py-12 px-4 text-center">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3 text-neutral-400">
                <Search size={22} />
              </div>
              <h4 className="text-base font-bold text-white mb-1">
                No matching results found
              </h4>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto mb-4">
                We couldn&apos;t find any matches for &ldquo;<span className="text-[#C6A15A] font-semibold">{query}</span>&rdquo; in {activeCategory === "all" ? "the website" : activeCategory}. Try a different keyword or browse all categories.
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("all");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#C6A15A] text-[#101518] text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-opacity"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div
          className="p-3 px-5 border-t flex items-center justify-between text-[15px] text-neutral-400"
          style={{
            backgroundColor: "#252830",
            borderColor: "rgba(255, 255, 255, 0.08)",
          }}
        >
          <div className="flex items-center gap-4">
            <span>
              Showing <strong className="text-white">{filteredResults.length}</strong> results
            </span>
            <span className="hidden sm:inline text-neutral-500">•</span>
            <span className="hidden sm:inline">
              Press <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-neutral-300 border border-white/10 font-mono text-[14px]">Esc</kbd> to close
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-[#C6A15A] hover:underline font-bold uppercase text-[14.5px] tracking-wider cursor-pointer"
          >
            Close Search
          </button>
        </div>
      </div>
    </div>
  );
}
