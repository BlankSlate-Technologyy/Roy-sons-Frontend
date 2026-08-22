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
  { value: "17", label: "UN Sustainable Development\nGoals Integrated", icon: Leaf },
  { value: "15+", label: "Years of Responsible\nAdvisory Stewardship", icon: Award },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: FileSearch,
    title: "Environmental & Social Impact Assessments (ESIA / EIA)",
    desc: "We conduct comprehensive Environmental Impact Assessments (EIA), Initial Environmental Examinations (IEE), and Social Impact Audits required for major infrastructure, industrial developments, and energy projects.",
    features: [
      "Rigorous environmental baseline sampling for air, water, and soil quality",
      "Public hearing facilitation and local community stakeholder consensus building",
      "Securing statutory Environmental Protection Agency (EPA) NOC approvals",
    ],
  },
  {
    icon: Scale,
    title: "Green Public-Private Partnership (PPP) Concession Structuring",
    desc: "We embed climate resilience standards, green building specifications, and ESG key performance indicators directly into government concession agreements and tender bidding documentation.",
    features: [
      "Structuring green bonds and climate finance subsidies for municipal infrastructure",
      "Contractual lifecycle energy efficiency incentives for private concessionaires",
      "Evaluating climate risk vulnerability for transportation and flood mitigation projects",
    ],
  },
  {
    icon: Leaf,
    title: "Corporate ESG Strategy & Sustainability Frameworks",
    desc: "We help corporations, financial institutions, and conglomerates design comprehensive Environmental, Social, and Governance (ESG) frameworks aligned with Global Reporting Initiative (GRI) and ISSB standards.",
    features: [
      "Materiality assessments and non-financial sustainability reporting roadmaps",
      "Decarbonization pathway modeling and carbon offset feasibility analysis",
      "Board governance, anti-corruption policies, and corporate diversity metrics",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Sustainable Supply Chain & Industrial Circularity",
    desc: "We advise manufacturing industries and special economic zones on industrial symbiosis, water recycling feasibility, renewable captive power, and ethical supplier procurement auditing.",
    features: [
      "Industrial effluent treatment plant (ETP) techno-economic feasibility studies",
      "Waste-to-energy and industrial scrap recycling economic models",
      "Responsible procurement governance preventing labor exploitation and hazardous waste",
    ],
  },
];

export default function PakConsultSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#48525D] font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Development &amp; ESG Advisory</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slateDark }}>
                Sustainable Advisory For <span style={{ color: theme.slate }}>Long-Term Economic Resilience</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Pakistani Consultancy Services, sustainability is an economic and governance imperative. Through rigorous Environmental Impact Assessments (EIA), green PPP concession structuring, corporate ESG frameworks, and circular supply chain advisory, we enable sustainable economic progress.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/pakistan-consultancy/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.slate }}
                >
                  <span>Request ESG Advisory Scoping</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/pakistan-consultancy/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.slateDark }}
                >
                  <span>Explore Strategic Studies</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/pakconsult_hero_strategy.svg"
                  alt="Sustainable Advisory and Environmental Feasibility"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E242B]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#DFC48B]">
                      ESG Advisory Excellence
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.slateDark }}>
                      EIA Studies · Green PPPs · GRI Reporting
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
            {SUSTAINABILITY_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="pakconsult-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.slate}10` }}>
                    <Icon size={22} style={{ color: theme.slate }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.slateDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Pillars Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Strategic Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable Advisory</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Proven consulting methodologies designed to ensure environmental sustainability, social equity, and corporate governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="pakconsult-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.slate}10` }}>
                      <Icon size={26} style={{ color: theme.slate }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.slateDark }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(214, 220, 226, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#C5A059]" />
                          <span className="text-xs font-medium text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A6823B]">
                INTEGRATE SUSTAINABILITY INTO YOUR NEXT MEGA PROJECT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.slateDark }}>
                Conduct Bankable Environmental &amp; ESG Feasibilities
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full EPA statutory filing support, climate resilience risk modeling, and international DFI ESG compliance audits.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.slate }}
              >
                <span>Request Sustainability Review</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.slate, color: theme.slate }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PakConsultFooter />
    </main>
  );
}
