"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AlarmClock,
  BarChart3,
  Building,
  Building2,
  Camera,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Eye,
  Factory,
  FileText,
  GraduationCap,
  HardHat,
  Headphones,
  Home as HomeIcon,
  Hotel,
  Landmark,
  Lock,
  Mail,
  MapPin,
  MapPinned,
  Minus,
  Network,
  Phone,
  Plus,
  Radio,
  ScanEye,
  Search,
  Send,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Star,
  Stethoscope,
  ThumbsUp,
  User,
  UserCheck,
  Users,
  Warehouse,
  ArrowRight,
  Award,
} from "lucide-react";
import {
  theme,
  NationalGuardNavbar,
  NationalGuardFooter,
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
    desc: "Professional uniformed security officers for commercial, residential, industrial, and government facilities.",
    img: "/national-guard-manned-guarding.png",
    href: "/group-companies/national-guard/services/manned-guarding",
  },
  {
    icon: Radio,
    title: "Mobile Patrol Services",
    desc: "Scheduled and random patrols to enhance site security and rapid incident response.",
    img: "/national-guard-mobile-patrol.png",
    href: "/group-companies/national-guard/services/mobile-patrol",
  },
  {
    icon: Camera,
    title: "CCTV Monitoring",
    desc: "Continuous surveillance through advanced monitoring systems and central control rooms.",
    img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=400&q=80",
    href: "/group-companies/national-guard/services/cctv-monitoring",
  },
  {
    icon: ClipboardCheck,
    title: "Risk Assessment",
    desc: "Comprehensive security audits, vulnerability assessments, and strategic risk management.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80",
    href: "/group-companies/national-guard/services/risk-assessment",
  },
  {
    icon: Users,
    title: "Event Security",
    desc: "Professional crowd management and event protection for public and private gatherings.",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
    href: "/group-companies/national-guard/services/event-security",
  },
  {
    icon: Building2,
    title: "Facility Protection",
    desc: "Integrated security services designed to secure offices, factories, warehouses, and educational institutions.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80",
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
  "Licensed & Professional Guards",
  "24/7 Monitoring & Operations Support",
  "Modern Surveillance Technology",
  "Customized Security Plans",
  "Reliable Day & Night Supervision",
  "Rapid Emergency Response",
  "Proven Industry Experience Across Pakistan",
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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Pakistan&apos;s Trusted Security Partner</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
                Protecting People, Properties &amp; <span style={{ color: theme.gold }}>Critical Assets</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                National Guard Security Services delivers premier armed &amp; unarmed guarding, 24/7 mobile patrols, and integrated digital surveillance to safeguard businesses, residential communities, and industrial facilities.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/national-guard/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/national-guard/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Get A Free Quote</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/national-guard-manned-guarding.png"
                  alt="National Guard Uniformed Security Officers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider" style={{ color: theme.gold }}>
                        Operational Readiness
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.navy }}>
                      500+ Active Officers on 24/7 Vigilance
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
                  className="ng-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.navy }}>
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

      {/* About Company Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/national-guard-about.png"
                  alt="About National Guard Security"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#C5A059] mb-1">
                      Professional Leadership
                    </p>
                    <h4 className="text-base font-bold">Managed By Retired Armed Forces Officers</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Disciplined Protection Engineered For Trust</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                National Guard Security Services (Pvt) Ltd has established itself as one of the most reliable and disciplined private security providers in the country. Our strength lies in our rigorous recruit selection, ex-military supervisory backbone, and constant modernization of communication systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Govt Licensed &amp; Verified</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">24/7 Mobile Supervisory Patrols</span>
                </div>
              </div>

              <Link
                href="/group-companies/national-guard/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3"
                style={{ color: theme.gold }}
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Security Solutions</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-guard/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.navy }}
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
                  className="ng-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.navy}10` }}>
                        <Icon size={20} style={{ color: theme.navy }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.navy }}>
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
                      style={{ borderColor: theme.border, color: theme.navy }}
                    >
                      <span>Explore Service</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Protected Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Tailored Sector Coverage</SectionLabel>
            <SectionHeading center className="mb-4">Industries We Safeguard</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Delivering customized security matrices designed specifically for diverse facility requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.label}
                  href={ind.href}
                  className="ng-counter-box p-5 rounded-2xl border flex flex-col items-center justify-center text-center group bg-white shadow-xs cursor-pointer hover:border-[#C5A059]"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-11 h-11 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={18} style={{ color: theme.navy }} />
                  </div>
                  <p className="text-[11px] font-bold leading-tight uppercase tracking-wider whitespace-pre-line text-slate-800">
                    {ind.label}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/group-companies/national-guard/industries"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all hover:bg-slate-50"
              style={{ borderColor: theme.border, color: theme.navy }}
            >
              <span>Explore All Protected Sectors</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose National Guard Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionLabel>The National Guard Standard</SectionLabel>
              <SectionHeading className="mb-6">Why Partner With Us?</SectionHeading>
              <p className="text-sm sm:text-base font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                We combine physical strength and tactical discipline with modern digital reporting to deliver unmatched peace of mind.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {WHY_CHOOSE_REASONS.map((reason) => (
                  <div key={reason} className="flex items-center gap-2.5 p-3 rounded-xl border bg-slate-50/70" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={16} style={{ color: theme.gold }} className="flex-shrink-0" />
                    <span className="text-xs font-bold text-slate-800">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/national-guard-mobile-patrol.png"
                  alt="National Guard Mobile Patrol Cruiser"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#C5A059] mb-1">
                      Fleet Operations
                    </p>
                    <h4 className="text-base font-bold">24/7 Mobile Patrol Cruisers &amp; Quick Response Units</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Pathway Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Our Protocol</SectionLabel>
            <SectionHeading center className="mb-4">6-Step Guard Deployment Workflow</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From the initial site visit to daily continuous support, we maintain strict quality control.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="p-5 rounded-2xl border flex flex-col items-center text-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs text-white mb-3 shadow-xs" style={{ backgroundColor: theme.navy }}>
                    {step.step}
                  </div>
                  <Icon size={20} className="mb-2" style={{ color: theme.gold }} />
                  <p className="text-xs font-bold leading-tight uppercase whitespace-pre-line text-slate-800">
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
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
                  style={{ color: theme.navy }}
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

      {/* Call To Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.gold }}>
                READY TO HARDEN YOUR PREMISES?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navy }}>
                Request A Free Security Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak directly with our senior security managers to conduct an on-site survey and get custom security proposals.
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
