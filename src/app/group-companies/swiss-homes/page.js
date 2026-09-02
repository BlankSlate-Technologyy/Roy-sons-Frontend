"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BarChart3,
  Building,
  Building2,
  CheckCircle2,
  ChevronDown,
  Compass,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  Hammer,
  HardHat,
  HeartPulse,
  Home as HomeIcon,
  KeyRound,
  Landmark,
  Layers,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Network,
  PenTool,
  Phone,
  Search,
  Send,
  Settings2,
  Shield,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  TrendingUp,
  Tractor,
  User,
  Users,
  Users2,
  Wrench,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  SwissHomesNavbar,
  SwissHomesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/SwissHomesShared";

const STATS = [
  { icon: Building2, value: "30+", label: "Years of Real Estate\nExcellence" },
  { icon: Hammer, value: "200+", label: "Successfully Completed\nProjects" },
  { icon: Users2, value: "25K+", label: "Residential & Commercial\nUnits Delivered" },
  { icon: User, value: "100+", label: "Development\nProfessionals" },
  { icon: Award, value: "98%", label: "Customer Satisfaction\nRating" },
];

const SERVICES = [
  {
    icon: HomeIcon,
    title: "Residential Development",
    desc: "Developing modern housing communities, luxury villas, apartments, and family-friendly neighborhoods.",
    href: "/group-companies/swiss-homes/services#residential",
    img: "/swiss_hero_architecture.svg",
  },
  {
    icon: Building2,
    title: "Commercial Development",
    desc: "Construction of office buildings, shopping centers, business parks, and mixed-use developments.",
    href: "/group-companies/swiss-homes/services#commercial",
    img: "/swiss_master_planning.svg",
  },
  {
    icon: TrendingUp,
    title: "Property Investment",
    desc: "Providing secure real estate investment opportunities with long-term capital growth potential.",
    href: "/group-companies/swiss-homes/services#investment",
    img: "/swiss_hero_architecture.svg",
  },
  {
    icon: Compass,
    title: "Master Planning",
    desc: "Comprehensive urban planning, infrastructure design, and sustainable community development.",
    href: "/group-companies/swiss-homes/services#master-planning",
    img: "/swiss_master_planning.svg",
  },
  {
    icon: Hammer,
    title: "Construction Management",
    desc: "Managing every stage of construction with strict quality control and timely project delivery.",
    href: "/group-companies/swiss-homes/services#construction",
    img: "/swiss_hero_architecture.svg",
  },
  {
    icon: ShieldCheck,
    title: "Property Management",
    desc: "Professional property maintenance, facility management, leasing support, and 24/7 security.",
    href: "/group-companies/swiss-homes/services#facility",
    img: "/swiss_master_planning.svg",
  },
];

const SIGNATURE_PROJECTS = [
  {
    name: "Swiss Enclave Luxury Villas",
    location: "Ring Road Corridor, Lahore",
    type: "10 Marla & 1 Kanal Smart Villas",
    status: "Ready for Possession",
    img: "/swiss_hero_architecture.svg",
  },
  {
    name: "Swiss Crest Smart Heights",
    location: "Blue Area / Main Boulevard, Islamabad",
    type: "1, 2 & 3 Bed Serviced Apartments",
    status: "Booking Open – 3-Yr Plan",
    img: "/swiss_master_planning.svg",
  },
  {
    name: "Swiss Executive Business Tower",
    location: "Corporate District, Karachi",
    type: "Grade-A Corporate Offices & Retail",
    status: "Fast-Track Construction",
    img: "/swiss_hero_architecture.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Land Acquisition & Feasibility", desc: "Selecting high-growth urban corridors with verified legal titles and strategic transit connectivity." },
  { num: "02", title: "BIM Architectural Design", desc: "Developing 3D master plans, structural blueprints, and energy-efficient environmental layouts." },
  { num: "03", title: "Precision Construction", desc: "Executing reinforced foundations, earthquake-resistant frames, and European-grade MEP installations." },
  { num: "04", title: "Quality Audit & Inspection", desc: "Third-party structural integrity, waterproofing, and finishing quality compliance testing." },
  { num: "05", title: "Timely Property Handover", desc: "Delivering fully finished homes and commercial suites with comprehensive ownership documentation." },
  { num: "06", title: "Post-Handover Facility Care", desc: "Providing 24/7 gated security, smart waste management, and dedicated maintenance teams." },
];

