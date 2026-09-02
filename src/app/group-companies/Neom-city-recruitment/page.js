"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock,
  Compass,
  Cpu,
  Factory,
  FileCheck,
  Fuel,
  Globe2,
  GraduationCap,
  HardHat,
  Headset,
  HeartPulse,
  Landmark,
  Layers,
  MapPin,
  MessageSquare,
  Monitor,
  Phone,
  Plane,
  ScanSearch,
  Search,
  Send,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Truck,
  Upload,
  User,
  UserSearch,
  Users,
  Users2,
  UtensilsCrossed,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  NeomRecruitmentNavbar,
  NeomRecruitmentFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/NeomRecruitmentShared";

const STATS = [
  { icon: CalendarCheck2, value: "20+", label: "Years of Recruitment\nExcellence" },
  { icon: Users2, value: "50000+", label: "Successful Global\nPlacements" },
  { icon: Building2, value: "2000+", label: "Corporate Enterprise\nClients" },
  { icon: User, value: "500+", label: "Recruitment Specialists\n& Talent Advisors" },
  { icon: Award, value: "98%", label: "Client Satisfaction\n& Retention Rate" },
];

const SERVICES = [
  {
    icon: UserSearch,
    title: "Executive Search & C-Suite Headhunting",
    desc: "Identifying and recruiting senior executives, managing directors, and C-level leadership professionals worldwide.",
    href: "/group-companies/Neom-city-recruitment/services#executive-search",
    img: "/neomrecruitment_hero_talent.svg",
  },
  {
    icon: Globe2,
    title: "Overseas Workforce Deployment",
    desc: "Bureau of Emigration certified mass mobilization of engineers, healthcare clinicians, and technical trades for KSA / GCC.",
    href: "/group-companies/Neom-city-recruitment/services#overseas-recruitment",
    img: "/neomrecruitment_hero_talent.svg",
  },
  {
    icon: Users,
    title: "Enterprise Talent Acquisition & RPO",
    desc: "End-to-end hiring solutions including AI-powered candidate sourcing, screening, technical interviews, and onboarding.",
    href: "/group-companies/Neom-city-recruitment/services#talent-acquisition",
    img: "/neomrecruitment_hero_talent.svg",
  },
  {
    icon: MessageSquare,
    title: "Strategic HR Consultancy & Policy",
    desc: "Strategic human resource advisory covering compensation benchmarking, grading structures, KPI systems, and labor compliance.",
    href: "/group-companies/Neom-city-recruitment/services#hr-consultancy",
    img: "/neomrecruitment_hero_talent.svg",
  },
  {
    icon: ClipboardList,
    title: "Contractual & Project-Based Staffing",
    desc: "Supplying vetted contract professionals, turnaround teams, and site engineers tailored to dynamic project phases.",
    href: "/group-companies/Neom-city-recruitment/services#staffing-solutions",
    img: "/neomrecruitment_hero_talent.svg",
  },
  {
    icon: FileCheck,
    title: "Payroll & Complete HR Outsourcing",
    desc: "Managing automated multi-currency payroll, statutory tax withholdings, EOBI, social security, and employee benefits records.",
    href: "/group-companies/Neom-city-recruitment/services#payroll-outsourcing",
    img: "/neomrecruitment_hero_talent.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "Mega-Infrastructure Engineering Contingent",
    tag: "Civil Engineering",
    desc: "Mobilization of 2,500 chartered engineers, BIM leads, and equipment operators for NEOM giga-projects.",
    img: "/neomrecruitment_hero_talent.svg",
  },
  {
    name: "Tertiary Hospital Clinical Workforce",
    tag: "Healthcare Talent",
    desc: "Board-certified consultant physicians, intensive care nurses, and clinical lab technologists for Gulf medical cities.",
    img: "/neomrecruitment_hero_talent.svg",
  },
  {
    name: "5-Star Luxury Resort Pre-Opening Staffing",
    tag: "Hospitality Staffing",
    desc: "1,200 executive culinary professionals, front office managers, and butler staff for Red Sea island resorts.",
    img: "/neomrecruitment_hero_talent.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Workforce Consultation & Role Profiling", desc: "Understanding organizational goals, skill requirements, cultural fit, and destination regulatory frameworks." },
  { num: "02", title: "Global Talent Sourcing & Mapping", desc: "Engaging candidate pipelines across local and international databases, AI sourcing engines, and executive networks." },
  { num: "03", title: "Multi-Tier Screening & Trade Testing", desc: "Evaluating technical capabilities, psychometric leadership profiles, practical trade workshops, and credentials." },
  { num: "04", title: "Client Interviews & Final Selection", desc: "Coordinating structured client interview panels, technical scoring, and executive compensation negotiations." },
  { num: "05", title: "Visa, Medical & Overseas Mobilization", desc: "Managing DataFlow primary source verification, embassy visa clearance, biometric attestation, and flight logistics." },
  { num: "06", title: "Onboarding & Continuous HR Support", desc: "Facilitating seamless workplace integration, performance reviews, and ongoing payroll/HR advisory." },
];

