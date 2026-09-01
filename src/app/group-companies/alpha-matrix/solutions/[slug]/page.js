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
  FileText,
  FileCheck,
  ClipboardList,
  Globe2,
  Package,
  TrendingUp,
  RefreshCw,
  Scale,
  Send,
  Camera,
  Landmark,
  Server,
  Fingerprint,
  Shield,
  Network,
  Radar,
  Radio,
  Eye,
  Lock,
  Zap,
  Cpu,
  ScanFace,
  Satellite,
  MapPin,
} from "lucide-react";
import {
  theme,
  hexToRgba,
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
} from "../../components/AlphaMatrixShared";
import { ALPHA_SOLUTIONS, getAlphaSolutionBySlug } from "../../solutions-data";

export default function AlphaMatrixSolutionDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const solution = getAlphaSolutionBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.body.classList.add("alpha-matrix-theme");
    document.body.style.backgroundColor = theme.bg;
    document.body.style.color = theme.navy;
    return () => {
      document.body.classList.remove("alpha-matrix-theme");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [slug]);

  if (!solution) {
    notFound();
  }

  const otherSolutions = ALPHA_SOLUTIONS.filter((s) => s.slug !== solution.slug);

  return (
    <div className="alpha-matrix-theme min-h-screen font-sans selection:bg-[#005691] selection:text-white bg-white" style={{ backgroundColor: theme.bg, color: theme.navy }}>
      {/* ─── Global Alpha Matrix Header ───────────────────────────────────── */}
      <AlphaMatrixNavbar />

      {/* ─── Breadcrumb Navigation Bar ────────────────────────────────────── */}
      <div className="bg-[#F8FAFC] border-b" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link href="/group-companies/alpha-matrix" className="hover:text-[#005691] transition-colors">
              Alpha Matrix
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <Link href="/group-companies/alpha-matrix/solutions" className="hover:text-[#005691] transition-colors">
              Defense Solutions
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <span style={{ color: theme.gold }} className="font-extrabold">{solution.title}</span>
          </nav>
        </div>
      </div>

      {/* ─── Hero Section with Visuals & Key Metrics ────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#F8FAFC] to-white py-12 lg:py-20 border-b overflow-hidden" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 border border-blue-200 text-[#005691]">
                <ShieldCheck size={14} style={{ color: theme.gold }} />
                <span>{solution.eyebrow}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] uppercase" style={{ color: theme.navy }}>
                {solution.title}
              </h1>

              <p className="text-[15px] sm:text-[16px] text-slate-600 leading-relaxed font-normal">
                {solution.overview}
              </p>

              {/* Live Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {solution.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border shadow-xs hover:border-[#005691] transition-all group"
                    style={{ borderColor: theme.border }}
                  >
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{metric.label}</p>
                    <p className="text-xl sm:text-2xl font-black mt-0.5 group-hover:text-[#005691] transition-colors" style={{ color: theme.gold }}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="#consultation-desk"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-white flex items-center gap-2 shadow-md hover:bg-[#004070] transition-all cursor-pointer"
                  style={{ backgroundColor: theme.gold }}
                >
                  <span>Request Tactical Briefing</span>
                  <ArrowRight size={15} />
                </a>
                <Link
                  href="/group-companies/alpha-matrix/solutions"
                  className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold border bg-white hover:bg-slate-50 text-slate-700 flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <ArrowLeft size={14} />
                  <span>All 6 Solutions</span>
                </Link>
              </div>
            </div>

            {/* Right Interactive Image Showcase Card with Hover Zoom */}
            <div className="lg:col-span-5" data-aos="fade-left">
              <div className="relative group rounded-2xl overflow-hidden border shadow-xl bg-white" style={{ borderColor: theme.border }}>
                <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden bg-slate-50">
                  <Image
                    src={solution.heroImage}
                    alt={`${solution.title} - Alpha Matrix Defence Systems`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002244]/80 via-transparent to-transparent" />
                  
                  {/* Floating Defense Seal */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-blue-50" style={{ color: theme.gold }}>
                          <ShieldCheck size={20} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Tactical Classification</p>
                          <p className="text-xs font-black" style={{ color: theme.navy }}>C4ISR &amp; Mil-Spec Certified</p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white" style={{ backgroundColor: theme.gold }}>
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

      {/* ─── 1-Click Sticky Solution Switcher Tabs ─────────────────────────── */}
      <div className="sticky top-[73px] z-30 bg-white/95 backdrop-blur-md border-b shadow-xs" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {ALPHA_SOLUTIONS.map((s) => {
              const isCurrent = s.slug === solution.slug;
              return (
                <Link
                  key={s.slug}
                  href={`/group-companies/alpha-matrix/solutions/${s.slug}`}
                  className={`px-3.5 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isCurrent
                      ? "text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                  }`}
                  style={{ backgroundColor: isCurrent ? theme.gold : undefined }}
                >
                  {s.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── 4 Core Strategic Pillars ───────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-xs font-black uppercase tracking-[0.25em] block mb-2" style={{ color: theme.gold }}>
              STRATEGIC ARCHITECTURE &amp; PILLARS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase" style={{ color: theme.navy }}>
              Core Capabilities of {solution.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal">
              Engineered to meet stringent military standards and deliver uninterrupted zero-fail mission execution.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="p-6 rounded-2xl border bg-white shadow-xs hover:shadow-xl hover:border-[#005691] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 group-hover:scale-110 transition-all duration-300 mb-5"
                      style={{ color: theme.gold }}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="text-[16px] font-black text-slate-900 mb-2.5 group-hover:text-[#005691] transition-colors leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-black" style={{ color: theme.gold }}>
                    <span>Pillar 0{idx + 1}</span>
                    <Check size={14} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Capabilities Checklist & Technical Profile ─────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-y" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Capabilities Checklist */}
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.25em] block mb-2" style={{ color: theme.gold }}>
                  TACTICAL CAPABILITIES
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase" style={{ color: theme.navy }}>
                  System Features &amp; Integrations
                </h2>
              </div>

              <div className="space-y-3.5">
                {solution.capabilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border shadow-xs flex items-start gap-3.5 hover:border-[#005691] transition-colors"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5" style={{ color: theme.gold }}>
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
              <div className="p-6 sm:p-8 rounded-2xl bg-white border shadow-md" style={{ borderColor: theme.border }}>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: theme.border }}>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center" style={{ color: theme.gold }}>
                    <Layers size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black uppercase" style={{ color: theme.navy }}>Technical Specifications</h3>
                    <p className="text-xs text-slate-500 font-medium">Standardized military &amp; commercial parameters</p>
                  </div>
                </div>

                <div className="divide-y text-xs sm:text-[13px]" style={{ borderColor: theme.border }}>
                  {solution.technicalSpecs.map((spec, idx) => (
                    <div key={idx} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-bold text-slate-500">{spec.key}</span>
                      <span className="font-black sm:text-right" style={{ color: theme.navy }}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4-Stage Tactical Workflow (01 to 04) ───────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
            <span className="text-xs font-black uppercase tracking-[0.25em] block mb-2" style={{ color: theme.gold }}>
              OPERATIONAL ROADMAP
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight" style={{ color: theme.navy }}>
              How {solution.title} Operates
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.workflow.map((w, idx) => (
              <div
                key={w.step}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="relative p-6 rounded-2xl border bg-[#F8FAFC] hover:bg-white hover:border-[#005691] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg text-white mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: theme.gold }}>
                    {w.step}
                  </div>
                  <h3 className="text-[15px] font-black text-slate-900 mb-2 group-hover:text-[#005691] transition-colors">
                    {w.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {w.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Interactive FAQs Accordion ─────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-t" style={{ borderColor: theme.border }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center" data-aos="fade-up">
            <span className="text-xs font-black uppercase tracking-[0.25em] block mb-2" style={{ color: theme.gold }}>
              TECHNICAL FAQS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase" style={{ color: theme.navy }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3" data-aos="fade-up">
            {solution.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border bg-white overflow-hidden transition-all shadow-xs"
                  style={{ borderColor: isOpen ? theme.gold : theme.border }}
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
                        isOpen ? "rotate-180 text-[#005691]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-[13px] text-slate-600 leading-relaxed border-t pt-3 bg-blue-50/20" style={{ borderColor: theme.border }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Fast Inquiry & Consultation CTA Desk ───────────────────────────── */}
      <section id="consultation-desk" className="py-16 lg:py-20 bg-white border-t" style={{ borderColor: theme.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border p-8 sm:p-12 bg-gradient-to-r from-[#002244] to-[#005691] text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8" data-aos="zoom-in">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-black uppercase tracking-[0.25em] bg-white/10 px-3 py-1 rounded-full text-white">
                TACTICAL DEFENSE ADVISORY
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight uppercase">
                Ready to Integrate {solution.title}?
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed">
                Connect with our certified defense engineers and tactical systems architects for a confidential assessment of your facility or sovereign border defense requirements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/group-companies/alpha-matrix/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-[#002244] bg-white hover:bg-slate-100 text-center transition-all shadow-md cursor-pointer"
              >
                Schedule Technical Briefing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Global Alpha Matrix Footer ───────────────────────────────────── */}
      <AlphaMatrixFooter />
    </div>
  );
}
