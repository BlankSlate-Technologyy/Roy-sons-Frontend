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
  ChevronDown,
  Building2,
  ShieldCheck,
  Award,
  Sparkles,
  ArrowLeft,
  Activity,
  Layers,
  Hospital,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import {
  PRIVATE_SECTORS_LIST,
  getPrivateSectorBySlug,
} from "@/lib/private-sectors-data";

export default function PrivateSectorDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const sector = getPrivateSectorBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!sector) {
    notFound();
  }

  const MainIcon = sector.icon;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#042E3A]" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
      <HeaderNavbar />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#f0fdfa] border-b border-[#0a7a8c]/15 py-3.5 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs sm:text-sm text-neutral-600">
          <Link href="/" className="hover:text-[#0a7a8c] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} className="text-[#0a7a8c]/60" />
          <Link href="/about" className="hover:text-[#0a7a8c] transition-colors">
            About Us
          </Link>
          <ChevronRight size={13} className="text-[#0a7a8c]/60" />
          <Link href="/private-sector" className="hover:text-[#0a7a8c] transition-colors">
            Private Sector
          </Link>
          <ChevronRight size={13} className="text-[#0a7a8c]/60" />
          <span className="font-bold text-[#042E3A] truncate">{sector.title}</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#f0fdfa] via-white to-white py-14 sm:py-20 px-6 overflow-hidden border-b border-neutral-200/80">
        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#f0fdfa] border border-[#0a7a8c]/30 text-[#0a7a8c] text-xs font-black uppercase tracking-widest mb-4 shadow-xs">
                <MainIcon size={16} />
                <span>{sector.badge || "Private Sector Client"}</span>
              </div>

              <p className="text-[#0a7a8c] text-xs sm:text-sm font-black uppercase tracking-[0.25em] mb-2">
                {sector.eyebrow}
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-5 text-[#042E3A]">
                {sector.title}
              </h1>

              <div className="h-[3px] w-16 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] mb-6 rounded-full" />

              <p className="text-neutral-700 text-base sm:text-lg lg:text-[19px] leading-relaxed mb-8">
                {sector.tagline}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="rs-cta-btn px-7 py-3.5 rounded-lg text-white font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <span>Request Commercial Proposal</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/private-sector"
                  className="px-6 py-3.5 rounded-lg border border-[#0a7a8c]/40 hover:bg-[#f0fdfa] text-[#042E3A] font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
                >
                  <ArrowLeft size={14} />
                  <span>Back to Private Clients</span>
                </Link>
              </div>

              {/* Quick Stat Highlights */}
              {sector.stats && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-[#0a7a8c]/20">
                  {sector.stats.map((stat, i) => (
                    <div key={i} className="p-3.5 sm:p-4 rounded-xl bg-white border border-[#0a7a8c]/20 shadow-xs hover:border-[#0a7a8c]/40 hover:shadow-md transition-all">
                      <p className="text-2xl sm:text-3xl font-black text-[#0a7a8c] tracking-tight mb-1 font-mono">
                        {stat.value}
                      </p>
                      <p className="text-[11px] sm:text-xs text-[#042E3A] font-bold tracking-wider uppercase">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#0a7a8c]/25 bg-white group">
                <div className="relative h-80 sm:h-96 w-full">
                  <Image
                    src={sector.heroImage}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042E3A]/80 via-transparent to-transparent" />
                </div>
                <div className="p-6 bg-[#f0fdfa] text-[#042E3A] border-t border-[#0a7a8c]/20">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#0a7a8c]/30 text-[#0a7a8c] flex items-center justify-center shrink-0">
                      <MainIcon size={22} />
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-wider text-[#042E3A]">{sector.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    Engineered with corporate precision, operational resilience, and direct manufacturer warranties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quick Sector Switcher Bar ────────────────────────────────────────── */}
      <section className="bg-white border-b border-neutral-200 sticky top-0 z-40 shadow-xs hidden md:block">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3.5 no-scrollbar">
            <span className="text-xs font-black uppercase tracking-wider text-[#042E3A] mr-2 shrink-0">
              Private Clients:
            </span>
            {PRIVATE_SECTORS_LIST.map((item) => {
              const isActive = item.slug === sector.slug;
              const TabIcon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={`/private-sector/${item.slug}`}
                  className={`px-3.5 py-2 rounded-lg text-xs font-black uppercase tracking-wider whitespace-nowrap flex items-center gap-2 transition-all shrink-0 ${
                    isActive
                      ? "rs-cta-btn text-white shadow-sm"
                      : "bg-[#f0fdfa] border border-[#0a7a8c]/20 text-[#042E3A] hover:bg-[#0a7a8c]/10 hover:text-[#0a7a8c]"
                  }`}
                >
                  <TabIcon size={14} className={isActive ? "text-white" : "text-[#0a7a8c]"} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Sector Overview Section ─────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[#0a7a8c] text-xs font-black uppercase tracking-[0.2em] mb-3">
              <Sparkles size={14} />
              <span>COMMERCIAL &amp; INDUSTRIAL EXCELLENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042E3A] tracking-tight uppercase leading-snug mb-5">
              Tailored Solutions for {sector.title}
            </h2>
            <div className="h-[3px] w-14 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] mb-6 rounded-full" />
            <div className="space-y-4 text-neutral-800 leading-relaxed text-base sm:text-lg lg:text-[19px]">
              {sector.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-[#0a7a8c]/20">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#0a7a8c]" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#042E3A]">
                  Global OEM Partnerships
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#0a7a8c]" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#042E3A]">
                  ISO 9001 / 13485 Standards
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#0a7a8c]" />
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#042E3A]">
                  Turnkey Execution
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-[#f0fdfa] border-2 border-[#0a7a8c]/25 shadow-lg flex flex-col justify-between">
              <div className="inline-flex items-center gap-2 text-[#0a7a8c] text-xs font-black uppercase tracking-widest mb-3">
                <ShieldCheck size={16} />
                <span>COMMERCIAL ASSURANCE FRAMEWORK</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wider text-[#042E3A] mb-4">
                Enterprise Reliability &amp; Warranty
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6">
                Our commercial contracts provide corporate clients with guaranteed delivery milestones, pre-vetted OEM supply chains, rigorous QA inspection, and ongoing maintenance service levels.
              </p>
              <div className="space-y-3 pt-4 border-t border-[#0a7a8c]/20">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#042E3A]">
                  <CheckCircle2 size={16} className="text-[#0a7a8c] shrink-0" />
                  <span>Direct OEM Manufacturer Warranties</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#042E3A]">
                  <CheckCircle2 size={16} className="text-[#0a7a8c] shrink-0" />
                  <span>Dedicated Project Managers &amp; Engineers</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-bold text-[#042E3A]">
                  <CheckCircle2 size={16} className="text-[#0a7a8c] shrink-0" />
                  <span>Rapid Spare Parts &amp; Technical SLAs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Pillars / Key Capabilities ──────────────────────────────────── */}
      <section className="py-16 px-6 bg-neutral-50/60 border-y border-neutral-200/60">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] text-[#0a7a8c] uppercase mb-3 block">
              SPECIALIZED CAPABILITIES
            </span>
            <h2 className="text-[26px] sm:text-[34px] font-black uppercase tracking-[0.18em] text-[#042E3A]">
              Key Offerings for {sector.label}
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-14 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] rounded-full" />
            <p className="text-base sm:text-lg text-neutral-700 mt-4 max-w-xl mx-auto leading-relaxed">
              Tailored systems, equipment supply, and engineering infrastructure designed for private enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sector.keyPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-xl border border-[#0a7a8c]/20 bg-white hover:border-[#0a7a8c]/60 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-[#f0fdfa] border border-[#0a7a8c]/30 text-[#0a7a8c] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#0a7a8c] group-hover:text-white transition-all duration-300 shadow-sm">
                      <PillarIcon size={28} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-[#042E3A] mb-3 uppercase tracking-wider group-hover:text-[#0a7a8c] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-[#0a7a8c]/15 flex items-center gap-1.5 text-xs font-black text-[#042E3A] uppercase tracking-wider">
                    <span>Commercial Grade</span>
                    <CheckCircle2 size={13} className="text-[#0a7a8c]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Technology & Deliverables Catalog ────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#0a7a8c] text-xs font-black uppercase tracking-[0.25em] mb-2">
              SYSTEMS &amp; MACHINERY PORTFOLIO
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#042E3A]">
              Featured Lineup for {sector.title}
            </h2>
            <div className="w-14 h-[3px] bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {sector.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-4 rounded-xl bg-[#f0fdfa] border border-[#0a7a8c]/20 shadow-xs hover:border-[#0a7a8c]/50 hover:shadow-md transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#0a7a8c]/30 flex items-center justify-center shrink-0 text-[#0a7a8c]">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-sm sm:text-base font-bold text-[#042E3A] leading-snug">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4-Step Project Execution Workflow ─────────────────────────────────── */}
      <section className="py-16 px-6 bg-neutral-50/60 border-y border-neutral-200/60">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] text-[#0a7a8c] uppercase mb-3 block">
              WORKFLOW METHODOLOGY
            </span>
            <h2 className="text-[26px] sm:text-[34px] font-black uppercase tracking-[0.18em] text-[#042E3A]">
              Structured Project Implementation
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-14 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] rounded-full" />
            <p className="text-base sm:text-lg text-neutral-700 mt-4 max-w-xl mx-auto leading-relaxed">
              From business requirements and architectural engineering to certified installation and post-warranty service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sector.workflow.map((w, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-xl bg-white border border-[#0a7a8c]/20 shadow-xs hover:border-[#0a7a8c]/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-black text-[#0a7a8c]/40 mb-3 font-mono">
                  {w.step}
                </div>
                <h3 className="text-base sm:text-lg font-black uppercase tracking-wider text-[#042E3A] mb-2">
                  {w.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {w.desc}
                </p>
                <div className="w-10 h-[3px] bg-gradient-to-r from-[#0a7a8c] to-[#0d9488] mt-4 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits & Target Clients ────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Key Advantages */}
          <div className="p-8 rounded-2xl bg-white border-2 border-[#0a7a8c]/25 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#0a7a8c] text-xs font-black uppercase tracking-widest mb-3">
                <Award size={18} className="text-[#0a7a8c]" />
                <span>COMMERCIAL ADVANTAGES</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wider text-[#042E3A] mb-6">
                Why Partner With ROYSONS
              </h3>
              <div className="space-y-4">
                {sector.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#f0fdfa] text-[#0a7a8c] border border-[#0a7a8c]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={14} />
                    </div>
                    <p className="text-sm sm:text-base text-[#042E3A] font-semibold leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Target Industry Sub-Segments */}
          <div className="p-8 rounded-2xl bg-[#f0fdfa] border-2 border-[#0a7a8c]/30 shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#0a7a8c] text-xs font-black uppercase tracking-widest mb-3">
                <Building2 size={18} />
                <span>SECTORS &amp; ENTERPRISES SERVED</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wider text-[#042E3A] mb-6">
                Client Categories in this Sector
              </h3>
              <div className="space-y-3 mb-8">
                {sector.targetClients.map((client, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3.5 rounded-lg bg-white border border-[#0a7a8c]/20 text-sm font-bold text-[#042E3A] shadow-xs"
                  >
                    <Building2 size={16} className="text-[#0a7a8c] shrink-0" />
                    <span>{client}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#0a7a8c]/20 flex items-center justify-between">
              <span className="text-xs text-neutral-600 uppercase tracking-wider font-bold">
                Quality Assurance
              </span>
              <span className="text-xs font-black text-[#0a7a8c] uppercase tracking-wider">
                ISO 9001 / CE / OEM Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ───────────────────────────────────────── */}
      <section className="py-16 px-6 bg-neutral-50/60 border-t border-neutral-200/60">
        <div className="mx-auto max-w-screen-md">
          <div className="text-center mb-14">
            <span className="text-xs font-black tracking-[0.25em] text-[#0a7a8c] uppercase mb-3 block">
              FREQUENTLY ASKED
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-black uppercase tracking-[0.18em] text-[#042E3A]">
              Commercial Inquiries &amp; FAQs
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-14 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488] rounded-full" />
          </div>

          <div className="space-y-3">
            {sector.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#0a7a8c]/20 overflow-hidden transition-colors bg-white shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-[#f0fdfa] transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-black text-[#042E3A] uppercase tracking-wide">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-[#0a7a8c] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 bg-[#f0fdfa]/50 text-sm sm:text-base text-neutral-800 leading-relaxed border-t border-[#0a7a8c]/10">
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
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div
            id="cta-consultation-banner"
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl py-12 sm:py-16 px-6 sm:px-12 text-center flex flex-col items-center justify-center border border-white/20 shadow-xl"
            style={{
              background: "linear-gradient(90deg, #0284c7 0%, #0891b2 50%, #10b981 100%)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="text-white/90 text-xs font-black uppercase tracking-[0.3em] mb-3">
                COMMERCIAL PARTNERSHIP
              </p>
              <h2 className="text-2xl sm:text-4xl font-black uppercase mb-4 text-white">
                Discuss Your {sector.title} Requirements
              </h2>
              <p className="text-white/95 max-w-2xl mx-auto text-base sm:text-lg mb-8 leading-relaxed">
                Our corporate business development and engineering teams are ready to discuss equipment configurations, commercial pricing, and turnkey delivery.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  id="cta-consultation-pill-btn"
                  className="btn-white-pill inline-flex items-center justify-center bg-white text-[#042630] font-bold text-[14px] sm:text-[15px] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>Submit Commercial Inquiry</span>
                  <ArrowRight size={15} className="ml-2" />
                </Link>
                <Link
                  href="/private-sector"
                  className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 text-white font-bold text-[14px] sm:text-[15px] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full border border-white/40 transition-all duration-300"
                >
                  <span>View All Private Sector Clients</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </div>
  );
}
