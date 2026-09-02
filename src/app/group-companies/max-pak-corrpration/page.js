"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Bolt,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Cog,
  Compass,
  Cpu,
  Factory,
  HardHat,
  Headset,
  Landmark,
  Layers,
  Leaf,
  MapPin,
  Package,
  PackageCheck,
  Phone,
  Pipette,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Ship,
  Sparkles,
  Sprout,
  Star,
  TrendingUp,
  Truck,
  Wrench,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  MaxPakNavbar,
  MaxPakFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/MaxPakShared";

const STATS = [
  { icon: ClipboardCheck, value: "30+", label: "Years of Industrial\nTrading Experience" },
  { icon: Package, value: "10000+", label: "Products Supplied\nNationwide" },
  { icon: ClipboardList, value: "2500+", label: "Completed Engineering\n& Sourcing Projects" },
  { icon: Building2, value: "800+", label: "Corporate Industrial\n& EPC Clients" },
  { icon: ShieldCheck, value: "99%", label: "On-Time Supply Chain\nDelivery Rate" },
];

const SERVICES = [
  {
    icon: Settings,
    title: "Industrial Machinery & Equipment",
    desc: "Supplying CNC machines, power generation turbines, steam boilers, automated lines, and precision tools from global OEMs.",
    href: "/group-companies/max-pak-corrpration/services#industrial-equipment",
    img: "/maxpak_hero_industrial.svg",
  },
  {
    icon: HardHat,
    title: "Construction Materials & Structural Steel",
    desc: "Bulk sourcing of certified deformed steel rebar Grade 60, H-beams, structural channels, and carbon steel linepipes.",
    href: "/group-companies/max-pak-corrpration/services#construction-materials",
    img: "/maxpak_hero_industrial.svg",
  },
  {
    icon: ClipboardList,
    title: "Turnkey EPC Engineering Procurement",
    desc: "End-to-end procurement covering vendor pre-qualification, MTC verification, third-party inspection, and customs clearance.",
    href: "/group-companies/max-pak-corrpration/services#engineering-procurement",
    img: "/maxpak_hero_industrial.svg",
  },
  {
    icon: Truck,
    title: "Heavy Machinery & Lifting Plants",
    desc: "20-to-85-ton crawler excavators, wheel loaders, 500-ton mobile cranes, tower cranes, and industrial forklifts.",
    href: "/group-companies/max-pak-corrpration/services#heavy-machinery",
    img: "/maxpak_hero_industrial.svg",
  },
  {
    icon: Package,
    title: "Warehousing, Logistics & Supply Chain",
    desc: "Central warehousing in Lahore and Karachi with dedicated multi-axle trailer fleets for JIT on-site deliveries.",
    href: "/group-companies/max-pak-corrpration/services#supply-chain",
    img: "/maxpak_hero_industrial.svg",
  },
  {
    icon: Wrench,
    title: "Technical Support, Installation & Spares",
    desc: "On-site mechanical erection, commissioning, predictive maintenance programs, and 24-hour genuine OEM spare parts buffer.",
    href: "/group-companies/max-pak-corrpration/services#technical-support",
    img: "/maxpak_hero_industrial.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "Precision CNC & Fabrication Machinery",
    tag: "CNC Machinery",
    desc: "5-Axis CNC vertical centers, heavy lathes, and fiber laser cutters with ±0.005mm aerospace tolerance.",
    img: "/maxpak_hero_industrial.svg",
  },
  {
    name: "Certified ASTM Structural Steel & Rebar",
    tag: "Structural Steel",
    desc: "ASTM A615 Grade 60 high-yield deformed rebar, wide-flange H-beams, and heavy structural plates with MTCs.",
    img: "/maxpak_hero_industrial.svg",
  },
  {
    name: "Substation Switchgear & High-Voltage Power",
    tag: "Power Switchgear",
    desc: "11kV to 132kV gas-insulated switchgear, step-down transformers, and armored copper power cabling.",
    img: "/maxpak_hero_industrial.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "BOQ Technical Evaluation & Specification Review", desc: "Analyzing client engineering drawings, material grade standards (ASTM/DIN/API), and compliance parameters." },
  { num: "02", title: "Global Vendor Sourcing & Cost Optimization", desc: "Leveraging direct tier-1 manufacturer networks across Europe, Japan, and the USA to secure competitive bulk pricing." },
  { num: "03", title: "Mill Testing & Pre-Shipment Quality Audits", desc: "Conducting rigorous laboratory testing, ultrasonic NDT inspections, and 100% heat number certification." },
  { num: "04", title: "Import Clearance & Bonded Freight Forwarding", desc: "Managing customs tariff optimization, bonded yard storage, and multi-modal maritime/overland transit." },
  { num: "05", title: "Scheduled Site Drop & Unloading Logistics", desc: "Dispatching multi-axle heavy trailers with real-time GPS tracking for seamless on-site unloading." },
  { num: "06", title: "Commissioning Support & Spare Parts Warranty", desc: "Providing factory-trained technical commissioning, warranty coverage, and long-term spare parts backing." },
];

const FAQS = [
  {
    q: "What industries does Max Pak Corporation supply?",
    a: "We supply 12+ major industry sectors including Construction & Heavy Infrastructure, Power & Energy Utilities, Oil, Gas & Refining, Mining & Minerals, Automotive Assembly, Marine & Deepwater Ports, and Chemical Processing Plants.",
  },
  {
    q: "Do your structural steel and linepipe products come with Mill Test Certificates (MTC)?",
    a: "Yes. 100% of our structural steel rebar, H-beams, and carbon steel linepipes are supplied with full EN 10204 3.1 Mill Test Certificates (MTCs), complete chemical composition analysis, and mechanical tensile test reports.",
  },
  {
    q: "Can Max Pak Corporation handle turnkey EPC procurement packages?",
    a: "Absolutely. We specialize in turnkey procurement for large-scale energy and infrastructure projects, managing global manufacturer negotiations, import letters of credit (LC), customs clearance, and synchronized site deliveries.",
  },
  {
    q: "What is your emergency delivery capability for critical industrial spare parts?",
    a: "Through our central warehousing facilities in Lahore and Karachi, we maintain dedicated inventory buffers of critical valves, switchgear components, and machinery spares available for emergency 24-hour dispatch.",
  },
];

export default function MaxPakHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <MaxPakNavbar />

      {/* Hero Section with Industrial Sourcing Console */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Trusted Industrial Trading &amp; Commercial Supply Company</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Powering Industries. <span style={{ color: theme.navy }}>Supplying Excellence.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Max Pak Corporation is a leading industrial trading and commercial supply company specializing in industrial equipment, heavy machinery, construction materials, engineering products, and integrated procurement solutions across Pakistan.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/max-pak-corrpration/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Product Suites</span>
                  <ArrowRight size={16} />
                </Link>

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
                  alt="Max Pak Corporation Industrial Supply Command"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091424]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#16A34A]">
                        10,000+ Products Delivered
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      2,500+ Executed Projects · 800+ Corporate Clients
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
                  className="mp-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navyDark }}>
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
                  src="/maxpak_hero_industrial.svg"
                  alt="Industrial Procurement & Heavy Machinery"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#091424]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#22C55E] mb-1">
                      Industrial Supply Excellence
                    </p>
                    <h4 className="text-base font-bold">Delivering Reliable Industrial Supply Solutions</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Max Pak Corporation</SectionLabel>
              <SectionHeading className="mb-6">Complete Industrial Procurement &amp; Sourcing</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Max Pak Corporation provides complete industrial procurement and trading solutions for businesses across construction, manufacturing, energy, infrastructure, and engineering sectors. From product sourcing and quality inspection to warehousing, logistics, and after-sales support, we ensure efficiency, reliability, and long-term business value.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#16A34A] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">ISO 9001:2015 Quality Certified</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#16A34A] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">10,000+ Products Supplied</span>
                </div>
              </div>

              <Link
                href="/group-companies/max-pak-corrpration/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#1B365D]"
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
              <SectionLabel>What We Supply</SectionLabel>
              <SectionHeading>Our Core Procurement Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/max-pak-corrpration/services"
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
                  className="mp-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
              <SectionLabel>Signature Suites</SectionLabel>
              <SectionHeading>Featured Product Packages</SectionHeading>
            </div>

            <Link
              href="/group-companies/max-pak-corrpration/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.navy }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS_PREVIEW.map((s) => (
              <div
                key={s.name}
                className="mp-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#1B365D]/15 text-[#1B365D] inline-block mb-3">
                      {s.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.navyDark }}>
                      {s.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {s.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/max-pak-corrpration/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request Product RFQ</span>
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
            <SectionLabel center>Rigorous Methodology</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Industrial Procurement Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From engineering drawing evaluations and global mill sourcing to third-party inspections and bonded site deliveries.
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
                START YOUR INDUSTRIAL PROCUREMENT PROCESS TODAY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An Industrial Procurement Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior procurement engineers and supply chain directors to review your Bill of Quantities (BOQ), mill test certificates, and batch delivery schedules.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/max-pak-corrpration/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Custom RFQ</span>
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