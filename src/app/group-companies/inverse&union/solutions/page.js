"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Ship,
  Truck,
  FileText,
  Search,
  PackageCheck,
  ClipboardList,
  Building2,
  Factory,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  theme,
  InverseUnionNavbar,
  InverseUnionFooter,
  SectionLabel,
  SectionHeading,
} from "../components/InverseUnionShared";

const CATEGORIES = [
  "All",
  "Construction & Infrastructure",
  "Manufacturing & Heavy Plants",
  "Oil, Gas & Petrochemicals",
  "Agriculture & Commodities",
  "Energy & Power",
  "Consumer Goods & FMCG",
];

const TRADE_SECTORS_SOLUTIONS = [
  {
    name: "Heavy Construction & Infrastructure Procurement Suite",
    category: "Construction & Infrastructure",
    specs: ["Equipment: Hydraulic Excavators, Mobile Batching Plants & Tower Cranes", "Materials: High-Tensile ASTM A615 Grade 60 Rebar & Pre-Stressing Tendons", "Logistics: Direct Flat-Rack & Breakbulk Vessel Charters to Karachi/Gwadar"],
    desc: "Direct procurement of mega-infrastructure equipment, structural steel, and raw construction materials for government and CPEC highway projects.",
    image: "/inverseunion_hero_trade.svg",
    tag: "Infrastructure Trade",
  },
  {
    name: "Industrial Machinery & Turnkey Production Line Sourcing",
    category: "Manufacturing & Heavy Plants",
    specs: ["Scope: Automated Textile Spindles, Plastic Extrusion & CNC Milling", "Standards: CE Marked & ISO 9001 Certified European / East Asian Machinery", "Terms: Complete FOB/CIF Invoicing with Pre-Commissioning Video Trials"],
    desc: "Complete turnkey manufacturing plant sourcing and containerized shipment for textile, packaging, automotive, and food processing factories.",
    image: "/inverseunion_hero_trade.svg",
    tag: "Industrial Plants",
  },
  {
    name: "Bulk Agricultural Commodities & Food Trading Suite",
    category: "Agriculture & Commodities",
    specs: ["Commodities: Milling Wheat, Non-GMO Soybeans, Edible Palm Oils & Sugar", "Assay: Strict SGS Pre-Loading Moisture, Protein & Aflatoxin Inspection", "Packaging: Bulk Vessel Charters & 50kg PP Woven Export Sacks"],
    desc: "High-volume international trading of essential agricultural crops and food grains from major global producer nations with full phytosanitary clearance.",
    image: "/inverseunion_hero_trade.svg",
    tag: "Agri-Commodities",
  },
  {
    name: "Petrochemical & Oilfield Equipment Sourcing",
    category: "Oil, Gas & Petrochemicals",
    specs: ["Standards: API 5L Seamless Pipe Casings, Ball Valves & Class 1500 Flanges", "Testing: Hydrostatic Pressure & Ultrasonic Non-Destructive Testing (NDT)", "Compliance: Strict NACE MR0175 Sour Service Metallurgy Verification"],
    desc: "Supplying certified piping, valves, actuators, and refinery process equipment for upstream oil & gas extraction and downstream chemical processing.",
    image: "/inverseunion_hero_trade.svg",
    tag: "Petrochemical Supply",
  },
  {
    name: "Solar PV Modules & Clean Energy Equipment Imports",
    category: "Energy & Power",
    specs: ["Modules: Tier-1 BloombergNEF Monocrystalline N-Type TOPCon Solar Panels", "Inverters: Utility-Scale High-Efficiency String & Centralized Inverters", "Warranty: 25-Year Linear Power Output & 12-Year Workmanship Warranties"],
    desc: "High-volume import of Tier-1 solar modules, battery energy storage systems (BESS), and grid substations for commercial and utility power plants.",
    image: "/inverseunion_hero_trade.svg",
    tag: "Clean Energy Sourcing",
  },
  {
    name: "Fast-Moving Consumer Goods (FMCG) Distribution",
    category: "Consumer Goods & FMCG",
    specs: ["Portfolio: Packaged Foods, Personal Care, Household Electronics & Sundries", "Logistics: Temperature-Controlled 40ft High-Cube Reefeer Containers", "Customs: Pre-Cleared Halal & Conformity Assessment (COC) Certifications"],
    desc: "Global brand import and distribution services connecting international FMCG brands with national supermarket chains and wholesale distributors.",
    image: "/inverseunion_hero_trade.svg",
    tag: "FMCG Distribution",
  },
];

export default function InverseUnionSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = TRADE_SECTORS_SOLUTIONS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#4A5568] font-sans antialiased overflow-x-hidden">
      <InverseUnionNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Global Trade Sectors &amp; Solutions</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Procurement Packages &amp; <span style={{ color: theme.blue }}>Trade Solutions</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Supplying industrial manufacturing machinery, heavy construction equipment, bulk agricultural commodities, petrochemical valves, solar PV modules, and FMCG consumer goods across 40+ countries.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search trade solutions (e.g. Infrastructure, Machinery, Commodities, Petrochemical, Solar)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-sky-50/40" style={{ borderColor: theme.border }}>
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
                      ? "bg-[#0080FF] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#0080FF]"
                  }`}
                  style={{ borderColor: active ? theme.blue : theme.border }}
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
            {filtered.map((sol) => (
              <div
                key={sol.name}
                className="iu-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={sol.image}
                      alt={sol.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0B2545]" style={{ borderColor: theme.border }}>
                        {sol.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-3" style={{ color: theme.navyDark }}>
                      {sol.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {sol.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Procurement Parameters &amp; Incoterms:
                      </p>
                      {sol.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#00D2C8]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/inverse&union/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-sky-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request Quotation &amp; Sourcing Term Sheet</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0080FF]">
                CORPORATE IMPORTERS &amp; INDUSTRIAL BUYERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Direct Sourcing With Full Letter of Credit (LC) Support
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We handle verified supplier contract negotiations, SGS quality inspections, customs duty clearance, and delivery directly to your warehouse.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/inverse&union/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Trade Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                style={{ borderColor: theme.blue, color: theme.blue }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <InverseUnionFooter />
    </main>
  );
}
