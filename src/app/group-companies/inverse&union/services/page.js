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
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Users2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  InverseUnionNavbar,
  InverseUnionFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/InverseUnionShared";

const TRADE_SERVICES = [
  {
    id: "global-sourcing",
    title: "Global Sourcing & Direct Procurement",
    subtitle: "Supplier Vetting, Factory Audits & Factory-Gate Pricing",
    desc: "Identifying, vetting, and negotiating directly with certified international manufacturers and Tier-1 suppliers across 40+ countries to source quality goods at optimal cost.",
    image: "/inverseunion_hero_trade.svg",
    tag: "Global Sourcing",
    icon: Globe,
    deliverables: [
      "Rigorous on-site factory verification audits for technical and financial capacity",
      "Direct OEM contract negotiations eliminating intermediaries and inflated markups",
      "Pre-shipment quality inspection and third-party laboratory material certification",
      "Consolidated multi-vendor procurement catalogs tailored for corporate buyers",
    ],
  },
  {
    id: "import-export",
    title: "Import & Export Trade Management",
    subtitle: "Letters of Credit (LC), Commercial Invoicing & Export Documentation",
    desc: "Comprehensive cross-border trade administration managing documentary letters of credit, certificates of origin, phytosanitary permits, and commercial shipping contracts.",
    image: "/inverseunion_hero_trade.svg",
    tag: "Import / Export",
    icon: FileText,
    deliverables: [
      "Structuring secure documentary Letters of Credit (LC), CAD, and escrow terms",
      "Full export documentation: Bills of Lading, Packing Lists, Certificates of Origin",
      "International trade agreement compliance under CPEC, CPFTA, and GSP+ frameworks",
      "Export container stuffing, fumigation certificates, and marine cargo surveys",
    ],
  },
  {
    id: "freight-logistics",
    title: "Multi-Modal Freight Logistics",
    subtitle: "Ocean FCL/LCL, Air Cargo Charters & Bonded Road Fleets",
    desc: "Seamless freight forwarding coordination across ocean container vessels, chartered air cargo flights, and temperature-controlled bonded road transport networks.",
    image: "/inverseunion_hero_trade.svg",
    tag: "Freight Forwarding",
    icon: Ship,
    deliverables: [
      "Full Container Load (FCL) and Less than Container Load (LCL) ocean bookings",
      "Time-critical international air freight forwarding and specialized charter flights",
      "Continuous satellite GPS container tracking with temperature and shock telemetry",
      "Demurrage-free port dispatch coordination at Karachi, Qasim, and Gwadar ports",
    ],
  },
  {
    id: "trade-compliance",
    title: "Trade Compliance & Customs Clearance",
    subtitle: "Harmonized System (HS) Codes, Tariff Optimization & WebOC Filing",
    desc: "Rapid customs clearance at all major air, sea, and dry ports in Pakistan utilizing automated WebOC electronic filing and precision tariff classification.",
    image: "/inverseunion_hero_trade.svg",
    tag: "Customs Clearance",
    icon: ShieldCheck,
    deliverables: [
      "Expert Harmonized System (HS) code classification minimizing duties and sales tax",
      "Electronic WebOC filing with Pakistan Customs guaranteeing 24-hour green-channel clearing",
      "Management of regulatory permits: SBP, PSW, EPA, and Plant Protection Department",
      "Bonded customs warehouse storage and duty-suspension transit forwarding",
    ],
  },
  {
    id: "commodity-sourcing",
    title: "Bulk Commodity Sourcing",
    subtitle: "Industrial Raw Materials, Agri-Grains, Steel & Energy",
    desc: "Large-volume procurement and trading of bulk commodities including construction rebar, industrial chemicals, mineral ores, wheat, rice, and energy equipment.",
    image: "/inverseunion_hero_trade.svg",
    tag: "Commodity Trading",
    icon: Search,
    deliverables: [
      "Bulk vessel chartering and discharge for grain, coal, and liquid chemical cargoes",
      "Strict moisture, grade, and chemical assay inspection by SGS and Bureau Veritas",
      "Forward hedging and index-linked price contracts protecting against volatility",
      "Direct farm-gate and mine-mouth procurement partnerships worldwide",
    ],
  },
  {
    id: "risk-management",
    title: "Supply Chain Risk Management & Finance",
    subtitle: "FX Hedging, Marine Insurance & Geopolitical Trade Resilience",
    desc: "Proactive risk assessment identifying geopolitical, currency, and logistical vulnerabilities, backed by comprehensive marine cargo insurance and trade finance structuring.",
    image: "/inverseunion_hero_trade.svg",
    tag: "Trade Risk Mitigation",
    icon: PackageCheck,
    deliverables: [
      "Comprehensive Institute Cargo Clauses (A) all-risk marine insurance coverage",
      "Foreign exchange (FX) risk hedging against currency devaluation volatility",
      "Contingency multi-port routing and alternative supplier redundancy networks",
      "Structured trade finance and deferred payment facilitation for prime buyers",
    ],
  },
];

const SERVICE_STATS = [
  { value: "40+", label: "Countries Served", icon: Globe },
  { value: "5000+", label: "Trade Deals Executed", icon: PackageCheck },
  { value: "800+", label: "Corporate Partners", icon: ClipboardList },
  { value: "99%", label: "Compliance Rate", icon: ShieldCheck },
];

export default function InverseUnionServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = TRADE_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#4A5568] font-sans antialiased overflow-x-hidden">
      <InverseUnionNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>International Trade &amp; Procurement Divisions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Global Sourcing &amp; <span style={{ color: theme.blue }}>Trade Management Capabilities</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From verified international factory sourcing and multi-modal ocean freight to customs tariff optimization, bulk commodity trading, and supply chain risk mitigation, Inverse &amp; Union Trading delivers global trade excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.blue }}
                >
                  <span>Explore All 6 Divisions</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/inverse&union/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Request Trade Quotation</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-sky-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/inverseunion_hero_trade.svg"
                  alt="Inverse & Union Trading Sourcing Divisions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.blue }}>
                      Global Logistics Network
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      Ocean Freight · Air Cargo · Customs WebOC
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
                  className="iu-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.blue}10` }}>
                    <Icon size={22} style={{ color: theme.blue }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navyDark }}>
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
            <SectionHeading center className="mb-4">Specialized International Trade Divisions</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Operating in full compliance with Incoterms 2020, WTO regulations, and Pakistan Single Window (PSW) electronic standards.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search divisions (e.g. Sourcing, Import/Export, Freight, Customs, Commodities, Risk)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] transition-all bg-white shadow-xs"
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
                  className="iu-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0B2545]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.blue}10` }}>
                          <Icon size={20} style={{ color: theme.blue }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.navyDark }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#0080FF]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                          Division Specifications &amp; Standards:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#00D2C8]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0080FF]">
                CROSS-BORDER PROCUREMENT &amp; COMMODITY TRADE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Initiate Your Global Trade Contract Today
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our senior international procurement officers to review supplier due diligence, shipping vessel space, and customs tariff optimization.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/inverse&union/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Trade Scoping</span>
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
