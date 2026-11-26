"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Award, FileCheck2 } from "lucide-react";
import { Container } from "./Shared";

export default function About() {
  const highlights = [
    {
      title: "DRAP Liaison & Pre-Audit Verification",
      desc: "Complete documentation and technical file verification aligned with Drug Regulatory Authority of Pakistan standards.",
      icon: ShieldCheck,
    },
    {
      title: "CTD / eCTD Dossier Architecture",
      desc: "Rigorous structuring of Technical Dossier Modules 1 to 5 to eliminate review queries and fast-track approvals.",
      icon: FileCheck2,
    },
    {
      title: "cGMP & Facility Compliance Advisory",
      desc: "Facility gap analysis, validation protocol design, and audit preparation compliant with WHO and PIC/S benchmarks.",
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F8A]/10 border border-[#173F8A]/20 text-[#173F8A] text-xs font-black uppercase tracking-widest mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#2E8B57]" />
              <span>ABOUT GATEWAY PHARMACEUTICALS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-slate-900 leading-[1.15] mb-5">
              Navigating Complex Drug Regulations with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#173F8A] to-[#2E8B57]">
                Precision &amp; Integrity
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-4">
              <strong className="text-slate-900 font-bold">GATEWAY PHARMACEUTICALS CONSULTANTS</strong> is a specialized regulatory consultancy firm operating under the Roysons Group. We assist pharmaceutical manufacturers, importers, biotech enterprises, and healthcare institutions through the intricate pathways of national and international drug licensing.
            </p>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-7">
              From formulation approvals and CTD dossier preparation to cGMP gap analyses and post-marketing compliance, our multidisciplinary council of regulatory pharmacists and legal advisors ensures seamless market authorizations.
            </p>

            {/* Feature Highlights Grid */}
            <div className="space-y-4 mb-8">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#173F8A]/40 hover:bg-slate-50/80 transition-all duration-200 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white text-[#173F8A] border border-slate-200 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                      <Icon size={20} className="text-[#2E8B57]" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-slate-900 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/group-companies/gateway/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold text-white shadow-md transition-all duration-300 hover:bg-[#12316B] active:scale-95 cursor-pointer bg-[#173F8A]"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold text-[#173F8A] border border-slate-300 hover:bg-slate-50 transition-all active:scale-95 cursor-pointer"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Bento Grid Layout */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {/* Top Large Card */}
            <div className="col-span-2 relative h-[280px] sm:h-[320px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group">
              <Image
                src="/gateway/gateway_header_about.jpg"
                alt="Gateway Pharmaceuticals Professional Team"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#2E8B57] text-white inline-block mb-2 shadow-sm">
                  Roysons Group Enterprise
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white leading-snug drop-shadow-sm">
                  10+ Years of Accredited Pharmaceutical Governance
                </h3>
              </div>
            </div>

            {/* Bottom Left Card: Success Metric */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#173F8A] to-[#0F2A5C] text-white shadow-lg flex flex-col justify-between">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-[#34D399] mb-3">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-[#34D399] leading-none mb-1">
                  98%
                </p>
                <p className="text-xs sm:text-[13px] font-bold text-white/90 leading-tight">
                  First-Time Approval Success Rate
                </p>
              </div>
            </div>

            {/* Bottom Right Card: Dossier Milestone */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#173F8A] transition-colors">
              <div className="w-9 h-9 rounded-xl bg-[#2E8B57]/10 text-[#2E8B57] flex items-center justify-center mb-3">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-slate-900 leading-none mb-1">
                  500+
                </p>
                <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-tight">
                  Licenses &amp; Filings Processed
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
