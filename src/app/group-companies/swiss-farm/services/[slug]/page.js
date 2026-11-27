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
  Leaf,
} from "lucide-react";
import {
  theme,
  SwissFarmNavbar,
  SwissFarmFooter,
  SectionLabel,
  SectionHeading,
} from "../../components/SwissFarmShared";
import {
  SWISS_FARM_SERVICES,
  getSwissFarmServiceBySlug,
} from "../../services-data";

export default function SwissFarmServiceDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const service = getSwissFarmServiceBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    notFound();
  }

  const otherServices = SWISS_FARM_SERVICES.filter(
    (s) => s.slug !== service.slug
  );

  return (
    <main className="min-h-screen bg-white text-[#1C522A] font-sans antialiased overflow-x-hidden">
      <SwissFarmNavbar />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-[#F4F8F4] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-[14px] font-bold text-slate-600 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link
              href="/group-companies/swiss-farm"
              className="hover:text-[#A88134] transition-colors"
              style={{ color: theme.primary }}
            >
              Swiss Farms
            </Link>
            <ChevronRight size={15} className="text-slate-400 shrink-0" />
            <Link
              href="/group-companies/swiss-farm/services"
              className="hover:text-[#A88134] transition-colors"
              style={{ color: theme.primary }}
            >
              Capabilities &amp; Services
            </Link>
            <ChevronRight size={15} className="text-slate-400 shrink-0" />
            <span className="font-extrabold" style={{ color: theme.accentGold }}>
              {service.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Hero Section with High-Impact Visuals & Metrics */}
      <section
        className="relative bg-gradient-to-b from-[#F4F8F4] to-white py-10 sm:py-12 border-b overflow-hidden"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-5">
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] font-extrabold uppercase tracking-wider border shadow-xs bg-white"
                style={{ borderColor: theme.border, color: theme.primary }}
              >
                <Leaf size={15} style={{ color: theme.accentGold }} />
                <span>{service.eyebrow}</span>
              </div>

              <div>
                <h1
                  className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase"
                  style={{ color: theme.primary }}
                >
                  {service.title}
                </h1>
                <p
                  className="text-[15px] sm:text-[16px] font-extrabold uppercase tracking-wider mt-2.5"
                  style={{ color: theme.accentGold }}
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

              {/* Live Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                {service.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border shadow-xs hover:border-[#A88134] transition-all group"
                    style={{ borderColor: theme.border }}
                  >
                    <p
                      className="text-[12.5px] font-bold uppercase tracking-wide"
                      style={{ color: theme.textLight }}
                    >
                      {metric.label}
                    </p>
                    <p
                      className="text-[18px] sm:text-[20px] font-black mt-1 group-hover:text-[#A88134] transition-colors"
                      style={{ color: theme.primary }}
                    >
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href="/group-companies/swiss-farm/contact"
                  className="px-6 py-3.5 rounded-xl text-[15px] font-extrabold text-white flex items-center gap-2 shadow-md transition-all hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.primary }}
                >
                  <span>Request Capability Proposal</span>
                  <ArrowRight size={17} />
                </Link>
                <a
                  href="tel:00924238924737"
                  className="px-5 py-3.5 rounded-xl text-[15px] font-extrabold border-2 bg-white hover:bg-[#F4F8F4] flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  style={{ borderColor: theme.primary, color: theme.primary }}
                >
                  <Phone size={16} style={{ color: theme.accentGold }} />
                  <span>0092-42-38924737</span>
                </a>
              </div>
            </div>

            {/* Right Interactive Image Showcase Card */}
            <div className="lg:col-span-5">
              <div
                className="relative group rounded-3xl overflow-hidden border shadow-xl bg-white"
                style={{ borderColor: theme.border }}
              >
                <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden bg-slate-100">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} - Swiss Farms`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#123B1D]/85 via-transparent to-transparent" />

                  {/* Floating Service Badge */}
                  <div
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border shadow-lg"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${theme.primary}15` }}
                        >
                          <ShieldCheck size={22} style={{ color: theme.primary }} />
                        </div>
                        <div>
                          <p className="text-[12.5px] font-extrabold text-slate-500 uppercase tracking-wider">
                            Certified Standard
                          </p>
                          <p className="text-[15px] font-black uppercase" style={{ color: theme.primary }}>
                            {service.tag}
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[12px] font-extrabold uppercase bg-emerald-100 text-emerald-800">
                        24/7 Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1-Click Sticky Service Switcher Tabs */}
      <div
        className="sticky top-[62px] sm:top-[68px] z-30 bg-white/95 backdrop-blur-md border-b shadow-xs"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {SWISS_FARM_SERVICES.map((s) => {
              const isCurrent = s.slug === service.slug;
              return (
                <Link
                  key={s.slug}
                  href={`/group-companies/swiss-farm/services/${s.slug}`}
                  className={`px-4 py-2 rounded-xl text-[13px] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isCurrent
                      ? "text-white shadow-xs"
                      : "bg-[#F4F8F4] hover:bg-[#E6F0E7] text-[#1C522A]"
                  }`}
                  style={{
                    backgroundColor: isCurrent ? theme.primary : undefined,
                  }}
                >
                  {s.title.split("&")[0].trim()}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4 Core Strategic Engineering Pillars */}
      <section className="py-10 sm:py-12 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-9">
            <SectionLabel center>Operational Excellence</SectionLabel>
            <SectionHeading center className="mb-3">
              Strategic Capability Pillars for {service.title}
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[16.5px] font-medium" style={{ color: theme.textMuted }}>
              Engineered with automated rotary parlors, precision animal nutrition, and compassionate livestock welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="swiss-farm-card-hover p-6 rounded-3xl border bg-white shadow-xs flex flex-col justify-between group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-4"
                      style={{ backgroundColor: `${theme.primary}12`, color: theme.primary }}
                    >
                      <Icon size={24} style={{ color: theme.primary }} />
                    </div>
                    <h3
                      className="text-[18px] font-black mb-2 group-hover:text-[#A88134] transition-colors leading-snug uppercase"
                      style={{ color: theme.primary }}
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
                    className="pt-4 mt-5 border-t flex items-center justify-between text-[13px] font-black uppercase tracking-wider"
                    style={{ borderColor: theme.border, color: theme.accentGold }}
                  >
                    <span>Pillar 0{idx + 1}</span>
                    <CheckCircle2 size={16} style={{ color: theme.accentGold }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scope of Deliverables & Technical Specifications Profile */}
      <section
        className="py-10 sm:py-12 bg-[#F4F8F4] border-b"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Deliverables Checklist */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <SectionLabel>Technical Scope</SectionLabel>
                <SectionHeading className="mb-3">
                  Key Quality Deliverables
                </SectionHeading>
                <p className="text-[15.5px] font-medium" style={{ color: theme.textMuted }}>
                  Every operational process is backed by daily laboratory tests, computerized datalogging, and biosecure protocols.
                </p>
              </div>

              <div className="space-y-3">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border shadow-xs flex items-start gap-3.5 hover:border-[#A88134] transition-colors"
                    style={{ borderColor: theme.border }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${theme.primary}12` }}
                    >
                      <CheckCircle2 size={16} style={{ color: theme.accentGold }} />
                    </div>
                    <p className="text-[14.5px] sm:text-[15px] font-semibold text-slate-800 leading-snug">
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
                  className="flex items-center gap-3.5 mb-5 pb-4 border-b"
                  style={{ borderColor: theme.border }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${theme.primary}12` }}
                  >
                    <Layers size={24} style={{ color: theme.primary }} />
                  </div>
                  <div>
                    <h3 className="text-[19px] font-black uppercase" style={{ color: theme.primary }}>
                      Technical &amp; Hygiene Profile
                    </h3>
                    <p className="text-[14px] text-slate-600 font-medium">
                      Standardized dairy benchmarks
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
                      <span className="font-extrabold sm:text-right" style={{ color: theme.primary }}>
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

      {/* 4-Stage Operational Quality Pathway */}
      <section className="py-10 sm:py-12 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-9">
            <SectionLabel center>Quality Workflow</SectionLabel>
            <SectionHeading center className="mb-3">
              How We Execute &amp; Verify {service.title}
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[16.5px] font-medium" style={{ color: theme.textMuted }}>
              From initial herd health checks to automated processing and certified cold-chain delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.workflow.map((w) => (
              <div
                key={w.step}
                className="swiss-farm-card-hover relative p-6 rounded-3xl border bg-[#F4F8F4]/60 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-[16px] text-white mb-4 shadow-sm group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {w.step}
                  </div>
                  <h3
                    className="text-[18px] font-black mb-2 group-hover:text-[#A88134] transition-colors uppercase leading-snug"
                    style={{ color: theme.primary }}
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
                  className="pt-4 mt-5 border-t flex items-center gap-2"
                  style={{ borderColor: theme.border }}
                >
                  <ShieldCheck size={16} style={{ color: theme.accentGold }} />
                  <span
                    className="text-[13px] font-extrabold uppercase tracking-wider"
                    style={{ color: theme.accentGold }}
                  >
                    Stage {w.step} Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-10 sm:py-12 bg-[#F4F8F4] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center">
            <SectionLabel center>Dairy Inquiries</SectionLabel>
            <SectionHeading center className="mb-3">
              Frequently Asked Questions
            </SectionHeading>
            <p className="text-[15.5px] font-medium" style={{ color: theme.textMuted }}>
              Key clarifications regarding milk quality, biosecurity standards, and commercial supply contracts.
            </p>
          </div>

          <div className="space-y-3.5">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border bg-white overflow-hidden transition-all shadow-xs"
                  style={{ borderColor: isOpen ? theme.accentGold : theme.border }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F4F8F4]/60 transition-colors"
                  >
                    <span className="text-[15.5px] sm:text-[16.5px] font-extrabold" style={{ color: theme.primary }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#A88134]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="px-5 pb-5 text-[15px] font-medium leading-relaxed border-t pt-4"
                      style={{ borderColor: theme.border, color: theme.textMuted }}
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

      {/* Other Dairy Services Navigation Grid */}
      <section className="py-10 sm:py-12 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <SectionLabel>Comprehensive Portfolio</SectionLabel>
              <SectionHeading>Other Dairy &amp; Livestock Capabilities</SectionHeading>
            </div>
            <Link
              href="/group-companies/swiss-farm/services"
              className="inline-flex items-center gap-2 text-[15px] font-extrabold uppercase tracking-wider"
              style={{ color: theme.primary }}
            >
              <span>View All Capabilities</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/group-companies/swiss-farm/services/${other.slug}`}
                className="swiss-farm-card-hover p-6 rounded-3xl border bg-white shadow-xs group flex flex-col justify-between cursor-pointer"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="text-[12.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-lg"
                      style={{ backgroundColor: "rgba(168, 129, 52, 0.12)", color: theme.accentGold }}
                    >
                      {other.tag}
                    </span>
                    <span className="text-[13.5px] font-bold text-slate-600">{other.metrics[0].value}</span>
                  </div>
                  <h4 className="text-[19px] font-black mb-2 uppercase leading-snug" style={{ color: theme.primary }}>
                    {other.title}
                  </h4>
                  <p className="text-[14.5px] font-medium line-clamp-2" style={{ color: theme.textMuted }}>
                    {other.overview}
                  </p>
                </div>
                <div
                  className="mt-4 pt-3.5 border-t flex items-center justify-between text-[13.5px] font-extrabold uppercase tracking-wider"
                  style={{ borderColor: theme.border, color: theme.accentGold }}
                >
                  <span>View Full Details</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fast Inquiry & Consultation Desk CTA */}
      <section className="py-10 sm:py-12 bg-[#F4F8F4]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl border p-7 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-7"
            style={{
              backgroundColor: theme.primaryDark,
              borderColor: "rgba(224, 188, 111, 0.35)",
              color: "#FFFFFF",
            }}
          >
            <div className="max-w-2xl space-y-2.5">
              <span
                className="text-[13px] font-black uppercase tracking-widest block"
                style={{ color: theme.goldBright }}
              >
                COMMERCIAL DAIRY SOURCING DESK
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase leading-tight text-white">
                Request A Supply Proposal For {service.title}
              </h2>
              <p className="text-[15.5px] font-medium leading-relaxed text-[#D8E8DC]">
                Connect directly with our Chief Dairy Technologist to review milk quality parameters, butterfat guarantees, and refrigerated logistics.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/swiss-farm/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-extrabold text-[15px] text-center shadow-md hover:opacity-95 transition-all cursor-pointer"
                style={{ backgroundColor: theme.goldBright, color: theme.primaryDark }}
              >
                Request Dairy Quotation
              </Link>
              <a
                href="tel:00924238924737"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-extrabold text-[15px] border-2 border-white/80 text-white text-center transition-all hover:bg-white/10 cursor-pointer flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <SwissFarmFooter />
    </main>
  );
}
