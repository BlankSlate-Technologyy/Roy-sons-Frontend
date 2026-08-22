"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home as HomeIcon,
  Building2,
  TrendingUp,
  Compass,
  Hammer,
  ClipboardCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
  Users,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  theme,
  SwissHomesNavbar,
  SwissHomesFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/SwissHomesShared";

const REAL_ESTATE_SERVICES = [
  {
    id: "residential",
    title: "Residential Communities & Luxury Villas",
    subtitle: "Master-Planned Gated Societies & High-End Living",
    desc: "Designing and developing premier residential communities featuring contemporary luxury villas, designer townhouses, and family-oriented neighborhoods with landscaped parks and modern amenities.",
    image: "/swiss_hero_architecture.svg",
    tag: "Residential Living",
    icon: HomeIcon,
    deliverables: [
      "Custom architectural luxury villas with floor-to-ceiling glass panoramic facades",
      "Gated community perimeters with 24/7 smart biometric access control",
      "Underground utilities, stormwater drainage, and uninterrupted power grids",
      "Integrated community recreation centers, swimming pools, and mosques",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Towers & Business Parks",
    subtitle: "High-Yield Corporate Hubs & Retail Malls",
    desc: "Developing state-of-the-art corporate office buildings, shopping malls, and mixed-use commercial destinations located in prime urban commercial avenues.",
    image: "/swiss_master_planning.svg",
    tag: "Commercial Developments",
    icon: Building2,
    deliverables: [
      "Grade-A corporate office floorplates with flexible co-working suites",
      "High-street retail centers, flagship store layouts, and food courts",
      "High-speed intelligent elevator banks and multi-tier basement parking",
      "Advanced building management systems (BMS) with energy metering",
    ],
  },
  {
    id: "master-planning",
    title: "Smart Housing & Master Planning",
    subtitle: "BIM 3D Modeling & Sustainable Urban Infrastructure",
    desc: "End-to-end urban master planning and civil design utilizing Building Information Modeling (BIM) to optimize land utilization, traffic flow, and environmental sustainability.",
    image: "/swiss_master_planning.svg",
    tag: "Urban Design",
    icon: Compass,
    deliverables: [
      "3D computerized Building Information Modeling (BIM) and topographical zoning",
      "Boulevard road networks engineered for heavy commuter transit",
      "Automated solar streetlighting and centralized municipal fiber-optic ducting",
      "Eco-friendly rainwater harvesting lakes and green microclimate zones",
    ],
  },
  {
    id: "investment",
    title: "Property Investment & Asset Management",
    subtitle: "Secure Real Estate Portfolios With High ROI",
    desc: "Providing institutional and private investors with strategic real estate investment advisory, transparent installment payment structures, and high-capital-appreciation land assets.",
    image: "/swiss_hero_architecture.svg",
    tag: "Investment Solutions",
    icon: TrendingUp,
    deliverables: [
      "Strategic plot and commercial asset acquisition in high-growth corridors",
      "Flexible 2 to 4-year interest-free installment payment schedules",
      "Rental yield optimization and commercial tenant leasing management",
      "Quarterly market valuation reports and exit strategy advisory",
    ],
  },
  {
    id: "construction",
    title: "Turnkey Construction Management",
    subtitle: "Precision Civil Engineering & MEP Execution",
    desc: "Managing full-cycle construction execution from foundation excavation to structural gray framing, MEP services installation, and ultra-premium architectural finishing.",
    image: "/swiss_hero_architecture.svg",
    tag: "Engineering & Build",
    icon: Hammer,
    deliverables: [
      "Earthquake-resistant reinforced concrete framing compliant with building codes",
      "Precision MEP (Mechanical, Electrical, Plumbing) and HVAC engineering",
      "European-imported porcelain flooring, double-glazed soundproof glass, and cabinetry",
      "Rigorous third-party quality control inspections at every construction milestone",
    ],
  },
  {
    id: "facility",
    title: "Estate & Facility Management",
    subtitle: "24/7 Security, Maintenance & Community Services",
    desc: "Ensuring communities maintain pristine aesthetic value, operational efficiency, and security over decades through dedicated on-site facility management teams.",
    image: "/swiss_master_planning.svg",
    tag: "Facility Services",
    icon: ClipboardCheck,
    deliverables: [
      "Round-the-clock armed security surveillance, patrol units, and CCTV monitoring",
      "Daily waste management, street sweeping, and horticultural landscape care",
      "On-demand plumbing, electrical, and HVAC home maintenance dispatch",
      "Community clubhouse, sports courts, and gym management operations",
    ],
  },
];

const SERVICE_STATS = [
  { value: "30+", label: "Years Experience", icon: Award },
  { value: "200+", label: "Projects Delivered", icon: Building2 },
  { value: "25K+", label: "Units Completed", icon: HomeIcon },
  { value: "98%", label: "Satisfaction Rate", icon: ShieldCheck },
];

export default function SwissHomesServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = REAL_ESTATE_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#2B2B2B] font-sans antialiased overflow-x-hidden">
      <SwissHomesNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Real Estate &amp; Construction Solutions</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
                Complete Solutions For <span style={{ color: theme.red }}>Modern Living &amp; Investment</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From master planning smart residential gated communities and luxury villas to commercial office towers and turnkey construction management, Swiss Homes delivers excellence at every stage.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.red }}
                >
                  <span>Explore All 6 Services</span>
                  <ArrowRight size={16} />
                </a>

                <Link
                  href="/group-companies/swiss-homes/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.charcoal }}
                >
                  <span>Request Project Proposal</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/swiss_hero_architecture.svg"
                  alt="Swiss Homes Architecture & Construction"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.red }}>
                      Turnkey Development
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.charcoal }}>
                      Villas · Commercial Towers · Master Planning
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
                  className="swiss-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.red}10` }}>
                    <Icon size={22} style={{ color: theme.red }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.charcoal }}>
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
            <SectionLabel center>Our Core Capabilities</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Real Estate Offerings</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered with Swiss precision, modern architecture, and customer-first execution.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search services (e.g. Villas, Commercial, Investment)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B01B2E] transition-all bg-white shadow-xs"
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
                  className="swiss-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm" style={{ color: theme.charcoal, borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.red}10` }}>
                          <Icon size={20} style={{ color: theme.red }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.charcoal }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: theme.red }}>
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(232, 232, 232, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.charcoal }}>
                          Key Project Features:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#B01B2E]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/swiss-homes/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.charcoal }}
                    >
                      <span>Inquire About This Service</span>
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#B01B2E]">
                COMMERCIAL &amp; RESIDENTIAL PLOTS AVAILABLE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.charcoal }}>
                Looking To Invest In High-Yield Properties?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our senior property consultants to receive site master plans, price lists, and flexible payment schedules.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-homes/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.red }}
              >
                <span>Request Pricing &amp; Plans</span>
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
