"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Target,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  Building2,
  GraduationCap,
  Radio,
  ThumbsUp,
} from "lucide-react";
import {
  theme,
  NationalGuardNavbar,
  NationalGuardFooter,
  NationalGuardLeadershipSection,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NationalGuardShared";

const ABOUT_STATS = [
  { value: "10+", label: "Years of Experience", icon: Award },
  { value: "500+", label: "Security Professionals", icon: Users },
  { value: "1000+", label: "Protected Sites", icon: Building2 },
  { value: "24/7", label: "Control Operations", icon: Clock },
  { value: "99%", label: "Client Retention", icon: ThumbsUp },
];

const CORE_VALUES = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    desc: "Every security guard undergoes complete NADRA biometrics, police verification, and thorough background checks prior to field deployment.",
  },
  {
    icon: Target,
    title: "Vigilance & Precision",
    desc: "Maintaining constant alert readiness with real-time GPS check-ins, hourly log registers, and automated digital supervisory audits.",
  },
  {
    icon: GraduationCap,
    title: "Ex-Military Training",
    desc: "Guards are trained by retired military and law enforcement drill instructors in weapon safety, fire drill response, and emergency defense.",
  },
  {
    icon: Radio,
    title: "Instant 24/7 Rapid Response",
    desc: "Mobile backup squads stationed across major sectors equipped with emergency radio telemetry for swift incident resolution.",
  },
];

const PILLARS = [
  {
    title: "Licensed & Regulated Under Govt Authority",
    desc: "National Guard Security Services (Pvt) Ltd holds complete Ministry of Interior licensing and operates under strict compliance with all private security regulatory bodies.",
  },
  {
    title: "Dedicated On-Site & Area Supervision",
    desc: "Every deployment is backed by dynamic mobile supervisors conducting surprise day & night inspections to ensure complete adherence to standard operating procedures.",
  },
  {
    title: "Tailored Security Architecture",
    desc: "We perform full on-site threat surveys to customize physical guard placements, gate access protocols, CCTV coverage zones, and perimeter patrol routes.",
  },
];

