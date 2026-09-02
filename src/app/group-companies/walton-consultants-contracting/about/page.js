"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Hammer,
  Truck,
  Layers,
  Wrench,
  ClipboardList,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  HardHat,
  Users2,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/WaltonShared";

const ABOUT_STATS = [
  { value: "25+", label: "Years of Engineering\nExcellence in Pakistan", icon: Award },
  { value: "350+", label: "Completed Civil &\nInfrastructure Projects", icon: Building2 },
  { value: "1200+", label: "Civil Engineers &\nTechnical Specialists", icon: Users2 },
  { value: "50+", label: "Industrial & Government\nInstitutional Clients", icon: HardHat },
  { value: "99%", label: "On-Time Project\nDelivery Success Rate", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Structural Integrity & Safety",
    desc: "Uncompromising adherence to international Building Code of Pakistan (BCP), ACI 318, and ASTM standards for seismic resilience and concrete load-bearing longevity.",
  },
  {
    icon: Layers,
    title: "BIM & Digital Engineering",
    desc: "Deploying advanced 3D Building Information Modeling (BIM) and laser topography to eliminate design clashes, optimize material schedules, and accelerate construction timelines.",
  },
  {
    icon: Hammer,
    title: "Turnkey EPC Accountability",
    desc: "Providing end-to-end management from geotechnical soil investigations and architectural planning to structural steel erection, MEP installation, and final handover.",
  },
  {
    icon: Award,
    title: "Sustainable Construction Practices",
    desc: "Integrating LEED-compliant green building standards, energy-efficient building envelopes, low-carbon concrete mixes, and sustainable construction waste recycling.",
  },
];

export default function WaltonAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#3A4E63] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Walton Consultants &amp; Contracting</SectionLabel>

              <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black tracking-tight leading-[1.2] uppercase mb-5" style={{ color: theme.navyDark }}>
                Engineering Excellence. <span style={{ color: theme.navy }}>Building Tomorrow&apos;s Infrastructure.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Walton Consultants &amp; Contracting is a premier civil engineering, general contracting, and infrastructure development enterprise in Pakistan. With PEC Category C-A (No Limit) constructor licensing, we deliver complex commercial superstructures, highways, bridges, and industrial complexes.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/walton-consultants-contracting/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Sectors &amp; Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/walton-consultants-contracting/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Consult Chief Engineer</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/walton_hero_construction.svg"
                  alt="Walton Civil Construction & Engineering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081B30]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.goldHover }}>
                      PEC C-A (No Limit) Constructor
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      350+ Completed Infrastructure Projects
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
                  className="walton-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navyDark }}>
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
                src="/walton_hero_construction.svg"
                alt="Civil Engineering and Infrastructure Development"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081B30]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#DFC48B] block mb-1">
                    National Infrastructure Developer
                  </span>
                  <h4 className="text-base font-bold">Over 25 Years of Landmark Heavy Construction</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To engineer and construct world-class civil infrastructure, commercial high-rises, and industrial facilities that stand the test of time, empower regional commerce, and elevate community quality of life through technical innovation and rigorous quality assurance.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be South Asia&apos;s most reputable engineering and EPC construction powerhouse, pioneering smart city infrastructure, sustainable building methods, and digital construction intelligence.
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
              The engineering rigor, safety protocols, and ethical governance that guide every construction site we manage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="walton-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.navy}10` }}>
                      <Icon size={26} style={{ color: theme.navy }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.navyDark }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.gold }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
                      PEC &amp; ASTM Compliant
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.goldHover }}>
                PLANNING A COMMERCIAL TOWER, HIGHWAY, OR FACTORY?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An Engineering Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our principal civil structural engineers to review architectural CAD drawings, structural BOQs, and turnkey EPC pricing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Project Proposal</span>
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

      <WaltonFooter />
    </main>
  );
}
