"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  ShieldCheck,
  Building2,
  Hammer,
  Wind,
  Gauge,
  FlaskConical,
  Cpu,
  Microscope,
  LifeBuoy,
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
  "Critical Care ICU Pendants",
  "Laboratory BSL Suites",
];

const HEALTHCARE_SOLUTIONS = [
  {
    name: "PakMed UltraMOT Modular Operation Theatre Suite",
    category: "Modular Operation Theatres",
    specs: ["Wall Material: Antimicrobial HPL / Stainless Steel 304", "Airflow: 0.45 m/s Laminar Flow Plenum", "Doors: Hermetically Sealed Automatic Sliding"],
    desc: "Complete pre-fabricated modular surgical theatre package with integrated surgeon control panels, surgical lights, antistatic vinyl, and medical gas pendants.",
    image: "/pakmed_hero_engineering.svg",
    tag: "Modular Surgical Suite",
  },
  {
    name: "PakMed CleanPro ISO Class 5–8 Modular Clean Room",
    category: "ISO Clean Rooms",
    specs: ["Class: ISO 14644 Class 4 to Class 8 / EU GMP A-D", "Panels: 50mm High-Density PUF Core Sandwich", "Accessories: Dynamic Interlocking Pass Boxes"],
    desc: "Turnkey pharmaceutical and biotechnology cleanroom envelope featuring flush covings, return air risers, and HEPA fan filter units (FFU).",
    image: "/pakmed_hero_engineering.svg",
    tag: "ISO & GMP Clean Room",
  },
  {
    name: "PakMed MediGas HTM 02-01 Medical Gas Plant & Outlets",
    category: "Medical Gas Pipeline (MGPS)",
    specs: ["Standard: HTM 02-01 / NFPA 99 / ISO 7396-1", "Plant: Duplex Medical Vacuum & Oil-Free Air", "Outlets: BS / DIN / AFNOR Terminal Gas Units"],
    desc: "Complete hospital medical gas distribution network including manifold headers, area valve service units (AVSU), digital alarm panels, and degreased copper piping.",
    image: "/pakmed_hero_engineering.svg",
    tag: "HTM 02-01 Gas Systems",
  },
  {
    name: "PakMed SteriAir Hospital Hygienic AHU & Laminar Ceiling",
    category: "Hospital HVAC & HEPA",
    specs: ["Construction: Double-Skin Stainless Steel Casing", "Filtration: Multi-Stage with H14 Terminal HEPA", "Fans: High-Efficiency EC Plug Fans with VFD"],
    desc: "Dedicated hospital hygienic air handling units engineered to maintain positive pressure differential, precise temperature-humidity, and sterile air circulation.",
    image: "/pakmed_hero_engineering.svg",
    tag: "Hygienic Hospital HVAC",
  },
  {
    name: "PakMed CarePendant Articulated Surgical & ICU Pendants",
    category: "Critical Care ICU Pendants",
    specs: ["Configuration: Single / Dual Articulated Heavy Arms", "Capacity: 180 kg – 320 kg Medical Equipment", "Outlets: 12x Power, 6x Medical Gas, Data Ports"],
    desc: "Ceiling-mounted heavy articulated pendant systems providing ergonomic positioning of anesthesia machines, patient monitors, and life support gas outlets.",
    image: "/pakmed_hero_engineering.svg",
    tag: "Surgical Pendants",
  },
  {
    name: "PakMed BioLab Turnkey BSL-2 / BSL-3 Laboratory Suite",
    category: "Laboratory BSL Suites",
    specs: ["Biosafety: Class II Type A2 / B2 Biosafety Hoods", "Surfaces: Solid Chemical-Resistant Phenolic Resin", "Control: Negative Pressure Cascading Interlocks"],
    desc: "Complete laboratory fit-out package for clinical diagnostics, molecular PCR testing, and microbiology research with dedicated fume containment.",
    image: "/pakmed_hero_engineering.svg",
    tag: "Diagnostic Lab Suites",
  },
];

export default function PakMedicalSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = HEALTHCARE_SOLUTIONS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Turnkey Medical Engineering Packages</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.royalBlueDark }}>
              Healthcare Infrastructure &amp; <span style={{ color: theme.royalBlue }}>Clean Room Solutions</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Supplying modular operating theatres (MOT), ISO Class 5–8 clean rooms, HTM 02-01 medical gas pipeline systems, hygienic hospital AHUs, and surgical pendants across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search solutions (e.g. Modular OT, Clean Room, Medical Gas, Pendants)..."
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

      {/* Category Pills */}
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

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prod) => (
              <div
                key={prod.name}
                className="pakmed-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1A4FA0]" style={{ borderColor: theme.border }}>
                        {prod.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-3" style={{ color: theme.royalBlueDark }}>
                      {prod.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {prod.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(210, 228, 245, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.royalBlueDark }}>
                        Technical Specifications:
                      </p>
                      {prod.specs.map((s) => (
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
                    <span>Request Engineering Datasheet</span>
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
                CUSTOM HOSPITAL PACKAGES &amp; TENDER BIDDING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.royalBlueDark }}>
                Need Customized Modular Surgical Or Cleanroom Packages?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide complete turnkey procurement and installation packages for public health departments, private hospital chains, and pharmaceutical manufacturers.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/pak-janitorial/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.royalBlue }}
              >
                <span>Request B2B Hospital Quote</span>
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
