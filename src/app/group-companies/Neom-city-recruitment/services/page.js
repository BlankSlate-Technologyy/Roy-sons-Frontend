"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Users2,
  User,
  Building2,
  Globe2,
  UserSearch,
  MessageSquare,
  ClipboardList,
  FileCheck,
  HardHat,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import {
  theme,
  NeomRecruitmentNavbar,
  NeomRecruitmentFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NeomRecruitmentShared";

const RECRUITMENT_SERVICES = [
  {
    id: "executive-search",
    title: "Executive Search & C-Suite Headhunting",
    subtitle: "Boardroom Directors, CEOs, CTOs & General Managers",
    desc: "Discreet, retained executive search and leadership advisory identifying high-impact visionary executives to drive enterprise growth and transformation.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Executive Search",
    icon: UserSearch,
    deliverables: [
      "Confidential market mapping and peer benchmarking across target global sectors",
      "In-depth competency-based interviews and psychometric leadership assessments",
      "Executive compensation benchmarking and employment contract negotiation support",
      "90-day structured executive onboarding and leadership integration reviews",
    ],
  },
  {
    id: "overseas-recruitment",
    title: "Overseas Workforce Deployment",
    subtitle: "Saudi Arabia (NEOM / Red Sea), UAE, Qatar, UK & Europe",
    desc: "Bureau of Emigration certified mass overseas mobilization of skilled engineers, technicians, medical professionals, and construction trades.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Overseas Mobility",
    icon: Globe2,
    deliverables: [
      "End-to-end embassy visa processing, medical clearance, and degree attestation",
      "Comprehensive pre-departure technical trade testing and safety orientation",
      "Full compliance with Bureau of Emigration and Overseas Employment regulations",
      "Turnkey charter flight logistics and on-ground camp reception coordination",
    ],
  },
  {
    id: "talent-acquisition",
    title: "Enterprise Talent Acquisition & RPO",
    subtitle: "Volume Hiring, Sourcing Campaigns & Candidate Screening",
    desc: "Recruitment Process Outsourcing (RPO) and full-cycle talent acquisition managing high-volume hiring campaigns with rapid time-to-fill turnaround.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Talent Acquisition",
    icon: Users,
    deliverables: [
      "AI-powered Applicant Tracking System (ATS) screening and candidate shortlisting",
      "Standardized multi-tier technical interviews and domain skill testing",
      "Comprehensive 360-degree employment background and reference verification",
      "Structured candidate onboarding workflows ensuring zero first-day dropouts",
    ],
  },
  {
    id: "hr-consultancy",
    title: "Strategic HR Advisory & Policy Design",
    subtitle: "Organizational Design, Grading, Salary Surveys & Compliance",
    desc: "Consulting on organizational structure design, salary grading scales, employee handbooks, labor law compliance, and performance management systems.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "HR Consultancy",
    icon: MessageSquare,
    deliverables: [
      "Formulation of legally compliant corporate HR manuals and disciplinary codes",
      "Industry-specific salary and benefits benchmarking surveys across Pakistan & GCC",
      "Balanced Scorecard (BSC) and Key Performance Indicator (KPI) framework design",
      "Labor law compliance audits and workplace dispute resolution advisory",
    ],
  },
  {
    id: "staffing-solutions",
    title: "Contractual & Project-Based Staffing",
    subtitle: "Flexible Manpower, Turnaround Teams & Temporary Staff",
    desc: "Supplying vetted contract professionals, site engineers, IT developers, and administrative personnel for project-based and seasonal enterprise requirements.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Contract Staffing",
    icon: ClipboardList,
    deliverables: [
      "Rapid deployment of pre-vetted technical teams within 48 to 72 hours",
      "Complete employer of record (EOR) liability management by Neom Recruitment",
      "Flexible contract duration scaling seamlessly up or down with project phases",
      "Replacement guarantee for any staff member failing to meet performance benchmarks",
    ],
  },
  {
    id: "payroll-outsourcing",
    title: "Payroll & HR Operations Outsourcing",
    subtitle: "Tax Withholdings, EOBI / Social Security & Benefits Admin",
    desc: "Automated, cloud-based payroll processing, statutory tax compliance, employee benefits administration, and complete third-party personnel recordkeeping.",
    image: "/neomrecruitment_hero_talent.svg",
    tag: "Payroll Outsourcing",
    icon: FileCheck,
    deliverables: [
      "Accurate multi-currency salary computation, overtime, and electronic direct deposit",
      "Monthly statutory deductions: FBR Income Tax, EOBI, and Provincial Social Security (PESSI/SESSI)",
      "Digital employee self-service (ESS) portal for payslips, tax certificates, and leave",
      "Strict data confidentiality and GDPR / ISO 27001 security compliance",
    ],
  },
];

const SERVICE_STATS = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "50000+", label: "Placed Candidates", icon: Users2 },
  { value: "2000+", label: "Corporate Clients", icon: Building2 },
  { value: "98%", label: "Satisfaction Rate", icon: ShieldCheck },
];

export default function NeomRecruitmentServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = RECRUITMENT_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomRecruitmentNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Human Resources &amp; Recruitment Divisions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Executive Search &amp; <span style={{ color: theme.blue }}>Global Workforce Capabilities</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From C-suite executive search and mass overseas workforce deployment for giga-projects in Saudi Arabia to full-cycle talent acquisition, contractual staffing, and payroll outsourcing, Neom City Recruitment Consultants delivers world-class talent solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.blue }}
                >
                  <span>Explore All 6 Divisions</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/Neom-city-recruitment/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Request Talent Acquisition</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-sky-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/neomrecruitment_hero_talent.svg"
                  alt="Neom City Recruitment HR Divisions"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.blue }}>
                      Comprehensive HR Capabilities
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      Executive Search · Overseas Deployment · Payroll RPO
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
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="nr-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.blue}10` }}>
                    <Icon size={22} style={{ color: theme.blue }} />
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

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Our Core Divisions</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Human Resources &amp; Staffing Divisions</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Operating in full compliance with ILO standards, Bureau of Emigration laws, and international talent assessment frameworks.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search divisions (e.g. Executive, Overseas, Talent, Consultancy, Staffing, Payroll)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="nr-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0F2B5B]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.blue}10` }}>
                          <Icon size={20} style={{ color: theme.blue }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.navyDark }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#0072CE]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                          Division Specifications &amp; Standards:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#00A896]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/Neom-city-recruitment/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-sky-50/50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navyDark }}
                    >
                      <span>Inquire About This Division</span>
                      <ArrowRight size={14} />
                    </Link>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0072CE]">
                ENTERPRISE WORKFORCE DEPLOYMENT &amp; HEADHUNTING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Build Your High-Performance Workforce Today
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our senior recruitment partners to initiate talent mapping, technical trade assessments, and overseas mobilization.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/Neom-city-recruitment/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Talent Scoping</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                style={{ borderColor: theme.blue, color: theme.blue }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NeomRecruitmentFooter />
    </main>
  );
}