const FAQS = [
  {
    q: "What types of properties does Swiss Homes develop?",
    a: "Swiss Homes specializes in luxury residential villas (5 Marla, 10 Marla, 1 & 2 Kanal), smart apartment high-rises, commercial office towers, shopping arcades, and 500+ acre master-planned gated communities.",
  },
  {
    q: "Are installment plans available for Swiss Homes projects?",
    a: "Yes. We offer transparent 2-year, 3-year, and 4-year interest-free installment payment schedules with flexible quarterly or monthly installments.",
  },
  {
    q: "Are all Swiss Homes projects legally approved by government authorities?",
    a: "Every Swiss Homes development undergoes rigorous statutory approvals and receives complete NOCs and construction licenses from relevant development authorities (such as LDA, CDA, SBCA, RDA).",
  },
  {
    q: "How do I book a site tour or model villa inspection?",
    a: "You can book a site tour directly through our website booking form, or contact our Sales Hotline at 0092-42-38924737 / WhatsApp at 0092-304-7527498.",
  },
];

export default function SwissHomesHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#2B2B2B] font-sans antialiased overflow-x-hidden">
      <SwissHomesNavbar />

      {/* Hero Section with Luxury Villa Illustration */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Trusted Real Estate &amp; Housing Development</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
                Building Modern Communities. <span style={{ color: theme.red }}>Creating Better Living.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Swiss Homes is a premier real estate development company specializing in residential communities, luxury villas, commercial towers, smart housing projects, and property investment solutions across Pakistan.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/swiss-homes/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.red }}
                >
                  <span>Explore Signature Projects</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/swiss-homes/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.charcoal }}
                >
                  <span>Book Property Tour</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss_hero_architecture.svg"
                  alt="Swiss Homes Luxury Villa Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#B01B2E]">
                        25,000+ Units Delivered
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.charcoal }}>
                      Villas · Smart High-Rises · Gated Communities
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
                  className="swiss-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.red}10` }}>
                    <Icon size={22} style={{ color: theme.red }} />
                  </div>
                  <div className="mb-1" style={{ color: theme.charcoal }}>
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
                  src="/swiss_master_planning.svg"
                  alt="Swiss Homes Smart Master Planning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#B01B2E] mb-1">
                      Sustainable Urban Design
                    </p>
                    <h4 className="text-base font-bold">BIM 3D Master Planning &amp; Underground Utilities</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Shaping The Future Of Real Estate Development</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Swiss Homes is dedicated to developing premium residential, commercial, and mixed-use communities that combine architectural excellence, sustainable planning, and modern infrastructure. We deliver complete real estate solutions that exceed investor and homeowner expectations.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#B01B2E] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">100% Approved Legal Titles &amp; NOCs</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#B01B2E] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Smart Home Automation Integration</span>
                </div>
              </div>

              <Link
                href="/group-companies/swiss-homes/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#B01B2E]"
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
              <SectionHeading>Our Core Capabilities</SectionHeading>
            </div>

            <Link
              href="/group-companies/swiss-homes/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.charcoal }}
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
                  className="swiss-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.red}10` }}>
                        <Icon size={20} style={{ color: theme.red }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.charcoal }}>
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
                      style={{ borderColor: theme.border, color: theme.charcoal }}
                    >
                      <span>Explore Capability</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Signature Projects Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Signature Portfolio</SectionLabel>
              <SectionHeading>Featured Developments</SectionHeading>
            </div>

            <Link
              href="/group-companies/swiss-homes/projects"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.red }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SIGNATURE_PROJECTS.map((p) => (
              <div
                key={p.name}
                className="swiss-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#B01B2E]/10 text-[#B01B2E] inline-block mb-3">
                      {p.status}
                    </span>
                    <h3 className="text-xl font-black mb-1.5" style={{ color: theme.charcoal }}>
                      {p.name}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mb-2">{p.location}</p>
                    <p className="text-xs font-bold text-slate-700">{p.type}</p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/swiss-homes/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.charcoal }}
                  >
                    <span>Request Details</span>
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
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Real Estate Development Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial land feasibility audits to turnkey delivery and decade-long estate management.
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
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.red }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.charcoal }}>
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
                  style={{ color: theme.charcoal }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#B01B2E]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#B01B2E]">
                READY TO ACQUIRE YOUR NEXT PROPERTY ASSET?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.charcoal }}>
                Schedule An Exclusive On-Site Tour
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior property managers to inspect model villas, compare payment schedules, and secure your investment.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-homes/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.red }}
              >
                <span>Book Site Tour</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.charcoal, color: theme.charcoal }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissHomesFooter />
    </main>
  );
}