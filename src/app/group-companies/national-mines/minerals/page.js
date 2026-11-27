"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Search,
  Compass,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
} from "../components/NationalMinesShared";
import { NATIONAL_MINES_MINERALS } from "../minerals-data";

const CATEGORIES = [
  "All",
  "Precious Metals",
  "Industrial Base Metals",
  "Ferrous Minerals",
  "Energy Resources",
  "Strategic Minerals",
  "Construction Materials",
  "Industrial Minerals",
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
      m.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Pakistan Commodities &amp; Raw Resources</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.14] mb-4" style={{ color: theme.navy }}>
              Certified Export-Grade <span style={{ color: theme.gold }}>Minerals &amp; Metals</span>
            </h1>

            <p className="text-base sm:text-lg font-normal leading-relaxed mb-7" style={{ color: theme.textMuted }}>
              Sourced directly from our managed Pakistani mining concessions across Chagai, Khewra Salt Range, Thar, Chiniot, and Muslim Bagh—assayed and refined to international metallurgical and export specifications.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search minerals by name, belt, or grade (e.g. Salt, Chagai, Cu)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm sm:text-[15px] font-normal focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 transition-all bg-white shadow-xs"
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
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? "bg-[#0B1B2B] text-white shadow-xs"
                      : "bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-[#0B1B2B]"
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
      <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          {filtered.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border" style={{ borderColor: theme.border }}>
              <p className="text-base font-semibold text-slate-700 mb-2">No minerals match your current filter.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-sm font-bold cursor-pointer underline"
                style={{ color: theme.gold }}
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((mineral) => (
                <div
                  key={mineral.slug}
                  id={mineral.id}
                  className="mine-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
                >
                  <div>
                    <Link
                      href={`/group-companies/national-mines/minerals/${mineral.slug}`}
                      className="mine-img-wrapper block w-full h-52 bg-slate-950 relative cursor-pointer"
                    >
                      <Image
                        src={mineral.heroImage}
                        alt={mineral.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                          {mineral.tag}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-md bg-black/85 text-amber-300 border border-amber-500/40">
                          {mineral.grade}
                        </span>
                      </div>
                    </Link>

                    <div className="p-5 sm:p-6">
                      <h3 className="text-xl font-bold tracking-tight mb-1" style={{ color: theme.navy }}>
                        <Link href={`/group-companies/national-mines/minerals/${mineral.slug}`} className="hover:text-[#C59B27] transition-colors">
                          {mineral.name}
                        </Link>
                      </h3>

                      <p className="text-xs sm:text-[13px] font-semibold text-amber-700 mb-2.5 flex items-center gap-1.5">
                        <Compass size={13} className="shrink-0" />
                        <span>{mineral.origin}</span>
                      </p>

                      <p className="text-sm sm:text-[15px] font-normal leading-relaxed mb-4 line-clamp-3" style={{ color: theme.textMuted }}>
                        {mineral.overview}
                      </p>

                      <div className="space-y-2 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                        {mineral.deliverables.slice(0, 2).map((d, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-emerald-700" />
                            <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                    <Link
                      href={`/group-companies/national-mines/minerals/${mineral.slug}`}
                      className="mine-link-arrow cursor-pointer"
                    >
                      <span>View commodity specifications</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-7 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#0B1B2B] text-white" style={{ borderColor: theme.borderDark }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: theme.goldLight }}>
                Bulk Mineral Procurement &amp; Off-Take
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                Require Certified Mineral Assays or Volume Allocations?
              </h2>
              <p className="text-sm sm:text-base font-normal max-w-xl text-slate-200 leading-relaxed">
                Submit your volume specifications, port of destination, and target purity to receive an official commercial proposal.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all shadow-sm hover:brightness-110 cursor-pointer"
                style={{ backgroundColor: theme.gold }}
              >
                <span>Request Mineral Quotation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
