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
];

const SIGNATURE_PROJECTS = [
  {
    name: "Islamabad South Smart City Master Development",
    category: "Smart Megacities",
    location: "M-2 Motorway Interchange, Capital Territory",
    status: "Active Execution – 3,500 Hectares Phase 1 & 2",
    desc: "A futuristic smart metropolis master planned for 500,000 residents featuring subterranean common service duct tunnels, sponge stormwater retention lakes, and an AI-managed Municipal Command Center.",
    specs: ["Area: 3,500 Hectares Greenfield Sustainable Smart Metropolis", "Infrastructure: 100% Underground Utilities & Common Walkable Service Ducts", "Certifications: LEED for Cities & Communities Platinum Certified"],
    image: "/neomcity_hero_urban.svg",
    tag: "Smart Megacity",
  },
  {
    name: "Lahore Financial Center & Business Bay Hub",
    category: "Financial Districts",
    location: "Main Boulevard Gulberg & CBD Corridor, Lahore",
    status: "Active Execution – 18 Commercial High-Rise Towers",
    desc: "High-density Grade-A commercial district housing international banking headquarters, corporate technology hubs, centralized 25,000 TR district cooling, and a 6,000-bay automated parking silo.",
    specs: ["Density: 18 High-Rise Commercial Towers (Up to G+48 Floors)", "Efficiency: Centralized District Cooling Reducing Power Draw by 38%", "Mobility: Grade-Separated Skywalks Connecting All Corporate Towers"],
    image: "/neomcity_hero_urban.svg",
    tag: "CBD Financial Center",
  },
  {
    name: "Gwadar Free Trade Zone & Coastal Logistics SEZ",
    category: "Industrial SEZs",
    location: "CPEC Coastal Highway & Deep-Sea Port, Gwadar",
    status: "Operational – 1,200 Acres Customs Bonded Zone",
    desc: "Master planning and civil development of a modern coastal Special Economic Zone featuring heavy container expressways, bonded customs warehouses, a 132kV dedicated grid, and reverse osmosis seawater desalination.",
    specs: ["Scale: 1,200 Acres Customs-Bonded Manufacturing & Logistics Zone", "Utilities: 5 MGD Seawater RO Desalination & Dedicated Substation", "Pavements: Heavy Concrete Highways Engineered for 60-Ton Trailers"],
    image: "/neomcity_hero_urban.svg",
    tag: "Coastal Logistics SEZ",
  },
  {
    name: "Rawalpindi Autonomous Mass Transit BRT Corridor",
    category: "Transit & Mobility",
    location: "Metro Arterial Transit Corridor (32 km)",
    status: "Operational – 180,000 Commuters Daily Capacity",
    desc: "A 32-kilometer dedicated grade-separated Bus Rapid Transit (BRT) and autonomous electric shuttle corridor with 24 intelligent transit stations powered by rooftop solar PV canopies.",
    specs: ["Length: 32 km Grade-Separated Elevated & At-Grade Dedicated Corridor", "Stations: 24 Smart Climate-Controlled Multi-Modal Transit Hubs", "Signaling: AI Traffic Preemption Providing 100% Green Signal Wave"],
    image: "/neomcity_hero_urban.svg",
    tag: "Smart Transit Network",
  },
  {
    name: "Faisalabad Eco-Industrial Park & Solar Microgrid",
    category: "Industrial SEZs",
    location: "M-3 Industrial City, Sahianwala, Punjab",
    status: "Operational – 850 Acres Sustainable Industrial Park",
    desc: "Specialized textile and chemical export manufacturing zone equipped with a centralized 10 MGD biological effluent treatment plant, 45 MW industrial solar array, and zero hazardous discharge compliance.",
    specs: ["Environment: 100% Industrial Effluent Treated & Recycled for Industry", "Clean Power: 45 MW Rooftop & Ground-Mount Solar PV Microgrid", "Compliance: Zero Hazardous Discharge EPA Platinum Standard"],
    image: "/neomcity_hero_urban.svg",
    tag: "Eco-Industrial SEZ",
  },
  {
    name: "Karachi Smart Coastal Maritime Business District",
    category: "Smart Megacities",
    location: "Port Qasim & Waterfront Zone, Karachi",
    status: "Active Execution – 500 Hectares Waterfront Master Plan",
    desc: "Reclaimed smart maritime district integrating luxury residential towers, commercial maritime headquarters, international cruise terminals, and engineered ecological flood-barrier seawalls.",
    specs: ["Scale: 500 Hectares Reclaimed Coastal Smart Business Waterfront", "Resilience: Marine Geotechnical Seawalls Resisting Category 4 Storm Surges", "Amenities: 12 km Shaded Public Marine Boardwalk & Marina Berths"],
    image: "/neomcity_hero_urban.svg",
    tag: "Waterfront District",
  },
];

export default function NeomCityProjectsPage() {
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
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomCityNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Urban Mega Developments</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Landmark Smart Developments &amp; <span style={{ color: theme.teal }}>Urban Deployments</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark smart city master concessions, commercial financial skyscraper districts, Special Economic Zones (SEZs), autonomous transit corridors, and coastal maritime zones across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search developments by name, sector, or location..."
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

      {/* Category Filter Pills */}
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

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.name}
                className="neom-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0A2540]" style={{ borderColor: theme.border }}>
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
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#0A2540]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#0A2540]/10 text-[#0A2540]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Technical Parameters &amp; Impact:
                      </p>
                      {proj.specs.map((s) => (
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
                    <span>Request Full Project Master Plan</span>
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
                NEED TURNKEY URBAN MASTER PLANNING OR CONCESSION STRUCTURING?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Partner With Pakistan&apos;s Leading Smart City Corporation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From spatial GIS demographic modeling to heavy civil construction, LEED green building certifications, and digital twin municipal management.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/neom-city/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Project Proposal</span>
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
