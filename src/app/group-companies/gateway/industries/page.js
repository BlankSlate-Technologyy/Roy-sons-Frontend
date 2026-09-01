"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FlaskConical,
  Microscope,
  Activity,
  Leaf,
  Globe,
  BookOpen,
  Building2,
  ShieldCheck,
  Award,
  Package,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  HelpCircle,
  ChevronDown,
  Layers,
  Search,
} from "lucide-react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { COLORS } from "../constants";
import { Container } from "../sections/Shared";
import { GATEWAY_INDUSTRIES } from "../industries-data";

export default function GatewayIndustriesOverviewPage() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  }, []);

  const filteredIndustries = GATEWAY_INDUSTRIES.filter((ind) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      ind.title.toLowerCase().includes(q) ||
      ind.eyebrow.toLowerCase().includes(q) ||
      ind.overview.toLowerCase().includes(q);
    return matchesSearch;
  });

  const INDUSTRY_FAQS = [
    {
      q: "Which pharmaceutical sectors does Gateway Consultants support?",
      a: "We provide specialized regulatory consultancy across 7 core sectors: Finished Formulation Manufacturers (oral & sterile), Biotech & Biosimilars, Medical Device Importers/Producers, Health & OTC Nutraceuticals, Commercial Import/Export indenters, Diagnostic IVD Laboratories, and Nationwide Healthcare Distributors.",
    },
    {
      q: "How do regulatory requirements differ between finished pharmaceuticals and medical devices?",
      a: "Pharmaceutical formulations are governed under the Drug Act (Form 1/2 Licensing and Form 5/7 Registration with full CTD dossiers), whereas Medical Devices follow the Medical Device Rules (MDEL Establishment Licenses and Conformity Assessments based on risk Classes A through D).",
    },
    {
      q: "Can Gateway assist with international pharmaceutical export clearances?",
      a: "Yes. We process Certificates of Pharmaceutical Product (CoPP) under the WHO Certification Scheme, Free Sale Certificates (FSC), and help harmonize CTD/eCTD dossiers for destination health authorities across Asia, Africa, Central Asia, and the Middle East.",
    },
    {
      q: "What support is provided for Nutraceutical and Dietary Supplement companies?",
      a: "We assist with Form 6 Establishment Enlistment for facilities, Form 7 Product Enlistment dossiers, formula vetting against positive nutrient lists, statutory RDA compliance, and label claim substantiation under the Health & OTC Rules.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#173F8A] selection:text-white">
      {/* ─── Global Gateway Header ────────────────────────────────────────── */}
      <Navbar />

      {/* ─── Breadcrumb Navigation Bar ────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] border-b" style={{ borderColor: COLORS.border }}>
        <Container className="py-3">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/group-companies/gateway" className="hover:text-[#173F8A] transition-colors">
              Gateway
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <span className="text-[#173F8A] font-bold">Industries We Serve</span>
          </nav>
        </Container>
      </div>

      {/* ─── Hero Section with High-Tech AI Imagery & Industry Showcase ────── */}
      <section className="relative bg-gradient-to-b from-[#F8FAFC] to-white py-14 lg:py-24 border-b overflow-hidden" style={{ borderColor: COLORS.border }}>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-5" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 border border-blue-200 text-[#173F8A]">
                <Sparkles size={13} className="text-[#2E8B57]" />
                <span>CROSS-SECTOR REGULATORY EXCELLENCE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#173F8A] tracking-tight leading-[1.15]">
                Industries We Serve Across <br />
                <span className="text-[#2E8B57]">Global Healthcare &amp; Pharma</span>
              </h1>

              <p className="text-[15px] sm:text-[16.5px] text-slate-600 leading-relaxed font-normal max-w-2xl">
                Gateway Pharmaceuticals Consultants partners with pharmaceutical manufacturers, biotech innovators, medical device producers, and international distributors. We tailor statutory licensing, marketing authorization, and cGMP compliance frameworks to the exact regulatory dynamics of each industry vertical.
              </p>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-white border shadow-xs" style={{ borderColor: COLORS.border }}>
                  <p className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">Sectors Covered</p>
                  <p className="text-2xl font-black text-[#173F8A] mt-0.5">7 Verticals</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border shadow-xs" style={{ borderColor: COLORS.border }}>
                  <p className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">Regulatory Rate</p>
                  <p className="text-2xl font-black text-[#2E8B57] mt-0.5">99.4%</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border shadow-xs" style={{ borderColor: COLORS.border }}>
                  <p className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">Registrations</p>
                  <p className="text-2xl font-black text-[#173F8A] mt-0.5">500+ Drugs</p>
                </div>
                <div className="p-3.5 rounded-xl bg-white border shadow-xs" style={{ borderColor: COLORS.border }}>
                  <p className="text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">Compliance</p>
                  <p className="text-2xl font-black text-[#2E8B57] mt-0.5">WHO / cGMP</p>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5" data-aos="fade-left">
              <div className="relative group rounded-3xl overflow-hidden border shadow-xl bg-white" style={{ borderColor: COLORS.border }}>
                <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden">
                  <Image
                    src="/gatwayareaofexperince.png"
                    alt="Gateway Pharmaceuticals Industries We Serve"
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/85 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-100 text-[#173F8A]">
                          <Award size={20} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">National &amp; Global Scope</p>
                          <p className="text-xs font-black text-[#173F8A]">Commercial Pharma, Biotech &amp; Medical Devices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Search & Interactive Sector Grid ───────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12" data-aos="fade-up">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E8B57] block mb-1">
                EXPLORE BY SECTOR
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#173F8A]">
                7 Specialized Healthcare &amp; Life-Science Portfolios
              </h2>
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search sectors, dossiers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#173F8A] bg-slate-50 shadow-xs"
                style={{ borderColor: COLORS.border }}
              />
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {/* Grid of 7 Industry Column Cards with Hover Zoom Out Effect */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.slug}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="rounded-2xl border bg-white shadow-xs hover:shadow-xl hover:border-[#173F8A] transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
                  style={{ borderColor: COLORS.border }}
                >
                  {/* Top Image Showcase with Hover Zoom Out Effect */}
                  <div className="relative w-full h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={ind.heroImage}
                      alt={ind.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 ease-out scale-115 group-hover:scale-100"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/95 text-[#173F8A] shadow-xs backdrop-blur-xs">
                        {ind.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <Icon size={18} />
                        </div>
                        <span className="text-xs font-bold text-slate-200">{ind.eyebrow}</span>
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-[#173F8A] transition-colors leading-snug">
                        {ind.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal mt-2">
                        {ind.overview}
                      </p>
                    </div>

                    {/* Key Applications Pills */}
                    <div className="pt-2">
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Key Regulatory Scope</p>
                      <div className="space-y-1.5">
                        {ind.applications.slice(0, 3).map((app, appIdx) => (
                          <div key={appIdx} className="flex items-start gap-2 text-[11.5px] text-slate-700 font-medium">
                            <CheckCircle2 size={13} className="text-[#2E8B57] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Direct Detail Link Button */}
                    <div className="pt-4 border-t border-slate-100">
                      <Link
                        href={`/group-companies/gateway/industries/${ind.slug}`}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider text-[#173F8A] bg-blue-50/80 hover:bg-[#173F8A] hover:text-white transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-xs"
                      >
                        <span>View {ind.title} Details</span>
                        <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── Standardized Regulatory Frameworks Comparison ──────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-y" style={{ borderColor: COLORS.border }}>
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E8B57] block mb-2">
              STATUTORY COMPLIANCE ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#173F8A]">
              Regulatory Authorities &amp; Standards We Navigate
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border shadow-xs" style={{ borderColor: COLORS.border }} data-aos="fade-up">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#173F8A] mb-4">
                <Building2 size={20} />
              </div>
              <h4 className="text-[15px] font-black text-slate-900 mb-1">DRAP &amp; MoH Pakistan</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Central Licensing Board, Registration Board, Pricing Committee, and Medical Device Registration Board filings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border shadow-xs" style={{ borderColor: COLORS.border }} data-aos="fade-up" data-aos-delay="100">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-[#2E8B57] mb-4">
                <ShieldCheck size={20} />
              </div>
              <h4 className="text-[15px] font-black text-slate-900 mb-1">WHO-cGMP &amp; PIC/S</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                World Health Organization cGMP technical report series, sterile manufacturing, and international PIC/S gap audits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border shadow-xs" style={{ borderColor: COLORS.border }} data-aos="fade-up" data-aos-delay="200">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#173F8A] mb-4">
                <Layers size={20} />
              </div>
              <h4 className="text-[15px] font-black text-slate-900 mb-1">ICH CTD &amp; eCTD Formats</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                International Council for Harmonisation Modules 1 through 5 technical writing, QOS synthesis, and XML publishing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border shadow-xs" style={{ borderColor: COLORS.border }} data-aos="fade-up" data-aos-delay="300">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-[#2E8B57] mb-4">
                <Award size={20} />
              </div>
              <h4 className="text-[15px] font-black text-slate-900 mb-1">ISO 13485 &amp; ISO 15189</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Medical Device Quality Management Systems and Medical Diagnostic Laboratories accreditation standards.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── FAQs Accordion ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center" data-aos="fade-up">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E8B57] block mb-2">
                INDUSTRY FAQS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#173F8A]">
                Frequently Asked Sector Questions
              </h2>
            </div>

            <div className="space-y-3" data-aos="fade-up">
              {INDUSTRY_FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border bg-white overflow-hidden transition-all shadow-xs"
                    style={{ borderColor: isOpen ? COLORS.primary : COLORS.border }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-black text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180 text-[#173F8A]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t pt-3 bg-blue-50/20" style={{ borderColor: COLORS.border }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Consultation CTA Banner ────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-t" style={{ borderColor: COLORS.border }}>
        <Container>
          <div className="rounded-3xl border p-8 sm:p-12 bg-gradient-to-r from-[#173F8A] to-[#12316B] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8" data-aos="zoom-in">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E8B57] bg-white/10 px-3 py-1 rounded-full">
                INDUSTRY ADVISORY DESK
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Partner with Gateway for Your Sector&apos;s Regulatory Roadmap
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
                Whether setting up a new sterile manufacturing plant, registering innovative medical devices, or expanding into export markets, our team delivers decisive statutory guidance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/group-companies/gateway#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-[#173F8A] bg-white hover:bg-slate-100 text-center transition-all shadow-md cursor-pointer"
              >
                Book Industry Consultation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Global Gateway Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
