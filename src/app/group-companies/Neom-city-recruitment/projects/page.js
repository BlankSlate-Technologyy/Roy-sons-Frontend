"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Users2,
  User,
  Building2,
  Globe2,
  UserSearch,
  MessageSquare,
  ClipboardList,
  FileCheck,
  HardHat,
  HeartPulse,
  Monitor,
  Factory,
  Fuel,
  UtensilsCrossed,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  NeomRecruitmentNavbar,
  NeomRecruitmentFooter,
  SectionLabel,
  SectionHeading,
} from "../components/NeomRecruitmentShared";

const CATEGORIES = [
  "All",
  "Construction & Mega-Infrastructure",
  "Healthcare & Medical",
  "Oil, Gas & Petrochemical",
  "IT, AI & Software",
  "Hospitality & Tourism",
  "Aviation & Logistics",
];

const SIGNATURE_DEPLOYMENTS = [
  {
    name: "NEOM Smart City Mega-Infrastructure Engineering Contingent",
    category: "Construction & Mega-Infrastructure",
    location: "Deployment: Tabuk Province, NEOM & The Line, Kingdom of Saudi Arabia",
    status: "Completed – 2,500 Technical Personnel Mobilized",
    desc: "Full-cycle overseas recruitment and rapid mobilization of 2,500 chartered civil engineers, BIM managers, tunneling specialists, high-voltage technicians, and earthmoving plant operators for NEOM giga-projects.",
    specs: ["Headcount: 2,500 Chartered Engineers & Technical Specialists", "Trade Testing: 100% Practical Field Trade Tested & Attested", "Mobilization: Zero Visa Rejections Under Saudi Fast-Track Protocols"],
    image: "/neomrecruitment_hero_talent.svg",
    tag: "NEOM Infrastructure",
  },
  {
    name: "Gulf National Health Authority Specialist Hospital Staffing",
    category: "Healthcare & Medical",
    location: "Deployment: Riyadh & Jeddah Tertiary Medical Cities, KSA",
    status: "Completed – 450 Medical Doctors & ICU Nurses",
    desc: "Targeted international executive search and overseas deployment of 450 board-certified consultant physicians, pediatric surgeons, intensive care nurses, and biomedical clinical engineers.",
    specs: ["Talent: 120 Consultant Doctors & 330 Specialized ICU/OT Nurses", "Verification: DataFlow Primary Source Verification (PSV) Passed", "Retention: 99.1% First-Year Candidate Retention Benchmark"],
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Hospital Staffing",
  },
  {
    name: "Red Sea Luxury Island Resort Pre-Opening Staffing",
    category: "Hospitality & Tourism",
    location: "Deployment: Red Sea Coast Luxury Resort Cluster, Saudi Arabia",
    status: "Completed – 1,200 Luxury Hospitality Staff",
    desc: "Turnkey pre-opening recruitment for ultra-luxury 5-star island resorts, sourcing executive chefs, front office management, private villa butlers, and guest experience curators.",
    specs: ["Scope: 1,200 Hospitality Professionals Sourced & Mobilized", "Training: Pre-Departure 5-Star International Hospitality Academy", "Languages: Multi-Lingual Proficiency (English, Arabic & French)"],
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Luxury Hospitality",
  },
  {
    name: "CPEC Motorway & Mountain Tunnel Engineering Workforce",
    category: "Construction & Mega-Infrastructure",
    location: "Deployment: Northern Corridor Highway & Bridge Project, Pakistan",
    status: "Completed – 800 Highway & Structural Engineers",
    desc: "Contractual staffing and technical talent acquisition for 800 geotechnical engineers, bridge construction supervisors, surveying teams, and QA/QC materials laboratory technicians.",
    specs: ["Personnel: 800 Geotechnical, Structural & Highway Specialists", "Turnaround: Full Team Mobilized to Remote Sites in 21 Days", "Safety: OSHA / NEBOSH Certified On-Site Safety Supervisors"],
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Highway Engineering",
  },
  {
    name: "Global FinTech Unicorn Offshore Software Engineering Hub",
    category: "IT, AI & Software",
    location: "Deployment: Dedicated Tech Development Hub, Lahore & Dubai",
    status: "Completed – 180 Senior Tech Engineers",
    desc: "Building a dedicated offshore technology center consisting of 180 senior cloud DevOps architects, full-stack React/Node developers, blockchain engineers, and AI data scientists.",
    specs: ["Engineers: 180 Senior Full-Stack & Cyber Security Engineers", "Vetting: Automated Coding Algorithms & System Architecture Reviews", "Model: Permanent Offshore Dedicated Engineering Center"],
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Tech Unicorn Hub",
  },
  {
    name: "Multinational FMCG Plant Turnkey Manufacturing Workforce",
    category: "Manufacturing & Heavy Plants",
    location: "Deployment: Sundar Industrial Estate Manufacturing Complex, Lahore",
    status: "Active Execution – Complete Plant Operations Staffing",
    desc: "Complete end-to-end workforce hiring and payroll outsourcing for a new 40-acre automated FMCG manufacturing facility, managing plant directors, PLC automation engineers, and packaging lines.",
    specs: ["Headcount: 600 Manufacturing, Electrical & Logistics Personnel", "Outsourcing: 100% Managed Payroll & EOBI/Social Security Admin", "Productivity: Zero Lost Time Incident (LTI) Safety Record"],
    image: "/neomrecruitment_hero_talent.svg",
    tag: "FMCG Plant Staffing",
  },
];

export default function NeomRecruitmentProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = SIGNATURE_DEPLOYMENTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomRecruitmentNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Global Talent Deployments</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Signature Talent Deployments &amp; <span style={{ color: theme.blue }}>Workforce Case Studies</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark workforce achievements across NEOM smart city engineering, Gulf tertiary hospitals, luxury island hospitality pre-openings, CPEC motorways, and fintech tech hub buildouts.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search case studies by name, sector, or destination..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
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
                      ? "bg-[#0072CE] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#0072CE]"
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

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.name}
                className="nr-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0F2B5B]" style={{ borderColor: theme.border }}>
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black" style={{ color: theme.navyDark }}>
                        {proj.name}
                      </h3>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#0072CE]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#0072CE]/10 text-[#0072CE]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Deployment Scope &amp; Deliverables:
                      </p>
                      {proj.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#00A896]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/Neom-city-recruitment/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-sky-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request Full Recruitment Case Study</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0072CE]">
                NEED MASS WORKFORCE DEPLOYMENT OR EXECUTIVE TALENT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Partner With Pakistan&apos;s Leading Overseas Recruitment Firm
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From verified candidate trade testing and DataFlow medical screening to embassy visa issuance and turnkey flight mobilization.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/Neom-city-recruitment/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Project Proposal</span>
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

      <NeomRecruitmentFooter />
    </main>
  );
}
