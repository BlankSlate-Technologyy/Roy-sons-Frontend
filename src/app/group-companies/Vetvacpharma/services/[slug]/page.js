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
  Calendar,
  Layers,
  Activity,
  Check,
} from "lucide-react";
import { VetvacNavbar, VetvacFooter, HeroPrimaryButton, HeroOutlineButton } from "../../components/VetvacShared";
import { VETVAC_SERVICES, getVetvacServiceBySlug } from "../../services-data";

const COLORS = {
  primary: "#094C80",       // Primary Blue
  primaryDark: "#0B2745",   // Dark Navy
  green: "#1E855C",         // Green Accent
  greenDark: "#156344",     // Dark Green
  white: "#FFFFFF",         // Pure White
  lightBg: "#F4F8FB",       // Light Blue-Gray background
  lightGreen: "#EAF6F0",    // Light Green
  muted: "#4B6178",         // Muted Slate
  border: "#D0E2EE",        // Clean Border
  borderGreen: "#CBE8D9",
  footerBg: "#071B30",
};

export default function VetvacServiceDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const service = getVetvacServiceBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!service) {
    notFound();
  }

  const MainIcon = service.icon;

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B2745] overflow-hidden selection:bg-[#1E855C]/20 selection:text-[#094C80]">
      <VetvacNavbar active="Services" />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#EAF3F8]/70 border-b border-[#D0E2EE] py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-[#4B6178]">
          <Link href="/group-companies/Vetvacpharma" className="hover:text-[#094C80] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} className="text-[#094C80]/50" />
          <Link href="/group-companies/Vetvacpharma/industries" className="hover:text-[#094C80] transition-colors">
            Services & Sectors
          </Link>
          <ChevronRight size={13} className="text-[#094C80]/50" />
          <span className="font-semibold text-[#094C80] truncate">{service.shortTitle}</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-[#071B30] text-white py-14 sm:py-18 lg:py-22 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1E855C]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#094C80]/40 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Background Preview for Large Screens */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden lg:block"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="relative mx-auto max-w-screen-xl">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            {/* Top Badge */}
            <div data-aos="fade-down" data-aos-duration="700">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#6EE7B7] text-xs font-bold uppercase tracking-wider">
                <MainIcon size={14} className="text-[#6EE7B7]" />
                <span>{service.badge}</span>
              </span>
            </div>

            {/* Title & Tagline */}
            <div data-aos="fade-up" data-aos-delay="100" className="space-y-2">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-base sm:text-xl font-bold text-[#6EE7B7]">
                {service.tagline}
              </p>
            </div>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl"
            >
              {service.desc}
            </p>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <Link
                href="/group-companies/Vetvacpharma/contact"
                className="vetvac-primary-btn px-6 py-3.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white bg-[#1E855C] hover:bg-[#156344] shadow-lg shadow-black/25 flex items-center gap-2 transition-all duration-300 cursor-pointer"
              >
                <span>Request Sector Consultation</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/group-companies/Vetvacpharma/industries"
                className="px-5 py-3.5 rounded-lg border border-white/30 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
              >
                <ArrowLeft size={14} />
                <span>All 5 Sectors</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-white/15"
            >
              {service.stats.map((st, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs hover:bg-white/10 transition-colors"
                >
                  <p className="text-lg sm:text-2xl font-black text-white">{st.value}</p>
                  <p className="text-[11px] sm:text-xs text-slate-300 font-medium line-clamp-1">{st.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Sector Switcher Tab Bar ────────────────────────────────────────────── */}
      <div className="bg-[#F4F8FB] border-b border-[#D0E2EE] py-3 px-4 sm:px-6 sticky top-0 z-20 backdrop-blur-md shadow-xs">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <span className="text-xs font-black uppercase tracking-wider text-[#094C80] shrink-0 flex items-center gap-1.5 hidden md:flex">
            <Layers size={14} className="text-[#1E855C]" />
            <span>Switch Sector:</span>
          </span>

          <div className="flex items-center gap-2 shrink-0">
            {VETVAC_SERVICES.map((s) => {
              const isCurrent = s.id === service.id;
              const Icon = s.icon;
              return (
                <Link
                  key={s.id}
                  href={`/group-companies/Vetvacpharma/services/${s.slug}`}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap flex items-center gap-1.5 transition-all shrink-0 ${
                    isCurrent
                      ? "bg-[#094C80] text-white shadow-sm"
                      : "bg-white text-[#0B2745] border border-[#D0E2EE] hover:border-[#1E855C] hover:text-[#1E855C]"
                  }`}
                >
                  <Icon size={13} />
                  <span>{s.shortTitle}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── Clinical Overview & Image Showcase ─────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative */}
            <div data-aos="fade-right" className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1E855C] bg-[#EAF6F0] px-3 py-1 rounded-full border border-[#CBE8D9]">
                  {service.overview.subtitle}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0B2745] tracking-tight mt-3 leading-tight">
                  {service.overview.heading}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#4B6178] leading-relaxed">
                {service.overview.paragraph1}
              </p>

              <p className="text-sm sm:text-base text-[#4B6178] leading-relaxed">
                {service.overview.paragraph2}
              </p>

              {/* Verified Quality Badges */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-[#F4F8FB] border border-[#D0E2EE] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF6F0] text-[#1E855C] flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#0B2745]">cGMP Certified</p>
                    <p className="text-[10.5px] text-[#4B6178]">Batch Potency Guaranteed</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F4F8FB] border border-[#D0E2EE] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF3F8] text-[#094C80] flex items-center justify-center shrink-0">
                    <Award size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#0B2745]">Field-Validated</p>
                    <p className="text-[10.5px] text-[#4B6178]">Proven Yield Performance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div data-aos="fade-left" className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#071B30] group">
                <div className="relative h-[320px] sm:h-[400px] w-full">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071B30] via-transparent to-transparent opacity-85" />
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D0E2EE] text-[#0B2745] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#EAF6F0] text-[#1E855C] flex items-center justify-center font-black">
                      <MainIcon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black">{service.shortTitle} Veterinary Division</p>
                      <p className="text-[11px] text-[#4B6178]">Dedicated Technical & Formulation Support</p>
                    </div>
                  </div>
                  <Link
                    href="/group-companies/Vetvacpharma/contact"
                    className="hidden sm:inline-flex items-center gap-1 text-xs font-extrabold text-[#1E855C] hover:text-[#094C80] transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 Core Capability Pillars ──────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F4F8FB] border-y border-[#D0E2EE]">
        <div className="mx-auto max-w-screen-xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1E855C] bg-[#EAF6F0] px-3 py-1 rounded-full border border-[#CBE8D9]">
              CORE CLINICAL PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2745] tracking-tight">
              Specialized Capabilities in {service.shortTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#4B6178]">
              Targeted healthcare, cold-chain assurance, and clinical biosecurity protocols designed for peak operational stability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {service.pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="p-6 rounded-2xl border border-[#D0E2EE] bg-white hover:border-[#1E855C] hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EAF6F0] text-[#1E855C] flex items-center justify-center group-hover:bg-[#1E855C] group-hover:text-white transition-colors duration-300">
                      <PillarIcon size={22} />
                    </div>
                    <h3 className="text-base font-black text-[#0B2745] group-hover:text-[#094C80] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#4B6178] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-[#1E855C]">
                    <span>Verified Efficacy</span>
                    <Check size={13} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Technology & Product Portfolio ────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#094C80] bg-[#EAF3F8] px-3 py-1 rounded-full border border-[#D0E2EE]">
              FORMULATION PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2745] tracking-tight">
              Featured Healthcare & Therapeutic Range
            </h2>
            <p className="text-xs sm:text-sm text-[#4B6178]">
              Manufactured with pharmaceutical-grade excipients and verified stability in diverse environmental conditions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {service.products.map((prod, idx) => (
              <div
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 100}
                className="p-6 rounded-2xl bg-[#F4F8FB] border border-[#D0E2EE] hover:border-[#094C80] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#094C80]/10 text-[#094C80]">
                    {prod.badge}
                  </span>
                  <h4 className="text-sm font-black text-[#0B2745]">
                    {prod.title}
                  </h4>
                  <p className="text-xs text-[#4B6178] leading-relaxed">
                    {prod.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D0E2EE]">
                  <Link
                    href="/group-companies/Vetvacpharma/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#094C80] hover:text-[#1E855C] transition-colors"
                  >
                    <span>Request Product Specs</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4-Step Veterinary Delivery Workflow ───────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#071B30] text-white">
        <div className="mx-auto max-w-screen-xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6EE7B7] bg-white/10 px-3 py-1 rounded-full border border-white/20">
              VETERINARY PROTOCOL EXECUTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              4-Stage Delivery Framework
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              From initial epidemiological assessment to supervised administration and post-vaccine serological audits.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflow.map((st, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs relative group hover:bg-white/10 hover:border-[#1E855C] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1E855C] text-white font-black text-sm flex items-center justify-center shadow-md">
                    {st.step}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Strategic Advantages & Target Segments ────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left: Key Benefits */}
            <div data-aos="fade-right" className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1E855C] bg-[#EAF6F0] px-3 py-1 rounded-full border border-[#CBE8D9]">
                  PROVEN VALUE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B2745] tracking-tight mt-2">
                  Strategic Advantages for {service.shortTitle}
                </h2>
              </div>

              <div className="space-y-3.5">
                {service.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#F4F8FB] border border-[#D0E2EE] flex items-start gap-3.5 hover:border-[#1E855C] transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#EAF6F0] text-[#1E855C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={2.5} />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-[#0B2745] leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Target Segments */}
            <div data-aos="fade-left" className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#094C80] bg-[#EAF3F8] px-3 py-1 rounded-full border border-[#D0E2EE]">
                  TARGET SECTORS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B2745] tracking-tight mt-2">
                  Who We Serve
                </h2>
              </div>

              <div className="p-6 rounded-2xl bg-[#094C80] text-white shadow-xl space-y-4">
                <p className="text-xs text-slate-200 leading-relaxed">
                  Tailored solutions engineered specifically for the operational scale and biosafety constraints of:
                </p>
                <div className="space-y-2.5">
                  {service.targetSectors.map((sector, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/10 border border-white/15"
                    >
                      <CheckCircle2 size={16} className="text-[#6EE7B7] shrink-0" />
                      <span className="text-xs font-bold text-white">{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#F4F8FB] border-t border-[#D0E2EE]">
        <div className="mx-auto max-w-screen-md space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#1E855C] bg-[#EAF6F0] px-3 py-1 rounded-full border border-[#CBE8D9]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2745] tracking-tight">
              Clinical & Technical Inquiries
            </h2>
            <p className="text-xs text-[#4B6178]">
              Common veterinary questions regarding {service.shortTitle} vaccine protocols and storage requirements.
            </p>
          </div>

          <div className="space-y-3.5">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="rounded-xl border border-[#D0E2EE] bg-white overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#0B2745] hover:text-[#094C80] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#1E855C] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4B6178] leading-relaxed border-t border-slate-100 bg-[#F4F8FB]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Contact CTA Banner ─────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#071B30] via-[#094C80] to-[#071B30] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1E855C_1px,transparent_1px)] opacity-20 [background-size:16px_16px]" />
        
        <div className="relative mx-auto max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#6EE7B7]">
              EVIDENCE-BASED ANIMAL HEALTHCARE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Ready to Upgrade Your {service.shortTitle} Health Program?
            </h3>
            <p className="text-xs sm:text-sm text-slate-200">
              Contact our veterinary specialists for bulk vaccine procurement, clinical trial data, and customized farm schedules.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/group-companies/Vetvacpharma/contact"
              className="vetvac-primary-btn px-7 py-3.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white bg-[#1E855C] hover:bg-[#156344] shadow-xl transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span>Contact Veterinary Team</span>
              <ArrowRight size={14} />
            </Link>

            <Link
              href="/group-companies/Vetvacpharma/industries"
              className="px-5 py-3.5 rounded-lg border border-white/40 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>Explore All Sectors</span>
            </Link>
          </div>
        </div>
      </section>

      <VetvacFooter />
    </div>
  );
}
