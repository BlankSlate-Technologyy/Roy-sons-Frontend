"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  FileSearch,
  Sprout,
  Scale,
  Users2,
  GraduationCap,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  TreePine,
  Wind,
  Droplets,
  BookOpen,
} from "lucide-react";
import {
  theme,
  TDRCNavbar,
  TDRCFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/TDRCShared";

const ABOUT_STATS = [
  { value: "20+", label: "Years of Applied\nResearch Excellence", icon: Award },
  { value: "600+", label: "Completed Research\n& Policy Studies", icon: FileSearch },
  { value: "150+", label: "Scientists, PhDs &\nField Researchers", icon: Users2 },
  { value: "45+", label: "National & International\nInstitutional Partners", icon: ShieldCheck },
  { value: "98%", label: "Research Implementation\nSuccess Rate", icon: Sprout },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Scientific Integrity & Rigor",
    desc: "Every research finding, hydrological baseline, and environmental study is conducted using internationally peer-reviewed methodologies, laboratory controls, and GIS analytics.",
  },
  {
    icon: Leaf,
    title: "Ecological Stewardship",
    desc: "Committed to safeguarding arid ecosystems, restoring biodiversity corridors, and combatting desertification through sustainable agro-forestry and watershed protection.",
  },
  {
    icon: Scale,
    title: "Evidence-Based Policymaking",
    desc: "Delivering empirical data and actionable policy briefs to federal ministries, provincial authorities, and multilateral development banks to drive informed national decisions.",
  },
  {
    icon: Users2,
    title: "Community-Centric Empowerment",
    desc: "Bridging the gap between scientific innovation and rural communities through participatory field programs, agricultural extension, and women livelihood development.",
  },
];

export default function TDRCAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#0E1F17] font-sans antialiased overflow-x-hidden">
      <TDRCNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Thal Development &amp; Research Centre</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.ink }}>
                Advancing Scientific Research &amp; <span style={{ color: theme.primaryDark }}>Sustainable Development</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Thal Development &amp; Research Centre (TDRC) is a premier multidisciplinary research and development institution dedicated to applied environmental sciences, climate change adaptation, hydrological aquifer monitoring, socio-economic policy research, and rural community empowerment across Pakistan.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/TDRC/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primaryDark }}
                >
                  <span>Explore Research Services</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/TDRC/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.ink }}
                >
                  <span>Contact Secretariat</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/tdrc_hero_research.svg"
                  alt="TDRC Environmental Research Centre"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F17]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.primaryDark }}>
                      Multidisciplinary Research
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.ink }}>
                      Applied Science · Climate Studies · EIA Authority
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Number Counters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ABOUT_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="tdrc-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.primary}15` }}>
                    <Icon size={22} style={{ color: theme.primaryDark }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.ink }}>
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

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Graphic */}
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
              <Image
                src="/tdrc_hero_research.svg"
                alt="TDRC Climate Research & Afforestation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1F17]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#7BE0A0] block mb-1">
                    National Applied Research
                  </span>
                  <h4 className="text-base font-bold">600+ Completed Environmental &amp; Policy Projects</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To generate high-impact scientific knowledge, empirical environmental assessments, and evidence-based policy solutions that protect natural ecosystems, build climate resilience, and advance socio-economic prosperity in arid and developing regions.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be recognized globally as South Asia&apos;s center of excellence in arid land ecology, water resource sustainability, and evidence-based development policies that harmonize humanity with nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Guiding Principles</SectionLabel>
            <SectionHeading center className="mb-4">Our Core Values</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              The foundational ethical and scientific standards that govern our research laboratories, field survey teams, and policy advisors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="tdrc-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.primary}15` }}>
                      <Icon size={26} style={{ color: theme.primaryDark }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.ink }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.primaryDark }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.primaryDark }}>
                      ISO / EPA Standards
                    </span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.primaryDark }}>
                COMMISSION AN ENVIRONMENTAL STUDY OR POLICY CONSULTATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.ink }}>
                Collaborate With TDRC Senior Scientists
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Contact our research secretariat to request Environmental Impact Assessments (EIA), GIS mapping surveys, and baseline socioeconomic feasibility studies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/TDRC/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.primaryDark }}
              >
                <span>Request Research Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.ink, color: theme.ink }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <TDRCFooter />
    </main>
  );
}
