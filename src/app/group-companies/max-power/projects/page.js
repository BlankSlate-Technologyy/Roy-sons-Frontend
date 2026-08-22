"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Sun,
  Cpu,
  Battery,
  Radio,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
  Factory,
} from "lucide-react";
import {
  theme,
  MaxPowerNavbar,
  MaxPowerFooter,
  SectionLabel,
  SectionHeading,
} from "../components/MaxPowerShared";

const CATEGORIES = [
  "All",
  "Utility Solar Farms",
  "High-Voltage Substations",
  "Wind Energy Parks",
  "Industrial Co-Generation",
  "Grid-Scale BESS",
];

const SIGNATURE_PROJECTS = [
  {
    name: "100MW Quaid-e-Azam Solar Photovoltaic Park Expansion",
    category: "Utility Solar Farms",
    location: "Lal Sohanra, Bahawalpur Desert, Punjab",
    status: "Operational – Synchronized to National Grid",
    desc: "Turnkey EPC execution of 100MW utility solar PV plant utilizing Tier-1 bifacial panels, automated single-axis solar trackers, central inverter skids, and dedicated 132kV step-up substation.",
    specs: ["Capacity: 100 MWp Solar Photovoltaic", "Annual Output: 185 Million kWh Clean Power", "Substation: 132kV Step-Up Grid Yard"],
    image: "/max_power_hero_energy.svg",
    tag: "100MW Utility Solar",
  },
  {
    name: "220kV Gharo Wind Corridor Transmission Substation",
    category: "High-Voltage Substations",
    location: "Gharo-Jhimpir Wind Corridor, Thatta, Sindh",
    status: "Commissioned – 220kV/132kV GIS Grid",
    desc: "Construction of a heavy 220kV Gas-Insulated Switchgear (GIS) substation evacuating 300MW of renewable wind energy from private IPPs directly into the NTDC national transmission network.",
    specs: ["Voltage: 220kV / 132kV Dual Busbar", "Power Transformers: 2x 250 MVA Auto-Transformers", "Protection: Full IEC 61850 Substation Automation"],
    image: "/max_power_hero_energy.svg",
    tag: "220kV Wind Grid Substation",
  },
  {
    name: "50MW Captive Combined-Cycle Gas Turbine Plant",
    category: "Industrial Co-Generation",
    location: "Sundar Industrial Estate, Lahore",
    status: "Continuous 24/7 Industrial Baseload",
    desc: "Complete engineering and commissioning of 50MW high-efficiency gas reciprocating engine power block with Heat Recovery Steam Generators (HRSG) generating 60 tons/hr of industrial steam.",
    specs: ["Output: 50 MW Electrical + 60 Tons/hr Steam", "Efficiency: ≥ 86% Total Co-Gen Thermal", "Availability: 99.6% Continuous Baseload SLA"],
    image: "/max_power_hero_energy.svg",
    tag: "50MW Industrial Co-Gen",
  },
  {
    name: "20MWh National Grid BESS Storage & Frequency Pilot",
    category: "Grid-Scale BESS",
    location: "Sheikhupura 500kV Main Interconnection Hub",
    status: "Operational – Sub-Second Frequency Response",
    desc: "Pakistan's landmark containerized Battery Energy Storage System (BESS) delivering sub-20 millisecond synthetic inertia, primary frequency regulation, and transmission line congestion relief.",
    specs: ["Storage: 20 MWh / 10 MW Power Conversion", "Chemistry: Tier-1 Liquid-Cooled LFP Cells", "Response: < 20 Millisecond Instant Response"],
    image: "/max_power_hero_energy.svg",
    tag: "20MWh Grid BESS",
  },
  {
    name: "132kV Double-Circuit Overhead Transmission Line",
    category: "High-Voltage Substations",
    location: "M-3 Industrial City Economic Zone, Faisalabad",
    status: "Energized – 45 km Steel Lattice Corridor",
    desc: "Surveying, tower foundation casting, lattice tower erection, and ACSR Rail conductor stringing for 45 km double-circuit 132kV transmission line feeding the new industrial special economic zone.",
    specs: ["Length: 45 km Double-Circuit 132kV", "Towers: 140 Heavy Steel Lattice Pylons", "Capacity: 200 MVA Continuous Power Transfer"],
    image: "/max_power_hero_energy.svg",
    tag: "132kV Transmission Corridor",
  },
  {
    name: "30MW Distributed Industrial Rooftop Solar Microgrid",
    category: "Utility Solar Farms",
    location: "Port Qasim & Korangi Industrial Zones, Karachi",
    status: "Net-Metered Clean Industrial Solar",
    desc: "Multi-facility distributed solar photovoltaic rooftop microgrid across 12 heavy manufacturing warehouses and logistics centers with zero-export reverse power protection and smart inverters.",
    specs: ["Capacity: 30 MWp Total Across 12 Facilities", "Inverters: Smart String Inverters with Cloud Telemetry", "Carbon Offset: 42,000 Tons CO2 / Year"],
    image: "/max_power_hero_energy.svg",
    tag: "Industrial Rooftop Microgrid",
  },
];

export default function MaxPowerProjectsPage() {
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
    <main className="min-h-screen bg-white text-[#2D3748] font-sans antialiased overflow-x-hidden">
      <MaxPowerNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Landmark Energy Infrastructure</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Signature Power Projects &amp; <span style={{ color: theme.navy }}>Grid Stations</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark deployments across utility solar parks, 220kV transmission substations, industrial co-generation facilities, and national grid battery storage systems across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search projects by name, location, or voltage..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E4B7E] transition-all bg-white shadow-xs"
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
                      ? "bg-[#0E4B7E] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#0E4B7E]"
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
                className="max-power-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0E4B7E]" style={{ borderColor: theme.border }}>
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
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#0E4B7E]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#0E4B7E]/10 text-[#0E4B7E]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(210, 224, 236, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Engineering Metrics &amp; Scope:
                      </p>
                      {proj.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#F5A623]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/max-power/contact"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#D88E12]">
                DEVELOPING A HIGH-VOLTAGE INFRASTRUCTURE PROJECT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Partner With Pakistan&apos;s Leading Power EPC Enterprise
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From grid interconnection studies to high-voltage equipment procurement and commercial COD commissioning.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-power/contact"
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

      <MaxPowerFooter />
    </main>
  );
}
