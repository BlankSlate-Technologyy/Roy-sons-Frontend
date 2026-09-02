"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Sparkles,
  Layers,
  Factory,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
  SectionHeading,
} from "../components/NationalMinesShared";
import { NATIONAL_MINES_MINERALS } from "../minerals-data";

const CATEGORIES = [
  "All",
  "Precious Metals",
  "Industrial Base Metals",
  "Ferrous Minerals",
  "Energy Resources",
  "Construction Materials",
  "Industrial Minerals",
  "Strategic Minerals",
  "Architectural Stones",
];

export default function NationalMinesMineralsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = NATIONAL_MINES_MINERALS.filter((m) => {
    const matchesCategory = selectedCategory === "All" || m.category === selectedCategory;
    const matchesSearch =
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#16243E] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Commodities &amp; Raw Resources</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
              Certified Export-Grade <span style={{ color: theme.gold }}>Minerals &amp; Metals</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Sourced directly from our managed mining concessions and refined to rigorous international purity specifications for industrial, metallurgical, and global commodity export markets.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search minerals by name, origin, or grade..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16243E] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/70" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#16243E] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#C59B27]"
                  }`}
                  style={{ borderColor: active ? theme.navy : theme.border }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Minerals Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((mineral) => (
              <div
                key={mineral.slug}
                className="nmc-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Image & Badge */}
                  <Link
                    href={`/group-companies/national-mines/minerals/${mineral.slug}`}
                    className="relative block w-full h-52 bg-slate-100 overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={mineral.heroImage}
                      alt={mineral.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm" style={{ color: theme.navy, borderColor: theme.border }}>
                        {mineral.category}
                      </span>
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <Link href={`/group-companies/national-mines/minerals/${mineral.slug}`}>
                        <h3 className="text-xl font-black hover:text-[#C59B27] transition-colors cursor-pointer" style={{ color: theme.navy }}>
                          {mineral.name}
                        </h3>
                      </Link>
                      <span className="text-xs font-black uppercase tracking-wider text-[#C59B27] px-2.5 py-0.5 rounded-md bg-[#C59B27]/10">
                        {mineral.grade}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-500 mb-4">
                      Concession: <span className="text-slate-800">{mineral.origin}</span>
                    </p>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {mineral.overview}
                    </p>

                    {/* Deliverables / Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
                        Key Specifications:
                      </p>
                      {mineral.deliverables.slice(0, 3).map((s, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: theme.gold }} />
                          <span className="text-xs font-medium text-slate-700 leading-snug">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0 flex gap-2">
                  <Link
                    href={`/group-companies/national-mines/minerals/${mineral.slug}`}
                    className="flex-1 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navy }}
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/group-companies/national-mines/contact"
                    className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
                    style={{ backgroundColor: theme.navy }}
                    title="Request Assay & Quote"
                  >
                    <span>Quote</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.gold }}>
                BULK COMMODITY PURCHASE CONTRACTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navy }}>
                Looking For Custom Mineral Specifications?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We can provide custom sizing, magnetic separation, or metallurgical smelting to meet your exact industrial grade requirements.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-mines/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Custom Mineral Assay</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
