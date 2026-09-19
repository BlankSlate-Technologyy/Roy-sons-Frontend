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
  HeartPulse,
} from "lucide-react";
import { RoysNavbar, RoysFooter, SectionHeading } from "../../_shared";
import { INDUSTRIES_LIST, getIndustryBySlug } from "../../industries-data";

export default function IndustryDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const industry = getIndustryBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!industry) {
    notFound();
  }

  const MainIcon = industry.icon;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827] overflow-hidden">
      <RoysNavbar active="Industries" />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#f1f5f9] border-b border-[#e2e8f0] py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-[#64748b]">
          <Link href="/group-companies/roys-roys" className="hover:text-[#113658] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <Link href="/group-companies/roys-roys/industries" className="hover:text-[#113658] transition-colors">
            Industries We Serve
          </Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-[#113658] truncate">{industry.title}</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-[#061426] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle Ambient Background Gradients & Glows */}
        <div className="absolute inset-0 select-none pointer-events-none overflow-hidden">
          {/* Top-Right Sapphire Glow */}
          <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-[#1d4ed8]/15 rounded-full blur-[120px]" />
          {/* Bottom-Left Gold Aura */}
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#b49438]/12 rounded-full blur-[130px]" />
          {/* Subtle Grid Accent Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          {/* 2-Column Hero Grid: Left Content + Right Framed Hospital Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Eyebrow, Badges & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Sector Category Pill */}
              <div
                data-aos="fade-down"
                data-aos-duration="600"
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0d223c]/90 border border-[#b49438]/40 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                <MainIcon size={14} className="text-[#d4af37]" />
                <span className="text-[#d4af37] text-[11px] font-extrabold uppercase tracking-[0.2em]">
                  {industry.badge || "Market Sector"}
                </span>
              </div>

              {/* Eyebrow & Title */}
              <div className="space-y-3">
                <p
                  data-aos="fade-up"
                  data-aos-delay="50"
                  className="text-[#d4af37] text-xs sm:text-sm font-black uppercase tracking-[0.25em]"
                >
                  {industry.eyebrow}
                </p>

                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="700"
                  className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-black tracking-tight leading-[1.14] text-white"
                >
                  {industry.title.includes("&") ? (
                    <>
                      <span>{industry.title.split("&")[0].trim()}</span>{" "}
                      <span className="text-[#38bdf8]">&amp;</span>{" "}
                      <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f5e7b2] to-[#c5a059]">
                        {industry.title.split("&")[1].trim()}
                      </span>
                    </>
                  ) : (
                    <span>{industry.title}</span>
                  )}
                </h1>
              </div>

              {/* Tagline / Subtitle */}
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
                className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal"
              >
                {industry.tagline}
              </p>

              {/* Trust Quality Pills */}
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="flex flex-wrap items-center gap-2.5 pt-1"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  <ShieldCheck size={14} className="text-[#38bdf8]" />
                  <span>HTM 02-01 &amp; ISO 13485</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Turnkey EPC Execution</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                  <Award size={14} className="text-[#d4af37]" />
                  <span>30+ Years Clinical Engineering</span>
                </div>
              </div>

              {/* CTAs */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-wrap items-center gap-3.5 pt-3"
              >
                <Link
                  href="/group-companies/roys-roys/contact"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#b49438] via-[#d4af37] to-[#c5a059] hover:from-[#c5a059] hover:to-[#996515] text-[#061426] font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#b49438]/25 hover:shadow-[#b49438]/40 hover:scale-[1.02] cursor-pointer"
                >
                  <span>Inquire For This Sector</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/group-companies/roys-roys/industries"
                  className="px-5 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft size={14} />
                  <span>All Industries</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Luxury Framed Visual Showcase Card */}
            <div
              className="lg:col-span-5"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="800"
            >
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#0c1f36]">
                <Image
                  src={industry.heroImage || "/roys_hospital_interior.png"}
                  alt={industry.title}
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Subtle vignette gradient for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#061426]/95 via-[#061426]/20 to-transparent" />

                {/* Top Corner Floating Spec Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#061426]/85 backdrop-blur-md border border-white/15 text-xs font-bold text-white shadow-lg">
                  <Award size={14} className="text-[#d4af37]" />
                  <span className="text-[11px] tracking-wide">Grade-A Healthcare Facility Spec</span>
                </div>

                {/* Bottom Overlay Glass Card */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl sm:rounded-2xl bg-[#061426]/90 backdrop-blur-md border border-white/15 shadow-2xl">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-black uppercase text-[#d4af37] tracking-wider flex items-center gap-1.5">
                      <Sparkles size={13} />
                      Turnkey Medical Infrastructure
                    </span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-medium leading-relaxed">
                    Radiology &bull; Modular OTs &bull; Medical Gases (MGPS) &bull; Critical Care ICUs &bull; Turnkey MEP
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Stat Highlights - Solid dark cards with 100% contrast */}
          {industry.stats && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-12 pt-8 border-t border-white/10">
              {industry.stats.map((stat, i) => {
                const StatIcon =
                  i === 0 ? Building2 : i === 1 ? HeartPulse : i === 2 ? Layers : ShieldCheck;

                return (
                  <div
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={300 + i * 70}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0b2038]/90 border border-white/12 hover:border-[#b49438]/50 shadow-xl transition-all duration-300 group flex items-center gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#b49438]/15 border border-[#b49438]/30 text-[#d4af37] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#b49438]/25 transition-all">
                      <StatIcon size={18} />
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#d4af37] tracking-tight transition-colors">
                        {stat.value}
                      </p>
                      <p className="text-[11px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider leading-snug mt-0.5">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ─── Industry Switcher Tabs ────────────────────────────────────────────── */}
      <section data-aos="fade-up" className="bg-white border-b border-[#e2e8f0] sticky top-[68px] z-40 shadow-xs hidden md:block">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#64748b] mr-2 shrink-0">
              Sectors:
            </span>
            {INDUSTRIES_LIST.map((item) => {
              const isActive = item.slug === industry.slug;
              const TabIcon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={`/group-companies/roys-roys/industries/${item.slug}`}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all shrink-0 ${
                    isActive
                      ? "bg-[#113658] text-white shadow-sm"
                      : "bg-[#f8fafc] text-[#475569] hover:bg-[#e2e8f0] hover:text-[#113658]"
                  }`}
                >
                  <TabIcon size={13} className={isActive ? "text-[#B49438]" : "text-[#64748b]"} />
                  <span>{item.label.replace("\n", " ")}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Sector Overview ─────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7" data-aos="fade-right" data-aos-duration="700">
            <div className="inline-flex items-center gap-2 text-[#009088] text-xs font-extrabold uppercase tracking-[0.2em] mb-3">
              <Sparkles size={14} />
              <span>SECTOR PROFILE &amp; REQUIREMENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#113658] tracking-tight leading-snug mb-6">
              Tailored Healthcare &amp; Infrastructure for {industry.title}
            </h2>
            <div className="space-y-4 text-[#334155] leading-relaxed text-base sm:text-[17px]">
              {industry.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-[#e2e8f0]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#009088]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1e293b]">
                  Institutional Standard
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#009088]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1e293b]">
                  Turnkey Commissioning
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#009088]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#1e293b]">
                  Full Warranty &amp; SLA
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5" data-aos="fade-left" data-aos-duration="800">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#113658]">
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src={industry.heroImage || "/roys_hospital_interior.png"}
                  alt={industry.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020f1f]/80 via-transparent to-transparent" />
              </div>
              <div className="p-6 bg-[#113658] text-white">
                <div className="flex items-center gap-3 mb-2">
                  <MainIcon size={24} className="text-[#B49438]" />
                  <h3 className="text-lg font-black">{industry.title}</h3>
                </div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Specialized solutions designed to meet the rigorous clinical, technical, and regulatory requirements of this sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Key Solution Pillars ────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeading
            eyebrow="TAILORED CAPABILITIES"
            title={`Key Solutions for ${industry.label.replace("\n", " ")}`}
            subtitle="Customized systems, certified infrastructure, and specialized procurement designed specifically for this sector."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.keyPillars.map((pillar, idx) => {
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
                    <p className="text-[15.5px] sm:text-[16.5px] text-[#475569] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#f1f5f9] flex items-center gap-1.5 text-xs font-extrabold text-[#113658] uppercase tracking-wider group-hover:text-[#009088]">
                    <span>Standardized Workflow</span>
                    <CheckCircle2 size={13} className="text-[#009088]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Technology & Equipment Portfolio ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0c233c] text-white">
        <div className="mx-auto max-w-screen-xl">
          <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#B49438] text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] mb-2">
              EQUIPMENT &amp; SYSTEM LINEUP
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Featured Systems for {industry.title}
            </h2>
            <div className="w-14 h-1 bg-[#B49438] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {industry.technologies.map((tech, idx) => (
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
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4-Step Project Delivery Workflow ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeading
            eyebrow="HOW WE DELIVER"
            title="Structured Project Implementation"
            subtitle="From initial requirement consultation and site preparation to procurement, installation, and post-warranty support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.workflow.map((w, idx) => (
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

      {/* ─── Benefits & Target Departments ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#f8fafc] border-y border-[#e2e8f0]">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Key Advantages */}
          <div data-aos="fade-right" data-aos-duration="700" className="p-8 sm:p-10 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#009088] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3.5">
                <Award size={18} />
                <span>STRATEGIC ADVANTAGES</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#113658] mb-7 tracking-tight">
                Why Partner With Roys &amp; Roys
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {industry.benefits.map((benefit, i) => (
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

          {/* Target Departments */}
          <div data-aos="fade-left" data-aos-duration="700" className="p-8 sm:p-10 rounded-2xl bg-[#113658] text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#B49438] text-xs sm:text-sm font-extrabold uppercase tracking-widest mb-3.5">
                <Building2 size={18} />
                <span>DEPARTMENTS &amp; DIVISIONS SERVED</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-7 tracking-tight">
                Target Units &amp; Environments
              </h3>
              <div className="space-y-3.5 mb-8">
                {industry.targetDepts.map((dept, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 text-[15.5px] sm:text-base font-semibold text-white/95 hover:bg-white/10 transition-colors"
                  >
                    <Building2 size={18} className="text-[#B49438] shrink-0" />
                    <span>{dept}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs sm:text-sm text-white/70 uppercase tracking-wider font-bold">
                Quality Assurance
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-[#B49438]">
                ISO 9001 / 13485 Certified
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
            title="Sector Inquiries &amp; FAQs"
            subtitle="Quick answers regarding procurement workflows, warranty coverage, and compliance standards."
          />

          <div className="space-y-3.5 sm:space-y-4">
            {industry.faqs.map((faq, idx) => {
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
            COLLABORATE WITH ROYS &amp; ROYS
          </p>
          <h2 className="text-2xl sm:text-4xl font-black mb-4 text-white">
            Need Solutions for {industry.title}?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Our sector specialists are ready to discuss tender specifications, customized product configurations, institutional pricing, and site planning.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/group-companies/roys-roys/contact"
              className="px-8 py-4 rounded-sm bg-[#B49438] hover:bg-[#009088] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-xl shadow-black/40"
            >
              <span>Submit Sector Inquiry</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/group-companies/roys-roys/industries"
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
