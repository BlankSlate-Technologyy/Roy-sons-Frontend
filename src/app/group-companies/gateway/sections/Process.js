"use client";

import React from "react";
import { Container } from "./Shared";
import {
  Search,
  FileCheck2,
  FileSpreadsheet,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  GitBranch,
} from "lucide-react";

const STEPS = [
  {
    step: "01",
    phase: "Phase 1: Discovery",
    title: "Initial Regulatory Audit & Gap Analysis",
    desc: "Exhaustive evaluation of product formulation, facility licenses, and manufacturing readiness against DRAP and statutory criteria.",
    deliverable: "Gap Assessment Matrix",
    icon: Search,
  },
  {
    step: "02",
    phase: "Phase 1: Discovery",
    title: "Technical Review & Formulation Strategy",
    desc: "Vetting active ingredients (APIs), excipients, stability data, and packaging specifications to guarantee formula acceptability.",
    deliverable: "Formulation Feasibility Report",
    icon: FileCheck2,
  },
  {
    step: "03",
    phase: "Phase 2: Execution",
    title: "ICH CTD / eCTD Dossier Assembly",
    desc: "Rigorous structuring of Technical Modules 1 through 5 (Administrative, Quality, Non-Clinical, and Clinical) with zero documentation defects.",
    deliverable: "Complete Submission Dossier",
    icon: FileSpreadsheet,
  },
  {
    step: "04",
    phase: "Phase 2: Execution",
    title: "Statutory Filing & Fee Administration",
    desc: "Official application lodging with the Drug Regulatory Authority of Pakistan (DRAP) or target international health ministry.",
    deliverable: "Official Filing Tracking ID",
    icon: Building2,
  },
  {
    step: "05",
    phase: "Phase 3: Approval",
    title: "Authority Representation & Query Defense",
    desc: "Direct technical liaison before evaluation panels, addressing scrutiny letters, and defending dossier specifications.",
    deliverable: "Board Clearance Consensus",
    icon: ShieldCheck,
  },
  {
    step: "06",
    phase: "Phase 3: Approval",
    title: "Market Authorization & Lifecycle Management",
    desc: "Issuance of Form 7 Registration / License, followed by proactive variation filings, pharmacovigilance, and timely renewals.",
    deliverable: "Official Registration Certificate",
    icon: CheckCircle2,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F8A]/10 border border-[#173F8A]/20 text-[#173F8A] text-xs font-black uppercase tracking-widest mb-3">
            <GitBranch size={14} className="text-[#2E8B57]" />
            <span>THE 6-STEP REGULATORY ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
            A Systematic Pathway to Fast-Track Market Authorization
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-3 leading-relaxed">
            Our structured 3-phase methodology ensures zero filing errors, rapid authority turnaround, and comprehensive post-approval protection.
          </p>
        </div>

        {/* 6-Step Roadmap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 relative">
          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.step}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-[#173F8A] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header with Step Badge & Phase */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[#173F8A] shadow-2xs">
                      {step.phase}
                    </span>
                    <span className="w-10 h-10 rounded-2xl bg-[#173F8A] text-white flex items-center justify-center font-black text-sm font-mono shadow-sm">
                      {step.step}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white text-[#2E8B57] border border-slate-200 flex items-center justify-center mb-3.5 shadow-2xs group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-base font-black text-slate-900 group-hover:text-[#173F8A] transition-colors leading-snug mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>

                {/* Milestone Output Pill */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="text-slate-500 font-medium">Deliverable:</span>
                  <span className="text-[#2E8B57] font-black">{step.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
