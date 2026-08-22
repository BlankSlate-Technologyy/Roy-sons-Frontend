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
  HardHat,
  Eye,
  Radio,
  FileCheck,
  ThumbsUp,
  Scale,
} from "lucide-react";
import {
  theme,
  NationalGuardNavbar,
  NationalGuardFooter,
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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <SectionLabel>About National Guard Security</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
                Protecting What Matters Most With <span style={{ color: theme.gold }}>Disciplined Vigilance</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                National Guard Security Services (Pvt) Ltd is a leading private security enterprise delivering armed, unarmed, corporate, industrial, and residential protection across Pakistan. Built upon military discipline and modern monitoring technology, we provide unmatched safety and peace of mind.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/national-guard/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Security Services</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/national-guard/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Contact Head Office</span>
                </Link>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/national-guard-about.png"
                  alt="National Guard Security Officers On Duty"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.gold }}>
                      Govt Licensed &amp; Verified Security
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navy }}>
                      Rigorous Background Checks &amp; Tactical Training
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
                  className="ng-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
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

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
              <Image
                src="/national-guard-team.png"
                alt="National Guard Professional Security Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#C5A059] block mb-1">
                    Squad Formation
                  </span>
                  <h4 className="text-base font-bold">500+ Dedicated Security Professionals</h4>
                </div>
              </div>
            </div>

            {/* Right Mission & Vision text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To provide dependable, professional, and disciplined security guarding services that protect lives, assets, and operations through vigilant human presence and advanced surveillance integration.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be the benchmark private security enterprise in Pakistan, renowned for impeccable guard discipline, ethical conduct, rapid crisis intervention, and client-first security governance.
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
              The foundational standards that govern every guard recruit, officer briefing, and field deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="ng-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.navy}10` }}>
                      <Icon size={26} style={{ color: theme.navy }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.navy }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.gold }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.gold }}>
                      Verified Standard
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why National Guard Stands Apart */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Operational Excellence</SectionLabel>
            <SectionHeading center className="mb-4">Why Choose National Guard?</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Combining strict military protocol with flexible civilian protection to safeguard your premises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl border bg-slate-50/50 flex flex-col justify-between shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm text-white mb-6" style={{ backgroundColor: theme.navy }}>
                    0{i + 1}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.navy }}>
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.gold }}>
                READY TO ELEVATE YOUR SECURITY?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navy }}>
                Request A Confidential Site Security Assessment
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak directly with our operations officers to conduct a thorough vulnerability audit of your facility and get custom guarding proposals.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-guard/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Security Audit</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+923218431665"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
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
