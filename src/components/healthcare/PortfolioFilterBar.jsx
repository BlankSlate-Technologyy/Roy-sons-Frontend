"use client";

import React from "react";
import { Search, X } from "lucide-react";

export default function PortfolioFilterBar({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalResults,
  onResetFilters,
}) {
  return (
    <div className="w-full">
      {/* Search Input */}
      <div className="relative max-w-xl">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search medical equipment, modalities, clinical applications..."
          className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-white text-[14px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0a7a8c] focus:border-transparent transition-all shadow-sm"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
