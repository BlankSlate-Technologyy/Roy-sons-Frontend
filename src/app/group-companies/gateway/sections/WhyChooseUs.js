"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  FileCheck2,
  Lock,
  Building2,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "./Shared";

const PILLARS = [
  {
    step: "01",
    title: "In-Depth Regulatory Expertise",
    desc: "Comprehensive command of local DRAP laws, US-FDA guidelines, EMA regulations, and WHO-GMP frameworks to insulate client filings from delays and rejections.",
    icon: ShieldCheck,
    tag: "DRAP & Global Laws",
  },
  {
    step: "02",
    title: "Senior Pharmacists & Legal Council",
    desc: "A multidisciplinary team composed of certified regulatory pharmacists, legal advisors, formulation specialists, and ex-regulatory compliance officers.",
    icon: Award,
    tag: "Certified Specialists",
  },
  {
    step: "03",
    title: "Zero-Defect Dossier Assembly",
    desc: "ICH CTD Modules 1 to 5 engineered with exhaustive technical peer verification, minimizing authority review cycles and accelerating approvals.",
    icon: FileCheck2,
    tag: "CTD / eCTD Standard",
  },
  {
    step: "04",
    title: "Confidential Data Governance",
    desc: "Strict non-disclosure agreements, secure document control, and ethical data management protecting your proprietary formulation secrets.",
    icon: Lock,
    tag: "100% Confidentiality",
  },
  {
    step: "05",
    title: "Direct Authority Liaison",
    desc: "Proactive representation before statutory boards, fast-tracking document flow, resolving queries, and securing commercial authorization.",
    icon: Building2,
    tag: "Authority Representation",
  },
  {
    step: "06",
    title: "Proven 98% Clearance Record",
    desc: "A multi-year portfolio spanning 200+ product registrations, 500+ licenses, and long-standing corporate partnerships across 7 healthcare sectors.",
    icon: TrendingUp,
    tag: "98% Success Rate",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden border-t border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2E8B57]/10 border border-[#2E8B57]/20 text-[#2E8B57] text-xs font-black uppercase tracking-widest mb-3">
            <CheckCircle2 size={14} className="text-[#2E8B57]" />
            <span>THE GATEWAY ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
            Why Leading Pharma Enterprises Partner with Gateway
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-3 leading-relaxed">
            We eliminate the bureaucratic friction of pharmaceutical market entry, delivering turnkey licensing and compliance strategies that safeguard your commercial investments.
          </p>
        </div>

        {/* 6-Pillar Feature Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PILLARS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#173F8A] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Accent Top Border Indicator */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#173F8A] to-[#2E8B57] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header: Icon & Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100 group-hover:bg-[#173F8A] text-[#173F8A] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-black text-slate-400 group-hover:text-[#2E8B57] transition-colors font-mono tracking-wider">
                      {item.step}
                    </span>
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-50 text-[#2E8B57] border border-emerald-200/60 inline-block mb-2">
                    {item.tag}
                  </span>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#173F8A] transition-colors leading-snug mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#173F8A] group-hover:text-[#2E8B57] transition-colors">
                  <span>Guaranteed Compliance</span>
                  <CheckCircle2 size={14} className="text-[#2E8B57]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-[#173F8A] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-white leading-tight mb-1">
              Have an Upcoming DRAP Inspection or Dossier Filing?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200 font-medium">
              Schedule a confidential pre-submission review with our senior regulatory officers.
            </p>
          </div>
          <Link
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-900 bg-[#34D399] hover:bg-[#2ee6ad] transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Book Pre-Audit Review</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
