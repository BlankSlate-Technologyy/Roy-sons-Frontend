"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  FileSearch,
  TrendingUp,
  Handshake,
  PiggyBank,
  Settings,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  ShieldCheck,
  Scale,
  Landmark,
} from "lucide-react";
import {
  theme,
  PakConsultNavbar,
  PakConsultFooter,
  SectionLabel,
  SectionHeading,
} from "../components/PakConsultShared";

const CATEGORIES = [
  "All",
  "Government & PPPs",
  "Infrastructure PMO",
  "Industrial Feasibility",
  "Energy & Utilities",
  "Banking & Finance",
  "Corporate Restructuring",
];

const SECTOR_SOLUTIONS = [
  {
    name: "PakConsult Government PPP & Concession Advisory",
    category: "Government & PPPs",
    specs: ["Concessions: BOT, DBFOM, Annuity & Revenue-Sharing Models", "Finance: Viability Gap Funding (VGF) & Debt Structuring", "Governance: PPRA Rules & Sovereign Guarantee Drafting"],
    desc: "Structuring bankable public-private partnership concessions, economic rate of return (ERR) assessments, and private investor bidding rounds.",
    image: "/pakconsult_hero_strategy.svg",
    tag: "PPP Transaction Suite",
  },
  {
    name: "PakConsult Mega Infrastructure PMO Supervision",
    category: "Infrastructure PMO",
    specs: ["Oversight: Independent Engineer & Client Representative", "Telemetry: Digital Earned Value & Schedule Variance Tracking", "Standards: FIDIC Red/Silver Book Contract Governance"],
    desc: "Enterprise Project Management Office (PMO) deployment ensuring on-budget execution, contractor quality verification, and transparent milestone reporting.",
    image: "/pakconsult_hero_strategy.svg",
    tag: "Infrastructure PMO",
  },
  {
    name: "PakConsult Special Economic Zone (SEZ) Feasibility",
    category: "Industrial Feasibility",
    specs: ["Scope: 50 to 500+ Acre Industrial Zone Master Feasibilities", "Economics: 20-Year Financial IRR / NPV Cash Flow Forecasts", "Statutory: Board of Investment (BOI) SEZ Status Filings"],
    desc: "Techno-economic master planning and bankable feasibility studies for industrial estates, export processing zones, and manufacturing parks.",
    image: "/pakconsult_hero_strategy.svg",
    tag: "SEZ Master Feasibility",
  },
  {
    name: "PakConsult Energy & Utilities Transaction Advisory",
    category: "Energy & Utilities",
    specs: ["Sectors: Solar PV, Wind, Hydro, Grid Transmission & Water", "Tariffs: NEPRA Cost-Plus & Competitive Bidding Financial Models", "Legal: Power Purchase Agreement (PPA) & EPC Terms Review"],
    desc: "Advisory services for power generation developers and utilities including tariff petitions, power purchase agreements, and project financing memoranda.",
    image: "/pakconsult_hero_strategy.svg",
    tag: "Energy Advisory Suite",
  },
  {
    name: "PakConsult Banking & Financial Restructuring",
    category: "Banking & Finance",
    specs: ["Review: Loan Portfolio Credit Stress-Testing & NPL Audits", "Optimization: Capital Adequacy (Basel III) & Liquidity Telemetry", "Strategy: Digital Branchless Banking Expansion Roadmaps"],
    desc: "Strategic restructuring advisory for commercial banks, microfinance institutions, and DFIs to optimize capital allocation and enhance asset quality.",
    image: "/pakconsult_hero_strategy.svg",
    tag: "FinTech & Banking Advisory",
  },
  {
    name: "PakConsult Corporate M&A & Strategic Due Diligence",
    category: "Corporate Restructuring",
    specs: ["Valuation: DCF, Comparable Multiples & Precedent Transactions", "Due Diligence: Commercial, Operational & Management Audits", "Integration: 100-Day Post-Merger Operational Synergy Plan"],
    desc: "End-to-end transaction advisory for corporate mergers, acquisitions, joint ventures, and post-merger operational synergy realization.",
    image: "/pakconsult_hero_strategy.svg",
    tag: "M&A Strategic Due Diligence",
  },
];

export default function PakConsultSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = SECTOR_SOLUTIONS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#48525D] font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Sector Advisory Packages &amp; Solutions</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slateDark }}>
              Strategic Consulting Packages &amp; <span style={{ color: theme.slate }}>Advisory Solutions</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Supplying bankable feasibility studies, public-private partnership (PPP) concession structuring, infrastructure PMO governance, and corporate restructuring across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search solutions (e.g. PPP, Feasibility, PMO, Energy, M&A)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3A444E] transition-all bg-white shadow-xs"
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
                      ? "bg-[#3A444E] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#3A444E]"
                  }`}
                  style={{ borderColor: active ? theme.slate : theme.border }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prod) => (
              <div
                key={prod.name}
                className="pakconsult-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#3A444E]" style={{ borderColor: theme.border }}>
                        {prod.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-3" style={{ color: theme.slateDark }}>
                      {prod.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {prod.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(214, 220, 226, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.slateDark }}>
                        Advisory Scope &amp; Deliverables:
                      </p>
                      {prod.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#C5A059]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/pakistan-consultancy/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.slateDark }}
                  >
                    <span>Request Strategic Briefing</span>
                    <ArrowRight size={14} />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A6823B]">
                TRANSACTION ADVISORY &amp; PUBLIC PROCUREMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.slateDark }}>
                Need Comprehensive Feasibility Or Concession Advisory?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide complete strategic consulting for federal ministries, provincial development authorities, and multinational corporate developers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.slate }}
              >
                <span>Request Advisory Scoping</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.slate, color: theme.slate }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PakConsultFooter />
    </main>
  );
}
