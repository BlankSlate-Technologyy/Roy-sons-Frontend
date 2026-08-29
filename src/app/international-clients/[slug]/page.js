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
  Globe,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import {
  INTERNATIONAL_CLIENTS_LIST,
  getInternationalClientBySlug,
} from "@/lib/international-clients-data";

export default function InternationalClientDetailPage({ params }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams?.slug;
  const client = getInternationalClientBySlug(slug);

  const [openFaq, setOpenFaq] = useState(0);

  if (!client) {
    notFound();
  }

  const MainIcon = client.icon;

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans">
      <HeaderNavbar />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-neutral-100 border-b border-neutral-200 py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-neutral-500">
          <Link href="/" className="hover:text-neutral-950 transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <Link href="/about" className="hover:text-neutral-950 transition-colors">
            About Us
          </Link>
          <ChevronRight size={13} />
          <Link href="/international-clients" className="hover:text-neutral-950 transition-colors">
            International Clients
          </Link>
          <ChevronRight size={13} />
          <span className="font-bold text-neutral-950 truncate">{client.title}</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-neutral-950 text-white py-16 lg:py-24 px-6 overflow-hidden">
        {/* Background Image with Dark Luxury Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src={client.heroImage}
              alt={client.title}
              fill
              className="object-cover opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/75" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-[#dfb753]/15 border border-[#dfb753]/30 text-[#dfb753] text-xs font-black uppercase tracking-widest mb-4">
              <MainIcon size={16} />
              <span>{client.badge || "International Client"}</span>
            </div>

            <p className="text-[#dfb753] text-xs sm:text-sm font-black uppercase tracking-[0.25em] mb-2">
              {client.eyebrow}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-5 text-white">
              {client.title}
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
              {client.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-sm bg-[#dfb753] hover:bg-white text-neutral-950 font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-black/40"
              >
                <span>Initiate Global Partnership</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/about"
                className="px-5 py-3.5 rounded-sm border border-neutral-700 hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
              >
                <ArrowLeft size={14} />
                <span>Back to About Us</span>
              </Link>
            </div>
          </div>

          {/* Quick Stat Highlights */}
          {client.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-10 border-t border-neutral-800">
              {client.stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-sm bg-neutral-900/60 border border-neutral-800">
                  <p className="text-2xl sm:text-3xl font-black text-[#dfb753] tracking-tight mb-1 font-mono">
                    {stat.value}
                  </p>
                  <p className="text-xs text-neutral-400 font-bold tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── Quick Sector Switcher Bar ────────────────────────────────────────── */}
      <section className="bg-white border-b border-neutral-200 sticky top-0 z-40 shadow-sm hidden md:block">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
            <span className="text-[11px] font-black uppercase tracking-wider text-neutral-400 mr-2 shrink-0">
              International Clients:
            </span>
            {INTERNATIONAL_CLIENTS_LIST.map((item) => {
              const isActive = item.slug === client.slug;
              const TabIcon = item.icon;
              return (
                <Link
                  key={item.slug}
                  href={`/international-clients/${item.slug}`}
                  className={`px-3.5 py-2 rounded-sm text-xs font-black uppercase tracking-wider whitespace-nowrap flex items-center gap-2 transition-all shrink-0 ${
                    isActive
                      ? "bg-neutral-950 text-white shadow-xs"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:text-neutral-950"
                  }`}
                >
                  <TabIcon size={14} className={isActive ? "text-[#dfb753]" : "text-neutral-500"} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Sector Overview Section ─────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-neutral-50">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-neutral-500 text-xs font-black uppercase tracking-[0.2em] mb-3">
              <Sparkles size={14} className="text-[#dfb753]" />
              <span>GLOBAL TRADE &amp; MULTILATERAL EXCELLENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 tracking-tight uppercase leading-snug mb-6">
              Strategic Solutions for {client.title}
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed text-sm sm:text-base">
              {client.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-neutral-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#dfb753]" />
                <span className="text-xs font-black uppercase tracking-wider text-neutral-950">
                  Incoterms 2020 Compliant
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#dfb753]" />
                <span className="text-xs font-black uppercase tracking-wider text-neutral-950">
                  WHO-GMP &amp; ISO Certified
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={20} className="text-[#dfb753]" />
                <span className="text-xs font-black uppercase tracking-wider text-neutral-950">
                  Global Freight Logistics
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-sm overflow-hidden shadow-xl border-4 border-white bg-neutral-950">
              <div className="relative h-80 sm:h-96 w-full">
                <Image
                  src={client.heroImage}
                  alt={client.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
              </div>
              <div className="p-6 bg-neutral-950 text-white border-t border-neutral-800">
                <div className="flex items-center gap-3 mb-2">
                  <MainIcon size={24} className="text-[#dfb753]" />
                  <h3 className="text-lg font-black uppercase tracking-wider">{client.title}</h3>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Connecting international commerce with Pakistan&apos;s premier industrial, agricultural, and technological capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Pillars / Key Capabilities ──────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              GLOBAL CAPABILITIES
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-black uppercase tracking-[0.18em] text-neutral-950">
              Key Services for {client.label}
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
            <p className="text-[14px] text-neutral-500 mt-5 max-w-xl mx-auto leading-relaxed">
              Structured trade facilitation, international logistics, technology transfer, and regulatory compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {client.keyPillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon || CheckCircle2;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-sm border border-neutral-200 bg-neutral-50/50 hover:bg-white hover:border-neutral-950 hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-sm bg-neutral-950 text-[#dfb753] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      <PillarIcon size={28} />
                    </div>
                    <h3 className="text-lg font-black text-neutral-950 mb-3 uppercase tracking-wider group-hover:text-[#dfb753] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-neutral-200 flex items-center gap-1.5 text-xs font-black text-neutral-950 uppercase tracking-wider">
                    <span>International Grade</span>
                    <CheckCircle2 size={13} className="text-[#dfb753]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Technology & Deliverables Catalog ────────────────────────────────── */}
      <section className="py-16 px-6 bg-neutral-950 text-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-[#dfb753] text-xs font-black uppercase tracking-[0.25em] mb-2">
              LOGISTICS &amp; TRADE INFRASTRUCTURE
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white">
              Featured Systems for {client.title}
            </h2>
            <div className="w-12 h-[3px] bg-[#dfb753] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {client.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3.5 p-4 rounded-sm bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="w-8 h-8 rounded-sm bg-[#dfb753]/15 flex items-center justify-center shrink-0 text-[#dfb753]">
                  <CheckCircle2 size={16} />
                </div>
                <span className="text-sm font-bold text-neutral-200 leading-snug">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4-Step Project Execution Workflow ─────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              GLOBAL TRADE WORKFLOW
            </span>
            <h2 className="text-[26px] sm:text-[32px] font-black uppercase tracking-[0.18em] text-neutral-950">
              Structured International Execution
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
            <p className="text-[14px] text-neutral-500 mt-5 max-w-xl mx-auto leading-relaxed">
              From contract agreement and LC structuring to customs clearance, inspection, and multimodal freight.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {client.workflow.map((w, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-sm bg-neutral-50 border border-neutral-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl font-black text-neutral-300 mb-3 font-mono">
                  {w.step}
                </div>
                <h3 className="text-base font-black uppercase tracking-wider text-neutral-950 mb-2">
                  {w.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {w.desc}
                </p>
                <div className="w-8 h-0.5 bg-[#dfb753] mt-4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Benefits & Target Entities ───────────────────────────────────────── */}
      <section className="py-16 px-6 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key Advantages */}
          <div className="p-8 rounded-sm bg-white border border-neutral-200 shadow-sm">
            <div className="inline-flex items-center gap-2 text-neutral-500 text-xs font-black uppercase tracking-widest mb-3">
              <Award size={16} className="text-[#dfb753]" />
              <span>GLOBAL TRADE ADVANTAGES</span>
            </div>
            <h3 className="text-2xl font-black uppercase tracking-wider text-neutral-950 mb-6">
              Why Partner With ROYSONS
            </h3>
            <div className="space-y-4">
              {client.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#dfb753]/20 text-[#dfb753] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 size={13} />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 font-medium leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Target International Partners */}
          <div className="p-8 rounded-sm bg-neutral-950 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-[#dfb753] text-xs font-black uppercase tracking-widest mb-3">
                <Building2 size={16} />
                <span>GLOBAL PARTNERS &amp; NETWORKS</span>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wider text-white mb-6">
                Target Entities in this Category
              </h3>
              <div className="space-y-3 mb-8">
                {client.targetClients.map((target, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3.5 rounded-sm bg-neutral-900 border border-neutral-800 text-xs sm:text-sm font-bold text-neutral-200"
                  >
                    <Building2 size={15} className="text-[#dfb753] shrink-0" />
                    <span>{target}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-400 uppercase tracking-wider font-bold">
                Accreditations
              </span>
              <span className="text-xs font-black text-[#dfb753] uppercase tracking-wider">
                ISO 9001 / WHO-GMP / CE / ICC
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Frequently Asked Questions ───────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-md">
          <div className="text-center mb-14">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              FREQUENTLY ASKED
            </span>
            <h2 className="text-[26px] sm:text-[30px] font-black uppercase tracking-[0.18em] text-neutral-950">
              International Trade FAQs
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
          </div>

          <div className="space-y-3">
            {client.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-sm border border-neutral-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 bg-white hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-black text-neutral-950 uppercase tracking-wide">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-neutral-950 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 bg-neutral-50 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100">
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
      <section className="py-16 px-6 bg-neutral-950 text-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <p className="text-[#dfb753] text-xs font-black uppercase tracking-[0.3em] mb-3">
            CROSS-BORDER ENGAGEMENT
          </p>
          <h2 className="text-2xl sm:text-4xl font-black uppercase mb-4 text-white">
            Discuss Your {client.title} Partnership
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base mb-8">
            Our international trade desk, regulatory affairs division, and overseas business liaisons are ready to facilitate your trade, supply, or development initiative.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-sm bg-[#dfb753] hover:bg-white text-neutral-950 font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-xl shadow-black/40"
            >
              <span>Submit Global Trade Inquiry</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/international-clients"
              className="px-6 py-4 rounded-sm border border-neutral-700 hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>View All International Categories</span>
            </Link>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </div>
  );
}
