"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  Leaf,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  theme,
  SwissFarmNavbar,
  SwissFarmFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/SwissFarmShared";

const SUSTAINABILITY_STATS = [
  { value: "100%", label: "Five Freedoms Animal\nWelfare Compliance", icon: HeartPulse },
  { value: "100%", label: "Biogas Energy\nPowered Dairy Barns", icon: Zap },
  { value: "85%", label: "Wash Water Recycled\nin Operations", icon: Droplets },
  { value: "0%", label: "Antibiotic Residue in\nDispatched Milk", icon: ShieldCheck },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: HeartPulse,
    title: "Compassionate Animal Welfare & The 5 Freedoms",
    desc: "We adhere strictly to international animal welfare guidelines. Our cattle enjoy spacious sand-bedded free-stall barns, constant fresh water troughs, robotic grooming brushes, and stress-free handling protocols.",
    features: [
      "Deep organic sand bedding mitigating lameness and bacterial infection",
      "High-Volume Low-Speed (HVLS) cooling fans keeping sheds below 26°C",
      "Automated robotic rotary brushes providing herd relaxation and grooming",
    ],
  },
  {
    icon: Zap,
    title: "Manure Biogas & Circular Renewable Energy",
    desc: "We transform thousands of tons of daily bovine manure into renewable methane gas through industrial anaerobic digesters, powering farm electricity generators and generating zero-fossil-fuel emissions.",
    features: [
      "Continuous bio-digesters producing green electricity for chillers and lights",
      "Elimination of methane greenhouse gas emissions into the atmosphere",
      "Thermal heat recovery heating parlor water sanitization systems",
    ],
  },
  {
    icon: Droplets,
    title: "Closed-Loop Water Conservation",
    desc: "Milk chilling creates clean heated cooling water, which we recycle immediately into cattle drinking troughs and parlor cleaning wash-downs, conserving millions of gallons of fresh groundwater.",
    features: [
      "Plate cooler heat-exchange water routed directly to cow drinking troughs",
      "Advanced sedimentation and filtration ponds cleaning wash water",
      "Zero contaminated liquid runoff into local aquifers or surrounding canals",
    ],
  },
  {
    icon: Leaf,
    title: "Organic Soil Regeneration & Bio-Compost",
    desc: "After biogas extraction, solid digestate is aerated and matured into rich, nitrogen-balanced bio-compost that replaces chemical synthetic fertilizers on alfalfa and corn silage crop fields.",
    features: [
      "Restoration of soil microbial biodiversity and organic carbon levels",
      "100% natural organic fertilizer eliminating synthetic chemical inputs",
      "Improved soil moisture retention cutting crop irrigation requirements",
    ],
  },
];

