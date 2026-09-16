"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  Building2,
  Trees,
  Compass,
  Hammer,
  Leaf,
  Truck,
  Factory,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/WaltonShared";
import { WALTON_SOLUTIONS } from "../solutions-data";

export default function WaltonSolutionsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = WALTON_SOLUTIONS.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#2C3E50] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. SOLUTIONS HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Engineered Turnkey Solutions</SectionLabel>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black tracking-tight leading-[1.15] uppercase mb-4 text-[#0A1E34]">
                FROM COMPLEX CHALLENGES <span style={{ color: theme.navy }}>TO PRACTICAL SOLUTIONS</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
                Integrated packages engineered to eliminate budget uncertainty, accelerate construction timelines, and ensure lifelong structural resilience across transport, industrial, and urban sectors.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/walton-consultants-contracting/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:brightness-110"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Request Solution Proposal</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/group-companies/walton-consultants-contracting/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-300 text-[#0A1E34] hover:bg-slate-50 transition-all"
                >
                  <span>Explore Executed Projects</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-50">
                <Image
                  src="/images/walton/solution_01_infrastructure.jpg"
                  alt="Infrastructure & Construction Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#DFC48B] block mb-1">
                      8 Comprehensive Packages
                    </span>
                    <h4 className="text-base font-bold">
                      Infrastructure, Industrial, Urban &amp; Structural Engineering
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SEARCH BAR
      ───────────────────────────────────────────────────────────── */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F4F7FA]">
        <div className="mx-auto max-w-screen-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-96">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search solutions by keyword or sector..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-[#0A1E34] bg-white focus:outline-hidden focus:border-[#C5A059] transition-colors"
            />
          </div>

          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Showing {filtered.length} of {WALTON_SOLUTIONS.length} Solution Packages
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. 8 VISUALLY ATTRACTIVE SOLUTION CARDS GRID
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  className="walton-card-lift rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between bg-white shadow-xs group"
                >
                  <div>
                    {/* Unique High-Quality Image Header */}
                    <div className="relative w-full h-52 overflow-hidden bg-slate-100">
                      <Image
                        src={sol.image}
                        alt={sol.name}
                        fill
                        className="object-cover walton-img-zoom transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 350px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/60 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-[#C5A059] text-white shadow-xs">
                        {sol.tag}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-white" style={{ backgroundColor: theme.navy }}>
                        <Icon size={20} />
                      </div>

                      <h3 className="text-lg font-black text-[#0A1E34] leading-snug mb-1.5 group-hover:text-[#0E2A47] transition-colors">
                        {sol.name}
                      </h3>

                      <p className="text-[11px] font-bold text-[#0E2A47] uppercase tracking-wide mb-3">
                        {sol.subtitle}
                      </p>

                      <p className="text-xs text-slate-600 leading-relaxed mb-5 line-clamp-3">
                        {sol.desc}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-1.5 mb-5">
                        {sol.highlights.slice(0, 3).map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-[11px] text-slate-600">
                            <CheckCircle2 size={13} className="text-[#C5A059] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center">
                        {sol.stats.map((st) => (
                          <div key={st.label}>
                            <span className="text-xs font-black text-[#0E2A47] block truncate">{st.value}</span>
                            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block truncate">{st.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/group-companies/walton-consultants-contracting/contact"
                      className="w-full py-2.5 rounded-xl border border-slate-200 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 text-[#0A1E34] hover:bg-slate-50 hover:border-[#C5A059] transition-all"
                    >
                      <span>Inquire Specifications</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. FINAL CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F4F7FA] border-t border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-xl text-white relative overflow-hidden"
            style={{ backgroundColor: theme.navyDark }}
          >
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
                LET&apos;S BUILD WHAT&apos;S NEXT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase leading-tight mb-2 text-white">
                Turn Complex Requirements Into Practical Solutions
              </h2>
              <p className="text-sm text-slate-300 font-normal leading-relaxed">
                Our structural and civil engineering experts will evaluate your site data, feasibility parameters, and project goals to engineer an optimal delivery package.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 transition-all shadow-md hover:brightness-110"
                style={{ backgroundColor: theme.goldHover }}
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WaltonFooter />
    </main>
  );
}
