"use client";

import React from "react";
import { Search, X, ArrowUpDown } from "lucide-react";

export default function PortfolioFilterBar({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalResults,
  onResetFilters,
}) {
  const isFiltered = searchQuery.trim() !== "";

  return (
    <div className="w-full">
      {/* Top Bar: Search + Sort Dropdown */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        {/* Search Input */}
        <div className="relative flex-1 max-w-lg">
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

        {/* Sort & Results Bar */}
        <div className="flex items-center gap-3 justify-between sm:justify-end">
          <div className="text-[13px] text-slate-500 font-medium">
            <span className="font-semibold text-slate-900">{totalResults}</span> systems
          </div>

          <div className="flex items-center gap-2">
            <div className="relative inline-flex items-center">
              <label htmlFor="sort-equipment" className="sr-only">
                Sort equipment
              </label>
              <div className="pointer-events-none absolute left-3 flex items-center text-slate-400">
                <ArrowUpDown className="w-3.5 h-3.5" />
              </div>
              <select
                id="sort-equipment"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="pl-8 pr-8 py-2 rounded-xl border border-slate-200 bg-white text-[13px] font-medium text-slate-700 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0a7a8c] cursor-pointer shadow-sm appearance-none"
              >
                <option value="featured">Featured Order</option>
                <option value="name-asc">Alphabetical (A–Z)</option>
                <option value="name-desc">Alphabetical (Z–A)</option>
                <option value="category">By Category</option>
              </select>
              <div className="pointer-events-none absolute right-2.5 flex items-center text-slate-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>

            {isFiltered && (
              <button
                onClick={onResetFilters}
                className="px-3 py-2 text-[12px] font-medium text-[#0a7a8c] hover:bg-[#0a7a8c]/10 rounded-xl transition-colors whitespace-nowrap"
              >
                Reset All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
