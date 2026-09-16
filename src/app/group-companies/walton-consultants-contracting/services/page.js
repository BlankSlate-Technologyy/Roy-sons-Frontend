"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Hammer,
  Truck,
  Layers,
  Wrench,
  ClipboardList,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  HardHat,
  Users2,
  Sparkles,
  Compass,
  FileCheck2,
  Calculator,
  FileSpreadsheet,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/WaltonShared";
import { WALTON_SERVICES } from "../services-data";

const SERVICE_STATS = [
  { value: "25+", label: "Years Experience", icon: Award },
  { value: "350+", label: "Completed Projects", icon: Building2 },
  { value: "1200+", label: "Engineers on Staff", icon: Users2 },
  { value: "99%", label: "Delivery Success", icon: ShieldCheck },
];

export default function WaltonServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(WALTON_SERVICES.map((s) => s.category))];

  const filtered = WALTON_SERVICES.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.deliverables.some((d) => d.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCat = selectedCategory === "All" || s.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <main className="min-h-screen bg-white text-[#2C3E50] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. SERVICES HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Multidisciplinary Engineering Divisions</SectionLabel>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black tracking-tight leading-[1.15] uppercase mb-4 text-[#0A1E34]">
                EXPERTISE THAT MOVES <span style={{ color: theme.navy }}>PROJECTS FORWARD</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-8">
                From technical consultancy and project management to infrastructure development and construction oversight, we bring engineering expertise to every stage of the project lifecycle.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/walton-consultants-contracting/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:brightness-110"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Request Division Proposal</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/group-companies/walton-consultants-contracting/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-300 text-[#0A1E34] hover:bg-slate-50 transition-all"
                >
                  <span>View Project Case Studies</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-50">
                <Image
                  src="/images/walton/service_01_consultancy.jpg"
                  alt="Engineering Consultancy & Inspection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#DFC48B] block mb-1">
                      8 Specialized Divisions
                    </span>
                    <h4 className="text-base font-bold">
                      Full-Lifecycle Engineering &amp; Infrastructure Governance
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. STATS COUNTER BAR
      ───────────────────────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F4F7FA]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICE_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="mb-1" style={{ color: theme.navyDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1300 + i * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SEARCH & CATEGORY FILTER BAR
      ───────────────────────────────────────────────────────────── */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white sticky top-14 sm:top-16 z-30 shadow-xs">
        <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search engineering divisions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-[#0A1E34] focus:outline-hidden focus:border-[#C5A059] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0E2A47] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. 8 VISUALLY RICH SERVICES SECTIONS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-20">
          {filtered.map((svc, index) => {
            const Icon = svc.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={svc.id}
                id={svc.id}
                className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-200 bg-white shadow-sm transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  {/* Left or Right Image Header (4:3 aspect ratio) */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative w-full h-[300px] sm:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 500px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/70 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#C5A059] text-white shadow-xs">
                        {svc.category}
                      </span>
                    </div>

                    {/* Metrics Grid below image */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {svc.metrics.map((m) => (
                        <div key={m.label} className="p-3 rounded-xl border border-slate-200 bg-[#F4F7FA] text-center">
                          <span className="text-xs sm:text-sm font-black text-[#0E2A47] block">{m.value}</span>
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: theme.navy }}>
                        <Icon size={18} />
                      </div>
                      <span className="text-xs font-black uppercase tracking-[0.16em] text-[#C5A059]">
                        Division 0{index + 1}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#0A1E34] uppercase tracking-tight mb-2">
                      {svc.title}
                    </h2>

                    <p className="text-xs sm:text-sm font-bold text-[#0E2A47] uppercase tracking-wide mb-4">
                      {svc.subtitle}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                      {svc.overview}
                    </p>

                    {/* Deliverables List */}
                    <div className="mb-6">
                      <h4 className="text-xs font-black uppercase tracking-[0.14em] text-[#0A1E34] mb-3">
                        Key Engineering Scope &amp; Deliverables:
                      </h4>
                      <ul className="space-y-2">
                        {svc.deliverables.slice(0, 4).map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <CheckCircle2 size={14} className="text-[#C5A059] shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Specs Table */}
                    <div className="p-4 rounded-xl border border-slate-200 bg-[#F4F7FA] mb-6">
                      <h5 className="text-[11px] font-black uppercase tracking-wider text-[#0A1E34] mb-2.5">
                        Technical Standards &amp; Codes:
                      </h5>
                      <div className="space-y-1.5 text-xs">
                        {svc.technicalSpecs.slice(0, 3).map((spec) => (
                          <div key={spec.key} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 pb-1 last:border-0 last:pb-0">
                            <span className="font-bold text-slate-700">{spec.key}:</span>
                            <span className="text-slate-600 sm:text-right">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA link to proposal */}
                    <div className="flex flex-wrap items-center gap-3">
                      <Link
                        href="/group-companies/walton-consultants-contracting/contact"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-xs hover:brightness-110 transition-all"
                        style={{ backgroundColor: theme.navy }}
                      >
                        <span>Request Scope Quote</span>
                        <ArrowRight size={13} />
                      </Link>

                      <Link
                        href="/group-companies/walton-consultants-contracting/projects"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold uppercase tracking-wider text-[#0A1E34] hover:bg-slate-50 transition-colors"
                      >
                        <span>Related Case Studies</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. FINAL CALL TO ACTION
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
                Require Engineering or Contracting Support?
              </h2>
              <p className="text-sm text-slate-300 font-normal leading-relaxed">
                Connect with our principal civil structural engineers to review architectural CAD drawings, structural BOQs, and turnkey EPC pricing.
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
