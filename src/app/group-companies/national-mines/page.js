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
  Drill,
  Factory,
  FileText,
  FlaskConical,
  Globe,
  HardHat,
  Landmark,
  Layers,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  Search,
  Send,
  Shield,
  ShieldCheck,
  Star,
  TrendingUp,
  Truck,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
  MINERALS_LIST,
} from "./components/NationalMinesShared";

const STATS = [
  { icon: Award, value: "20+", label: "Years of Mining\nExperience" },
  { icon: BarChart3, value: "50+", label: "Mining & Exploration\nProjects" },
  { icon: Truck, value: "5M+", label: "Tons of Minerals\nProcessed" },
  { icon: Users, value: "500+", label: "Skilled Engineers &\nGeologists" },
  { icon: ShieldCheck, value: "99%", label: "Operational Safety\nCompliance" },
];

const SERVICES = [
  {
    icon: Mountain,
    title: "Mineral Exploration",
    desc: "Comprehensive geological surveys, deep core drilling, satellite mapping & 3D resource evaluation.",
    href: "/group-companies/national-mines/services#exploration",
    img: "/mine_geology_core.svg",
  },
  {
    icon: HardHat,
    title: "Mine Planning & Design",
    desc: "Strategic pit limit design, bankable feasibility studies, infrastructure planning, and slope stability modeling.",
    href: "/group-companies/national-mines/services#planning",
    img: "/mine_hero_openpit.svg",
  },
  {
    icon: Drill,
    title: "Heavy Extraction Operations",
    desc: "Modern open-pit and underground bulk excavation using advanced electric drills and heavy haulage fleets.",
    href: "/group-companies/national-mines/services#extraction",
    img: "/mine process.png",
  },
  {
    icon: FlaskConical,
    title: "Mineral Processing & Refining",
    desc: "Advanced multi-stage crushing, froth flotation, magnetic separation & gravity smelting for peak purity.",
    href: "/group-companies/national-mines/services#processing",
    img: "/mine technology.png",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    desc: "Progressive land rehabilitation, dry-stack tailings filtration, and 92% closed-loop process water recycling.",
    href: "/group-companies/national-mines/sustainability",
    img: "/mine header.png",
  },
  {
    icon: BarChart3,
    title: "Mining Consultancy & Audits",
    desc: "Government concession licensing, Competent Person Reports, resource valuation, and compliance advisory.",
    href: "/group-companies/national-mines/services#consultancy",
    img: "/mine_geology_core.svg",
  },
];

