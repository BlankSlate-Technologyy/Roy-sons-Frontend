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
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Users2,
  Scale,
  Sparkles,
  Leaf,
  Droplets,
  HardHat,
  BarChart3,
  Building2,
  Compass,
} from "lucide-react";
import {
  theme,
  PakConsultNavbar,
  PakConsultFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/PakConsultShared";

const ALL_SERVICES = [
  {
    id: "strategy",
    title: "Strategic Advisory & Public Policy Development",
    subtitle: "Corporate Roadmaps, Organizational Restructuring & Policy Reform",
    desc: "Formulating actionable long-term corporate blueprints, restructuring institutional entities, eliminating operational bottlenecks, and advising sovereign ministries on economic governance.",
    image: "/images/pakconsult/service_strategy.jpg",
    tag: "Corporate Advisory",
    icon: Briefcase,
    deliverables: [
      "Corporate strategic growth roadmaps aligning commercial goals with macroeconomic market realities",
      "Business Process Re-Engineering (BPR) to eliminate administrative overhead and accelerate delivery",
      "Organizational design, grading structures, and balanced scorecard KPI frameworks",
      "Sovereign policy papers, statutory whitepapers, and regulatory impact analyses",
    ],
  },
  {
    id: "feasibility",
    title: "Techno-Economic Feasibility Studies",
    subtitle: "Bankable Financial Models, Geotechnical Sizing & PC-I Formulations",
    desc: "Developing bankable techno-economic feasibility studies, demand forecast regressions, financial NPV/IRR evaluations, and PC-I / PC-II documents compliant with Planning Commission guidelines.",
    image: "/images/pakconsult/service_feasibility.jpg",
    tag: "Bankable Feasibility",
    icon: FileSearch,
    deliverables: [
      "Rigorous 20-year dynamic financial models with sensitivity analysis and debt service coverage (DSCR)",
      "Comprehensive market demand sizing, competitor benchmarking, and pricing elasticity studies",
      "Technical engineering viability reviews and site geotechnical/infrastructure suitability",
      "Environmental Impact Assessment (EIA) and Initial Environmental Examination (IEE) filings",
    ],
  },
  {
    id: "pmo",
    title: "Project Management Office (PMO) Setup & Governance",
    subtitle: "Enterprise PMO Frameworks, Cost Telemetry & Quality Audits",
    desc: "Setting up institutional Project Management Offices (PMO) equipped with standardized operating procedures, earned value management (EVM), and real-time digital monitoring dashboards.",
    image: "/images/pakconsult/service_pmo.jpg",
    tag: "Enterprise PMO",
    icon: BarChart3,
    deliverables: [
      "Centralized PMO charters and standardized operating procedures (SOPs) for capital programs",
      "Digital executive dashboards with real-time earned value and capital expenditure telemetry",
      "On-site independent engineering oversight conducting contractor milestone verification",
      "Contract close-out, punch-list audit resolution, and post-completion performance reviews",
    ],
  },
  {
    id: "investment",
    title: "Investment Structuring & PPP Concessions",
    subtitle: "BOT Models, Viability Gap Funding & Sovereign Guarantees",
    desc: "Structuring bankable Public-Private Partnership (PPP) concessions, financial models, risk sharing mechanisms, and institutional capital syndication for sovereign and private clients.",
    image: "/images/pakconsult/service_investment.jpg",
    tag: "Transaction Advisory",
    icon: PiggyBank,
    deliverables: [
      "Build-Operate-Transfer (BOT) and DBFOM concession agreements for transport & municipal assets",
      "Viability Gap Funding (VGF) modeling and government sovereign guarantee structuring",
      "Bankable Information Memorandums (IM) for commercial banks and international DFIs",
      "Financial close coordination, tariff optimization, and debt-equity structuring",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Engineering Advisory",
    subtitle: "FIDIC Administration, Civil Master Planning & Independent Engineer",
    desc: "Providing end-to-end technical due diligence, infrastructure design validation, contractor pre-qualification, and independent engineer supervision for civil works across Pakistan.",
    image: "/images/pakconsult/service_infrastructure.jpg",
    tag: "Civil & Infrastructure",
    icon: HardHat,
    deliverables: [
      "Civil infrastructure master planning, highway alignments, and structural design reviews",
      "FIDIC Red, Yellow, and Silver Book contract drafting and dispute adjudication support",
      "Contractor pre-qualification scoring under federal and provincial PPRA statutes",
      "Independent engineer supervision and quality control certification on active job sites",
    ],
  },
  {
    id: "sustainability",
    title: "ESG, Environmental & Climate Resilience Advisory",
    subtitle: "ESIA Studies, Carbon Audits & Climate Risk Mitigation",
    desc: "Assisting enterprises and infrastructure projects in complying with international Environmental, Social & Governance (ESG) standards, carbon reduction targets, and climate resilience frameworks.",
    image: "/images/pakconsult/service_sustainability.jpg",
    tag: "ESG & Sustainability",
    icon: Leaf,
    deliverables: [
      "Environmental & Social Impact Assessments (ESIA) compliant with World Bank / IFC standards",
      "Corporate ESG disclosure frameworks and carbon footprint quantification audits",
      "Climate vulnerability assessments and resilient engineering adaptation strategies",
      "Green building and industrial eco-efficiency roadmaps",
    ],
  },
  {
    id: "environmental",
    title: "Water Resources & Hydrological Planning",
    subtitle: "Watershed Modeling, Irrigation Modernization & Effluent Treatment",
    desc: "Engineering sustainable hydrological solutions, flood mitigation schemes, agricultural irrigation overhauls, and industrial wastewater treatment plant feasibility studies.",
    image: "/images/pakconsult/service_environmental.jpg",
    tag: "Hydrology & Water",
    icon: Droplets,
    deliverables: [
      "Basin-wide hydrological modeling and flood inundation risk mapping",
      "High-efficiency irrigation design and groundwater sustainability frameworks",
      "Industrial effluent treatment plant (ETP) techno-economic sizing and regulatory permits",
      "Urban stormwater runoff management and rainwater harvesting master plans",
    ],
  },
  {
    id: "development",
    title: "Industrial Estates & Special Economic Zones (SEZ)",
    subtitle: "Cluster Competitiveness, Utility Demand & Regulatory Approvals",
    desc: "Master planning Special Economic Zones (SEZ), industrial clusters, and tech parks with utility master plans, investment attraction incentives, and statutory regulatory filings.",
    image: "/images/pakconsult/service_development_planning.jpg",
    tag: "SEZ Master Planning",
    icon: Building2,
    deliverables: [
      "SEZ master land-use planning and industrial cluster value chain analysis",
      "Power, gas, water, and logistics utility demand load calculations and supply strategies",
      "Regulatory filing with the Board of Investment (BOI) for SEZ status and duty exemptions",
      "Financial cash flow modeling and investor tenant leasing fee structures",
    ],
  },
];

const SERVICE_STATS = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "400+", label: "Delivered Studies", icon: FileSearch },
  { value: "45+", label: "Senior Partners", icon: Users2 },
  { value: "98%", label: "Delivery Success", icon: ShieldCheck },
];

