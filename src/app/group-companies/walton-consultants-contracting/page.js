"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Hammer,
  HardHat,
  Layers,
  MapPin,
  MessageCircle,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Truck,
  Users2,
  Wrench,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/WaltonShared";

const STATS = [
  { icon: Award, value: "25+", label: "Years of Engineering\nExcellence" },
  { icon: Building2, value: "350+", label: "Completed Civil &\nInfrastructure Projects" },
  { icon: Users2, value: "1200+", label: "Engineers & Technical\nSpecialists on Staff" },
  { icon: HardHat, value: "50+", label: "Industrial & Government\nCorporate Clients" },
  { icon: ShieldCheck, value: "99%", label: "On-Time Project\nDelivery Success" },
];

const SERVICES = [
  {
    icon: Building2,
    title: "Civil Engineering & Superstructures",
    desc: "Reinforced concrete high-rises, post-tensioned floor slabs, deep bored pile foundations, and architectural curtain walls.",
    href: "/group-companies/walton-consultants-contracting/services/civil-engineering-structural-superstructures",
    img: "/walton_hero_construction.svg",
  },
  {
    icon: Truck,
    title: "Turnkey EPC Industrial Projects",
    desc: "Complete engineering, procurement, and construction solutions for complex industrial and infrastructure developments.",
    href: "/group-companies/walton-consultants-contracting/services/turnkey-epc-heavy-industrial-projects",
    img: "/walton_hero_construction.svg",
  },
  {
    icon: Layers,
    title: "Highways & Infrastructure Corridors",
    desc: "Construction of multi-lane expressways, prestressed concrete bridges, flyovers, and stormwater utilities.",
    href: "/group-companies/walton-consultants-contracting/services/highways-bridges-transportation-corridors",
    img: "/walton_hero_construction.svg",
  },
  {
    icon: Wrench,
    title: "Pre-Engineered Buildings (PEB)",
    desc: "High-yield structural steel portal frames, mega logistics distribution warehouses, and industrial manufacturing plants.",
    href: "/group-companies/walton-consultants-contracting/services/pre-engineered-buildings-peb-warehouses",
    img: "/walton_hero_construction.svg",
  },
  {
    icon: ClipboardList,
    title: "Project Management & BIM QA/QC",
    desc: "3D BIM clash detection, Primavera P6 project scheduling, on-site materials testing, and quality supervision.",
    href: "/group-companies/walton-consultants-contracting/services/project-management-bim-qa-qc-supervision",
    img: "/walton_hero_construction.svg",
  },
  {
    icon: Hammer,
    title: "Engineering Consultancy & Feasibility",
    desc: "Geotechnical soil surveys, structural peer reviews, seismic hazard analysis, and comprehensive BOQ preparation.",
    href: "/group-companies/walton-consultants-contracting/services/engineering-consultancy-feasibility-studies",
    img: "/walton_hero_construction.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "WaltonTower High-Rise Superstructure",
    tag: "Commercial High-Rise",
    desc: "Up to 45 storeys commercial/residential towers with post-tensioned slabs and 4-level deep basements.",
    href: "/group-companies/walton-consultants-contracting/solutions/commercial-high-rise-superstructures",
    img: "/walton_hero_construction.svg",
  },
  {
    name: "WaltonPlant Turnkey Industrial Complex",
    tag: "Industrial EPC Plant",
    desc: "50,000 to 500,000+ sq ft heavy manufacturing plants with dynamic machine foundation beds.",
    href: "/group-companies/walton-consultants-contracting/solutions/turnkey-industrial-manufacturing-plants",
    img: "/walton_hero_construction.svg",
  },
  {
    name: "WaltonWay Highway & Bridge Corridor",
    tag: "Transportation Infrastructure",
    desc: "Multi-lane expressways, prestressed concrete box girders, and grade-separated highway interchanges.",
    href: "/group-companies/walton-consultants-contracting/solutions/highway-interchanges-bridge-corridors",
    img: "/walton_hero_construction.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Site & Soil Geotechnical Study", desc: "Performing core soil boring, plate load bearing tests, and seismic hazard micro-zonation analysis." },
  { num: "02", title: "Architectural & 3D BIM Design", desc: "Developing optimized structural models in ETABS / Revit with automated multi-discipline clash resolution." },
  { num: "03", title: "Procurement & Fabrication", desc: "Sourcing certified ASTM steel rebar, high-grade Portland cement, and pre-engineered steel frames." },
  { num: "04", title: "Foundation & Superstructure Build", desc: "Executing rotary bored piling, reinforced concrete floor casting, and steel frame erection." },
  { num: "05", title: "QA/QC Non-Destructive Testing", desc: "Comprehensive concrete compressive testing, ultrasonic steel weld inspection, and MEP commissioning." },
  { num: "06", title: "Handover & Facility Management", desc: "Providing full as-built documentation, building authority completion certificates, and warranty support." },
];

