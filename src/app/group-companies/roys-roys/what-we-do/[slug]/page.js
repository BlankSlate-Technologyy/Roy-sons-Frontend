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
  Wrench,
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

  const MainIcon = offering.icon || Wrench;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] overflow-hidden">
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
      <section className="relative bg-[#061426] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Ambient Background Gradients & Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#113658]/40 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#009088]/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-[#B49438]/15 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.06) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div
                data-aos="fade-down"
                data-aos-duration="600"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#B49438]/40 text-[#B49438] text-xs font-extrabold uppercase tracking-widest mb-4 backdrop-blur-md shadow-md"
              >
                <MainIcon size={15} className="text-[#B49438]" />
                <span>{offering.badge || "Service Offering"} • Service #{offering.number}</span>
              </div>

              <p
                data-aos="fade-up"
                data-aos-delay="50"
                className="text-[#B49438] text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] mb-2.5"
              >
                {offering.eyebrow}
              </p>

              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="700"
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] mb-5 text-white"
              >
                {offering.title}
              </h1>

              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
                className="text-white/85 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 max-w-2xl font-normal"
              >
                {offering.tagline}
              </p>

              {/* Quick Trust Highlights */}
              <div data-aos="fade-up" data-aos-delay="250" className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-white/90 text-xs font-semibold">
                  <ShieldCheck size={14} className="text-[#009088]" />
                  HTM 02-01 &amp; NFPA 99
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-white/90 text-xs font-semibold">
                  <CheckCircle2 size={14} className="text-[#009088]" />
                  ISO 13485 Cleanroom Spec
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 border border-white/15 text-white/90 text-xs font-semibold">
                  <Award size={14} className="text-[#B49438]" />
                  Turnkey EPC Delivery
                </span>
              </div>

              {/* Action Buttons */}
              <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap items-center gap-4">
                <Link
                  href="/group-companies/roys-roys/contact"
                  className="px-7 py-4 rounded-sm bg-[#B49438] hover:bg-[#009088] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-xl shadow-black/40"
                >
                  <span>Request Project Proposal</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/group-companies/roys-roys/what-we-do"
                  className="px-6 py-4 rounded-sm border border-white/30 hover:bg-white hover:text-[#061426] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 backdrop-blur-xs"
                >
                  <ArrowLeft size={14} />
                  <span>All 15 Service Offerings</span>
                </Link>
              </div>
            </div>

            {/* Right Showcase Card Column */}
            <div className="lg:col-span-5" data-aos="fade-left" data-aos-duration="800">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Ambient Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#B49438]/30 via-[#009088]/30 to-[#113658]/30 rounded-3xl blur-xl opacity-70" />

                <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-black/70 bg-[#0b2138] group">
                  {/* Main Visual */}
                  <div className="relative h-[320px] sm:h-[380px] w-full overflow-hidden">
                    <Image
                      src={offering.image || "/images/roys/hospital_engineering_hero.jpg"}
                      alt={offering.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Cinematic Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-transparent to-black/30" />

                    {/* Top Floating Badge */}
                    <div className="absolute top-4 left-4 backdrop-blur-md bg-[#061426]/85 border border-white/20 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-[#009088] animate-pulse" />
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-white">
                        Grade-A Cleanroom Spec
                      </span>
                    </div>

                    {/* Bottom Spec Preview */}
                    <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-[#061426]/90 border border-white/20 p-3.5 rounded-xl shadow-xl">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-[#B49438] font-black uppercase tracking-wider">
                          Healthcare MEP Engineering
                        </span>
                        <span className="text-[#009088] font-bold">Turnkey EPC</span>
                      </div>
                      <p className="text-white/90 text-xs line-clamp-1 font-medium">
                        MGPS Gas Pipeline • Modular OTs • Isolated Power Systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stat Highlights */}
          {offering.stats && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/10">
              {offering.stats.map((stat, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={350 + i * 80}
                  className="p-5 rounded-xl bg-[#0b2038]/90 border border-white/15 backdrop-blur-md hover:border-[#B49438]/50 transition-all shadow-lg shadow-black/20"
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#B49438] tracking-tight mb-1 font-mono">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-[13px] text-white/80 font-bold tracking-wide uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── Service Switcher Tabs ────────────────────────────────────────────── */}
      <section data-aos="fade-up" className="bg-white border-b border-[#e2e8f0] sticky top-[68px] z-40 shadow-xs hidden md:block">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748b] mr-2 shrink-0">
              Explore Offerings:
            </span>
            {OFFERINGS_LIST.map((item) => {
              const isActive =
                item.slug === offering.slug ||
                (offering.originalSlug && item.slug === offering.originalSlug) ||
                (slug && (item.slug === slug || slug.startsWith(item.slug)));
              const TabIcon = item.icon || Wrench;
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
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7" data-aos="fade-right" data-aos-duration="700">
            <div className="inline-flex items-center gap-2 text-[#009088] text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] mb-3">
              <Sparkles size={16} />
              <span>COMPREHENSIVE OFFERING OVERVIEW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#113658] tracking-tight leading-snug mb-6">
              Delivering Excellence in {offering.title}
            </h2>
            <div className="space-y-4 text-[#334155] leading-relaxed text-base sm:text-[17.5px]">
              {(offering.overview || []).map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-[#e2e8f0]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#009088]" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1e293b]">
                  ISO 9001 / 13485 Certified
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#009088]" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1e293b]">
                  CE &amp; FDA Compliant Systems
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#009088]" />
                <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#1e293b]">
                  End-to-End Turnkey Execution
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" data-aos="fade-left" data-aos-duration="800">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#113658] group">
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src={offering.secondaryImage || offering.image || "/images/roys/hospital_mgps_infrastructure.jpg"}
                  alt={offering.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020f1f]/90 via-[#020f1f]/30 to-transparent" />
                <div className="absolute top-4 left-4 backdrop-blur-md bg-[#0b2138]/85 border border-white/20 px-3 py-1 rounded-full flex items-center gap-2 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-[#B49438]" />
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-white">
                    MGPS &amp; Cleanroom Plant
                  </span>
                </div>
              </div>
              <div className="p-6 bg-[#113658] text-white">
                <div className="flex items-center gap-3 mb-2">
                  <MainIcon size={24} className="text-[#B49438]" />
                  <h3 className="text-lg font-black">{offering.title}</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed font-normal">
                  Delivered with the standard of excellence, reliability, and precision of ROYS &amp; ROYS International.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Pillars / Key Capabilities ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeading
            eyebrow="SPECIALIZED CAPABILITIES"
            title={`Core Pillars of ${offering.title}`}
            subtitle="Engineered with international standards, quality assurance, and proven commercial reliability."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(offering.keyPillars || []).map((pillar, idx) => {
              const PillarIcon = pillar.icon || CheckCircle2;
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="p-6 rounded-xl border border-[#e2e8f0] bg-white hover:border-[#113658] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#113658]/10 text-[#113658] flex items-center justify-center mb-5 group-hover:bg-[#113658] group-hover:text-white transition-colors duration-300">
                      <PillarIcon size={24} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-[#113658] mb-2.5 group-hover:text-[#009088] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[15.5px] sm:text-[16.5px] text-[#475569] leading-relaxed font-normal">
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
      <section className="py-20 px-6 bg-[#0c233c] text-white">
        <div className="mx-auto max-w-screen-xl">
          <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#B49438] text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] mb-2">
              COMPREHENSIVE PORTFOLIO
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Scope of Services &amp; Deliverables
            </h2>
            <div className="w-14 h-1 bg-[#B49438] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {(offering.scopeOfServices || []).map((scope, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 60}
                className="flex items-center gap-4 p-4.5 sm:p-5 rounded-xl bg-white/[0.07] border border-white/15 hover:bg-white/[0.12] hover:border-[#B49438]/50 transition-all duration-300 shadow-md group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#B49438]/25 flex items-center justify-center shrink-0 text-[#B49438] group-hover:bg-[#B49438] group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-[16px] sm:text-[17px] font-bold text-white leading-snug">
                  {scope}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4-Step Delivery Workflow ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeading
            eyebrow="EXECUTION METHODOLOGY"
            title="Structured 4-Step Project Delivery"
            subtitle="From initial assessment and procurement planning to verified quality delivery and ongoing support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(offering.workflow || []).map((w, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:shadow-xl hover:border-[#113658]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-[#113658]/25 mb-3 font-mono">
                    {w.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#113658] mb-2.5">
                    {w.title}
                  </h3>
                  <p className="text-[15.5px] sm:text-[16.5px] text-[#475569] leading-relaxed font-normal">
                    {w.desc}
                  </p>
                </div>
                <div className="w-10 h-1 bg-[#009088] mt-6 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Key Benefits & Industries Grid ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Key Advantages */}
          <div data-aos="fade-right" data-aos-duration="700" className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#009088] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3.5">
                <Award size={18} />
                <span>KEY VALUE ADVANTAGES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#113658] mb-7 tracking-tight">
                Why Choose Roys &amp; Roys
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {(offering.benefits || []).map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-[#009088]/15 text-[#009088] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-base sm:text-[17px] text-[#334155] font-medium leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Target Industries */}
          <div data-aos="fade-left" data-aos-duration="700" className="p-8 sm:p-10 rounded-2xl bg-[#113658] text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#B49438] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3.5">
                <Building2 size={18} />
                <span>TARGET SECTORS &amp; CLIENTS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-7 tracking-tight">
                Industries We Empower
              </h3>
              <div className="space-y-3.5 mb-8">
                {(offering.industries || []).map((ind, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-[15.5px] sm:text-base font-semibold text-white/95 hover:bg-white/10 transition-colors"
                  >
                    <Building2 size={18} className="text-[#B49438] shrink-0" />
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs sm:text-sm text-white/70 uppercase tracking-wider font-bold">
                Quality Standards
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-[#B49438]">
                WHO / ISO / CE / PPRA
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ───────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-screen-md">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED"
            title="Common Questions &amp; Inquiries"
            subtitle="Get quick answers regarding procurement terms, quality certifications, delivery timelines, and technical support."
          />

          <div className="space-y-3.5 sm:space-y-4">
            {(offering.faqs || []).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="rounded-xl border border-[#e2e8f0] overflow-hidden transition-all duration-200 hover:border-[#113658]/30 shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 bg-white hover:bg-[#f8fafc] transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-[#113658] leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-[#113658] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 sm:p-6 pt-0 bg-[#f8fafc] text-base sm:text-[16.5px] text-[#334155] leading-relaxed border-t border-[#f1f5f9]">
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
      <section data-aos="fade-up" data-aos-duration="700" className="py-16 px-6 bg-[#020f1f] text-white">
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
              <span>View All</span>
            </Link>
          </div>
        </div>
      </section>

      <RoysFooter />
    </div>
  );
}