export default function PakConsultServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const tags = ["all", "Corporate Advisory", "Bankable Feasibility", "Enterprise PMO", "Transaction Advisory", "Civil & Infrastructure", "ESG & Sustainability"];

  const filtered = ALL_SERVICES.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "all" || s.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* ─── EDITORIAL HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative min-h-[400px] lg:h-[440px] flex items-center overflow-hidden bg-slate-900">
        <Image
          src="/images/pakconsult/about_hero.jpg"
          alt="Pakistan Consultancy Services Practice Areas"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071727]/95 via-[#0A2540]/85 to-[#0A2540]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Advisory Practice Catalog</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Specialized Consulting Practices &amp; Governance
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              From empirical techno-economic feasibility studies and PPP concession structuring to FIDIC contract administration, environmental impact modeling, and turnkey PMO deployment across Pakistan.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#0D7C85]" />
                <span>8 Core Divisions</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#C5A059]" />
                <span>PPRA &amp; FIDIC Standards</span>
              </span>
              <span>•</span>
              <span>Bankable Financial DCF Models</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── METRICS STRIP ─────────────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 text-center flex flex-col items-center justify-center shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 bg-teal-50 text-[#0D7C85]">
                    <Icon size={20} />
                  </div>
                  <div className="text-[#0A2540] mb-1">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11.5px] font-semibold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SEARCH & FILTER CONTROLS ──────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search practice areas or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors cursor-pointer ${
                    selectedTag === tag
                      ? "bg-[#0A2540] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8 PRACTICE AREAS GRID ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Real Image Header */}
                    <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#0A2540]/90 text-white backdrop-blur-xs">
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#0D7C85] flex items-center justify-center flex-shrink-0">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-[#0A2540] leading-snug">
                          {svc.title}
                        </h3>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#C5A059]">
                        {svc.subtitle}
                      </p>

                      <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                        {svc.desc}
                      </p>

                      {/* Deliverables List */}
                      <div className="space-y-2.5 pt-5 border-t border-slate-100">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#0A2540]">
                          Key Consulting Deliverables:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2.5">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#0D7C85]" />
                            <span className="text-xs text-slate-600 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/pakistan-consultancy/contact"
                      className="w-full py-2.5 rounded-lg bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-[#0D7C85] text-xs font-bold text-[#0A2540] hover:text-[#0D7C85] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Inquire About This Practice Area</span>
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
                Strategic Advisory Engagement
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Structuring A Development Program Or Feasibility?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our senior partners to review your Terms of Reference, financial modeling specifications, and statutory procurement roadmaps.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#0D7C85] hover:bg-[#08545A] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Request Proposal / ToR
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
