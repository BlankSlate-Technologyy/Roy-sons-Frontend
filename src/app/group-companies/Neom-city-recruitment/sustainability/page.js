"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Users2,
  User,
  Building2,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Sparkles,
  HeartHandshake,
  FileCheck,
  Scale,
} from "lucide-react";
import {
  theme,
  NeomRecruitmentNavbar,
  NeomRecruitmentFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NeomRecruitmentShared";

const ETHICAL_STATS = [
  { value: "50000+", label: "Ethically Placed\nGlobal Professionals", icon: Users2 },
  { value: "0%", label: "Zero Worker Fee\nFair Recruitment Policy", icon: ShieldCheck },
  { value: "100%", label: "Verified Transparent\nEmployment Contracts", icon: FileCheck },
  { value: "20+", label: "Years of Responsible\nHuman Capital Stewardship", icon: Award },
];

const ETHICAL_PILLARS = [
  {
    icon: ShieldCheck,
    title: "Employer-Pays Ethical Recruitment Principle",
    desc: "Strict adherence to the International Labour Organization (ILO) General Principles and Operational Guidelines for Fair Recruitment, prohibiting worker-paid recruitment fees.",
    features: [
      "Zero recruitment, visa processing, or placement fees charged to job applicants",
      "Eliminating the risk of debt bondage and ensuring fair compensation from day one",
      "Full employer sponsorship of airfares, visas, and pre-departure medical checkups",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Worker Welfare & Overseas Living Standards",
    desc: "Every international employer partner undergoes thorough pre-contract audits ensuring that overseas accommodations, catering, healthcare, and safety protocols exceed statutory standards.",
    features: [
      "Pre-deployment physical inspection of worker housing camps and catering facilities",
      "Comprehensive medical insurance coverage and 24/7 worker helpline support",
      "Zero tolerance for workplace discrimination, harassment, or unsafe conditions",
    ],
  },
  {
    icon: FileCheck,
    title: "Transparent Multilingual Employment Contracts",
    desc: "Guaranteeing that all candidates receive clear, legally attested employment contracts in their native language prior to departure, detailing exact wages, working hours, and benefits.",
    features: [
      "Dual-language employment contracts (English, Urdu & Arabic) with no hidden clauses",
      "Strict prohibition of contract substitution or salary downgrading upon arrival",
      "Registration and attestation with the Bureau of Emigration and Overseas Employment",
    ],
  },
  {
    icon: Scale,
    title: "Biometric DataFlow Credential Verification",
    desc: "Deploying enterprise background verification and DataFlow Primary Source Verification (PSV) to ensure 100% authentic academic degrees, trade licenses, and clean records.",
    features: [
      "Primary Source Verification of medical, engineering, and vocational certificates",
      "Biometric fingerprint verification eliminating identity fraud and proxy testing",
      "Comprehensive criminal background checks and behavioral reference assessments",
    ],
  },
];

export default function NeomRecruitmentSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomRecruitmentNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Ethical Recruitment &amp; Worker Welfare</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Ethical Global Recruitment For A <span style={{ color: theme.blue }}>Fair Human Capital Future</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Neom City Recruitment Consultants, human dignity and ethical integrity guide every placement. Through ILO-aligned employer-pays principles, comprehensive worker welfare audits, transparent multilingual contracts, and primary source credential verification, we champion fair global employment.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/Neom-city-recruitment/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.blue }}
                >
                  <span>Request Ethical Hiring Scoping</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/Neom-city-recruitment/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Explore Global Deployments</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-sky-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/neomrecruitment_hero_talent.svg"
                  alt="Ethical Recruitment and Global Worker Welfare"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#00A896]">
                      ILO Fair Recruitment Certified
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      Zero Worker Fees · Transparent Contracts · DataFlow PSV
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ETHICAL_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="nr-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.blue}10` }}>
                    <Icon size={22} style={{ color: theme.blue }} />
                  </div>
                  <div className="mb-2" style={{ color: theme.navyDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ethical Pillars Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Ethical Recruitment Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Responsible Workforce Mobility</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Zero worker recruitment fees, rigorous employer accommodation vetting, transparent employment contracts, and primary source background screening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ETHICAL_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="nr-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.blue}10` }}>
                      <Icon size={26} style={{ color: theme.blue }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.navyDark }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(226, 232, 240, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#00A896]" />
                          <span className="text-xs font-medium text-slate-700">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0072CE]">
                ALIGN YOUR ENTERPRISE WITH GLOBAL ESG &amp; ETHICAL HIRING
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Partner In Ethical Global Workforce Deployment
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full ILO compliance verification, transparent employment agreement templates, and audited worker mobilization plans.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/Neom-city-recruitment/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Request Ethical Scoping</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                style={{ borderColor: theme.blue, color: theme.blue }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <NeomRecruitmentFooter />
    </main>
  );
}
