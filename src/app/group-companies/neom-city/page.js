"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Cpu,
  Factory,
  HardHat,
  Leaf,
  MapPin,
  Phone,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Trees,
  Users2,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  NeomCityNavbar,
  NeomCityFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/NeomCityShared";

const STATS = [
  { icon: Award, value: "25+", label: "Years of Urban\nDevelopment" },
  { icon: Building2, value: "150+", label: "Smart Infrastructure\nProjects" },
  { icon: Factory, value: "50+", label: "Commercial Financial\nDistricts" },
  { icon: Users2, value: "300+", label: "Civil Engineers &\nUrban Planners" },
  { icon: Compass, value: "20+", label: "Metropolitan Cities\nDeveloped" },
];

const SERVICES = [
  {
    icon: Compass,
    title: "Smart City Master Planning",
    desc: "Comprehensive master planning and spatial zoning for greenfield and brownfield smart cities using GIS analytics and 3D digital twins.",
    href: "/group-companies/neom-city/services#smart-city-planning",
    img: "/neomcity_hero_urban.svg",
  },
  {
    icon: HardHat,
    title: "Urban Infrastructure & Civil Works",
    desc: "Turnkey civil engineering and construction of heavy urban infrastructure, deep utility corridors, and flood-resilient drainage.",
    href: "/group-companies/neom-city/services#urban-infrastructure",
    img: "/neomcity_hero_urban.svg",
  },
  {
    icon: Building2,
    title: "Commercial & Financial Districts",
    desc: "Developing high-density commercial centers, banking headquarters, corporate tech hubs, and centralized district cooling systems.",
    href: "/group-companies/neom-city/services#commercial-development",
    img: "/neomcity_hero_urban.svg",
  },
  {
    icon: Factory,
    title: "Special Economic Zones (SEZs)",
    desc: "Planning and building Special Economic Zones, automated logistics dry ports, and heavy manufacturing parks tailored for global trade.",
    href: "/group-companies/neom-city/services#industrial-zones",
    img: "/neomcity_hero_urban.svg",
  },
  {
    icon: Zap,
    title: "Smart Transportation & Transit",
    desc: "Engineering next-generation urban mobility networks, automated mass transit BRT corridors, and electric vehicle charging hubs.",
    href: "/group-companies/neom-city/services#smart-transportation",
    img: "/neomcity_hero_urban.svg",
  },
  {
    icon: Cpu,
    title: "Digital City Solutions & Microgrids",
    desc: "Deploying high-speed city fiber rings, municipal IoT sensor arrays, integrated command centers, and net-zero solar microgrids.",
    href: "/group-companies/neom-city/services#digital-city-solutions",
    img: "/neomcity_hero_urban.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "Neom Smart Megacity Concessions",
    tag: "Megacity Concession",
    desc: "5,000+ Hectares master planning, common subterranean service ducts, and AI traffic grid governance.",
    img: "/neomcity_hero_urban.svg",
  },
  {
    name: "Neom Financial Business Bay",
    tag: "Financial District",
    desc: "High-density Grade-A skyscraper towers, 25,000 TR district cooling, and smart automated parking silos.",
    img: "/neomcity_hero_urban.svg",
  },
  {
    name: "Neom Autonomous Transit BRT",
    tag: "Transit & Mobility",
    desc: "Grade-separated 32 km dedicated mass transit busways with solar canopies and AI traffic preemption.",
    img: "/neomcity_hero_urban.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Site Surveys & Demographic Feasibility", desc: "Drone photogrammetry, geotechnical drilling, hydrological modeling, and macro-economic population growth projections." },
  { num: "02", title: "Spatial GIS Master Planning & Zoning", desc: "3D parametric land-use allocation, environmental impact assessment (EIA), and municipal regulatory approvals." },
  { num: "03", title: "Underground Civil & Utility Corridors", desc: "Constructing deep multi-utility service tunnels housing fiber, high-voltage power, gas, and potable water." },
  { num: "04", title: "Smart Mobility & Transit Highways", desc: "Paving heavy-duty arterial expressways, grade-separated bridges, BRT dedicated lanes, and EV charging plazas." },
  { num: "05", title: "Digital Twin & IoT Mesh Deployment", desc: "Installing 500,000+ municipal sensors, 5G mesh nodes, smart meters, and connecting to the central Command Center (ICCC)." },
  { num: "06", title: "Concession Governance & Asset Stewardship", desc: "Providing long-term municipal operations, predictive civil maintenance, and continuous urban optimization." },
];

