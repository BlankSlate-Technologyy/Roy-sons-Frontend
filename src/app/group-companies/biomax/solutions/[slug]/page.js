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
  Microscope,
  ThermometerSnowflake,
  FlaskConical,
  Dna,
  HeartPulse,
  Target,
  Package,
} from "lucide-react";
import { BiomaxNavbar, BiomaxFooter, COLORS } from "../../components/BiomaxShared";
import { BIOMAX_SOLUTIONS, getBiomaxSolutionBySlug } from "../../solutions-data";

export default function BiomaxSolutionDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const solution = getBiomaxSolutionBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!solution) {
    notFound();
  }

  const MainIcon = solution.icon || Microscope;

  return (
    <div className="min-h-screen bg-white text-[#165B7E] font-sans biomax-theme">
      <BiomaxNavbar />

      {/* ─── Top Breadcrumbs Navigation Bar ─── */}
      <div className="bg-[#F0F7FA] border-b border-[#D0E2EE] py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[12px] font-bold text-[#1F4E68] flex-wrap">
            <Link
              href="/group-companies/biomax"
              className="hover:text-[#1D906C] transition-colors"
            >
              BioMax Home
            </Link>
            <ChevronRight size={13} className="text-[#1D906C]" />
            <Link
              href="/group-companies/biomax/solutions"
              className="hover:text-[#1D906C] transition-colors"
            >
              Products &amp; Solutions
            </Link>
            <ChevronRight size={13} className="text-[#1D906C]" />
            <span className="text-[#165B7E] font-extrabold">{solution.title}</span>
          </div>

          <Link
            href="/group-companies/biomax/solutions"
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#1D906C] hover:text-[#165B7E] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>All Solutions</span>
          </Link>
        </div>
      </div>

      {/* ─── Hero Section with High-Resolution AI Imagery ─── */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 border-b border-[#D0E2EE] overflow-hidden bg-gradient-to-b from-[#F0F7FA] via-white to-white">
        <div className="mx-auto max-w-screen-xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Headlines & Action CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1D906C]/10 border border-[#1D906C]/30 text-[#1D906C] text-[11px] font-extrabold uppercase tracking-widest">
                <Sparkles size={13} />
                <span>{solution.badge}</span>
              </div>

              <div className="space-y-2">
                <span className="text-[12px] font-black uppercase tracking-[0.2em] text-[#1D906C]">
                  {solution.eyebrow}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#165B7E] tracking-tight leading-[1.12]">
                  {solution.title}
                </h1>
                <p className="text-lg sm:text-xl font-bold text-[#1D906C] leading-snug">
                  {solution.tagline}
                </p>
              </div>

              <p className="text-[14.5px] sm:text-[15.5px] text-[#1F4E68] leading-relaxed font-normal max-w-2xl">
                {solution.desc}
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {solution.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white border border-[#D0E2EE] shadow-xs text-center hover:border-[#1D906C] transition-all"
                  >
                    <div className="text-xl sm:text-2xl font-black text-[#165B7E]">
                      {stat.value}
                    </div>
                    <div className="text-[10.5px] font-bold text-[#1F4E68] uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex items-center gap-3 flex-wrap">
                <Link
                  href="/group-companies/biomax/contact"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-[#165B7E] hover:bg-[#1D906C] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Specifications</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  href="/group-companies/biomax/contact"
                  className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#165B7E] bg-white border-2 border-[#165B7E] hover:bg-[#165B7E] hover:text-white transition-all duration-300 flex items-center gap-2 cursor-pointer"
                >
                  <Phone size={15} />
                  <span>Talk to Specialist</span>
                </Link>
              </div>
            </div>

            {/* Right Column: AI Visual Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D0E2EE] bg-white group">
                <Image
                  src={solution.heroImage}
                  alt={solution.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3A52]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#1D906C]/15 flex items-center justify-center text-[#1D906C]">
                      <MainIcon size={20} />
                    </div>
                    <div>
                      <div className="text-[13px] font-black text-[#165B7E]">
                        {solution.shortTitle}
                      </div>
                      <div className="text-[11px] font-bold text-[#1D906C]">
                        ISO 9001 &amp; CE Certified Range
                      </div>
                    </div>
                  </div>
                  <ShieldCheck size={22} className="text-[#1D906C]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 1-Click Solution Switcher Navigation ─── */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-[#D0E2EE] shadow-xs">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#1F4E68] whitespace-nowrap mr-2">
              Solutions:
            </span>
            {BIOMAX_SOLUTIONS.map((item) => {
              const active = item.id === solution.id;
              const TabIcon = item.icon || Microscope;
              return (
                <Link
                  key={item.id}
                  href={`/group-companies/biomax/solutions/${item.slug}`}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#165B7E] text-white shadow-xs"
                      : "bg-[#F0F7FA] text-[#1F4E68] hover:bg-[#1D906C]/10 hover:text-[#1D906C]"
                  }`}
                >
                  <TabIcon size={13} />
                  <span>{item.shortTitle}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Technical & Scientific Overview ─── */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 bg-white border-b border-[#D0E2EE]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D906C]">
                {solution.overview.subtitle}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#165B7E] tracking-tight leading-snug">
                {solution.overview.heading}
              </h2>
              <p className="text-[14px] sm:text-[15px] text-[#1F4E68] leading-relaxed">
                {solution.overview.paragraph1}
              </p>
              <p className="text-[14px] sm:text-[15px] text-[#1F4E68] leading-relaxed">
                {solution.overview.paragraph2}
              </p>

              <div className="pt-2 grid sm:grid-cols-2 gap-2.5">
                {solution.benefits.slice(0, 4).map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-[13px] font-bold text-[#165B7E]">
                    <CheckCircle2 size={16} className="text-[#1D906C] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#F0F7FA] p-7 rounded-2xl border border-[#D0E2EE] space-y-5">
              <h3 className="text-lg font-black text-[#165B7E] flex items-center gap-2">
                <Award size={20} className="text-[#1D906C]" />
                <span>Target Institutional Sectors</span>
              </h3>
              <p className="text-[13px] text-[#1F4E68] leading-relaxed">
                Engineered to satisfy stringent testing protocols and regulatory requirements across diverse clinical, academic, and industrial environments.
              </p>

              <div className="space-y-2">
                {solution.targetClients.map((client, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-lg bg-white border border-[#D0E2EE] text-[12.5px] font-bold text-[#165B7E] flex items-center gap-2.5 shadow-2xs"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#1D906C]" />
                    <span>{client}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 4 Core Scientific & Engineering Pillars ─── */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 bg-[#F0F7FA] border-b border-[#D0E2EE]">
        <div className="mx-auto max-w-screen-xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D906C]">
              CORE COMPETENCIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#165B7E] tracking-tight">
              Four Pillars of {solution.shortTitle} Excellence
            </h2>
            <p className="text-[14px] text-[#1F4E68]">
              Engineered with world-class components to ensure analytical precision and unyielding dependability.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.corePillars.map((pillar, i) => {
              const PillarIcon = pillar.icon || ShieldCheck;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-[#D0E2EE] shadow-sm hover:shadow-md hover:border-[#1D906C] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1D906C]/10 flex items-center justify-center text-[#1D906C] group-hover:bg-[#1D906C] group-hover:text-white transition-colors">
                      <PillarIcon size={24} />
                    </div>
                    <h3 className="text-[16px] font-black text-[#165B7E] leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[13px] text-[#1F4E68] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Product Line Showcase Grid ─── */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 bg-white border-b border-[#D0E2EE]">
        <div className="mx-auto max-w-screen-xl space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D906C]">
                FEATURED INSTRUMENTS &amp; PRODUCTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#165B7E] tracking-tight mt-1">
                {solution.title} Portfolio
              </h2>
            </div>
            <Link
              href="/group-companies/biomax/contact"
              className="inline-flex items-center gap-1.5 text-[12px] font-extrabold uppercase tracking-wider text-[#1D906C] hover:text-[#165B7E]"
            >
              <span>Download Product Catalog</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {solution.productCatalog.map((prod, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-[#D0E2EE] bg-[#F0F7FA] hover:bg-white hover:border-[#1D906C] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[17px] font-black text-[#165B7E]">
                      {prod.title}
                    </h3>
                    <span className="px-2.5 py-1 rounded bg-[#1D906C]/10 text-[#1D906C] text-[10px] font-extrabold uppercase">
                      In Stock
                    </span>
                  </div>
                  <p className="text-[13.5px] text-[#1F4E68] leading-relaxed">
                    {prod.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D0E2EE] flex items-center justify-between text-[11.5px] font-bold text-[#1D906C]">
                  <span>{prod.specs}</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Technical Specifications Profile Table ─── */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 bg-[#F0F7FA] border-b border-[#D0E2EE]">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D906C]">
                ENGINEERING PROFILE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#165B7E] tracking-tight">
                Technical Specifications &amp; Quality Metrics
              </h2>
              <p className="text-[13.5px] text-[#1F4E68]">
                Standardized configuration metrics for BioMax {solution.shortTitle} systems.
              </p>
            </div>

            <div className="rounded-2xl border border-[#D0E2EE] bg-white overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse text-[13px]">
                <tbody>
                  {solution.technicalSpecs.map((spec, i) => (
                    <tr
                      key={i}
                      className={`border-b border-[#D0E2EE] last:border-0 ${
                        i % 2 === 0 ? "bg-white" : "bg-[#F0F7FA]/60"
                      }`}
                    >
                      <td className="py-3.5 px-5 font-extrabold text-[#165B7E] w-2/5 border-r border-[#D0E2EE]">
                        {spec.label}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-[#1F4E68]">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4-Stage Deployment & QA Workflow ─── */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 bg-white border-b border-[#D0E2EE]">
        <div className="mx-auto max-w-screen-xl space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D906C]">
              DEPLOYMENT PROTOCOL
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#165B7E] tracking-tight">
              4-Stage Quality Assurance &amp; Installation
            </h2>
            <p className="text-[14px] text-[#1F4E68]">
              From initial lab evaluation to certified IQ/OQ validation and annual calibration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.workflow.map((wf, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#F0F7FA] border border-[#D0E2EE] relative space-y-4 hover:border-[#1D906C] transition-all"
              >
                <div className="text-3xl font-black text-[#1D906C]">
                  {wf.step}
                </div>
                <h3 className="text-[16px] font-black text-[#165B7E]">
                  {wf.title}
                </h3>
                <p className="text-[13px] text-[#1F4E68] leading-relaxed">
                  {wf.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Interactive FAQs Accordion ─── */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 bg-[#F0F7FA] border-b border-[#D0E2EE]">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D906C]">
              TECHNICAL ASSISTANCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#165B7E] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-[13.5px] text-[#1F4E68]">
              Clear answers to common questions about {solution.shortTitle} integration, calibration, and support.
            </p>
          </div>

          <div className="space-y-3">
            {solution.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-[#D0E2EE] bg-white overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-extrabold text-[14px] sm:text-[15px] text-[#165B7E] hover:text-[#1D906C] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#1D906C] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-[13.5px] text-[#1F4E68] leading-relaxed border-t border-[#D0E2EE]/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Bulk Procurement & Consultation CTA ─── */}
      <section className="py-14 sm:py-18 px-4 sm:px-6 bg-[#0D2B3D] text-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1D906C]">
                DISCUSS YOUR LABORATORY REQUIREMENTS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Ready to Equip Your Lab with {solution.title}?
              </h2>
              <p className="text-[14.5px] text-[#D0E2EE]/90 max-w-2xl">
                Contact our biomedical and scientific application specialists today to request formal quotation proposals, technical tender specifications, or schedule an on-site demonstration.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end gap-3 flex-wrap">
              <Link
                href="/group-companies/biomax/contact"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white bg-[#1D906C] hover:bg-[#136B50] transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Request Quotation</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BiomaxFooter />
    </div>
  );
}
