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
  Phone,
  Search,
  Award,
  Truck,
  ShieldCheck,
  Zap,
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
    id: "exploration",
    title: "Mineral Exploration & Core Drilling",
    subtitle: "Satellite Hyperspectral Mapping & Diamond Core Assays",
    desc: "Deploying deep exploration diamond core drilling rigs, seismic surveys, and geochemical laboratory testing to pinpoint high-grade ore deposits with sub-meter geological accuracy.",
    image: "/mine_geology_core.svg",
    tag: "Exploration & Geology",
    icon: Mountain,
    deliverables: [
      "Diamond core drilling up to 1,500m depth with full core recovery",
      "Satellite GIS & hyperspectral structural mapping",
      "3D computerized ore body stratigraphy & block modeling",
      "Certified geochemical lab assays and grade distribution reports",
    ],
  },
  {
    id: "planning",
    title: "Mine Planning & Development",
    subtitle: "Strategic Engineering & Economic Feasibility Studies",
    desc: "Complete mine life-cycle engineering from pit limit optimization to geotechnical slope stability, haul road design, drainage networks, and environmental approvals.",
    image: "/mine_hero_openpit.svg",
    tag: "Mine Engineering",
    icon: HardHat,
    deliverables: [
      "Open-pit optimization and underground tunnel design",
      "Geotechnical stability modeling and rock mechanics analysis",
      "Haul road, crushing pad, and water management layout design",
      "Full bankable feasibility studies (BFS) compliant with global standards",
    ],
  },
  {
    id: "extraction",
    title: "Heavy Mining Operations",
    subtitle: "Open-Pit & Underground Bulk Material Extraction",
    desc: "Utilizing modern electric excavators, rotary blast hole drills, and rigid-frame haul trucks to maintain high tonnage output while maintaining strict zero-harm safety standards.",
    image: "/mine process.png",
    tag: "Extraction Operations",
    icon: Drill,
    deliverables: [
      "Precision controlled blasting minimizing flyrock and seismic vibration",
      "High-capacity excavator fleets operating 24/7 in continuous shifts",
      "Automated fleet dispatch with real-time GPS load telemetry",
      "Continuous bench wall and slope radar monitoring",
    ],
  },
  {
    id: "processing",
    title: "Mineral Processing & Refining",
    subtitle: "Crushing, Froth Flotation & High-Purity Beneficiation",
    desc: "State-of-the-art beneficiation facilities designed to maximize mineral recovery rates through primary crushing, ball milling, froth flotation cells, and magnetic separation.",
    image: "/mine technology.png",
    tag: "Refining & Metallurgy",
    icon: FlaskConical,
    deliverables: [
      "Multi-stage primary and tertiary crushing & screening circuits",
      "Froth flotation cells recovering high-grade copper and polymetallic ores",
      "Gravity separation and smelting producing high-purity gold bullion",
      "Automated quality control labs monitoring batch grade purity",
    ],
  },
  {
    id: "environmental",
    title: "Environmental Management & ESG",
    subtitle: "Progressive Rehabilitation, Water Recycling & Clean Tailings",
    desc: "Integrating sustainable mining practices from day one through progressive backfilling, tree planting, closed-loop water treatment, and zero-leak tailings storage facilities.",
    image: "/mine header.png",
    tag: "ESG & Sustainability",
    icon: Leaf,
    deliverables: [
      "Progressive re-contouring of spent benches and native flora planting",
      "Closed-loop process water recycling reducing freshwater extraction",
      "Dry-stack tailings filtration eliminating hazardous liquid dams",
      "Continuous air, dust, and groundwater quality monitoring",
    ],
  },
  {
    id: "consultancy",
    title: "Mining Consultancy & Audits",
    subtitle: "Regulatory Licensing, Asset Valuation & JORC Compliance",
    desc: "Providing high-level technical and advisory consultancy to mining concession holders, investment funds, and industrial conglomerates across Pakistan.",
    image: "/mine_geology_core.svg",
    tag: "Technical Advisory",
    icon: BarChart3,
    deliverables: [
      "Government mining lease applications, renewals, and compliance audits",
      "Independent technical expert reports (Competent Person&apos;s Report)",
      "Mineral concession commercial asset valuation and due diligence",
      "Mine closure plans and statutory environmental decommissioning",
    ],
  },
];

const SERVICE_STATS = [
  { value: "5M+", label: "Tons Extracted", icon: Truck },
  { value: "50+", label: "Mining Projects", icon: Mountain },
  { value: "99%", label: "Safety Compliance", icon: ShieldCheck },
  { value: "99.4%", label: "Refining Purity", icon: Award },
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
    <main className="min-h-screen bg-white text-[#16243E] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>End-To-End Resource Solutions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
                Integrated Mining &amp; <span style={{ color: theme.gold }}>Mineral Processing Services</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From initial diamond core exploration and computerized geological modeling to heavy open-pit extraction, beneficiation plants, and environmental land rehabilitation.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore All 6 Capabilities</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/national-mines/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Request Technical Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/mine_hero_openpit.svg"
                  alt="National Mines Heavy Excavation and Extraction"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16243E]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.gold }}>
                      Heavy Extraction Operations
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navy }}>
                      Open-Pit &amp; Underground Concessions in Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numerical Metrics Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="nmc-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navy }}>
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
            <SectionLabel center>Our Core Capabilities</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Mining Solutions</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Fully certified, equipped with advanced processing circuits and heavy machinery fleets.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search mining services (e.g. Drilling, Processing, ESG)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16243E] transition-all bg-white shadow-xs"
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
                  className="nmc-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm" style={{ color: theme.navy, borderColor: theme.border }}>
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
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.navy }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: theme.gold }}>
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.navy }}>
                          Key Technical Deliverables:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: theme.gold }} />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/national-mines/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navy }}
                    >
                      <span>Inquire About This Capability</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.gold }}>
                NEED TECHNICAL DRILLING OR MINING CONSULTANCY?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navy }}>
                Speak With Our Chief Geologists
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Submit your mining concession details or raw material specifications to receive detailed assay data and operational quotes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-mines/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Consult Our Team</span>
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

      <NationalMinesFooter />
    </main>
  );
}
