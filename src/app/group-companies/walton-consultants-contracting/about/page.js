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
  Sparkles,
  Compass,
  FileCheck2,
  Scale,
  Leaf,
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
  { value: "25+", label: "Years of Engineering\nExcellence", icon: Award },
  { value: "350+", label: "Delivered Infrastructure\nProjects", icon: Building2 },
  { value: "1200+", label: "Civil Engineers &\nTechnical Staff", icon: Users2 },
  { value: "50+", label: "Institutional &\nGovernment Clients", icon: HardHat },
  { value: "99%", label: "Milestone Adherence\nSuccess Record", icon: ShieldCheck },
];

const WHY_CHOOSE_US = [
  {
    icon: Award,
    title: "PEC Category C-A (No Limit)",
    desc: "Licensed by Pakistan Engineering Council with no financial cap, qualified for the nation's largest civil, highway, and mega-structural infrastructure tenders.",
  },
  {
    icon: ShieldCheck,
    title: "Seismic & Structural Integrity",
    desc: "Full adherence to Building Code of Pakistan (BCP), ACI 318, and ASTM standards with non-destructive concrete and ultrasonic weld testing.",
  },
  {
    icon: Layers,
    title: "Advanced 3D/4D BIM Modeling",
    desc: "Complete digital construction workflows in Revit and Primavera P6, eliminating design clashes before concrete is placed.",
  },
  {
    icon: Hammer,
    title: "Single-Point Turnkey EPC",
    desc: "Seamless integration across architectural master planning, structural design, mechanical rigging, MEP substations, and commissioning.",
  },
  {
    icon: Users2,
    title: "Elite Engineering Leadership",
    desc: "Multidisciplinary teams of chartered civil engineers, geotechnical specialists, certified quantity surveyors, and project directors.",
  },
  {
    icon: Sparkles,
    title: "Sustainable & LEED Practices",
    desc: "Committed to eco-resilient construction, low-carbon concrete formulations, rainwater harvesting, and renewable energy integration.",
  },
];

