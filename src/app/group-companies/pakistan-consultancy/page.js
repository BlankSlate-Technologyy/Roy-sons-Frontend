"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileSearch,
  Handshake,
  PiggyBank,
  Scale,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  ArrowRight,
  Phone,
} from "lucide-react";
import {
  theme,
  PakConsultNavbar,
  PakConsultFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/PakConsultShared";

const STATS = [
  { icon: Award, value: "15+", label: "Years of Strategic\nConsultancy" },
  { icon: FileSearch, value: "400+", label: "Completed Studies &\nProject Audits" },
  { icon: Users2, value: "150+", label: "Corporate & Government\nClients" },
  { icon: Briefcase, value: "45+", label: "Senior Industry &\nFinancial Consultants" },
  { icon: ShieldCheck, value: "98%", label: "Client Satisfaction &\nDelivery Success" },
];

const SERVICES = [
  {
    icon: Briefcase,
    title: "Project Consultancy & Governance",
    desc: "Professional planning, milestone scheduling, enterprise risk management, and project governance.",
    href: "/group-companies/pakistan-consultancy/services#project-consultancy",
    img: "/pakconsult_hero_strategy.svg",
  },
  {
    icon: FileSearch,
    title: "Techno-Economic Feasibility Studies",
    desc: "Technical viability, market demand modeling, financial NPV / IRR evaluations, and environmental impact assessments.",
    href: "/group-companies/pakistan-consultancy/services#feasibility-studies",
    img: "/pakconsult_hero_strategy.svg",
  },
  {
    icon: TrendingUp,
    title: "Business Strategy & Restructuring",
    desc: "Strategic corporate roadmaps, business process re-engineering, organizational restructuring, and performance optimization.",
    href: "/group-companies/pakistan-consultancy/services#business-strategy",
    img: "/pakconsult_hero_strategy.svg",
  },
  {
    icon: Handshake,
    title: "Procurement & FIDIC Contracts",
    desc: "Tender packaging, PPRA-compliant RFP drafting, objective bid evaluation scoring, and FIDIC contract administration.",
    href: "/group-companies/pakistan-consultancy/services#procurement-contracts",
    img: "/pakconsult_hero_strategy.svg",
  },
  {
    icon: PiggyBank,
    title: "Investment & PPP Concessions",
    desc: "Structuring Build-Operate-Transfer (BOT) concessions, Viability Gap Funding (VGF), and bankable transaction models.",
    href: "/group-companies/pakistan-consultancy/services#investment-advisory",
    img: "/pakconsult_hero_strategy.svg",
  },
  {
    icon: Settings,
    title: "Project Management Office (PMO)",
    desc: "Setting up institutional PMOs with standardized operating procedures, earned value tracking, and quality supervision.",
    href: "/group-companies/pakistan-consultancy/services#pmo-setup",
    img: "/pakconsult_hero_strategy.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "PakConsult Government PPP Suite",
    tag: "PPP Concessions",
    desc: "BOT, DBFOM, and annuity transaction modeling with sovereign guarantee structuring and bidding support.",
    img: "/pakconsult_hero_strategy.svg",
  },
  {
    name: "PakConsult Infrastructure PMO Package",
    tag: "Enterprise PMO",
    desc: "Independent engineer oversight, schedule variance tracking, and FIDIC contract dispute avoidance.",
    img: "/pakconsult_hero_strategy.svg",
  },
  {
    name: "PakConsult SEZ Master Feasibility",
    tag: "Industrial Feasibility",
    desc: "50 to 500+ acre industrial zone master planning with 20-year financial cash flow modeling.",
    img: "/pakconsult_hero_strategy.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Discovery & Scope Alignment", desc: "Understanding strategic objectives, regulatory requirements, stakeholder expectations, and baseline data." },
  { num: "02", title: "Empirical Research & Modeling", desc: "Conducting technical field surveys, market demand sizing, competitor benchmarking, and financial DCF modeling." },
  { num: "03", title: "Strategy & Transaction Structuring", desc: "Formulating bankable feasibility reports, concession agreements, risk allocation matrices, and RFPs." },
  { num: "04", title: "Tender Governance & Execution", desc: "Guiding bid evaluations under PPRA rules, investor roadshows, and EPC contract negotiations." },
  { num: "05", title: "PMO Monitoring & KPI Audits", desc: "Deploying independent supervision teams, tracking earned value telemetry, and resolving schedule variances." },
  { num: "06", title: "Post-Completion Evaluation", desc: "Delivering project close-out reports, economic impact assessments, and continuous operational advisory." },
];

const FAQS = [
  {
    q: "What standards do Pakistani Consultancy Services feasibility studies comply with?",
    a: "Our techno-economic feasibility studies comply with international standards established by the World Bank, Asian Development Bank (ADB), Planning Commission of Pakistan (PC-I guidelines), and statutory environmental protection agencies.",
  },
  {
    q: "Does Pakistani Consultancy Services structure Public-Private Partnership (PPP) concessions?",
    a: "Yes. We have extensive experience structuring Build-Operate-Transfer (BOT), DBFOM, and annuity concessions for highways, special economic zones, municipal water projects, and energy infrastructure.",
  },
  {
    q: "Can you assist government bodies with PPRA procurement compliance?",
    a: "Yes. We draft standardized Request for Proposals (RFP), contractor pre-qualification criteria, and objective bid evaluation scoring matrices in strict compliance with federal and provincial PPRA rules.",
  },
  {
    q: "Do you set up institutional Project Management Offices (PMO) for corporate clients?",
    a: "Yes. We establish dedicated PMOs complete with standardized operating procedures (SOPs), digital executive dashboards, earned value cost telemetry, and independent quality oversight.",
  },
];

export default function PakConsultHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#48525D] font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* Hero Section with Strategic Management Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Premier Strategic Advisory &amp; Project Consultancy Firm</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slateDark }}>
                Strategic Advisory. <span style={{ color: theme.slate }}>Transforming Vision Into Bankable Reality.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Empowering businesses, government bodies, and investors through strategic advisory, technical feasibility studies, project management, financial consultancy, and organizational development. We turn complex challenges into sustainable growth strategies.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/pakistan-consultancy/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.slate }}
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/pakistan-consultancy/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.slateDark }}
                >
                  <span>Consult Senior Partner</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/pakconsult_hero_strategy.svg"
                  alt="Strategic Corporate Feasibility & PMO"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E242B]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#A6823B]">
                        400+ Delivered Studies
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.slateDark }}>
                      Feasibility · PPP Concessions · PMO Governance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => {
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
                  <div className="mb-1" style={{ color: theme.slateDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
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

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/pakconsult_hero_strategy.svg"
                  alt="Management Consultancy Capabilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E242B]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#DFC48B] mb-1">
                      Premier Advisory Practice
                    </p>
                    <h4 className="text-base font-bold">15+ Years of Proven Strategic Management</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Practice</SectionLabel>
              <SectionHeading className="mb-6">Building Sustainable Economic Growth</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Pakistani Consultancy Services provides comprehensive management consulting, techno-economic feasibility studies, procurement governance, and project management office (PMO) oversight. From initial project concept and market demand modeling to financial transaction closing and contract administration, we deliver solutions that meet international benchmarks.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#C5A059] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">FIDIC &amp; PPRA Compliant</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#C5A059] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">400+ Completed Feasibilities</span>
                </div>
              </div>

              <Link
                href="/group-companies/pakistan-consultancy/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#3A444E]"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/pakistan-consultancy/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.slateDark }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="pakconsult-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.slate}10` }}>
                        <Icon size={20} style={{ color: theme.slate }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.slateDark }}>
                        {svc.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href={svc.href}
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.slateDark }}
                    >
                      <span>Explore Division</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Engineered Packages</SectionLabel>
              <SectionHeading>Featured Advisory Packages</SectionHeading>
            </div>

            <Link
              href="/group-companies/pakistan-consultancy/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.slate }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS_PREVIEW.map((p) => (
              <div
                key={p.name}
                className="pakconsult-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#C5A059]/15 text-[#A6823B] inline-block mb-3">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.slateDark }}>
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/pakistan-consultancy/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.slateDark }}
                  >
                    <span>Request Specs</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Pathway Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Methodology</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Advisory Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial project scoping and empirical research to transaction closing, PMO supervision, and post-completion review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-3xl border bg-white shadow-xs flex flex-col justify-between"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.slate }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.slateDark }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center className="mb-4">Everything You Need To Know</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border overflow-hidden bg-white shadow-xs transition-all"
                style={{ borderColor: theme.border }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer"
                  style={{ color: theme.slateDark }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#C5A059]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed border-t pt-4 text-slate-600" style={{ borderColor: theme.border }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#A6823B]">
                COMMENCE YOUR NEXT STRATEGIC INITIATIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.slateDark }}>
                Schedule A Strategic Advisory Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior partners to review Terms of Reference, financial models, and project governance roadmaps.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/pakistan-consultancy/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.slate }}
              >
                <span>Request Project Proposal</span>
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