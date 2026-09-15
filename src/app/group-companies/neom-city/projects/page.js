"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  HardHat,
  Building2,
  Factory,
  Trees,
  Zap,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
  Eye,
  SlidersHorizontal,
} from "lucide-react";
import {
  theme,
  NeomCityNavbar,
  NeomCityFooter,
  SectionLabel,
  SectionHeading,
  DevelopmentDetailModal,
  MasterplanInquiryModal,
} from "../components/NeomCityShared";
import { MASTER_DEVELOPMENTS, DEVELOPMENT_CATEGORIES } from "../neom-city-data";

export default function NeomCityProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalDev, setActiveModalDev] = useState(null);
  const [activeInquiryDev, setActiveInquiryDev] = useState(null);

  const filtered = MASTER_DEVELOPMENTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      (p.name && p.name.toLowerCase().includes(query)) ||
      (p.zoning && p.zoning.toLowerCase().includes(query)) ||
      (p.location && p.location.toLowerCase().includes(query)) ||
      (p.totalArea && p.totalArea.toLowerCase().includes(query)) ||
      (p.category && p.category.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomCityNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-gradient-to-b from-slate-50 to-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Urban Master Concessions &amp; Deployments</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Landmark Smart Developments &amp; <span style={{ color: theme.teal }}>Urban Megaprojects</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our comprehensive portfolio of smart city concessions, high-density financial bays, Special Economic Zones (SEZs), autonomous transit networks, and zero-carbon residential districts across Pakistan and the MENA region.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search by project name, urban sector, or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A2540] transition-all bg-white shadow-sm"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-white sticky top-[65px] z-30 shadow-xs" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {DEVELOPMENT_CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#0A2540] text-white shadow-md"
                      : "bg-slate-50 border text-slate-700 hover:border-[#0A2540] hover:bg-white"
                  }`}
                  style={{ borderColor: active ? theme.navy : theme.border }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <span className="hidden md:inline-flex text-xs font-bold text-slate-400 whitespace-nowrap">
            Showing {filtered.length} developments
          </span>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/50" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Building2 className="mx-auto text-slate-300 mb-4" size={48} />
              <h3 className="text-lg font-bold text-slate-800 mb-2">No developments matched your search</h3>
              <p className="text-sm text-slate-500 mb-6">Try clearing your filters or search keywords.</p>
              <button
                onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase bg-[#0A2540] text-white cursor-pointer"
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
                    {/* Card Realistic Image */}
                    <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={proj.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10.5px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0A2540]" style={{ borderColor: theme.border }}>
                          {proj.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/90 text-white backdrop-blur-xs">
                          {proj.status}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <p className="text-xs font-bold text-teal-300">{proj.totalArea}</p>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-black leading-snug mb-2 text-[#0A2540]">
                        {proj.name}
                      </h3>

                      <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                        <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#008080]" />
                        <span>{proj.location}</span>
                      </div>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-5 line-clamp-3" style={{ color: theme.textMuted }}>
                        {proj.zoning}
                      </p>

                      {/* Specs List */}
                      <div className="space-y-2 pt-4 border-t" style={{ borderColor: theme.border }}>
                        <p className="text-[11px] font-black uppercase tracking-wider text-[#0A2540]">
                          Technical Highlights:
                        </p>
                        {(proj.features || []).slice(0, 3).map((s, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5 text-[#008080]" />
                            <span className="text-xs font-medium text-slate-700">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex flex-col sm:flex-row gap-2.5">
                    <button
                      onClick={() => setActiveModalDev(proj)}
                      className="flex-1 py-2.5 px-3 rounded-xl border text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer text-[#0A2540]"
                      style={{ borderColor: theme.border }}
                    >
                      <Eye size={13} />
                      <span>View Specs</span>
                    </button>
                    <button
                      onClick={() => setActiveInquiryDev(proj)}
                      className="flex-1 py-2.5 px-3 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-1.5 bg-[#0A2540] hover:bg-[#008080] transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Inquire Masterplan</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel center>Municipal &amp; Private Partnership</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Partner With Neom City On Your Next Master Plan
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            From spatial zoning and master concessions to BOT infrastructure and turnkey smart city deployment, connect with our urban planning council today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/group-companies/neom-city/contact"
              className="px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-wider bg-[#008080] text-white hover:bg-white hover:text-[#0A2540] transition-all shadow-lg"
            >
              Consult With Our Master Planners
            </Link>
          </div>
        </div>
      </section>

      {/* Modals */}
      <DevelopmentDetailModal
        development={activeModalDev}
        onClose={() => setActiveModalDev(null)}
        onInquire={(dev) => {
          setActiveModalDev(null);
          setActiveInquiryDev(dev);
        }}
      />
      <MasterplanInquiryModal
        development={activeInquiryDev}
        onClose={() => setActiveInquiryDev(null)}
      />

      <NeomCityFooter />
    </main>
  );
}
