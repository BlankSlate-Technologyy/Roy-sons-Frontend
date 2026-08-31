"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Building2,
  Building,
  ShieldCheck,
  Microscope,
  GraduationCap,
  Pill,
  FlaskConical,
  Factory,
  Check,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";
import { INDUSTRIES_LIST } from "../industries-data";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white">
      <RoysNavbar active="Industries" />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4">
            CROSS-SECTOR SPECIALIZATION
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-4 max-w-3xl mx-auto">
            Industries &amp; Institutional Sectors We Serve
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-7 font-normal">
            Tailored engineering, medical technologies, and infrastructure delivery across public healthcare, armed forces, academia, and global research institutions.
          </p>
        </div>
      </section>

      {/* ─── Industries Grid ───────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES_LIST.map((ind) => (
              <Link
                key={ind.slug}
                href={"/group-companies/roys-roys/industries/" + ind.slug}
                className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-[#2563eb] hover:shadow-lg transition-all duration-200 flex flex-col justify-between group no-underline"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563eb] group-hover:bg-[#2563eb] group-hover:text-white transition-colors flex items-center justify-center mb-3.5">
                    <ind.icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-[#0f2b48] group-hover:text-[#2563eb] transition-colors mb-1.5">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {ind.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#2563eb] group-hover:translate-x-0.5 transition-transform mt-2">
                  <span>Learn More</span>
                  <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
