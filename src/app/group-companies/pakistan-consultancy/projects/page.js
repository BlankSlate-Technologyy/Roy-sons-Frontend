"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
  FileSearch,
  Building2,
  HardHat,
  Zap,
  Leaf,
  Droplets,
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
  "Transport & Infrastructure",
  "Clean Energy",
  "Industrial & SEZ",
  "Urban & Commercial",
  "Water & Hydrology",
];

const FLAGSHIP_PROJECTS = [
  {
    name: "National Expressway Network BOT Concession",
    category: "Transport & Infrastructure",
    location: "Punjab – Sindh Inter-Provincial Corridor",
    status: "Financial Close – 120km BOT Expressway",
    desc: "Transaction advisory services structuring Build-Operate-Transfer (BOT) concession agreements, Viability Gap Funding (VGF) modeling, and international investor bidding.",
    specs: [
      "Scope: 120km 4-Lane Access-Controlled Expressway",
      "Model: 25-Year BOT Concession with Revenue-Sharing",
      "Governance: FIDIC Silver Book EPC Administration",
      "Financing: Commercial Bank Debt & Sovereign Equity",
    ],
    image: "/images/pakconsult/project_transport.jpg",
    tag: "Transport PPP",
  },
  {
    name: "Metropolitan Commercial Center & Mixed-Use Complex",
    category: "Urban & Commercial",
    location: "Gulberg Commercial Zone, Lahore",
    status: "Completed – $65M Landmark Development",
    desc: "Delivered comprehensive techno-economic feasibility, structural engineering validation, zoning approvals, and 20-year financial cash flow modeling for luxury commercial tower.",
    specs: [
      "Scale: 32-Story Mixed-Use Retail & Corporate Hub",
      "Economics: 22.4% Projected Internal Rate of Return (IRR)",
      "Approvals: LDA High-Rise Building Regulation Clearances",
      "PMO: Independent Engineer Quality & Safety Oversight",
    ],
    image: "/images/pakconsult/project_commercial.jpg",
    tag: "Commercial Real Estate",
  },
  {
    name: "300MW Grid-Scale Renewable Solar PV Park",
    category: "Clean Energy",
    location: "Quaid-e-Azam Solar Park Corridor, Bahawalpur",
    status: "Tariff Approved – NEPRA Bidding Package",
    desc: "Financial modeling and tariff petition preparation for 300MW utility-scale solar PV development, including Power Purchase Agreement (PPA) drafting and investor roadshow.",
    specs: [
      "Capacity: 300MW Grid-Connected Monocrystalline Array",
      "Regulatory: NEPRA Competitive Bidding Tariff Filing",
      "Transaction: International Competitive Bidding (ICB) RFP",
      "Impact: 420,000 Tons Annual CO2 Emission Reduction",
    ],
    image: "/images/pakconsult/project_solar.jpg",
    tag: "Renewable Energy",
  },
  {
    name: "National Agro-Industrial Cold Chain & Logistics Hub",
    category: "Industrial & SEZ",
    location: "Multan Agro-Export Corridor",
    status: "Commissioned – 50,000 Ton Modern Storage",
    desc: "Techno-economic feasibility, cold chain supply logistics modeling, and PC-I formulation for a state-of-the-art agricultural preservation and export processing center.",
    specs: [
      "Capacity: 50,000 Ton Controlled Atmosphere Cold Storage",
      "Logistics: Reefer Fleet Routing & Intermodal Connectivity",
      "Sponsor: Provincial Agricultural Marketing Department",
      "Impact: 35% Reduction in Mango & Citrus Post-Harvest Loss",
    ],
    image: "/images/pakconsult/project_agro.jpg",
    tag: "Agro-Logistics",
  },
  {
    name: "Greater Basin Hydrological Risk & Flood Defense Scheme",
    category: "Water & Hydrology",
    location: "Indus River Basin, Southern Punjab",
    status: "Adopted – World Bank Benchmarked Master Plan",
    desc: "Hydrological watershed modeling, GIS satellite flood inundation mapping, and engineering design for climate-resilient flood protection dykes and drainage canals.",
    specs: [
      "Coverage: 4,500 sq km River Basin Hydrology Study",
      "Modeling: 100-Year Return Period Flood Inundation Models",
      "Standards: World Bank Environmental & Social Framework",
      "Asset: 145km Reinforced Embankment & Spillway Upgrades",
    ],
    image: "/images/pakconsult/project_hydrology.jpg",
    tag: "Hydrology & Water",
  },
  {
    name: "150MW Coastal Wind Power IPP Transaction",
    category: "Clean Energy",
    location: "Jhimpir Wind Corridor, Sindh",
    status: "Operational – DFI Co-Financed Asset",
    desc: "Lenders' technical advisor and economic feasibility consultant for 150MW wind power project, performing wind resource assessments and debt service stress-testing.",
    specs: [
      "Capacity: 150MW Wind Turbine Generator Farm",
      "Wind Modeling: 3-Year Meteorological Mast Empirical Data",
      "Financing: Multilateral DFI & Local Commercial Debt",
      "Grid: 132kV Interconnection Transmission Feasibility",
    ],
    image: "/images/pakconsult/project_wind.jpg",
    tag: "Wind Energy IPP",
  },
  {
    name: "Metropolitan Transit-Oriented Development & Bus Rapid Transit",
    category: "Transport & Infrastructure",
    location: "Faisalabad Urban Transport Authority",
    status: "Feasibility Completed – PC-I Approved",
    desc: "Complete traffic demand forecasting, ridership modeling, environmental impact assessment, and financial viability analysis for 28km dedicated urban mass transit corridor.",
    specs: [
      "Corridor: 28km Dedicated Bus Rapid Transit (BRT) Line",
      "Demand: 180,000 Projected Daily Passenger Trips",
      "Sovereign: Planning Commission PC-I Documentation",
      "PPP Model: Fleet Procurement & Fare Collection Concession",
    ],
    image: "/images/pakconsult/project_urban.jpg",
    tag: "Urban Transit",
  },
  {
    name: "Special Economic Zone (SEZ) Turnkey Master Plan",
    category: "Industrial & SEZ",
    location: "M-3 Industrial Corridor, Punjab",
    status: "BOI Approved – 300-Acre Zone Under Execution",
    desc: "Delivered complete techno-economic master planning, spatial zoning, captive utility networks, and 20-year financial cash flow modeling approved by Board of Investment (BOI).",
    specs: [
      "Scope: 300-Acre Industrial Master Plan & Feasibility",
      "Financials: 20-Year Financial IRR / NPV Sensitivity Models",
      "Regulatory: Board of Investment Special Economic Zone NOC",
      "Infrastructure: 132kV Substation, Water Treatment & Gas Line",
    ],
    image: "/images/pakconsult/project_sez.jpg",
    tag: "SEZ Master Plan",
  },
  {
    name: "Tertiary Healthcare & Medical City Feasibility",
    category: "Urban & Commercial",
    location: "Islamabad Capital Territory",
    status: "Completed – 500-Bed Super Specialty Complex",
    desc: "Healthcare economics, medical equipment procurement packaging, architectural functional planning, and public health impact assessment for 500-bed hospital complex.",
    specs: [
      "Capacity: 500-Bed Tertiary Teaching Hospital",
      "Procurement: PPRA-Compliant Medical Equipment Packages",
      "Economics: 15-Year Financial Sustainability Modeling",
      "Governance: Ministry of National Health Services Advisory",
    ],
    image: "/images/pakconsult/project_hospital.jpg",
    tag: "Healthcare Infrastructure",
  },
];

