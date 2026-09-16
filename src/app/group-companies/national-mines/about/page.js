"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  Award,
  Users,
  Target,
  Clock,
  CheckCircle2,
  ArrowRight,
  HardHat,
  Leaf,
  ShieldCheck,
  Zap,
  FlaskConical,
  Truck,
  Drill,
  Eye,
  Building2,
  Layers,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalMinesShared";

const ABOUT_STATS = [
  { value: "20+", label: "Years of Mining\nExcellence", icon: Award },
  { value: "50+", label: "Exploration &\nMine Projects", icon: Mountain },
  { value: "5M+", label: "Tons of Minerals\nProcessed", icon: Truck },
  { value: "500+", label: "Geologists &\nEngineers", icon: Users },
  { value: "99%", label: "Safety & ESG\nCompliance", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Operational Safety First",
    desc: "Uncompromising adherence to international zero-harm mining protocols, worker safety equipment, and automated geotechnical slope monitoring.",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    desc: "Progressive land reclamation, tailing filtration systems, and 92% closed-loop process water recycling to protect local ecosystems.",
  },
  {
    icon: FlaskConical,
    title: "High-Purity Refining",
    desc: "Advanced metallurgical testing, diamond core assays, and closed-loop flotation delivering certified export-grade mineral purity.",
  },
  {
    icon: Target,
    title: "Transparent Sourcing",
    desc: "Direct ethical supply chains from extraction concessions to international ports with verified chain-of-custody documentation.",
  },
];

const OPERATIONAL_EXPERTISE = [
  {
    title: "Heavy Open-Pit & Underground Fleet",
    desc: "Operating 100-ton rigid haul trucks, electric hydraulic excavators, rotary blast drills, and underground development headers.",
    icon: Truck,
  },
  {
    title: "Geotechnical & Hydrogeological Engineering",
    desc: "Real-time radar slope stability monitoring, 3D block deposit modeling, and groundwater depressurization networks.",
    icon: Mountain,
  },
  {
    title: "Modern Beneficiation & Flotation Plants",
    desc: "Multi-stage crushing, ball milling circuits, froth flotation cells, and induction smelting furnaces yielding certified concentrates.",
    icon: FlaskConical,
  },
  {
    title: "Certified Geochemical Laboratories",
    desc: "On-site and central accredited assay facilities equipped with XRF spectrometers, AAS analyzers, and fire assay furnaces.",
    icon: Layers,
  },
];

