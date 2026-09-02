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
  Calendar,
  Layers,
  Activity,
  Check,
  FileText,
  FileCheck,
  ClipboardList,
  Globe2,
  Package,
  TrendingUp,
  RefreshCw,
  Scale,
  Send,
  Lock,
  Eye,
  Radio,
  Clock,
  Shield,
  Zap,
  HardHat,
  Hammer,
  Truck,
  Wrench,
  Users2,
  Compass,
  Factory,
  Building,
  Landmark,
  MapPin,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../../components/WaltonShared";
import {
  WALTON_PROJECTS,
  getWaltonProjectBySlug,
} from "../../projects-data";

export default function WaltonProjectDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const project = getWaltonProjectBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!project) {
    notFound();
  }

  const otherProjects = WALTON_PROJECTS.filter(
    (p) => p.slug !== project.slug
  );

  return (
    <main className="min-h-screen bg-white text-[#3A4E63] font-sans antialiased overflow-x-hidden">
      {/* ─── Global Walton Header ────────────────────────────────────────── */}
      <WaltonNavbar />

      {/* ─── Breadcrumb Navigation Bar ───────────────────────────────────── */}
      <div className="bg-[#F4F7FA] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto no-scrollbar whitespace-nowrap">
            <Link
              href="/group-companies/walton-consultants-contracting"
              className="hover:text-[#0E2A47] transition-colors"
              style={{ color: theme.navy }}
            >
              Walton Consultants
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <Link
              href="/group-companies/walton-consultants-contracting/projects"
              className="hover:text-[#0E2A47] transition-colors"
              style={{ color: theme.navy }}
            >
              Signature Projects
            </Link>
            <ChevronRight size={13} className="text-slate-400 shrink-0" />
            <span className="font-bold" style={{ color: theme.goldHover }}>
              {project.name}
            </span>
          </nav>
        </div>
      </div>

      {/* ─── Hero Section with High-Impact Visuals & Metrics ────────────── */}
      <section
        className="relative bg-gradient-to-b from-[#F4F7FA] to-white py-12 lg:py-20 border-b overflow-hidden"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-wider border shadow-xs bg-white"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <Building2 size={14} style={{ color: theme.gold }} />
                  <span>{project.eyebrow}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700">
                  <MapPin size={12} style={{ color: theme.gold }} />
                  <span>{project.location}</span>
                </div>
              </div>

              <div>
                <h1
                  className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] font-black tracking-tight leading-[1.2] uppercase"
                  style={{ color: theme.navyDark }}
                >
                  {project.name}
                </h1>
                <p
                  className="text-sm sm:text-base font-bold uppercase tracking-wider mt-2 text-[#0E2A47]"
                >
                  {project.subtitle}
                </p>
              </div>

              <p
                className="text-sm sm:text-base font-medium leading-relaxed"
                style={{ color: theme.textMuted }}
              >
                {project.overview}
              </p>

              {/* Live Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border shadow-xs hover:border-[#0E2A47] transition-all group"
                    style={{ borderColor: theme.border }}
                  >
                    <p
                      className="text-[10.5px] font-bold uppercase tracking-wider"
                      style={{ color: theme.textLight }}
                    >
                      {metric.label}
                    </p>
                    <p
                      className="text-lg sm:text-xl font-black mt-0.5 group-hover:text-[#0E2A47] transition-colors"
                      style={{ color: theme.navyDark }}
                    >
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/group-companies/walton-consultants-contracting/contact"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white flex items-center gap-2 shadow-md transition-all hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Request Similar Project Scope</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:00924238924737"
                  className="px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold border bg-white hover:bg-slate-50 flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <Phone size={14} style={{ color: theme.gold }} />
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
                <div className="relative w-full h-[320px] sm:h-[400px] overflow-hidden bg-slate-100">
                  <Image
                    src={project.heroImage}
                    alt={`${project.name} - Walton Consultants & Contracting`}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081B30]/85 via-transparent to-transparent" />

                  {/* Floating Project Badge */}
                  <div
                    className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border shadow-lg"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${theme.navy}15` }}
                        >
                          <Award size={22} style={{ color: theme.navy }} />
                        </div>
                        <div>
                          <p className="text-[10.5px] font-extrabold text-slate-500 uppercase tracking-wider">
                            Executed Project
                          </p>
                          <p className="text-xs font-black uppercase" style={{ color: theme.navyDark }}>
                            {project.status}
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-emerald-100 text-emerald-700">
                        Verified EPC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 1-Click Sticky Project Switcher Tabs ───────────────────────── */}
      <div
        className="sticky top-[60px] sm:top-[68px] z-30 bg-white/95 backdrop-blur-md border-b shadow-xs"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            {WALTON_PROJECTS.map((p) => {
              const isCurrent = p.slug === project.slug;
              return (
                <Link
                  key={p.slug}
                  href={`/group-companies/walton-consultants-contracting/projects/${p.slug}`}
                  className={`px-3.5 py-2 rounded-xl text-[11px] font-extrabold uppercase tracking-wider whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isCurrent
                      ? "text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                  style={{
                    backgroundColor: isCurrent ? theme.navy : undefined,
                  }}
                >
                  {p.name.split(" ")[0]} {p.name.split(" ")[1]}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ─── 4 Core Strategic Engineering Pillars ───────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Engineering Execution</SectionLabel>
            <SectionHeading center className="mb-3">
              Strategic Execution Pillars for {project.name}
            </SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Delivering on-time milestone scheduling, certified structural integrity, and rigorous HSE standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl border bg-white shadow-xs hover:shadow-lg hover:border-[#0E2A47] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 mb-5"
                      style={{ backgroundColor: `${theme.navy}10`, color: theme.navy }}
                    >
                      <Icon size={22} style={{ color: theme.navy }} />
                    </div>
                    <h3
                      className="text-base font-black mb-2.5 group-hover:text-[#0E2A47] transition-colors leading-snug uppercase"
                      style={{ color: theme.navyDark }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm font-medium leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {pillar.desc}
                    </p>
                  </div>
                  <div
                    className="pt-4 mt-6 border-t flex items-center justify-between text-[11px] font-black uppercase tracking-wider text-[#C5A059]"
                    style={{ borderColor: theme.border }}
                  >
                    <span>Pillar 0{idx + 1}</span>
                    <CheckCircle2 size={15} style={{ color: theme.gold }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Scope of Deliverables & Technical Specifications Profile ───── */}
      <section
        className="py-16 lg:py-20 bg-[#F4F7FA] border-b"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Deliverables Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <SectionLabel>Project Scope</SectionLabel>
                <SectionHeading className="mb-3">
                  Scope of Contract Deliverables
                </SectionHeading>
                <p className="text-xs sm:text-sm font-medium" style={{ color: theme.textMuted }}>
                  Contractual milestones, material testing certificates, and client handover deliverables.
                </p>
              </div>

              <div className="space-y-3">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border shadow-xs flex items-start gap-3.5 hover:border-[#0E2A47] transition-colors"
                    style={{ borderColor: theme.border }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${theme.navy}10` }}
                    >
                      <CheckCircle2 size={15} style={{ color: theme.gold }} />
                    </div>
                    <p className="text-xs sm:text-[13.5px] font-semibold text-slate-800 leading-snug">
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
                  className="flex items-center gap-3.5 mb-6 pb-4 border-b"
                  style={{ borderColor: theme.border }}
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${theme.navy}10` }}
                  >
                    <Layers size={22} style={{ color: theme.navy }} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase" style={{ color: theme.navyDark }}>
                      Contract &amp; Engineering Profile
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">Verified technical benchmarks</p>
                  </div>
                </div>

                <div className="divide-y text-xs sm:text-[13px]" style={{ borderColor: theme.border }}>
                  {project.technicalSpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                    >
                      <span className="font-bold text-slate-500">{spec.key}</span>
                      <span className="font-extrabold sm:text-right" style={{ color: theme.navyDark }}>
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

      {/* ─── 4-Stage Operational Deployment Pathway ─────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Construction Lifecycle</SectionLabel>
            <SectionHeading center className="mb-3">
              How This Project Was Executed &amp; Handed Over
            </SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial geotechnical assay and deep foundation work to structural casting, paving, and testing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.workflow.map((w, idx) => (
              <div
                key={w.step}
                className="relative p-6 rounded-3xl border bg-white hover:border-[#0E2A47] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-base text-white mb-4 shadow-sm group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: theme.navy }}
                  >
                    {w.step}
                  </div>
                  <h3
                    className="text-base font-black mb-2 group-hover:text-[#0E2A47] transition-colors uppercase leading-snug"
                    style={{ color: theme.navyDark }}
                  >
                    {w.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm font-medium leading-relaxed"
                    style={{ color: theme.textMuted }}
                  >
                    {w.desc}
                  </p>
                </div>
                <div
                  className="pt-4 mt-6 border-t flex items-center gap-2"
                  style={{ borderColor: theme.border }}
                >
                  <ShieldCheck size={14} style={{ color: theme.gold }} />
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#C5A059]">
                    Stage {w.step} Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQs Accordion ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F4F7FA] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center">
            <SectionLabel center>Project Inquiries</SectionLabel>
            <SectionHeading center className="mb-3">
              Frequently Asked Questions
            </SectionHeading>
            <p className="text-xs sm:text-sm font-medium" style={{ color: theme.textMuted }}>
              Key clarifications regarding structural execution, testing benchmarks, and project handover.
            </p>
          </div>

          <div className="space-y-3">
            {project.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border bg-white overflow-hidden transition-all shadow-xs"
                  style={{ borderColor: isOpen ? theme.gold : theme.border }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-black uppercase" style={{ color: theme.navyDark }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-slate-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[#C5A059]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="px-4 sm:px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed border-t pt-3 text-slate-600 bg-slate-50/50"
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

      {/* ─── Other Signature Projects Navigation Grid ───────────────────── */}
      <section className="py-16 lg:py-20 bg-white border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <SectionLabel>Portfolio Showcase</SectionLabel>
              <SectionHeading>Other Signature Projects</SectionHeading>
            </div>
            <Link
              href="/group-companies/walton-consultants-contracting/projects"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0E2A47]"
            >
              <span>View All</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/group-companies/walton-consultants-contracting/projects/${other.slug}`}
                className="walton-card-hover p-6 rounded-3xl border bg-white shadow-xs group flex flex-col justify-between cursor-pointer"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#0E2A47]/10 text-[#0E2A47]">
                      {other.tag}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{other.metrics[0].value}</span>
                  </div>
                  <h4 className="text-lg font-black mb-1.5 uppercase" style={{ color: theme.navyDark }}>
                    {other.name}
                  </h4>
                  <p className="text-xs font-medium line-clamp-2" style={{ color: theme.textMuted }}>
                    {other.overview}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#C5A059]" style={{ borderColor: theme.border }}>
                  <span>View Case Study</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Fast Inquiry & Consultation Desk CTA ───────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl border p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 bg-white"
            style={{ borderColor: theme.border }}
          >
            <div className="max-w-2xl space-y-3">
              <span
                className="text-xs font-black uppercase tracking-widest block text-[#A6823B]"
              >
                PROVEN EPC TRACK RECORD
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight" style={{ color: theme.navyDark }}>
                Partner With Us On Your Next Major Construction Project
              </h2>
              <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                Connect directly with our Chief Engineer and tender estimators to review structural designs, BOQ rate analyses, and milestone execution schedules.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/group-companies/walton-consultants-contracting/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider text-white text-center shadow-md hover:opacity-95 transition-all cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                Request EPC Proposal
              </Link>
              <a
                href="tel:00924238924737"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm border-2 text-center transition-all hover:bg-slate-50 cursor-pointer flex items-center justify-center gap-2"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Global Walton Footer ────────────────────────────────────────── */}
      <WaltonFooter />
    </main>
  );
}