const FAQS = [
  {
    q: "What industries does Neom City Recruitment Consultants specialize in?",
    a: "We specialize in 12+ industry sectors including Construction & Mega-Infrastructure, Healthcare & Hospitals, Information Technology & AI, Oil, Gas & Petrochemicals, 5-Star Hospitality, Manufacturing, Aviation, and Banking & Financial Services.",
  },
  {
    q: "Is Neom City Recruitment Consultants licensed for overseas recruitment?",
    a: "Yes. We operate as an officially licensed Overseas Employment Promoter (OEP) under the Bureau of Emigration and Overseas Employment, Government of Pakistan, with complete accreditation for Saudi Arabia, UAE, Qatar, Kuwait, Oman, and global destinations.",
  },
  {
    q: "How do you verify candidate technical skills and credentials?",
    a: "Every candidate undergoes practical trade workshops, standardized technical assessments, and primary source background verification via DataFlow and authorized academic/licensing bodies.",
  },
  {
    q: "Does your recruitment adhere to ethical ILO guidelines?",
    a: "Yes. We operate on the Employer-Pays principle in full compliance with International Labour Organization (ILO) standards, ensuring zero recruitment fees charged to job-seeking workers and full contract transparency.",
  },
];

export default function NeomRecruitmentHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomRecruitmentNavbar />

      {/* Hero Section with Global Talent Console */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Trusted Human Resources &amp; Recruitment Consultancy</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Connecting Exceptional Talent <span style={{ color: theme.blue }}>with Global Opportunities.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Neom City Recruitment Consultants is a leading human resources and recruitment consultancy specializing in executive search, overseas recruitment, workforce planning, talent acquisition, HR outsourcing, and staffing solutions across 12+ industries worldwide.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/Neom-city-recruitment/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.blue }}
                >
                  <span>Explore Industry Sectors</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/Neom-city-recruitment/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Find Talent</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-sky-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/neomrecruitment_hero_talent.svg"
                  alt="Neom City Recruitment Global Talent Command"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#0072CE]">
                        50,000+ Placements Made
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      2,000+ Corporate Clients · Saudi Giga-Projects · ILO Certified
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
                  className="nr-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.blue}10` }}>
                    <Icon size={22} style={{ color: theme.blue }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navyDark }}>
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
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-sky-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/neomrecruitment_hero_talent.svg"
                  alt="Global Human Capital & Overseas Mobilization"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#00A896] mb-1">
                      Human Capital Leadership
                    </p>
                    <h4 className="text-base font-bold">Building Strong Workforces for a Competitive Future</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Neom City Recruitment</SectionLabel>
              <SectionHeading className="mb-6">Global Talent Acquisition &amp; Workforce Advisory</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Neom City Recruitment Consultants provides comprehensive recruitment and workforce solutions for businesses across diverse industries. From talent sourcing and executive hiring to HR consulting and workforce management, we deliver recruitment strategies that support sustainable business growth across local and international markets.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-sky-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#0072CE] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">ILO Ethical Recruitment Certified</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-sky-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#0072CE] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">50,000+ Global Placements</span>
                </div>
              </div>

              <Link
                href="/group-companies/Neom-city-recruitment/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#0072CE]"
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
              <SectionHeading>Our Core HR Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/Neom-city-recruitment/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.navyDark }}
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
                  className="nr-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.blue}10` }}>
                        <Icon size={20} style={{ color: theme.blue }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.navyDark }}>
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
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-sky-50/50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navyDark }}
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
              <SectionLabel>Signature Packages</SectionLabel>
              <SectionHeading>Featured Talent Solutions</SectionHeading>
            </div>

            <Link
              href="/group-companies/Neom-city-recruitment/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.blue }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS_PREVIEW.map((s) => (
              <div
                key={s.name}
                className="nr-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#0072CE]/15 text-[#0072CE] inline-block mb-3">
                      {s.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.navyDark }}>
                      {s.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {s.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/Neom-city-recruitment/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-sky-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request Talent Terms</span>
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
            <SectionHeading center className="mb-4">6-Stage Recruitment Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From role profiling and global candidate mapping to practical trade testing, DataFlow attestation, and overseas mobilization.
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
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.navy }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.navyDark }}>
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
                  style={{ color: theme.navyDark }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#0072CE]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0072CE]">
                BUILD YOUR HIGH-PERFORMANCE WORKFORCE TODAY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An Enterprise HR Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior executive search partners and overseas workforce directors to review candidate salary benchmarks, trade testing, and visa mobilization.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/Neom-city-recruitment/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Initiate Hiring Request</span>
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