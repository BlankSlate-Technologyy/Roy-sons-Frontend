"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Building2,
  Hammer,
  Wind,
  Gauge,
  FlaskConical,
  Cpu,
  Microscope,
  LifeBuoy,
  HeartPulse,
  BriefcaseMedical,
  Sparkles,
  Layers,
  Users2,
} from "lucide-react";
import {
  theme,
  PakMedicalNavbar,
  PakMedicalFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/PakMedicalShared";

const MEDICAL_SERVICES = [
  {
    id: "hospital-engineering",
    title: "Hospital Engineering & Modular Operation Theatres",
    subtitle: "Turnkey Modular Surgical Suites & Critical Care Units",
    desc: "Designing and constructing pre-fabricated modular operation theatres (MOT), ICU suites, and emergency trauma centers with hermetically sealed doors and antimicrobial wall cladding.",
    image: "/pakmed_hero_engineering.svg",
    tag: "Modular Operation Theatres",
    icon: Building2,
    deliverables: [
      "Modular stainless steel / HPL wall paneling with integrated antistatic vinyl flooring",
      "Ceiling-mounted articulated surgical pendants with medical gas and high-voltage power sockets",
      "Microprocessor-based surgeon control panels with digital timing, pressure, and temperature telemetry",
      "Hermetically sealed automatic sliding doors with touchless infrared sensor operation",
    ],
  },
  {
    id: "turnkey-projects",
    title: "Turnkey Healthcare Facility Projects",
    subtitle: "Complete Architectural Planning, Civil & Biomedical MEP",
    desc: "Executing complete turn-key development of multi-specialty hospitals, medical universities, diagnostic centers, and specialized cancer institutes from concept to COD inauguration.",
    image: "/pakmed_hero_engineering.svg",
    tag: "Turnkey Hospital EPC",
    icon: Hammer,
    deliverables: [
      "Hospital architectural space planning, infection control zones, and patient traffic flow design",
      "Heavy biomedical electrical backup (UPS & isolated power systems IPS / IT earthing)",
      "Centralized nurse call systems, digital telemetry networks, and hospital BMS integration",
      "Complete civil, structural, mechanical, electrical, and biomedical equipment commissioning",
    ],
  },
  {
    id: "clean-room-systems",
    title: "ISO 14644 & GMP Clean Room Systems",
    subtitle: "ISO Class 4 to Class 8 Controlled Environments",
    desc: "Engineering high-performance cleanroom enclosures for pharmaceutical manufacturing, sterile compounding pharmacies, biotechnology suites, and optical device production.",
    image: "/pakmed_hero_engineering.svg",
    tag: "ISO Clean Room Systems",
    icon: Wind,
    deliverables: [
      "Modular sandwich wall partitions with high-density polyurethane (PUF) insulation cores",
      "Dynamic pass-through boxes with electromagnetic interlocking doors and UV sterilization lamps",
      "Flush-mounted cleanroom LED light fittings and ceiling return air risers",
      "Full DQ/IQ/OQ/PQ validation protocol documentation compliant with DRAP & US FDA",
    ],
  },
  {
    id: "hvac-engineering",
    title: "Hospital HVAC & Laminar Airflow Engineering",
    subtitle: "100% Fresh Air AHUs, HEPA Filtration & Pressure Control",
    desc: "Custom-engineered HVAC systems delivering laminar airflow over surgical tables, multi-stage HEPA filtration, and strict positive/negative pressure differential controls.",
    image: "/pakmed_hero_engineering.svg",
    tag: "Hospital HVAC & HEPA",
    icon: Gauge,
    deliverables: [
      "Dedicated hygienic Air Handling Units (AHU) with double-skin thermal break construction",
      "Laminar flow ceiling diffuser plenums delivering 0.45 m/s uniform sterile downflow",
      "Terminal H14 HEPA filters providing 99.995% particulate filtration down to 0.3 microns",
      "Negative pressure infectious disease isolation rooms preventing pathogen airborne spread",
    ],
  },
  {
    id: "gmp-facilities",
    title: "GMP Pharmaceutical Facility Development",
    subtitle: "Sterile Injectables, OSD & Biotechnology Production Blocks",
    desc: "Complete design and construction of pharmaceutical production plants complying with Current Good Manufacturing Practices (cGMP), WHO guidelines, and PIC/S standards.",
    image: "/pakmed_hero_engineering.svg",
    tag: "Pharmaceutical GMP",
    icon: FlaskConical,
    deliverables: [
      "Sterile injectable filling lines, freeze-drying suites, and oral solid dosage (OSD) rooms",
      "Purified Water (PW) and Water for Injection (WFI) sanitary stainless steel 316L loop piping",
      "Clean-in-Place (CIP) and Sterilize-in-Place (SIP) automated sanitary validation skids",
      "Personnel and material airlock cascading pressure differentials eliminating cross-contamination",
    ],
  },
  {
    id: "medical-gas-pipeline",
    title: "Medical Gas Pipeline Systems (MGPS)",
    subtitle: "HTM 02-01 & NFPA 99 Compliant Gas Distribution Networks",
    desc: "Turnkey installation of hospital medical gas generation, central vacuum plants, compressed medical air skids, and gas distribution manifolds delivering oxygen and life support.",
    image: "/pakmed_hero_engineering.svg",
    tag: "MGPS Medical Gases",
    icon: Cpu,
    deliverables: [
      "Liquid medical oxygen (LMO) cryogenic tanks and automatic backup cylinder manifold headers",
      "Duplex/triplex medical vacuum pump stations and oil-free breathing air compressors",
      "Degreased medical-grade copper pipeline distribution networks with silver-brazed joints",
      "Area valve service units (AVSU) with digital pressure monitoring alarms and emergency shutoffs",
    ],
  },
  {
    id: "laboratory-engineering",
    title: "Specialized Laboratory & BSL Suite Engineering",
    subtitle: "Biosafety Level BSL-2 / BSL-3 Research & Diagnostic Labs",
    desc: "Constructing advanced clinical diagnostic laboratories, molecular biology suites, and biosafety level research facilities with dedicated fume extraction and chemical resistance.",
    image: "/pakmed_hero_engineering.svg",
    tag: "Laboratory Engineering",
    icon: Microscope,
    deliverables: [
      "Biosafety cabinets (Class II Type A2/B2) and chemical fume extraction hoods with scrubbers",
      "Epoxy resin / phenolic laboratory workbenches resistant to extreme acids and solvents",
      "Negative pressure differential control cascading with interlocking safety airlocks",
      "Specialized laboratory utility service fixtures (deionized water, nitrogen, argon gases)",
    ],
  },
  {
    id: "maintenance-support",
    title: "Facility Maintenance, Validation & Testing",
    subtitle: "DOP HEPA Testing, Particle Counts & 24/7 Facility SLAs",
    desc: "Providing scheduled ISO cleanroom validation, airborne particulate testing, filter integrity audits, medical gas purity verification, and 24/7 emergency facility maintenance.",
    image: "/pakmed_hero_engineering.svg",
    tag: "Validation & Maintenance",
    icon: LifeBuoy,
    deliverables: [
      "Dispersed Oil Particulate (DOP / PAO) challenge testing of all HEPA and ULPA filters",
      "Laser airborne particle counter validation verifying ISO Class 5 to 8 cleanliness levels",
      "Air velocity profile measurements, room air change rates (ACPH), and recovery time tests",
      "24/7 on-call biomedical facility engineers for rapid HVAC and medical gas troubleshooting",
    ],
  },
];

const SERVICE_STATS = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "300+", label: "Healthcare Projects", icon: HeartPulse },
  { value: "150+", label: "Hospital Facilities", icon: Building2 },
  { value: "99%", label: "GMP Compliance", icon: ShieldCheck },
];

