"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  HardHat,
  Drill,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  Search,
  Truck,
  ShieldCheck,
  Zap,
  Building2,
  Layers,
  Scale,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalMinesShared";

const MINING_SERVICES = [
  {
    id: "operations",
    title: "Mining Operations",
    subtitle: "High-Tonnage Open-Pit & Underground Extraction",
    desc: "Deploying 100-ton haul truck fleets, electric hydraulic excavators, and rotary blast drill rigs for continuous ore extraction under ISO 45001 safety.",
    image: "/services/mining-1.jpg",
    tag: "Extraction",
    icon: Drill,
    deliverables: [
      "Precision electronic blasting minimizing ore dilution and ground vibration",
      "High-capacity 100-ton haulage fleets operating 24/7 rotational shifts",
      "Real-time GPS dispatch telemetry optimizing pit shovel-and-truck cycles",
    ],
  },
  {
    id: "exploration",
    title: "Mineral Exploration",
    subtitle: "Drone GIS Surveys & Diamond Core Drilling",
    desc: "Locating high-grade ore deposits across Pakistan's prospective belts through drone LiDAR, airborne geophysics, geochemical assays, and deep diamond core drilling.",
    image: "/images/tdrc/research_gis.jpg",
    tag: "Exploration",
    icon: Mountain,
    deliverables: [
      "Wireline diamond core drilling up to 1,500m depth with full core recovery",
      "Hyperspectral satellite & UAV mapping aligned with GSP geological grids",
      "3D computerized ore body stratigraphy and grade distribution modeling",
    ],
  },
  {
    id: "development",
    title: "Mine Development",
    subtitle: "Pit Optimization & Bankable Feasibility Design",
    desc: "End-to-end engineering from pit shell optimization and slope stability analysis to heavy haul road grading, dewatering networks, and bankable feasibility studies.",
    image: "/images/walton/hero_engineering_team.jpg",
    tag: "Engineering",
    icon: HardHat,
    deliverables: [
      "Lerchs-Grossmann open-pit optimization and underground decline engineering",
      "Geotechnical numerical rock mass modeling (RMR/Q-system) analysis",
      "Bankable feasibility studies compliant with JORC and NI 43-101 codes",
    ],
  },
  {
    id: "resource-mgmt",
    title: "Resource Management",
    subtitle: "SCADA Control & JORC Reserve Reconciliation",
    desc: "Digital telemetry, mineral economics, and Competent Person reserve audits ensuring peak ore recovery, precise grade blending, and transparent governance.",
    image: "/services/electrical-2.jpg",
    tag: "Resource Economics",
    icon: Scale,
    deliverables: [
      "Geostatistical kriging and 3D variography block reserve modeling",
      "Strategic ore blending meeting exact international smelter tolerances",
      "Annual Competent Person resource reconciliation and life-of-mine audits",
    ],
  },
  {
    id: "geological",
    title: "Geological Services",
    subtitle: "Accredited Laboratory Assays & Core Petrography",
    desc: "Independent geochemical laboratory testing delivering precise elemental assays, XRF spectrometry, oriented core logging, and statutory concession valuations.",
    image: "/ROYSONS Slider image 2.jpeg",
    tag: "Geological Testing",
    icon: Layers,
    deliverables: [
      "Certified pyrometallurgical fire assays for gold, silver, and base metals",
      "High-precision X-Ray Fluorescence (XRF) and XRD mineralogical testing",
      "Provincial mining concession licensing and compliance due diligence",
    ],
  },
  {
    id: "infrastructure",
    title: "Mining Infrastructure",
    subtitle: "Rail Freight Loadouts, Dry-Stack Tailings & Microgrids",
    desc: "Turnkey mining site infrastructure including heavy vehicle workshops, high-voltage substations, dry-stack tailings filtration, and bulk rail freight sidings.",
    image: "/project-industrial-plant.jpg",
    tag: "Site Infrastructure",
    icon: Building2,
    deliverables: [
      "Direct bulk rail siding integration with 2,000-ton automated loadout silos",
      "Engineered dry-stack tailings filtration eliminating tailings dam risk",
      "Bifacial solar hybrid microgrids powering remote desert mine complexes",
    ],
  },
  {
    id: "equipment",
    title: "Equipment & Operations",
    subtitle: "Heavy Fleet Telemetry & Predictive Maintenance",
    desc: "Managing high-horsepower CAT, Komatsu, and Volvo mining equipment fleets with IoT diagnostics, oil tribology analysis, and certified operator training.",
    image: "/maxpak/earthmoving_excavators.jpg",
    tag: "Heavy Fleet",
    icon: Truck,
    deliverables: [
      "Continuous IoT telemetry tracking fuel burn, tire health, and cycle load",
      "Predictive vibration & tribology oil analysis ensuring 92%+ availability",
      "Certified heavy equipment operator and mine mechanic training programs",
    ],
  },
  {
    id: "processing",
    title: "Mineral Processing",
    subtitle: "Crushing, SAG Milling, Flotation & Smelting",
    desc: "Engineering high-recovery beneficiation complexes with primary gyratory crushers, SAG ball mills, selective froth flotation cells, and induction smelting.",
    image: "/maxpak/epc_plant.jpg",
    tag: "Beneficiation",
    icon: FlaskConical,
    deliverables: [
      "Automated froth flotation cells yielding 28–32% export copper concentrates",
      "Knelson gravity concentration and induction smelting for 99.4% gold doré",
      "Closed-loop SCADA slurry monitoring and 92% process water recovery",
    ],
  },
];

