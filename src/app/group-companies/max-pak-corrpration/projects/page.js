"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Settings,
  Package,
  ClipboardList,
  Wrench,
  Truck,
  HardHat,
  Building2,
  Factory,
  Zap,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import {
  theme,
  MaxPakNavbar,
  MaxPakFooter,
  SectionLabel,
  SectionHeading,
} from "../components/MaxPakShared";

const CATEGORIES = [
  "All",
  "Power & Energy",
  "Marine & Ports",
  "Highway & Infrastructure",
  "Oil & Gas Petrochemical",
  "Automotive & Manufacturing",
  "Chemical & Processing",
];

const SIGNATURE_PROJECTS = [
  {
    name: "1,200 MW Combined Cycle Power Plant Equipment Package",
    category: "Power & Energy",
    location: "Delivery: Haveli Bahadur Shah & Balloki Megawatt Power Complex",
    status: "Completed – Turnkey Switchgear & High-Pressure Pumps Supplied",
    desc: "Complete procurement and site delivery of 132kV gas-insulated switchgear, high-pressure multistage boiler feed pumps, and 12,000 metric tons of structural steel framing.",
    specs: ["Equipment: 132kV GIS Switchgear & 50 MVA Power Transformers", "Structural: 12,000 Metric Tons ASTM Structural Steel Framing", "Reliability: Zero Lost-Time Incidents During 18-Month Deployment"],
    image: "/maxpak_hero_industrial.svg",
    tag: "Power Plant Supply",
  },
  {
    name: "CPEC Gwadar Deepwater Port Cranes & Structural Steel",
    category: "Marine & Ports",
    location: "Delivery: Port Terminal & Free Zone Infrastructure, Gwadar",
    status: "Completed – Heavy Marine Gantry Steel & Linepipe Delivered",
    desc: "Supplying marine-grade epoxy coated structural columns, heavy container crane track rails, and API-5L Grade B carbon steel fuel linepipes for port expansion.",
    specs: ["Structural: 8,500 Tons Heavy Maritime-Grade Steel Profiles", "Coating: Marine Splash-Zone Anti-Corrosion Barrier Epoxies", "Inspection: 100% Ultrasonic & Radiographic NDT Weld Verification"],
    image: "/maxpak_hero_industrial.svg",
    tag: "Port Infrastructure",
  },
  {
    name: "National Motorway M-5 Infrastructure Rebar & Cement",
    category: "Highway & Infrastructure",
    location: "Delivery: Sukkur-Multan Motorway Trans-Regional Highway Corridor",
    status: "Completed – 50,000 Metric Tons ASTM Grade 60 Rebar Supplied",
    desc: "Continuous scheduled delivery of 50,000 tons ASTM A615 Grade 60 deformed rebar, bridge expansion joints, and high-early-strength Portland cement.",
    specs: ["Volume: 50,000 Metric Tons Deformed Steel Rebar (Grade 60)", "Logistics: Daily Scheduled Multi-Axle Fleet Drops Over 392 km", "Quality: Verified by National Highway Authority (NHA) Materials Lab"],
    image: "/maxpak_hero_industrial.svg",
    tag: "Highway Rebar",
  },
  {
    name: "Hydrocracker Oil Refinery High-Pressure Valves & Pipes",
    category: "Oil & Gas Petrochemical",
    location: "Delivery: Coastal Oil Refining & Processing Complex, Karachi",
    status: "Completed – API-5L X65 Heavy-Wall Linepipe Package",
    desc: "Procurement of API-5L Grade X65 seamless high-temperature linepipes, Class 2500 forged steel motor-operated valves, and stainless steel heat exchanger tubes.",
    specs: ["Piping: 45 Kilometers API-5L Seamless Heavy-Wall Linepipe", "Valves: ANSI Class 1500 & 2500 Motor-Actuated Gate & Globe Valves", "Certifications: 3.1 Mill Test Certificates & DataFlow Inspection"],
    image: "/maxpak_hero_industrial.svg",
    tag: "Refinery Piping",
  },
  {
    name: "Automated Automotive Assembly Machinery & Robot Cells",
    category: "Automotive & Manufacturing",
    location: "Delivery: Port Qasim Automotive Industrial Zone, Karachi",
    status: "Completed – 5-Axis Stamping & Robotic Welding Fitout",
    desc: "Turnkey delivery, rigging, and installation supervision of 5-axis hydraulic stamping press lines, 24 robotic spot-welding cells, and overhead chain conveyor systems.",
    specs: ["Machinery: 2,000-Ton Hydraulic Stamping Press & 24 Robotic Cells", "Automation: Integrated Siemens PLC & SCADA Process Synchronization", "Commissioning: 100% On-Time Production Ramp-Up Verification"],
    image: "/maxpak_hero_industrial.svg",
    tag: "Automotive Plant",
  },
  {
    name: "Mega Chemical Plant Air Compressors & Stainless Vessels",
    category: "Chemical & Processing",
    location: "Delivery: Sundar Industrial Estate Chemical Complex, Lahore",
    status: "Active Execution – Complete Utility Plant Supply",
    desc: "Supply of 350 kW VFD oil-free rotary screw compressor systems, refrigerated air dryers, stainless steel 316L chemical reaction tanks, and flame-proof motors.",
    specs: ["Air Plant: 4 x 350 kW High-Efficiency Oil-Free Screw Compressors", "Vessels: 12 x 50,000-Liter Stainless Steel 316L Chemical Reactors", "Safety: ATEX / IECEx Certified Explosion-Proof Electrical Switchgear"],
    image: "/maxpak_hero_industrial.svg",
    tag: "Chemical Plant Supply",
  },
];

export default function MaxPakProjectsPage() {
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
      <MaxPakNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Landmark Industrial Deployments</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Signature Procurement Projects &amp; <span style={{ color: theme.green }}>Case Studies</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark industrial achievements across 1,200 MW combined cycle power plants, CPEC deepwater ports, national motorway structural rebar, and automated automotive manufacturing assembly lines.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search case studies by name, sector, or project location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] transition-all bg-white shadow-xs"
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
                      ? "bg-[#1B365D] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#1B365D]"
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
                className="mp-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1B365D]" style={{ borderColor: theme.border }}>
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
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#1B365D]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#1B365D]/10 text-[#1B365D]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Supply Deliverables &amp; Volume Metrics:
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
                    href="/group-companies/max-pak-corrpration/contact"
                    className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request Full Case Study &amp; MTC Logs</span>
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
                NEED HEAVY INDUSTRIAL SOURCING FOR A MEGA-DEVELOPMENT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Partner With Pakistan&apos;s Foremost Industrial Trading Firm
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From verified manufacturer mill test certificates and third-party inspection to bonded freight clearance and guaranteed JIT deliveries.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-pak-corrpration/contact"
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

      <MaxPakFooter />
    </main>
  );
}
