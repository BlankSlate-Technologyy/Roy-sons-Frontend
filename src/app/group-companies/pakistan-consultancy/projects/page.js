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
];

const SIGNATURE_PROJECTS = [
  {
    name: "National Special Economic Zone (SEZ) Master Feasibility",
    category: "Industrial Feasibility",
    location: "M-3 Industrial Corridor, Punjab",
    status: "Completed – BOI Approved 300-Acre Zone",
    desc: "Delivered complete techno-economic master planning, demand forecasting, utility network sizing, and 20-year financial cash flow modeling approved by Board of Investment (BOI).",
    specs: ["Scope: 300-Acre Industrial Master Plan & Feasibility", "Financials: 20-Year Financial IRR / NPV Sensitivity Models", "Regulatory: Board of Investment Special Economic Zone NOC"],
    image: "/pakconsult_hero_strategy.svg",
    tag: "SEZ Master Feasibility",
  },
  {
    name: "Provincial Highway Network Public-Private Partnership (PPP)",
    category: "Government & PPPs",
    location: "Provincial Highway Authority, Lahore & Multan",
    status: "Concession Closed – 120km BOT Expressway",
    desc: "Transaction advisory services structuring Build-Operate-Transfer (BOT) concession agreements, Viability Gap Funding (VGF) modeling, and international investor bidding.",
    specs: ["Length: 120 km 4-Lane Expressway PPP Concession", "Financing: Public-Private Debt & Equity Syndication", "Documentation: Concession Agreement & Toll Revenue Model"],
    image: "/pakconsult_hero_strategy.svg",
    tag: "PPP Concession Advisory",
  },
  {
    name: "Mega Steel & Heavy Industrial Manufacturing Complex Feasibility",
    category: "Industrial Feasibility",
    location: "Port Qasim Industrial Area, Karachi",
    status: "Bankable Report – $180M Capital Project",
    desc: "Comprehensive market feasibility, raw material supply chain risk analysis, Capex/Opex modeling, and debt financing memorandum for high-grade steel rebar plant.",
    specs: ["Project Scale: $180 Million Greenfield Industrial Plant", "Analysis: Market Demand Sizing & Scrap Metal Sourcing", "Deliverable: Bankable Information Memorandum (IM)"],
    image: "/pakconsult_hero_strategy.svg",
    tag: "Industrial Feasibility",
  },
  {
    name: "Public Sector Development Fund Procurement Framework Reform",
    category: "Government & PPPs",
    location: "Federal Government Ministry, Islamabad",
    status: "Implemented – PPRA Standardized Suite",
    desc: "Reformed procurement frameworks for multi-billion rupee development programs by designing standardized RFP templates, objective bid evaluation scoring, and audit guidelines.",
    specs: ["Scope: Federal Public Procurement Process Restructuring", "Compliance: PPRA Rules & Multilateral DFI Guidelines", "Training: Capacity Building for 120+ Public Procurement Officers"],
    image: "/pakconsult_hero_strategy.svg",
    tag: "Procurement Reform",
  },
  {
    name: "National Commercial Bank Corporate Restructuring & Strategy",
    category: "Banking & Finance",
    location: "Commercial Banking Group, Karachi",
    status: "Executed – 3-Year Strategic Transformation",
    desc: "Formulated corporate restructuring blueprint, loan portfolio stress-testing, branch network cost rationalization, and digital mobile banking expansion strategy.",
    specs: ["Scale: 400+ Branch Banking Network Restructuring", "Impact: 14% Operating Cost Reduction Achieved", "Roadmap: 3-Year Digital Banking & FinTech Transformation"],
    image: "/pakconsult_hero_strategy.svg",
    tag: "Corporate Restructuring",
  },
  {
    name: "Federal 300MW Renewable Solar PV Park Tariff & Transaction",
    category: "Energy & Utilities",
    location: "Renewable Energy Authority, Punjab",
    status: "Tariff Approved – NEPRA Bidding Package",
    desc: "Financial modeling and tariff petition preparation for 300MW utility-scale solar PV development, including Power Purchase Agreement (PPA) drafting and investor roadshow.",
    specs: ["Capacity: 300MW Grid-Connected Solar PV Park", "Regulatory: NEPRA Competitive Bidding Tariff Filing", "Transaction: International Competitive Bidding (ICB) RFP"],
    image: "/pakconsult_hero_strategy.svg",
    tag: "Energy Transaction Advisory",
  },
];

export default function PakConsultProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = SIGNATURE_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#48525D] font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Strategic Advisory Engagements</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slateDark }}>
              Signature Advisory &amp; <span style={{ color: theme.slate }}>Transaction Case Studies</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark consulting deployments across special economic zones, public-private partnership highway concessions, industrial feasibilities, and banking restructurings across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search case studies by name, sector, or location..."
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

      {/* Category Filter Pills */}
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

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.name}
                className="pakconsult-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#3A444E]" style={{ borderColor: theme.border }}>
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black" style={{ color: theme.slateDark }}>
                        {proj.name}
                      </h3>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#3A444E]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#3A444E]/10 text-[#3A444E]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(214, 220, 226, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.slateDark }}>
                        Advisory Scope &amp; Deliverables:
                      </p>
                      {proj.specs.map((s) => (
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
                    <span>Request Full Case Study</span>
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
                PLANNING A STRATEGIC CONSULTANCY ASSIGNMENT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.slateDark }}>
                Partner With Pakistan&apos;s Leading Strategic Advisory Practice
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From technical scoping and financial modeling to transaction execution and independent project governance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.slate }}
              >
                <span>Request Advisory Evaluation</span>
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
