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
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white overflow-hidden">
      <RoysNavbar active="Industries" />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4"
          >
            CROSS-SECTOR SPECIALIZATION
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
            className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-4 max-w-3xl mx-auto"
          >
            Industries &amp; Institutional Sectors We Serve
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-7 font-normal"
          >
            Tailored engineering, medical technologies, and infrastructure delivery across public healthcare, armed forces, academia, and global research institutions.
          </p>
        </div>
      </section>

      {/* ─── Industries Grid ───────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {INDUSTRIES_LIST.map((ind, idx) => (
              <Link
                key={ind.slug}
                href={"/group-companies/roys-roys/industries/" + ind.slug}
                data-aos="zoom-in"
                data-aos-delay={(idx % 4) * 80 + Math.floor(idx / 4) * 60}
                className="p-5 rounded-[4px] border border-slate-200 bg-white hover:border-[#009688] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group no-underline"
              >
                <div>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[4px] bg-[#f0fdfa] border border-[#0a7a8c]/25 flex items-center justify-center mb-3.5 group-hover:bg-gradient-to-r group-hover:from-[#0077b6] group-hover:via-[#009688] group-hover:to-[#02b875] group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(0,150,136,0.35)] transition-all duration-300 shadow-xs">
                    <ind.icon size={34} strokeWidth={1.8} className="text-[#0a7a8c] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-[#0f2b48] group-hover:text-[#009688] transition-colors mb-1.5">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {ind.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0a7a8c] group-hover:text-[#009688] group-hover:translate-x-0.5 transition-all mt-2">
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