const SERVICE_STATS = [
  { value: "5M+", label: "Tons Mined &\nProcessed", icon: Truck },
  { value: "50+", label: "Completed Mining\nProjects", icon: Mountain },
  { value: "92%", label: "Process Water\nRecycled", icon: Zap },
  { value: "99%", label: "Operational Safety\nCompliance", icon: ShieldCheck },
];

export default function NationalMinesServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = MINING_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Full-Spectrum Capabilities</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.14] mb-5" style={{ color: theme.navy }}>
                Specialized Services for <span style={{ color: theme.gold }}>Modern Mining</span>
              </h1>

              <p className="text-base sm:text-lg font-normal leading-relaxed mb-7 max-w-2xl" style={{ color: theme.textMuted }}>
                From grassroots hyperspectral exploration and diamond core drilling to high-tonnage open-pit extraction, automated froth flotation, and bulk rail infrastructure, National Mines Corporation delivers turnkey engineering across Pakistan&apos;s mineral value chain.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white shadow-sm transition-all duration-300 hover:brightness-110 cursor-pointer"
                  style={{ backgroundColor: theme.gold }}
                >
                  <span>Explore All 8 Services</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/national-mines/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border transition-all duration-300 hover:bg-white cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Request Technical Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual — Unique Slurry & Process Piping Manifold */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[330px] sm:h-[390px] rounded-2xl overflow-hidden shadow-md border mine-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/maxpak/industrial_valves_piping.jpg"
                  alt="High-Pressure Mineral Processing & Beneficiation Plant Piping"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/85 via-transparent to-transparent flex items-end p-5">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-4 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: theme.gold }}>
                      End-to-End Mining Engineering
                    </p>
                    <p className="text-sm font-semibold" style={{ color: theme.navy }}>
                      Exploration · Heavy Extraction · Certified Beneficiation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Metrics Section */}
      <section className="py-9 sm:py-11 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="mine-card rounded-xl p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-2.5" style={{ backgroundColor: `${theme.gold}18` }}>
                    <Icon size={22} style={{ color: theme.gold }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-xs sm:text-[13px] font-semibold tracking-wide uppercase whitespace-pre-line leading-snug" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <SectionLabel center>Comprehensive Portfolio</SectionLabel>
            <SectionHeading center className="mb-3">Our 8 Mining &amp; Mineral Services</SectionHeading>
            <p className="text-base sm:text-[17px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
              Engineered solutions covering the complete mineral value chain from exploration geophysics to export-ready refining.
            </p>

            {/* Live Search */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services (e.g. Exploration, Fleet, Processing)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm sm:text-[15px] font-normal focus:outline-none focus:ring-2 focus:ring-[#C59B27]/40 transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid — 2-col tablet, 4-col large or 2-col crisp large cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="mine-card group rounded-2xl overflow-hidden flex flex-col justify-between bg-white"
                >
                  <div>
                    <div className="mine-img-wrapper block w-full h-48 bg-slate-100 relative">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-bold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.gold}18` }}>
                          <Icon size={18} style={{ color: theme.gold }} />
                        </div>
                        <h3 className="text-lg font-bold tracking-tight leading-snug" style={{ color: theme.navy }}>
                          {svc.title}
                        </h3>
                      </div>

                      <p className="text-xs font-semibold tracking-wide mb-2.5 text-amber-700">
                        {svc.subtitle}
                      </p>

                      <p className="text-sm font-normal leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      <div className="space-y-2 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                        {svc.deliverables.slice(0, 2).map((d, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: theme.forestGreenMid }} />
                            <span className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                    <Link
                      href="/group-companies/national-mines/contact"
                      className="mine-link-arrow cursor-pointer"
                    >
                      <span>Inquire about capability</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-7 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#0B1B2B] text-white" style={{ borderColor: theme.borderDark }}>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: theme.goldLight }}>
                Technical Consulting &amp; Mine Operations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-white">
                Require Specialized Mining or Geological Contracting?
              </h2>
              <p className="text-sm sm:text-base font-normal max-w-xl text-slate-200 leading-relaxed">
                Our senior mining engineers, geochemists, and heavy fleet specialists conduct JORC feasibility audits and turnkey contract mining operations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all shadow-sm hover:brightness-110 cursor-pointer"
                style={{ backgroundColor: theme.gold }}
              >
                <span>Request Technical Assessment</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
