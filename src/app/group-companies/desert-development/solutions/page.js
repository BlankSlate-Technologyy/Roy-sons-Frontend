"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trees,
  Globe,
  Droplets,
  Sun,
  Wind,
  Layers,
  Compass,
  HardHat,
  Sprout,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
} from "lucide-react";
import {
  theme,
  DesertDevNavbar,
  DesertDevFooter,
  SectionLabel,
  SectionHeading,
} from "../components/DesertDevShared";

const CATEGORIES = [
  "All",
  "Government Authorities",
  "Environmental Agencies",
  "Renewable Energy",
  "Agriculture & Farming",
  "Infrastructure Developers",
  "Mining & Industrial",
];

const REHABILITATION_SOLUTIONS = [
  {
    name: "Mega-Afforestation & Green Barrier Shelterbelt Suite",
    category: "Government Authorities",
    specs: ["Density: 500,000+ Native Tree Saplings Per 1,000 Hectares", "Flora: Acacia Nilotica, Prosopis Cineraria, Tamarix & Wild Olive", "Irrigation: Solar Subsurface Drip System with 98% Water Efficiency"],
    desc: "Large-scale bio-diverse green walls designed to halt desert encroachment, sequester carbon, and restore native bird and wildlife habitats.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Green Wall Corridor",
  },
  {
    name: "Solar Brackish Desalination & Precision Drip Hub",
    category: "Agriculture & Farming",
    specs: ["Capacity: 1,500 m³/Day Solar-Powered Reverse Osmosis Filtration", "Power: 120 kW Dedicated Photovoltaic Solar Array with Battery Backup", "Salinity: Reducing 12,000 PPM Brackish Water to &lt;200 PPM Potable Water"],
    desc: "Turnkey arid water generation and precision drip networks providing abundant fresh water for agricultural crops and local desert communities.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Water Generation",
  },
  {
    name: "Sand Dune Fixation & Mechanical Soil Matrix",
    category: "Infrastructure Developers",
    specs: ["Grid: 1m x 1m Straw & Geo-Textile Wind-Breaking Checkerboards", "Stabilization: Natural Biological Soil Crust Microbial Inoculants", "Coverage: 10,000 Hectares Continuous Mobile Dune Drift Arrest"],
    desc: "Engineered sand dune stabilization systems protecting highways, railways, pipelines, and urban settlements from blowing sand and desert drift.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Dune Fixation",
  },
  {
    name: "Desert Agro-Forestry & Olive Orchard Reclamation",
    category: "Agriculture & Farming",
    specs: ["Orchard: High-Density Spanish & Italian Arid Olive Cultivars", "Soil: Biochar & Compost Subsoil Injections Boosting Organic Carbon", "Yield: High-Value Extra Virgin Olive Oil & Medjool Date Production"],
    desc: "Converting barren arid lands into high-revenue commercial olive, date palm, and jojoba plantations utilizing precision fertigation.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Agro-Forestry",
  },
  {
    name: "Utility-Scale Desert Solar & Agrivoltaic Dual-Use Park",
    category: "Renewable Energy",
    specs: ["Output: 50MW+ High-Efficiency Bifacial Solar Photovoltaic Generation", "Agrivoltaics: Shade-Tolerant Aloe Vera, Saffron & Fodder Under Panels", "Maintenance: Waterless Robotic AI-Guided Dust Cleaning Systems"],
    desc: "Dual-purpose clean energy generation and shade farming that triples desert land productivity while generating clean renewable electricity.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Agrivoltaics",
  },
  {
    name: "Mining Corridor Ecological Remediation & Revegetation",
    category: "Mining & Industrial",
    specs: ["Remediation: Neutralizing Heavy Metal Tailings with Bio-Phytoremediation", "Dust: Bio-Polymer Eco-Sealants Suppressing 99% Airborne Particulates", "Restoration: Native Shrub & Grass Revegetation Over Disturbed Strata"],
    desc: "Comprehensive environmental rehabilitation of mining quarry sites, industrial waste corridors, and mineral processing buffer zones.",
    image: "/desertdev_hero_rehab.svg",
    tag: "Mining Remediation",
  },
];

export default function DesertDevSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = REHABILITATION_SOLUTIONS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#425C52] font-sans antialiased overflow-x-hidden">
      <DesertDevNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Turnkey Arid Solutions &amp; Packages</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkGreen }}>
              Desert Reclamation &amp; <span style={{ color: theme.primary }}>Turnkey Solutions</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our turnkey environmental packages: mega-afforestation green belts, solar brackish desalination hubs, sand dune stabilization matrices, and agrivoltaic clean energy parks.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search solutions (e.g. Afforestation, Desalination, Dune, Olive, Solar, Mining)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-emerald-50/40" style={{ borderColor: theme.border }}>
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
                      ? "bg-[#1B4D3E] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#1B4D3E]"
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
                className="dd-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1B4D3E]" style={{ borderColor: theme.border }}>
                        {sol.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-3" style={{ color: theme.darkGreen }}>
                      {sol.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {sol.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(212, 229, 221, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.darkGreen }}>
                        Engineering Specifications &amp; Metrics:
                      </p>
                      {sol.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#2D7D62]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/desert-development/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.darkGreen }}
                  >
                    <span>Request Environmental Proposal</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#2D7D62]">
                GOVERNMENT AUTHORITIES &amp; ARID LAND DEVELOPERS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkGreen }}>
                Turnkey Arid Land Engineering Tailored To Your Region
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide complete GIS soil mapping, deep hydrology drilling, solar irrigation engineering, and multi-year maintenance across Pakistan.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/desert-development/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Feasibility Study</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                style={{ borderColor: theme.primary, color: theme.primary }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DesertDevFooter />
    </main>
  );
}
