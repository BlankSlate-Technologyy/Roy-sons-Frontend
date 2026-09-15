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
  Building2,
  HardHat,
  Zap,
  Leaf,
  Droplets,
  Factory,
  Gem,
  Coins,
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
  "Infrastructure & Transport",
  "Energy & Renewables",
  "Public Sector & PPPs",
  "Industrial & SEZ",
  "Water & Environment",
  "Investment & Banking",
];

const SECTORS_AND_SOLUTIONS = [
  {
    name: "National Highway & Transport Infrastructure",
    category: "Infrastructure & Transport",
    specs: [
      "BOT, DBFOM & Annuity Concession Structuring",
      "Traffic Demand Sizing & Toll Elasticity Regressions",
      "FIDIC Red/Silver Book Contract Governance",
      "Planning Commission PC-I & PC-II Formulations",
    ],
    desc: "Structuring bankable public-private partnership concessions, economic rate of return (ERR) assessments, and independent engineer supervision for major transport corridors across Pakistan.",
    image: "/images/pakconsult/sector_infrastructure.jpg",
    tag: "Transport Infrastructure",
    icon: HardHat,
  },
  {
    name: "Power, Renewables & Utilities Advisory",
    category: "Energy & Renewables",
    specs: [
      "Solar PV, Wind & Hydropower Feasibility Studies",
      "NEPRA Tariff Petition & Cost-Plus Financial Modeling",
      "Power Purchase Agreement (PPA) Legal Due Diligence",
      "Grid Evacuation & Interconnection Studies",
    ],
    desc: "Turnkey transaction and techno-economic advisory for power generation developers and utilities including financial modeling, environmental clearances, and commercial bank syndication.",
    image: "/images/pakconsult/sector_energy.jpg",
    tag: "Clean Energy & Utilities",
    icon: Zap,
  },
  {
    name: "Real Estate & Smart Urban Master Planning",
    category: "Infrastructure & Transport",
    specs: [
      "Mixed-Use Commercial & Residential Viability Sizing",
      "Zoning Regulations & Municipal Development Approvals",
      "20-Year Financial NPV/IRR Cash Flow Engineering",
      "Transit-Oriented Development (TOD) Master Frameworks",
    ],
    desc: "Empirical feasibility modeling and spatial master planning for commercial towers, gated communities, and metropolitan mixed-use complexes.",
    image: "/images/pakconsult/sector_real_estate.jpg",
    tag: "Urban Development",
    icon: Building2,
  },
  {
    name: "Agriculture & Agro-Industrial Cold Chain",
    category: "Industrial & SEZ",
    specs: [
      "Corporate Farming Feasibility & Land Suitability Audits",
      "Controlled Atmosphere Cold Storage & Logistics Hubs",
      "Export Value Chain Analysis & Yield Economics",
      "High-Efficiency Drip Irrigation Engineering",
    ],
    desc: "Empowering agricultural modernization, value-added agro-processing parks, and cold-chain logistics hubs to enhance export competitiveness and reduce post-harvest losses.",
    image: "/images/pakconsult/sector_agriculture.jpg",
    tag: "Agro-Industry",
    icon: Leaf,
  },
  {
    name: "Climate Resilience & Environmental Governance",
    category: "Water & Environment",
    specs: [
      "World Bank / IFC Compliant ESIA Studies",
      "Carbon Footprint Audits & Net-Zero Transition Plans",
      "Climate Risk Vulnerability & Adaptation Frameworks",
      "Provincial EPA Regulatory Clearances & Public Hearings",
    ],
    desc: "Rigorous environmental impact assessments, corporate ESG disclosures, and climate adaptation strategies to ensure infrastructure stands resilient against environmental shocks.",
    image: "/images/pakconsult/sector_environment.jpg",
    tag: "ESG & Climate",
    icon: Leaf,
  },
  {
    name: "Water Resources, Dams & Municipal Sanitation",
    category: "Water & Environment",
    specs: [
      "Basin-Scale Hydrological Modeling & Flood Risk Maps",
      "Wastewater Effluent Treatment Plant (ETP) Sizing",
      "Desalination & Municipal Drinking Water Distribution",
      "Water Tariff Structure & Cost-Recovery Modeling",
    ],
    desc: "Comprehensive engineering and financial modeling for water supply networks, industrial effluent treatment, flood protection dykes, and irrigation canal rehabilitation.",
    image: "/images/pakconsult/sector_water.jpg",
    tag: "Water & Sanitation",
    icon: Droplets,
  },
  {
    name: "Special Economic Zones & Industrial Clusters",
    category: "Industrial & SEZ",
    specs: [
      "100 to 1,000+ Acre Industrial Estate Master Feasibilities",
      "Board of Investment (BOI) SEZ Status Filings",
      "Captive Power & Industrial Steam Utility Networks",
      "Tenant Leasing & Tax-Holiday Financial Valuations",
    ],
    desc: "Turnkey techno-economic feasibility studies, infrastructure layouts, and regulatory approvals for Special Economic Zones (SEZs) and manufacturing clusters.",
    image: "/images/pakconsult/sector_industrial.jpg",
    tag: "SEZ & Industrial",
    icon: Factory,
  },
  {
    name: "Mining & Mineral Resources Extraction",
    category: "Industrial & SEZ",
    specs: [
      "Mineral Reserve Valuation & JORC-Standard Modeling",
      "Mine-to-Port Transport Corridor Feasibilities",
      "Environmental & Social Impact for Extractive Assets",
      "Provincial Mining Concession & Royalty Agreements",
    ],
    desc: "Advising sovereign agencies and institutional investors on copper, gold, coal, and limestone mining concessions, logistics infrastructure, and environmental safeguards.",
    image: "/images/pakconsult/sector_mining.jpg",
    tag: "Mining & Minerals",
    icon: Gem,
  },
  {
    name: "Public Sector Institutional Reform & PPPs",
    category: "Public Sector & PPPs",
    specs: [
      "Viability Gap Funding (VGF) & Risk Sharing Matrices",
      "PPRA-Compliant Tender Packaging & Bid Evaluations",
      "State-Owned Enterprise (SOE) Restructuring Blueprints",
      "Capacity Building & PMO Directorate Setups",
    ],
    desc: "Partnering with federal ministries and provincial development authorities to structure transparent public-private concessions and institutional governance frameworks.",
    image: "/images/pakconsult/sector_government.jpg",
    tag: "Sovereign PPPs",
    icon: Landmark,
  },
  {
    name: "Investment Banking & Infrastructure Funds",
    category: "Investment & Banking",
    specs: [
      "Bankable Information Memorandums (IM) for Syndicates",
      "Commercial & Technical Due Diligence for DFIs",
      "Debt Service Coverage (DSCR) Stress-Testing",
      "M&A Corporate Valuation & Fairness Opinions",
    ],
    desc: "Providing independent financial modeling, loan stress-testing, and transaction advisory for commercial banks, private equity sponsors, and international multilateral lenders.",
    image: "/images/pakconsult/sector_investment.jpg",
    tag: "Investment Banking",
    icon: Coins,
  },
];

