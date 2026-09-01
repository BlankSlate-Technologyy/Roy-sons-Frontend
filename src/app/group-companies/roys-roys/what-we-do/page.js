"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Globe,
  Package,
  Stethoscope,
  Wrench,
  ShieldCheck,
  Users,
  CheckCircle2,
  FileCheck,
  Clock,
  HeartPulse,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";
import { OFFERINGS_LIST } from "../offerings-data";

const WORKFLOW_STEPS = [
  {
    num: "01",
    icon: Stethoscope,
    title: "Consult & Assess",
    desc: "Understanding your needs, technical site analysis & feasibility study.",
  },
  {
    num: "02",
    icon: FileCheck,
    title: "Design & Plan",
    desc: "Architectural planning, engineering design & regulatory compliance.",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Build & Integrate",
    desc: "Precision construction, equipment integration & quality assurance.",
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "Commission & Support",
    desc: "Testing, commissioning & ongoing maintenance for seamless operations.",
  },
];

export default function WhatWeDoPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white overflow-hidden">
      <RoysNavbar active="Resources" />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4"
          >
            RESOURCES &amp; METHODOLOGY
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
            className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-4 max-w-3xl mx-auto"
          >
            How Roys &amp; Roys Delivers Excellence Globally
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-7 font-normal"
          >
            Explore our rigorous delivery framework, case studies, technical whitepapers, and international contracting capabilities.
          </p>
        </div>
      </section>

      {/* ─── 4 Steps Process ───────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2
            data-aos="fade-up"
            className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#0f2b48] mb-10"
          >
            OUR 4-STAGE DELIVERY FRAMEWORK
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left mb-12">
            {WORKFLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="p-6 rounded-xl border border-slate-200 bg-[#f8fafc] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-slate-300 font-mono">{step.num}</span>
                      <div className="w-9 h-9 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-xs">
                        <Icon size={16} />
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#0f2b48] mb-1.5">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Offerings Cards ───────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div data-aos="fade-up" className="text-center mb-10">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#0f2b48] mb-3">
              Strategic Procurement &amp; Trade Resources
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Connecting international manufacturers with defense, governmental, and private institutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OFFERINGS_LIST.map((off, idx) => (
              <div
                key={off.slug}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100 + Math.floor(idx / 3) * 50}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-900">
                    <Image
                      src={off.image}
                      alt={off.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-[#2563eb] block mb-1">
                      {off.tag}
                    </span>
                    <h3 className="text-base font-bold text-[#0f2b48] mb-2">{off.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{off.desc}</p>
                  </div>
                </div>
                <div className="px-5 pb-5 pt-0">
                  <Link
                    href={"/group-companies/roys-roys/what-we-do/" + off.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563eb] hover:text-[#0f2b48] transition-colors"
                  >
                    <span>View Resource Overview</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
