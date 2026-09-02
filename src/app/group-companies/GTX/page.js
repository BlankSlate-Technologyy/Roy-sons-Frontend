"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Battery,
  BatteryCharging,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Cpu,
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
  PlugZap,
  Search,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  TrafficCone,
  TrendingUp,
  Truck,
  Users,
  Users2,
  Wifi,
  Wrench,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  GTXNavbar,
  GTXFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/GTXShared";

const STATS = [
  { icon: Award, value: "15+", label: "Years of German\nEngineering Precision" },
  { icon: PlugZap, value: "500+", label: "DC Fast Charging\nStations Installed" },
  { icon: Truck, value: "200+", label: "Commercial & Fleet\nEV Projects Delivered" },
  { icon: Users2, value: "100+", label: "Technology & EV\nPower Engineers" },
  { icon: ShieldCheck, value: "99.8%", label: "Charging Network\nUptime Reliability" },
];

const SERVICES = [
  {
    icon: Zap,
    title: "DC Ultra-Fast EV Charging",
    desc: "Modular power cabinets scalable up to 360kW with liquid-cooled cables delivering 200–300 km in 12 mins.",
    href: "/group-companies/GTX/services#dc-fast-charging",
    img: "/GTX-card1.png",
  },
  {
    icon: Truck,
    title: "Fleet Electrification Depots",
    desc: "Turnkey depot charging infrastructure, automated overnight load balancing, and battery health telemetry.",
    href: "/group-companies/GTX/services#fleet-electrification",
    img: "/GTX-card2.png",
  },
  {
    icon: Battery,
    title: "Battery Energy Storage (BESS)",
    desc: "Containerized utility-scale LFP battery storage systems for peak shaving, buffer charging, and grid stability.",
    href: "/group-companies/GTX/services#battery-storage",
    img: "/GTX-card3.png",
  },
  {
    icon: Sun,
    title: "Solar EV Canopy Integration",
    desc: "Bifacial solar PV carports generating clean on-site electricity directly for EV fast charging hubs.",
    href: "/group-companies/GTX/services#solar-charging",
    img: "/GTX-card4.png",
  },
  {
    icon: LineChart,
    title: "Smart Charging CMS Software",
    desc: "Enterprise cloud telemetry platform with OCPP 2.0.1 compliance, dynamic load management, and billing.",
    href: "/group-companies/GTX/services#energy-management",
    img: "/GTX-card1.png",
  },
  {
    icon: ShieldCheck,
    title: "Grid Interconnection & EPC",
    desc: "Full high-voltage transformer sizing, utility power connection approvals, and certified commissioning.",
    href: "/group-companies/GTX/services#ev-consultancy",
    img: "/GTX-card2.png",
  },
];

