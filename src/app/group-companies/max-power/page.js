"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Battery,
  BatteryCharging,
  Briefcase,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Compass,
  Cpu,
  Database,
  Factory,
  FileText,
  FlaskConical,
  Gauge,
  Globe,
  HardHat,
  HeartPulse,
  Landmark,
  Layers,
  Leaf,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Package,
  Phone,
  Plug,
  PlugZap,
  Radio,
  Search,
  Send,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Target,
  TrendingUp,
  Truck,
  Users,
  Users2,
  Warehouse,
  Wifi,
  Wrench,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  MaxPowerNavbar,
  MaxPowerFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/MaxPowerShared";

const STATS = [
  { icon: Award, value: "30+", label: "Years of Heavy\nPower Experience" },
  { icon: Zap, value: "500+", label: "Completed Power\nProjects" },
  { icon: Sun, value: "2000+", suffix: " MW", label: "Installed Power\nCapacity" },
  { icon: Users2, value: "300+", label: "Certified Power &\nHigh-Voltage Engineers" },
  { icon: ShieldCheck, value: "99.8%", label: "Grid Reliability &\nSystem Uptime" },
];

const SERVICES = [
  {
    icon: Sun,
    title: "Renewable Energy Solutions",
    desc: "Designing and implementing utility solar, wind, hybrid, and clean energy systems for sustainable power generation.",
    href: "/group-companies/max-power/services#renewable-energy",
    img: "/max_power_hero_energy.svg",
  },
  {
    icon: Zap,
    title: "Power Generation Plants",
    desc: "Developing efficient thermal, hydro, solar, gas, and captive co-generation power plants for industry and utilities.",
    href: "/group-companies/max-power/services#power-generation",
    img: "/max_power_hero_energy.svg",
  },
  {
    icon: Radio,
    title: "High-Voltage Transmission (132kV–500kV)",
    desc: "Turnkey EPC construction of substations, lattice transmission towers, distribution networks, and power step-up yards.",
    href: "/group-companies/max-power/services#transmission-distribution",
    img: "/max_power_hero_energy.svg",
  },
  {
    icon: Battery,
    title: "Battery Energy Storage (BESS)",
    desc: "Advanced utility-scale battery storage solutions that improve grid stability, peak shaving, and renewable integration.",
    href: "/group-companies/max-power/services#energy-storage",
    img: "/max_power_hero_energy.svg",
  },
  {
    icon: Cpu,
    title: "Switchgear & SCADA Automation",
    desc: "Manufacturing 11kV/33kV vacuum switchgear panels, numerical relay protection, and plant-wide SCADA software.",
    href: "/group-companies/max-power/services#electrical-engineering",
    img: "/max_power_hero_energy.svg",
  },
  {
    icon: Wrench,
    title: "Operations & Maintenance (O&M)",
    desc: "24/7 dedicated plant operations, predictive vibration testing, transformer oil filtering, and contractual availability SLAs.",
    href: "/group-companies/max-power/services#operations-maintenance",
    img: "/max_power_hero_energy.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "MaxSolar Utility 100MW Farm EPC",
    tag: "Utility Solar EPC",
    desc: "Tier-1 bifacial panels, AI single-axis trackers, central inverters, and dedicated 132kV grid connection.",
    img: "/max_power_hero_energy.svg",
  },
  {
    name: "MaxGrid 220kV / 132kV AIS/GIS Substation",
    tag: "High-Voltage Substations",
    desc: "Step-up power transformers up to 250MVA with SF6 gas-insulated switchgear and numerical differential relays.",
    img: "/max_power_hero_energy.svg",
  },
  {
    name: "MaxStorage PowerVault 10MWh BESS",
    tag: "Grid Energy Storage",
    desc: "Tier-1 Liquid-Cooled LFP containerized battery storage providing sub-second primary frequency regulation.",
    img: "/max_power_hero_energy.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Energy Demand Feasibility", desc: "Analyzing power load curves, grid interconnection headroom, and geotechnical land conditions." },
  { num: "02", title: "Single-Line CAD Engineering", desc: "Developing optimized electrical schematics, transformer thermal sizing, and ETAP fault coordination." },
  { num: "03", title: "Sourcing & Procurement", desc: "Procuring Tier-1 high-voltage transformers, switchgear, solar PV modules, and structural steel." },
  { num: "04", title: "Heavy Civil & Electrical Build", desc: "Executing reinforced foundation casting, pylon erection, cable pulling, and switchyard rigging." },
  { num: "05", title: "Testing & Grid Commissioning", desc: "High-potential (Hi-Pot) dielectric testing, relay trip verification, and commercial COD grid synchronization." },
  { num: "06", title: "24/7 O&M Asset Management", desc: "Providing 24/7 on-site certified plant engineers, thermographic drone scans, and spare parts inventory." },
];

