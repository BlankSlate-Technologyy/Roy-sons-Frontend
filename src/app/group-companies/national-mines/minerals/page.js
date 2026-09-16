"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
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
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel center>Commodities &amp; Raw Resources</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-4" style={{ color: theme.navy }}>
              Certified Export-Grade <span style={{ color: theme.gold }}>Minerals &amp; Metals</span>
            </h1>

            <p className="text-sm sm:text-base font-normal leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Sourced directly from our managed mining concessions across Pakistan and refined to rigorous international purity specifications for industrial, metallurgical, and global commodity export markets.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search minerals by name, origin, or grade..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#C59B27] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? "bg-[#0B1B2B] text-white shadow-xs"
                      : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-[#0B1B2B]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Minerals Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((mineral) => (
              <div
                key={mineral.slug}
                id={mineral.id}
                className="mine-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
              >
                <div>
                  {/* Mineral Visual with zoom */}
                  <Link
                    href={`/group-companies/national-mines/minerals/${mineral.slug}`}
                    className="mine-img-wrapper block w-full h-48 bg-slate-950 relative cursor-pointer"
                  >
                    <Image
                      src={mineral.heroImage}
                      alt={mineral.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                        {mineral.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md bg-black/80 text-amber-300 border border-amber-500/30">
                        {mineral.grade}
                      </span>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-[16px] font-semibold tracking-tight mb-1" style={{ color: theme.navy }}>
                      <Link href={`/group-companies/national-mines/minerals/${mineral.slug}`} className="hover:text-[#C59B27] transition-colors">
                        {mineral.name}
                      </Link>
                    </h3>

                    <p className="text-[11px] font-medium text-amber-700 mb-2">
                      Concession: {mineral.origin}
                    </p>

                    <p className="text-xs font-normal leading-relaxed text-slate-500 mb-3 line-clamp-2">
                      {mineral.overview}
                    </p>

                    {/* Quick Specs */}
                    <div className="space-y-1.5 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                      {mineral.deliverables.slice(0, 2).map((d, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5 text-emerald-600" />
                          <span className="text-xs font-normal text-slate-700 leading-snug">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle Link — NO BIG BUTTONS */}
                <div className="px-5 pb-4 pt-2 border-t" style={{ borderColor: theme.borderLight }}>
                  <Link
                    href={`/group-companies/national-mines/minerals/${mineral.slug}`}
                    className="mine-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    style={{ color: theme.gold }}
                  >
                    <span>View commodity specifications</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA / Inquiry Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: theme.gold }}>
                Bulk Mineral Procurement &amp; Off-Take
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ color: theme.navy }}>
                Require Certified Mineral Assays or Volume Allocations?
              </h2>
              <p className="text-xs sm:text-sm font-normal max-w-xl" style={{ color: theme.textMuted }}>
                Submit your volume specifications, port of destination, and target purity to receive an official commercial proposal.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Mineral Quotation</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
