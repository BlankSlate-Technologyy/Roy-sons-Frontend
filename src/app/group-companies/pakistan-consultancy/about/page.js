"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  FileSearch,
  TrendingUp,
  Handshake,
  PiggyBank,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Users2,
  Scale,
  Sparkles,
  Building2,
  BarChart3,
  Compass,
  Check,
} from "lucide-react";
import {
  theme,
  PakConsultNavbar,
  PakConsultFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/PakConsultShared";

const ABOUT_STATS = [
  { value: "15+", label: "Years of Strategic\nConsultancy Excellence", icon: Award },
  { value: "400+", label: "Completed Feasibility\nStudies & Project Audits", icon: FileSearch },
  { value: "150+", label: "Corporate, Public &\nInstitutional Clients", icon: Users2 },
  { value: "45+", label: "Senior Industry &\nFinancial Consultants", icon: Briefcase },
  { value: "98%", label: "Client Satisfaction &\nDelivery Success Rate", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: FileSearch,
    title: "Data-Driven Analytical Rigor",
    desc: "Every recommendation, econometric model, and feasibility report is backed by verifiable empirical field data, stress-tested cash flow forecasts, and regulatory due diligence.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Fiduciary Ethics",
    desc: "Strict compliance with FIDIC ethical guidelines, statutory PPRA public procurement transparency rules, and unyielding conflict-of-interest firewalls.",
  },
  {
    icon: Handshake,
    title: "PPP Transaction Leadership",
    desc: "Pioneering viable concession models, risk allocation frameworks, and bankable transaction structuring between state institutions and institutional capital sponsors.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Economic Value Creation",
    desc: "Focusing on tangible business outcomes, capital expenditure optimization, organizational restructuring, and sustained long-term return on capital.",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "FIDIC & PPRA Certified Practitioners",
    desc: "Our contracts and procurement roadmaps strictly comply with FIDIC Yellow, Red, and Silver Books as well as federal and provincial PPRA statutes.",
  },
  {
    title: "Multilateral Agency Benchmarks",
    desc: "We formulate PC-I, PC-II, and feasibility documentation in full alignment with World Bank, Asian Development Bank (ADB), and Planning Commission standards.",
  },
  {
    title: "Bankable Financial Engineering",
    desc: "Robust 20-year Discounted Cash Flow (DCF), sensitivity testing, WACC calibration, and Viability Gap Funding (VGF) modeling for private and sovereign sponsors.",
  },
  {
    title: "Turnkey Project Management Office (PMO)",
    desc: "From concept design through EPC contractor oversight and earned value tracking, we deliver end-to-end program governance without cost overruns.",
  },
];

export default function PakConsultAboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* ─── EDITORIAL HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative min-h-[420px] lg:h-[460px] flex items-center overflow-hidden bg-slate-900">
        <Image
          src="/images/pakconsult/about_hero.jpg"
          alt="Pakistan Consultancy Services Corporate Headquarters"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071727]/95 via-[#0A2540]/85 to-[#0A2540]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Corporate Profile &amp; Practice Overview</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Strategic Advisory &amp; Engineering Governance for Pakistan
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              Pakistan Consultancy Services is a premier corporate advisory, techno-economic feasibility, and project governance institution operating as a flagship entity within the Roy &amp; Sons enterprise portfolio.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#0D7C85]" />
                <span>Established 2011</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#C5A059]" />
                <span>FIDIC &amp; PPRA Advisory Desk</span>
              </span>
              <span>•</span>
              <span>Lahore • Islamabad • Karachi</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ───────────────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {ABOUT_STATS.map((stat, idx) => {
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
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider whitespace-pre-line leading-tight">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE ────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6">
              <SectionLabel>Who We Are</SectionLabel>
              <SectionHeading className="mb-5">
                Bridging Visionary Capital with Engineered Execution
              </SectionHeading>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Established to meet the growing demand for bankable feasibility modeling and disciplined project governance in Pakistan, Pakistan Consultancy Services (PCS) brings together senior chartered engineers, financial economists, FIDIC procurement attorneys, and environmental scientists.
                </p>
                <p>
                  Over the past decade and a half, PCS has advised federal ministries, provincial departments, industrial conglomerates, and international investors on major transport corridors, special economic zones, hydropower installations, and municipal infrastructure.
                </p>
                <p>
                  As part of the Roy &amp; Sons corporate ecosystem, we adhere to strict ethical codes, conflict-of-interest firewalls, and empirical research benchmarks that ensure our assessments withstand rigorous international scrutiny.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A2540] bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                  <Award size={16} className="text-[#0D7C85]" />
                  <span>Planning Commission PC-I Specialists</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A2540] bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                  <ShieldCheck size={16} className="text-[#C5A059]" />
                  <span>Registered with Pakistan Engineering Council</span>
                </div>
              </div>
            </div>

            {/* Right Photography */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                <Image
                  src="/images/pakconsult/about_team.jpg"
                  alt="Pakistan Consultancy Services Executive Advisory Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                      Senior Executive Leadership
                    </span>
                    <h3 className="text-base sm:text-lg font-bold">
                      Multidisciplinary Advisory Council
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Chartered engineers, economists, and legal advisors directing national-scale programs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Card */}
            <div className="lg:col-span-5">
              <div className="relative w-full h-[380px] sm:h-[430px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <Image
                  src="/images/pakconsult/about_meeting.jpg"
                  alt="Strategic Stakeholder Alignment & Planning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                      Governance Protocol
                    </span>
                    <p className="text-sm font-semibold">
                      Fiduciary transparency and empirical research at every stage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Mission & Vision Split */}
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs">
                <SectionLabel>Our Core Purpose</SectionLabel>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  Mission Statement
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To empower decision-makers across government and industry with uncompromised empirical research, techno-economic feasibility modeling, transparent procurement governance, and turnkey Project Management Office oversight that accelerate sustainable economic development across Pakistan.
                </p>
              </div>

              <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-xs">
                <SectionLabel>Strategic Horizon</SectionLabel>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To be Pakistan&apos;s definitive strategic advisory and transaction structuring partner, setting the national benchmark for public-private partnerships, institutional governance, capital efficiency, and climate-resilient engineering solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUR APPROACH: DATA ANALYTICS & REGULATORY RIGOR ────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <SectionLabel>Disciplined Approach</SectionLabel>
              <SectionHeading className="mb-5">
                Empirical Analytics &amp; Regulatory Safeguards
              </SectionHeading>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Unlike traditional conceptual consultancies, our approach couples rigorous quantitative econometric modeling with boots-on-the-ground engineering validation. Every study is pressure-tested against regulatory mandates, market cycles, and environmental constraints.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-50 text-[#0D7C85] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">Econometric &amp; Sensitivity Modeling</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Stress-testing capital assumptions against inflation, currency volatility, and supply chain bottlenecks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-50 text-[#0D7C85] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">Independent Engineering Supervision</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Site-level technical audits preventing contractor drift, schedule slip, and unauthorized substitutions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-50 text-[#0D7C85] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0A2540]">Statutory Compliance Assured</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Full conformity with EPA environmental regulations, PPRA rules, and municipal bylaws.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <Image
                  src="/images/pakconsult/about_analysis.jpg"
                  alt="Data-Driven Analytical Modeling and Financial Engineering"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <Image
                  src="/images/pakconsult/about_infrastructure.jpg"
                  alt="Engineering & Infrastructure Leadership"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A059] block mb-1">
                      Infrastructure Benchmarks
                    </span>
                    <h4 className="text-sm sm:text-base font-bold">
                      National Transport &amp; Energy Delivery
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Grid */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <SectionLabel>Strategic Advantage</SectionLabel>
              <SectionHeading className="mb-6">
                Why Industry Leaders Choose Pakistan Consultancy
              </SectionHeading>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_CHOOSE_US.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs"
                  >
                    <div className="w-7 h-7 rounded-md bg-teal-50 text-[#0D7C85] flex items-center justify-center mb-3">
                      <CheckCircle2 size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-[#0A2540] mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Guiding Principles</SectionLabel>
            <SectionHeading center className="mb-3">
              Our Institutional Values
            </SectionHeading>
            <p className="text-sm text-slate-600">
              The ethical compass, empirical discipline, and transparency standards that govern every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#0D7C85]/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-teal-50 text-[#0D7C85] flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-[15px] font-bold text-[#0A2540] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-[12.5px] text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#C5A059] uppercase tracking-wider">
                    <ShieldCheck size={13} />
                    <span>Fiduciary Standard</span>
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
                Engage Our Advisory Council
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Discuss Your Initiative With Senior Partners
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our advisory teams in Lahore, Islamabad, or Karachi to review project mandates, feasibility requirements, and transaction structuring.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#0D7C85] hover:bg-[#08545A] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Schedule Meeting
              </Link>
              <Link
                href="/group-companies/pakistan-consultancy/services"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-semibold tracking-wide transition-all text-center cursor-pointer"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PakConsultFooter />
    </main>
  );
}
