"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronDown,
  ShieldCheck,
  Layers,
  Sprout,
} from "lucide-react";
import {
  theme,
  NationalAgriculturalNavbar,
  NationalAgriculturalFooter,
  SectionLabel,
  SectionHeading,
} from "../../components/NationalAgriculturalShared";
import {
  NATIONAL_AGRICULTURAL_SERVICES,
  getNationalAgriculturalServiceBySlug,
} from "../../services-data";

export default function NationalAgriculturalServiceDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const service = getNationalAgriculturalServiceBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    notFound();
  }

  const otherServices = NATIONAL_AGRICULTURAL_SERVICES.filter(
    (s) => s.slug !== service.slug
  );

  return (
    <main className="min-h-screen bg-white text-[#0B2535] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#F8FAFB] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link
              href="/group-companies/national-agricultural"
              className="hover:text-[#236B38] transition-colors"
              style={{ color: theme.navy }}
            >
              National Agricultural
            </Link>
            <ChevronRight size={14} className="text-slate-400 shrink-0" />
            <Link
              href="/group-companies/national-agricultural/services"
              className="hover:text-[#236B38] transition-colors"
              style={{ color: theme.navy }}
            >
              Services &amp; Capabilities
            </Link>
            <ChevronRight size={14} className="text-slate-400 shrink-0" />
            <span className="font-bold" style={{ color: theme.primaryMid }}>
              {service.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative bg-[#F8FAFB] py-10 lg:py-14 border-b overflow-hidden"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider border shadow-2xs bg-white"
                style={{ borderColor: theme.border, color: theme.primaryMid }}
              >
                <Sprout size={14} style={{ color: theme.accent }} />
                <span>{service.eyebrow}</span>
              </div>

              <div>
                <h1
                  className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight leading-tight"
                  style={{ color: theme.navy }}
                >
                  {service.fullTitle || service.title}
                </h1>
                <p
                  className="text-base sm:text-lg font-semibold mt-2"
                  style={{ color: theme.accent }}
                >
                  {service.subtitle}
                </p>
              </div>

              <p
                className="text-[15px] sm:text-base font-normal leading-relaxed"
                style={{ color: theme.textMuted }}
              >
                {service.overview}
              </p>

              {/* Live Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {service.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border shadow-xs hover:border-[#C59B27] transition-all group"
                    style={{ borderColor: theme.border }}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-wide"
                      style={{ color: theme.textLight }}
                    >
                      {metric.label}
                    </p>
                    <p
                      className="text-lg sm:text-xl font-extrabold mt-0.5"
                      style={{ color: theme.navy }}
                    >
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/group-companies/national-agricultural/contact"
                  className="px-6 py-3.5 rounded-xl text-sm sm:text-[15px] font-bold text-white flex items-center gap-2 shadow-sm transition-all hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primaryMid }}
                >
                  <span>Request Custom Farm Proposal</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+923218431665"
                  className="px-5 py-3.5 rounded-xl text-sm sm:text-[15px] font-bold border bg-white hover:bg-slate-50 flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <Phone size={15} style={{ color: theme.primaryMid }} />
                  <span>+92 321 8431665</span>
                </a>
              </div>
            </div>

            {/* Right Image Showcase */}
            <div className="lg:col-span-5">
              <div
                className="relative group rounded-2xl overflow-hidden border shadow-md bg-white"
                style={{ borderColor: theme.border }}
              >
                <div className="relative w-full h-[300px] sm:h-[380px] overflow-hidden bg-slate-100">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} - National Agricultural Corporation`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2535]/80 via-transparent to-transparent" />

                  <div
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border shadow-md"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${theme.primaryMid}14` }}
                        >
                          <ShieldCheck size={20} style={{ color: theme.primaryMid }} />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                            Verified Capability
                          </p>
                          <p className="text-sm font-bold" style={{ color: theme.navy }}>
                            {service.tag}
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-emerald-100 text-emerald-800">
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

      {/* Sticky Service Switcher Tabs */}
      <div
        className="sticky top-[62px] sm:top-[68px] z-30 bg-white/95 backdrop-blur-md border-b shadow-xs"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {NATIONAL_AGRICULTURAL_SERVICES.map((s) => {
              const isCurrent = s.slug === service.slug;
              return (
                <Link
                  key={s.slug}
                  href={`/group-companies/national-agricultural/services/${s.slug}`}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isCurrent
                      ? "text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                  style={{
                    backgroundColor: isCurrent ? theme.primaryMid : undefined,
                  }}
                >
                  {s.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4 Core Strategic Pillars */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionLabel center>Agronomic Excellence</SectionLabel>
            <SectionHeading center className="mb-2.5">
              Strategic Capability Pillars
            </SectionHeading>
            <p className="text-[15px] sm:text-base font-normal leading-relaxed" style={{ color: theme.textMuted }}>
              Engineered farming methodologies designed to maximize crop yield, reduce input wastage, and protect soil biodiversity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="agri-card p-6 rounded-2xl bg-white flex flex-col justify-between group"
                >
                  <div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${theme.primaryMid}12` }}
                    >
                      <Icon size={21} style={{ color: theme.primaryMid }} />
                    </div>
                    <h3
                      className="text-lg font-bold mb-2 leading-snug"
                      style={{ color: theme.navy }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-[15px] font-normal leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                  <div
                    className="pt-3.5 mt-5 border-t flex items-center justify-between text-xs font-bold uppercase tracking-wider"
                    style={{ borderColor: theme.borderLight, color: theme.accent }}
                  >
                    <span>Pillar 0{idx + 1}</span>
                    <CheckCircle2 size={15} style={{ color: theme.primaryMid }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables & Technical Specifications */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFB] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Deliverables */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <SectionLabel>Service Scope</SectionLabel>
                <SectionHeading className="mb-2.5">
                  Technical Deliverables Included
                </SectionHeading>
                <p className="text-[15px] sm:text-base font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                  Every project deployment includes certified agronomic oversight, field telemetry, and guaranteed performance benchmarks.
                </p>
              </div>

              <div className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border shadow-2xs flex items-start gap-3"
                    style={{ borderColor: theme.border }}
                  >
                    <CheckCircle2 size={18} style={{ color: theme.primaryMid }} className="shrink-0 mt-0.5" />
                    <p className="text-[15px] font-medium text-slate-800 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Table */}
            <div className="lg:col-span-6">
              <div
                className="p-6 sm:p-7 rounded-2xl bg-white border shadow-sm"
                style={{ borderColor: theme.border }}
              >
                <div
                  className="flex items-center gap-3.5 mb-5 pb-4 border-b"
                  style={{ borderColor: theme.border }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${theme.primaryMid}12` }}
                  >
                    <Layers size={22} style={{ color: theme.primaryMid }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: theme.navy }}>
                      Technical &amp; Machinery Profile
                    </h3>
                    <p className="text-sm text-slate-500">Standardized engineering specifications</p>
                  </div>
                </div>

                <div className="divide-y text-sm sm:text-[15px]" style={{ borderColor: theme.borderLight }}>
                  {service.technicalSpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                    >
                      <span className="font-semibold text-slate-500">{spec.key}</span>
                      <span className="font-bold sm:text-right" style={{ color: theme.navy }}>
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

      {/* 4-Stage Operational Workflow */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionLabel center>Disciplined Protocol</SectionLabel>
            <SectionHeading center className="mb-2.5">
              How We Deploy &amp; Manage {service.title}
            </SectionHeading>
            <p className="text-[15px] sm:text-base font-normal leading-relaxed" style={{ color: theme.textMuted }}>
              From initial field survey and soil analysis to precision execution and post-harvest market linkages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.workflow.map((w) => (
              <div
                key={w.step}
                className="agri-card p-6 rounded-2xl bg-white flex flex-col justify-between"
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-base text-white mb-4 shadow-xs"
                    style={{ backgroundColor: theme.primaryMid }}
                  >
                    {w.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 leading-snug" style={{ color: theme.navy }}>
                    {w.title}
                  </h3>
                  <p className="text-[15px] font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                    {w.desc}
                  </p>
                </div>
                <div
                  className="pt-3.5 mt-5 border-t flex items-center gap-2"
                  style={{ borderColor: theme.borderLight }}
                >
                  <ShieldCheck size={15} style={{ color: theme.accent }} />
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.accent }}>
                    Stage {w.step} Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-10 sm:py-12 lg:py-14 bg-[#F8FAFB] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <SectionLabel center>Agronomic Inquiries</SectionLabel>
            <SectionHeading center className="mb-2">
              Frequently Asked Questions
            </SectionHeading>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="agri-card rounded-xl bg-white overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-[15px] sm:text-base font-bold" style={{ color: theme.navy }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={19}
                      className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#C59B27]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="px-4 sm:px-5 pb-5 text-[15px] font-normal leading-relaxed border-t pt-3.5 text-slate-700"
                      style={{ borderColor: theme.borderLight }}
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

      {/* Other Services Grid */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <SectionLabel>Comprehensive Portfolio</SectionLabel>
              <SectionHeading>Other Agricultural Capabilities</SectionHeading>
            </div>
            <Link
              href="/group-companies/national-agricultural/services"
              className="agri-link-arrow text-[15px] font-bold flex items-center gap-1.5"
              style={{ color: theme.primaryMid }}
            >
              <span>View all services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/group-companies/national-agricultural/services/${other.slug}`}
                className="agri-card p-6 rounded-2xl bg-white group flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F8FAFB] border" style={{ borderColor: theme.border, color: theme.primaryMid }}>
                      {other.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{other.metrics[0].value}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-[#236B38] transition-colors" style={{ color: theme.navy }}>
                    {other.title}
                  </h4>
                  <p className="text-[15px] font-normal line-clamp-2 leading-relaxed" style={{ color: theme.textMuted }}>
                    {other.overview}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t flex items-center justify-between text-sm font-bold" style={{ borderColor: theme.borderLight, color: theme.primaryMid }}>
                  <span>View full details</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-10 sm:py-12 bg-[#F8FAFB]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-2xl border p-6 sm:p-8 lg:p-10 shadow-xs flex flex-col lg:flex-row items-center justify-between gap-6 bg-white"
            style={{ borderColor: theme.border }}
          >
            <div className="max-w-2xl">
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider block mb-1.5" style={{ color: theme.accent }}>
                Agribusiness Consultation Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-2" style={{ color: theme.navy }}>
                Request A Farm Proposal For {service.title}
              </h2>
              <p className="text-[15px] sm:text-base font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                Speak directly with our agronomy and farm engineering specialists to receive equipment quotes, water designs, and yield forecasts.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/group-companies/national-agricultural/contact"
                className="px-6 py-3 rounded-xl font-bold text-sm sm:text-[15px] text-white shadow-xs hover:opacity-95 transition-all cursor-pointer"
                style={{ backgroundColor: theme.primaryMid }}
              >
                Request Farm Quotation
              </Link>
              <a
                href="tel:+923218431665"
                className="px-5 py-3 rounded-xl font-bold text-sm sm:text-[15px] border transition-all hover:bg-slate-50 cursor-pointer flex items-center gap-2"
                style={{ borderColor: theme.border, color: theme.navy }}
              >
                <Phone size={15} style={{ color: theme.primaryMid }} />
                <span>+92 321 8431665</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NationalAgriculturalFooter />
    </main>
  );
}
