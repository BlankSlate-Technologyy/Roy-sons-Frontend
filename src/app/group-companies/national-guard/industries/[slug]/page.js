"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  ChevronDown,
  Building2,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowLeft,
  Calendar,
  Layers,
  Activity,
  Check,
  FileText,
  FileCheck,
  ClipboardList,
  Globe2,
  Package,
  TrendingUp,
  RefreshCw,
  Scale,
  Send,
  Lock,
  Eye,
  Radio,
  Clock,
  Shield,
  Zap,
  Headphones,
} from "lucide-react";
import {
  theme,
  NationalGuardNavbar,
  NationalGuardFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../../components/NationalGuardShared";
import {
  NATIONAL_GUARD_INDUSTRIES,
  getNationalGuardIndustryBySlug,
} from "../../industries-data";

export default function NationalGuardIndustryDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const industry = getNationalGuardIndustryBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!industry) {
    notFound();
  }

  const otherIndustries = NATIONAL_GUARD_INDUSTRIES.filter(
    (i) => i.slug !== industry.slug
  );

  return (
    <main className="min-h-screen bg-white text-[#1B365D] font-sans antialiased overflow-x-hidden">
      {/* ─── Global National Guard Header ───────────────────────────────── */}
      <NationalGuardNavbar />

      {/* ─── Breadcrumb Navigation Bar ───────────────────────────────────── */}
      <div className="bg-[#F4F6F9] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link
              href="/group-companies/national-guard"
              className="hover:text-[#C5A059] transition-colors"
              style={{ color: theme.navy }}
            >
              National Guard
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <Link
              href="/group-companies/national-guard/industries"
              className="hover:text-[#C5A059] transition-colors"
              style={{ color: theme.navy }}
            >
              Industries Protected
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <span className="font-bold" style={{ color: theme.gold }}>
              {industry.title}
            </span>
          </nav>
        </div>
      </div>

      {/* ─── Hero Section with High-Impact Visuals & Metrics ────────────── */}
      <section
        className="relative bg-gradient-to-b from-[#F4F6F9] to-white py-12 lg:py-20 border-b overflow-hidden"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider border shadow-xs bg-white"
                style={{ borderColor: theme.border, color: theme.gold }}
              >
                <ShieldCheck size={14} style={{ color: theme.gold }} />
                <span>{industry.eyebrow}</span>
              </div>

              <div>
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] uppercase"
                  style={{ color: theme.navy }}
                >
                  {industry.title}
                </h1>
                <p
                  className="text-sm sm:text-base font-bold uppercase tracking-wider mt-2"
                  style={{ color: theme.gold }}
                >
                  Sector Specialization: {industry.tag}
                </p>
              </div>

              <p
                className="text-sm sm:text-base font-medium leading-relaxed"
                style={{ color: theme.textMuted }}
              >
                {industry.overview}
              </p>

              {/* Live Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {industry.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border shadow-xs hover:border-[#C5A059] transition-all group"
                    style={{ borderColor: theme.border }}
                  >
                    <p
                      className="text-[10.5px] font-bold uppercase tracking-wider"
                      style={{ color: theme.textLight }}
                    >
                      {metric.label}
                    </p>
                    <p
                      className="text-lg sm:text-xl font-black mt-0.5 group-hover:text-[#C5A059] transition-colors"
                      style={{ color: theme.navy }}
                    >
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/group-companies/national-guard/contact"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white flex items-center gap-2 shadow-md transition-all hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Request Sector Security Plan</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+923218431665"
                  className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold border bg-white hover:bg-slate-50 flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <Phone size={14} style={{ color: theme.gold }} />
                  <span>+92 321 8431665</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Image Showcase Card */}
            <div className="lg:col-span-5">
              <div
                className="relative group rounded-3xl overflow-hidden border shadow-xl bg-white"
                style={{ borderColor: theme.border }}
              >
                <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-slate-100">
                  <Image
                    src={industry.heroImage}
                    alt={`${industry.title} - National Guard Security Services`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/80 via-transparent to-transparent" />

                  {/* Floating Sector Certification Seal */}
                  <div
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border shadow-lg"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${theme.navy}15` }}
                        >
                          <ShieldCheck size={22} style={{ color: theme.navy }} />
                        </div>
                        <div>
                          <p
                            className="text-[10.5px] font-extrabold text-slate-500 uppercase tracking-wider"
                          >
                            Sector Enforcement
                          </p>
                          <p
                            className="text-xs font-black uppercase"
                            style={{ color: theme.navy }}
                          >
                            {industry.tag}
                          </p>
                        </div>
                      </div>
                      <span
                        className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-700"
                      >
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 1-Click Sticky Sector Switcher Tabs ─────────────────────────── */}
      <div
        className="sticky top-[60px] sm:top-[68px] z-30 bg-white/95 backdrop-blur-md border-b shadow-xs"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {NATIONAL_GUARD_INDUSTRIES.map((ind) => {
              const isCurrent = ind.slug === industry.slug;
              return (
                <Link
                  key={ind.slug}
                  href={`/group-companies/national-guard/industries/${ind.slug}`}
                  className={`px-3.5 py-2 rounded-xl text-[11px] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isCurrent
                      ? "text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                  style={{
                    backgroundColor: isCurrent ? theme.navy : undefined,
                  }}
                >
                  {ind.title.split("&")[0].trim()}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── 4 Core Industry Pillars ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Sector Strategy</SectionLabel>
            <SectionHeading center className="mb-3">
              Protection Pillars for {industry.title}
            </SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Specialized security protocols tailored to address the physical risks, visitor volumes, and regulatory mandates of this sector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl border bg-white shadow-xs hover:shadow-lg hover:border-[#C5A059] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-5"
                      style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}
                    >
                      <Icon size={22} style={{ color: theme.navy }} />
                    </div>
                    <h3
                      className="text-base font-black mb-2.5 group-hover:text-[#C5A059] transition-colors leading-snug uppercase"
                      style={{ color: theme.navy }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-medium leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                  <div
                    className="pt-4 mt-6 border-t flex items-center justify-between text-[11px] font-black uppercase tracking-wider"
                    style={{ borderColor: theme.border, color: theme.gold }}
                  >
                    <span>Pillar 0{idx + 1}</span>
                    <CheckCircle2 size={15} style={{ color: theme.gold }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Applications & Technical Specifications Profile ─────────────── */}
      <section
        className="py-16 lg:py-20 bg-[#F4F6F9] border-b"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Applications Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <SectionLabel>Sector Capabilities</SectionLabel>
                <SectionHeading className="mb-3">
                  Key Security Applications
                </SectionHeading>
                <p className="text-xs sm:text-sm font-medium" style={{ color: theme.textMuted }}>
                  Core protective tasks and daily operational protocols executed for {industry.title}.
                </p>
              </div>

              <div className="space-y-3">
                {industry.applications.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border shadow-xs flex items-start gap-3.5 hover:border-[#C5A059] transition-colors"
                    style={{ borderColor: theme.border }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${theme.navy}10` }}
                    >
                      <CheckCircle2 size={15} style={{ color: theme.gold }} />
                    </div>
                    <p className="text-xs sm:text-[13.5px] font-semibold text-slate-800 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Standardized Specifications Table */}
            <div className="lg:col-span-6">
              <div
                className="p-6 sm:p-8 rounded-3xl bg-white border shadow-md"
                style={{ borderColor: theme.border }}
              >
                <div
                  className="flex items-center gap-3.5 mb-6 pb-4 border-b"
                  style={{ borderColor: theme.border }}
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${theme.navy}10` }}
                  >
                    <Layers size={22} style={{ color: theme.navy }} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase" style={{ color: theme.navy }}>
                      Sector Technical Profile
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Standardized statutory &amp; security parameters</p>
                  </div>
                </div>

                <div className="divide-y text-xs sm:text-[13px]" style={{ borderColor: theme.border }}>
                  {industry.technologies.map((spec, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                    >
                      <span className="font-bold text-slate-500">{spec.key}</span>
                      <span className="font-extrabold sm:text-right" style={{ color: theme.navy }}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQs Accordion ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <SectionLabel center>Sector Inquiries</SectionLabel>
            <SectionHeading center className="mb-3">
              Common Questions in {industry.title}
            </SectionHeading>
            <p className="text-xs sm:text-sm font-medium" style={{ color: theme.textMuted }}>
              Addressing key security protocols, guard allocations, and compliance standards.
            </p>
          </div>

          <div className="space-y-3">
            {industry.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border bg-white overflow-hidden transition-all shadow-xs"
                  style={{ borderColor: isOpen ? theme.gold : theme.border }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-black uppercase" style={{ color: theme.navy }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#C5A059]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="px-4 sm:px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed border-t pt-3 text-slate-600 bg-slate-50/50"
                      style={{ borderColor: theme.border }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Other Industries Navigation Grid ───────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F4F6F9] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <SectionLabel>Explore All Sectors</SectionLabel>
              <SectionHeading>Other Industries We Safeguard</SectionHeading>
            </div>
            <Link
              href="/group-companies/national-guard/industries"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider"
              style={{ color: theme.navy }}
            >
              <span>View All 12 Industries</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {otherIndustries.slice(0, 6).map((other) => {
              const Icon = other.icon;
              return (
                <Link
                  key={other.slug}
                  href={`/group-companies/national-guard/industries/${other.slug}`}
                  className="ng-counter-box p-5 rounded-2xl border flex flex-col items-center justify-center text-center group bg-white shadow-xs cursor-pointer hover:border-[#C5A059]"
                  style={{ borderColor: theme.border }}
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${theme.navy}10` }}
                  >
                    <Icon size={18} style={{ color: theme.navy }} />
                  </div>
                  <p className="text-[11px] font-bold leading-tight uppercase tracking-wider text-slate-800 line-clamp-2">
                    {other.title.split("&")[0].trim()}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Fast Sector Consultation Desk CTA ──────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl border p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 bg-white"
            style={{ borderColor: theme.border }}
          >
            <div className="max-w-2xl space-y-3">
              <span
                className="text-xs font-black uppercase tracking-widest block"
                style={{ color: theme.gold }}
              >
                HAVE A FACILITY IN THIS SECTOR?
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight" style={{ color: theme.navy }}>
                Get An Industry-Tailored Security Plan
              </h2>
              <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                We conduct on-site vulnerability analysis customized specifically for your facility type and provide exact guard deployment recommendations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/group-companies/national-guard/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-white text-center shadow-md hover:opacity-95 transition-all cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                Request Security Survey
              </Link>
              <a
                href="tel:+923218431665"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm border-2 text-center transition-all hover:bg-slate-50 cursor-pointer flex items-center justify-center gap-2"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
                <span>+92 321 8431665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Global National Guard Footer ───────────────────────────────── */}
      <NationalGuardFooter />
    </main>
  );
}
