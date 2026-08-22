"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Hammer,
  Truck,
  Layers,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
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
  "Industrial Factories",
  "Highways & Bridges",
  "Logistics & PEB Steel",
  "Healthcare & Campuses",
];

const INFRASTRUCTURE_SOLUTIONS = [
  {
    name: "WaltonTower Commercial High-Rise Superstructure",
    category: "Commercial High-Rises",
    specs: ["Height: Up to 45 Storeys Commercial / Residential", "Structure: Dual Shear Wall & Post-Tensioned Slabs", "Basement: Up to 4 Underground Parking Levels"],
    desc: "Turnkey structural construction of corporate mega-towers featuring rotary bored piling, post-tensioned floor plates, and modern curtain wall facades.",
    image: "/walton_hero_construction.svg",
    tag: "Commercial Superstructure",
  },
  {
    name: "WaltonPlant Turnkey Industrial Manufacturing Complex",
    category: "Industrial Factories",
    specs: ["Area: 50,000 to 500,000+ Sq Ft Industrial Space", "Foundation: Heavy Machine Dynamic Isolation Slabs", "Utilities: Central Substation, Steam, & Compressed Air"],
    desc: "Single-point EPC delivery of industrial factories, chemical processing plants, textile mills, and food manufacturing facilities with full MEP.",
    image: "/walton_hero_construction.svg",
    tag: "Industrial EPC Plant",
  },
  {
    name: "WaltonWay Highway, Interchange & Bridge Corridor",
    category: "Highways & Bridges",
    specs: ["Pavement: Superpave Performance-Grade Asphalt", "Bridges: Precast Prestressed Concrete Box Girders", "Earthwork: Laser-Guided Motor Graders & Compactors"],
    desc: "Engineering and construction of multi-lane motorways, urban flyovers, river bridges, and grade-separated highway interchanges.",
    image: "/walton_hero_construction.svg",
    tag: "Transportation Infrastructure",
  },
  {
    name: "WaltonHub Mega Logistics Distribution Center & PEB",
    category: "Logistics & PEB Steel",
    specs: ["Clear-Span: Up to 60 Meters Column-Free Width", "Floor Slab: Laser Screed FM2 Superflat Floor Finish", "Cladding: Insulated PIR / PUF Fire-Rated Panels"],
    desc: "Large-span pre-engineered structural steel warehouses, automated fulfillment centers, overhead crane bays, and temperature-controlled cold chains.",
    image: "/walton_hero_construction.svg",
    tag: "Logistics & PEB Hub",
  },
  {
    name: "WaltonCampus Institutional University & Healthcare",
    category: "Healthcare & Campuses",
    specs: ["Facilities: Multi-Story Academic Blocks & Hospitals", "MEP: Integrated Central HVAC, Fire Fighting, & BMS", "Acoustics: Engineered Sound Insulation & Clean Finishes"],
    desc: "Construction of medical colleges, university campuses, specialized teaching hospitals, and research facilities engineered for heavy community traffic.",
    image: "/walton_hero_construction.svg",
    tag: "Institutional Campuses",
  },
  {
    name: "WaltonUrban Municipal Infrastructure & Stormwater",
    category: "Highways & Bridges",
    specs: ["Drainage: Reinforced Concrete Box Culverts", "Utilities: Underground Water, Sewerage, & Power Grids", "Roads: Heavy-Duty Paved Arterials & Footpaths"],
    desc: "Development of modern housing societies, special economic zones (SEZ), underground utility corridors, and gravity stormwater drainage networks.",
    image: "/walton_hero_construction.svg",
    tag: "Urban Infrastructure",
  },
];

export default function WaltonSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = INFRASTRUCTURE_SOLUTIONS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#3A4E63] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Engineered Sectors &amp; Infrastructure Packages</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Turnkey Infrastructure &amp; <span style={{ color: theme.navy }}>Building Solutions</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Supplying commercial high-rises, industrial factories, highway flyovers, structural steel PEB warehouses, and university campuses across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search solutions (e.g. High-Rise, Industrial Plant, Flyover, PEB)..."
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

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prod) => (
              <div
                key={prod.name}
                className="walton-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0E2A47]" style={{ borderColor: theme.border }}>
                        {prod.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-3" style={{ color: theme.navyDark }}>
                      {prod.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {prod.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(216, 226, 236, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Technical Specifications:
                      </p>
                      {prod.specs.map((s) => (
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
                    <span>Request Engineering Proposal</span>
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
                CUSTOM INFRASTRUCTURE &amp; TENDER BIDDING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Require Turnkey Civil Construction Supply &amp; Execution?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide complete civil general contracting for NHA, C&amp;W, DHA, LDA, and private corporate developers across Pakistan.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request B2B Construction Quote</span>
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