export default function SwissFarmSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#1C522A] font-sans antialiased overflow-x-hidden">
      <SwissFarmNavbar />

      {/* Hero Section */}
      <section
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b bg-[#F4F8F4]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Dairy Ecology &amp; ESG</SectionLabel>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase mb-5"
                style={{ color: theme.primary }}
              >
                Animal Welfare &amp;{" "}
                <span style={{ color: theme.accentGold }}>Sustainable Dairy Farming</span>
              </h1>

              <p
                className="text-[16px] sm:text-[17.5px] font-medium leading-relaxed mb-7 max-w-2xl"
                style={{ color: theme.textMuted }}
              >
                At Swiss Farms, happy, healthy cows produce pure, wholesome milk. Through circular bio-energy generation, compassionate housing, closed-loop water recycling, and organic soil enrichment, we set the benchmark for ethical dairy agriculture in Pakistan.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/group-companies/swiss-farm/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-extrabold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Inquire About ESG Standards</span>
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/group-companies/swiss-farm/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[15px] font-extrabold border-2 bg-white transition-all duration-300 hover:bg-[#F4F8F4] cursor-pointer"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  <span>About Our Farm Operations</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[520px] h-[320px] sm:h-[380px] rounded-3xl overflow-hidden shadow-xl border group bg-white"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/swiss-card2.png"
                  alt="Swiss Farms Solar-Powered Eco Dairy Complex and Pastures"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/85 via-transparent to-transparent flex items-end p-5">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full"
                    style={{ borderColor: theme.border }}
                  >
                    <p
                      className="text-[13px] font-black uppercase tracking-wider mb-1"
                      style={{ color: theme.accentGold }}
                    >
                      Zero-Waste Dairy Model
                    </p>
                    <p className="text-[15px] font-extrabold" style={{ color: theme.primary }}>
                      100% Animal Welfare · Biogas Power · Bio-Compost
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Forest Green Metrics Strip */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b"
        style={{
          backgroundColor: theme.primaryDark,
          borderColor: "rgba(255,255,255,0.1)",
          color: "#FFFFFF",
        }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
            {SUSTAINABILITY_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="swiss-farm-counter-box rounded-2xl border p-5 text-center flex flex-col items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: theme.primaryCard,
                    borderColor: "rgba(224, 188, 111, 0.28)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: "rgba(224, 188, 111, 0.16)" }}
                  >
                    <Icon size={22} style={{ color: theme.goldBright }} />
                  </div>
                  <div className="mb-1.5 text-white">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[13.5px] font-bold uppercase tracking-wide whitespace-pre-line text-[#DFECE2] leading-snug">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainability Pillars Grid */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-9">
            <SectionLabel center>Strategic Framework</SectionLabel>
            <SectionHeading center className="mb-3">
              Our 4 Pillars of Sustainable Dairy Farming
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[16.5px] font-medium" style={{ color: theme.textMuted }}>
              Proven ethical husbandry and bio-energy systems creating positive environmental and social impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="swiss-farm-card-hover p-7 rounded-3xl border flex flex-col justify-between bg-[#F4F8F4]/70 shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center mb-5 bg-white border shadow-xs"
                      style={{ borderColor: theme.border }}
                    >
                      <Icon size={25} style={{ color: theme.primary }} />
                    </div>

                    <h3 className="text-[21px] font-black mb-3 leading-snug" style={{ color: theme.primary }}>
                      {pillar.title}
                    </h3>

                    <p
                      className="text-[15px] sm:text-[15.5px] font-medium leading-relaxed mb-5"
                      style={{ color: theme.textMuted }}
                    >
                      {pillar.desc}
                    </p>

                    <div
                      className="space-y-2.5 pt-4 border-t"
                      style={{ borderColor: theme.border }}
                    >
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={17}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: theme.accentGold }}
                          />
                          <span className="text-[14.5px] font-semibold text-slate-800">{f}</span>
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

      {/* Executive CTA Section */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-[#F4F8F4]">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row gap-7 items-center justify-between shadow-xl border"
            style={{
              backgroundColor: theme.primaryDark,
              borderColor: "rgba(224, 188, 111, 0.35)",
              color: "#FFFFFF",
            }}
          >
            <div>
              <span
                className="text-[13px] font-black uppercase tracking-widest block mb-2"
                style={{ color: theme.goldBright }}
              >
                VERIFIED SUSTAINABLE DAIRY SOURCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                Require Our Sustainability &amp; Quality Audit Reports?
              </h2>
              <p className="text-[15.5px] font-medium max-w-xl text-[#D8E8DC]">
                We provide complete third-party laboratory microbiological assays, biosecurity certifications, and animal welfare audit documentation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-farm/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[15px] font-extrabold flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.goldBright, color: theme.primaryDark }}
              >
                <span>Request ESG &amp; Lab Audit</span>
                <ArrowRight size={17} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[15px] font-extrabold border-2 border-white/80 text-white flex items-center gap-2 transition-all duration-300 hover:bg-white/10 cursor-pointer"
              >
                <Phone size={16} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissFarmFooter />
    </main>
  );
}
