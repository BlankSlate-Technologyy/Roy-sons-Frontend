"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Cpu,
  FileText,
  FlaskConical,
  Gauge,
  Hammer,
  HeartPulse,
  Landmark,
  Layers,
  Leaf,
  LifeBuoy,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  Radio,
  Search,
  Send,
  Shield,
  ShieldCheck,
  Sparkles,
  Sun,
  Users2,
  Wind,
  Wrench,
  Zap,
  ArrowRight,
  BriefcaseMedical,
} from "lucide-react";
import {
  theme,
  PakMedicalNavbar,
  PakMedicalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/PakMedicalShared";

const STATS = [
  { icon: Award, value: "20+", label: "Years of Industry\nExperience" },
  { icon: HeartPulse, value: "300+", label: "Completed Healthcare\nProjects" },
  { icon: Building2, value: "150+", label: "Hospital Facilities\nDelivered" },
  { icon: Users2, value: "500+", label: "Biomedical & HVAC\nEngineers on Staff" },
  { icon: ShieldCheck, value: "99%", label: "ISO 14644 & GMP\nQuality Compliance" },
];

const SERVICES = [
  {
    icon: Building2,
    title: "Hospital Engineering & Modular OTs",
    desc: "Comprehensive modular surgical suites, critical care units, and specialized hospital architectural engineering.",
    href: "/group-companies/pak-janitorial/services#hospital-engineering",
    img: "/pakmed_hero_engineering.svg",
  },
  {
    icon: Hammer,
    title: "Turnkey Healthcare Projects",
    desc: "End-to-end planning, engineering, procurement, construction, installation, testing, and commissioning.",
    href: "/group-companies/pak-janitorial/services#turnkey-projects",
    img: "/pakmed_hero_engineering.svg",
  },
  {
    icon: Wind,
    title: "Clean Room Systems",
    desc: "Design and construction of ISO 14644 and GMP-compliant clean rooms for pharmaceutical and biotechnology industries.",
    href: "/group-companies/pak-janitorial/services#clean-room-systems",
    img: "/pakmed_hero_engineering.svg",
  },
  {
    icon: Gauge,
    title: "Hospital HVAC Engineering",
    desc: "Advanced hygienic HVAC systems designed for hospitals, laboratories, operating theatres, and sterile environments.",
    href: "/group-companies/pak-janitorial/services#hvac-engineering",
    img: "/pakmed_hero_engineering.svg",
  },
  {
    icon: FlaskConical,
    title: "GMP Facility Development",
    desc: "Construction of pharmaceutical manufacturing facilities that comply with international cGMP and PIC/S standards.",
    href: "/group-companies/pak-janitorial/services#gmp-facilities",
    img: "/pakmed_hero_engineering.svg",
  },
  {
    icon: Cpu,
    title: "Medical Gas Pipeline Systems",
    desc: "Installation of central oxygen, vacuum, compressed medical air, nitrous oxide, and HTM 02-01 gas distribution networks.",
    href: "/group-companies/pak-janitorial/services#medical-gas-pipeline",
    img: "/pakmed_hero_engineering.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "PakMed UltraMOT Modular Operation Theatre",
    tag: "Modular Surgical Suite",
    desc: "Prefabricated HPL / stainless steel wall panels, laminar flow ceiling, touchless doors, and surgeon control panels.",
    img: "/pakmed_hero_engineering.svg",
  },
  {
    name: "PakMed CleanPro ISO Class 5–8 Clean Room",
    tag: "ISO & GMP Clean Room",
    desc: "50mm high-density PUF insulated sandwich panels, dynamic pass boxes, flush coving, and HEPA air filter units.",
    img: "/pakmed_hero_engineering.svg",
  },
  {
    name: "PakMed MediGas HTM 02-01 Gas Systems",
    tag: "Medical Gas Pipeline",
    desc: "Duplex medical vacuum stations, oil-free medical air skids, area valve service units, and degreased copper piping.",
    img: "/pakmed_hero_engineering.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Healthcare Needs Assessment", desc: "Analyzing clinical surgical volume, target ISO cleanroom class, and infectious disease containment requirements." },
  { num: "02", title: "Architectural & MEP Engineering", desc: "Developing optimized hospital room layouts, laminar airflow CFD simulations, and medical gas pipeline schematics." },
  { num: "03", title: "Precision Procurement", desc: "Sourcing certified antimicrobial wall panels, medical gas manifold stations, surgical pendants, and H14 HEPA filters." },
  { num: "04", title: "Cleanroom & Superstructure Build", desc: "Executing sterile panel erection, seamless antistatic flooring, hermetic door installation, and ductwork sealing." },
  { num: "05", title: "DOP Testing & ISO Validation", desc: "Comprehensive DOP filter integrity tests, airborne particle count verification, and DQ/IQ/OQ/PQ certification." },
  { num: "06", title: "24/7 Biomedical Facility Support", desc: "Providing 24/7 on-site certified hospital engineers, preventive maintenance, and gas purity monitoring SLAs." },
];

const FAQS = [
  {
    q: "What standards do Pakistan Medical Supplies clean rooms comply with?",
    a: "Our clean room systems strictly comply with ISO 14644 (Classes 4 to 8), EU GMP (Grades A, B, C, D), US Federal Standard 209E, WHO Good Manufacturing Practices, and DRAP regulatory guidelines.",
  },
  {
    q: "Does Pakistan Medical Supplies deliver full Turnkey Modular Operation Theatres (MOT)?",
    a: "Yes. We execute complete turnkey Modular Operation Theatres including antimicrobial wall cladding, laminar airflow ceiling plenums, surgical pendants, hermetic automatic sliding doors, surgeon control panels, and antistatic flooring.",
  },
  {
    q: "Are your Medical Gas Pipeline Systems (MGPS) HTM 02-01 certified?",
    a: "Yes. Our medical gas distribution networks, cryogenic oxygen plants, vacuum pump skids, and area valve service units (AVSU) are engineered in full compliance with UK HTM 02-01 and NFPA 99 standards.",
  },
  {
    q: "Do you offer post-commissioning maintenance and DOP validation testing?",
    a: "Yes. We provide scheduled Dispersed Oil Particulate (DOP/PAO) HEPA filter challenge testing, particle counter audits, air change verification, and 24/7 preventive maintenance contracts.",
  },
];

export default function PakMedicalHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* Hero Section with Hospital Engineering Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Trusted Healthcare Infrastructure &amp; Medical Engineering</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.royalBlueDark }}>
                Engineering Healthcare. <span style={{ color: theme.royalBlue }}>Advancing Patient Care.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Pakistan Medical Supplies is a leading healthcare engineering company specializing in hospital infrastructure, clean room technology, HVAC engineering, and turnkey medical facility development. We deliver innovative, sustainable, and internationally compliant healthcare environments.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/pak-janitorial/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.royalBlue }}
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/pak-janitorial/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.royalBlueDark }}
                >
                  <span>Consult Bio-Engineer</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/pakmed_hero_engineering.svg"
                  alt="Hospital Engineering Suite"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3B]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#2B8DD6]">
                        150+ Hospital Facilities
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.royalBlueDark }}>
                      Modular OTs · ISO Clean Rooms · Medical Gas
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
                  className="pakmed-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.royalBlue}10` }}>
                    <Icon size={22} style={{ color: theme.royalBlue }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.royalBlueDark }}>
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
                  src="/pakmed_hero_engineering.svg"
                  alt="Hospital Engineering Capabilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3B]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#38BDF8] mb-1">
                      Turnkey Medical Infrastructure
                    </p>
                    <h4 className="text-base font-bold">Modular OTs, Clean Rooms, and Medical Gas Pipelines</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Advancing Healthcare Environments Across Pakistan</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Pakistan Medical Supplies provides complete engineering solutions for hospitals, pharmaceutical clean rooms, and medical research institutions. We integrate architectural healthcare planning, precision HVAC engineering, medical gas pipeline systems (MGPS), and strict infection control protocols to create sterile, dependable medical spaces.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#2B8DD6] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">ISO 14644 &amp; GMP Certified</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#2B8DD6] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">HTM 02-01 Medical Gas Compliance</span>
                </div>
              </div>

              <Link
                href="/group-companies/pak-janitorial/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#1A4FA0]"
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
              href="/group-companies/pak-janitorial/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.royalBlueDark }}
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
                  className="pakmed-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.royalBlue}10` }}>
                        <Icon size={20} style={{ color: theme.royalBlue }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.royalBlueDark }}>
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
                      style={{ borderColor: theme.border, color: theme.royalBlueDark }}
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
              <SectionHeading>Featured Healthcare Packages</SectionHeading>
            </div>

            <Link
              href="/group-companies/pak-janitorial/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.royalBlue }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS_PREVIEW.map((p) => (
              <div
                key={p.name}
                className="pakmed-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#2B8DD6]/10 text-[#1A4FA0] inline-block mb-3">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.royalBlueDark }}>
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/pak-janitorial/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.royalBlueDark }}
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
            <SectionLabel center>Disciplined Engineering</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Healthcare Project Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial architectural infection modeling to cleanroom panel erection, DOP validation, and 24/7 maintenance.
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
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.royalBlue }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.royalBlueDark }}>
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
                  style={{ color: theme.royalBlueDark }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#2B8DD6]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.skyBlue }}>
                READY TO UPGRADE YOUR HEALTHCARE INFRASTRUCTURE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.royalBlueDark }}>
                Schedule A Healthcare Engineering Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our certified biomedical and HVAC engineers to review architectural layouts, cleanroom class ratings, and medical gas distribution schematics.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/pak-janitorial/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.royalBlue }}
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.royalBlue, color: theme.royalBlue }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PakMedicalFooter />
    </main>
  );
}
