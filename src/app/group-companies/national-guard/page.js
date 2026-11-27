"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building,
  Building2,
  Camera,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock,
  Factory,
  FileText,
  GraduationCap,
  HardHat,
  Headphones,
  Home as HomeIcon,
  Hotel,
  Landmark,
  Network,
  Phone,
  Radio,
  Search,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  ThumbsUp,
  UserCheck,
  Users,
  Warehouse,
  ArrowRight,
  BadgeCheck,
} from "lucide-react";
import {
  theme,
  NationalGuardNavbar,
  NationalGuardFooter,
  NationalGuardLeadershipSection,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/NationalGuardShared";

const STATS = [
  { icon: ShieldCheck, value: "10+", label: "Years of\nExperience" },
  { icon: Users, value: "500+", label: "Security\nProfessionals" },
  { icon: Building2, value: "1000+", label: "Protected\nSites" },
  { icon: Clock, value: "24/7", label: "Security\nOperations" },
  { icon: ThumbsUp, value: "99%", label: "Client\nSatisfaction" },
];

const SERVICES = [
  {
    icon: UserCheck,
    title: "Manned Guarding",
    tag: "Physical Security",
    desc: "Professional uniformed armed and unarmed security officers for commercial, residential, industrial, and government facilities.",
    img: "/national-guard-manned-guarding.png",
    href: "/group-companies/national-guard/services/manned-guarding",
  },
  {
    icon: Radio,
    title: "Mobile Patrol Services",
    tag: "Patrol & QRT",
    desc: "Scheduled and random GPS-tracked patrols with rapid quick-response units to reinforce site security day and night.",
    img: "/national-guard-mobile-patrol.png",
    href: "/group-companies/national-guard/services/mobile-patrol",
  },
  {
    icon: Camera,
    title: "CCTV Monitoring",
    tag: "24/7 Control Room",
    desc: "Continuous surveillance through high-definition IP monitoring systems, AI alerts, and central operations control rooms.",
    img: "/national-guard-hero-bg.png",
    href: "/group-companies/national-guard/services/cctv-monitoring",
  },
  {
    icon: ClipboardCheck,
    title: "Risk Assessment",
    tag: "Security Consulting",
    desc: "Comprehensive site security audits, vulnerability assessments, SOP design, and strategic risk mitigation blueprints.",
    img: "/images/walton/about_conference_plans.jpg",
    href: "/group-companies/national-guard/services/risk-assessment",
  },
  {
    icon: Users,
    title: "Event Security",
    tag: "VIP & Crowd Control",
    desc: "Executive close protection, walk-through screening arches, and crowd management for high-profile summits and gatherings.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    href: "/group-companies/national-guard/services/event-security",
  },
  {
    icon: Building2,
    title: "Facility Protection",
    tag: "Corporate Security",
    desc: "Integrated security operations engineered to protect corporate towers, factories, warehouses, and educational campuses.",
    img: "/bright-corporate-skyscraper.jpg",
    href: "/group-companies/national-guard/services/facility-protection",
  },
];

const INDUSTRIES = [
  { icon: Landmark, label: "Government\nOrganizations", href: "/group-companies/national-guard/industries/government-organizations" },
  { icon: Building, label: "Corporate\nOffices", href: "/group-companies/national-guard/industries/corporate-offices" },
  { icon: HomeIcon, label: "Residential\nCommunities", href: "/group-companies/national-guard/industries/residential-communities" },
  { icon: ShoppingBag, label: "Shopping\nMalls", href: "/group-companies/national-guard/industries/shopping-malls" },
  { icon: Factory, label: "Industrial\nFacilities", href: "/group-companies/national-guard/industries/industrial-facilities" },
  { icon: Stethoscope, label: "Healthcare\nCenters", href: "/group-companies/national-guard/industries/healthcare-centers" },
  { icon: GraduationCap, label: "Educational\nInstitutions", href: "/group-companies/national-guard/industries/educational-institutions" },
  { icon: Hotel, label: "Hotels &\nHospitality", href: "/group-companies/national-guard/industries/hotels-hospitality" },
  { icon: Landmark, label: "Financial\nInstitutions", href: "/group-companies/national-guard/industries/financial-institutions" },
  { icon: HardHat, label: "Construction\nSites", href: "/group-companies/national-guard/industries/construction-sites" },
  { icon: Warehouse, label: "Logistics &\nWarehouses", href: "/group-companies/national-guard/industries/logistics-warehouses" },
  { icon: Network, label: "Critical\nInfrastructure", href: "/group-companies/national-guard/industries/critical-infrastructure" },
];

const WHY_CHOOSE_REASONS = [
  "Highly Trained Security Personnel",
  "Licensed & NADRA-Verified Guards",
  "24/7 Monitoring & Operations Support",
  "Modern Surveillance Technology",
  "Customized Site Security Plans",
  "Reliable Day & Night Supervision",
  "Rapid Emergency Response Units",
  "Proven Track Record Across Pakistan",
];

const PROCESS_STEPS = [
  { step: "01", icon: Users, title: "Security\nConsultation" },
  { step: "02", icon: Search, title: "Site\nInspection" },
  { step: "03", icon: ShieldCheck, title: "Risk\nAssessment" },
  { step: "04", icon: FileText, title: "Customized\nSecurity Plan" },
  { step: "05", icon: UserCheck, title: "Deployment &\nSupervision" },
  { step: "06", icon: Headphones, title: "Continuous\nSupport" },
];

const FAQS = [
  {
    q: "What types of security guards and services do you provide?",
    a: "We provide armed (ex-military / trained civilian) and unarmed static guards, mobile patrol units, 24/7 CCTV surveillance, event security, and comprehensive facility risk audits.",
  },
  {
    q: "Are all National Guard security personnel licensed and verified?",
    a: "Yes. Every guard undergoes NADRA biometric verification, local police clearance checks, and weapon training certifications before deployment.",
  },
  {
    q: "How quickly can security guards be mobilized to our premises?",
    a: "Standard guard placements can be mobilized within 24 to 48 hours. Emergency or immediate reinforcement squads can be activated within 2 to 4 hours.",
  },
  {
    q: "Do you offer 24/7 continuous operations supervision?",
    a: "Yes. In addition to on-site guards, our area field supervisors conduct surprise mobile inspections day and night, connected to our 24/7 control center.",
  },
];

export default function NationalGuardHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#1B365D] font-sans antialiased overflow-x-hidden">
      <NationalGuardNavbar />

      {/* 01 — Hero Section (Tight Spacing + Unique Command Gatehouse Image) */}
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
            <div className="lg:col-span-7">
              <SectionLabel>Pakistan&apos;s Trusted Security Partner</SectionLabel>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase mb-4"
                style={{ color: theme.navy }}
              >
                Protecting People, Properties &amp;{" "}
                <span style={{ color: theme.gold }}>Critical Assets</span>
              </h1>

              <p
                className="text-[16px] sm:text-[18px] font-medium leading-relaxed mb-6"
                style={{ color: theme.textMuted }}
              >
                National Guard Security Services delivers premier armed &amp; unarmed guarding,
                24/7 mobile patrols, and integrated digital surveillance to safeguard businesses,
                residential communities, and industrial facilities across Pakistan.
              </p>

              {/* High-Trust Verification Strip */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {["Govt Licensed Force", "100% NADRA Verified", "24/7 Rapid Response"].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-extrabold border bg-white shadow-2xs"
                    style={{ borderColor: theme.border, color: theme.navy }}
                  >
                    <BadgeCheck size={15} style={{ color: theme.gold }} />
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/group-companies/national-guard/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-extrabold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={17} />
                </Link>

                <Link
                  href="/group-companies/national-guard/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-extrabold uppercase tracking-wide border-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer bg-white"
                  style={{ borderColor: theme.navy, color: theme.navy }}
                >
                  <span>Get A Free Quote</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image (Unique: /national-guard/hero-command.jpg) */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[520px] h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-100"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/national-guard/hero-command.jpg"
                  alt="National Guard Armed & Uniformed Security Officers at Corporate Gatehouse"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/85 via-transparent to-transparent flex items-end p-5">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span
                        className="text-[12.5px] font-black uppercase tracking-wider"
                        style={{ color: theme.gold }}
                      >
                        Operational Readiness
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-[15px] font-extrabold" style={{ color: theme.navy }}>
                      500+ Active Officers on 24/7 Vigilance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — High-Contrast Navy Stats Bar */}
      <section
        className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.navyDark, borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {STATS.map((stat, i) => {
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
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p
                    className="text-[13px] font-bold uppercase tracking-wider whitespace-pre-line leading-snug"
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

      {/* 03 — About Company Showcase */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Image (Unique: /national-guard-about.png) */}
            <div className="lg:col-span-6">
              <div
                className="relative w-full h-[350px] sm:h-[400px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/national-guard-about.png"
                  alt="National Guard Security Access Control Officer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p
                      className="text-[12.5px] font-black uppercase tracking-widest mb-1"
                      style={{ color: theme.goldBright }}
                    >
                      Professional Leadership
                    </p>
                    <h4 className="text-[17px] sm:text-[18px] font-extrabold text-white">
                      Managed By Retired Armed Forces Officers
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-4">
                Disciplined Protection Engineered For Trust
              </SectionHeading>

              <p
                className="text-[15.5px] sm:text-[17px] font-medium leading-relaxed mb-5"
                style={{ color: theme.textMuted }}
              >
                National Guard Security Services (Pvt) Ltd has established itself as one of the most
                reliable and disciplined private security providers in Pakistan. Our strength lies
                in rigorous recruit vetting, ex-military supervisory leadership, and modern
                communication command systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                <div
                  className="flex items-center gap-3 p-3.5 rounded-2xl border bg-[#F4F6F9]"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={19} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-[14px] sm:text-[15px] font-extrabold text-[#1B365D]">
                    Govt Licensed &amp; Verified
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 p-3.5 rounded-2xl border bg-[#F4F6F9]"
                  style={{ borderColor: theme.border }}
                >
                  <CheckCircle2 size={19} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-[14px] sm:text-[15px] font-extrabold text-[#1B365D]">
                    24/7 Supervisory Patrols
                  </span>
                </div>
              </div>

              <Link
                href="/group-companies/national-guard/about"
                className="inline-flex items-center gap-2 text-[15px] font-black uppercase tracking-wider transition-all hover:gap-3"
                style={{ color: theme.gold }}
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — Core Services Section (Soft Slate Surface + 6 Unique Images) */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.bgLight, borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-9">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Security Solutions</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-guard/services"
              className="inline-flex items-center gap-2 text-[15px] font-black uppercase tracking-wider hover:text-[#B38A3F] transition-colors"
              style={{ color: theme.navy }}
            >
              <span>View All 6 Services</span>
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="ng-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span
                          className="text-[12px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm"
                          style={{ color: theme.navy, borderColor: theme.border }}
                        >
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${theme.navy}12` }}
                        >
                          <Icon size={20} style={{ color: theme.navy }} />
                        </div>
                        <h3
                          className="text-[19px] sm:text-[20px] font-black leading-tight"
                          style={{ color: theme.navy }}
                        >
                          {svc.title}
                        </h3>
                      </div>

                      <p
                        className="text-[14.5px] sm:text-[15.5px] font-medium leading-relaxed"
                        style={{ color: theme.textMuted }}
                      >
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <Link
                      href={svc.href}
                      className="w-full py-3 rounded-xl border-2 text-[14px] font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#1B365D] hover:text-white transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navy }}
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — NEW: Executive Leadership & Security Command Team Section */}
      <NationalGuardLeadershipSection />

      {/* 06 — Industries Protected Section */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <SectionLabel center>Tailored Sector Coverage</SectionLabel>
            <SectionHeading center className="mb-3">
              Industries We Safeguard
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[17px] font-medium" style={{ color: theme.textMuted }}>
              Delivering customized security matrices engineered specifically for diverse facility
              and regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.label}
                  href={ind.href}
                  className="ng-counter-box p-4 sm:p-5 rounded-2xl border flex flex-col items-center justify-center text-center group bg-white shadow-xs cursor-pointer"
                  style={{ borderColor: theme.border }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${theme.navy}12` }}
                  >
                    <Icon size={20} style={{ color: theme.navy }} />
                  </div>
                  <p className="text-[13px] sm:text-[13.5px] font-extrabold leading-snug uppercase tracking-wide whitespace-pre-line text-[#1B365D]">
                    {ind.label}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/group-companies/national-guard/industries"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 text-[14px] font-extrabold uppercase tracking-wider transition-all hover:bg-[#1B365D] hover:text-white"
              style={{ borderColor: theme.navy, color: theme.navy }}
            >
              <span>Explore All 12 Protected Sectors</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 07 — Why Choose National Guard Section (Unique Night Radio Officer Image) */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.bgLight, borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-6">
              <SectionLabel>The National Guard Standard</SectionLabel>
              <SectionHeading className="mb-4">Why Partner With Us?</SectionHeading>
              <p
                className="text-[15.5px] sm:text-[17px] font-medium leading-relaxed mb-6"
                style={{ color: theme.textMuted }}
              >
                We combine disciplined physical guarding and military-grade supervision with modern
                digital reporting to deliver unmatched peace of mind.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {WHY_CHOOSE_REASONS.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl border bg-white shadow-2xs"
                    style={{ borderColor: theme.border }}
                  >
                    <CheckCircle2 size={18} style={{ color: theme.gold }} className="flex-shrink-0" />
                    <span className="text-[14px] sm:text-[14.5px] font-bold text-[#1B365D]">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="relative w-full h-[360px] sm:h-[400px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-900"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/national-guard-cta-bg.png"
                  alt="National Guard Night Duty Officer on Tactical Radio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/90 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p
                      className="text-[12.5px] font-black uppercase tracking-widest mb-1"
                      style={{ color: theme.goldBright }}
                    >
                      24/7 Night &amp; Day Vigilance
                    </p>
                    <h4 className="text-[17px] sm:text-[18px] font-extrabold text-white">
                      Encrypted Radio Comms &amp; Continuous Field Supervision
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 — Process Pathway Section */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <SectionLabel center>Our Protocol</SectionLabel>
            <SectionHeading center className="mb-3">
              6-Step Guard Deployment Workflow
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[17px] font-medium" style={{ color: theme.textMuted }}>
              From the initial site survey to continuous daily oversight, every deployment follows
              strict verified quality controls.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="ng-counter-box p-5 rounded-2xl border flex flex-col items-center text-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-[15px] text-white mb-3 shadow-sm"
                    style={{ backgroundColor: theme.navy }}
                  >
                    {step.step}
                  </div>
                  <Icon size={22} className="mb-2" style={{ color: theme.gold }} />
                  <p className="text-[13.5px] font-extrabold leading-snug uppercase whitespace-pre-line text-[#1B365D]">
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 09 — FAQ Accordion Section */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.bgLight, borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center className="mb-2">
              Everything You Need To Know
            </SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border overflow-hidden bg-white shadow-xs transition-all"
                style={{ borderColor: openFaq === idx ? theme.gold : theme.border }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-extrabold text-[15.5px] sm:text-[17px] cursor-pointer"
                  style={{ color: theme.navy }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#B38A3F]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div
                    className="px-5 pb-5 text-[15px] sm:text-[16px] font-medium leading-relaxed border-t pt-3.5 text-slate-700"
                    style={{ borderColor: theme.border }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10 — Call To Action Section (Command Navy Banner) */}
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
                READY TO HARDEN YOUR PREMISES?
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                Request A Free Security Consultation
              </h2>
              <p className="text-[15px] sm:text-[16px] font-medium max-w-xl text-slate-200 leading-relaxed">
                Speak directly with our senior security officers to conduct an on-site survey and
                receive tailored guard deployment proposals.
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