export default function PakConsultSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = SECTORS_AND_SOLUTIONS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* ─── EDITORIAL HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative min-h-[400px] lg:h-[440px] flex items-center overflow-hidden bg-slate-900">
        <Image
          src="/images/pakconsult/about_hero.jpg"
          alt="Pakistan Consultancy Services Sectors & Solutions"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071727]/95 via-[#0A2540]/85 to-[#0A2540]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Sector-Specific Solutions</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Cross-Sector Advisory &amp; Engineered Solutions
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              Delivering bankable feasibility studies, PPP concession structuring, and PMO oversight across 10 vital sectors driving Pakistan&apos;s economic growth.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#0D7C85]" />
                <span>10 Strategic Sectors</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#C5A059]" />
                <span>PPRA &amp; FIDIC Standards</span>
              </span>
              <span>•</span>
              <span>Turnkey PMO Supervision</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEARCH & CATEGORY FILTER ──────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-8">
            {/* Live Search */}
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search sectors or solutions (e.g. Transport, Energy, SEZ, Mining)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
              />
            </div>

            {/* Counter */}
            <span className="text-xs font-semibold text-slate-500">
              Showing {filtered.length} of {SECTORS_AND_SOLUTIONS.length} Sector Solutions
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    active
                      ? "bg-[#0A2540] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 10 SECTORS & SOLUTIONS GRID ───────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Real Photography Header */}
                    <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#0A2540]/90 text-white backdrop-blur-xs">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0D7C85] flex items-center justify-center flex-shrink-0">
                          <Icon size={18} />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A059]">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="text-[17px] font-bold text-[#0A2540] mb-2.5 leading-snug">
                        {item.name}
                      </h3>

                      <p className="text-[13px] text-slate-600 leading-relaxed mb-5 font-normal">
                        {item.desc}
                      </p>

                      {/* Specs List */}
                      <div className="space-y-2 pt-4 border-t border-slate-100">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#0A2540]">
                          Advisory Deliverables &amp; Scope:
                        </p>
                        {item.specs.map((s) => (
                          <div key={s} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-[#0D7C85]" />
                            <span className="text-[12px] text-slate-600 leading-tight">{s}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/group-companies/pakistan-consultancy/contact"
                      className="w-full py-2.5 rounded-lg bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-[#0D7C85] text-xs font-bold text-[#0A2540] hover:text-[#0D7C85] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Request Sector Proposal</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-[#0A2540] to-[#0C1E2E] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
                Turnkey Feasibility &amp; Transaction Advisory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Need A Custom Sector Feasibility Study?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our senior partners structure bankable feasibility studies and transaction advisory packages customized to your industry regulatory frameworks and capital mandates.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#0D7C85] hover:bg-[#08545A] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone size={15} />
                <span>042-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PakConsultFooter />
    </main>
  );
}
