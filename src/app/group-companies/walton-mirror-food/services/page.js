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
  Send,
} from "lucide-react";
import {
  theme,
  WaltonFoodNavbar,
  WaltonFoodFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
  WholesaleInquiryModal,
} from "../components/WaltonFoodShared";

const FOOD_MANUFACTURING_SERVICES = [
  {
    id: "modern-processing",
    title: "Modern Automated Food Processing & Canning",
    subtitle: "High-Speed Agricultural Produce Sorting, Steaming & Canning",
    desc: "Industrial-scale automated processing lines handling agricultural produce, grains, pulses, and dairy with automated optical sorting and aseptic canning.",
    image: "/waltonfood/hero_food_processing.jpg",
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
    image: "/waltonfood/hero_gourmet_production.jpg",
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
    image: "/waltonfood/card_retort_meals.jpg",
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
    desc: "Full-service private label co-packing for national retail supermarkets, FMCG brand owners, and multinational distributors across 35+ countries.",
    image: "/waltonfood/hero_mega_plant.jpg",
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
    image: "/waltonfood/card_test_kitchen.jpg",
    tag: "Culinary R&D",
    icon: FlaskConical,
    deliverables: [
      "Formulating clean-label recipes with zero artificial preservatives or trans-fats",
      "Accelerated thermal and environmental shelf-life chambers verifying stability",
      "Sensory panel tasting cabins with color-controlled lighting for organoleptic profiling",
      "Nutritional panel profiling and compliance validation for FDA, EU, and GCC markets",
    ],
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance & Halal Compliance",
    subtitle: "ISO 22000, HACCP & Accredited Food Safety Laboratories",
    desc: "Every batch of raw ingredients and finished consumer food undergoes rigorous physical, chemical, and microbiological testing.",
    image: "/waltonfood/card_quality_lab.jpg",
    tag: "Quality & Safety",
    icon: ShieldCheck,
    deliverables: [
      "HACCP and ISO 22000 validated Critical Control Point (CCP) continuous monitoring",
      "Microbiological laboratory testing for Salmonella, E. Coli, Listeria, and yeasts",
      "In-line metal detectors, checkweighers, and X-ray inspection on all packaging lines",
      "Complete lot-by-lot batch traceability from farm-gate intake to container dispatch",
    ],
  },
];

const STATS = [
  { value: "25+", label: "Years Experience", icon: Award },
  { value: "400+", label: "Products Manufactured", icon: Package },
  { value: "120000", label: "Tons Annual Output", icon: Factory },
  { value: "99.8%", label: "QA Pass Rate", icon: ShieldCheck },
];

export default function WaltonFoodServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);

  const filtered = FOOD_MANUFACTURING_SERVICES.filter((s) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      (s.title && s.title.toLowerCase().includes(query)) ||
      (s.desc && s.desc.toLowerCase().includes(query)) ||
      (s.tag && s.tag.toLowerCase().includes(query))
    );
  });

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <WaltonFoodNavbar onOpenWholesaleModal={() => setIsWholesaleOpen(true)} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Food Manufacturing &amp; Processing Divisions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.greenDark }}>
                Industrial Food Processing &amp; <span style={{ color: theme.green }}>Private Label Capabilities</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From high-speed automated canning and cryogenic IQF flash-freezing to retail FMCG packaging, turnkey private label co-packing, and culinary R&amp;D, Walton &amp; Mirror Food delivers manufacturing excellence engineered to global standards.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.green }}
                >
                  <span>Explore Divisions</span>
                  <ArrowRight size={16} />
                </a>

                <button
                  type="button"
                  onClick={() => setIsWholesaleOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-emerald-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.greenDark }}
                >
                  <span>Request OEM / B2B Proposal</span>
                </button>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[480px] h-[360px] sm:h-[400px] rounded-3xl overflow-hidden border shadow-xl group bg-slate-900" style={{ borderColor: theme.border }}>
                <Image
                  src="/waltonfood/hero_food_processing.jpg"
                  alt="Industrial Food Processing Line"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/90 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#D89C46]">
                        120,000 MT Annual Capacity
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-xs sm:text-sm font-bold" style={{ color: theme.greenDark }}>
                      Automated Canning · IQF Freezing · Retort Pouches · Dairy
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs hover:border-[#1E6B43] transition-colors"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.green}12` }}>
                    <Icon size={22} style={{ color: theme.green }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.greenDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 150} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Catalog */}
      <section id="services-catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <SectionLabel>Specialized Capabilities</SectionLabel>
              <SectionHeading>Our Manufacturing Portfolio</SectionHeading>
            </div>

            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search capabilities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs focus:outline-none focus:ring-2 focus:ring-[#1E6B43] bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs hover:shadow-xl hover:border-[#1E6B43] transition-all duration-300 group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="relative w-full h-52 bg-slate-900 overflow-hidden">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061022]/85 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#1E6B43]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.green}12` }}>
                        <Icon size={20} style={{ color: theme.green }} />
                      </div>

                      <h3 className="text-lg font-black mb-1" style={{ color: theme.greenDark }}>
                        {svc.title}
                      </h3>

                      <p className="text-xs font-bold mb-3" style={{ color: theme.ochre }}>
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      <div className="space-y-2 pt-4 border-t" style={{ borderColor: theme.border }}>
                        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.greenDark }}>
                          Division Deliverables:
                        </p>
                        {svc.deliverables.map((d, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-[#1E6B43]" />
                            <span className="text-xs font-medium text-slate-700">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <button
                      type="button"
                      onClick={() => setIsWholesaleOpen(true)}
                      className="w-full py-3 rounded-xl border text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1E6B43] hover:text-white transition-all cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.greenDark }}
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wholesale Modal */}
      <WholesaleInquiryModal
        isOpen={isWholesaleOpen}
        onClose={() => setIsWholesaleOpen(false)}
      />

      <WaltonFoodFooter />
    </main>
  );
}