const FAQS = [
  {
    q: "What is Max Power Corporation's installed power generation capacity?",
    a: "Max Power Corporation has engineered, constructed, and commissioned over 2,000 MW of installed power capacity across Pakistan, including utility solar parks, combined-cycle gas plants, and high-voltage transmission substations.",
  },
  {
    q: "Does Max Power execute high-voltage grid substations up to 500kV?",
    a: "Yes. We hold PEC Category C-A (No Limit) constructor licensing and deliver turnkey 132kV, 220kV, and 500kV Air-Insulated (AIS) and Gas-Insulated (GIS) grid substations and transmission lines.",
  },
  {
    q: "Can Max Power install Battery Energy Storage Systems (BESS) for industrial clients?",
    a: "Yes. We supply and integrate containerized LFP Battery Energy Storage Systems ranging from 1 MWh to 50 MWh for industrial peak shaving, backup power, and renewable energy smoothing.",
  },
  {
    q: "What operations and maintenance (O&M) services are offered?",
    a: "We offer comprehensive 24/7 plant operations, predictive thermographic auditing, transformer oil purification, vibration testing, and guaranteed availability performance contracts.",
  },
];

export default function MaxPowerHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#2D3748] font-sans antialiased overflow-x-hidden">
      <MaxPowerNavbar />

      {/* Hero Section with Power Grid Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Leading Energy &amp; Power Infrastructure Company</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Max Power Corporation. <span style={{ color: theme.navy }}>Energizing The Future.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Powering industries and energizing the future through renewable energy solutions, thermal &amp; hybrid power plants, electrical engineering, high-voltage transmission, battery storage, and smart grid automation.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/max-power/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/max-power/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Talk To An Engineer</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/max_power_hero_energy.svg"
                  alt="Max Power Energy Infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#F5A623]">
                        2,000+ MW Installed
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
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

      {/* Stats Counter Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => {
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
                  <div className="mb-1" style={{ color: theme.navyDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
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

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/max_power_hero_energy.svg"
                  alt="Max Power Energy Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#FBBF24] mb-1">
                      Turnkey EPC Delivery
                    </p>
                    <h4 className="text-base font-bold">500kV High-Voltage Substations &amp; Multi-Megawatt Generation</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Reliable Energy Solutions For National Progress</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Max Power Corporation delivers complete electrical engineering and energy infrastructure services across Pakistan. From utility solar PV parks and 500kV transmission grid stations to industrial battery energy storage (BESS) and captive co-generation plants, we empower heavy industries and utilities with uncompromised power reliability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#F5A623] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">PEC Category C-A (No Limit) EPC</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#F5A623] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">2,000+ Megawatts Installed Capacity</span>
                </div>
              </div>

              <Link
                href="/group-companies/max-power/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#0E4B7E]"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/max-power/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.navyDark }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="max-power-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.navy}10` }}>
                        <Icon size={20} style={{ color: theme.navy }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.navyDark }}>
                        {svc.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href={svc.href}
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navyDark }}
                    >
                      <span>Explore Division</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Engineered Packages</SectionLabel>
              <SectionHeading>Featured Power Solutions</SectionHeading>
            </div>

            <Link
              href="/group-companies/max-power/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.navy }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS_PREVIEW.map((p) => (
              <div
                key={p.name}
                className="max-power-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#F5A623]/10 text-[#D88E12] inline-block mb-3">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.navyDark }}>
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/max-power/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request Specs</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Pathway Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Power EPC Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial energy demand modeling to heavy switchgear erection, grid synchronization, and 24/7 O&amp;M.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-3xl border bg-white shadow-xs flex flex-col justify-between"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.navy }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.navyDark }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center className="mb-4">Everything You Need To Know</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border overflow-hidden bg-white shadow-xs transition-all"
                style={{ borderColor: theme.border }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer"
                  style={{ color: theme.navyDark }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#F5A623]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed border-t pt-4 text-slate-600" style={{ borderColor: theme.border }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#D88E12]">
                READY TO ELECTRIFY YOUR INDUSTRIAL ENTERPRISE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An Energy Engineering Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior electrical engineers to review single-line diagrams, transformer ratings, and turnkey power plant deployment schedules.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-power/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Energy Proposal</span>
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