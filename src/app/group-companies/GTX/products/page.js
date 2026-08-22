"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Battery,
  Truck,
  Sun,
  PlugZap,
  LineChart,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
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
  "DC Fast Chargers",
  "AC Destination Chargers",
  "Battery Storage (BESS)",
  "Solar EV Carports",
  "Cloud CMS Software",
];

const EV_PRODUCTS = [
  {
    name: "GTX HyperCharge 360kW DC Ultra-Fast Station",
    category: "DC Fast Chargers",
    specs: ["Output Power: 360 kW (Dual CCS-2)", "Max Current: 500A Liquid-Cooled", "Voltage Range: 150V – 1000V DC"],
    desc: "Our flagship ultra-fast charging dispenser engineered for highway corridors and smart city hubs, delivering up to 300 km of driving range in 10–12 minutes.",
    image: "/gtx_hero_ev_mobility.svg",
    tag: "360kW Ultra-Fast",
  },
  {
    name: "GTX DualSpeed 120kW / 180kW DC Fast Charger",
    category: "DC Fast Chargers",
    specs: ["Output: 120kW / 180kW Modular", "Connectors: Dual CCS-2 / CHAdeMO", "Efficiency: ≥ 96.5% Peak"],
    desc: "Compact footprint DC fast charger ideal for fuel stations, shopping mall parking lots, and corporate office parks with dynamic power splitting between two vehicles.",
    image: "/gtx_hero_ev_mobility.svg",
    tag: "Commercial Fast Charger",
  },
  {
    name: "GTX ProWallbox 22kW Commercial AC Charger",
    category: "AC Destination Chargers",
    specs: ["Power: 22 kW Three-Phase AC", "Socket: Universal Type-2 Locking", "Access: RFID / NFC / QR Mobile App"],
    desc: "Heavy-duty destination charger for residential gated societies, hotels, and workplace fleet parking with integrated dynamic load management.",
    image: "/gtx_hero_ev_mobility.svg",
    tag: "AC Destination Charging",
  },
  {
    name: "GTX PowerVault 2MWh Industrial BESS Container",
    category: "Battery Storage (BESS)",
    specs: ["Capacity: 2 MWh – 5 MWh Scalable", "Battery: Tier-1 LFP (6,000+ Cycles)", "Thermal: Active Liquid Loop (25°C)"],
    desc: "Utility-scale containerized battery energy storage designed for high-power EV buffer charging, peak shaving, and renewable microgrid stabilization.",
    image: "/gtx_hero_ev_mobility.svg",
    tag: "Industrial BESS",
  },
  {
    name: "GTX SolarFleet Bifacial Photovoltaic EV Canopy",
    category: "Solar EV Carports",
    specs: ["Structure: Hot-Dip Galvanized Steel", "Panels: 600W+ High-Yield Bifacial", "Wind Rating: Certified up to 160 km/h"],
    desc: "Architectural solar carport canopy that generates clean on-site solar electricity while providing premium shaded parking for charging vehicles.",
    image: "/gtx_hero_ev_mobility.svg",
    tag: "Solar EV Carport",
  },
  {
    name: "GTX CloudConnect Charging Management Software",
    category: "Cloud CMS Software",
    specs: ["Protocol: OCPP 1.6J & OCPP 2.0.1", "Billing: JazzCash, Easypaisa, Credit Card", "Apps: White-Label iOS & Android"],
    desc: "Full-stack cloud telemetry platform allowing station operators to monitor real-time energy usage, set dynamic tariffs, and manage customer billing.",
    image: "/gtx_hero_ev_mobility.svg",
    tag: "Cloud Telemetry",
  },
];

export default function GTXProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = EV_PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#202A36] font-sans antialiased overflow-x-hidden">
      <GTXNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Hardware &amp; Software Catalog</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
              German-Engineered <span style={{ color: theme.primary }}>EV Chargers &amp; Battery Storage</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Supplying high-efficiency DC fast chargers, smart AC wallboxes, industrial containerized BESS battery systems, and cloud management software across Pakistan.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products (e.g. 360kW, DC Fast, BESS, Solar, Wallbox)..."
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

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prod) => (
              <div
                key={prod.name}
                className="gtx-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#202A36]" style={{ borderColor: theme.border }}>
                        {prod.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-3" style={{ color: theme.charcoal }}>
                      {prod.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {prod.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(214, 226, 240, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.charcoal }}>
                        Technical Specifications:
                      </p>
                      {prod.specs.map((s) => (
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
                    <span>Request Datasheet &amp; Pricing</span>
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
                VOLUME PROCUREMENT &amp; RESELLER PARTNERSHIP
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.charcoal }}>
                Looking For Bulk EV Charger Hardware Supply?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide OEM and distributor pricing for real estate developers, petroleum marketing companies (OMCs), and government infrastructure authorities.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/GTX/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request B2B Pricing</span>
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
