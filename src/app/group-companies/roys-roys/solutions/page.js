"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseMedical,
  Activity,
  Layers,
  ShieldCheck,
  Building2,
  Check,
  Settings,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";

const TURNKEY_SOLUTIONS = [
  {
    id: "modular-ot",
    title: "Modular Operating Theatres (OT)",
    desc: "Complete pre-fabricated modular OT suites equipped with laminar airflow, LED surgical illuminators, anesthesia pendants, and antibacterial wall panels.",
    points: ["Class 100 Laminar Airflow", "Antimicrobial Stainless & Glass Wall Panels", "Integrated Medical Gas & Telemedicine Booms"],
    image: "/pakmedical-card2.png",
  },
  {
    id: "icu-critical",
    title: "Integrated ICU & Critical Care Suites",
    desc: "Multi-bed intensive care infrastructure with central patient monitoring stations, HEPA filtration isolation cubicles, and emergency power backup.",
    points: ["Centralized Telemetry Monitoring", "Negative Pressure Isolation Units", "Smart Motorized ICU Beds & Life Support"],
    image: "/roys_hospital_interior.png",
  },
  {
    id: "mep-utility",
    title: "Central Medical Gas (MGPS) & Cleanroom HVAC",
    desc: "HTM 02-01 & NFPA 99 compliant central gas plant rooms, vacuum systems, manifold networks, and AHU cleanroom climate control.",
    points: ["Automated Dual Digital Manifolds", "Continuous Pressure Alarm Telemetry", "Energy Efficient Cleanroom AHU & Chillers"],
    image: "/biomax_rnd_hero_ai.jpg",
  },
  {
    id: "radiology-imaging",
    title: "Turnkey Diagnostic Imaging Suites",
    desc: "1.5T MRI, 128-slice CT, ceiling fluoroscopy, and lead-lined radiation shielded architectural room execution with PACS server integration.",
    points: ["Full Lead Radiation Shielding", "OEM Direct Calibration & SAT Handover", "DICOM / PACS Clinical Network Link"],
    image: "/roys_ct_scan.png",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white overflow-hidden">
      <RoysNavbar active="Solutions" />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4"
          >
            TURNKEY HEALTHCARE SOLUTIONS
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
            className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-4 max-w-3xl mx-auto"
          >
            Configurable &amp; Scalable Institutional Solutions
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-7 font-normal"
          >
            Turnkey execution engineered for clinical safety, architectural flexibility, and fast-track institutional deployment.
          </p>
        </div>
      </section>

      {/* ─── Solutions List ────────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-12">
          {TURNKEY_SOLUTIONS.map((sol, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={sol.id}
                data-aos={isEven ? "fade-right" : "fade-left"}
                data-aos-duration="800"
                className={"grid lg:grid-cols-12 gap-8 items-center p-7 rounded-3xl border border-slate-200 bg-[#f8fafc] shadow-xs " + (isEven ? "" : "lg:flex-row-reverse")}
              >
                <div className={"lg:col-span-6 space-y-4 " + (isEven ? "lg:order-1" : "lg:order-2")}>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2563eb]">
                    TURNKEY SUITE INFRASTRUCTURE
                  </span>
                  <h3 className="text-2xl font-black text-[#0f2b48]">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sol.desc}
                  </p>
                  <div className="space-y-2 pt-2">
                    {sol.points.map((pt) => (
                      <div key={pt} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <div className="w-5 h-5 rounded-full bg-blue-100 text-[#2563eb] flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-3">
                    <Link
                      href="/group-companies/roys-roys/contact"
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded bg-[#0f2b48] hover:bg-[#2563eb] text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-200 shadow-sm"
                    >
                      <span>Request Solution Proposal</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className={"lg:col-span-6 " + (isEven ? "lg:order-2" : "lg:order-1")}>
                  <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <Image
                      src={sol.image}
                      alt={sol.title}
                      fill
                      className="object-cover"
                      sizes="600px"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
