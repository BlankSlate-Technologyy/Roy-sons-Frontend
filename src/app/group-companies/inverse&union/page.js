"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Factory,
  FileText,
  Globe,
  HardHat,
  HeartHandshake,
  Landmark,
  Layers,
  MapPin,
  PackageCheck,
  Phone,
  Pipette,
  Search,
  Send,
  ShieldCheck,
  Ship,
  Sparkles,
  Sprout,
  Truck,
  Users2,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  InverseUnionNavbar,
  InverseUnionFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/InverseUnionShared";

const STATS = [
  { icon: Globe, value: "40+", label: "Countries Sourced\n& Connected" },
  { icon: PackageCheck, value: "5000+", label: "Successful Trade\nDeals Executed" },
  { icon: Building2, value: "800+", label: "Verified Corporate\nPartners" },
  { icon: Award, value: "15+", label: "Years of International\nTrade Experience" },
  { icon: ShieldCheck, value: "99%", label: "Customs Compliance\n& Clearance Rate" },
];

const SERVICES = [
  {
    icon: Globe,
    title: "Global Sourcing & Direct Procurement",
    desc: "Identifying and engaging verified international manufacturers and Tier-1 suppliers to source quality goods at optimal factory-gate pricing.",
    href: "/group-companies/inverse&union/services#global-sourcing",
    img: "/inverseunion_hero_trade.svg",
  },
  {
    icon: FileText,
    title: "Import & Export Trade Management",
    desc: "Comprehensive cross-border trade administration covering documentary Letters of Credit (LC), certificates of origin, and trade agreements.",
    href: "/group-companies/inverse&union/services#import-export",
    img: "/inverseunion_hero_trade.svg",
  },
  {
    icon: Ship,
    title: "Multi-Modal Freight Logistics",
    desc: "Coordinating ocean container vessels (FCL/LCL), air cargo charters, and bonded road transport networks with satellite GPS tracking.",
    href: "/group-companies/inverse&union/services#freight-logistics",
    img: "/inverseunion_hero_trade.svg",
  },
  {
    icon: ShieldCheck,
    title: "Trade Compliance & Customs Clearance",
    desc: "Rapid customs clearance at all major Pakistani ports utilizing automated WebOC electronic filing and precision HS tariff classification.",
    href: "/group-companies/inverse&union/services#trade-compliance",
    img: "/inverseunion_hero_trade.svg",
  },
  {
    icon: Search,
    title: "Bulk Commodity Sourcing",
    desc: "High-volume trading of raw industrial materials, steel rebar, fertilizers, milling wheat, edible oils, and petrochemical products.",
    href: "/group-companies/inverse&union/services#commodity-sourcing",
    img: "/inverseunion_hero_trade.svg",
  },
  {
    icon: PackageCheck,
    title: "Supply Chain Risk Management & Finance",
    desc: "Proactive geopolitical risk assessment, all-risk marine cargo insurance, foreign exchange hedging, and structured trade credit terms.",
    href: "/group-companies/inverse&union/services#risk-management",
    img: "/inverseunion_hero_trade.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "Heavy Construction Equipment Suite",
    tag: "Infrastructure",
    desc: "Turnkey procurement of hydraulic excavators, batching plants, and ASTM A615 rebar for mega-highways.",
    img: "/inverseunion_hero_trade.svg",
  },
  {
    name: "Industrial Production Line Sourcing",
    tag: "Manufacturing",
    desc: "Complete CE-marked European and Asian manufacturing plant lines with pre-commissioning video trials.",
    img: "/inverseunion_hero_trade.svg",
  },
  {
    name: "Bulk Grain Strategic Reserve Supply",
    tag: "Agri-Commodities",
    desc: "Chartering Panamax bulk vessels for 250,000 MT milling wheat with SGS certified assay inspection.",
    img: "/inverseunion_hero_trade.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Requirement & Specification Analysis", desc: "Understanding product technical parameters, target volumes, required Incoterms 2020, and target delivery ports." },
  { num: "02", title: "Global Supplier Vetting & Factory Audit", desc: "Shortlisting ISO-certified manufacturers, conducting factory verification audits, and securing factory-gate pricing." },
  { num: "03", title: "Contracting & Trade Finance Structuring", desc: "Structuring documentary Letters of Credit (LC), payment terms, escrow, and bilateral supply contracts." },
  { num: "04", title: "Pre-Shipment Quality Inspection (SGS/BV)", desc: "Third-party laboratory testing, dimensional verification, and quality certification prior to container loading." },
  { num: "05", title: "Multi-Modal Freight & Ocean Booking", desc: "Chartering ocean container slots, marine insurance coverage, and satellite GPS transit tracking." },
  { num: "06", title: "Customs WebOC Clearance & Delivery", desc: "Electronic WebOC duty optimization, customs green-channel clearance, and bonded road transport to warehouse." },
];

