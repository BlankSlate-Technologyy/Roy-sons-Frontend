"use client";

import React, { useState, useMemo } from "react";
import {
  HEALTHCARE_CATEGORIES,
  HEALTHCARE_EQUIPMENT,
} from "@/lib/healthcare-portfolio-data";
import EquipmentCard from "./EquipmentCard";
import PortfolioFilterBar from "./PortfolioFilterBar";
import CategoryShowcase from "./CategoryShowcase";
import HealthcareTrustCTA from "./HealthcareTrustCTA";
import { Sparkles, ArrowDown, Stethoscope, SearchX } from "lucide-react";

export default function HealthcarePortfolio({ onSelectQuoteEquipment }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Filtered & Sorted Equipment
  const filteredEquipment = useMemo(() => {
    let list = [...HEALTHCARE_EQUIPMENT];

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.categoryTitle.toLowerCase().includes(q) ||
          item.shortDescription.toLowerCase().includes(q) ||
          item.overview.toLowerCase().includes(q) ||
          (item.applications &&
            item.applications.some((app) => app.toLowerCase().includes(q))) ||
          (item.features &&
            item.features.some((f) => f.toLowerCase().includes(q))) ||
          (item.healthcareEnvironment &&
            item.healthcareEnvironment.some((env) =>
              env.toLowerCase().includes(q)
            ))
      );
    }

    // Sorting
    if (sortBy === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "category") {
      list.sort((a, b) => a.categoryTitle.localeCompare(b.categoryTitle));
    }

    return list;
  }, [searchQuery, sortBy]);

  // Reset Filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSortBy("featured");
  };

  // Check if user is in "browse all categories" mode or "filtered/searched" mode
  const isDefaultBrowseMode =
    searchQuery.trim() === "" && sortBy === "featured";

  const handleScrollToEquipment = () => {
    const el = document.getElementById("portfolio-catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToConsultation = () => {
    const el = document.getElementById("cta-consultation");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="healthcare-portfolio" className="relative w-full bg-[#FAFCFD] text-slate-900">
      {/* Portfolio Header / Hero Section */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 border-b border-slate-200/80 bg-gradient-to-b from-white via-slate-50 to-[#FAFCFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-semibold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-4">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>Healthcare & Medical Equipment Portfolio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hospital Infrastructure & Clinical Equipment Supply
            </h2>

            <p className="mt-4 text-[15px] sm:text-[17px] text-slate-600 leading-relaxed">
              Explore ROYSONS verified portfolio of hospital technology, advanced diagnostic modalities, intensive-care systems, and surgical infrastructure designed for modern healthcare institutions.
            </p>

            {/* Quick Hero Actions */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                onClick={handleScrollToEquipment}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0a7a8c] text-white text-[14px] font-semibold hover:bg-[#005f6e] transition-all shadow-sm hover:shadow-md cursor-pointer"
              >
                <span>Explore Equipment Catalog</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={handleScrollToConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-700 text-[14px] font-semibold border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <span>Request Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Catalog & Filter Container */}
      <div id="portfolio-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Sticky-ready Filter Bar */}
        <div className="sticky top-20 z-20 bg-[#FAFCFD]/95 backdrop-blur-md pt-2 pb-4 mb-6 border-b border-slate-200/60">
          <PortfolioFilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            totalResults={filteredEquipment.length}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* Dynamic Display */}
        {isDefaultBrowseMode ? (
          /* Alternating Category Showcases (All 8 Categories) */
          <div className="space-y-6">
            {HEALTHCARE_CATEGORIES.map((category, idx) => {
              const categoryItems = HEALTHCARE_EQUIPMENT.filter(
                (item) => item.categoryId === category.id
              );
              return (
                <CategoryShowcase
                  key={category.id}
                  category={category}
                  index={idx}
                  equipmentList={categoryItems}
                />
              );
            })}
          </div>
        ) : (
          /* Filtered Results View */
          <div className="py-6">
            {/* Filter status header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Search &amp; Filter Results
                </h3>
                <p className="text-[13px] text-slate-500 mt-1">
                  {searchQuery
                    ? `Showing ${filteredEquipment.length} matching systems for "${searchQuery}"`
                    : `Showing ${filteredEquipment.length} systems`}
                </p>
              </div>

              <button
                onClick={handleResetFilters}
                className="text-[13px] font-semibold text-[#0a7a8c] hover:underline"
              >
                Clear Filters
              </button>
            </div>

            {/* Results Grid or Empty State */}
            {filteredEquipment.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {filteredEquipment.map((item) => (
                  <EquipmentCard
                    key={item.id}
                    equipment={item}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-20 px-4 bg-white rounded-3xl border border-slate-200 shadow-sm max-w-xl mx-auto">
                <SearchX className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-slate-900">
                  No medical equipment found
                </h4>
                <p className="text-[14px] text-slate-500 mt-2 max-w-md mx-auto">
                  We couldn't find any equipment matching your search criteria. Try adjusting your keywords or clearing the category filter.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0a7a8c] text-white text-[13px] font-semibold hover:bg-[#005f6e] transition-colors"
                >
                  <span>Reset All Filters</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Reassuring Trust CTA Section */}
        <HealthcareTrustCTA />
      </div>
    </div>
  );
}
