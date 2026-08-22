"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sofa,
  Home,
  Briefcase,
  Utensils,
  Compass,
  Hammer,
  Layers,
  Palette,
  Ruler,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
} from "lucide-react";
import {
  theme,
  MaxWoodNavbar,
  MaxWoodFooter,
  SectionLabel,
  SectionHeading,
} from "../components/MaxWoodShared";

const CATEGORIES = [
  "All",
  "Living & Lounge",
  "Executive Office",
  "Dining & Hospitality",
  "Bedroom Suites",
  "Architectural Paneling",
  "Modular Kitchens",
];

const FURNITURE_COLLECTIONS = [
  {
    name: "The Royal Heritage Solid Walnut Dining Suite",
    category: "Dining & Hospitality",
    specs: ["Timber: Premium Seasoned American Black Walnut & Burma Teak", "Dimensions: 12-Seater (3.8m Length) with Bookmatched Veneer Grain", "Components: Master Dining Table, 12 Sculpted Chairs & Side Credenza"],
    desc: "A timeless masterpiece featuring rich walnut grains, precision mortise joinery, and durable satin polyurethane lacquer protection.",
    image: "/maxwood_hero_craft.svg",
    tag: "Dining Suite",
  },
  {
    name: "The Executive Sovereign CEO Office Suite",
    category: "Executive Office",
    specs: ["Components: 24-Seater Boardroom Table, CEO Desk & Library Credenza", "Tech: Concealed Wireless Charging Pads & Motorized Cable Raceways", "Accents: Genuine Italian Top-Grain Leather Writing Blotter Inlays"],
    desc: "Commanding corporate executive furniture designed for boardroom prestige, seamless technology integration, and executive comfort.",
    image: "/maxwood_hero_craft.svg",
    tag: "Executive Office",
  },
  {
    name: "The Elysium 5-Star Resort Guestroom Package",
    category: "Bedroom Suites",
    specs: ["Bed: Platform King Bed with Integrated Fluted Wood & Fabric Headboard", "Millwork: Fluted Wall-Mounted Vanity Desk, Mirror & Luggage Bench", "Finish: Scratch-Resistant Commercial Grade Matte Polyurethane Finish"],
    desc: "Complete turnkey hotel guestroom furniture packages engineered to luxury hospitality standards and commercial durability.",
    image: "/maxwood_hero_craft.svg",
    tag: "Hospitality Suite",
  },
  {
    name: "AcoustiFlute Architectural Wall Paneling",
    category: "Architectural Paneling",
    specs: ["Acoustics: NRC Rating of 0.85 with Sound-Absorbing PET Felt Backing", "Profile: 30mm / 45mm Precision 5-Axis CNC Fluted Solid Wood Slats", "Integration: Concealed Floor-to-Ceiling Magnetic Access Pivot Doors"],
    desc: "High-end decorative and acoustic architectural cladding that transforms corporate boardrooms, auditoriums, and luxury home theaters.",
    image: "/maxwood_hero_craft.svg",
    tag: "Acoustic Millwork",
  },
  {
    name: "The Meisterstück Modular Kitchen & Island",
    category: "Modular Kitchens",
    specs: ["Carcass: 18mm Marine-Grade Waterproof Hardwood Plywood", "Hardware: German Blum Servo-Drive Motorized Touch-Open Drawers", "Fascia: Anti-Fingerprint Ultra-Matte Lacquer & Natural Smoked Oak Veneer"],
    desc: "Architectural kitchen cabinetry engineered with precision German hardware, quartz breakfast counter islands, and concealed LED strip task lighting.",
    image: "/maxwood_hero_craft.svg",
    tag: "Modular Kitchen",
  },
  {
    name: "The Grand Bel-Air Living Room Lounge Suite",
    category: "Living & Lounge",
    specs: ["Frames: Kiln-Dried Solid Sheesham Hardwood Internal Framing", "Cushioning: High-Resilience Multi-Density Foam with Feather Down Top", "Upholstery: Imported Belgian Linen & Top-Grain Nubuck Leather"],
    desc: "Sculptural deep-lounge sectional sofas, statement coffee tables, and matching accent armchairs created for expansive modern residences.",
    image: "/maxwood_hero_craft.svg",
    tag: "Living Suite",
  },
];

export default function MaxWoodSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = FURNITURE_COLLECTIONS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#5C5248] font-sans antialiased overflow-x-hidden">
      <MaxWoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Signature Collections &amp; Solutions</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkWood }}>
              Bespoke Furniture Collections &amp; <span style={{ color: theme.primary }}>Interior Suites</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our master-crafted residential dining suites, executive boardroom setups, luxury hotel guestroom packages, acoustic fluted paneling, and German-engineered modular kitchens.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search collections (e.g. Dining, Office, Lounge, Bedroom, Paneling, Kitchen)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5C3A21] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-amber-50/40" style={{ borderColor: theme.border }}>
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
                      ? "bg-[#5C3A21] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#5C3A21]"
                  }`}
                  style={{ borderColor: active ? theme.primary : theme.border }}
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
                className="mw-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#5C3A21]" style={{ borderColor: theme.border }}>
                        {sol.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-3" style={{ color: theme.darkWood }}>
                      {sol.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {sol.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(232, 223, 213, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.darkWood }}>
                        Timber Specifications &amp; Components:
                      </p>
                      {sol.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#D4A373]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/max-wood/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-amber-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.darkWood }}
                  >
                    <span>Request Custom Dimensions &amp; Quote</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BA7A3E]">
                ARCHITECTS, INTERIOR DESIGNERS &amp; REAL ESTATE DEVELOPERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkWood }}>
                Custom Woodwork Tailored To Your Architectural Blueprints
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide complete timber sample finishes, CAD shop drawings, CNC joinery tolerances, and turnkey on-site installation across Pakistan.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-wood/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Sample Swatches</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-amber-50/50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MaxWoodFooter />
    </main>
  );
}
