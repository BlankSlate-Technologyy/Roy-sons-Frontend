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
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Factory,
  Building2,
  Plug,
  Sparkles,
  Layers,
  Users2,
} from "lucide-react";
import {
  theme,
  MaxPowerNavbar,
  MaxPowerFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/MaxPowerShared";

const POWER_SERVICES = [
  {
    id: "renewable-energy",
    title: "Utility-Scale Solar & Wind Power Generation",
    subtitle: "10MW – 200MW Turnkey Renewable Energy EPC",
    desc: "Executing complete turn-key EPC of utility-scale solar photovoltaic farms, wind turbine power generation parks, and hybrid renewable energy plants with high-yield trackers.",
    image: "/max_power_hero_energy.svg",
    tag: "Renewable Power EPC",
    icon: Sun,
    deliverables: [
      "Geotechnical topographic surveying, solar resource irradiance modeling, and yield simulations",
      "Procurement of Tier-1 bifacial solar PV modules and single-axis smart tracking systems",
      "Utility-scale central inverter stations and step-up medium-voltage power transformers",
      "Complete grid synchronization, commercial COD commissioning, and NEPRA tariff compliance",
    ],
  },
  {
    id: "power-generation",
    title: "Thermal, Gas & Hybrid Power Plants",
    subtitle: "Combined-Cycle, Captive Co-Gen & Reciprocating Engines",
    desc: "Designing and building high-efficiency combined-cycle gas turbine (CCGT) power plants, heavy fuel oil (HFO) facilities, and industrial captive co-generation steam systems.",
    image: "/max_power_hero_energy.svg",
    tag: "Power Generation",
    icon: Zap,
    deliverables: [
      "Heavy industrial reciprocating gas engine power blocks (Jenbacher / Wärtsilä / CAT)",
      "Heat Recovery Steam Generators (HRSG) maximizing thermal cycle energy efficiency",
      "Heavy foundation civil engineering, cooling towers, and fuel storage tank farms",
      "Synchronous alternator synchronization, load rejection testing, and emissions scrubbers",
    ],
  },
  {
    id: "transmission-distribution",
    title: "High-Voltage Substations & Transmission (132kV–500kV)",
    subtitle: "AIS & GIS Grid Stations, Pylon Lines & Transformers",
    desc: "Turnkey EPC construction of 132kV, 220kV, and 500kV air-insulated (AIS) and gas-insulated (GIS) grid substations and high-tension overhead transmission line corridors.",
    image: "/max_power_hero_energy.svg",
    tag: "High-Voltage Grid EPC",
    icon: Radio,
    deliverables: [
      "Power transformer installation up to 250MVA with on-load tap changers (OLTC)",
      "High-voltage lattice transmission tower foundation casting, tower erection, and stringing",
      "SF6 gas-insulated switchgear (GIS) installations in space-constrained industrial zones",
      "Numerical relay differential protection, surge arresters, and earth grid mesh validation",
    ],
  },
  {
    id: "energy-storage",
    title: "Industrial Battery Energy Storage Systems (BESS)",
    subtitle: "Utility-Scale LFP Storage for Grid Stabilization & Peak Shaving",
    desc: "Deploying containerized Battery Energy Storage Systems (1MWh to 50MWh) that provide instantaneous frequency response, peak load shaving, and renewable power smoothing.",
    image: "/max_power_hero_energy.svg",
    tag: "BESS & Microgrids",
    icon: Battery,
    deliverables: [
      "Tier-1 Lithium Iron Phosphate (LFP) liquid-cooled containerized battery racks",
      "Four-quadrant bi-directional Power Conversion Systems (PCS) with black-start capability",
      "Multi-stage automated fire suppression, aerosol quenching, and gas detection systems",
      "Microgrid controller managing seamless islanding transitions during utility grid outages",
    ],
  },
  {
    id: "electrical-engineering",
    title: "Electrical Switchgear & SCADA Automation",
    subtitle: "Medium/Low Voltage Panels, Relay Coordination & DCS",
    desc: "Manufacturing and commissioning customized 11kV/33kV vacuum circuit breaker (VCB) switchgear panels, motor control centers (MCC), and plant-wide SCADA automation systems.",
    image: "/max_power_hero_energy.svg",
    tag: "Switchgear & SCADA",
    icon: Cpu,
    deliverables: [
      "Type-tested medium-voltage switchgear panels rated up to 33kV and 31.5kA short-circuit",
      "Intelligent Motor Control Centers (IMCC) with integrated variable frequency drives (VFD)",
      "Plant SCADA software architecture with redundant optical fiber telemetry and RTUs",
      "Comprehensive power system fault analysis and ETAP protection coordination studies",
    ],
  },
  {
    id: "operations-maintenance",
    title: "Plant Operations & Maintenance (O&M) Contracts",
    subtitle: "24/7 Generation Management & Predictive Asset Audits",
    desc: "Providing full-scope long-term operations, preventive maintenance, thermal imaging audits, transformer oil filtration, and spare parts management for utility and private power assets.",
    image: "/max_power_hero_energy.svg",
    tag: "O&M Services",
    icon: Wrench,
    deliverables: [
      "24/7 dedicated certified plant engineers and control room operators on-site",
      "Predictive vibration analysis, partial discharge monitoring, and thermographic scans",
      "On-site transformer oil purification, dielectric testing, and dissolved gas analysis (DGA)",
      "Contractual guaranteed availability and heat-rate efficiency performance SLAs",
    ],
  },
];

const SERVICE_STATS = [
  { value: "30+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Power Projects", icon: Zap },
  { value: "2000+", suffix: " MW", label: "Installed Capacity", icon: Sun },
  { value: "99.8%", label: "System Uptime", icon: ShieldCheck },
];

export default function MaxPowerServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = POWER_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#2D3748] font-sans antialiased overflow-x-hidden">
      <MaxPowerNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Power Engineering &amp; Energy EPC</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Comprehensive Energy Solutions For <span style={{ color: theme.navy }}>Utilities &amp; Heavy Industry</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From multi-megawatt utility solar and wind farms to 500kV transmission grid stations, industrial BESS battery storage, and 24/7 plant O&amp;M, Max Power Corporation delivers turnkey power reliability.
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
                  href="/group-companies/max-power/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Consult Principal Engineer</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/max_power_hero_energy.svg"
                  alt="Max Power Energy Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#F5A623]">
                      Turnkey Energy EPC
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      Utility Solar · 500kV Substations · BESS Storage
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
                  className="max-power-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navyDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                    {stat.suffix && <span className="font-black text-xl text-[#0E4B7E]">{stat.suffix}</span>}
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
            <SectionHeading center className="mb-4">Specialized Power Infrastructure Capabilities</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered in accordance with international IEEE, IEC, and NEPRA high-voltage safety standards.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search energy services (e.g. Solar, Substation, BESS, Switchgear, O&M)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E4B7E] transition-all bg-white shadow-xs"
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
                  className="max-power-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0E4B7E]" style={{ borderColor: theme.border }}>
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

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#D88E12]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(210, 224, 236, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                          Key Engineering Deliverables:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#F5A623]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#D88E12]">
                TURNKEY INDUSTRIAL POWER EPC
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Looking To Electrify Your Industrial Manufacturing Facility?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our chief electrical engineer to conduct site load flow analysis, transformer sizing, and single-line diagram (SLD) development.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-power/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request EPC Proposal</span>
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