export default function WaltonAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#2C3E50] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. ABOUT HERO: MAIN TEAM IMAGE AT ACTIVE SITE
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <SectionLabel>About Walton Consultants &amp; Contracting</SectionLabel>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black tracking-tight leading-[1.15] uppercase mb-4 text-[#0A1E34]">
                BUILT ON ENGINEERING. <span style={{ color: theme.navy }}>DRIVEN BY IMPACT.</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                Walton Consultants &amp; Contracting is an international engineering consultancy and civil contracting enterprise. We deliver complex infrastructure developments, highway interchanges, high-rise commercial superstructures, and turnkey industrial manufacturing facilities that stand as enduring national foundations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <CheckCircle2 size={18} className="text-[#C5A059] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">PEC Category C-A (No Limit)</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50">
                  <CheckCircle2 size={18} className="text-[#C5A059] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">ISO 9001 &amp; ISO 45001 Certified</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/walton-consultants-contracting/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:brightness-110"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Capabilities</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/group-companies/walton-consultants-contracting/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider border border-slate-300 text-[#0A1E34] hover:bg-slate-50 transition-all"
                >
                  <span>Consult Engineering Desk</span>
                </Link>
              </div>
            </div>

            {/* Right: MAIN IMAGE (Ultra-realistic site engineering team) */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[360px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/walton/about_main_team.jpg"
                  alt="Walton Engineering Team at Major Infrastructure Project"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-md w-full">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#C5A059]">
                        Field Leadership &middot; Pakistan
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-[#0A1E34]">
                      Civil Structural Engineers, Project Directors &amp; Consultants
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CORPORATE STATS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F4F7FA]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {ABOUT_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="walton-stat-card rounded-2xl border border-slate-200 p-5 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${theme.navy}10` }}
                  >
                    <Icon size={20} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navyDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-600 whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. WHO WE ARE, MISSION & VISION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Who We Are */}
            <div className="walton-card-lift p-8 rounded-3xl border border-slate-200 bg-[#F4F7FA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6" style={{ backgroundColor: theme.navy }}>
                <Building2 size={22} />
              </div>
              <h3 className="text-xl font-black text-[#0A1E34] uppercase tracking-tight mb-3">
                Who We Are
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Walton Consultants &amp; Contracting is a multidisciplinary engineering and construction management firm. With over 25 years of field experience, we have transformed complex technical challenges into enduring civil monuments across highways, bridges, high-rises, and industrial complexes.
              </p>
            </div>

            {/* Our Mission */}
            <div className="walton-card-lift p-8 rounded-3xl border border-slate-200 bg-[#F4F7FA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6" style={{ backgroundColor: theme.navy }}>
                <Compass size={22} />
              </div>
              <h3 className="text-xl font-black text-[#0A1E34] uppercase tracking-tight mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                To deliver intelligent engineering, robust infrastructure, and high-performance development solutions that elevate living standards, accelerate economic vitality, and ensure uncompromising structural safety and environmental resilience.
              </p>
            </div>

            {/* Our Vision */}
            <div className="walton-card-lift p-8 rounded-3xl border border-slate-200 bg-[#F4F7FA] shadow-xs">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6" style={{ backgroundColor: theme.navy }}>
                <Sparkles size={22} />
              </div>
              <h3 className="text-xl font-black text-[#0A1E34] uppercase tracking-tight mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                To be recognized as Pakistan&apos;s benchmark international engineering consultancy and construction partner — known for precision engineering, technological innovation, sustainable practices, and absolute integrity.
              </p>
            </div>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              4. SECOND IMAGE: CONSULTANTS AROUND MODERN CONFERENCE TABLE
          ───────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: SECOND IMAGE */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/walton/about_conference_plans.jpg"
                  alt="Engineering Consultants Reviewing Structural Master Plans"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs font-black uppercase tracking-widest text-[#DFC48B] block mb-1">
                      Strategic Planning &amp; Advisory
                    </span>
                    <h4 className="text-base font-bold">
                      Multidisciplinary Review of Master Plans &amp; BIM Models
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: OUR EXPERTISE & APPROACH */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <SectionLabel>Our Technical Approach</SectionLabel>
              <SectionHeading className="mb-4">
                Disciplined Engineering &amp; Strategic Oversight
              </SectionHeading>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Every infrastructure project undertaken by Walton follows a rigorous data-driven engineering protocol. By synchronizing 3D BIM clash detection with geotechnical borehole profiling, on-site materials testing, and Primavera P6 earned value analytics, we mitigate risks before field mobilization.
              </p>

              <div className="space-y-3.5">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0E2A47]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} className="text-[#0E2A47]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#0A1E34]">Data-Driven Geotechnical Foundation</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Soil borehole drilling, plate load bearing tests, and seismic hazard micro-zonation.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0E2A47]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} className="text-[#0E2A47]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#0A1E34]">Virtual BIM Constructability Reviews</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Automated clash detection across structural, MEP, and architectural disciplines.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0E2A47]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={16} className="text-[#0E2A47]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-[#0A1E34]">Zero-Tolerance Quality &amp; Safety Assurance</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Continuous on-site batch plant auditing, non-destructive testing, and ISO 45001 safety controls.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. QUALITY & SAFETY (ACCREDITATIONS)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F4F7FA]">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Safety &amp; Compliance</SectionLabel>
            <SectionHeading center className="mb-3">
              Quality &amp; Safety Excellence
            </SectionHeading>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              We operate under internationally audited quality management and occupational safety frameworks, guaranteeing project reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="walton-card-lift p-6 rounded-2xl border border-slate-200 bg-white shadow-xs text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto mb-4">
                <Award size={24} />
              </div>
              <h4 className="text-base font-bold text-[#0A1E34] mb-1">PEC Category C-A</h4>
              <p className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-2">No Financial Limit</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Authorized by Pakistan Engineering Council for mega civil and infrastructure execution of unlimited scale.
              </p>
            </div>

            <div className="walton-card-lift p-6 rounded-2xl border border-slate-200 bg-white shadow-xs text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-base font-bold text-[#0A1E34] mb-1">ISO 9001:2015</h4>
              <p className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-2">Quality Management</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standardized quality procedures ensuring material conformance, structural tolerance, and precision workmanship.
              </p>
            </div>

            <div className="walton-card-lift p-6 rounded-2xl border border-slate-200 bg-white shadow-xs text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <HardHat size={24} />
              </div>
              <h4 className="text-base font-bold text-[#0A1E34] mb-1">ISO 45001:2018</h4>
              <p className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-2">Health &amp; Safety</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Over 12 Million LTI-free hours across complex infrastructure sites through rigorous safety governance.
              </p>
            </div>

            <div className="walton-card-lift p-6 rounded-2xl border border-slate-200 bg-white shadow-xs text-center">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center mx-auto mb-4">
                <Leaf size={24} />
              </div>
              <h4 className="text-base font-bold text-[#0A1E34] mb-1">ISO 14001:2015</h4>
              <p className="text-xs font-semibold text-[#C5A059] uppercase tracking-wider mb-2">Environmental Protocol</p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Environmentally responsible construction mitigating carbon footprint and protecting surrounding ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. WHY CHOOSE US
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>The Walton Advantage</SectionLabel>
            <SectionHeading center className="mb-3">
              Why Choose Walton Consultants &amp; Contracting
            </SectionHeading>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Six structural pillars that set our engineering consultancy and contracting services apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="walton-card-lift p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors"
                      style={{ backgroundColor: `${theme.navy}10` }}
                    >
                      <Icon size={20} style={{ color: theme.navy }} />
                    </div>
                    <h4 className="text-base font-bold text-[#0A1E34] mb-2 group-hover:text-[#0E2A47] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. FINAL CALL TO ACTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            className="rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-xl text-white relative overflow-hidden"
            style={{ backgroundColor: theme.navyDark }}
          >
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#C5A059] block mb-2">
                LET&apos;S BUILD WHAT&apos;S NEXT
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight mb-3 text-white">
                Consult With Our Chief Engineering Desk
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Connect with our principal civil structural engineers to review architectural CAD drawings, structural BOQs, and turnkey EPC pricing.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap gap-4 shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2 transition-all shadow-md hover:brightness-110"
                style={{ backgroundColor: theme.goldHover }}
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider border border-white/30 text-white flex items-center gap-2 transition-all hover:bg-white/10"
              >
                <Phone size={15} />
                <span>+92 42 3892-4737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <WaltonFooter />
    </main>
  );
}
