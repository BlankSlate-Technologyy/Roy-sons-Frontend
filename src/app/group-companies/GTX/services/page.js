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
  ClipboardList,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Users2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  theme,
  GTXNavbar,
  GTXFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/GTXShared";

const EV_SERVICES = [
  {
    id: "dc-fast-charging",
    title: "DC Ultra-Fast EV Charging (60kW – 360kW)",
    subtitle: "Liquid-Cooled High-Power Dispensing Infrastructure",
    desc: "Designing and installing high-power modular DC fast chargers capable of simultaneously charging multiple electric vehicles at speeds up to 360kW with 96%+ electrical efficiency and dual CCS2 connectors.",
    image: "/GTX-card1.png",
    tag: "Ultra-Fast EV Charging",
    icon: Zap,
    deliverables: [
      "Modular power cabinets scalable from 60kW up to 360kW ultra-fast dispensing",
      "Liquid-cooled lightweight charging cables supporting up to 500 Amps continuous",
      "Dual CCS-2 and CHAdeMO connectors compatible with European, US, and Asian EVs",
      "Integrated 15-inch weatherproof touchscreen with contactless NFC/RFID payment",
    ],
  },
  {
    id: "fleet-electrification",
    title: "Commercial & Logistics Fleet Electrification",
    subtitle: "Turnkey Depot Infrastructure & Staggered Charging",
    desc: "Transforming corporate delivery fleets, bus transit networks, and commercial vehicle operators with custom depot charging layouts, automated overnight load balancing, and fleet telematics.",
    image: "/GTX-card2.png",
    tag: "Fleet Solutions",
    icon: Truck,
    deliverables: [
      "Turnkey depot layout engineering optimized for heavy commercial vehicle transit",
      "AI-driven automated overnight staggered charging minimizing peak electricity tariffs",
      "Fleet telematics dashboard tracking vehicle State-of-Charge (SoC) and battery health",
      "Guaranteed 99.8% fleet charging uptime SLA with on-site technician response",
    ],
  },
  {
    id: "battery-storage",
    title: "Battery Energy Storage Systems (BESS)",
    subtitle: "Utility-Scale Lithium Iron Phosphate (LFP) Storage",
    desc: "Deploying industrial containerized Battery Energy Storage Systems (0.5 MWh to 10 MWh) for peak shaving, grid stabilization, backup power resilience, and high-load EV buffer charging.",
    image: "/GTX-card3.png",
    tag: "BESS & Grid Storage",
    icon: Battery,
    deliverables: [
      "Tier-1 Lithium Iron Phosphate (LFP) battery chemistry offering 6,000+ lifecycle cycles",
      "Liquid thermal management maintaining cell temperature within optimal 25°C ± 2°C",
      "Aerosol fire suppression and multi-tier battery management system (BMS) safety",
      "Microgrid controller supporting seamless on-grid and off-grid islanding transitions",
    ],
  },
  {
    id: "solar-charging",
    title: "Solar-Powered EV Canopy Integration",
    subtitle: "Bifacial Solar Carports & Clean Microgrids",
    desc: "Constructing architectural solar PV carports that generate clean on-site electricity to power EV charging stations directly, lowering operational electricity costs and achieving zero-carbon mobility.",
    image: "/GTX-card4.png",
    tag: "Renewable EV Carports",
    icon: Sun,
    deliverables: [
      "Heavy-duty galvanized steel cantilever carports protecting vehicles from weather",
      "High-efficiency bifacial monocrystalline solar modules capturing reflected light",
      "Direct DC coupling with battery storage for maximum round-trip efficiency",
      "Surplus solar net-metering backfeed supplying green energy to corporate buildings",
    ],
  },
  {
    id: "energy-management",
    title: "Smart Charging Software (EMS & CMS)",
    subtitle: "OCPP 2.0.1 Cloud Management & Driver Billing Apps",
    desc: "Providing an enterprise-grade cloud charging management system (CMS) with dynamic load management, automated billing, tariff scheduling, and branded driver mobile apps.",
    image: "/GTX-about.png",
    tag: "Cloud Telemetry",
    icon: LineChart,
    deliverables: [
      "Full OCPP 1.6J and OCPP 2.0.1 compliance with open hardware interoperability",
      "Dynamic Load Management (DLM) preventing facility electrical transformer overloads",
      "White-label iOS/Android driver mobile apps with real-time station maps and reservations",
      "Automated financial reconciliation supporting Easypaisa, JazzCash, and Visa/Mastercard",
    ],
  },
  {
    id: "ev-consultancy",
    title: "Grid Interconnection Feasibility & EPC",
    subtitle: "High-Voltage Power Approvals & Certified Commissioning",
    desc: "Executing full electrical EPC services from initial DISCO utility power sanctioning and transformer substation sizing to civil trenching, cabling, and certified safety commissioning.",
    image: "/GTX_hero.png",
    tag: "Turnkey EPC Engineering",
    icon: ClipboardList,
    deliverables: [
      "Comprehensive electrical grid load flow analysis and transformer sizing studies",
      "Handling complete DISCO / NEPRA utility power connection sanctions and approvals",
      "Precision civil construction, underground armored cable routing, and earthing pits",
      "Final German engineering inspection certification and compliance sign-off",
    ],
  },
];

const SERVICE_STATS = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Chargers Installed", icon: PlugZap },
  { value: "200+", label: "Projects Delivered", icon: Truck },
  { value: "99.8%", label: "Uptime Reliability", icon: ShieldCheck },
];

export default function GTXServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = EV_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#202A36] font-sans antialiased overflow-x-hidden">
      <GTXNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>EV Charging &amp; Energy Solutions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
                German Engineering For <span style={{ color: theme.primary }}>Electric Mobility &amp; Grids</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From 360kW ultra-fast DC charging corridors and commercial fleet depot electrification to industrial Battery Energy Storage Systems (BESS) and cloud energy management, GTX delivers turnkey clean tech infrastructure.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore All 6 Capabilities</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/GTX/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.charcoal }}
                >
                  <span>Request Engineering Audit</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/GTX_hero.png"
                  alt="GTX EV Charging Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#16A34A]">
                      Turnkey EV Infrastructure
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.charcoal }}>
                      360kW DC Fast Chargers · BESS · Solar Carports
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
                  className="gtx-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.charcoal }}>
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
            <SectionLabel center>Our Core Capabilities</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Electric Mobility Offerings</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered with German precision, liquid-cooled power electronics, and intelligent cloud telemetry.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search capabilities (e.g. DC Fast, Fleet, BESS, Solar)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16A34A] transition-all bg-white shadow-xs"
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
                  className="gtx-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#202A36]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.primary}10` }}>
                          <Icon size={20} style={{ color: theme.primary }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.charcoal }}>
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
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(214, 226, 240, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.charcoal }}>
                          Key Engineering Highlights:
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
                      href="/group-companies/GTX/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.charcoal }}
                    >
                      <span>Inquire About This Solution</span>
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
                COMMERCIAL EV STATION DEPLOYMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.charcoal }}>
                Looking To Install Fast Chargers At Your Facility?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our chief power systems engineer to receive a comprehensive hardware specification, ROI financial model, and electrical grid sizing proposal.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/GTX/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request EV Hardware Quote</span>
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
