"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home as HomeIcon,
  Building2,
  TrendingUp,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Layers,
  Award,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  SwissHomesNavbar,
  SwissHomesFooter,
  SectionLabel,
  SectionHeading,
} from "../components/SwissHomesShared";

const CATEGORIES = [
  "All",
  "Luxury Villas",
  "Smart Apartments",
  "Commercial Hubs",
  "Master-Planned Enclaves",
  "Eco-Estates",
];

const SIGNATURE_PROJECTS = [
  {
    name: "Swiss Enclave Luxury Villas",
    category: "Luxury Villas",
    location: "Ring Road Interchange / Phase-VI Corridor, Lahore",
    status: "Under Construction & Ready-to-Move Units",
    desc: "A boutique gated community offering 10 Marla and 1 Kanal smart architectural villas with floor-to-ceiling glass facades, private infinity plunge pools, and automated home systems.",
    specs: ["Plot Sizes: 10 Marla & 1 Kanal", "Bedrooms: 4 & 5 Ensuite Luxury Suites", "Features: Private Pool & Solar System"],
    image: "/swiss_hero_architecture.svg",
    tag: "Exclusive Gated Enclave",
  },
  {
    name: "Swiss Crest Smart Heights",
    category: "Smart Apartments",
    location: "Main Boulevard Commercial Avenue, Islamabad",
    status: "Booking Open – 3-Year Installments",
    desc: "A 24-story residential high-rise featuring 1, 2, and 3-bedroom smart serviced apartments, heated indoor swimming pools, rooftop fitness gym, and high-speed intelligent elevators.",
    specs: ["Types: 1, 2 & 3 Bed Smart Apartments", "Floors: 24 Floors + 3 Basement Parking", "Amenities: Sky Lounge & Spa"],
    image: "/swiss_master_planning.svg",
    tag: "Luxury High-Rise Living",
  },
  {
    name: "Swiss Executive Business Tower",
    category: "Commercial Hubs",
    location: "Financial & Corporate District, Karachi",
    status: "Grade-A Corporate Offices & Retail",
    desc: "Modern corporate tower offering double-height executive office suites, conference convention centers, high-street retail arcade, and integrated Building Management Systems (BMS).",
    specs: ["Units: Executive Corporate Suites & Retail", "Security: Biometric Smart Turnstiles", "Power: 100% Dedicated Backup Gensets"],
    image: "/swiss_hero_architecture.svg",
    tag: "Corporate Commercial Hub",
  },
  {
    name: "Alpine Meadows Gated Community",
    category: "Master-Planned Enclaves",
    location: "Green Belt Expressway, Rawalpindi / Islamabad",
    status: "Master-Planned Community – 500+ Acres",
    desc: "An eco-friendly master-planned smart city enclave featuring 5, 10, and 20 Marla residential plots, a central 25-acre botanical lake, underground utilities, and solar streetlights.",
    specs: ["Total Area: 500+ Master-Planned Acres", "Infrastructure: 100% Underground Cabling", "Open Space: 40% Parks & Green Belts"],
    image: "/swiss_master_planning.svg",
    tag: "Eco-Smart City Enclave",
  },
  {
    name: "Swiss Boulevard Commercial Arcade",
    category: "Commercial Hubs",
    location: "Prime Commercial Sector, Lahore",
    status: "High-Street Retail & Dining Arcade",
    desc: "A premium retail and commercial entertainment hub with double-frontage boutique outlets, open-air pedestrian promenades, cinema multiplexes, and rooftop open-air cafes.",
    specs: ["Frontage: 120 ft Wide Main Boulevard", "Outlets: Fashion Flagships & Fine Dining", "Footfall: High-Traffic Commercial Zone"],
    image: "/swiss_hero_architecture.svg",
    tag: "High-Street Retail",
  },
  {
    name: "Lakeview Eco-Villas & Resorts",
    category: "Eco-Estates",
    location: "Scenic Waterfront Foothills, Khanpur / Haripur",
    status: "Waterfront Vacation & Retirement Villas",
    desc: "Exclusive waterfront villas nestled along pristine lake shores, designed with timber-and-stone alpine architecture, private docks, and integrated organic olive orchards.",
    specs: ["Units: 1 & 2 Kanal Waterfront Villas", "Power: 100% Off-Grid Solar Microgrid", "Leisure: Private Boating & Equestrian Club"],
    image: "/swiss_master_planning.svg",
    tag: "Waterfront Luxury",
  },
];

export default function SwissHomesProjectsPage() {
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
    <main className="min-h-screen bg-white text-[#2B2B2B] font-sans antialiased overflow-x-hidden">
      <SwissHomesNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Real Estate Portfolio</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
              Signature Developments &amp; <span style={{ color: theme.red }}>Smart Communities</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our portfolio of master-planned smart communities, luxury contemporary villas, high-rise residential towers, and prime commercial retail hubs designed for superior lifestyle and capital appreciation.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects by name, location, or type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B01B2E] transition-all bg-white shadow-xs"
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
                      ? "bg-[#B01B2E] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#B01B2E]"
                  }`}
                  style={{ borderColor: active ? theme.red : theme.border }}
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
                className="swiss-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm" style={{ color: theme.charcoal, borderColor: theme.border }}>
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black" style={{ color: theme.charcoal }}>
                        {proj.name}
                      </h3>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#B01B2E]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#B01B2E]/10 text-[#B01B2E]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(232, 232, 232, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.charcoal }}>
                        Project Highlights:
                      </p>
                      {proj.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#B01B2E]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/swiss-homes/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.charcoal }}
                  >
                    <span>Request Floor Plan &amp; Prices</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#B01B2E]">
                SCHEDULE AN ON-SITE TOUR
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.charcoal }}>
                Experience Our Model Villas &amp; Plots In Person
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Our on-site site offices are open 7 days a week with dedicated customer relations managers to guide your property tour.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-homes/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.red }}
              >
                <span>Book Site Inspection</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.charcoal, color: theme.charcoal }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissHomesFooter />
    </main>
  );
}
