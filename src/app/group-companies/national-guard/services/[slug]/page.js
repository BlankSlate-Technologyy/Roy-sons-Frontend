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
} from "lucide-react";
import {
  theme,
  NationalGuardNavbar,
  NationalGuardFooter,
  SectionLabel,
  SectionHeading,
} from "../../components/NationalGuardShared";
import {
  NATIONAL_GUARD_SERVICES,
  getNationalGuardServiceBySlug,
} from "../../services-data";

export default function NationalGuardServiceDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const service = getNationalGuardServiceBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    notFound();
  }

  const otherServices = NATIONAL_GUARD_SERVICES.filter(
    (s) => s.slug !== service.slug
  );

  return (
    <main className="min-h-screen bg-white text-[#1B365D] font-sans antialiased overflow-x-hidden">
      <NationalGuardNavbar />

      {/* Breadcrumb Bar */}
      <div className="bg-[#F4F6F9] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-[13.5px] font-bold text-slate-600 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link
              href="/group-companies/national-guard"
              className="hover:text-[#B38A3F] transition-colors"
              style={{ color: theme.navy }}
            >
              National Guard
            </Link>
            <ChevronRight size={14} className="text-slate-400 shrink-0" />
            <Link
              href="/group-companies/national-guard/services"
              className="hover:text-[#B38A3F] transition-colors"
              style={{ color: theme.navy }}
            >
              Security Services
            </Link>
            <ChevronRight size={14} className="text-slate-400 shrink-0" />
            <span className="font-extrabold" style={{ color: theme.gold }}>
              {service.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="relative py-10 sm:py-12 border-b overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #F4F6F9 0%, #FFFFFF 100%)",
          borderColor: theme.border,
        }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12.5px] font-black uppercase tracking-wider border shadow-xs bg-white"
                style={{ borderColor: theme.border, color: theme.gold }}
              >
                <ShieldCheck size={15} style={{ color: theme.gold }} />
                <span>{service.eyebrow}</span>
              </div>

              <div>
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase"
                  style={{ color: theme.navy }}
                >
                  {service.title}
                </h1>
                <p
                  className="text-[15px] sm:text-[16px] font-extrabold uppercase tracking-wider mt-2"
                  style={{ color: theme.gold }}
                >
                  {service.subtitle}
                </p>
              </div>

              <p
                className="text-[15.5px] sm:text-[17px] font-medium leading-relaxed"
                style={{ color: theme.textMuted }}
              >
                {service.overview}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {service.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border shadow-xs hover:border-[#C5A059] transition-all group"
                    style={{ borderColor: theme.border }}
                  >
                    <p
                      className="text-[12px] font-extrabold uppercase tracking-wider"
                      style={{ color: theme.textLight }}
                    >
                      {metric.label}
                    </p>
                    <p
                      className="text-[19px] sm:text-[21px] font-black mt-0.5 group-hover:text-[#B38A3F] transition-colors"
                      style={{ color: theme.navy }}
                    >
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/group-companies/national-guard/contact"
                  className="px-6 py-3.5 rounded-xl text-[14.5px] font-extrabold uppercase tracking-wide text-white flex items-center gap-2 shadow-md transition-all hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Request Custom Quotation</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+923218431665"
                  className="px-5 py-3.5 rounded-xl text-[14.5px] font-extrabold border-2 bg-white hover:bg-slate-50 flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  style={{ borderColor: theme.navy, color: theme.navy }}
                >
                  <Phone size={16} style={{ color: theme.gold }} />
                  <span>+92 321 8431665</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div
                className="relative group rounded-3xl overflow-hidden border shadow-xl bg-white"
                style={{ borderColor: theme.border }}
              >
                <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden bg-slate-100">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} - National Guard Security Services`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 520px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/85 via-transparent to-transparent" />

                  <div
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border shadow-lg"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${theme.navy}15` }}
                        >
                          <ShieldCheck size={22} style={{ color: theme.navy }} />
                        </div>
                        <div>
                          <p className="text-[12px] font-extrabold text-slate-600 uppercase tracking-wider">
                            Standard Deployment
                          </p>
                          <p
                            className="text-[14px] font-black uppercase"
                            style={{ color: theme.navy }}
                          >
                            Govt Licensed &amp; Verified
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[12px] font-extrabold uppercase bg-emerald-100 text-emerald-800 shrink-0">
                        Active 24/7
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
            {NATIONAL_GUARD_SERVICES.map((s) => {
              const isCurrent = s.slug === service.slug;
              return (
                <Link
                  key={s.slug}
                  href={`/group-companies/national-guard/services/${s.slug}`}
                  className={`px-4 py-2 rounded-xl text-[13px] font-extrabold uppercase tracking-wide whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isCurrent
                      ? "text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                  style={{
                    backgroundColor: isCurrent ? theme.navy : undefined,
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
      <section className="py-12 sm:py-14 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <SectionLabel center>Operational Excellence</SectionLabel>
            <SectionHeading center className="mb-3">
              Core Capabilities for {service.title}
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[17px] font-medium" style={{ color: theme.textMuted }}>
              Engineered standard operating procedures designed to guarantee total perimeter
              integrity and zero-defect vigilance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="ng-card-hover p-6 rounded-3xl border bg-white shadow-xs flex flex-col justify-between group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-4"
                      style={{ backgroundColor: `${theme.navy}12`, color: theme.navy }}
                    >
                      <Icon size={23} style={{ color: theme.navy }} />
                    </div>
                    <h3
                      className="text-[18px] font-black mb-2 group-hover:text-[#B38A3F] transition-colors leading-snug uppercase"
                      style={{ color: theme.navy }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                  <div
                    className="pt-3.5 mt-5 border-t flex items-center justify-between text-[12.5px] font-black uppercase tracking-wider"
                    style={{ borderColor: theme.border, color: theme.gold }}
                  >
                    <span>Pillar 0{idx + 1}</span>
                    <CheckCircle2 size={16} style={{ color: theme.gold }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deliverables & Technical Profile */}
      <section
        className="py-12 sm:py-14 border-b"
        style={{ backgroundColor: theme.bgLight, borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-5">
              <div>
                <SectionLabel>Comprehensive Scope</SectionLabel>
                <SectionHeading className="mb-2.5">Service Deliverables Included</SectionHeading>
                <p className="text-[15px] sm:text-[16px] font-medium" style={{ color: theme.textMuted }}>
                  Every security assignment comes with complete supervisory oversight, equipment
                  issuance, and verified protocols.
                </p>
              </div>

              <div className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border shadow-xs flex items-start gap-3 hover:border-[#C5A059] transition-colors"
                    style={{ borderColor: theme.border }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${theme.navy}12` }}
                    >
                      <CheckCircle2 size={16} style={{ color: theme.gold }} />
                    </div>
                    <p className="text-[14.5px] sm:text-[15px] font-semibold text-slate-800 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div
                className="p-6 sm:p-7 rounded-3xl bg-white border shadow-md"
                style={{ borderColor: theme.border }}
              >
                <div
                  className="flex items-center gap-3.5 mb-5 pb-4 border-b"
                  style={{ borderColor: theme.border }}
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${theme.navy}12` }}
                  >
                    <Layers size={22} style={{ color: theme.navy }} />
                  </div>
                  <div>
                    <h3
                      className="text-[18px] sm:text-[19px] font-black uppercase"
                      style={{ color: theme.navy }}
                    >
                      Operational &amp; Technical Profile
                    </h3>
                    <p className="text-[13.5px] text-slate-600 font-medium">
                      Standardized deployment benchmarks
                    </p>
                  </div>
                </div>

                <div className="divide-y text-[14.5px]" style={{ borderColor: theme.border }}>
                  {service.technicalSpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5"
                    >
                      <span className="font-bold text-slate-600">{spec.key}</span>
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

      {/* 4-Stage Workflow */}
      <section className="py-12 sm:py-14 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <SectionLabel center>Workflow &amp; Oversight</SectionLabel>
            <SectionHeading center className="mb-3">
              How We Deploy &amp; Supervise {service.title}
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[17px] font-medium" style={{ color: theme.textMuted }}>
              From immediate threat assessment to continuous day and night supervisory visits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.workflow.map((w) => (
              <div
                key={w.step}
                className="ng-card-hover relative p-6 rounded-3xl border bg-[#F4F6F9] flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-base text-white mb-4 shadow-sm"
                    style={{ backgroundColor: theme.navy }}
                  >
                    {w.step}
                  </div>
                  <h3
                    className="text-[18px] font-black mb-2 uppercase leading-snug"
                    style={{ color: theme.navy }}
                  >
                    {w.title}
                  </h3>
                  <p
                    className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed"
                    style={{ color: theme.textMuted }}
                  >
                    {w.desc}
                  </p>
                </div>
                <div
                  className="pt-3.5 mt-5 border-t flex items-center gap-2"
                  style={{ borderColor: theme.border }}
                >
                  <ShieldCheck size={15} style={{ color: theme.gold }} />
                  <span
                    className="text-[12.5px] font-extrabold uppercase tracking-wider"
                    style={{ color: theme.gold }}
                  >
                    Phase {w.step} Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section
        className="py-12 sm:py-14 border-b"
        style={{ backgroundColor: theme.bgLight, borderColor: theme.border }}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center">
            <SectionLabel center>Questions &amp; Answers</SectionLabel>
            <SectionHeading center className="mb-2.5">
              Frequently Asked Questions
            </SectionHeading>
            <p className="text-[15px] sm:text-[16px] font-medium" style={{ color: theme.textMuted }}>
              Key clarifications regarding guard qualifications, weapons licensing, and SLAs.
            </p>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border bg-white overflow-hidden transition-all shadow-xs"
                  style={{ borderColor: isOpen ? theme.gold : theme.border }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span
                      className="text-[15.5px] sm:text-[16.5px] font-black"
                      style={{ color: theme.navy }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-500 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#B38A3F]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="px-5 pb-5 text-[15px] font-medium leading-relaxed border-t pt-3.5 text-slate-700 bg-slate-50/50"
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

      {/* Other Services Grid */}
      <section className="py-12 sm:py-14 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <SectionLabel>Explore More Offerings</SectionLabel>
              <SectionHeading>Other Specialized Security Services</SectionHeading>
            </div>
            <Link
              href="/group-companies/national-guard/services"
              className="inline-flex items-center gap-1.5 text-[14.5px] font-black uppercase tracking-wider"
              style={{ color: theme.navy }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((other) => {
              const Icon = other.icon;
              return (
                <Link
                  key={other.slug}
                  href={`/group-companies/national-guard/services/${other.slug}`}
                  className="ng-card-hover p-6 rounded-3xl border bg-white shadow-xs group flex flex-col justify-between cursor-pointer"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${theme.navy}12` }}
                    >
                      <Icon size={21} style={{ color: theme.navy }} />
                    </div>
                    <h4
                      className="text-[18px] font-black mb-2 uppercase"
                      style={{ color: theme.navy }}
                    >
                      {other.title}
                    </h4>
                    <p
                      className="text-[14.5px] font-medium line-clamp-2 leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {other.overview}
                    </p>
                  </div>
                  <div
                    className="mt-4 pt-3.5 border-t flex items-center justify-between text-[13.5px] font-extrabold uppercase tracking-wider"
                    style={{ borderColor: theme.border, color: theme.gold }}
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Navy CTA Banner */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl border p-7 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6"
            style={{
              backgroundColor: theme.navyDark,
              borderColor: "rgba(223, 184, 104, 0.35)",
              color: "#FFFFFF",
            }}
          >
            <div className="max-w-2xl space-y-2">
              <span
                className="text-[13px] font-black uppercase tracking-widest block"
                style={{ color: theme.goldBright }}
              >
                NEED IMMEDIATE GUARD PLACEMENT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase leading-tight text-white">
                Request Quotation for {service.title}
              </h2>
              <p className="text-[15px] sm:text-[16px] font-medium leading-relaxed text-slate-200">
                Connect directly with our senior operations managers to arrange an on-site survey
                and get an itemized guard force proposal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full sm:w-auto">
              <Link
                href="/group-companies/national-guard/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-[14.5px] uppercase tracking-wider text-center shadow-md hover:opacity-95 transition-all cursor-pointer"
                style={{ backgroundColor: theme.goldBright, color: theme.navyDark }}
              >
                Request Quotation
              </Link>
              <a
                href="tel:+923218431665"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-extrabold text-[14.5px] border-2 text-center transition-all hover:bg-white/10 cursor-pointer flex items-center justify-center gap-2 text-white"
                style={{ borderColor: "rgba(255,255,255,0.45)" }}
              >
                <Phone size={16} style={{ color: theme.goldBright }} />
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
