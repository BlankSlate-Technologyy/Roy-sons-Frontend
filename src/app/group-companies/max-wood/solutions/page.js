"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sofa,
  Home,
  Briefcase,
  Utensils,
  Compass,
  Hammer,
  Layers,
  Palette,
  Ruler,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Eye,
  X,
  SlidersHorizontal,
  ChevronRight,
  TreePine,
  Check,
} from "lucide-react";
import {
  theme,
  MaxWoodNavbar,
  MaxWoodFooter,
  SectionLabel,
  SectionHeading,
} from "../components/MaxWoodShared";
import { FULL_CATALOG_LISTINGS, TIMBER_SPECIES } from "../max-wood-data";

const CATEGORIES = [
  "All",
  "Living & Lounge",
  "Executive Office",
  "Dining & Hospitality",
  "Bedroom Suites",
  "Architectural Paneling",
  "Modular Kitchens",
];

export default function MaxWoodSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTimber, setSelectedTimber] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);

  const filteredListings = FULL_CATALOG_LISTINGS.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesTimber =
      selectedTimber === "All" ||
      item.timber.toLowerCase().includes(selectedTimber.toLowerCase());
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.timber.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesTimber && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#5C5248] font-sans antialiased overflow-x-hidden selection:bg-[#BA7A3E] selection:text-white">
      <MaxWoodNavbar />

      {/* ─── BREADCRUMB ─── */}
      <div className="bg-[#FDFBF7] border-b py-3 px-4 sm:px-6 lg:px-8" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/group-companies/max-wood" className="hover:text-[#5C3A21] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400" />
          <span className="font-bold text-[#5C3A21]">Collections &amp; Listings</span>
        </div>
      </div>

      {/* ─── HERO HEADER ─── */}
      <section
        className="relative py-14 lg:py-20 px-4 sm:px-6 lg:px-8 border-b bg-[#FDFBF7]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl text-center max-w-3xl">
          <SectionLabel center>MAX Wood Corporation Master Catalog</SectionLabel>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] uppercase mb-4"
            style={{ color: theme.darkWood }}
          >
            Furniture, Interiors &amp; Architectural Listings
          </h1>
          <p className="text-sm sm:text-base font-medium leading-relaxed text-slate-600 mb-8">
            Explore our comprehensive listings of luxury living room suites, commanding corporate boardroom tables, bespoke dining sets, fluted acoustic paneling, and precision modular kitchens.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-700">
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border shadow-2xs" style={{ borderColor: theme.border }}>
              <CheckCircle2 size={14} className="text-emerald-600" />
              10-Year Structural Guarantee
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border shadow-2xs" style={{ borderColor: theme.border }}>
              <CheckCircle2 size={14} className="text-emerald-600" />
              Kiln-Dried 8% Hardwoods
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border shadow-2xs" style={{ borderColor: theme.border }}>
              <CheckCircle2 size={14} className="text-emerald-600" />
              German Blum &amp; Hafele Hardware
            </span>
          </div>
        </div>
      </section>

      {/* ─── LIVE SEARCH & FILTER CONTROL PANEL ─── */}
      <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b py-4 px-4 sm:px-6 lg:px-8 shadow-xs" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full lg:w-96">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, SKU, walnut, oak, desk..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border bg-[#FDFBF7] text-xs font-medium text-slate-800 focus:outline-none focus:border-[#BA7A3E]"
              style={{ borderColor: theme.border }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Timber Species Filter */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600">
              <SlidersHorizontal size={14} />
              <span>Timber:</span>
            </div>
            <select
              value={selectedTimber}
              onChange={(e) => setSelectedTimber(e.target.value)}
              className="px-3.5 py-2 rounded-xl border bg-white text-xs font-bold text-slate-800 focus:outline-none focus:border-[#BA7A3E] cursor-pointer"
              style={{ borderColor: theme.border }}
            >
              <option value="All">All Hardwood Species</option>
              <option value="Walnut">American Black Walnut</option>
              <option value="Teak">Burma Teak</option>
              <option value="Oak">European White Oak</option>
              <option value="Sheesham">Indigenous Sheesham</option>
            </select>

            <span className="text-xs font-bold text-[#5C3A21] bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
              {filteredListings.length} Pieces
            </span>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mx-auto max-w-screen-xl pt-3 flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-none">
          {CATEGORIES.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  active
                    ? "text-white shadow-xs"
                    : "bg-[#FDFBF7] text-slate-600 border hover:bg-slate-100"
                }`}
                style={{
                  backgroundColor: active ? theme.primary : undefined,
                  borderColor: theme.border,
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ─── CATALOG GRID ─── */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-white min-h-[600px]">
        <div className="mx-auto max-w-screen-xl">
          {filteredListings.length === 0 ? (
            <div className="text-center py-20 bg-[#FDFBF7] rounded-3xl border" style={{ borderColor: theme.border }}>
              <Compass size={40} className="mx-auto text-slate-300 mb-3" />
              <h3 className="text-lg font-black text-slate-700 uppercase">No Matching Listings Found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                Try searching for another keyword, selecting a different timber species, or resetting filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedTimber("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2 rounded-xl text-xs font-bold text-white shadow-xs cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredListings.map((item, idx) => (
                <div
                  key={item.id}
                  className="rounded-3xl border bg-white overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Realistic Photo Frame */}
                    <div className="relative h-64 w-full bg-slate-900 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#21140A]/85 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest bg-white/95 px-3 py-1 rounded-full text-[#5C3A21] shadow-xs">
                          {item.tag}
                        </span>
                        <span className="text-[10.5px] font-mono font-bold bg-[#21140A]/85 text-amber-200 px-3 py-0.5 rounded-full">
                          {item.sku}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#BA7A3E] block mb-1">
                        {item.category}
                      </span>
                      <h3
                        className="text-lg font-black leading-snug mb-2 group-hover:text-[#BA7A3E] transition-colors"
                        style={{ color: theme.darkWood }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                        {item.desc}
                      </p>

                      <div className="space-y-2 pt-3 border-t text-xs" style={{ borderColor: theme.border }}>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Timber:</span>
                          <span className="font-semibold text-slate-800 text-right truncate max-w-[200px]">{item.timber}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Dimensions:</span>
                          <span className="font-medium text-slate-700 text-right truncate max-w-[200px]">{item.dimensions}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Warranty:</span>
                          <span className="font-bold text-emerald-700">{item.warranty}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="px-6 pb-6 pt-0 flex items-center gap-3">
                    <button
                      onClick={() => setActiveModalItem(item)}
                      className="w-full py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-50 hover:bg-[#5C3A21] text-[#5C3A21] hover:text-white transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                    >
                      <Eye size={15} />
                      <span>Inspect Specifications</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── CUSTOM BESPOKE WOODWORK COMMISSION BANNER ─── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t bg-[#FDFBF7]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 border bg-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8" style={{ borderColor: theme.border }}>
            <div className="max-w-2xl">
              <SectionLabel>Custom Architectural Woodwork</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3" style={{ color: theme.darkWood }}>
                Need a Custom Scaled Furniture or Millwork Package?
              </h2>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                All MAX Wood Corporation pieces can be tailored to your exact architectural CAD drawings, room layouts, and timber finishes with custom 3D shop drawings.
              </p>
            </div>
            <Link
              href="/group-companies/max-wood/contact"
              className="px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-md transition-all hover:scale-[1.02] shrink-0"
              style={{ backgroundColor: theme.primary }}
            >
              <span>Submit Architectural Drawings</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MODAL ─── */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            style={{ borderColor: theme.border }}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#21140A]/85 text-amber-200 text-[10px] font-mono px-3 py-1 rounded-full">
                {activeModalItem.sku}
              </div>
            </div>

            <div className="mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#BA7A3E]">
                {activeModalItem.category} • {activeModalItem.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mt-1" style={{ color: theme.darkWood }}>
                {activeModalItem.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600 mt-2 leading-relaxed">
                {activeModalItem.desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-[#FDFBF7] border text-xs mb-5" style={{ borderColor: theme.border }}>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Timber Species</strong>
                <span className="font-bold text-slate-800">{activeModalItem.timber}</span>
              </div>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Surface Finish</strong>
                <span className="font-bold text-slate-800">{activeModalItem.finish}</span>
              </div>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Dimensions</strong>
                <span className="font-bold text-slate-800">{activeModalItem.dimensions}</span>
              </div>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Hardware &amp; Joinery</strong>
                <span className="font-bold text-slate-800">{activeModalItem.hardware}</span>
              </div>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Structural Warranty</strong>
                <span className="font-bold text-emerald-700">{activeModalItem.warranty}</span>
              </div>
              <div>
                <strong className="text-slate-400 uppercase tracking-wider block text-[10px]">Production Lead Time</strong>
                <span className="font-bold text-slate-800">{activeModalItem.leadTime}</span>
              </div>
            </div>

            <div className="mb-6">
              <strong className="text-xs font-black uppercase tracking-wider text-[#5C3A21] block mb-2">
                Key Engineering Highlights:
              </strong>
              <ul className="space-y-1.5 text-xs text-slate-700">
                {activeModalItem.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#BA7A3E] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t" style={{ borderColor: theme.border }}>
              <Link
                href="/group-companies/max-wood/contact"
                onClick={() => setActiveModalItem(null)}
                className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider text-white flex items-center justify-center gap-2 text-center shadow-xs cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Inquire About This Piece</span>
                <ArrowRight size={14} />
              </Link>
              <button
                onClick={() => setActiveModalItem(null)}
                className="py-3 px-5 rounded-xl text-xs font-bold border hover:bg-slate-50 text-slate-700 cursor-pointer"
                style={{ borderColor: theme.border }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ─── FOOTER ─── */}
      <MaxWoodFooter />
    </main>
  );
}
