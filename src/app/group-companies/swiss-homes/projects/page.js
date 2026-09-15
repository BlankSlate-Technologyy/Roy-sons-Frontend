"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home as HomeIcon,
  Building2,
  TrendingUp,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Layers,
  Award,
  ShieldCheck,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import {
  theme,
  SwissHomesNavbar,
  SwissHomesFooter,
  SectionLabel,
  SectionHeading,
  PropertyInquiryModal,
  PropertyDetailModal,
} from "../components/SwissHomesShared";
import { PROPERTY_LISTINGS } from "../swiss-homes-data";

const CATEGORIES = [
  "All",
  "Residential Villas",
  "Luxury Apartments",
  "Gated Communities",
  "Country Farmhouses",
  "Commercial Plazas",
  "Smart Townhouses",
];

export default function SwissHomesProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Modals
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedPropertyForInquiry, setSelectedPropertyForInquiry] = useState(null);
  const [activeDetailProperty, setActiveDetailProperty] = useState(null);

  const filtered = PROPERTY_LISTINGS.filter((d) => {
    const matchesCategory = selectedCategory === "All" || d.category === selectedCategory;
    const matchesSearch =
      d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "price-low") return a.priceNum - b.priceNum;
    if (sortBy === "price-high") return b.priceNum - a.priceNum;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  const handleOpenInquiry = (prop) => {
    setSelectedPropertyForInquiry(prop);
    setIsInquiryOpen(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#1F2937] font-sans antialiased overflow-x-hidden">
      <SwissHomesNavbar onOpenInquiry={() => setIsInquiryOpen(true)} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-gradient-to-b from-slate-50 to-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Properties &amp; Housing Deployments</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
              Signature Developments &amp; <span style={{ color: theme.red }}>Real Estate Projects</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8 text-slate-600">
              Browse our master developments including luxury 10 Marla and 1 Kanal smart villas, skyline high-rise apartment towers, approved gated societies, countryside farmhouses, and prime commercial plots.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by development name, city, or sector..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B01B2E] transition-all bg-white shadow-sm"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills & Sort Bar */}
      <section className="py-5 px-4 sm:px-6 lg:px-8 border-b bg-white sticky top-[65px] z-30 shadow-xs" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none w-full md:w-auto">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#B01B2E] text-white shadow-md"
                      : "bg-slate-50 border text-slate-700 hover:border-[#B01B2E] hover:bg-white"
                  }`}
                  style={{ borderColor: active ? theme.red : theme.border }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-xs font-bold text-slate-500 whitespace-nowrap">
              {filtered.length} developments listed
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1.5 rounded-xl border text-xs font-bold text-slate-700 bg-white"
              style={{ borderColor: theme.border }}
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/50" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border" style={{ borderColor: theme.border }}>
              <HomeIcon className="mx-auto text-slate-300 mb-3" size={48} />
              <h4 className="text-lg font-bold text-slate-800 mb-2">No properties match your filter</h4>
              <p className="text-sm text-slate-500 mb-6">Try clearing your search query or choosing another category.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase bg-[#B01B2E] text-white cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Realistic Photo Card Image */}
                    <div className="relative w-full h-56 bg-slate-900 overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/85 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 text-[#1F2937] shadow-sm">
                          {proj.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#B01B2E] text-white shadow-xs">
                          {proj.badge}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 text-white flex items-center justify-between">
                        <span className="text-xs font-bold text-emerald-400">
                          {proj.status}
                        </span>
                        <span className="text-xs font-bold text-slate-200">
                          {proj.area}
                        </span>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-2">
                        <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#B01B2E]" />
                        <span>{proj.location}</span>
                      </div>

                      <h3 className="text-lg font-black leading-snug text-slate-900 mb-2 group-hover:text-[#B01B2E] transition-colors">
                        {proj.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed text-slate-600 mb-5 line-clamp-3">
                        {proj.summary}
                      </p>

                      {/* Specs / Features Preview */}
                      {proj.features && (
                        <div className="space-y-2 pt-4 border-t" style={{ borderColor: theme.border }}>
                          <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                            Development Highlights:
                          </p>
                          {proj.features.slice(0, 3).map((f, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                              <CheckCircle2 size={13} className="text-[#B01B2E] flex-shrink-0" />
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t mt-4" style={{ borderColor: theme.border }}>
                    <div className="flex items-baseline justify-between py-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Pricing / Booking</span>
                        <p className="text-base font-black text-[#B01B2E]">{proj.price}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <button
                        onClick={() => setActiveDetailProperty(proj)}
                        className="flex-1 py-2.5 rounded-xl border text-xs font-extrabold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <Eye size={13} />
                        <span>Specs</span>
                      </button>
                      <button
                        onClick={() => handleOpenInquiry(proj)}
                        className="flex-1 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white bg-[#B01B2E] hover:bg-[#8E1524] transition-colors shadow-xs flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <HomeIcon size={13} />
                        <span>Inquire</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Investor Callout Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-slate-50" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#B01B2E]">
                INVESTOR &amp; OVERSEAS LIAISON
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1F2937] mb-2">
                Seeking High-Yield Commercial Or Bulk Plot Portfolios?
              </h3>
              <p className="text-sm font-medium leading-relaxed text-slate-600 max-w-2xl">
                Our Corporate Real Estate Division handles bulk institutional plot concessions, commercial pre-leased floors, and high-ROI joint ventures with guaranteed buyback agreements.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <button
                onClick={() => setIsInquiryOpen(true)}
                className="px-7 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#B01B2E] hover:bg-[#8E1524] transition-colors shadow-md cursor-pointer flex items-center gap-2"
              >
                <HomeIcon size={14} />
                <span>Schedule Investor Consultation</span>
              </button>
              <Link
                href="/group-companies/swiss-homes/contact"
                className="px-6 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider text-slate-800 border border-slate-300 hover:bg-white transition-colors"
              >
                Contact Sales HQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <PropertyInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => {
          setIsInquiryOpen(false);
          setSelectedPropertyForInquiry(null);
        }}
        preselectedProperty={selectedPropertyForInquiry}
      />

      <PropertyDetailModal
        property={activeDetailProperty}
        onClose={() => setActiveDetailProperty(null)}
        onInquireNow={(prop) => {
          setSelectedPropertyForInquiry(prop);
          setIsInquiryOpen(true);
        }}
      />

      <SwissHomesFooter />
    </main>
  );
}