const FAQS = [
  {
    q: "What urban development services does Neom City Corporation provide?",
    a: "Neom City Corporation delivers end-to-end smart urban development including master planning, GIS spatial zoning, heavy civil infrastructure, commercial business districts, Special Economic Zones (SEZs), autonomous transit corridors, and municipal digital twin IoT platforms.",
  },
  {
    q: "How does Neom City Corporation integrate sustainability into master plans?",
    a: "All our master developments follow LEED Platinum and LEED for Cities standards, incorporating net-zero district cooling, sponge city stormwater retention lakes, 100% wastewater recycling, and localized clean solar microgrids.",
  },
  {
    q: "What is an Urban Digital Twin and Municipal Command Center?",
    a: "An Urban Digital Twin is a real-time 3D virtual replica of the city synchronized with hundreds of thousands of IoT sensors. It monitors traffic flow, water pressure, energy consumption, and public safety from a centralized Tier-IV Integrated Command and Control Center (ICCC).",
  },
  {
    q: "Can Neom City Corporation structure Public-Private Partnerships (PPP)?",
    a: "Yes. We specialize in structuring BOT (Build-Operate-Transfer), DBFOM (Design-Build-Finance-Operate-Maintain), and concession agreements with government development authorities and multilateral financial institutions under international FIDIC standards.",
  },
];

export default function NeomCityHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomCityNavbar />

      {/* Hero Section with Smart City Urban Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Leading Smart City &amp; Urban Infrastructure Corporation</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Neom City Corporation. <span style={{ color: theme.teal }}>Building Intelligent Cities.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Building intelligent cities and shaping the future of urban living. Neom City Corporation specializes in smart cities, commercial districts, industrial zones, sustainable infrastructure, mixed-use developments, and digital city solutions engineered for generational thriving.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/neom-city/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Projects</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/neom-city/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Contact Our Experts</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/neomcity_hero_urban.svg"
                  alt="Neom City Corporation Digital Twin and Smart Urban OS"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05172A]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#008080]">
                        150+ Smart Developments
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      GIS Master Planning · SEZs · Clean Microgrids
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
                  className="neom-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
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
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/neomcity_hero_urban.svg"
                  alt="Smart Infrastructure Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05172A]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#38BDF8] mb-1">
                      Urban Master Planning
                    </p>
                    <h4 className="text-base font-bold">25+ Years of Future-Ready City Engineering</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Neom City Corporation</SectionLabel>
              <SectionHeading className="mb-6">Engineering Tomorrow&apos;s Smart Cities</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Neom City Corporation is committed to transforming urban landscapes through innovative planning, sustainable infrastructure, and intelligent city technologies. We deliver integrated urban developments that improve quality of life, drive economic growth, and support environmental sustainability across 20+ metropolises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#008080] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">LEED Platinum Certified</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#008080] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">150+ Smart Developments</span>
                </div>
              </div>

              <Link
                href="/group-companies/neom-city/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#0A2540]"
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
              href="/group-companies/neom-city/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.navyDark }}
            >
              <span>View All 6 Divisions</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="neom-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
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
              <SectionLabel>Urban Solutions</SectionLabel>
              <SectionHeading>Featured Sector Packages</SectionHeading>
            </div>

            <Link
              href="/group-companies/neom-city/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.navy }}
            >
              <span>View All Solutions</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS_PREVIEW.map((s) => (
              <div
                key={s.name}
                className="neom-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#008080]/15 text-[#008080] inline-block mb-3">
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
                    href="/group-companies/neom-city/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request TOR</span>
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
            <SectionHeading center className="mb-4">6-Stage Smart Urban Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From spatial GIS modeling and underground civil utility tunneling to autonomous transit highways, IoT mesh deployment, and long-term municipal governance.
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
                      openFaq === idx ? "rotate-180 text-[#008080]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#008080]">
                COMMENCE YOUR NEXT URBAN CONCESSION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An Urban Planning Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our principal urban architects, GIS spatial analysts, and PPP infrastructure transaction advisors.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/neom-city/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Planning Scoping</span>
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

      <NeomCityFooter />
    </main>
  );
}