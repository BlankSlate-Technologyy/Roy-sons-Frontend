"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Ship,
  Truck,
  FileText,
  Search,
  PackageCheck,
  ClipboardList,
  Building2,
  Factory,
  Zap,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Award,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  InverseUnionNavbar,
  InverseUnionFooter,
  SectionLabel,
  SectionHeading,
} from "../components/InverseUnionShared";

const CATEGORIES = [
  "All",
  "Construction & Infrastructure",
  "Manufacturing & Heavy Plants",
  "Oil, Gas & Petrochemicals",
  "Agriculture & Commodities",
  "Energy & Power",
];

const SIGNATURE_PROJECTS = [
  {
    name: "CPEC Motorway Heavy Equipment Procurement",
    category: "Construction & Infrastructure",
    location: "Origin: Shanghai, China -> Destination: Port of Karachi & Gwadar",
    status: "Completed – 85 Heavy Machinery Units Dispatched",
    desc: "Turnkey procurement, pre-shipment SGS inspection, chartered breakbulk ocean vessel shipping, and customs clearance for 85 heavy hydraulic excavators, bulldozers, and asphalt paving plants.",
    specs: ["Machinery: 85 Tier-1 Certified Earthmoving & Road Paving Units", "Shipping: Dedicated Heavy-Lift Breakbulk Ocean Vessel Charter", "Clearance: 100% Green Channel Expedited Customs Release"],
    image: "/inverseunion_hero_trade.svg",
    tag: "Heavy Machinery",
  },
  {
    name: "National Grid 500kV High-Voltage Transformer Consignment",
    category: "Energy & Power",
    location: "Origin: Frankfurt, Germany -> Destination: Multan & Lahore Substations",
    status: "Completed – 12 Extra-Heavy Power Transformers",
    desc: "Coordinating precision international heavy-lift ocean shipping and specialized multi-axle hydraulic road transport for twelve 180-ton 500kV grid transformers.",
    specs: ["Payload: 12 Units (180 Tons Per Transformer Extra-Heavy Cargo)", "Routing: Ocean Vessel to Karachi Port -> Multi-Axle Road Convoys", "Compliance: Zero-Vibration Transport with Accelerometer Telemetry"],
    image: "/inverseunion_hero_trade.svg",
    tag: "Grid Power Trade",
  },
  {
    name: "Strategic Grain Food Reserve 250,000 MT Procurement",
    category: "Agriculture & Commodities",
    location: "Origin: Constanta, Romania -> Destination: Port Qasim Silos",
    status: "Completed – 5 Bulk Panamax Cargo Vessels",
    desc: "International bulk procurement, chartering of 5 Panamax bulk cargo vessels, and rapid pneumatic discharge of 250,000 metric tons of premium milling wheat.",
    specs: ["Volume: 250,000 Metric Tons of Grade-1 Milling Wheat", "Assay: SGS Certified Clean Protein > 12.5% & Low Moisture", "Discharge: 10,000 MT / Day High-Speed Port Pneumatic Unloading"],
    image: "/inverseunion_hero_trade.svg",
    tag: "Bulk Agri-Grain",
  },
  {
    name: "Petrochemical Gas Pipeline API 5L Casing Consignment",
    category: "Oil, Gas & Petrochemicals",
    location: "Origin: Ulsan, South Korea -> Destination: Sui Gas Field Corridor",
    status: "Completed – 120 km High-Pressure Seamless Pipes",
    desc: "Direct procurement of 120 kilometers of API 5L Grade X65 seamless carbon steel pipeline casing, 3-layer polyethylene anti-corrosion coating, and ultrasonic NDT testing.",
    specs: ["Specifications: 24-inch API 5L X65 PSL-2 Seamless Steel Casings", "Testing: 100% Non-Destructive Ultrasonic & Hydrostatic Tests", "Corrosion: 3LPE High-Density External Anti-Corrosion Wrap"],
    image: "/inverseunion_hero_trade.svg",
    tag: "Oilfield Casings",
  },
  {
    name: "Utility-Scale 200 MW Solar PV Module Import",
    category: "Energy & Power",
    location: "Origin: Ningbo, China -> Destination: Quaid-e-Azam Solar Park",
    status: "Completed – 650 High-Cube Containers",
    desc: "Consolidated ocean container shipping, freight insurance, customs tariff optimization, and container yard logistics for 380,000 Tier-1 N-Type TOPCon solar PV modules.",
    specs: ["Capacity: 200 Megawatt High-Efficiency Solar PV Installation", "Containers: 650 x 40ft High-Cube Shipping Containers Handled", "Clearance: Duty-Free Clean Energy SRO Customs Exemption"],
    image: "/inverseunion_hero_trade.svg",
    tag: "Solar Module Trade",
  },
  {
    name: "Automotive Assembly Plant CKD Kits Supply Chain",
    category: "Manufacturing & Heavy Plants",
    location: "Origin: Yokohama, Japan -> Destination: Port Qasim Auto Cluster",
    status: "Active Execution – Weekly Just-In-Time Container Dispatches",
    desc: "Managing a multi-year global supply chain contract providing weekly Just-In-Time (JIT) container shipments of complete knock-down (CKD) automotive assemblies.",
    specs: ["Cadence: 45 Containers Weekly Delivery Guarantee", "Inventory: Bonded Customs Warehousing with Barcode Batch Tracking", "Lead-Time: Zero Production Line Stoppage Over 3 Years"],
    image: "/inverseunion_hero_trade.svg",
    tag: "Automotive CKD",
  },
];

export default function InverseUnionProjectsPage() {
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
    <main className="min-h-screen bg-white text-[#4A5568] font-sans antialiased overflow-x-hidden">
      <InverseUnionNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Global Trade Deployments</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Signature Trade Deals &amp; <span style={{ color: theme.blue }}>Supply Chain Case Studies</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark international trade achievements across mega-infrastructure machinery imports, 500kV grid transformers, bulk strategic grain supply, petrochemical pipelines, and solar power plants.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search trade case studies by name, sector, or origin..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-sky-50/40" style={{ borderColor: theme.border }}>
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
                      ? "bg-[#0080FF] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#0080FF]"
                  }`}
                  style={{ borderColor: active ? theme.blue : theme.border }}
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
                className="iu-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0B2545]" style={{ borderColor: theme.border }}>
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
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#0080FF]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#0080FF]/10 text-[#0080FF]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Trade Logistics &amp; Compliance Details:
                      </p>
                      {proj.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#00D2C8]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/inverse&union/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-sky-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request Full Trade Case Study</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0080FF]">
                NEED INTERNATIONAL SOURCING OR CUSTOMS CLEARANCE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Partner With Pakistan&apos;s Leading Trade Facilitator
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From verified global supplier vetting and multi-modal container charters to port customs clearance and nationwide warehouse delivery.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/inverse&union/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Trade Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                style={{ borderColor: theme.blue, color: theme.blue }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <InverseUnionFooter />
    </main>
  );
}
