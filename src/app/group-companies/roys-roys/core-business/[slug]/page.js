"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail,
  HelpCircle,
  ChevronDown,
  Building2,
  ShieldCheck,
  Award,
  Sparkles,
  Layers,
  Wrench,
  Clock,
  Globe,
  FileCheck,
  Check,
  Calendar,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../../_shared";
import { CORE_BUSINESS_AREAS, getCoreBusinessBySlug } from "../../core-business-data";

export default function CoreBusinessDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const area = getCoreBusinessBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!area) {
    notFound();
  }

  const MainIcon = area.icon;
  const otherAreas = CORE_BUSINESS_AREAS.filter((a) => a.slug !== area.slug);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white overflow-hidden">
      {/* ─── 1. NAVBAR ──────────────────────────────────────────────────────── */}
      <RoysNavbar active="Services" />

      {/* ─── 2. BREADCRUMB ─────────────────────────────────────────────────── */}
      <div className="bg-[#f8fafc] border-b border-slate-200 py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link
            href="/group-companies/roys-roys"
            className="hover:text-[#2563eb] transition-colors font-medium"
          >
            Home
          </Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <Link
            href="/group-companies/roys-roys/core-business"
            className="hover:text-[#2563eb] transition-colors font-medium"
          >
            Core Business Areas
          </Link>
          <ChevronRight size={13} className="text-slate-400 shrink-0" />
          <span className="font-bold text-[#0f2b48] truncate">{area.title}</span>
        </div>
      </div>

      {/* ─── 3. HERO SECTION (RICH NAVY WITH GLOW & ACCENTS) ──────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2563eb]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-[#009088]/15 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Gold Pill Badge */}
              <div
                data-aos="fade-down"
                data-aos-duration="600"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-5 shadow-xs"
              >
                <MainIcon size={15} />
                <span>
                  {area.badge} • Core Business #{area.number}
                </span>
              </div>

              {/* Eyebrow */}
              <p
                data-aos="fade-up"
                data-aos-delay="50"
                className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-[#38bdf8] mb-2"
              >
                {area.eyebrow}
              </p>

              {/* H1 Heading */}
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="700"
                className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] tracking-tight text-white mb-5"
              >
                {area.title}
              </h1>

              {/* Tagline */}
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
                className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal"
              >
                {area.tagline}
              </p>

              {/* CTA Action Buttons */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-wrap items-center gap-3 mb-10"
              >
                <Link
                  href="/group-companies/roys-roys/contact"
                  className="px-6 py-3 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-blue-500/25 flex items-center gap-2"
                >
                  <span>Request Technical Proposal</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="#capabilities"
                  className="px-5 py-3 rounded-lg border border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-2"
                >
                  <span>Explore Capabilities</span>
                  <ChevronDown size={15} />
                </a>
              </div>

              {/* 4 Impact Stat Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/15">
                {area.stats.map((st, idx) => {
                  const StatIcon = st.icon;
                  return (
                    <div
                      key={st.label}
                      data-aos="fade-up"
                      data-aos-delay={350 + idx * 70}
                      className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs flex flex-col justify-between"
                    >
                      <div className="w-8 h-8 rounded bg-blue-500/20 text-[#38bdf8] flex items-center justify-center mb-2">
                        <StatIcon size={16} />
                      </div>
                      <p className="text-xl sm:text-2xl font-black text-white leading-none mb-1">
                        {st.value}
                      </p>
                      <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider leading-tight">
                        {st.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Hero Showcase Image Card */}
            <div
              className="lg:col-span-5"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="relative h-[320px] sm:h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-gradient-to-b from-blue-950 to-slate-950 group">
                <Image
                  src={area.heroImage}
                  alt={area.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0f2b48]/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-between shadow-lg">
                  <div>
                    <span className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-wider block">
                      Roys &amp; Roys Division
                    </span>
                    <p className="text-sm font-black text-white leading-snug">
                      {area.title}
                    </p>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 ml-3">
                    <MainIcon size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. EXECUTIVE OVERVIEW & WHY CHOOSE US ─────────────────────────── */}
      <section className="py-14 lg:py-20 px-6 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7" data-aos="fade-right" data-aos-duration="700">
              <span className="inline-block px-3.5 py-1 rounded bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-3">
                EXECUTIVE OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0f2b48] leading-tight mb-6">
                Specialized Engineering Rigor &amp; Clinical Excellence in {area.title}
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                {area.overview.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Quick Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {[
                  "100% International Code & Safety Compliance",
                  "Turnkey Single-Source Accountability",
                  "Certified Biomedical & Clinical Engineers",
                  "Seamless Multilateral & Government Execution",
                ].map((item, idx) => (
                  <div
                    key={item}
                    data-aos="fade-up"
                    data-aos-delay={idx * 60}
                    className="flex items-center gap-2.5"
                  >
                    <div className="w-5 h-5 rounded-full bg-blue-100 text-[#2563eb] flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#0f2b48]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Spotlight Box */}
            <div
              className="lg:col-span-5"
              data-aos="fade-left"
              data-aos-duration="700"
            >
              <div className="p-7 sm:p-8 rounded-2xl bg-[#091d34] text-white border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2563eb]/20 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[#2563eb] text-white flex items-center justify-center shadow-xs">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      The Roys &amp; Roys Advantage
                    </h3>
                    <p className="text-xs text-slate-300">Engineering Trust Since 1996</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  With three decades of proven industrial leadership, Roys &amp; Roys combines international procurement muscle, multidisciplinary engineering depth, and on-ground execution capabilities across South Asia and MENA corridors.
                </p>

                <div className="space-y-3 border-t border-white/10 pt-5 mb-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Global Standards:</span>
                    <span className="text-[#38bdf8] font-bold">HTM, AIA, NFPA, ISO</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Turnaround Speed:</span>
                    <span className="text-white font-bold">30% Faster Delivery</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Warranty &amp; Service:</span>
                    <span className="text-emerald-400 font-bold">Comprehensive 24/7 SLA</span>
                  </div>
                </div>

                <Link
                  href="/group-companies/roys-roys/contact"
                  className="w-full py-2.5 px-4 rounded bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 text-center shadow-xs"
                >
                  <span>Talk to an Expert Engineer</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. CORE CAPABILITIES (6 PILLARS GRID) ─────────────────────────── */}
      <section id="capabilities" className="py-14 lg:py-20 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl">
          <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-2">
              SPECIALIZED CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wider text-[#0f2b48] mb-3">
              Core Pillars of {area.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every system and solution is engineered to deliver zero failure tolerance, clinical safety, and long-term operating efficiency.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {area.keyPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-[#2563eb] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-200 flex items-center justify-center mb-4 shadow-xs">
                      <PillarIcon size={22} />
                    </div>
                    <h3 className="text-base font-bold text-[#0f2b48] group-hover:text-[#2563eb] transition-colors mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-[#2563eb] opacity-80 group-hover:opacity-100 transition-opacity">
                    <span>Engineered Specification</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 6. TECHNICAL SPECIFICATIONS & STANDARDS ────────────────────────── */}
      <section className="py-14 px-6 bg-white border-t border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-3.5 py-1 rounded bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-2">
              COMPLIANCE &amp; BENCHMARKS
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-wider text-[#0f2b48]">
              Technical Specifications &amp; Standards
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {area.technicalHighlights.map((spec, idx) => (
              <div
                key={spec.label}
                data-aos="zoom-in"
                data-aos-delay={idx * 60}
                className="p-5 rounded-xl border border-slate-200 bg-[#f8fafc] hover:bg-white hover:border-[#2563eb] transition-all duration-200"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  {spec.label}
                </p>
                <p className="text-sm font-black text-[#0f2b48] leading-snug">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. PROVEN 4-STEP DELIVERY METHODOLOGY ─────────────────────────── */}
      <section className="py-14 lg:py-20 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl">
          <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-2">
              PROVEN EXECUTION ROADMAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#0f2b48] mb-3">
              How We Deliver {area.shortTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Structured quality gates from preliminary assessment to final clinical sign-off.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {area.workflow.map((st, idx) => (
              <div
                key={st.step}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-slate-300 font-mono">
                      {st.step}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold text-xs">
                      <Check size={14} />
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-[#0f2b48] mb-2 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. CASE STUDY / PRACTICAL APPLICATION ─────────────────────────── */}
      {area.caseStudy && (
        <section className="py-14 lg:py-18 px-6 bg-white border-t border-slate-200">
          <div className="mx-auto max-w-screen-xl">
            <div
              data-aos="fade-up"
              className="rounded-3xl border border-slate-200 bg-[#07152b] text-white overflow-hidden shadow-2xl grid lg:grid-cols-12"
            >
              {/* Image Side */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[280px]">
                <Image
                  src={area.caseStudy.image}
                  alt={area.caseStudy.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152b] lg:bg-gradient-to-r lg:from-transparent lg:to-[#07152b]" />
              </div>

              {/* Text Side */}
              <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded bg-[#B49438]/20 border border-[#B49438]/40 text-[#d4af37] text-[11px] font-bold uppercase tracking-wider mb-3">
                    FEATURED CASE STUDY
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-4">
                    {area.caseStudy.title}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3 mb-5 text-xs">
                    <div>
                      <span className="text-slate-400 block font-bold uppercase tracking-wider">
                        Client
                      </span>
                      <span className="text-slate-200 font-semibold">
                        {area.caseStudy.client}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-bold uppercase tracking-wider">
                        Location
                      </span>
                      <span className="text-slate-200 font-semibold">
                        {area.caseStudy.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <strong className="text-white block mb-1">Project Scope:</strong>
                    {area.caseStudy.scope}
                  </div>

                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-400/20 text-xs sm:text-sm text-blue-200 leading-relaxed">
                    <strong className="text-[#38bdf8] block mb-1">Clinical Outcome:</strong>
                    {area.caseStudy.outcome}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10">
                  <Link
                    href="/group-companies/roys-roys/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#38bdf8] hover:text-white transition-colors"
                  >
                    <span>Request Similar Project Quotation</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── 9. FREQUENTLY ASKED QUESTIONS (ACCORDION) ─────────────────────── */}
      <section className="py-14 lg:py-20 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl">
          <div data-aos="fade-up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3.5 py-1 rounded bg-blue-50 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#0f2b48] mb-3">
              Questions Regarding {area.shortTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Clear technical and commercial answers directly from our healthcare engineering practice.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {area.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  data-aos="fade-up"
                  data-aos-delay={idx * 60}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0f2b48] hover:text-[#2563eb] transition-colors cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle size={18} className="text-[#2563eb] shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#2563eb]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 10. EXPLORE OTHER CORE BUSINESS AREAS (SEAMLESS SWITCHING) ───── */}
      <section className="py-14 px-6 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2563eb] block mb-1">
                OTHER CORE DIVISIONS
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#0f2b48]">
                Explore Our Core Business Areas
              </h2>
            </div>
            <Link
              href="/group-companies/roys-roys/core-business"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#2563eb] hover:text-[#0f2b48] transition-colors"
            >
              <span>View All 7 Divisions</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {otherAreas.map((other, idx) => {
              const OtherIcon = other.icon;
              return (
                <Link
                  key={other.slug}
                  href={`/group-companies/roys-roys/core-business/${other.slug}`}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 50}
                  className="p-4 rounded-xl border border-slate-200 bg-white hover:border-[#2563eb] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center text-center group cursor-pointer no-underline"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-200 flex items-center justify-center mb-2.5 shadow-xs">
                    <OtherIcon size={22} />
                  </div>
                  <p className="text-xs font-bold text-[#0f2b48] group-hover:text-[#2563eb] transition-colors whitespace-pre-line leading-snug">
                    {other.navLabel}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 11. CORPORATE HIGH-IMPACT CTA BANNER ──────────────────────────── */}
      <section className="py-14 px-6 bg-[#07152b] text-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            data-aos="fade-up"
            className="rounded-3xl bg-gradient-to-r from-[#0b2138] via-[#07152b] to-[#113658] p-8 sm:p-12 border border-white/15 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B49438] block mb-2">
                READY TO COLLABORATE?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight mb-3">
                Partner with Roys &amp; Roys for Your Next Healthcare Venture
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect with our senior healthcare engineers and project directors to discuss feasibility, procurement frameworks, or turnkey facility development.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/group-companies/roys-roys/contact"
                className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>Request Quotation</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/group-companies/roys-roys/about"
                className="w-full sm:w-auto px-6 py-3 rounded-lg border border-white/30 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Company Overview</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 12. FOOTER ─────────────────────────────────────────────────────── */}
      <RoysFooter />
    </div>
  );
}
