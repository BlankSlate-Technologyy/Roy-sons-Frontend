"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Battery,
  Truck,
  Sun,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  PlugZap,
  Award,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  GTXNavbar,
  GTXFooter,
  SectionLabel,
  SectionHeading,
} from "../components/GTXShared";

const CATEGORIES = [
  "All",
  "Highway Fast Charging Corridors",
  "Fleet Electrification Depots",
  "Smart City Networks",
  "Solar EV Hubs",
  "Commercial Malls",
];

const SIGNATURE_PROJECTS = [
  {
    name: "National Motorway M-2 / M-3 EV Fast Charging Corridor",
    category: "Highway Fast Charging Corridors",
    location: "Sukheke, Bhera, Sial Mor & Kalar Kahar Service Areas",
    status: "Operational – 24/7 Ultra-Fast Charging",
    desc: "Deployment of 360kW liquid-cooled ultra-fast DC chargers with integrated solar PV canopies and 1MWh BESS energy storage buffers across Pakistan's primary intercity motorway network.",
    specs: ["Chargers: 360kW Dual Liquid-Cooled Guns", "Storage: 1MWh BESS Buffer", "Turnaround: 12-Min Rapid Charging"],
    image: "/gtx_hero_ev_mobility.svg",
    tag: "Motorway Fast Corridor",
  },
  {
    name: "Capital Smart City Urban EV Network",
    category: "Smart City Networks",
    location: "Main Boulevard & Commercial Zones, Islamabad",
    status: "50+ Stations Connected via Cloud CMS",
    desc: "Comprehensive smart city charging deployment featuring 120kW DC fast chargers and 22kW AC wallboxes with integrated mobile app reservations and automated digital payments.",
    specs: ["Network: 50+ Connected EV Chargers", "Software: OCPP 2.0.1 Cloud Management", "Payment: JazzCash, Easypaisa, Credit Cards"],
    image: "/gtx_hero_ev_mobility.svg",
    tag: "Smart City Infrastructure",
  },
  {
    name: "Commercial Logistics Fleet Electrification Depot",
    category: "Fleet Electrification Depots",
    location: "Multan Road Industrial Gateway, Lahore",
    status: "Electrified 120+ Commercial Vans",
    desc: "Turnkey logistics depot equipped with automated overnight staggered charging schedules, power load balancing, and real-time battery state-of-health monitoring for delivery vehicles.",
    specs: ["Depot Capacity: 60 Simultaneous Commercial Vans", "Management: Dynamic Load Balancing", "Uptime SLA: 99.9% Operational Guarantee"],
    image: "/gtx_hero_ev_mobility.svg",
    tag: "Fleet Logistics Depot",
  },
  {
    name: "Financial District Corporate Solar EV Hub",
    category: "Solar EV Hubs",
    location: "I.I. Chundrigar Road / Clifton Commercial, Karachi",
    status: "Zero-Carbon Solar EV Canopy",
    desc: "Architectural 150kW bifacial solar carport powering 12 commercial EV charging bays for executive office towers with surplus clean electricity fed into the building grid.",
    specs: ["Solar PV: 150kW Bifacial Rooftop Canopy", "Chargers: 8x 22kW AC + 2x 120kW DC", "Carbon Offset: 180 Tons CO2 / Year"],
    image: "/gtx_hero_ev_mobility.svg",
    tag: "Corporate Solar Hub",
  },
  {
    name: "International Airport VIP Electric Shuttle Hub",
    category: "Fleet Electrification Depots",
    location: "Allama Iqbal International Airport, Lahore",
    status: "High-Availability 180kW Fast Charging",
    desc: "Dedicated high-power DC fast charging infrastructure supporting airport ground-handling electric passenger shuttle buses and executive VIP electric fleet transfers.",
    specs: ["Chargers: 180kW High-Voltage DC Chargers", "Vehicles: Electric Passenger Buses & Shuttles", "Operation: 24/7 Continuous Mission-Critical"],
    image: "/gtx_hero_ev_mobility.svg",
    tag: "Airport Transit Infrastructure",
  },
  {
    name: "Emporium Mega Mall Retail Fast Charging Station",
    category: "Commercial Malls",
    location: "Johar Town Commercial Avenue, Lahore",
    status: "Public EV Destination Hub",
    desc: "High-traffic public retail charging station offering premium shopper EV charging with 120kW DC fast chargers and 22kW AC wallboxes with contactless NFC card payments.",
    specs: ["Bays: 10 Dedicated EV Parking Slots", "Chargers: 2x 120kW DC + 6x 22kW AC", "Footfall: 5,000+ Charges Monthly"],
    image: "/gtx_hero_ev_mobility.svg",
    tag: "Retail Destination Hub",
  },
];

export default function GTXProjectsPage() {
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
    <main className="min-h-screen bg-white text-[#202A36] font-sans antialiased overflow-x-hidden">
      <GTXNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Deployed EV Infrastructure</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
              Signature Projects &amp; <span style={{ color: theme.primary }}>Charging Networks</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark deployments across national motorways, smart cities, corporate fleet depots, and premier retail destinations powering Pakistan&apos;s electric mobility revolution.
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
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all bg-white shadow-xs"
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
                      ? "bg-[#16A34A] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#16A34A]"
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
                className="gtx-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#202A36]" style={{ borderColor: theme.border }}>
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
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#16A34A]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#16A34A]/10 text-[#16A34A]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(214, 226, 240, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.charcoal }}>
                        Engineering Specifications:
                      </p>
                      {proj.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#16A34A]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/GTX/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.charcoal }}
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#16A34A]">
                ELECTRIFY YOUR COMMERCIAL PREMISES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.charcoal }}>
                Partner With Pakistan&apos;s Leading EV Engineering Team
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From site assessment to high-voltage grid connection and monetization, we deliver complete turn-key charging infrastructure.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/GTX/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request Site Evaluation</span>
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

      <GTXFooter />
    </main>
  );
}