const INDUSTRIES = [
  { icon: Building, label: "Construction &\nAggregates", href: "/group-companies/national-mines/industries/construction-aggregates" },
  { icon: Landmark, label: "Infrastructure\nDevelopment", href: "/group-companies/national-mines/industries/infrastructure-development" },
  { icon: Factory, label: "Steel & Alloys\nManufacturing", href: "/group-companies/national-mines/industries/steel-alloys-manufacturing" },
  { icon: Building2, label: "Cement &\nBuilding Materials", href: "/group-companies/national-mines/industries/cement-building-materials" },
  { icon: Zap, label: "Energy & Captive\nPower Generation", href: "/group-companies/national-mines/industries/energy-power-generation" },
  { icon: Layers, label: "Industrial Chemicals\n& Foundry", href: "/group-companies/national-mines/industries/industrial-chemicals-foundry" },
  { icon: Globe, label: "International Bulk\nExport Markets", href: "/group-companies/national-mines/industries/international-bulk-exports" },
  { icon: Landmark, label: "Government\nStrategic Projects", href: "/group-companies/national-mines/industries/government-strategic-projects" },
  { icon: HardHat, label: "Heavy Machinery\n& Metallurgy", href: "/group-companies/national-mines/industries/heavy-machinery-metallurgy" },
  { icon: TrendingUp, label: "Gemological &\nPrecious Metals", href: "/group-companies/national-mines/industries/gemological-precious-metals" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Geological Exploration", desc: "High-resolution satellite mapping, geophysical surveys, and diamond core drilling." },
  { num: "02", title: "Resource Modeling", desc: "3D geological stratigraphy modeling, grade estimation, and economic feasibility studies." },
  { num: "03", title: "Mine Design & Planning", desc: "Open pit bench optimization, haul road layouts, and geotechnical drainage engineering." },
  { num: "04", title: "Precision Extraction", desc: "Controlled blasting, electric excavator loading, and heavy truck dispatch telemetry." },
  { num: "05", title: "Mineral Processing", desc: "Crushing, milling, froth flotation separation, and metallurgical quality assays." },
  { num: "06", title: "Progressive Rehabilitation", desc: "Ongoing land reclamation, topsoil restoration, and native tree planting." },
];

const FAQS = [
  {
    q: "What minerals does National Mines Corporation extract and supply?",
    a: "We extract, refine, and supply Gold, Copper, Iron Ore, Coal, Limestone, Gypsum, Chromite, Marble, Granite, and Silica Sand across Pakistan and global export markets.",
  },
  {
    q: "How do you ensure mineral purity and grade accuracy?",
    a: "Every batch is assayed in certified geological laboratories with computerized spectrometry and core assay reports provided before commercial dispatch.",
  },
  {
    q: "Do you supply raw bulk minerals as well as refined concentrates?",
    a: "Yes. We offer run-of-mine raw ores, precision-crushed aggregates, and refined metallurgical concentrates (e.g. 28-32% Copper concentrate, 99.4% Gold bullion).",
  },
  {
    q: "What environmental and sustainability protocols do you enforce?",
    a: "We enforce zero-toxic liquid discharge, recycle over 92% of our mineral processing water, practice simultaneous bench revegetation, and maintain a 99% safety compliance rating.",
  },
];

export default function NationalMinesHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#16243E] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section with Custom Vector Open-Pit Illustration */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Sustainable Mineral Development</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
                Powering Industries With <span style={{ color: theme.gold }}>Premium Natural Resources</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                National Mines Corporation (Pvt) Ltd is an industry leader in geological exploration, heavy extraction, and high-purity mineral processing. Supplying Gold, Copper, Iron Ore, Coal, and industrial minerals with world-class engineering.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/national-mines/minerals"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Mineral Catalog</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/national-mines/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Request Sourcing Quote</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/mine_hero_openpit.svg"
                  alt="National Mines Modern Open Pit Excavation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16243E]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider" style={{ color: theme.gold }}>
                        50+ Concessions In Pakistan
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.navy }}>
                      Gold · Copper · Iron Ore · Coal · Industrial Minerals
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
                  className="nmc-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
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

      {/* About Company Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/mine_geology_core.svg"
                  alt="Geological Exploration and Diamond Core Assays"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16243E]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#C59B27] mb-1">
                      Advanced Metallurgy
                    </p>
                    <h4 className="text-base font-bold">Comprehensive Geochemical Assays &amp; 3D Stratigraphy</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Sustainable Mining Engineered For Economic Growth</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                National Mines Corporation (Pvt) Ltd brings together senior geologists, mining engineers, and metallurgical specialists. We manage large-scale resource extraction with ethical environmental stewardship, strict zero-harm safety standards, and transparent supply chains.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">ISO &amp; Govt Certified Concessions</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} style={{ color: theme.gold }} className="flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">92% Water Recycling Circuits</span>
                </div>
              </div>

              <Link
                href="/group-companies/national-mines/about"
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

      {/* Minerals Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Natural Commodities</SectionLabel>
              <SectionHeading>Our Key Mineral Products</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-mines/minerals"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.navy }}
            >
              <span>View All 10 Minerals</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MINERALS_LIST.slice(0, 4).map((m) => (
              <div
                key={m.slug}
                className="nmc-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <Link
                    href={`/group-companies/national-mines/minerals/${m.slug}`}
                    className="relative block w-full h-44 bg-slate-100 overflow-hidden group cursor-pointer"
                  >
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 border shadow-sm" style={{ color: theme.navy, borderColor: theme.border }}>
                        {m.tag}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Link href={`/group-companies/national-mines/minerals/${m.slug}`}>
                        <h3 className="text-lg font-black hover:text-[#C59B27] transition-colors cursor-pointer" style={{ color: theme.navy }}>
                          {m.name}
                        </h3>
                      </Link>
                      <span className="text-[10.5px] font-black uppercase text-[#C59B27] px-2 py-0.5 rounded bg-[#C59B27]/10">
                        {m.grade}
                      </span>
                    </div>
                    <p className="text-xs font-medium leading-relaxed text-slate-600 mb-4 line-clamp-2">
                      {m.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex gap-2">
                  <Link
                    href={`/group-companies/national-mines/minerals/${m.slug}`}
                    className="flex-1 py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navy }}
                  >
                    <span>Details</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/group-companies/national-mines/contact"
                    className="px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center text-white transition-opacity hover:opacity-95 cursor-pointer"
                    style={{ backgroundColor: theme.navy }}
                    title="Request Assay & Quote"
                  >
                    <span>Quote</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Supply Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Sector Coverage</SectionLabel>
            <SectionHeading center className="mb-4">Industries We Supply</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Delivering customized mineral commodity matrices designed specifically for diverse industrial processing requirements.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.label}
                  href={ind.href}
                  className="nmc-counter-box p-5 rounded-2xl border flex flex-col items-center justify-center text-center group bg-white shadow-xs cursor-pointer hover:border-[#C59B27]"
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
              href="/group-companies/national-mines/industries"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all hover:bg-slate-50"
              style={{ borderColor: theme.border, color: theme.navy }}
            >
              <span>Explore All 10 Industry Sectors</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Mining Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Capabilities</SectionHeading>
            </div>

            <Link
              href="/group-companies/national-mines/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.navy }}
            >
              <span>View All 6 Capabilities</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="nmc-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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

      {/* Process Pathway Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Mining Development Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial geophysical surveys to ethical processing and progressive environmental restoration.
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
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.navy }}>
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
                  style={{ color: theme.navy }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#C59B27]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.gold }}>
                READY TO SECURE MINERAL COMMODITY SUPPLIES?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navy }}>
                Request A Confidential Resource Quotation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak directly with our commercial trading desk to review mineral assay certificates, sample testing, and delivery schedules.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/national-mines/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Mineral Quotation</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}