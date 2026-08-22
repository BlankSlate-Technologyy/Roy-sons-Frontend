"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Factory,
  Snowflake,
  Package,
  Boxes,
  FlaskConical,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Users2,
  Sparkles,
} from "lucide-react";
import {
  theme,
  WaltonFoodNavbar,
  WaltonFoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/WaltonFoodShared";

const FOOD_MANUFACTURING_SERVICES = [
  {
    id: "modern-processing",
    title: "Modern Automated Food Processing",
    subtitle: "High-Speed Agricultural Produce Sorting, Steaming & Canning",
    desc: "Industrial-scale automated processing lines handling agricultural produce, grains, pulses, and dairy with automated optical sorting and aseptic canning.",
    image: "/waltonfood_hero_processing.svg",
    tag: "Automated Processing",
    icon: Factory,
    deliverables: [
      "High-speed optical laser color sorting eliminating defective grains and produce",
      "Automated continuous steam peelers, blanchers, and commercial pureeing mills",
      "Aseptic hot-fill bottling and retort canning lines with F0 sterilization monitoring",
      "High-capacity industrial silos and climate-controlled raw grain storage facilities",
    ],
  },
  {
    id: "frozen-production",
    title: "Frozen Food Production (Cryogenic IQF)",
    subtitle: "Flash-Frozen French Fries, Vegetables, Appetizers & Parathas",
    desc: "Utilizing sub-zero -38°C Individual Quick Freezing (IQF) tunnels to preserve fresh cellular structure, crispness, and vitamins in frozen foods.",
    image: "/waltonfood_hero_processing.svg",
    tag: "Cryogenic IQF Freezing",
    icon: Snowflake,
    deliverables: [
      "Cryogenic IQF fluid-bed freezing tunnel locking in peak harvest farm freshness",
      "Automated dough lamination lines for multi-layered frozen parathas and samosas",
      "Crispy coated French fry processing line with continuous oil filtration systems",
      "Automated weigh-filling into barrier film retail bags and export master cartons",
    ],
  },
  {
    id: "packaged-goods",
    title: "Packaged FMCG Consumer Goods",
    subtitle: "Shelf-Stable Retort Pouches, MAP Packaging & Confectionery",
    desc: "Manufacturing retail-ready packaged food products under pharmaceutical-grade cleanroom packaging environments with Modified Atmosphere Packaging (MAP).",
    image: "/waltonfood_hero_processing.svg",
    tag: "FMCG Packaged Goods",
    icon: Package,
    deliverables: [
      "Ready-to-eat ambient shelf-stable retort meal pouches requiring zero refrigeration",
      "Modified Atmosphere Packaging (MAP) extending fresh bakery and pasta shelf-life",
      "High-volume confectionery, premium biscuits, and extruded savory snack lines",
      "Laser batch coding, dynamic checkweighing, and automated case packaging",
    ],
  },
  {
    id: "private-label",
    title: "Private Label & OEM Contract Packing",
    subtitle: "Custom Brand Formulations, Packaging Design & Turnkey Co-Packing",
    desc: "Full-service private label co-packing for national retail supermarkets, FMCG brand owners, and multinational distributors across 25+ countries.",
    image: "/waltonfood_hero_processing.svg",
    tag: "OEM Private Labeling",
    icon: Boxes,
    deliverables: [
      "Confidential recipe development, sensory optimization, and flavor profiling",
      "Custom branded packaging: stand-up zipper pouches, pillow packs, jars, and tins",
      "Flexible minimum order quantities (MOQs) for pilot product launches and mega-runs",
      "Export container stuffing, phytosanitary certifications, and customs documentation",
    ],
  },
  {
    id: "food-rd",
    title: "Food R&D & Recipe Innovation Lab",
    subtitle: "Culinary Science, Clean-Label Reformulation & Shelf-Life Testing",
    desc: "Equipped with pilot food processing equipment, texture analyzers, and sensory tasting chambers to develop cutting-edge culinary products.",
    image: "/waltonfood_hero_processing.svg",
    tag: "Culinary R&D",
    icon: FlaskConical,
    deliverables: [
      "Formulating clean-label recipes with zero artificial preservatives or trans-fats",
      "Accelerated thermal and humidity shelf-life testing chambers (3 to 24 months)",
      "Sugar and sodium reduction reformulation while maintaining gourmet taste",
      "Sensory panel testing and consumer texture analysis benchmarks",
    ],
  },
  {
    id: "quality-assurance",
    title: "Quality Control & Food Safety Assurance",
    subtitle: "HACCP, ISO 22000, In-Line Metal Detection & Halal Traceability",
    desc: "Operating an in-house certified microbiology and chemical laboratory conducting real-time in-line testing across every single production run.",
    image: "/waltonfood_hero_processing.svg",
    tag: "Food Safety QA",
    icon: ShieldCheck,
    deliverables: [
      "In-line multi-frequency metal detectors and X-ray inspection on all packaging lines",
      "Microbiological culturing for pathogens, yeast, and mold with 24-hour turnaround",
      "Comprehensive raw material pesticide residue and heavy metal spectrometry testing",
      "100% Halal certification audit compliance and Punjab Food Authority licensing",
    ],
  },
];

const SERVICE_STATS = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "400+", label: "Products Manufactured", icon: Package },
  { value: "120000", label: "Tons Annual Output", icon: Factory },
  { value: "99.8%", label: "QA Pass Rate", icon: ShieldCheck },
];

export default function WaltonFoodServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = FOOD_MANUFACTURING_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#3D4E44] font-sans antialiased overflow-x-hidden">
      <WaltonFoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Food Manufacturing &amp; Processing Divisions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.greenDark }}>
                Industrial Food Processing &amp; <span style={{ color: theme.green }}>Private Label Capabilities</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From high-speed automated canning and cryogenic IQF flash-freezing to retail FMCG packaging, turnkey private label co-packing, and culinary R&amp;D, Walton &amp; Morris Foods delivers manufacturing excellence engineered to global standards.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.green }}
                >
                  <span>Explore All 6 Divisions</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/walton-mirror-food/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.greenDark }}
                >
                  <span>Request OEM / B2B Quote</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-emerald-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/waltonfood_hero_processing.svg"
                  alt="Walton & Morris Foods Manufacturing Divisions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.ochre }}>
                      Manufacturing Plant Infrastructure
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.greenDark }}>
                      IQF Freezing · Automated Canning · Private Labeling
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
                  className="wm-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.green}10` }}>
                    <Icon size={22} style={{ color: theme.green }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.greenDark }}>
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
            <SectionHeading center className="mb-4">Specialized Food Processing &amp; OEM Divisions</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered with advanced European machinery, continuous in-line quality controls, and 100% Halal export accreditation.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search manufacturing divisions (e.g. Processing, IQF Frozen, FMCG, Private Label, R&D, QA)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E6B43] transition-all bg-white shadow-xs"
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
                  className="wm-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1E6B43]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.green}10` }}>
                          <Icon size={20} style={{ color: theme.green }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.greenDark }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#BC8330]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(211, 228, 219, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.greenDark }}>
                          Division Specifications &amp; Standards:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#D89C46]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/walton-mirror-food/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.greenDark }}
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#BC8330]">
                CONTRACT MANUFACTURING &amp; PRIVATE LABELING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.greenDark }}>
                Launch Your Custom Food Brand With Us
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our master food technologists and packaging engineers to initiate recipe formulation, sample development, and bulk production runs.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-mirror-food/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.green }}
              >
                <span>Request OEM Scoping</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                style={{ borderColor: theme.green, color: theme.green }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaltonFoodFooter />
    </main>
  );
}
