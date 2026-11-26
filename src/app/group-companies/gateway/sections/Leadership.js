"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, Mail, ArrowRight, UserCheck } from "lucide-react";
import { Container } from "./Shared";

const LEADERS = [
  {
    name: "Ijaz Naseer",
    role: "Chairman & Chief Executive Officer",
    company: "Roysons Group & Gateway Pharmaceuticals",
    image: "/logos/chairman.jpeg",
    bio: "Pioneering industrial governance, institutional growth, and global trade partnerships across healthcare, biotechnology, and commercial manufacturing.",
    badge: "Executive Leadership",
    credentials: "Visionary Governance",
  },
  {
    name: "Hesham Sultan Ijaz",
    role: "Executive Director",
    company: "Gateway Pharmaceuticals Consultants",
    image: "/Hesham Sultan Ijaz.jpg.jpeg",
    bio: "Spearheading regulatory operations, institutional licensing mandates, cross-border client relations, and modern corporate compliance systems.",
    badge: "Operations Director",
    credentials: "Strategic Advisory",
  },
  {
    name: "Dr. Tariq Mahmood",
    role: "Head of Regulatory Affairs & CTD Dossiers",
    company: "Gateway Regulatory Practice",
    image: "/team/healthcare_specialist.jpg",
    bio: "Senior regulatory affairs specialist managing technical CTD modules, DRAP liaison protocols, formulation clearances, and pharmacovigilance.",
    badge: "Regulatory Lead",
    credentials: "Pharm.D / Reg. Affairs",
  },
  {
    name: "Engr. Farhan Siddiqui",
    role: "Director, Quality Compliance & cGMP Audits",
    company: "Gateway Technical Services",
    image: "/team/project_management.jpg",
    bio: "Expert in pharmaceutical manufacturing facility audits, cleanroom validation, sterile protocols, and international WHO-GMP inspection readiness.",
    badge: "Quality Director",
    credentials: "cGMP Lead Auditor",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 sm:py-20 lg:py-24 bg-slate-50 border-t border-b border-slate-200">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F8A]/10 border border-[#173F8A]/20 text-[#173F8A] text-xs font-black uppercase tracking-widest mb-3">
              <UserCheck size={14} className="text-[#2E8B57]" />
              <span>Executive Leadership &amp; Advisory Council</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Guided by Seasoned Pharmaceutical Regulatory Leadership
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-3 leading-relaxed">
              Our multidisciplinary council combines decades of collective experience in DRAP procedures, cGMP facility audits, CTD dossier execution, and commercial healthcare law.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#12316B] active:scale-95 cursor-pointer bg-[#173F8A]"
            >
              <span>Consult Our Experts</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Leaders Grid (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERS.map((leader) => (
            <div
              key={leader.name}
              className="group bg-white rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#173F8A] hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo Container with Top Badge */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Floating Role Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/95 text-[#173F8A] shadow-xs backdrop-blur-xs">
                      {leader.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-bold text-[#34D399] block tracking-wide">
                      {leader.credentials}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#173F8A] transition-colors leading-tight mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-xs font-extrabold text-[#2E8B57] uppercase tracking-wide mb-1 leading-snug">
                    {leader.role}
                  </p>
                  <p className="text-[11.5px] font-semibold text-slate-500 mb-3 leading-tight">
                    {leader.company}
                  </p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-3">
                    {leader.bio}
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-500">
                  Available for Advisory
                </span>
                <Link
                  href="#contact"
                  className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#173F8A] text-slate-600 group-hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                  aria-label={`Inquire with ${leader.name}`}
                >
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
