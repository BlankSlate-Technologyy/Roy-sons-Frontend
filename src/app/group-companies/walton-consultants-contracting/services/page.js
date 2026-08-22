"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Hammer,
  Truck,
  Layers,
  Wrench,
  ClipboardList,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  HardHat,
  Users2,
  Sparkles,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/WaltonShared";

const CONSTRUCTION_SERVICES = [
  {
    id: "civil-engineering",
    title: "Civil Engineering & Structural Superstructures",
    subtitle: "High-Rise Commercial Towers, RCC Frames & Deep Foundations",
    desc: "Executing complex reinforced concrete (RCC) structural superstructures, post-tensioned floor slabs, deep bored pile foundations, and architectural glass curtain walls.",
    image: "/walton_hero_construction.svg",
    tag: "Civil Superstructures",
    icon: Building2,
    deliverables: [
      "Deep rotary bored piling and diaphragm wall retention systems for deep basements",
      "High-strength post-tensioned (PT) concrete floor slabs maximizing column-free spans",
      "High-rise dual shear wall and moment-resisting frame seismic engineering to UBC-97",
      "Integrated double-glazed thermal curtain wall glazing and architectural cladding",
    ],
  },
  {
    id: "epc-projects",
    title: "Turnkey EPC Heavy Industrial Projects",
    subtitle: "End-to-End Engineering, Sourcing, Construction & Handover",
    desc: "Single-point turnkey EPC delivery for multi-acre industrial manufacturing plants, processing facilities, captive power plants, and industrial utility corridors.",
    image: "/walton_hero_construction.svg",
    tag: "Turnkey EPC Contracting",
    icon: Truck,
    deliverables: [
      "Process plant structural design, heavy machine dynamic vibration foundation casting",
      "Procurement and heavy mechanical rigging of industrial reactors, silos, and boilers",
      "High-voltage electrical substations, industrial piping networks, and fire safety rings",
      "Comprehensive testing, cold/hot dry runs, commissioning, and client staff training",
    ],
  },
  {
    id: "infrastructure-development",
    title: "Highways, Bridges & Transportation Corridors",
    subtitle: "Prestressed Concrete Girders, Flyovers & Highway Interchanges",
    desc: "Constructing multi-lane expressways, prestressed concrete highway bridges, railway overpasses, stormwater culverts, and heavy-duty asphalt pavements.",
    image: "/walton_hero_construction.svg",
    tag: "Highways & Infrastructure",
    icon: Layers,
    deliverables: [
      "High-speed asphalt paving utilizing Superpave performance grade bitumen designs",
      "Precast prestressed concrete I-girders and box-girder bridge construction",
      "Mechanically Stabilized Earth (MSE) retaining walls and bridge abutments",
      "Highway drainage networks, intelligent traffic telemetry, and toll plaza infrastructure",
    ],
  },
  {
    id: "industrial-construction",
    title: "Pre-Engineered Buildings (PEB) & Warehouses",
    subtitle: "Structural Steel Fabrication, Logistics Hubs & Cold Storage",
    desc: "Fabricating and erecting large-span pre-engineered steel buildings, logistics distribution warehouses, overhead crane gantries, and temperature-controlled storage.",
    image: "/walton_hero_construction.svg",
    tag: "PEB Steel Construction",
    icon: Wrench,
    deliverables: [
      "High-yield structural steel frame fabrication with automated submerged arc welding",
      "Clear-span steel portal frames up to 60 meters without internal support columns",
      "High-density insulated sandwich roof and wall cladding panels with fire ratings",
      "Heavy industrial concrete laser screed superflat floor slabs with quartz hardeners",
    ],
  },
  {
    id: "project-management",
    title: "Project Management & BIM QA/QC Supervision",
    subtitle: "Primavera P6 Scheduling, 3D BIM Coordination & Material Testing",
    desc: "Professional construction management ensuring strict budget compliance, milestone scheduling, automated clash detection, and independent concrete quality control.",
    image: "/walton_hero_construction.svg",
    tag: "BIM & Project Management",
    icon: ClipboardList,
    deliverables: [
      "3D BIM clash detection and 4D construction schedule sequencing simulations",
      "Critical Path Method (CPM) project scheduling and earned value cost telemetry",
      "On-site laboratory testing for concrete compressive strength, steel tensile rebar, and compaction",
      "Strict compliance with ISO 9001 and OSHA safety and environmental standards",
    ],
  },
  {
    id: "engineering-consultancy",
    title: "Engineering Consultancy & Feasibility Studies",
    subtitle: "Geotechnical Surveys, Structural Peer Reviews & BOQs",
    desc: "Providing technical advisory services including geotechnical core drilling, finite element structural analysis, environmental impact assessments (EIA), and tender BOQs.",
    image: "/walton_hero_construction.svg",
    tag: "Engineering Advisory",
    icon: Hammer,
    deliverables: [
      "Geotechnical soil boring, plate load tests, and seismic hazard micro-zonation studies",
      "ETABS / SAP2000 structural modeling, finite element analysis, and value engineering",
      "Comprehensive Bill of Quantities (BOQ) preparation and contractor tender evaluation",
      "Statutory building authority NOC approvals and environmental clearance documentation",
    ],
  },
];

const SERVICE_STATS = [
  { value: "25+", label: "Years Experience", icon: Award },
  { value: "350+", label: "Completed Projects", icon: Building2 },
  { value: "1200+", label: "Engineers on Staff", icon: Users2 },
  { value: "99%", label: "Delivery Success", icon: ShieldCheck },
];

export default function WaltonServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = CONSTRUCTION_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#3A4E63] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Civil Engineering &amp; General Contracting</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Comprehensive Construction Solutions For <span style={{ color: theme.navy }}>Infrastructure &amp; Industry</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From high-rise commercial towers and highway bridges to multi-acre turnkey industrial factories, structural steel PEBs, and BIM project management, Walton delivers uncompromised engineering quality.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore All 6 Divisions</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/walton-consultants-contracting/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Consult Chief Engineer</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/walton_hero_construction.svg"
                  alt="Walton Civil Construction Capabilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B30]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.goldHover }}>
                      Turnkey Civil Construction
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      Commercial High-Rises · Bridges · PEB Steel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="walton-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navyDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Our Core Divisions</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Engineering &amp; EPC Capabilities</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered in accordance with international Building Code of Pakistan (BCP), ACI 318, and ASTM standards.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search engineering services (e.g. Civil, High-Rise, Bridges, PEB, BIM)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E2A47] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="walton-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0E2A47]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.navy}10` }}>
                          <Icon size={20} style={{ color: theme.navy }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.navyDark }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#A6823B]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(216, 226, 236, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                          Key Engineering Deliverables:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#C5A059]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/walton-consultants-contracting/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navyDark }}
                    >
                      <span>Inquire About This Division</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A6823B]">
                TURNKEY CIVIL &amp; INDUSTRIAL CONTRACTING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Constructing A New Industrial Facility Or Commercial Tower?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our chief construction director to conduct architectural review, structural BOQ estimation, and construction scheduling.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Construction Proposal</span>
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

      <WaltonFooter />
    </main>
  );
}
