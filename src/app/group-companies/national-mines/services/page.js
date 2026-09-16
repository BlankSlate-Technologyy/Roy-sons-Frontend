"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mountain,
  HardHat,
  Drill,
  FlaskConical,
  Leaf,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Search,
  Award,
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
    desc: "Deploying rigid haul truck fleets, electric hydraulic excavators, and rotary blast drill rigs to maintain continuous, high-volume ore extraction under strict zero-harm safety standards.",
    image: "/services/mining-1.jpg",
    tag: "Extraction",
    icon: Drill,
    deliverables: [
      "Precision controlled blasting minimizing ore dilution and seismic vibration",
      "High-capacity 100-ton haulage truck fleets operating on 24/7 rotational shifts",
      "Real-time GPS dispatch telemetry optimizing pit shovel-and-truck cycles",
      "Automated continuous bench wall and slope radar stability monitoring",
    ],
  },
  {
    id: "exploration",
    title: "Mineral Exploration",
    subtitle: "Hyperspectral Satellite GIS & Diamond Core Drilling",
    desc: "Locating high-grade ore deposits with sub-meter geological accuracy through satellite remote sensing, airborne geophysics, geochemical soil assays, and deep diamond core drilling.",
    image: "/mine header.png",
    tag: "Exploration",
    icon: Mountain,
    deliverables: [
      "Diamond core wireline drilling up to 1,500m depth with complete core recovery",
      "Hyperspectral satellite structural mapping identifying hydrothermal alteration zones",
      "3D computerized ore body stratigraphy, grade distribution, and block modeling",
      "Accredited geochemical laboratory assays (fire assay, ICP-MS, XRF)",
    ],
  },
  {
    id: "development",
    title: "Mine Development",
    subtitle: "Pit Limit Optimization & Bankable Engineering Design",
    desc: "Comprehensive engineering from pit shell design to rock mechanics, slope stability, haul road grading, dewatering networks, and full bankable feasibility studies (BFS).",
    image: "/services/mining-1.jpg",
    tag: "Engineering",
    icon: HardHat,
    deliverables: [
      "Computerized Lerchs-Grossmann open-pit optimization and underground decline design",
      "Geotechnical numerical modeling and rock mass rating (RMR/Q-system) analysis",
      "Heavy haul road geometry, drainage channels, and crushing pad civil engineering",
      "Bankable feasibility studies compliant with JORC and NI 43-101 reporting codes",
    ],
  },
  {
    id: "resource-mgmt",
    title: "Resource Management",
    subtitle: "Mineral Economics & JORC-Compliant Reserve Modeling",
    desc: "Rigorous geological modeling and mineral resource reconciliation ensuring maximum economic recovery, ore blending precision, and transparent reserve audits for sovereign and corporate stakeholders.",
    image: "/services/mining-2.jpg",
    tag: "Resource Economics",
    icon: Scale,
    deliverables: [
      "Geostatistical grade kriging and 3D variography block modeling",
      "Strategic ore blending to meet exact customer metallurgy and smelting requirements",
      "Annual Competent Person resource reconciliation and depletion audits",
      "Long-term mine life-of-asset (LOM) production schedule optimization",
    ],
  },
  {
    id: "geological",
    title: "Geological Services",
    subtitle: "Certified Laboratory Assays & Petrographic Structural Audits",
    desc: "Independent geological advisory and laboratory testing providing precise elemental assays, mineralogical petrography, core logging, and statutory mineral concession valuations.",
    image: "/mine process.png",
    tag: "Geological Testing",
    icon: Layers,
    deliverables: [
      "Certified laboratory fire assays for precious metals (Gold, Silver, Platinum)",
      "High-precision X-Ray Fluorescence (XRF) and XRD mineralogical identification",
      "Oriented diamond core structural logging and digital database management",
      "Statutory mineral concession licensing and compliance due diligence audits",
    ],
  },
  {
    id: "infrastructure",
    title: "Mining Infrastructure",
    subtitle: "Heavy Haulage Corridors, Water Systems & Rail Loadouts",
    desc: "Turnkey development of essential mining site infrastructure including heavy machinery maintenance shops, high-voltage substations, dry-stack tailings filtration, and rail freight sidings.",
    image: "/services/mining-2.jpg",
    tag: "Site Infrastructure",
    icon: Building2,
    deliverables: [
      "Heavy vehicle workshop (HVWS) maintenance bays with high-tonnage overhead cranes",
      "High-efficiency solar hybrid microgrids and diesel generator synchronization",
      "Engineered dry-stack tailings filtration storage facilities with zero dam failure risk",
      "Direct bulk rail siding integration with automated 2,000-ton train loadout silos",
    ],
  },
  {
    id: "equipment",
    title: "Equipment & Operations",
    subtitle: "Fleet Management, Telemetry & Predictive Maintenance",
    desc: "Managing high-horsepower mining equipment fleets with real-time IoT sensors, computerized dispatch, predictive oil analysis, and certified machine operator training programs.",
    image: "/mine header.png",
    tag: "Heavy Fleet",
    icon: Truck,
    deliverables: [
      "Continuous equipment telemetry tracking fuel burn, tire pressure, and engine health",
      "Predictive vibration and tribology lubricant analysis preventing costly catastrophic failures",
      "Structured OEM maintenance cycles ensuring 92%+ mechanical fleet availability",
      "Certified equipment operator and heavy plant mechanic technical training schools",
    ],
  },
  {
    id: "processing",
    title: "Mineral Processing",
    subtitle: "Closed-Loop Crushing, Froth Flotation & Smelting",
    desc: "Engineering modern beneficiation facilities that maximize valuable mineral recovery through automated primary gyratory crushers, ball mills, selective flotation cells, and induction smelting.",
    image: "/services/mining-2.jpg",
    tag: "Beneficiation",
    icon: FlaskConical,
    deliverables: [
      "Multi-stage primary gyratory and secondary cone crushing & vibrating screen circuits",
      "Automated froth flotation cells producing 28–32% high-grade copper concentrates",
      "Centrifugal gravity Knelson concentrators and induction smelting for 99.4% gold doré",
      "Automated slurry analyzers and computerized process control (SCADA) systems",
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
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Full-Spectrum Capabilities</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-5" style={{ color: theme.navy }}>
                Specialized Services for <span style={{ color: theme.gold }}>Modern Mining</span>
              </h1>

              <p className="text-sm sm:text-base font-normal leading-relaxed mb-8 max-w-2xl" style={{ color: theme.textMuted }}>
                From grassroots satellite exploration and diamond core drilling to high-tonnage open-pit extraction, automated froth flotation, and site infrastructure, National Mines Corporation delivers end-to-end engineering excellence across the mining lifecycle.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white shadow-xs transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.gold }}
                >
                  <span>Explore All 8 Services</span>
                  <ArrowRight size={14} />
                </a>

                <Link
                  href="/group-companies/national-mines/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold border transition-all duration-300 hover:bg-white cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Request Technical Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[480px] h-[320px] sm:h-[380px] rounded-2xl overflow-hidden shadow-md border mine-card bg-white" style={{ borderColor: theme.border }}>
                <Image
                  src="/services/mining-1.jpg"
                  alt="Modern Mining Heavy Excavation Fleet"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111C]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl p-3.5 border shadow-sm w-full" style={{ borderColor: theme.border }}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: theme.gold }}>
                      End-to-End Mining Operations
                    </p>
                    <p className="text-xs sm:text-[13px] font-medium" style={{ color: theme.navy }}>
                      Exploration · Extraction · Metallurgical Beneficiation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Metrics Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {SERVICE_STATS.map((stat, idx) => {
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
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
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

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel center>Comprehensive Portfolio</SectionLabel>
            <SectionHeading center className="mb-3">Our 8 Mining &amp; Mineral Services</SectionHeading>
            <p className="text-xs sm:text-sm font-normal" style={{ color: theme.textMuted }}>
              Engineered solutions covering the entire mineral value chain from exploration geophysics to export-ready processing.
            </p>

            {/* Live Search */}
            <div className="mt-6 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services (e.g. Operations, Exploration, Processing)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#C59B27] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
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
                    {/* Image with subtle hover zoom */}
                    <div className="mine-img-wrapper block w-full h-44 bg-slate-100 relative">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-white/95 border shadow-xs" style={{ color: theme.navy, borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.gold}15` }}>
                          <Icon size={16} style={{ color: theme.gold }} />
                        </div>
                        <h3 className="text-[16px] font-semibold tracking-tight" style={{ color: theme.navy }}>
                          {svc.title}
                        </h3>
                      </div>

                      <p className="text-[11px] font-medium tracking-wide mb-2 text-amber-700">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs font-normal leading-relaxed text-slate-500 mb-3 line-clamp-3">
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-1.5 pt-3 border-t" style={{ borderColor: theme.borderLight }}>
                        {svc.deliverables.slice(0, 2).map((d, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={13} className="flex-shrink-0 mt-0.5" style={{ color: theme.forestGreenMid }} />
                            <span className="text-xs font-normal text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subtle Link — NO BIG BUTTONS */}
                  <div className="px-5 pb-4 pt-2 border-t" style={{ borderColor: theme.borderLight }}>
                    <Link
                      href="/group-companies/national-mines/contact"
                      className="mine-link-arrow text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                      style={{ color: theme.gold }}
                    >
                      <span>Inquire about this capability</span>
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA / Inquiry Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between border bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1.5" style={{ color: theme.gold }}>
                Technical Consulting &amp; Mine Operations
              </span>
              <h2 className="text-xl sm:text-2xl font-bold mb-1.5" style={{ color: theme.navy }}>
                Require Specialized Mining or Geological Contracting?
              </h2>
              <p className="text-xs sm:text-sm font-normal max-w-xl" style={{ color: theme.textMuted }}>
                Our team of senior mining engineers, geochemists, and fleet specialists conducts feasibility audits and turnkey contract mining operations.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href="/group-companies/national-mines/contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2 transition-all shadow-xs hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Technical Assessment</span>
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
