"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  FileSearch,
  Sprout,
  Scale,
  Users2,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  TreePine,
  Wind,
  Droplets,
  Award,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  TDRCNavbar,
  TDRCFooter,
  SectionLabel,
  SectionHeading,
} from "../components/TDRCShared";

const CATEGORIES = [
  "All",
  "Desert Greening & Afforestation",
  "Water Resource Hydrology",
  "Climate Change Adaptation",
  "Biodiversity Corridors",
  "Rural Livelihoods",
];

const SIGNATURE_PROGRAMS = [
  {
    name: "Thal Desert Agro-Forestry & Sand Dune Stabilization",
    category: "Desert Greening & Afforestation",
    location: "Bhakkar, Layyah & Khushab Arid Corridors",
    status: "Active Field Program – 50,000+ Acres Greenery",
    desc: "Large-scale ecological restoration planting drought-hardy acacia, moringa, and olive shelterbelts to arrest desert encroachment and build living windbreaks around agricultural farmlands.",
    specs: ["Species: Acacia, Moringa, Ziziphus, Olive", "Area: 50,000+ Restored Arid Acres", "Impact: 60% Reduction in Sand Migration"],
    image: "/tdrc_hero_research.svg",
    tag: "Agro-Forestry & Afforestation",
  },
  {
    name: "Indus Basin Deep Aquifer Hydrological Monitoring Grid",
    category: "Water Resource Hydrology",
    location: "Thal Doab & Indus-Jhelum Interfluvial Basin",
    status: "Real-Time Telemetric Hydrological Mapping",
    desc: "Deployment of 120+ telemetric groundwater monitoring piezometers mapping aquifer drawdown, salinity stratification, and managed artificial aquifer recharge feasibility.",
    specs: ["Sensors: 120+ Telemetric Piezometers", "Data: Daily Water Table & Salinity Flux", "Beneficiaries: 500,000+ Water Consumers"],
    image: "/tdrc_hero_research.svg",
    tag: "Hydrology & Groundwater",
  },
  {
    name: "National Climate Resilience & Drought Early Warning",
    category: "Climate Change Adaptation",
    location: "Punjab, Sindh & Balochistan Arid Zones",
    status: "AI Climate Modeling & SMS Alerts",
    desc: "Integrating multi-spectral satellite remote sensing with predictive AI climate models to provide seasonal drought risk warnings and crop irrigation advisories to smallholder farmers.",
    specs: ["Coverage: 100,000+ Registered Farmers", "Frequency: Bi-Weekly Agro-Advisories", "Accuracy: 94% Precipitation Forecasting"],
    image: "/tdrc_hero_research.svg",
    tag: "Climate Modeling",
  },
  {
    name: "Arid Zone High-Efficiency Solar Micro-Drip Irrigation",
    category: "Water Resource Hydrology",
    location: "Chak 45/TDA, Bhakkar Research Sub-Station",
    status: "65% Water Efficiency Demonstration Farm",
    desc: "Pilot demonstration facility demonstrating solar-powered pressurized drip and bubbler irrigation for high-value arid orchards including citrus, dates, and pomegranates in desert soils.",
    specs: ["Water Savings: 65% Compared to Flood Irrigation", "Energy: 100% Off-Grid Solar Pumping", "Yield: 35% Higher Crop Output"],
    image: "/tdrc_hero_research.svg",
    tag: "High-Efficiency Irrigation",
  },
  {
    name: "Thal Ecological Wildlife & Biodiversity Corridor",
    category: "Biodiversity Corridors",
    location: "Greater Thal Desert Protected Sanctuaries",
    status: "Conservation & Species Restoration",
    desc: "Ecological research establishing protected wildlife migratory corridors, monitoring native flora regeneration, and safeguarding endangered desert fauna such as the Houbara bustard and chinkara gazelle.",
    specs: ["Habitat: 25,000 Hectares Protected Corridor", "Surveys: Annual Wildlife Census & Tagging", "Partners: WWF & Provincial Wildlife Dept"],
    image: "/tdrc_hero_research.svg",
    tag: "Wildlife Conservation",
  },
  {
    name: "Rural Women Moringa & Date Agro-Enterprise Incubator",
    category: "Rural Livelihoods",
    location: "Layyah & Muzaffargarh Rural Clusters",
    status: "Empowered 3,500+ Rural Women",
    desc: "Community-driven economic program providing solar dehydrators, quality packaging equipment, and direct market linkage training for organic moringa leaf powder and premium dried date products.",
    specs: ["Beneficiaries: 3,500+ Rural Households", "Income: +45% Average Household Revenue", "Certification: Organic Field Certification"],
    image: "/tdrc_hero_research.svg",
    tag: "Community Livelihoods",
  },
];

export default function TDRCProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = SIGNATURE_PROGRAMS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#0E1F17] font-sans antialiased overflow-x-hidden">
      <TDRCNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Flagship Research Initiatives</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.ink }}>
              Field Programs &amp; <span style={{ color: theme.primaryDark }}>Ecological Deployments</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Discover our active field research programs combatting desertification, monitoring Indus basin aquifers, developing climate drought warnings, and uplifting rural agrarian livelihoods.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search programs by name, location, or field..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9E54] transition-all bg-white shadow-xs"
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
                      ? "bg-[#1F7A3E] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#2E9E54]"
                  }`}
                  style={{ borderColor: active ? theme.primaryDark : theme.border }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prog) => (
              <div
                key={prog.name}
                className="tdrc-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={prog.image}
                      alt={prog.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0E1F17]" style={{ borderColor: theme.border }}>
                        {prog.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black" style={{ color: theme.ink }}>
                        {prog.name}
                      </h3>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#2E9E54]" />
                      <span>{prog.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#2E9E54]/10 text-[#1F7A3E]">
                        {prog.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {prog.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(225, 233, 227, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.ink }}>
                        Program Metrics &amp; Impact:
                      </p>
                      {prog.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#2E9E54]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/TDRC/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.ink }}
                  >
                    <span>Request Program Case Study</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#1F7A3E]">
                DEVELOPMENT PARTNERSHIP &amp; DONOR COLLABORATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.ink }}>
                Scale Impactful Field Programs Across Pakistan
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Partner with TDRC to implement USAID, World Bank, UNDP, and government-funded ecological and community development initiatives.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/TDRC/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryDark }}
              >
                <span>Partner With TDRC</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.ink, color: theme.ink }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <TDRCFooter />
    </main>
  );
}
