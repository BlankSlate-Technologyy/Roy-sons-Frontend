"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  FileCheck,
  ShieldCheck,
  Scale,
  Award,
  Globe,
  CheckCircle2,
  Mail,
  Phone,
  Building2,
  ArrowRight,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";

const COLORS = {
  primary:     "#113658",
  primaryDark: "#0a2238",
  gold:        "#B49438",
  white:       "#ffffff",
  black:       "#000000",
  border:      "#e2e8f0",
  light:       "#f8fafc",
  teal:        "#009088",
  muted:       "#4a5568",
};

export default function TermsAndConditionsPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827]">
      <RoysNavbar active="Company" />

      {/* ─── Breadcrumb ─────────────────────────────────────────────────────────── */}
      <div className="bg-[#f1f5f9] border-b border-[#e2e8f0] py-3 px-4 sm:px-6">
        <div className="mx-auto max-w-screen-xl flex items-center gap-2 text-xs text-[#64748b]">
          <Link href="/group-companies/roys-roys" className="hover:text-[#113658] transition-colors">
            Home
          </Link>
          <ChevronRight size={13} />
          <span className="font-semibold text-[#113658]">Terms &amp; Conditions</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0b2138] text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#071728] via-[#0b2138] to-[#113658] opacity-95" />
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#B49438] text-xs font-extrabold uppercase tracking-widest mb-4">
            <Scale size={14} />
            <span>ROYS &amp; ROYS INTERNATIONAL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 max-w-4xl mx-auto">
            Terms &amp; Conditions of Service
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Institutional terms, tender guidelines, equipment warranties, international procurement standards, and contractual provisions governing our global operations.
          </p>

          <p className="text-xs text-[#B49438] font-bold uppercase tracking-wider mt-4">
            Effective Date: August 2026 • Official Procurement Policy
          </p>
        </div>
      </section>

      {/* ─── Content Body ───────────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-4xl space-y-12 text-[#334155] leading-relaxed">
          
          {/* Section 1 */}
          <div className="border-b border-[#e2e8f0] pb-8">
            <h2 className="text-2xl font-black text-[#113658] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#113658]/10 text-[#113658] text-sm flex items-center justify-center font-mono font-black">01</span>
              <span>Acceptance of Terms &amp; Scope</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-4">
              These Terms and Conditions govern all commercial quotations, institutional contracts, international import and export transactions, turnkey healthcare projects, and equipment procurement agreements executed by ROYS &amp; ROYS International.
            </p>
            <p className="text-[16px] leading-relaxed">
              By issuing a Purchase Order, submitting an RFP/tender document, entering into a supply contract, or utilizing our specialized services, the client agrees to be bound by these provisions and all associated technical schedules.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border-b border-[#e2e8f0] pb-8">
            <h2 className="text-2xl font-black text-[#113658] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#113658]/10 text-[#113658] text-sm flex items-center justify-center font-mono font-black">02</span>
              <span>Tenders, Quotations &amp; Commercial Pricing</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-4">
              All commercial proposals, quotations, and proforma invoices issued by ROYS &amp; ROYS International remain valid for the period specified therein (typically 30 to 60 calendar days), unless otherwise altered due to global currency fluctuations, international freight surcharges, or statutory tariff revisions.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                { title: "Standard Incoterms", desc: "Transactions conform to ICC Incoterms 2020 (CIF, FOB, CIP, DDP, or EXW as mutually agreed)." },
                { title: "Payment Instruments", desc: "Confirmed Irrevocable Letters of Credit (L/C), advance TT bank transfers, or milestone-based institutional contracts." },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0]">
                  <h4 className="text-[15px] font-black text-[#113658] mb-1.5">{item.title}</h4>
                  <p className="text-[14px] text-[#64748b] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3 */}
          <div className="border-b border-[#e2e8f0] pb-8">
            <h2 className="text-2xl font-black text-[#113658] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#113658]/10 text-[#113658] text-sm flex items-center justify-center font-mono font-black">03</span>
              <span>Equipment Quality &amp; International Standards</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-4">
              All medical machinery, laboratory diagnostic systems, cleanroom installations, and pharmaceutical supplies furnished by the Company adhere strictly to internationally recognized accreditations:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "ISO 13485:2016 (Medical Devices Quality Management) and ISO 9001:2015 certification.",
                "CE (European Conformity) markings and US-FDA clearance for clinical diagnostic equipment.",
                "WHO-GMP compliant manufacturing and pharmaceutical supply verification.",
                "HTM 02-01 and NFPA 99 standards for medical gas pipeline infrastructure.",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[15.5px]">
                  <CheckCircle2 size={18} className="text-[#009088] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4 */}
          <div className="border-b border-[#e2e8f0] pb-8">
            <h2 className="text-2xl font-black text-[#113658] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#113658]/10 text-[#113658] text-sm flex items-center justify-center font-mono font-black">04</span>
              <span>Installation, Commissioning &amp; Warranty</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-4">
              Capital equipment deliveries include certified biomedical installation, site acceptance testing (SAT), factory calibration, and clinical user training. Standard warranties range from 12 to 36 months, covering manufacturing defects, parts replacement, and authorized service support.
            </p>
            <p className="text-[16px] leading-relaxed">
              Extended Service Level Agreements (SLA) and Annual Maintenance Contracts (AMC/CMC) are available upon contract execution with 24/7 technical emergency response.
            </p>
          </div>

          {/* Section 5 */}
          <div className="border-b border-[#e2e8f0] pb-8">
            <h2 className="text-2xl font-black text-[#113658] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#113658]/10 text-[#113658] text-sm flex items-center justify-center font-mono font-black">05</span>
              <span>Force Majeure &amp; Delivery Timelines</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-4">
              While we maintain exceptional supply chain agility, neither party shall be held liable for delays resulting from events beyond reasonable control, including acts of God, global maritime shipping embargos, port congestion, sovereign customs disputes, or regional trade sanctions.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-black text-[#113658] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#113658]/10 text-[#113658] text-sm flex items-center justify-center font-mono font-black">06</span>
              <span>Governing Law &amp; Dispute Resolution</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-6">
              All commercial agreements and terms of trade shall be construed and governed in accordance with the laws of the jurisdiction specified in the bilateral contract, with disputes referred to recognized international arbitration councils.
            </p>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
              <p className="font-extrabold text-[#113658] text-lg">Contractual Support &amp; Legal Desk</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-[#475569]">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-[#B49438]" />
                  <span>legal@roysroysinternational.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-[#B49438]" />
                  <span>+92 000 000 0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 size={16} className="text-[#B49438]" />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#020f1f] text-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Ready to Discuss Tender or Contract Requirements?
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Connect with our institutional procurement directors and engineering specialists to initiate project planning.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/group-companies/roys-roys/contact"
              className="px-7 py-3.5 rounded-sm bg-[#B49438] hover:bg-[#009088] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
            >
              <span>Submit Project Inquiry</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/group-companies/roys-roys/privacy-policy"
              className="px-6 py-3.5 rounded-sm border border-white/30 hover:bg-white hover:text-[#020f1f] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>View Privacy Policy</span>
            </Link>
          </div>
        </div>
      </section>

      <RoysFooter />
    </div>
  );
}
