"use client";

import React from "react";
import { Container } from "./Shared";
import { ShieldCheck, Award, FileSpreadsheet, CheckCircle2, Globe2, Building2 } from "lucide-react";

const ACCREDITATIONS = [
  {
    code: "DRAP",
    title: "DRAP Pakistan",
    subtitle: "Liaison & Formulations Approval",
    icon: ShieldCheck,
    badge: "Official Standard",
  },
  {
    code: "WHO-cGMP",
    title: "WHO & PIC/S Alignment",
    subtitle: "Manufacturing & QA Protocols",
    icon: Award,
    badge: "Global Benchmark",
  },
  {
    code: "eCTD",
    title: "CTD / eCTD Modules",
    subtitle: "Dossier Modules 1 to 5",
    icon: FileSpreadsheet,
    badge: "ICH Guidelines",
  },
  {
    code: "ISO 9001",
    title: "ISO 9001:2015",
    subtitle: "Certified Quality Governance",
    icon: CheckCircle2,
    badge: "Audited System",
  },
  {
    code: "MoH",
    title: "Ministry of Health Clearances",
    subtitle: "Cross-Border Commercial Trade",
    icon: Globe2,
    badge: "International",
  },
  {
    code: "GMP GAP",
    title: "Facility Pre-Audit Checks",
    subtitle: "Inspection Readiness Systems",
    icon: Building2,
    badge: "Zero-Defect",
  },
];

export default function TrustedBy() {
  return (
    <section className="py-12 sm:py-14 bg-white border-b border-slate-200">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-black uppercase tracking-widest text-[#2E8B57] block mb-1">
              REGULATORY AUTHORITIES &amp; COMPLIANCE STANDARDS
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Aligned with Leading Pharmaceutical Frameworks
            </h3>
          </div>
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>100% Audit-Ready Methodologies</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {ACCREDITATIONS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group p-4 sm:p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#173F8A] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white group-hover:bg-[#173F8A] text-[#173F8A] group-hover:text-white border border-slate-200 group-hover:border-[#173F8A] transition-colors duration-200 shadow-2xs">
                    <Icon size={18} />
                  </div>
                  <span className="text-[9.5px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 group-hover:text-[#2E8B57] group-hover:border-[#2E8B57]/30 transition-colors">
                    {item.code}
                  </span>
                </div>

                <div>
                  <h4 className="text-xs sm:text-[13px] font-black text-slate-900 leading-snug group-hover:text-[#173F8A] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-500 mt-1 leading-tight line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