export default function PakMedicalServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = MEDICAL_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Healthcare Infrastructure &amp; Bio-Engineering</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.royalBlueDark }}>
                Specialized Engineering For <span style={{ color: theme.royalBlue }}>Hospitals &amp; Clean Rooms</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From turnkey modular operation theatres and ISO Class 5 clean rooms to medical gas pipeline networks, hospital HVAC systems, and continuous validation, Pakistan Medical Supplies delivers engineering excellence.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.royalBlue }}
                >
                  <span>Explore All 8 Divisions</span>
                  <ArrowRight size={16} />
                </a>

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
                  alt="Hospital Engineering Capabilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3B]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.skyBlue }}>
                      Turnkey Medical Engineering
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.royalBlueDark }}>
                      Modular OTs · ISO Clean Rooms · MGPS Gas Systems
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
                  className="pakmed-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.royalBlue}10` }}>
                    <Icon size={22} style={{ color: theme.royalBlue }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.royalBlueDark }}>
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
            <SectionHeading center className="mb-4">Specialized Healthcare Engineering Capabilities</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Delivered in strict compliance with HTM 02-01, ISO 14644, and WHO Good Manufacturing Practice (GMP) standards.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search medical services (e.g. Operation Theatre, Clean Room, HVAC, Medical Gas)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1A4FA0] transition-all bg-white shadow-xs"
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
                  className="pakmed-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1A4FA0]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.royalBlue}10` }}>
                          <Icon size={20} style={{ color: theme.royalBlue }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.royalBlueDark }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#2B8DD6]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(210, 228, 245, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.royalBlueDark }}>
                          Key Engineering Scope:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#2B8DD6]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/pak-janitorial/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.royalBlueDark }}
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.skyBlue }}>
                TURNKEY HOSPITAL &amp; CLEANROOM EPC
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.royalBlueDark }}>
                Upgrading Your Operating Theatres Or GMP Clean Room Facility?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our chief biomedical engineering director to schedule site inspections, HVAC CFM air balance calculations, and turnkey room fit-out pricing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/pak-janitorial/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.royalBlue }}
              >
                <span>Request Technical Proposal</span>
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
