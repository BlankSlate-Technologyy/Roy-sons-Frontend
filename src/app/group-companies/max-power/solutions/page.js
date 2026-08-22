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
  Wrench,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
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
  "Battery Storage (BESS)",
  "Co-Generation Power Plants",
  "Switchgear & SCADA",
];

const POWER_SOLUTIONS = [
  {
    name: "MaxSolar Utility 100MW Photovoltaic Farm EPC",
    category: "Utility Solar Farms",
    specs: ["Capacity: 50MW – 200MW Utility", "Modules: Tier-1 Bifacial Monocrystalline", "Tracking: AI Smart Single-Axis Trackers"],
    desc: "Complete turnkey design, procurement, civil construction, and 132kV grid connection for mega utility solar photovoltaic parks across Pakistan.",
    image: "/max_power_hero_energy.svg",
    tag: "Utility Solar EPC",
  },
  {
    name: "MaxGrid 220kV / 132kV AIS & GIS Substation Package",
    category: "High-Voltage Substations",
    specs: ["Voltage: 132kV / 220kV / 500kV", "Transformers: Up to 250 MVA Step-Up", "Protection: Redundant Numerical Relays"],
    desc: "Engineered high-voltage transmission substations featuring air-insulated (AIS) or compact gas-insulated (GIS) switchgear with automated SCADA control.",
    image: "/max_power_hero_energy.svg",
    tag: "High-Voltage Substations",
  },
  {
    name: "MaxStorage PowerVault 10MWh Containerized BESS",
    category: "Battery Storage (BESS)",
    specs: ["Capacity: 5 MWh – 50 MWh Scalable", "Battery: Tier-1 LFP (6,000+ Cycles)", "Response: < 20 Milliseconds Sub-Second"],
    desc: "Utility-scale containerized battery energy storage systems engineered for frequency response, peak load shaving, and renewable intermittency smoothing.",
    image: "/max_power_hero_energy.svg",
    tag: "Utility-Scale BESS",
  },
  {
    name: "MaxGen Industrial 50MW Captive Co-Generation Plant",
    category: "Co-Generation Power Plants",
    specs: ["Configuration: Combined-Cycle Gas Engine", "Efficiency: ≥ 85% Total Combined Thermal", "Steam: Heat Recovery Steam Generator (HRSG)"],
    desc: "High-efficiency captive power generation blocks designed for textile mills, chemical manufacturing, and heavy steel fabrication complexes.",
    image: "/max_power_hero_energy.svg",
    tag: "Industrial Co-Gen",
  },
  {
    name: "MaxSwitch 11kV / 33kV Vacuum Circuit Breaker Switchgear",
    category: "Switchgear & SCADA",
    specs: ["Rating: 11kV – 33kV, 630A – 4000A", "Short-Circuit: 31.5 kA for 3 Seconds", "Standard: IEC 62271-200 Type-Tested"],
    desc: "Metal-clad indoor and outdoor vacuum switchgear panels engineered for extreme industrial duty, substation control, and feeder distribution.",
    image: "/max_power_hero_energy.svg",
    tag: "Medium-Voltage Switchgear",
  },
  {
    name: "MaxSCADA Enterprise Energy Management Platform",
    category: "Switchgear & SCADA",
    specs: ["Protocol: IEC 61850 & Modbus TCP/IP", "Telemetry: Fiber Optic & Satellite Redundancy", "Analytics: AI-Driven Peak Load Forecasting"],
    desc: "Comprehensive plant and grid-level SCADA software allowing centralized real-time telemetry, automated generation dispatch, and protection monitoring.",
    image: "/max_power_hero_energy.svg",
    tag: "Grid SCADA Automation",
  },
];

export default function MaxPowerSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = POWER_SOLUTIONS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#2D3748] font-sans antialiased overflow-x-hidden">
      <MaxPowerNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Engineered Systems &amp; Hardware Packages</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Turnkey Power Systems &amp; <span style={{ color: theme.navy }}>Hardware Solutions</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Supplying utility-scale solar packages, 220kV/132kV grid substations, industrial containerized BESS battery systems, and type-tested medium-voltage switchgear.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search solutions (e.g. Solar 100MW, 220kV Substation, BESS, Switchgear)..."
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

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prod) => (
              <div
                key={prod.name}
                className="max-power-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0E4B7E]" style={{ borderColor: theme.border }}>
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
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(210, 224, 236, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Technical Specifications:
                      </p>
                      {prod.specs.map((s) => (
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
                    <span>Request Engineering Datasheet</span>
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
                CUSTOM POWER PACKAGES &amp; TENDER BIDDING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Require Specialized High-Voltage Equipment Supply?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide OEM and turnkey EPC equipment packages for NTDC, DISCOs, K-Electric, and private independent power producers (IPPs).
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-power/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request B2B Equipment Quote</span>
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
