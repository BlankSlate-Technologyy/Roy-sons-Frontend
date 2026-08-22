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
  Truck,
  Plane,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
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

const TALENT_PACKAGES = [
  {
    name: "Mega-Infrastructure & Smart City Engineering Suite",
    category: "Construction & Mega-Infrastructure",
    specs: ["Roles: Project Directors, Chartered Civil/Structural Engineers, BIM Leads", "Trade Testing: Certified Hydraulic, Earthmoving & High-Voltage Electricians", "Mobilization: Fast-Track 30-Day Visa Clearance for KSA / NEOM Giga-Projects"],
    desc: "Complete turnkey workforce deployment for international giga-projects, high-speed rail, smart city construction, and port infrastructure.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Civil Engineering",
  },
  {
    name: "Healthcare & Tertiary Hospital Clinical Workforce",
    category: "Healthcare & Medical",
    specs: ["Specialists: UK/US Board Certified Consultants, Intensivists & Surgeons", "Nursing: Registered ICU, OT, Neonatal & Emergency Healthcare Nurses", "Licensing: Full Saudi Commission for Health Specialties (SCFHS) / DHA Verification"],
    desc: "Supplying accredited medical doctors, specialist clinicians, surgical nurses, and allied healthcare staff to prestigious international hospital networks.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Healthcare Talent",
  },
  {
    name: "Oil, Gas & Energy Technical Specialist Package",
    category: "Oil, Gas & Petrochemical",
    specs: ["Disciplines: Drilling Superintendents, API 510/570 Inspectors, HSE Directors", "Certifications: BOSIET, OPITO, NEBOSH & NDT Level-III Certified Specialists", "Deployment: Onshore Refineries, Offshore Rigs & LNG Processing Facilities"],
    desc: "Highly specialized technical manpower for upstream exploration, downstream refining, petrochemical pipelines, and power utility grids.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Oil & Gas Manpower",
  },
  {
    name: "Enterprise IT, AI & Software Engineering Team",
    category: "IT, AI & Software",
    specs: ["Talent: Principal Cloud DevOps, Full-Stack Architects & Cyber Security Leads", "Assessment: Automated Live Coding Challenges & System Architecture Audits", "Model: Dedicated Offshore Tech Centers (GCC/EU) or On-Site Relocation"],
    desc: "Building high-velocity software engineering and artificial intelligence teams for fintech unicorns, digital banking platforms, and enterprise SaaS firms.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Tech & AI Hiring",
  },
  {
    name: "5-Star Luxury Hospitality Pre-Opening Staffing Suite",
    category: "Hospitality & Tourism",
    specs: ["Executive: Executive Head Chefs, F&B Directors, Luxury Hotel GMs", "Operations: Guest Relations, Front Office, Sommeliers & Butler Teams", "Training: Pre-Departure International Hospitality Etiquette & Grooming"],
    desc: "Turnkey recruitment and pre-opening hotel staff mobilization for 5-star luxury resorts, private royal residences, and fine-dining restaurants.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Hospitality Staffing",
  },
  {
    name: "Aviation, Port & Global Supply Chain Operations",
    category: "Aviation & Logistics",
    specs: ["Aviation: EASA/FAA Licensed Aircraft Maintenance Engineers (LAME)", "Ports: Ship-to-Shore (STS) Crane Operators & Terminal Logistics Planners", "Compliance: IATA, Dangerous Goods Regulations (DGR) & Customs Clearance"],
    desc: "Supplying certified aviation maintenance technicians, commercial pilots, port logistics directors, and warehouse fleet controllers globally.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Aviation Logistics",
  },
];

export default function NeomRecruitmentSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = TALENT_PACKAGES.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomRecruitmentNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Industry Workforce Solutions &amp; Packages</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Talent Acquisition Packages &amp; <span style={{ color: theme.blue }}>Workforce Suites</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our turnkey talent deployment packages for mega-infrastructure giga-projects, tertiary hospital networks, oil &amp; gas energy corridors, enterprise IT platforms, and 5-star luxury hospitality resorts.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search talent suites (e.g. Engineering, Healthcare, Oil & Gas, IT, Hospitality, Aviation)..."
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

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((sol) => (
              <div
                key={sol.name}
                className="nr-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0F2B5B]" style={{ borderColor: theme.border }}>
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
                        Deployment Scope &amp; Role Parameters:
                      </p>
                      {sol.specs.map((s) => (
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
                    <span>Request Talent Proposal &amp; Terms</span>
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
                ENTERPRISE HIRING DIRECTORS &amp; MEGA-PROJECT PLANNERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Custom Human Resources Contingents For Your Exact Requirements
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide complete pre-screening, technical trade workshops, background vetting, embassy visa processing, and overseas mobilization.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/Neom-city-recruitment/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Talent Scoping</span>
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
