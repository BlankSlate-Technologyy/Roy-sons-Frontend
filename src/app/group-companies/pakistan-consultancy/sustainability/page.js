"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Leaf,
  FileSearch,
  Scale,
  Sparkles,
  Droplets,
  Sun,
  Wind,
  Globe2,
  Trees,
  Users2,
} from "lucide-react";
import {
  theme,
  PakConsultNavbar,
  PakConsultFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/PakConsultShared";

const SUSTAINABILITY_STATS = [
  { value: "400+", label: "Sustainable Feasibilities\nDelivered Nationwide", icon: FileSearch },
  { value: "100%", label: "Compliance with EPA &\nMultilateral DFI Standards", icon: ShieldCheck },
  { value: "17", label: "UN Sustainable Development\nGoals Integrated", icon: Globe2 },
  { value: "15+", label: "Years of Responsible\nAdvisory Stewardship", icon: Award },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Trees,
    title: "Environmental & Social Impact Assessments (ESIA / EIA)",
    tag: "Environmental Governance",
    image: "/images/pakconsult/sustainability_environmental.jpg",
    desc: "Comprehensive Environmental Impact Assessments (EIA), Initial Environmental Examinations (IEE), and Social Safeguard Audits required for major infrastructure, industrial developments, and energy projects.",
    features: [
      "Rigorous environmental baseline sampling for air, water, and soil quality",
      "Public hearing facilitation and local community stakeholder consensus building",
      "Securing statutory Environmental Protection Agency (EPA) NOC approvals",
      "Biodiversity preservation and sensitive habitat mitigation frameworks",
    ],
  },
  {
    icon: Sun,
    title: "Clean Energy Transition & Decarbonization Pathways",
    tag: "Clean Energy",
    image: "/images/pakconsult/sustainability_energy.jpg",
    desc: "Structuring commercial renewable energy additions, industrial captive solar PV conversions, and corporate carbon decarbonization blueprints compliant with national emission targets.",
    features: [
      "Solar, wind, and biomass techno-economic feasibility studies",
      "Corporate greenhouse gas (GHG) accounting across Scope 1, 2, and 3 emissions",
      "NEPRA regulatory filing and competitive renewable tariff petitions",
      "Carbon credit generation and voluntary carbon market (VCM) monetisation",
    ],
  },
  {
    icon: Droplets,
    title: "Water Resource Governance & Industrial Circularity",
    tag: "Water & Effluent",
    image: "/images/pakconsult/sustainability_resource.jpg",
    desc: "Engineering closed-loop water recycling schemes, zero liquid discharge (ZLD) feasibilities, and industrial effluent treatment plants (ETP) for heavy manufacturing complexes.",
    features: [
      "Industrial wastewater effluent treatment plant (ETP) techno-economic design",
      "Water footprint audits and ground-water extraction sustainability modeling",
      "Industrial symbiosis and by-product material recycling economics",
      "Municipal stormwater retention and rainwater harvesting master plans",
    ],
  },
  {
    icon: Globe2,
    title: "Climate Vulnerability & Infrastructure Resilience",
    tag: "Climate Adaptation",
    image: "/images/pakconsult/sustainability_climate.jpg",
    desc: "Integrating climate stress-testing into transport corridors, drainage networks, and commercial assets to protect capital investments against severe meteorological shocks.",
    features: [
      "Hydrological flood risk modeling under severe climate change scenarios",
      "Heat island mitigation and passive thermal building engineering designs",
      "Cost-benefit analysis of climate adaptation engineering investments",
      "Disaster recovery planning and asset business continuity frameworks",
    ],
  },
  {
    icon: Leaf,
    title: "Sustainable Urban & Infrastructure Master Planning",
    tag: "Green Infrastructure",
    image: "/images/pakconsult/sustainability_dev.jpg",
    desc: "Designing eco-conscious urban developments, transit-oriented communities, and green Special Economic Zones with native landscaping and energy-efficient utilities.",
    features: [
      "Green building certification guidance (LEED, EDGE, and PEEC benchmarks)",
      "Transit-oriented development (TOD) reducing vehicular carbon footprint",
      "Urban micro-climate regulation via extensive canopy shelterbelts",
      "Low-impact development (LID) sustainable stormwater drainage channels",
    ],
  },
  {
    icon: Users2,
    title: "Community Equity, Inclusivity & Resettlement Planning",
    tag: "Social Safeguards",
    image: "/images/pakconsult/sustainability_community.jpg",
    desc: "Developing internationally accredited Resettlement Action Plans (RAP) and stakeholder consultation protocols adhering strictly to World Bank and ADB Safeguard Policies.",
    features: [
      "Livelihood restoration frameworks and compensation modeling",
      "Socio-economic baseline surveys and gender inclusion indicators",
      "Grievance Redress Mechanisms (GRM) for affected rural communities",
      "Corporate Social Responsibility (CSR) fund allocation roadmaps",
    ],
  },
];

