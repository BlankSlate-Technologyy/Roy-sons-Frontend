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
import { SERVICES_LIST, getServiceBySlug } from "../../services-data";

const COLORS = {
  primary:     "#113658",
  primaryDark: "#0a2238",
  gold:        "#B49438",
  white:       "#ffffff",
  black:       "#000000",
  border:      "#e2e8f0",
  light:       "#f8fafc",
  teal:        "#009088",
  muted:       "#4a5568",
};

export default function ServiceDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const service = getServiceBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    notFound();
  }

  const MainIcon = service.icon;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] overflow-hidden">
      <RoysNavbar active="Solutions" />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#f1f5f9] border-b border-[#e2e8f0] py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-[#64748b]">
          <Link href="/group-companies/roys-roys" className="hover:text-[#113658] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <Link href="/group-companies/roys-roys/services" className="hover:text-[#113658] transition-colors">
            Core Business Areas
          </Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-[#113658] truncate">{service.title}</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#051324] via-[#0b2138] to-[#071728] text-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden border-b border-white/10">
        {/* Ambient Glows and Architectural Grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#B49438]/12 blur-[120px]" />
          <div className="absolute top-1/2 -right-32 w-[480px] h-[480px] rounded-full bg-[#009088]/15 blur-[140px]" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          {/* 2-Column Hero Grid: Left Content + Right Luxury Framed Visual Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Eyebrow, Badges & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Service Category Pill */}
              <div
                data-aos="fade-down"
                data-aos-duration="600"
                className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d223c]/90 border border-[#b49438]/40 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                <MainIcon size={14} className="text-[#d4af37]" />
                <span className="text-[#d4af37] text-[11px] font-extrabold uppercase tracking-[0.2em]">
                  {service.badge || "Core Engineering Division"}
                </span>
              </div>

              {/* Eyebrow & Complete Title */}
              <div className="space-y-3">
                <p
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className="text-[#d4af37] text-xs sm:text-sm font-black uppercase tracking-[0.28em] drop-shadow-sm"
                >
                  {service.eyebrow || "ENGINEERING SOLUTIONS & HEALTHCARE SYSTEMS"}
                </p>

                {/* Complete Title */}
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="700"
                  className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[52px] font-black tracking-tight leading-[1.12] text-white"
                >
                  {service.title}
                </h1>
              </div>

              {/* High-Impact Tagline / Subtitle */}
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
                className="text-slate-100 text-base sm:text-lg lg:text-[19px] leading-relaxed max-w-2xl font-normal drop-shadow-sm"
              >
                {service.tagline}
              </p>

              {/* Trust Quality Pills */}
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="flex flex-wrap items-center gap-2.5 pt-1"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-slate-100 shadow-xs">
                  <ShieldCheck size={14} className="text-[#38bdf8]" />
                  <span>ISO 9001 &amp; ISO 13485 Certified</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-slate-100 shadow-xs">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Turnkey EPC Execution</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs font-semibold text-slate-100 shadow-xs">
                  <Award size={14} className="text-[#d4af37]" />
                  <span>CE &amp; FDA Compliant Systems</span>
                </div>
              </div>

              {/* CTAs: [ Request Project Proposal ] [ Explore Capabilities ] */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-wrap items-center gap-3.5 pt-3"
              >
                <Link
                  href="/group-companies/roys-roys/contact"
                  className="roys-quote-btn px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#b49438] via-[#a8832a] to-[#8c6b1f] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/30 hover:scale-[1.02] cursor-pointer"
                  style={{ color: "#ffffff" }}
                >
                  <span className="text-white font-black" style={{ color: "#ffffff" }}>Request Project Proposal</span>
                  <ArrowRight size={15} className="text-white" style={{ color: "#ffffff" }} />
                </Link>
                <a
                  href="#capabilities"
                  className="roys-quote-btn px-6 py-3.5 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white/50 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
                  style={{ color: "#ffffff" }}
                >
                  <span className="text-white font-bold" style={{ color: "#ffffff" }}>Explore Capabilities</span>
                  <ChevronRight size={14} className="text-white" style={{ color: "#ffffff" }} />
                </a>
                <Link
                  href="/group-companies/roys-roys/services"
                  className="px-4 py-3.5 text-slate-300 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  <ArrowLeft size={14} />
                  <span>All Services</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Luxury Framed Visual Showcase Card (Hero Image) */}
            <div
              className="lg:col-span-5"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="relative w-full h-[360px] sm:h-[430px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#0c1f36] group">
                <Image
                  src={service.heroImage || "/images/roys/services/healthcare-technologies.jpg"}
                  alt={`${service.title} Visual Showcase`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Subtle vignette gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/30 to-transparent" />

                {/* Top Corner Floating Spec Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#061426]/90 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-lg">
                  <Award size={14} className="text-[#d4af37]" />
                  <span className="text-[11px] tracking-wide font-extrabold text-white">Grade-A Engineering Spec</span>
                </div>

                {/* Bottom Overlay Glass Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl sm:rounded-2xl bg-[#061426]/90 backdrop-blur-md border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-black uppercase text-[#d4af37] tracking-wider flex items-center gap-1.5">
                      <Sparkles size={13} />
                      {service.title} Systems
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 border border-emerald-500/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-200 font-medium leading-relaxed">
                    Turnkey Engineering &bull; Advanced Technology &bull; Regulatory Compliance &bull; 24/7 SLA
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Stat Highlights */}
          {service.stats && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-12 pt-8 border-t border-white/15">
              {service.stats.map((stat, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={350 + i * 80}
                  className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#0c223c]/80 border border-white/15 backdrop-blur-md shadow-md hover:border-[#b49438]/50 transition-colors duration-300"
                >
                  <p className="text-2xl sm:text-3xl font-black text-[#d4af37] tracking-tight mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-200 font-bold tracking-wide uppercase">
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
              Other Services:
            </span>
            {SERVICES_LIST.map((item) => {
              const isActive = item.slug === service.slug;
              const TabIcon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={`/group-companies/roys-roys/services/${item.slug}`}
                  className={`px-3.5 py-2 rounded-md text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all shrink-0 ${
                    isActive
                      ? "bg-[#113658] text-white shadow-sm"
                      : "bg-[#f8fafc] text-[#475569] hover:bg-[#e2e8f0] hover:text-[#113658]"
                  }`}
                >
                  <TabIcon size={14} className={isActive ? "text-[#B49438]" : "text-[#64748b]"} />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Detailed Overview Section ────────────────────────────────────────── */}
      <section id="overview" className="py-16 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7" data-aos="fade-right" data-aos-duration="700">
            <div className="inline-flex items-center gap-2 text-[#009088] text-xs font-extrabold uppercase tracking-[0.2em] mb-3">
              <Sparkles size={14} />
              <span>DIVISIONAL OVERVIEW</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#113658] tracking-tight leading-snug mb-6">
              Delivering Excellence in {service.title}
            </h2>
            <div className="space-y-4 text-[#334155] leading-relaxed text-base sm:text-[17px]">
              {service.overview.map((para, idx) => (
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
                  Turnkey Handover
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" data-aos="fade-left" data-aos-duration="800">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#113658]">
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src={service.aboutImage || service.heroImage || "/images/roys/hospital_diagnostic_suite.jpg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020f1f]/80 via-transparent to-transparent" />
              </div>
              <div className="p-6 bg-[#113658] text-white">
                <div className="flex items-center gap-3 mb-2">
                  <MainIcon size={24} className="text-[#B49438]" />
                  <h3 className="text-lg font-black">{service.title}</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Backed by Roys & Roys International’s 15+ years of engineering excellence and global supply chain partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Pillars / Key Capabilities ──────────────────────────────────── */}
      <section id="capabilities" className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeading
            eyebrow="SPECIALIZED CAPABILITIES"
            title={`Core Pillars of ${service.title}`}
            subtitle="Tailored engineering, state-of-the-art technologies, and international standard execution."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.keyPillars.map((pillar, idx) => {
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

      {/* ─── Technology & Equipment Catalog ───────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#0c233c] text-white">
        <div className="mx-auto max-w-screen-xl">
          <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#B49438] text-xs font-extrabold uppercase tracking-[0.25em] mb-2">
              EQUIPMENT & SYSTEMS PORTFOLIO
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Featured Technologies & Systems
            </h2>
            <div className="w-12 h-1 bg-[#B49438] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {service.technologies.map((tech, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 60}
                className="flex items-center gap-3.5 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#B49438]/20 flex items-center justify-center shrink-0 text-[#B49438]">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-[14.5px] font-semibold text-white/95 leading-snug">
                  {tech}
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
            subtitle="From initial clinical consultation and architectural planning to installation, calibration, and lifetime support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflow.map((w, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
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
          <div data-aos="fade-right" data-aos-duration="700" className="p-8 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm">
            <div className="inline-flex items-center gap-2 text-[#009088] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Award size={16} />
              <span>KEY VALUE ADVANTAGES</span>
            </div>
            <h3 className="text-2xl font-black text-[#113658] mb-6">
              Why Partner With Roys & Roys
            </h3>
            <div className="space-y-4">
              {service.benefits.map((benefit, i) => (
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
          <div data-aos="fade-left" data-aos-duration="700" className="p-8 rounded-2xl bg-[#113658] text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#B49438] text-xs font-extrabold uppercase tracking-widest mb-3">
                <Building2 size={16} />
                <span>SECTORS WE EMPOWER</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-6">
                Target Industries & Institutions
              </h3>
              <div className="space-y-3 mb-8">
                {service.industries.map((ind, i) => (
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
                International Compliance
              </span>
              <span className="text-xs font-extrabold text-[#B49438]">
                WHO / ISO / CE / FDA
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
            title="Common Questions & Inquiries"
            subtitle="Get quick answers regarding technical specs, warranties, installation, and procurement procedures."
          />

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
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
      <section data-aos="fade-up" data-aos-duration="700" className="py-16 px-6 bg-[#020f1f] text-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-[#B49438] text-xs font-extrabold uppercase tracking-[0.3em] mb-3">
            GET IN TOUCH WITH OUR SPECIALISTS
          </p>
          <h2 className="text-2xl sm:text-4xl font-black mb-4 text-white">
            Ready to Discuss Your {service.title} Project?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Our engineering and international procurement team is ready to assist with tender specifications, site planning, product catalogs, and customized pricing.
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
              href="/group-companies/roys-roys/services"
              className="px-6 py-4 rounded-sm border border-white/30 hover:bg-white hover:text-[#020f1f] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>Explore All Business Areas</span>
            </Link>
          </div>
        </div>
      </section>

      <RoysFooter />
    </div>
  );
}
