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
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Sparkles,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import {
  theme,
  MaxPakNavbar,
  MaxPakFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/MaxPakShared";

const PROCUREMENT_SERVICES = [
  {
    id: "industrial-equipment",
    title: "Heavy Industrial Equipment & Machinery",
    subtitle: "CNC Machines, Turbines, Boilers & Automated Lines",
    desc: "Supplying precision industrial manufacturing machinery, high-pressure steam boilers, diesel/gas turbines, and automated processing lines from world-class global OEMs.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Machinery Trading",
    icon: Settings,
    deliverables: [
      "5-Axis CNC milling centers, heavy lathes, and metal fabrication machinery",
      "Industrial fire-tube & water-tube steam boilers certified to ASME Section I",
      "Gas and diesel power generation turbine sets from 500 kVA to 50 MVA",
      "Complete automated packaging, bottling, and conveyor distribution systems",
    ],
  },
  {
    id: "construction-materials",
    title: "Construction Materials & Structural Steel",
    subtitle: "ASTM A615 Rebar, H-Beams, Girders, Cement & Pipes",
    desc: "Bulk sourcing of certified deformed steel reinforcement rebar, structural universal columns, ERW/seamless carbon steel linepipes, and high-early-strength cement.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Structural Materials",
    icon: HardHat,
    deliverables: [
      "ASTM A615 / A706 Grade 60 deformed rebar with mill test certifications",
      "Wide-flange H-beams, structural channels, angles, and heavy steel plates",
      "API-5L and ASTM A106 Grade B carbon steel pipes, valves, and forged fittings",
      "Bulk Portland cement, micro-silica, ready-mix concrete, and aggregate supplies",
    ],
  },
  {
    id: "engineering-procurement",
    title: "Turnkey EPC Engineering Procurement",
    subtitle: "Global Vendor Sourcing, LC Financing & Quality Audits",
    desc: "End-to-end procurement management for mega civil and megawatt energy projects, managing global tenders, vendor pre-qualification, and quality inspections.",
    image: "/maxpak_hero_industrial.svg",
    tag: "EPC Procurement",
    icon: ClipboardList,
    deliverables: [
      "Comprehensive vendor pre-qualification and international factory audits",
      "Third-party Bureau Veritas / SGS quality testing and pre-shipment inspections",
      "Import letter of credit (LC), customs tariff optimization, and bonded clearance",
      "Consolidated material delivery schedules aligned with EPC project milestones",
    ],
  },
  {
    id: "heavy-machinery",
    title: "Heavy Earthmoving Machinery & Lifting Plants",
    subtitle: "Excavators, Wheel Loaders, Tower Cranes & Forklifts",
    desc: "Supplying new and certified refurbished heavy earthmoving equipment, 50-to-500-ton hydraulic mobile cranes, tower cranes, and material handling plant fleets.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Heavy Fleet",
    icon: Truck,
    deliverables: [
      "20-to-85-ton crawler hydraulic excavators with rock breakers and rippers",
      "Rough-terrain and all-terrain telescopic cranes up to 500-ton lifting capacity",
      "High-capacity articulated wheel loaders, motor graders, and vibratory rollers",
      "Heavy diesel and electric industrial forklifts, reach stackers, and telehandlers",
    ],
  },
  {
    id: "supply-chain",
    title: "Warehousing, Logistics & Supply Chain",
    subtitle: "Bonded Storage, Heavy Freight Transit & Just-In-Time Delivery",
    desc: "Operating modern central warehousing facilities in Lahore and Karachi with dedicated heavy transport trailer fleets for direct on-site project deliveries.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Supply Chain",
    icon: Package,
    deliverables: [
      "Strategic regional warehouses providing vendor-managed inventory (VMI)",
      "Dedicated multi-axle lowbed trailers transporting out-of-gauge heavy loads",
      "Real-time GPS tracking of industrial shipments from port to project site",
      "Just-in-Time (JIT) replenishment preventing site material congestion",
    ],
  },
  {
    id: "technical-support",
    title: "Technical Support, Commissioning & Spares",
    subtitle: "Installation Guidance, Predictive Maintenance & OEM Parts",
    desc: "Providing factory-trained mechanical and electrical engineers for equipment installation, commissioning, calibration, and long-term genuine spare parts buffer.",
    image: "/maxpak_hero_industrial.svg",
    tag: "Technical Support",
    icon: Wrench,
    deliverables: [
      "On-site mechanical and electrical machinery erection and commissioning",
      "Predictive vibration, thermographic, and oil analysis maintenance services",
      "Guaranteed emergency genuine OEM spare parts inventory within 24 hours",
      "Comprehensive operator technical training and safety operation manuals",
    ],
  },
];

const SERVICE_STATS = [
  { value: "30+", label: "Years Experience", icon: Award },
  { value: "10000+", label: "Products Supplied", icon: Package },
  { value: "2500+", label: "Completed Projects", icon: ClipboardCheck },
  { value: "99%", label: "On-Time Delivery", icon: ShieldCheck },
];

export default function MaxPakServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = PROCUREMENT_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <MaxPakNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Industrial Procurement &amp; Trading Divisions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Industrial Trading &amp; <span style={{ color: theme.navy }}>Procurement Capabilities</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From heavy industrial machinery and structural steel rebar to turnkey EPC engineering procurement, heavy earthmoving equipment fleets, and bonded warehousing, Max Pak Corporation delivers certified industrial supplies nationwide.
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
                  href="/group-companies/max-pak-corrpration/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Request Industrial RFQ</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/maxpak_hero_industrial.svg"
                  alt="Max Pak Corporation Industrial Divisions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091424]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.green }}>
                      Certified Procurement Divisions
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      Machinery · Structural Steel · Heavy Earthmoving Fleet
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
                  className="mp-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
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
            <SectionHeading center className="mb-4">Specialized Industrial Procurement Divisions</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Operating in full compliance with ISO 9001:2015 quality management, ASTM standards, and international engineering procurement practices.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search divisions (e.g. Machinery, Construction, Procurement, Fleet, Warehousing, Technical)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] transition-all bg-white shadow-xs"
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
                  className="mp-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1B365D]" style={{ borderColor: theme.border }}>
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

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#16A34A]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                          Division Specifications &amp; Standards:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#16A34A]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#16A34A]">
                CERTIFIED INDUSTRIAL TRADING &amp; COMMERCIAL SUPPLIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Procure Certified Industrial Materials With Confidence
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our senior procurement engineers to initiate bill of quantities (BOQ) review, mill test certifications, and scheduled batch shipments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-pak-corrpration/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Quotation</span>
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