const PRODUCTS_PREVIEW = [
  {
    name: "GTX HyperCharge 360kW DC Station",
    tag: "Ultra-Fast Charging",
    desc: "Dual liquid-cooled CCS-2 dispensers capable of 500A continuous output for highway corridors and smart cities.",
    img: "/GTX-card1.png",
  },
  {
    name: "GTX PowerVault 2MWh BESS",
    tag: "Grid Energy Storage",
    desc: "Tier-1 Lithium Iron Phosphate (LFP) liquid-cooled containerized storage for peak shaving and buffer charging.",
    img: "/GTX-card3.png",
  },
  {
    name: "GTX SolarFleet Bifacial Carport",
    tag: "Solar EV Canopy",
    desc: "Heavy-duty galvanized steel cantilever canopy with high-yield bifacial solar panels powering EV charging bays.",
    img: "/GTX-card4.png",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Site Power Feasibility", desc: "Evaluating electrical grid capacity, utility transformer headroom, and physical parking transit flow." },
  { num: "02", title: "Single-Line System Design", desc: "Developing customized CAD electrical layouts, cable tray routing, and dynamic load management schemes." },
  { num: "03", title: "Utility Approvals & Civil Build", desc: "Managing DISCO power sanctioning, civil trenching, armored cable laying, and transformer installation." },
  { num: "04", title: "Hardware Rigging & Wiring", desc: "Mounting modular DC fast charger cabinets, BESS battery containers, and solar PV canopy arrays." },
  { num: "05", title: "OCPP Telemetry Commissioning", desc: "Testing galvanic safety insulation, cloud CMS integration, automated billing, and driver mobile apps." },
  { num: "06", title: "24/7 SLA Operations", desc: "Providing round-the-clock remote station monitoring, predictive AI maintenance, and on-site technician response." },
];

const FAQS = [
  {
    q: "What charging speeds do GTX DC fast chargers support?",
    a: "GTX DC fast chargers range from 60kW and 120kW up to 360kW ultra-fast liquid-cooled systems capable of providing 200–300 km of driving range in approximately 10 to 12 minutes.",
  },
  {
    q: "Are GTX chargers compatible with all electric vehicle brands in Pakistan?",
    a: "Yes. Our chargers support universal standard European CCS-2 (Combined Charging System Type 2), CHAdeMO, and GB/T protocols, making them fully compatible with Audi e-tron, Porsche Taycan, MG ZS EV, Deepal, BYD, Haval, and all commercial electric buses.",
  },
  {
    q: "Can GTX stations operate off-grid or with solar panels?",
    a: "Yes. We engineer hybrid microgrid systems integrating bifacial solar carports and containerized Battery Energy Storage Systems (BESS) to provide clean, reliable fast charging independent of grid blackouts.",
  },
  {
    q: "How do commercial hosts monetize GTX charging stations?",
    a: "Our GTX CloudConnect CMS software automates user payment processing via JazzCash, Easypaisa, and credit cards. Operators can set custom per-kWh tariffs and time-of-use rates while monitoring revenue in real-time.",
  },
];

export default function GTXHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#202A36] font-sans antialiased overflow-x-hidden">
      <GTXNavbar />

      {/* Hero Section with EV Hub Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>German Engineering &amp; EV Mobility Solutions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
                German Technology Xpert. <span style={{ color: theme.primary }}>Future Electric Mobility.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Engineering the future of electric mobility, intelligent charging infrastructure, smart energy management, and high-performance battery technology. GTX brings German engineering precision to transform urban transport and green energy ecosystems.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/GTX/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Explore EV Products</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/GTX/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.charcoal }}
                >
                  <span>Get In Touch</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/GTX_hero.png"
                  alt="GTX German EV Mobility Solutions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#16A34A]">
                        500+ Fast Chargers Installed
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.charcoal }}>
                      360kW DC Fast Charging · Solar Carports · BESS
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
                  className="gtx-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}10` }}>
                    <Icon size={22} style={{ color: theme.primary }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.charcoal }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
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
                  src="/GTX-about.png"
                  alt="GTX German Engineering Excellence"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#22C55E] mb-1">
                      German Engineering Rigor
                    </p>
                    <h4 className="text-base font-bold">Liquid-Cooled 500A Ultra-Fast Power Architecture</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Shaping The Future Of Smart Clean Mobility</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                German Technology Xpert (GTX) delivers world-class electric vehicle charging infrastructure, battery storage systems, and smart grid automation. Combining German precision with comprehensive turnkey EPC execution, we empower businesses, fleet operators, and smart cities to electrify smoothly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#16A34A] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">DIN &amp; IEC Certified European Standards</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#16A34A] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">99.8% Guaranteed Network Uptime SLA</span>
                </div>
              </div>

              <Link
                href="/group-companies/GTX/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#16A34A]"
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
              <SectionHeading>Our Core Capabilities</SectionHeading>
            </div>

            <Link
              href="/group-companies/GTX/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.charcoal }}
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
                  className="gtx-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.primary}10` }}>
                        <Icon size={20} style={{ color: theme.primary }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.charcoal }}>
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
                      style={{ borderColor: theme.border, color: theme.charcoal }}
                    >
                      <span>Explore Capability</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Hardware &amp; Systems</SectionLabel>
              <SectionHeading>Featured EV Products</SectionHeading>
            </div>

            <Link
              href="/group-companies/GTX/products"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.primary }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS_PREVIEW.map((p) => (
              <div
                key={p.name}
                className="gtx-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#16A34A]/10 text-[#16A34A] inline-block mb-3">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.charcoal }}>
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/GTX/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.charcoal }}
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
            <SectionHeading center className="mb-4">6-Stage EV EPC Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial site grid load flow analysis to certified installation and 24/7 cloud telemetry.
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
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.primary }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.charcoal }}>
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
                  style={{ color: theme.charcoal }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#16A34A]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#16A34A]">
                READY TO ELECTRIFY YOUR INFRASTRUCTURE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.charcoal }}>
                Schedule An EV Engineering Feasibility Study
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior power engineers to review hardware specifications, electrical grid capacity, and turnkey deployment timelines.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/GTX/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primary }}
              >
                <span>Request EV Consultation</span>
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