const FAQS = [
  {
    q: "What PEC contractor category does Walton Consultants & Contracting hold?",
    a: "Walton Consultants & Contracting holds Pakistan Engineering Council (PEC) Category C-A (No Limit) constructor licensing, authorized to execute civil and infrastructure projects of unlimited financial value.",
  },
  {
    q: "Does Walton execute complete turnkey EPC industrial projects?",
    a: "Yes. We offer single-point responsibility for industrial manufacturing facilities, including architectural design, heavy civil foundations, PEB steel erection, high-voltage MEP, and final commissioning.",
  },
  {
    q: "Can Walton construct commercial high-rise towers with deep basements?",
    a: "Yes. We have specialized expertise in rotary bored piling, diaphragm earth retention walls, and post-tensioned (PT) concrete slabs for high-rises up to 45 storeys with multi-level basements.",
  },
  {
    q: "What digital construction tools does Walton deploy on site?",
    a: "We utilize Building Information Modeling (BIM 3D/4D), Primavera P6 critical path scheduling, and drone topographic surveys to ensure milestone adherence and zero design clashes.",
  },
];

export default function WaltonHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#3A4E63] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* Hero Section with Construction Superstructure Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Trusted Engineering &amp; Infrastructure Development</SectionLabel>

              <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black tracking-tight leading-[1.2] uppercase mb-5" style={{ color: theme.navyDark }}>
                Engineering Excellence. <span style={{ color: theme.navy }}>Building Tomorrow&apos;s Infrastructure.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Walton Consultants &amp; Contracting is a leading engineering and construction company specializing in civil engineering, EPC projects, industrial construction, and infrastructure development across Pakistan.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/walton-consultants-contracting/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={16} />
                </Link>

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
                  alt="Civil Construction & Engineering Infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B30]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#A6823B]">
                        350+ Completed Projects
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      Commercial High-Rises · Bridges · Industrial EPC
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
                  className="walton-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
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
                  src="/walton_hero_construction.svg"
                  alt="Civil Construction Capabilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B30]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#DFC48B] mb-1">
                      Turnkey Civil Construction
                    </p>
                    <h4 className="text-base font-bold">Over 25 Years of Landmark Infrastructure Execution</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Building Strong Foundations For The Future</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Walton Consultants &amp; Contracting provides integrated engineering, procurement, construction, and infrastructure solutions across multiple industries. From concept and design to execution and project completion, we combine technical expertise, innovation, and operational excellence to deliver projects that meet the highest standards of quality and performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#C5A059] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">PEC Category C-A (No Limit) Constructor</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#C5A059] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">350+ Delivered Infrastructure Projects</span>
                </div>
              </div>

              <Link
                href="/group-companies/walton-consultants-contracting/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#0E2A47]"
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
              href="/group-companies/walton-consultants-contracting/services"
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
                  className="walton-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <Link
                      href={svc.href}
                      className="relative block w-full h-48 bg-slate-100 overflow-hidden group cursor-pointer"
                    >
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>

                    <div className="p-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.navy}10` }}>
                        <Icon size={20} style={{ color: theme.navy }} />
                      </div>

                      <Link href={svc.href}>
                        <h3 className="text-lg font-black mb-2.5 hover:text-[#0E2A47] transition-colors cursor-pointer" style={{ color: theme.navyDark }}>
                          {svc.title}
                        </h3>
                      </Link>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0 flex gap-2">
                    <Link
                      href={svc.href}
                      className="flex-1 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navyDark }}
                    >
                      <span>Explore Division</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link
                      href="/group-companies/walton-consultants-contracting/contact"
                      className="px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
                      style={{ backgroundColor: theme.navy }}
                      title="Request Proposal"
                    >
                      <span>Quote</span>
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
              <SectionHeading>Featured Infrastructure Packages</SectionHeading>
            </div>

            <Link
              href="/group-companies/walton-consultants-contracting/solutions"
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
                className="walton-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <Link
                    href={p.href}
                    className="relative block w-full h-52 bg-slate-100 overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#C5A059]/15 text-[#A6823B] inline-block mb-3">
                      {p.tag}
                    </span>
                    <Link href={p.href}>
                      <h3 className="text-xl font-black mb-2 hover:text-[#0E2A47] transition-colors cursor-pointer" style={{ color: theme.navyDark }}>
                        {p.name}
                      </h3>
                    </Link>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0 flex gap-2">
                  <Link
                    href={p.href}
                    className="flex-1 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/group-companies/walton-consultants-contracting/contact"
                    className="px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
                    style={{ backgroundColor: theme.navy }}
                    title="Request Proposal"
                  >
                    <span>Quote</span>
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
            <SectionHeading center className="mb-4">6-Stage Construction Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial geotechnical soil boring to 3D BIM clash resolution, heavy concrete casting, and commissioning.
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
                      openFaq === idx ? "rotate-180 text-[#C5A059]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A6823B]">
                READY TO COMMENCE YOUR NEXT CONSTRUCTION VENTURE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An Engineering Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our principal civil structural engineers to review architectural CAD drawings, structural BOQs, and turnkey EPC pricing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
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

      <WaltonFooter />
    </main>
  );
}
