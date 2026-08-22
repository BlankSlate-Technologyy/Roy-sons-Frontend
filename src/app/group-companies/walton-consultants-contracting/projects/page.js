"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
  HardHat,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
} from "../components/WaltonShared";

const CATEGORIES = [
  "All",
  "Commercial High-Rises",
  "Industrial Complexes",
  "Highways & Bridges",
  "Logistics & PEB",
  "Institutional Campuses",
];

const SIGNATURE_PROJECTS = [
  {
    name: "Lahore Ring Road Southern Loop Flyover & Interchange",
    category: "Highways & Bridges",
    location: "Southern Loop SL-3, Lahore, Punjab",
    status: "Completed – 6-Lane Expressway & Flyover",
    desc: "Turnkey EPC construction of grade-separated highway interchange featuring prestressed concrete box girders, mechanically stabilized earth (MSE) walls, and Superpave asphalt paving.",
    specs: ["Scope: Multi-Level Interchange & 8.5 km Expressway", "Structure: Prestressed Concrete Box Girders", "Earthwork: 450,000 m³ Embankment & Compaction"],
    image: "/walton_hero_construction.svg",
    tag: "Highway Interchange",
  },
  {
    name: "Sundar Industrial Estate Mega Textile Manufacturing Plant",
    category: "Industrial Complexes",
    location: "Sundar Industrial Estate, Lahore, Punjab",
    status: "Commissioned – 280,000 Sq Ft Industrial Complex",
    desc: "Complete civil construction and PEB structural steel erection for an integrated textile processing plant including heavy spinning foundation beds, effluent treatment plants, and utility piping.",
    specs: ["Covered Area: 280,000 Sq Ft Industrial Floor", "Foundations: Dynamic Heavy Machine Isolation Slabs", "Utilities: 11kV Substation & Fire Ring Mains"],
    image: "/walton_hero_construction.svg",
    tag: "Industrial EPC Plant",
  },
  {
    name: "M-3 Industrial City Special Economic Zone Infrastructure",
    category: "Industrial Complexes",
    location: "M-3 Industrial City, FIEDMC, Faisalabad",
    status: "Energized – 150-Acre Master Infrastructure",
    desc: "Master civil infrastructure development for industrial special economic zone comprising heavy-duty RCC arterial roads, underground stormwater box culverts, and central water reservoir tanks.",
    specs: ["Area: 150 Acres Industrial Land Infrastructure", "Roads: 22 km Heavy-Duty Concrete Arterials", "Drainage: Precast Reinforced Stormwater Box Culverts"],
    image: "/walton_hero_construction.svg",
    tag: "SEZ Master Infrastructure",
  },
  {
    name: "DHA Phase-9 Corporate Twin High-Rise Towers",
    category: "Commercial High-Rises",
    location: "Main Commercial Boulevard, DHA Phase-9, Lahore",
    status: "Under Construction – 32 Storeys Twin Towers",
    desc: "High-rise corporate office towers featuring 4-level deep basement parking, rotary bored piles down to 35 meters, post-tensioned floor slabs, and double-glazed low-E curtain wall facades.",
    specs: ["Height: 32 Storeys (125m) Corporate High-Rise", "Foundations: 1,200mm Diameter Bored Piles (35m Deep)", "Floors: Post-Tensioned (PT) Column-Free Slabs"],
    image: "/walton_hero_construction.svg",
    tag: "Commercial High-Rise",
  },
  {
    name: "Islamabad Sector I-15 Mega Flyover & Expressway Bridge",
    category: "Highways & Bridges",
    location: "Kashmir Highway Extension, Sector I-15, Islamabad",
    status: "Completed – 480m Prestressed Bridge Span",
    desc: "Engineering and construction of 480-meter prestressed concrete I-girder highway overpass bridge with dual carriageways, seismic elastomeric bearings, and energy-efficient LED bridge lighting.",
    specs: ["Length: 480m Bridge Deck (12 Continuous Spans)", "Girders: 40m Post-Tensioned Precast I-Girders", "Piers: Heavy Reinforced Concrete Cast-in-Situ Piers"],
    image: "/walton_hero_construction.svg",
    tag: "Highway Flyover",
  },
  {
    name: "Port Qasim Multi-Modal Logistics Hub & Cold Storage",
    category: "Logistics & PEB",
    location: "Port Qasim Industrial Area, Karachi, Sindh",
    status: "Operational – 55m Clear-Span Steel PEB",
    desc: "Large-scale logistics distribution warehouse and cold storage terminal with 55-meter column-free structural steel spans, automated hydraulic dock levelers, and FM2 laser-screed floor slabs.",
    specs: ["Clear Span: 55 Meters Continuous Column-Free Width", "Floor Finish: Laser Screed FM2 Superflat Floor Slab", "Storage: Temperature-Controlled -20°C Cold Racks"],
    image: "/walton_hero_construction.svg",
    tag: "Logistics & PEB Hub",
  },
];

export default function WaltonProjectsPage() {
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
    <main className="min-h-screen bg-white text-[#3A4E63] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Landmark Civil Construction Portfolio</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Signature Infrastructure &amp; <span style={{ color: theme.navy }}>Building Projects</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark deployments across multi-level highway interchanges, 32-storey commercial towers, special economic zones, and heavy industrial factories across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects by name, location, or sector..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E2A47] transition-all bg-white shadow-xs"
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
                      ? "bg-[#0E2A47] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#0E2A47]"
                  }`}
                  style={{ borderColor: active ? theme.navy : theme.border }}
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
                className="walton-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0E2A47]" style={{ borderColor: theme.border }}>
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
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#0E2A47]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#0E2A47]/10 text-[#0E2A47]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(216, 226, 236, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Engineering Scope &amp; Deliverables:
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
                    href="/group-companies/walton-consultants-contracting/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A6823B]">
                DEVELOPING A HIGH-RISE OR INFRASTRUCTURE PROJECT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Partner With Pakistan&apos;s Leading Civil Contracting Enterprise
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From architectural design reviews to heavy foundation piling and structural handover.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Project Evaluation</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaltonFooter />
    </main>
  );
}