export default function PakConsultSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* ─── EDITORIAL HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative min-h-[420px] lg:h-[460px] flex items-center overflow-hidden bg-slate-900">
        <Image
          src="/images/pakconsult/sustainability_hero.jpg"
          alt="Sustainable Development & ESG Governance"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071727]/95 via-[#0A2540]/85 to-[#0A2540]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Sustainable Advisory Practice</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Pioneering ESG, Environmental &amp; Climate Resilience in Pakistan
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              At Pakistan Consultancy Services, sustainability is an economic and fiduciary imperative. Through empirical Environmental Impact Assessments (EIA), green PPP concession structuring, and climate adaptation frameworks, we safeguard investments for generations.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#0D7C85]" />
                <span>100% EPA Statutory Compliance</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#C5A059]" />
                <span>World Bank &amp; IFC Standards</span>
              </span>
              <span>•</span>
              <span>UN SDGs Aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS COUNTER STRIP ───────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {SUSTAINABILITY_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 text-center flex flex-col items-center justify-center shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 bg-teal-50 text-[#0D7C85]">
                    <Icon size={20} />
                  </div>
                  <div className="text-[#0A2540] mb-1">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[11.5px] font-semibold text-slate-500 uppercase tracking-wider whitespace-pre-line leading-tight">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6 SUSTAINABILITY PILLARS GRID ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Comprehensive Governance</SectionLabel>
            <SectionHeading center className="mb-3">
              The 6 Pillars of Sustainable Advisory
            </SectionHeading>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Empirical methodologies ensuring that every capital investment balances economic return with environmental integrity and social equity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Real Image Header */}
                    <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#0A2540]/90 text-white backdrop-blur-xs">
                          {pillar.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0D7C85] flex items-center justify-center mb-3">
                        <Icon size={18} />
                      </div>

                      <h3 className="text-[17px] font-bold text-[#0A2540] mb-2 leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="text-[13px] text-slate-600 leading-relaxed mb-5 font-normal">
                        {pillar.desc}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 pt-4 border-t border-slate-100">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#0A2540]">
                          Practice Deliverables:
                        </p>
                        {pillar.features.map((f) => (
                          <div key={f} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-[#0D7C85]" />
                            <span className="text-[12px] text-slate-600 leading-tight">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/group-companies/pakistan-consultancy/contact"
                      className="w-full py-2.5 rounded-lg bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-[#0D7C85] text-xs font-bold text-[#0A2540] hover:text-[#0D7C85] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Inquire About ESG Feasibility</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-[#0A2540] to-[#0C1E2E] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] block mb-2">
                Sustainable Infrastructure &amp; ESG Scoping
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Conduct Bankable Environmental &amp; ESG Feasibilities
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our environmental scientists and ESG partners to initiate statutory EPA approvals, carbon accounting, or climate vulnerability assessments.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#0D7C85] hover:bg-[#08545A] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Schedule ESG Scoping Call
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone size={15} />
                <span>042-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PakConsultFooter />
    </main>
  );
}
