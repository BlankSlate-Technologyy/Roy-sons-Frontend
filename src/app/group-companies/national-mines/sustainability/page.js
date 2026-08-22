"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  ShieldCheck,
  Zap,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  HeartPulse,
  Droplets,
  Trees,
  SunMedium,
  TrendingUp,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalMinesShared";

const ESG_STATS = [
  { value: "92%", label: "Process Water\nRecycled", icon: Droplets },
  { value: "100K+", label: "Trees Planted on\nReclaimed Benches", icon: Trees },
  { value: "99%", label: "Environmental\nCompliance Rating", icon: Leaf },
  { value: "0", label: "Lost-Time Safety\nIncidents Record", icon: ShieldCheck },
  { value: "500+", label: "Local Families\nSupported", icon: Users },
];

const ESG_PILLARS = [
  {
    icon: Trees,
    title: "Progressive Land Rehabilitation",
    desc: "We don't wait for mine closure to restore nature. Every exhausted open-pit terrace is systematically graded, covered with fertile topsoil, and planted with indigenous tree and shrub species to restore native ecosystems.",
    features: [
      "Simultaneous reclamation during active mining lifecycles",
      "Erosion control through geo-textiles and hydro-seeding",
      "Creation of sustainable post-mining agricultural pastures",
    ],
  },
  {
    icon: Droplets,
    title: "Closed-Loop Water Stewardship",
    desc: "Operating advanced thickeners, filtration presses, and settling reservoirs to recycle over 92% of water used in flotation and crushing circuits, protecting valuable groundwater reserves in arid regions.",
    features: [
      "Zero-toxic liquid tailings discharge into local rivers or water tables",
      "Automated groundwater quality monitoring piezometers",
      "Rainwater harvesting ponds powering auxiliary dust-suppression sprays",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Zero-Harm Health & Safety",
    desc: "Adhering to ISO 45001 occupational health guidelines. Real-time pit slope stability radar, automated gas detectors, and regular emergency simulation drills ensure our teams return home safe every day.",
    features: [
      "Mandatory PPE and automated fatigue-monitoring in haul trucks",
      "Automated laser and radar slope displacement early warning systems",
      "Full on-site medical dispensaries and emergency response ambulances",
    ],
  },
  {
    icon: Users,
    title: "Community Growth & Social Investment",
    desc: "Investing 5% of concession revenues directly into surrounding rural districts to establish solar-powered water filtration plants, basic health units, and technical mining apprenticeship schools.",
    features: [
      "Priority local hiring and technical skills certification",
      "Free clean drinking water filtration plants for mining villages",
      "Scholarships for local youth pursuing geology and engineering degrees",
    ],
  },
];

export default function NationalMinesSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#16243E] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Environmental, Social &amp; Governance (ESG)</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
                Mining With Responsibility &amp; <span style={{ color: theme.gold }}>Sustainable Stewardship</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At National Mines Corporation, sustainable resource development is an operational mandate. Through progressive land reclamation, water conservation, zero-harm worker safety, and community investment, we build a legacy of responsible prosperity.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/national-mines/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Inquire About ESG Standards</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/national-mines/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>About Our Operations</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/mine header.png"
                  alt="National Mines Environmental Stewardship"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16243E]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.gold }}>
                      Zero-Harm ESG Philosophy
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navy }}>
                      100,000+ Trees Planted · 92% Water Recycled
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Stats Counter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ESG_STATS.map((stat, idx) => {
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

      {/* 4 Pillars of Sustainability */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Strategic Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable Mining</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Actionable commitments that translate into measurable environmental and social outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ESG_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="nmc-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.navy}10` }}>
                      <Icon size={26} style={{ color: theme.navy }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.navy }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0" style={{ color: theme.gold }} />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.gold }}>
                TRANSPARENT ETHICAL EXTRACTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navy }}>
                Require Our ESG &amp; Compliance Audit Reports?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide complete environmental impact assessments, water quality audits, and community development reports upon request.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-mines/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request ESG Report</span>
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