const FAQS = [
  {
    q: "Which countries does Inverse & Union Trading source from?",
    a: "We maintain direct sourcing operations and verified supplier networks across China, Japan, South Korea, Germany, Italy, the United Kingdom, the United States, Turkey, UAE, and major Asian/European industrial markets spanning 40+ countries.",
  },
  {
    q: "How does Inverse & Union Trading handle customs clearance in Pakistan?",
    a: "We operate dedicated customs brokerage bureaus at Karachi Port (KICT/PICT/SAPT), Port Qasim, Gwadar, and major dry ports, utilizing electronic WebOC and Pakistan Single Window (PSW) filing to achieve green-channel expedited clearance.",
  },
  {
    q: "Can Inverse & Union Trading assist with Letter of Credit (LC) and trade financing?",
    a: "Yes. We work closely with major commercial banking partners to structure secure documentary Letters of Credit (LC), deferred payment terms, CAD terms, and foreign exchange (FX) risk hedging.",
  },
  {
    q: "What Incoterms 2020 rules do you support?",
    a: "We support the entire spectrum of Incoterms 2020 rules including CIF (Cost, Insurance & Freight), FOB (Free On Board), DDP (Delivered Duty Paid with doorstep delivery), CFR, and Ex-Works.",
  },
];

export default function InverseUnionHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#4A5568] font-sans antialiased overflow-x-hidden">
      <InverseUnionNavbar />

      {/* Hero Section with Global Logistics Console */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Premier Global Sourcing &amp; International Trade Company</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Connecting Global Markets. <span style={{ color: theme.blue }}>Facilitating International Trade.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Inverse &amp; Union Trading is a premier global sourcing, international procurement, and supply chain management company. We connect suppliers, manufacturers, and buyers across international markets with reliable, compliant, and cost-efficient supply chain solutions across 40+ countries.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/inverse&union/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.blue }}
                >
                  <span>Explore Trade Sectors</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/inverse&union/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Get a Trade Quote</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-sky-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/inverseunion_hero_trade.svg"
                  alt="Inverse & Union Global Supply Chain Command"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#0080FF]">
                        5,000+ Trade Contracts Executed
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      40+ Countries · Ocean &amp; Air Freight · Customs WebOC
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
                  className="iu-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
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
                  src="/inverseunion_hero_trade.svg"
                  alt="Global Freight Operations"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#00D2C8] mb-1">
                      International Trade Logistics
                    </p>
                    <h4 className="text-base font-bold">Bridging Borders Through Reliable Trade</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Inverse &amp; Union Trading</SectionLabel>
              <SectionHeading className="mb-6">Global Procurement &amp; Supply Chain Resilience</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Inverse &amp; Union Trading specializes in international procurement, commodity sourcing, import/export management, and supply chain facilitation. Our network spans global markets connecting verified manufacturers, suppliers, and buyers to ensure seamless cross-border transactions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-sky-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#0080FF] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Incoterms 2020 Verified</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-sky-50/50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#0080FF] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">5,000+ Trade Contracts</span>
                </div>
              </div>

              <Link
                href="/group-companies/inverse&union/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#0080FF]"
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
              <SectionHeading>Our Core Trade Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/inverse&union/services"
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
                  className="iu-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
              <SectionHeading>Featured Procurement Solutions</SectionHeading>
            </div>

            <Link
              href="/group-companies/inverse&union/solutions"
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
                className="iu-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
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
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#0080FF]/15 text-[#0080FF] inline-block mb-3">
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
                    href="/group-companies/inverse&union/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-sky-50/50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request Term Sheet</span>
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
            <SectionLabel center>Disciplined Trade Execution</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage International Trade Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From technical specification analysis and factory verification to Letter of Credit structuring, SGS inspection, and WebOC customs clearance.
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
                      openFaq === idx ? "rotate-180 text-[#0080FF]" : "text-slate-400"
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0080FF]">
                EXPAND YOUR GLOBAL BUSINESS WITH CONFIDENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An International Trade Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior international procurement officers and customs clearance directors to review supplier verification, duty optimization, and shipping routes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/inverse&union/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Custom Quote</span>
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

      <InverseUnionFooter />
    </main>
  );
}