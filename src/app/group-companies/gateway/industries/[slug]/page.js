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
  Microscope,
  FlaskConical,
  Package,
  Leaf,
  Globe,
  BookOpen,
} from "lucide-react";
import Navbar from "../../sections/Navbar";
import Footer from "../../sections/Footer";
import { COLORS } from "../../constants";
import { Container } from "../../sections/Shared";
import { GATEWAY_INDUSTRIES, getGatewayIndustryBySlug } from "../../industries-data";

export default function GatewayIndustryDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const industry = getGatewayIndustryBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.AOS) {
      window.AOS.refresh();
    }
  }, [slug]);

  if (!industry) {
    notFound();
  }

  const otherIndustries = GATEWAY_INDUSTRIES.filter((i) => i.slug !== industry.slug);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#173F8A] selection:text-white">
      {/* ─── Global Gateway Header ────────────────────────────────────────── */}
      <Navbar />

      {/* ─── Breadcrumb Navigation Bar ────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] border-b" style={{ borderColor: COLORS.border }}>
        <Container className="py-3">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link href="/group-companies/gateway" className="hover:text-[#173F8A] transition-colors">
              Gateway
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <Link href="/group-companies/gateway/industries" className="hover:text-[#173F8A] transition-colors">
              Industries We Serve
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <span className="text-[#173F8A] font-bold">{industry.title}</span>
          </nav>
        </Container>
      </div>

      {/* ─── Hero Section with Visuals & Key Metrics ────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#F8FAFC] to-white py-12 lg:py-20 border-b overflow-hidden" style={{ borderColor: COLORS.border }}>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 border border-blue-200 text-[#173F8A]">
                <Sparkles size={13} className="text-[#2E8B57]" />
                <span>{industry.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#173F8A] tracking-tight leading-[1.15]">
                {industry.title}
              </h1>

              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal">
                {industry.overview}
              </p>

              {/* Live Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {industry.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border shadow-xs hover:border-[#173F8A] transition-all group"
                    style={{ borderColor: COLORS.border }}
                  >
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{metric.label}</p>
                    <p className="text-xl sm:text-2xl font-black text-[#173F8A] mt-0.5 group-hover:text-[#2E8B57] transition-colors">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/group-companies/gateway#contact"
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold text-white flex items-center gap-2 shadow-md hover:bg-[#12316B] transition-all cursor-pointer"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  <span>Request Sector Proposal</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/group-companies/gateway/industries"
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-bold border bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  style={{ borderColor: COLORS.border }}
                >
                  <ArrowLeft size={14} />
                  <span>All 7 Sectors</span>
                </Link>
              </div>
            </div>

            {/* Right Interactive Image Showcase Card with Hover Zoom */}
            <div className="lg:col-span-5" data-aos="fade-left">
              <div className="relative group rounded-2xl overflow-hidden border shadow-xl bg-white" style={{ borderColor: COLORS.border }}>
                <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden">
                  <Image
                    src={industry.heroImage}
                    alt={`${industry.title} - Gateway Pharmaceuticals Consultants`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent" />
                  
                  {/* Floating Regulatory Compliance Seal */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-100 text-[#173F8A]">
                          <Award size={20} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Sector Specialization</p>
                          <p className="text-xs font-black text-[#173F8A]">{industry.tag}</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-emerald-100 text-[#2E8B57]">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 1-Click Sticky Sector Switcher Tabs ─────────────────────────────── */}
      <div className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b shadow-xs" style={{ borderColor: COLORS.border }}>
        <Container>
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {GATEWAY_INDUSTRIES.map((ind) => {
              const isCurrent = ind.slug === industry.slug;
              return (
                <Link
                  key={ind.slug}
                  href={`/group-companies/gateway/industries/${ind.slug}`}
                  className={`px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isCurrent
                      ? "bg-[#173F8A] text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                  }`}
                >
                  {ind.title}
                </Link>
              );
            })}
          </div>
        </Container>
      </div>

      {/* ─── 4 Core Industry Pillars ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E8B57] block mb-2">
              SECTOR ADVISORY PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#173F8A] tracking-tight">
              Regulatory Solutions for {industry.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="p-6 rounded-2xl border bg-white shadow-xs hover:shadow-lg hover:border-[#173F8A] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  style={{ borderColor: COLORS.border }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 text-[#173F8A] group-hover:bg-[#173F8A] group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-[16px] font-black text-slate-900 mb-2.5 group-hover:text-[#173F8A] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-[#2E8B57]">
                    <span>Pillar {idx + 1}</span>
                    <Check size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ─── Applications & Technical Specifications Profile ────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-y" style={{ borderColor: COLORS.border }}>
        <Container>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Regulatory Applications Checklist */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E8B57] block mb-2">
                  SECTOR CAPABILITIES
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#173F8A]">
                  Key Regulatory Applications
                </h2>
              </div>

              <div className="space-y-3.5">
                {industry.applications.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border shadow-xs flex items-start gap-3.5 hover:border-[#173F8A] transition-colors"
                    style={{ borderColor: COLORS.border }}
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5 text-[#2E8B57]">
                      <CheckCircle2 size={16} />
                    </div>
                    <p className="text-xs sm:text-[13.5px] font-semibold text-slate-800 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Standardized Specifications Table */}
            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border shadow-md" style={{ borderColor: COLORS.border }}>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: COLORS.border }}>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#173F8A]">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#173F8A]">Sector Technical Profile</h3>
                    <p className="text-xs text-slate-500 font-medium">Standardized statutory parameters</p>
                  </div>
                </div>

                <div className="divide-y text-xs sm:text-[13px]" style={{ borderColor: COLORS.border }}>
                  {industry.technologies.map((spec, idx) => (
                    <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-slate-500">{spec.key}</span>
                      <span className="font-extrabold text-[#173F8A] sm:text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── FAQs Accordion ─────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center" data-aos="fade-up">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E8B57] block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#173F8A]">
                Common Questions in {industry.title}
              </h2>
            </div>

            <div className="space-y-3" data-aos="fade-up">
              {industry.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl border bg-white overflow-hidden transition-all shadow-xs"
                    style={{ borderColor: isOpen ? COLORS.primary : COLORS.border }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-black text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180 text-[#173F8A]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t pt-3 bg-blue-50/20" style={{ borderColor: COLORS.border }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Fast Consultation CTA Desk ─────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-t" style={{ borderColor: COLORS.border }}>
        <Container>
          <div className="rounded-3xl border p-8 sm:p-12 bg-gradient-to-r from-[#173F8A] to-[#12316B] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8" data-aos="zoom-in">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2E8B57] bg-white/10 px-3 py-1 rounded-full">
                SECTOR EXPERTISE DESK
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Consult with Our Specialists for {industry.title}
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
                Let our senior regulatory consultants streamline your statutory approvals, CTD dossiers, and cGMP compliance roadmap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/group-companies/gateway#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-[#173F8A] bg-white hover:bg-slate-100 text-center transition-all shadow-md cursor-pointer"
              >
                Book Sector Consultation
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Global Gateway Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