export default function NationalGuardAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#1B365D] font-sans antialiased overflow-x-hidden">
      <NationalGuardNavbar />

      {/* 01 — Hero Section (Unique Image: /national-guard/about-headquarters.jpg) */}
      <section
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          borderColor: theme.border,
        }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <SectionLabel>About National Guard Security</SectionLabel>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase mb-4"
                style={{ color: theme.navy }}
              >
                Protecting What Matters Most With{" "}
                <span style={{ color: theme.gold }}>Disciplined Vigilance</span>
              </h1>

              <p
                className="text-[16px] sm:text-[18px] font-medium leading-relaxed mb-6"
                style={{ color: theme.textMuted }}
              >
                National Guard Security Services (Pvt) Ltd is a premier private security enterprise
                delivering armed, unarmed, corporate, industrial, and residential protection across
                Pakistan. Built upon military discipline and modern monitoring technology, we
                provide unmatched safety and peace of mind.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/group-companies/national-guard/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-extrabold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Security Services</span>
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/group-companies/national-guard/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-extrabold uppercase tracking-wide border-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer bg-white"
                  style={{ borderColor: theme.navy, color: theme.navy }}
                >
                  <span>Contact Head Office</span>
                </Link>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[520px] h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-100"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/national-guard/about-headquarters.jpg"
                  alt="National Guard Senior Security Operations Briefing at Command Headquarters"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/85 via-transparent to-transparent flex items-end p-5">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full"
                    style={{ borderColor: theme.border }}
                  >
                    <p
                      className="text-[12.5px] font-black uppercase tracking-wider mb-1"
                      style={{ color: theme.gold }}
                    >
                      Govt Licensed &amp; Verified Security
                    </p>
                    <p className="text-[15px] font-extrabold" style={{ color: theme.navy }}>
                      Rigorous Background Checks &amp; Tactical Command
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — High-Contrast Navy Counters */}
      <section
        className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.navyDark, borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {ABOUT_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="ng-counter-box rounded-2xl border p-5 text-center flex flex-col items-center justify-center shadow-lg"
                  style={{
                    backgroundColor: theme.navyCard,
                    borderColor: "rgba(223, 184, 104, 0.25)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center mb-2.5"
                    style={{ backgroundColor: "rgba(223, 184, 104, 0.16)" }}
                  >
                    <Icon size={21} style={{ color: theme.goldBright }} />
                  </div>
                  <div className="mb-1.5 text-white">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p
                    className="text-[13px] font-bold uppercase tracking-wider leading-snug"
                    style={{ color: "#E2E8F0" }}
                  >
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — Mission & Vision Section (Unique Image: /national-guard-team.png) */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left Image */}
            <div
              className="relative w-full h-[350px] sm:h-[400px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50"
              style={{ borderColor: theme.border }}
            >
              <Image
                src="/national-guard-team.png"
                alt="National Guard Professional Security Squad Formation"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span
                    className="text-[12.5px] font-black uppercase tracking-widest block mb-1"
                    style={{ color: theme.goldBright }}
                  >
                    Squad Formation
                  </span>
                  <h4 className="text-[17px] sm:text-[18px] font-extrabold text-white">
                    500+ Dedicated Security Professionals
                  </h4>
                </div>
              </div>
            </div>

            {/* Right Mission & Vision text */}
            <div className="space-y-6">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-3">Mission Statement</SectionHeading>
                <p
                  className="text-[15.5px] sm:text-[17px] font-medium leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  To provide dependable, professional, and disciplined security guarding services
                  that protect lives, assets, and operations through vigilant human presence and
                  advanced surveillance integration.
                </p>
              </div>

              <div className="pt-5 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-3">Our Vision</SectionHeading>
                <p
                  className="text-[15.5px] sm:text-[17px] font-medium leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  To be the benchmark private security enterprise in Pakistan, renowned for
                  impeccable guard discipline, ethical conduct, rapid crisis intervention, and
                  client-first security governance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — NEW: Executive Leadership & Command Team Section */}
      <NationalGuardLeadershipSection
        eyebrow="Executive & Field Command"
        title="Meet Our Security Leadership Team"
        subtitle="National Guard Security Services is helmed by experienced corporate executives, retired armed forces commanders, and certified risk audit directors."
      />

      {/* 05 — Core Values Grid */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.bgLight, borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <SectionLabel center>Guiding Principles</SectionLabel>
            <SectionHeading center className="mb-3">
              Our Core Values
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[17px] font-medium" style={{ color: theme.textMuted }}>
              The foundational standards that govern every guard recruit, officer briefing, and
              field deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="ng-card-hover p-6 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${theme.navy}12` }}
                    >
                      <Icon size={24} style={{ color: theme.navy }} />
                    </div>
                    <h3
                      className="text-[18px] sm:text-[19px] font-black mb-2.5 leading-snug"
                      style={{ color: theme.navy }}
                    >
                      {val.title}
                    </h3>
                    <p
                      className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {val.desc}
                    </p>
                  </div>

                  <div
                    className="mt-5 pt-3.5 border-t flex items-center gap-2"
                    style={{ borderColor: theme.border }}
                  >
                    <CheckCircle2 size={16} style={{ color: theme.gold }} />
                    <span
                      className="text-[12.5px] font-extrabold uppercase tracking-wider"
                      style={{ color: theme.gold }}
                    >
                      Verified Standard
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06 — Why National Guard Stands Apart */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <SectionLabel center>Operational Excellence</SectionLabel>
            <SectionHeading center className="mb-3">
              Why Choose National Guard?
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[17px] font-medium" style={{ color: theme.textMuted }}>
              Combining strict military protocol with flexible civilian protection to safeguard your
              premises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className="ng-card-hover p-6 sm:p-7 rounded-3xl border bg-[#F4F6F9] flex flex-col justify-between shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-[15px] text-white mb-4 shadow-sm"
                    style={{ backgroundColor: theme.navy }}
                  >
                    0{i + 1}
                  </div>
                  <h4
                    className="text-[18px] sm:text-[19px] font-black mb-2.5 leading-snug"
                    style={{ color: theme.navy }}
                  >
                    {pillar.title}
                  </h4>
                  <p
                    className="text-[14.5px] sm:text-[15.5px] font-medium leading-relaxed"
                    style={{ color: theme.textMuted }}
                  >
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — Call To Action Banner */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row gap-6 items-center justify-between shadow-xl border"
            style={{
              backgroundColor: theme.navyDark,
              borderColor: "rgba(223, 184, 104, 0.35)",
              color: "#FFFFFF",
            }}
          >
            <div>
              <span
                className="text-[13px] font-black uppercase tracking-widest block mb-2"
                style={{ color: theme.goldBright }}
              >
                READY TO ELEVATE YOUR SECURITY?
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                Request A Confidential Site Security Assessment
              </h2>
              <p className="text-[15px] sm:text-[16px] font-medium max-w-xl text-slate-200 leading-relaxed">
                Speak directly with our operations officers to conduct a thorough vulnerability
                audit of your facility and get custom guarding proposals.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-guard/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[14.5px] font-black uppercase tracking-wide flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.goldBright, color: theme.navyDark }}
              >
                <span>Request Security Audit</span>
                <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+923218431665"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-[14.5px] font-extrabold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-white/10 cursor-pointer text-white"
                style={{ borderColor: "rgba(255,255,255,0.45)" }}
              >
                <Phone size={16} style={{ color: theme.goldBright }} />
                <span>+92 321 8431665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalGuardFooter />
    </main>
  );
}
