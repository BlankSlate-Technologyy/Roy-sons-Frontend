"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  HardHat,
  Building2,
  Factory,
  Trees,
  Zap,
  Leaf,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
} from "lucide-react";
import {
  theme,
  NeomCityNavbar,
  NeomCityFooter,
  SectionLabel,
  SectionHeading,
} from "../components/NeomCityShared";

const CATEGORIES = [
  "All",
  "Smart Megacities",
  "Financial Districts",
  "Industrial SEZs",
  "Sustainable Communities",
  "Transit & Mobility",
  "Digital Twin & IoT",
];

const SECTORS_SOLUTIONS = [
  {
    name: "Neom Smart Megacity Master Concession Suite",
    category: "Smart Megacities",
    specs: ["Scope: 5,000+ Hectares Greenfield Smart City Master Planning", "Infrastructure: Subterranean Common Utility Duct Tunnels & Sponge Reservoirs", "Governance: Centralized Municipal Digital Twin & AI Traffic OS"],
    desc: "End-to-end master planning, civil construction, and concession stewardship for next-generation carbon-neutral smart metropolises.",
    image: "/neomcity_hero_urban.svg",
    tag: "Megacity Concession",
  },
  {
    name: "Neom Financial Business Bay & Commercial Skyscraper Hub",
    category: "Financial Districts",
    specs: ["Density: Grade-A Commercial Skyscraper Towers (G+45 Floors)", "Efficiency: Centralized 20,000 TR District Cooling Plant Network", "Parking: 5,000+ Space Automated Smart Silos with EV Fast Chargers"],
    desc: "Developing high-density commercial centers, international banking headquarters, luxury corporate suites, and mixed-use public plazas.",
    image: "/neomcity_hero_urban.svg",
    tag: "Financial District",
  },
  {
    name: "Neom Special Economic Zone (SEZ) & Heavy Industrial Park",
    category: "Industrial SEZs",
    specs: ["Pavements: Heavy Concrete Roads Designed for 60-Ton Multi-Axle Trailers", "Power: Dedicated 132/11kV Substation & Clean Solar Hybrid Backup", "Customs: Automated Bonded Gate Terminals & Container Freight Depot"],
    desc: "Turnkey Special Economic Zones (SEZs) with bonded logistics terminals, high-capacity utility grids, and integrated industrial wastewater treatment.",
    image: "/neomcity_hero_urban.svg",
    tag: "Industrial SEZ",
  },
  {
    name: "Neom Eco-Living Green Residential Smart Community",
    category: "Sustainable Communities",
    specs: ["Sustainability: LEED Neighborhood Development (ND) Platinum Standards", "Water: 100% Greywater Recycling for Linear Community Parks & Gardens", "Microgrid: Rooftop Solar PV & Centralized Battery Storage Integration"],
    desc: "Master-planned residential neighborhoods offering clean smart living, underground utilities, walkable shaded parks, and automated security.",
    image: "/neomcity_hero_urban.svg",
    tag: "Eco-Living Community",
  },
  {
    name: "Neom Grade-Separated Smart Transit & Autonomous Mobility",
    category: "Transit & Mobility",
    specs: ["Corridors: Dedicated Grade-Separated Bus Rapid Transit (BRT) Expressways", "Signaling: AI-Synchronized Adaptive Traffic Lights with Priority Preemption", "Fleet: 100% Electric Mass Transit Depots & Mega Fast-Charging Plazas"],
    desc: "Designing high-capacity multi-modal transportation corridors that eliminate congestion and enable zero-emission autonomous urban transit.",
    image: "/neomcity_hero_urban.svg",
    tag: "Smart Transit Network",
  },
  {
    name: "Neom Digital Twin & Municipal Command Control Platform",
    category: "Digital Twin & IoT",
    specs: ["Software: City-Wide Urban Operating System (Urban OS) with GIS Layering", "Sensors: 500,000+ IoT Sensors Monitoring Air, Water, Power & Traffic", "Facility: 24/7 Tier-IV Integrated Command and Control Center (ICCC)"],
    desc: "Deploying high-speed city fiber rings, municipal IoT sensor arrays, and centralized urban dashboards for automated municipal management.",
    image: "/neomcity_hero_urban.svg",
    tag: "Digital Twin Platform",
  },
];

export default function NeomCitySolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = SECTORS_SOLUTIONS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomCityNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Urban Sectors &amp; Solutions</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Smart City Solutions &amp; <span style={{ color: theme.teal }}>Sector Packages</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Delivering turnkey master planning, commercial business centers, Special Economic Zones (SEZs), sustainable residential communities, autonomous transit networks, and digital city platforms.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search solutions (e.g. Megacities, Financial, Industrial, Residential, Mobility, IoT)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A2540] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/80" style={{ borderColor: theme.border }}>
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
                      ? "bg-[#0A2540] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#0A2540]"
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
            {filtered.map((sol) => (
              <div
                key={sol.name}
                className="neom-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0A2540]" style={{ borderColor: theme.border }}>
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
                        Technical Specifications &amp; Scope:
                      </p>
                      {sol.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#008080]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/neom-city/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request Solution Scope &amp; TOR</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#008080]">
                MUNICIPAL AUTHORITIES &amp; REAL ESTATE DEVELOPERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Initiate Your Urban Development Feasibility
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide comprehensive demographic analysis, traffic flow simulations, geotechnical surveys, and PPP concession models for government agencies and institutional investors.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/neom-city/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Planning Scoping</span>
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

      <NeomCityFooter />
    </main>
  );
}
