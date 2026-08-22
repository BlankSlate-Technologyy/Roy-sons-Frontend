"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
  Building2,
  HeartPulse,
} from "lucide-react";
import {
  theme,
  PakMedicalNavbar,
  PakMedicalFooter,
  SectionLabel,
  SectionHeading,
} from "../components/PakMedicalShared";

const CATEGORIES = [
  "All",
  "Modular Operation Theatres",
  "ISO Clean Rooms",
  "Medical Gas Pipeline (MGPS)",
  "Hospital HVAC & HEPA",
  "Laboratory BSL Suites",
];

const SIGNATURE_PROJECTS = [
  {
    name: "Shaukat Khanum Memorial Cancer Hospital Modular OTs",
    category: "Modular Operation Theatres",
    location: "Johar Town, Lahore, Punjab",
    status: "Operational – 6 Modular Surgical Theatres",
    desc: "Complete turnkey design and installation of 6 world-class modular operation theatres featuring antimicrobial HPL wall systems, laminar airflow ceiling plenums, and digital surgeon control consoles.",
    specs: ["Scope: 6 Modular Operation Theatres", "Air Quality: ISO Class 5 Cleanliness", "Features: Articulated Dual-Arm Surgical Pendants"],
    image: "/pakmed_hero_engineering.svg",
    tag: "Modular OTs",
  },
  {
    name: "National Institute of Health (NIH) Vaccine GMP Clean Rooms",
    category: "ISO Clean Rooms",
    location: "Chak Shahzad, Islamabad",
    status: "Validated – ISO Class 5 / GMP Grade A-B",
    desc: "Construction and qualification of specialized vaccine production cleanroom suites with sterile filling rooms, dynamic pass boxes, and automated cascading pressure differential airlocks.",
    specs: ["Area: 12,000 Sq Ft GMP Cleanroom Space", "Standard: WHO GMP & PIC/S Validated", "Airlocks: Interlocking High-Velocity Decon Showers"],
    image: "/pakmed_hero_engineering.svg",
    tag: "Vaccine Cleanroom",
  },
  {
    name: "Punjab Institute of Cardiology (PIC) Central MGPS Network",
    category: "Medical Gas Pipeline (MGPS)",
    location: "Jail Road, Lahore, Punjab",
    status: "Active 24/7 – 450 Bed Medical Gas Network",
    desc: "Installation of a complete HTM 02-01 medical gas pipeline system including cryogenic liquid medical oxygen (LMO) storage, duplex medical vacuum plants, and 450 bedhead terminal units.",
    specs: ["Outlets: 1,800+ Oxygen, Vacuum & Medical Air Points", "Standard: HTM 02-01 & ISO 7396-1 Certified", "Alarms: Digital Area Valve Service Units (AVSU)"],
    image: "/pakmed_hero_engineering.svg",
    tag: "Hospital MGPS",
  },
  {
    name: "Lahore General Hospital Neurosurgery Complex Modernization",
    category: "Modular Operation Theatres",
    location: "Ferozepur Road, Lahore, Punjab",
    status: "Commissioned – High-Precision Surgical Center",
    desc: "Turnkey development of dedicated neurosurgery and trauma surgical suites with integrated lead radiation shielding, laminar airflow, and hermetically sealed touchless doors.",
    specs: ["Theatres: 4 High-Tech Neurosurgical Suites", "Shielding: 2mm Lead Radiation X-Ray Protection", "Flooring: Conductive Antistatic Medical Vinyl"],
    image: "/pakmed_hero_engineering.svg",
    tag: "Neurosurgery OT",
  },
  {
    name: "Aga Khan University Diagnostic & Molecular Research Labs",
    category: "Laboratory BSL Suites",
    location: "Stadium Road, Karachi, Sindh",
    status: "Operational – BSL-2 / BSL-3 Research Facility",
    desc: "Turnkey fit-out of advanced clinical diagnostic and molecular research laboratories with Class II Type A2 biosafety cabinets, chemical extraction fume hoods, and epoxy laboratory counters.",
    specs: ["Biosafety: BSL-2 & BSL-3 Containment Zones", "Exhaust: 100% Dedicated Exhaust with HEPA Scrubbers", "Fixtures: Pure Deionized Water & Specialty Gases"],
    image: "/pakmed_hero_engineering.svg",
    tag: "BSL-3 Research Lab",
  },
  {
    name: "Rawalpindi Kidney Center Specialized HVAC & HEPA Filtration",
    category: "Hospital HVAC & HEPA",
    location: "Rawalpindi Medical University Health Complex",
    status: "Energized – 100% Sterile Fresh Air System",
    desc: "Engineering and installation of double-skin hygienic Air Handling Units (AHUs), terminal H14 HEPA filtration, and negative pressure nephrology isolation wards.",
    specs: ["Filtration: 99.995% Efficiency H14 HEPA Banks", "Air Changes: 25+ Air Changes Per Hour (ACPH)", "Pressure: Microprocessor Automated Pressure Dampers"],
    image: "/pakmed_hero_engineering.svg",
    tag: "Hygienic Hospital HVAC",
  },
];

export default function PakMedicalProjectsPage() {
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
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Landmark Healthcare Projects</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.royalBlueDark }}>
              Signature Hospital &amp; <span style={{ color: theme.royalBlue }}>Clean Room Projects</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark deployments across premier cancer hospitals, national vaccine research centers, cardiology institutes, and university diagnostic laboratories across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects by hospital, city, or specialty..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1A4FA0] transition-all bg-white shadow-xs"
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
                      ? "bg-[#1A4FA0] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#1A4FA0]"
                  }`}
                  style={{ borderColor: active ? theme.royalBlue : theme.border }}
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
                className="pakmed-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1A4FA0]" style={{ borderColor: theme.border }}>
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black" style={{ color: theme.royalBlueDark }}>
                        {proj.name}
                      </h3>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#1A4FA0]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#1A4FA0]/10 text-[#1A4FA0]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(210, 228, 245, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.royalBlueDark }}>
                        Engineering Scope &amp; Deliverables:
                      </p>
                      {proj.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#2B8DD6]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/pak-janitorial/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.royalBlueDark }}
                  >
                    <span>Request Project Case Study</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.skyBlue }}>
                DEVELOPING A HEALTHCARE OR PHARMACEUTICAL FACILITY?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.royalBlueDark }}>
                Partner With Pakistan&apos;s Leading Medical Engineering Enterprise
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From architectural healthcare design to cleanroom validation and DRAP / WHO regulatory compliance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/pak-janitorial/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.royalBlue }}
              >
                <span>Request Project Evaluation</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.royalBlue, color: theme.royalBlue }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PakMedicalFooter />
    </main>
  );
}
