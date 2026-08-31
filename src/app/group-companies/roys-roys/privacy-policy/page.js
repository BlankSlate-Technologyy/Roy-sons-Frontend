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

export default function PrivacyPolicyPage() {
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
          <span className="font-semibold text-[#113658]">Privacy Policy</span>
        </div>
      </div>

      {/* ─── Hero Section ───────────────────────────────────────────────────────── */}
      <section className="relative bg-[#0b2138] text-white py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#071728] via-[#0b2138] to-[#113658] opacity-95" />
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#B49438] text-xs font-extrabold uppercase tracking-widest mb-4">
            <ShieldCheck size={14} />
            <span>ROYS &amp; ROYS INTERNATIONAL</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 max-w-4xl mx-auto">
            Privacy Policy &amp; Data Protection
          </h1>

          <p className="text-white/85 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Commitment to transparency, data integrity, confidentiality, and international compliance across all institutional trading, procurement, and healthcare services.
          </p>

          <p className="text-xs text-[#B49438] font-bold uppercase tracking-wider mt-4">
            Last Updated: August 2026 • Version 2.4
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
              <span>Introduction &amp; Purpose</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-4">
              ROYS &amp; ROYS International (&quot;we,&quot; &quot;our,&quot; or &quot;the Company&quot;), a premier member of the ROYSONS Group of Companies, is committed to safeguarding the privacy and confidential information of our clients, institutional partners, government agencies, healthcare facilities, and website visitors.
            </p>
            <p className="text-[16px] leading-relaxed">
              This Privacy Policy explains how we collect, process, manage, and protect commercial, technical, and personal data gathered through our digital platforms, institutional procurement channels, project tenders, and formal correspondence.
            </p>
          </div>

          {/* Section 2 */}
          <div className="border-b border-[#e2e8f0] pb-8">
            <h2 className="text-2xl font-black text-[#113658] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#113658]/10 text-[#113658] text-sm flex items-center justify-center font-mono font-black">02</span>
              <span>Information We Collect</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-4">
              We collect information necessary to facilitate international trade, government contracting, turnkey medical equipment supply, and engineering project execution:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {[
                { title: "Institutional & Contact Data", desc: "Corporate name, official email, phone numbers, department designation, and physical billing/delivery address." },
                { title: "Tender & Project Specifications", desc: "Clinical equipment requirements, facility architectural layouts, BOQ (Bill of Quantities), and technical delivery specifications." },
                { title: "Commercial & Procurement Details", desc: "Purchase orders, letter of credit (L/C) references, customs documentation, and logistics tracking records." },
                { title: "Technical Platform Inquiries", desc: "Product inquiry submissions, service consultation requests, IP logs, and browser performance analytics." },
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
              <span>How We Utilize Your Information</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-4">
              Information collected is strictly utilized for authorized business purposes, including:
            </p>
            <ul className="space-y-3 pl-2">
              {[
                "Preparing institutional tenders, technical bids, and commercial pricing quotations.",
                "Executing cross-border supply chain logistics, customs clearance, and turnkey delivery.",
                "Providing biomedical commissioning, calibration certificates, and post-installation technical SLA support.",
                "Ensuring regulatory compliance with international health standards (WHO-GMP, ISO 13485, CE, FDA, PPRA).",
                "Communicating critical product updates, service advisories, and contract execution milestones.",
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
              <span>Data Protection &amp; Confidentiality</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-4">
              We employ enterprise-grade security protocols, encryption algorithms, and physical access controls across our internal data architecture. All proprietary architectural blueprints, tender bids, and commercial contracts are classified as strictly confidential and accessible solely to authorized project personnel.
            </p>
            <p className="text-[16px] leading-relaxed">
              We do not sell, lease, or monetize client data under any circumstances. Information is only shared with accredited logistics partners, customs authorities, and regulatory bodies when legally required for shipment execution.
            </p>
          </div>

          {/* Section 5 */}
          <div className="border-b border-[#e2e8f0] pb-8">
            <h2 className="text-2xl font-black text-[#113658] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#113658]/10 text-[#113658] text-sm flex items-center justify-center font-mono font-black">05</span>
              <span>International Data Transfers &amp; Compliance</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-4">
              As an international enterprise operating across global supply corridors, project records may be processed in partner jurisdictions adhering to internationally recognized standards of data security (including GDPR-equivalent frameworks for international trade).
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-black text-[#113658] mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#113658]/10 text-[#113658] text-sm flex items-center justify-center font-mono font-black">06</span>
              <span>Privacy Inquiries &amp; Contact</span>
            </h2>
            <p className="text-[16px] leading-relaxed mb-6">
              For any questions regarding this Privacy Policy, data access requests, or confidential commercial handling inquiries, please contact our Legal &amp; Compliance Office:
            </p>

            <div className="p-6 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
              <p className="font-extrabold text-[#113658] text-lg">ROYS &amp; ROYS International — Compliance Directorate</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-[#475569]">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-[#B49438]" />
                  <span>privacy@roysroysinternational.com</span>
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
            Need Further Information on Our Commercial Terms?
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Review our complete Terms and Conditions or speak directly with our international legal and procurement team.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/group-companies/roys-roys/terms-and-conditions"
              className="px-7 py-3.5 rounded-sm bg-[#B49438] hover:bg-[#009088] text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2"
            >
              <span>View Terms &amp; Conditions</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/group-companies/roys-roys/contact"
              className="px-6 py-3.5 rounded-sm border border-white/30 hover:bg-white hover:text-[#020f1f] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300"
            >
              <span>Contact Compliance Team</span>
            </Link>
          </div>
        </div>
      </section>

      <RoysFooter />
    </div>
  );
}