export default function PakConsultProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = FLAGSHIP_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* ─── EDITORIAL HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative min-h-[400px] lg:h-[440px] flex items-center overflow-hidden bg-slate-900">
        <Image
          src="/images/pakconsult/about_hero.jpg"
          alt="Pakistan Consultancy Services Flagship Projects"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071727]/95 via-[#0A2540]/85 to-[#0A2540]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Proven Track Record</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Flagship Engagements &amp; Project Portfolio
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              Explore our landmark consulting engagements across special economic zones, public-private partnership highways, renewable energy IPPs, and large-scale urban infrastructure.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#0D7C85]" />
                <span>400+ Delivered Studies</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#C5A059]" />
                <span>FIDIC &amp; PPRA Compliant</span>
              </span>
              <span>•</span>
              <span>$2.5B+ Program Value Advised</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEARCH & FILTER CONTROLS ──────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-8">
            {/* Live Search */}
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search projects by title, sector, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
              />
            </div>

            {/* Counter */}
            <span className="text-xs font-semibold text-slate-500">
              Showing {filtered.length} of {FLAGSHIP_PROJECTS.length} Landmark Projects
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

      {/* ─── 9 FLAGSHIP PROJECTS GRID ──────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.name}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Real Project Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#0A2540]/90 text-white backdrop-blur-xs">
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-[17px] font-bold text-[#0A2540] mb-2 leading-snug">
                      {proj.name}
                    </h3>

                    <div className="flex items-start gap-1.5 text-xs text-slate-500 mb-3">
                      <MapPin size={14} className="text-[#0D7C85] flex-shrink-0 mt-0.5" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[10.5px] font-bold uppercase px-2.5 py-1 rounded bg-teal-50 text-[#08545A] border border-teal-100 inline-block">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-[13px] text-slate-600 leading-relaxed mb-5 font-normal">
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#0A2540]">
                        Project Specifications &amp; Mandate:
                      </p>
                      {proj.specs.map((s) => (
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
                    <span>Request Case Study Briefing</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-[#0A2540] to-[#0C1E2E] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
                Proven Infrastructure Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Structuring Your Next Capital Program?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our senior partners to discuss project scoping, bankable financial modeling, and FIDIC-compliant execution oversight.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#0D7C85] hover:bg-[#08545A] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Inquire With Senior Partners
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
