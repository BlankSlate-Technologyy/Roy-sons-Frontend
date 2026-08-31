"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  FileCheck,
  Scale,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white">
      <RoysNavbar active="About Us" />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4">
            LEGAL &amp; CONTRACTUAL GOVERNANCE
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-4 max-w-3xl mx-auto">
            Terms of Service &amp; Institutional Contracting
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-2 font-normal">
            Standard operating conditions, project commissioning protocols, and international supply warranties of ROYS &amp; ROYS™ International.
          </p>
        </div>
      </section>

      {/* ─── Content Section ───────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="mx-auto max-w-4xl space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200">
            <h3 className="text-base font-bold text-[#0f2b48] mb-2">1. Contractual Scope &amp; Deliverables</h3>
            <p>
              All engineering projects, turnkey hospital suites, and medical device supplies are governed by formal bilateral contracts and site-specific Acceptance Tests (SAT/FAT).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200">
            <h3 className="text-base font-bold text-[#0f2b48] mb-2">2. Warranty &amp; SLA Guarantees</h3>
            <p>
              Equipment supplied by ROYS &amp; ROYS™ International includes standard OEM manufacturer warranties and certified biomedical technical support services.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200">
            <h3 className="text-base font-bold text-[#0f2b48] mb-2">3. Jurisdiction &amp; International Law</h3>
            <p>
              International trade transactions adhere to standard Incoterms® 2020 rules and applicable regional trade governance frameworks.
            </p>
          </div>
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
