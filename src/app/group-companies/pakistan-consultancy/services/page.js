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
} from "lucide-react";
import {
  theme,
  PakConsultNavbar,
  PakConsultFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/PakConsultShared";

const CONSULTING_SERVICES = [
  {
    id: "project-consultancy",
    title: "Project Consultancy & Governance",
    subtitle: "End-to-End Planning, Risk Registers & Stakeholder Governance",
    desc: "Structuring comprehensive project execution plans, governance frameworks, risk registers, and milestone tracking dashboards for mega-development programs.",
    image: "/pakconsult_hero_strategy.svg",
    tag: "Project Governance",
    icon: Briefcase,
    deliverables: [
      "Integrated project master scheduling and critical path dependency mapping",
      "Enterprise risk management (ERM) matrices and quantitative risk scoring",
      "Executive steering committee reporting and multi-stakeholder consensus management",
      "Independent technical audits and statutory compliance verification",
    ],
  },
  {
    id: "feasibility-studies",
    title: "Techno-Economic Feasibility Studies",
    subtitle: "Bankable Financial Models, Market Surveys & Technical Sizing",
    desc: "Developing bankable techno-economic feasibility studies, demand forecast models, financial NPV/IRR evaluations, and environmental impact assessments (EIA).",
    image: "/pakconsult_hero_strategy.svg",
    tag: "Feasibility Studies",
    icon: FileSearch,
    deliverables: [
      "Rigorous 20-year dynamic financial models with sensitivity analysis and debt service coverage (DSCR)",
      "Comprehensive market demand sizing, competitor benchmarking, and pricing elasticity studies",
      "Technical engineering viability reviews and site geotechnical/infrastructure suitability",
      "Environmental Impact Assessment (EIA) and Initial Environmental Examination (IEE) filings",
    ],
  },
  {
    id: "business-strategy",
    title: "Business Strategy & Organizational Restructuring",
    subtitle: "Corporate Blueprints, Process Re-Engineering & KPI Cascades",
    desc: "Formulating actionable long-term corporate growth strategies, reorganizing departmental structures, eliminating operational bottlenecks, and cascading performance KPIs.",
    image: "/pakconsult_hero_strategy.svg",
    tag: "Strategic Planning",
    icon: TrendingUp,
    deliverables: [
      "Corporate strategic roadmap development aligning commercial goals with market realities",
      "Business Process Re-Engineering (BPR) to eliminate administrative overhead and reduce cycle times",
      "Organizational design, grading structures, and balanced scorecard KPI frameworks",
      "M&A strategic screening, commercial due diligence, and post-merger integration planning",
    ],
  },
  {
    id: "procurement-contracts",
    title: "Procurement, FIDIC Contracts & PPRA Advisory",
    subtitle: "Tender Management, Bid Evaluations & Contract Administration",
    desc: "Drafting transparent procurement packages, Request for Proposals (RFP), contractor pre-qualification criteria, and FIDIC contract administration.",
    image: "/pakconsult_hero_strategy.svg",
    tag: "Procurement Advisory",
    icon: Handshake,
    deliverables: [
      "Drafting Request for Qualification (RFQ) and Request for Proposal (RFP) documentation",
      "Standardized bidding documents adhering to PPRA rules and international MDB guidelines",
      "Objective technical and financial bid evaluation scoring matrices and award reports",
      "Contract negotiation and dispute avoidance under FIDIC Red, Yellow, and Silver Books",
    ],
  },
  {
    id: "investment-advisory",
    title: "Investment & PPP Transaction Structuring",
    subtitle: "Concession Models, Viability Gap Funding & Debt Syndication",
    desc: "Structuring bankable Public-Private Partnership (PPP) concessions, financial models, risk sharing mechanisms, and institutional capital syndication.",
    image: "/pakconsult_hero_strategy.svg",
    tag: "Transaction Advisory",
    icon: PiggyBank,
    deliverables: [
      "Designing Build-Operate-Transfer (BOT) and DBFOM concession agreements for infrastructure",
      "Viability Gap Funding (VGF) modeling and government sovereign guarantee structuring",
      "Preparation of bankable Information Memorandums (IM) for commercial banks and DFIs",
      "Financial close assistance, tariff optimization, and debt-equity structuring",
    ],
  },
  {
    id: "pmo-setup",
    title: "Project Management Office (PMO) Setup",
    subtitle: "Enterprise PMO Frameworks, Cost Telemetry & Quality Audits",
    desc: "Setting up institutional Project Management Offices (PMO) equipped with standardized operating procedures, earned value management, and digital monitoring dashboards.",
    image: "/pakconsult_hero_strategy.svg",
    tag: "Enterprise PMO",
    icon: Settings,
    deliverables: [
      "Establishing centralized PMO charters, standardized project management operating procedures (SOPs)",
      "Deploying digital PMO software dashboards with real-time earned value and budget telemetry",
      "On-site project monitoring teams conducting independent contractor performance verification",
      "Contract close-out, punch-list resolution, and project post-completion evaluation reports",
    ],
  },
];

const SERVICE_STATS = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "400+", label: "Studies Completed", icon: FileSearch },
  { value: "45+", label: "Senior Partners", icon: Users2 },
  { value: "98%", label: "Delivery Success", icon: ShieldCheck },
];

export default function PakConsultServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = CONSULTING_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#48525D] font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Strategic Advisory &amp; Technical Feasibility</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slateDark }}>
                Comprehensive Consulting Solutions For <span style={{ color: theme.slate }}>Public &amp; Private Sectors</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From bankable techno-economic feasibility studies and public-private partnership (PPP) transaction structuring to procurement governance, enterprise PMO setup, and corporate strategy, Pakistani Consultancy Services delivers uncompromised advisory excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.slate }}
                >
                  <span>Explore All 6 Divisions</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/pakistan-consultancy/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.slateDark }}
                >
                  <span>Consult Senior Partner</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/pakconsult_hero_strategy.svg"
                  alt="Pakistani Consultancy Services Advisory Capabilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E242B]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.goldHover }}>
                      Strategic Advisory Practice
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.slateDark }}>
                      Feasibility · PPP Transactions · PMO Governance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="pakconsult-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.slate}10` }}>
                    <Icon size={22} style={{ color: theme.slate }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.slateDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Our Core Divisions</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Advisory &amp; Governance Capabilities</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered in accordance with FIDIC international contract guidelines, PPRA procurement rules, and bankable financial models.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search advisory capabilities (e.g. Feasibility, PPP, Procurement, PMO, Strategy)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3A444E] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="pakconsult-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#3A444E]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.slate}10` }}>
                          <Icon size={20} style={{ color: theme.slate }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.slateDark }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#A6823B]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(214, 220, 226, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.slateDark }}>
                          Key Consulting Deliverables:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#C5A059]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
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
                      <span>Inquire About This Division</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A6823B]">
                STRATEGIC FEASIBILITY &amp; TRANSACTION ADVISORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.slateDark }}>
                Structuring A Development Program Or Feasibility Study?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our senior advisory partners to review Terms of Reference, financial models, and regulatory compliance roadmaps.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.slate }}
              >
                <span>Request Strategic Proposal</span>
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
