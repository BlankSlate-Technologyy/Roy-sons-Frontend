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
  Mail,
  HelpCircle,
  ChevronDown,
  Building2,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowLeft,
} from "lucide-react";
import { RoysNavbar, RoysFooter, RoysButton, SectionHeading } from "../../_shared";
import { OFFERINGS_LIST, getOfferingBySlug } from "../../offerings-data";

export default function OfferingDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const offering = getOfferingBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!offering) {
    notFound();
  }

  const MainIcon = offering.icon;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827]">
      <RoysNavbar active="What We Do" />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#f1f5f9] border-b border-[#e2e8f0] py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-[#64748b]">
          <Link href="/group-companies/roys-roys" className="hover:text-[#113658] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <Link href="/group-companies/roys-roys/what-we-do" className="hover:text-[#113658] transition-colors">
            Our Service Offerings
          </Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-[#113658] truncate">{offering.title}</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0b2138] text-white py-16 lg:py-20 px-6 overflow-hidden">
        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071728] via-[#0b2138] to-[#113658] opacity-95" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden lg:block">
          <Image
            src={offering.image || "/roys_hospital_interior.png"}
            alt={offering.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#B49438] text-xs font-bold uppercase tracking-widest mb-4">
              <MainIcon size={15} />
              <span>{offering.badge || "Service Offering"} • Service #{offering.number}</span>
            </div>

            <p className="text-[#B49438] text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] mb-2">
              {offering.eyebrow}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-5 text-white">
              {offering.title}
            </h1>

            <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed mb-8">
              {offering.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/group-companies/roys-roys/contact"
                className="px-6 py-3.5 rounded-sm bg-[#B49438] hover:bg-[#113658] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/20"
              >
                <span>Request Project Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/group-companies/roys-roys/what-we-do"
                className="px-5 py-3.5 rounded-sm border border-white/40 hover:bg-white hover:text-[#113658] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
              >
                <ArrowLeft size={14} />
                <span>All 15 Service Offerings</span>
              </Link>
            </div>
          </div>

          {/* Quick Stat Highlights */}
          {offering.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/10">
              {offering.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs">
                  <p className="text-2xl sm:text-3xl font-black text-[#B49438] tracking-tight mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-white/70 font-semibold tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── Service Switcher Tabs ────────────────────────────────────────────── */}
      <section className="bg-white border-b border-[#e2e8f0] sticky top-[68px] z-40 shadow-xs hidden md:block">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748b] mr-2 shrink-0">
              Explore Offerings:
            </span>
            {OFFERINGS_LIST.map((item) => {
              const isActive = item.slug === offering.slug;
              const TabIcon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={`/group-companies/roys-roys/what-we-do/${item.slug}`}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all shrink-0 ${
                    isActive
                      ? "bg-[#113658] text-white shadow-sm"
                      : "bg-[#f8fafc] text-[#475569] hover:bg-[#e2e8f0] hover:text-[#113658]"
                  }`}
                >
                  <TabIcon size={13} className={isActive ? "text-[#B49438]" : "text-[#64748b]"} />
                  <span>{item.number}. {item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Detailed Overview Section ────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[#009088] text-xs font-extrabold uppercase tracking-[0.2em] mb-3">
              <Sparkles size={14} />
              <span>COMPREHENSIVE OFFERING OVERVIEW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#113658] tracking-tight leading-snug mb-6">
              Delivering Excellence in {offering.title}
            </h2>
            <div className="space-y-4 text-[#334155] leading-relaxed text-base sm:text-[17px]">
              {offering.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-[#e2e8f0]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#009088]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1e293b]">
                  ISO 9001 / 13485 Certified
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#009088]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1e293b]">
                  CE & FDA Compliant Systems
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#009088]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1e293b]">
                  End-to-End Turnkey Execution
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#113658]">
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src={offering.image || "/roys_hospital_interior.png"}
                  alt={offering.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020f1f]/80 via-transparent to-transparent" />
              </div>
              <div className="p-6 bg-[#113658] text-white">
                <div className="flex items-center gap-3 mb-2">
                  <MainIcon size={24} className="text-[#B49438]" />
                  <h3 className="text-lg font-black">{offering.title}</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Delivered with the standard of excellence, reliability, and precision of ROYS & ROYS International.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Pillars / Key Capabilities ──────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeading
            eyebrow="SPECIALIZED CAPABILITIES"
            title={`Core Pillars of ${offering.title}`}
            subtitle="Engineered with international standards, quality assurance, and proven commercial reliability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offering.keyPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-[#e2e8f0] bg-white hover:border-[#113658] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#113658]/10 text-[#113658] flex items-center justify-center mb-5 group-hover:bg-[#113658] group-hover:text-white transition-colors duration-300">
                      <PillarIcon size={24} />
                    </div>
                    <h3 className="text-lg font-black text-[#113658] mb-2.5 group-hover:text-[#009088] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-[15px] text-[#475569] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#f1f5f9] flex items-center gap-1.5 text-xs font-extrabold text-[#113658] uppercase tracking-wider group-hover:text-[#009088]">
                    <span>Institutional Standard</span>
                    <CheckCircle2 size={13} className="text-[#009088]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Scope of Services Portfolio ──────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#0c233c] text-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#B49438] text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
              COMPREHENSIVE PORTFOLIO
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Scope of Services &amp; Deliverables
            </h2>
            <div className="w-12 h-1 bg-[#B49438] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {offering.scopeOfServices.map((scope, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#B49438]/20 flex items-center justify-center shrink-0 text-[#B49438]">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-[14.5px] font-semibold text-white/95 leading-snug">
                  {scope}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4-Step Delivery Workflow ─────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeading
            eyebrow="EXECUTION METHODOLOGY"
            title="Structured 4-Step Project Delivery"
            subtitle="From initial assessment and procurement planning to verified quality delivery and ongoing support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offering.workflow.map((w, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-black text-[#113658]/20 mb-3 font-mono">
                  {w.step}
                </div>
                <h3 className="text-base font-black text-[#113658] mb-2">
                  {w.title}
                </h3>
                <p className="text-sm sm:text-[14.5px] text-[#64748b] leading-relaxed">
                  {w.desc}
                </p>
                <div className="w-8 h-0.5 bg-[#009088] mt-4 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Key Benefits & Industries Grid ───────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key Advantages */}
          <div className="p-8 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
            <div className="inline-flex items-center gap-2 text-[#009088] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Award size={16} />
              <span>KEY VALUE ADVANTAGES</span>
            </div>
            <h3 className="text-2xl font-black text-[#113658] mb-6">
              Why Choose Roys &amp; Roys
            </h3>
            <div className="space-y-4">
              {offering.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#009088]/10 text-[#009088] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={13} />
                  </div>
                  <p className="text-sm sm:text-[15px] text-[#475569] font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Target Industries */}
          <div className="p-8 rounded-2xl bg-[#113658] text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#B49438] text-xs font-extrabold uppercase tracking-widest mb-3">
                <Building2 size={16} />
                <span>TARGET SECTORS &amp; CLIENTS</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-6">
                Industries We Empower
              </h3>
              <div className="space-y-3 mb-8">
                {offering.industries.map((ind, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 text-sm font-semibold text-white/95"
                  >
                    <Building2 size={15} className="text-[#B49438] shrink-0" />
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-white/70 uppercase tracking-wider font-bold">
                Quality Standards
              </span>
              <span className="text-xs font-extrabold text-[#B49438]">
                WHO / ISO / CE / PPRA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ───────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-md">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED"
            title="Common Questions &amp; Inquiries"
            subtitle="Get quick answers regarding procurement terms, quality certifications, delivery timelines, and technical support."
          />

          <div className="space-y-3">
            {offering.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-lg border border-[#e2e8f0] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-[#f8fafc] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#113658]">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#113658] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 bg-[#f8fafc] text-sm sm:text-[15px] text-[#475569] leading-relaxed border-t border-[#f1f5f9]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#020f1f] text-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-[#B49438] text-xs font-extrabold uppercase tracking-[0.3em] mb-3">
            GET IN TOUCH WITH OUR SPECIALISTS
          </p>
          <h2 className="text-2xl sm:text-4xl font-black mb-4 text-white">
            Ready to Discuss Your {offering.title} Requirements?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Our specialized team is ready to assist with tender specifications, product catalogs, customized pricing, and global logistics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/group-companies/roys-roys/contact"
              className="px-8 py-4 rounded-sm bg-[#B49438] hover:bg-[#009088] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-xl shadow-black/40"
            >
              <span>Submit Project Inquiry</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/group-companies/roys-roys/what-we-do"
              className="px-6 py-4 rounded-sm border border-white/30 hover:bg-white hover:text-[#020f1f] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>View All 15 Service Offerings</span>
            </Link>
          </div>
        </div>
      </section>

      <RoysFooter />
    </div>
  );
}
