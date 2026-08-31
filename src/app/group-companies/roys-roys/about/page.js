"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Lightbulb,
  Award,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Building2,
  Globe,
  Clock,
  Briefcase,
  Check,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";

const STATS = [
  { value: "30+",   label: "Years of\nExcellence",     icon: Award },
  { value: "250+",  label: "Projects\nDelivered",      icon: Building2 },
  { value: "15+",   label: "Countries\nServed",        icon: Globe },
  { value: "1000+", label: "Healthcare\nSpecialists",  icon: Users },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Integrity & Compliance",
    desc: "Uncompromising honesty, regulatory adherence, and transparent partnerships across 30+ nations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    desc: "Deploying high-tech medical engineering, modular suites, and cleanroom air handling technologies.",
  },
  {
    icon: Award,
    title: "Excellence & Precision",
    desc: "Delivering turnkey hospital projects to the highest international quality, HTM 02-01, and ISO standards.",
  },
  {
    icon: Users,
    title: "Global Collaboration",
    desc: "Deep strategic relationships with top global OEMs, defense health directorates, and ministries of health.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white">
      <RoysNavbar active="About Us" />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4">
                ABOUT ROYS &amp; ROYS INTERNATIONAL
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-4">
                Building World-Class
                <span className="block text-[#38bdf8] font-black text-2xl sm:text-3xl lg:text-4xl my-1">
                  Healthcare &amp; Institutional
                </span>
                Infrastructure Worldwide
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-7 font-normal">
                Roys &amp; Roys™ International is a diversified enterprise specializing in turnkey hospital engineering, integrated healthcare infrastructure, medical equipment procurement, and institutional contracting.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/group-companies/roys-roys/services"
                  className="px-5 py-2.5 rounded bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow flex items-center gap-1.5"
                >
                  <span>Our Capabilities</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/group-companies/roys-roys/contact"
                  className="px-5 py-2.5 rounded border border-white/40 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200 flex items-center gap-1.5"
                >
                  <span>Contact Directors</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative h-[360px] w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src="/roys_hospital_interior.png"
                  alt="Modern Hospital Architecture"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-[#0f2b48]/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold uppercase text-[#B49438]">Established Heritage</p>
                    <p className="text-sm font-bold text-white">30+ Years Global Presence</p>
                  </div>
                  <span className="text-xl font-black text-[#38bdf8]">ISO 9001</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-10 border-t border-white/15">
            {STATS.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.label}
                  className="p-3.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded bg-blue-500/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-black text-white leading-none mb-0.5">
                      {st.value}
                    </p>
                    <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider whitespace-pre-line leading-tight">
                      {st.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Mission & Vision ──────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl grid md:grid-cols-2 gap-6">
          <div className="p-7 rounded-xl border border-slate-200 bg-[#f8fafc] shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#2563eb] flex items-center justify-center shrink-0">
              <Target size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f2b48] mb-1.5">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To build a healthier tomorrow by delivering innovative, sustainable, and patient-centric healthcare infrastructure solutions globally.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-xl border border-slate-200 bg-[#f8fafc] shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-11 h-11 rounded-lg bg-blue-100 text-[#2563eb] flex items-center justify-center shrink-0">
              <Eye size={22} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#0f2b48] mb-1.5">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be a global leader in healthcare solutions and exceed expectations through innovation, integrity, and unwavering commitment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Core Values ───────────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc] border-t border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#0f2b48] mb-10">
            OUR CORE VALUES
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-5 rounded-xl border border-slate-200 bg-white hover:border-[#2563eb] hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors flex items-center justify-center mb-3">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-[#0f2b48] group-hover:text-[#2563eb] transition-colors mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
