import React from "react";
import * as Icons from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Container } from "./Shared";

const VALUES_LIST = [
  {
    label: "Integrity & Ethics",
    iconName: "ThumbsUp",
    desc: "Uncompromising honesty, ethical transparency, and statutory compliance in every regulatory decision.",
    tag: "Ethical Standard",
  },
  {
    label: "Compliance Excellence",
    iconName: "Award",
    desc: "Setting the gold standard in DRAP procedures, cGMP facility readiness, and global regulatory frameworks.",
    tag: "Gold Standard",
  },
  {
    label: "Strict Confidentiality",
    iconName: "Lock",
    desc: "Securing proprietary formulation data, patent secrets, and client filings with ironclad protocols.",
    tag: "Data Security",
  },
  {
    label: "Professionalism",
    iconName: "Star",
    desc: "Governance delivered by certified regulatory pharmacists, legal advisors, and QA lead auditors.",
    tag: "Certified Council",
  },
  {
    label: "Client Commitment",
    iconName: "Users",
    desc: "Dedicated partnership focused on eliminating regulatory roadblocks and ensuring prompt commercial access.",
    tag: "Dedicated Support",
  },
  {
    label: "Technical Accuracy",
    iconName: "BadgeCheck",
    desc: "Zero-defect dossier preparation and rigorous peer-reviewed verification before submission to boards.",
    tag: "Zero-Defect Quality",
  },
  {
    label: "Complete Transparency",
    iconName: "Eye",
    desc: "Unfiltered, proactive visibility into audit findings, filing milestones, and authority evaluations.",
    tag: "Real-Time Tracking",
  },
];

export default function CoreValues() {
  return (
    <section id="core-values" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F8A]/10 border border-[#173F8A]/20 text-[#173F8A] text-xs font-black uppercase tracking-widest mb-3">
            <ShieldCheck size={14} className="text-[#2E8B57]" />
            <span>OUR ETHICAL PILLARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-tight">
            Our Core Values in Pharmaceutical Governance
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium mt-3 leading-relaxed">
            The fundamental principles that guide our regulatory affairs practice, protecting client trust and elevating compliance standards.
          </p>
        </div>

        {/* 12-Column Symmetrical Grid (Row 1: 4 cards, Row 2: 3 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {VALUES_LIST.map((val, index) => {
            const Icon = Icons[val.iconName] || Icons.HelpCircle;
            // First 4 cards take 3 columns (12/4 = 3), next 3 cards take 4 columns (12/3 = 4)
            const colSpan = index < 4 ? "lg:col-span-3" : "lg:col-span-4";

            return (
              <div
                key={val.label}
                className={`${colSpan} group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#173F8A] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#173F8A] to-[#2E8B57] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100 group-hover:bg-[#173F8A] text-[#173F8A] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Icon size={22} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 group-hover:bg-emerald-50 group-hover:text-[#2E8B57] transition-colors">
                      {val.tag}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#173F8A] transition-colors leading-snug mb-2">
                    {val.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {val.desc}
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
