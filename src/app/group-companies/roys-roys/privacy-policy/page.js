"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Globe,
  CheckCircle2,
  Mail,
  Phone,
  Building2,
  ArrowRight,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white overflow-hidden">
      <RoysNavbar active="About Us" />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4"
          >
            DATA PROTECTION &amp; COMPLIANCE
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
            className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-4 max-w-3xl mx-auto"
          >
            Privacy Policy &amp; Information Governance
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-2 font-normal"
          >
            ROYS &amp; ROYS™ International is committed to safeguarding institutional and client privacy in compliance with global ISO 27001 data security principles.
          </p>
        </div>
      </section>

      {/* ─── Content Section ───────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-white">
        <div className="mx-auto max-w-4xl space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <div data-aos="fade-up" data-aos-delay="100" className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200">
            <h3 className="text-base font-bold text-[#0f2b48] mb-2">1. Information Collection &amp; Scope</h3>
            <p>
              We collect technical specifications, procurement requirements, and organizational contact data solely to evaluate and execute institutional contracting, hospital engineering proposals, and medical device delivery.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200">
            <h3 className="text-base font-bold text-[#0f2b48] mb-2">2. Confidentiality &amp; Institutional Data</h3>
            <p>
              All proprietary project BOQs, architectural layouts, and healthcare equipment tender documentations are protected under strict non-disclosure terms and never shared with unauthorized third parties.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="p-6 rounded-2xl bg-[#f8fafc] border border-slate-200">
            <h3 className="text-base font-bold text-[#0f2b48] mb-2">3. Regulatory Adherence</h3>
            <p>
              Our governance procedures align with international trade compliance standards, ISO 9001 quality management, and relevant national healthcare regulatory bodies.
            </p>
          </div>
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
