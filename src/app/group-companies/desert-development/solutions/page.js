"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trees,
  Globe,
  Droplets,
  Sun,
  Wind,
  Layers,
  Compass,
  HardHat,
  Sprout,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  X,
  ChevronRight,
  Filter,
  Check,
} from "lucide-react";
import {
  theme,
  DesertDevNavbar,
  DesertDevFooter,
  SectionLabel,
  SectionHeading,
} from "../components/DesertDevShared";
import {
  TERRAIN_CATEGORIES,
  FULL_CATALOG_LISTINGS,
} from "../desert-dev-data";

export default function DesertDevSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTerrain, setSelectedTerrain] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Extract unique terrain types
  const uniqueTerrains = useMemo(() => {
    const set = new Set();
    FULL_CATALOG_LISTINGS.forEach((item) => {
      if (item.terrain) set.add(item.terrain);
    });
    return ["All", ...Array.from(set)];
  }, []);

  // Filter listings based on search, category, and terrain
  const filteredListings = useMemo(() => {
    return FULL_CATALOG_LISTINGS.filter((item) => {
      const matchesCat =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesTerrain =
        selectedTerrain === "All" || item.terrain === selectedTerrain;
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.sku.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.terrain.toLowerCase().includes(query) ||
        item.soilType.toLowerCase().includes(query);

      return matchesCat && matchesTerrain && matchesSearch;
    });
  }, [selectedCategory, selectedTerrain, searchQuery]);

  return (
    <main className="min-h-screen bg-white text-[#425C52] font-sans antialiased selection:bg-[#2D7D62] selection:text-white">
      <DesertDevNavbar />

      {/* ─── 1. PAGE HEADER BANNER ─── */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <SectionLabel>Full Solutions Catalog</SectionLabel>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4"
              style={{ color: theme.darkGreen }}
            >
              24+ Turnkey Land Development &amp; Ecological Solutions
            </h1>
            <p className="text-base sm:text-lg font-medium leading-relaxed" style={{ color: theme.textMuted }}>
              Explore our complete inventory of engineered desert rehabilitation systems, deep aquifer solar water stations, mechanical sand dune checkerboards, mega-afforestation corridors, and utility agrivoltaics.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. SEARCH & FILTER CONTROLS ─── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b bg-[#F7FBF9]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          {/* Top Search Bar & Terrain Select */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
            <div className="md:col-span-8 relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search solutions by keyword, SKU (e.g. DDC-DUNE), soil type, or technology..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl border bg-white text-xs sm:text-sm font-medium focus:outline-[#1B4D3E] shadow-xs"
                style={{ borderColor: theme.border }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="md:col-span-4">
              <select
                value={selectedTerrain}
                onChange={(e) => setSelectedTerrain(e.target.value)}
                className="w-full py-3 px-4 rounded-2xl border bg-white text-xs sm:text-sm font-bold text-slate-700 focus:outline-[#1B4D3E] shadow-xs cursor-pointer"
                style={{ borderColor: theme.border }}
              >
                <option value="All">All Terrain Geomorphologies</option>
                {uniqueTerrains.filter(t => t !== "All").map((terrain) => (
                  <option key={terrain} value={terrain}>
                    {terrain}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {TERRAIN_CATEGORIES.map((cat) => {
              const count =
                cat === "All"
                  ? FULL_CATALOG_LISTINGS.length
                  : FULL_CATALOG_LISTINGS.filter((p) => p.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    selectedCategory === cat
                      ? "bg-[#1B4D3E] text-white shadow-sm"
                      : "bg-white text-slate-700 hover:bg-slate-100 border"
                  }`}
                  style={{ borderColor: theme.border }}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      selectedCategory === cat
                        ? "bg-white/25 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-4 border-t mt-4" style={{ borderColor: theme.border }}>
            <span>
              Showing <strong>{filteredListings.length}</strong> of <strong>{FULL_CATALOG_LISTINGS.length}</strong> solutions
            </span>
            {(selectedCategory !== "All" || selectedTerrain !== "All" || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedTerrain("All");
                  setSearchQuery("");
                }}
                className="text-[#1B4D3E] font-bold hover:underline cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ─── 3. LISTINGS GRID ─── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          {filteredListings.length === 0 ? (
            <div className="text-center py-20 p-8 rounded-3xl border bg-slate-50" style={{ borderColor: theme.border }}>
              <Sprout size={36} className="mx-auto text-slate-400 mb-3" />
              <h3 className="text-lg font-black uppercase text-slate-700 mb-1">
                No Matching Solutions Found
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Try loosening your search filters or clearing the terrain selector.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedTerrain("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1B4D3E]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col group"
                  style={{ borderColor: theme.border }}
                >
                  {/* Photo with Overlay Badge */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-black/65 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                      {item.sku}
                    </div>
                    <div className="absolute top-3.5 right-3.5 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                      {item.accreditation}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#2D7D62] mb-1">
                        <span>{item.terrain}</span>
                        <span className="text-slate-400 font-medium">{item.soilType}</span>
                      </div>

                      <h3 className="text-lg font-black uppercase tracking-tight mb-2.5 leading-snug" style={{ color: theme.darkGreen }}>
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium text-slate-600 leading-relaxed mb-5 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Technical Specs Metric Strip */}
                      <div className="grid grid-cols-2 gap-2 text-xs py-3 px-3.5 rounded-xl bg-emerald-50/50 mb-5">
                        <div>
                          <span className="text-slate-400 block text-[9.5px] uppercase font-bold">Efficiency</span>
                          <span className="font-extrabold text-[#0D3025]">{item.efficiency}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[9.5px] uppercase font-bold">Capacity</span>
                          <span className="font-extrabold text-[#0D3025]">{item.capacity}</span>
                        </div>
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="space-y-1.5 mb-6">
                        {item.features.slice(0, 2).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-[11.5px] text-slate-700 font-medium">
                            <CheckCircle2 size={13} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        href="/group-companies/desert-development/contact"
                        className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#1B4D3E] hover:opacity-95 transition-opacity cursor-pointer whitespace-nowrap"
                      >
                        <span>Inquire</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── 4. QUICK-VIEW SPECIFICATION MODAL ─── */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs">
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border"
            style={{ borderColor: theme.border }}
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 cursor-pointer"
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                {activeModalItem.sku}
              </span>
              <span className="text-[10px] font-bold text-slate-400">
                {activeModalItem.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-4" style={{ color: theme.darkGreen }}>
              {activeModalItem.title}
            </h3>

            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {activeModalItem.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-black uppercase tracking-wider mb-2.5" style={{ color: theme.darkGreen }}>
                Key Engineering Deliverables
              </h4>
              <ul className="space-y-1.5">
                {activeModalItem.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 size={13} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border mb-6" style={{ borderColor: theme.border }}>
              <h4 className="text-xs font-black uppercase tracking-wider mb-2 text-slate-700">
                Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {Object.entries(activeModalItem.specs).map(([k, v]) => (
                  <div key={k}>
                    <span className="text-slate-400 block text-[10px]">{k}</span>
                    <span className="font-bold text-slate-800">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t" style={{ borderColor: theme.border }}>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Warranty / Guarantee</span>
                <span className="text-xs font-bold text-emerald-800">{activeModalItem.warranty}</span>
              </div>
              <Link
                href="/group-companies/desert-development/contact"
                onClick={() => setActiveModalItem(null)}
                className="py-2.5 px-5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Project Proposal</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ─── 5. BOTTOM CTA BANNER ─── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t bg-[#F7FBF9]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl text-center">
          <SectionLabel center>Tailored Engineering</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4" style={{ color: theme.darkGreen }}>
            Need A Custom Arid Rehabilitation Solution?
          </h2>
          <p className="text-sm font-medium text-slate-600 max-w-xl mx-auto mb-8">
            Our multi-disciplinary team of hydrologists, GIS remote sensing specialists, and civil earthwork contractors design bespoke land development packages.
          </p>
          <Link
            href="/group-companies/desert-development/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            style={{ backgroundColor: theme.primary }}
          >
            <span>Consult Our Senior Engineers</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <DesertDevFooter />
    </main>
  );
}
