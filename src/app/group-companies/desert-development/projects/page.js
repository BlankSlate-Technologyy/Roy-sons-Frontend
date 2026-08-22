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

const SIGNATURE_PROJECTS = [
  {
    name: "Thar Desert 100,000-Hectare Afforestation Green Wall",
    category: "Government Authorities",
    location: "Mithi, Islamkot & Chachro Corridors, Thar Desert, Sindh",
    status: "Completed – 2.5 Million Native Trees Planted",
    desc: "Large-scale ecological restoration project establishing a 100,000-hectare green wall barrier against desertification, supported by automated seeding drones and solar-powered subsurface drip irrigation.",
    specs: ["Trees: 2,500,000 Native Acacia, Kandi & Ber Saplings", "Survival: 97.4% High Plant Survival Rate Over 4 Years", "Carbon: Estimated 140,000 Tons CO2e Sequestered Annually"],
    image: "/desertdev_hero_rehab.svg",
    tag: "Green Wall Corridor",
  },
  {
    name: "Cholistan Deep Aquifer Solar Irrigation Grid",
    category: "Agriculture & Farming",
    location: "Derawar Fort & Rohi Basin, Cholistan Desert, Punjab",
    status: "Completed – 18 Solar Deep Tube Wells Operational",
    desc: "Installation of 18 solar photovoltaic deep aquifer extraction stations, brackish water reverse osmosis desalination units, and communal livestock hydration points.",
    specs: ["Discharge: 2,200,000 Gallons Per Day Clean Potable Water", "Farming: 8,000 Hectares of Date Palm & Arid Fodder Irrigated", "Power: 100% Off-Grid 240 kW Solar PV Field Array"],
    image: "/desertdev_hero_rehab.svg",
    tag: "Solar Hydrology",
  },
  {
    name: "Gwadar Coastal Dune Stabilization & Mangrove Nursery",
    category: "Infrastructure Developers",
    location: "Marine Drive Coastal Corridor & Free Zone, Gwadar",
    status: "Completed – 15,000 Hectares Coastal Sand Fixed",
    desc: "Deploying mechanical straw checkerboards, biological microbial crumbing, and salt-tolerant coastal halophyte vegetation to protect Gwadar Free Zone highways and ports.",
    specs: ["Dunes: 15,000 Hectares of Shifting Coastal Sand Stabilized", "Flora: 400,000 Avicennia Marina Mangroves & Halophytes Planted", "Infrastructure: Zero Sand Ingress on Port Access Expressways"],
    image: "/desertdev_hero_rehab.svg",
    tag: "Coastal Stabilization",
  },
  {
    name: "Thal Desert Arid Agro-Forestry & Olive Orchard Basin",
    category: "Agriculture & Farming",
    location: "Bhakkar, Layyah & Mankera Districts, Thal Desert, Punjab",
    status: "Completed – 20,000 Hectares Reclaimed for Farming",
    desc: "Reclaiming hypersaline desert scrubland into high-yield commercial Spanish and Italian olive orchards, date palms, and jojoba plantations utilizing organic biochar amending.",
    specs: ["Area: 20,000 Hectares Barren Scrub Converted to Fertile Land", "Orchards: 650,000 High-Yield Olive Trees Producing Extra Virgin Oil", "Water: 80% Reduction in Water Use via Subsurface Drip"],
    image: "/desertdev_hero_rehab.svg",
    tag: "Olive Agro-Forestry",
  },
  {
    name: "Superhighway M-9 Desert Green Corridor & Windbreaks",
    category: "Infrastructure Developers",
    location: "Karachi-Hyderabad Motorway M-9 Trans-Arid Corridor",
    status: "Completed – 120 km Highway Linear Forest Belt",
    desc: "Planting multi-tier continuous shelterbelts along both sides of the M-9 motorway to arrest crosswind sand drift, improve driver visibility, and lower ambient roadside temperatures.",
    specs: ["Length: 120 Kilometers Continuous Multi-Row Shelterbelt", "Trees: 800,000 Fast-Growing Conocarpus & Tamarisk Trees", "Safety: 99% Reduction in Sand Accumulation on Highway Lanes"],
    image: "/desertdev_hero_rehab.svg",
    tag: "Highway Shelterbelt",
  },
  {
    name: "Chagai Copper-Gold Mining Corridor Ecological Remediation",
    category: "Mining & Industrial",
    location: "Reko Diq & Saindak Mineral Corridor, Chagai, Balochistan",
    status: "Active Execution – Mine Buffer Zone Revegetation",
    desc: "Comprehensive environmental remediation of heavy metal tailings, application of eco-friendly bio-polymer dust binders, and re-establishment of native desert gazelle habitats.",
    specs: ["Remediation: 12,000 Hectares Mining Buffer Zone Restored", "Dust Control: Bio-Polymer Sealants Reducing PM10 Dust by 98%", "Monitoring: IoT Soil Micro-Chemistry & Groundwater Piezometers"],
    image: "/desertdev_hero_rehab.svg",
    tag: "Mining Remediation",
  },
];

export default function DesertDevProjectsPage() {
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
    <main className="min-h-screen bg-white text-[#425C52] font-sans antialiased overflow-x-hidden">
      <DesertDevNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Landmark Environmental Deployments</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkGreen }}>
              Signature Desert Projects &amp; <span style={{ color: theme.primary }}>Ecological Case Studies</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark environmental achievements across the Thar Desert Afforestation Belt, Cholistan Solar Hydrology Grid, Gwadar Coastal Dune Stabilization, and Thal Desert Agro-Forestry Basins.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search case studies by name, sector, or region..."
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

      {/* Category Filter Pills */}
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

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.name}
                className="dd-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1B4D3E]" style={{ borderColor: theme.border }}>
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black" style={{ color: theme.darkGreen }}>
                        {proj.name}
                      </h3>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#1B4D3E]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#1B4D3E]/10 text-[#1B4D3E]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(212, 229, 221, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.darkGreen }}>
                        Ecological &amp; Engineering Metrics:
                      </p>
                      {proj.specs.map((s) => (
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
                    <span>Request Full Environmental Case Study</span>
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
                NEED LARGE-SCALE ARID LAND RESTORATION OR ENVIRONMENTAL MITIGATION?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.darkGreen }}>
                Partner With Pakistan&apos;s Foremost Desert Engineering Firm
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From satellite GIS topographical surveys and deep aquifer solar drilling to mega-afforestation nurseries and multi-year maintenance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/desert-development/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Project Proposal</span>
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