export default function NationalMinesAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Corporate Profile</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-5" style={{ color: theme.navy }}>
                Unlocking Pakistan&apos;s Rich <span style={{ color: theme.gold }}>Mineral Wealth</span>
              </h1>

              <p className="text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-2xl" style={{ color: theme.textMuted }}>
                National Mines Corporation (Pvt) Ltd (NMC) is a premier natural resource exploration, extraction, and metallurgical processing enterprise. Backed by cutting-edge geological surveys, heavy mining machinery, and ethical ESG governance, we fuel domestic infrastructure and global commodity supply chains.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/group-companies/national-mines/minerals"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.gold }}
                >
                  <span>Explore Minerals Portfolio</span>
                  <ArrowRight size={14} />
                </Link>

                <Link
                  href="/group-companies/national-mines/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold border transition-all duration-300 hover:bg-white cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Contact Corporate Office</span>
                </Link>
              </div>
            </div>

            {/* Right Visual: Large Mining Landscape Image */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[480px] h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border mine-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/services/mining-1.jpg"
                  alt="National Mines Large Open-Pit Concessions"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: theme.gold }}>
                      Roy &amp; Sons Group Company
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium" style={{ color: theme.navy }}>
                      Established 20+ Years · Lahore Headquarters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Statistics Counter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {ABOUT_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="mine-card rounded-xl p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-2.5" style={{ backgroundColor: `${theme.gold}15` }}>
                    <Icon size={20} style={{ color: theme.gold }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[11px] font-medium tracking-wide uppercase whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Two-Column Corporate Layout: Company Introduction */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden border shadow-sm mine-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/mine header.png"
                  alt="Industrial Excavators and Heavy Truck Operations"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-1" style={{ color: theme.gold }}>
                      Large-Scale Bulk Excavation
                    </p>
                    <p className="text-sm font-medium">Over 5 Million Tons of Certified Ore Processed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>Company Overview</SectionLabel>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4" style={{ color: theme.navy }}>
                Built on Engineering Excellence &amp; Geological Science
              </h2>

              <p className="text-xs sm:text-sm font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                National Mines Corporation (Pvt) Ltd operates as the strategic minerals and natural resources wing under Roy &amp; Sons. With active mining concessions, processing hubs, and exploration leases across Pakistan, we bridge the gap between subsurface mineral wealth and industrial reality.
              </p>

              <p className="text-xs sm:text-sm font-normal leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Our operations encompass GPS satellite GIS mapping, diamond core drilling up to 1,500m, high-tonnage open-pit extraction, automated froth flotation concentration, and certified fire assay purity verification.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2.5 p-3 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={16} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-800">ISO 45001 Certified Safety</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={16} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-xs font-medium text-slate-800">92% Process Water Recycled</span>
                </div>
              </div>

              <Link
                href="/group-companies/national-mines/services"
                className="mine-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                style={{ color: theme.gold }}
              >
                <span>View our core mining capabilities</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Strategic Purpose</SectionLabel>
            <SectionHeading center className="mb-3">Mission &amp; Corporate Vision</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              Guiding our operations toward responsible extraction, national development, and international metallurgical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="mine-card rounded-2xl p-7 flex flex-col justify-between bg-white">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.gold}18` }}>
                  <Target size={20} style={{ color: theme.gold }} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-2.5" style={{ color: theme.navy }}>
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                  To discover, extract, and beneficiate Pakistan&apos;s natural mineral wealth with industrial efficiency, advanced geological science, and strict ESG compliance, supplying the raw materials that build national infrastructure and industrial resilience.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="mine-card rounded-2xl p-7 flex flex-col justify-between bg-white">
              <div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.navy}12` }}>
                  <Eye size={20} style={{ color: theme.navy }} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-2.5" style={{ color: theme.navy }}>
                  Our Vision
                </h3>
                <p className="text-xs sm:text-sm font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                  To be South Asia&apos;s leading benchmark in sustainable mining and metallurgy, recognized globally for ethical mineral sourcing, modern processing technology, zero-harm workplace safety, and enduring community partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Our Principles</SectionLabel>
            <SectionHeading center className="mb-3">Core Operational Values</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              Foundational standards that govern our concessions, engineering teams, and customer engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="mine-card rounded-2xl p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3.5" style={{ backgroundColor: `${theme.gold}15` }}>
                      <Icon size={18} style={{ color: theme.gold }} />
                    </div>
                    <h4 className="text-[15px] font-semibold mb-2" style={{ color: theme.navy }}>
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operational Expertise */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Technical Infrastructure</SectionLabel>
            <SectionHeading center className="mb-3">Operational Expertise &amp; Machinery</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              Heavy industrial equipment, modern beneficiation plants, and automated laboratory testing infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {OPERATIONAL_EXPERTISE.map((exp) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.title}
                  className="mine-card rounded-2xl p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3.5" style={{ backgroundColor: `${theme.navy}10` }}>
                      <Icon size={18} style={{ color: theme.navy }} />
                    </div>
                    <h4 className="text-[15px] font-semibold mb-2" style={{ color: theme.navy }}>
                      {exp.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                      {exp.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: theme.gold }}>
                Commercial Commodity Partnership
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ color: theme.navy }}>
                Work With National Mines Corporation
              </h2>
              <p className="text-xs sm:text-sm font-normal max-w-xl" style={{ color: theme.textMuted }}>
                Whether you require bulk industrial mineral allocations, assay reports, or joint venture exploration agreements, contact our commercial desk.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Contact Commercial Desk</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
