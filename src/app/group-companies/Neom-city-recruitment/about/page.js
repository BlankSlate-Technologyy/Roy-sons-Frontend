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
  UserSearch,
  MessageSquare,
  ClipboardList,
  FileCheck,
  HardHat,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Sparkles,
  Plane,
} from "lucide-react";
import {
  theme,
  NeomRecruitmentNavbar,
  NeomRecruitmentFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/NeomRecruitmentShared";

const ABOUT_STATS = [
  { value: "20+", label: "Years of Recruitment\nExcellence", icon: Award },
  { value: "50000+", label: "Successful Global\nTalent Placements", icon: Users2 },
  { value: "2000+", label: "Corporate Enterprise\nClients Worldwide", icon: Building2 },
  { value: "500+", label: "Recruitment Specialists\n& Talent Advisors", icon: User },
  { value: "98%", label: "Client Satisfaction\n& Placement Retention", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: UserSearch,
    title: "Precision Executive Search",
    desc: "Deploying proprietary candidate matching algorithms and executive headhunting networks to recruit transformational C-suite leadership.",
  },
  {
    icon: Globe2,
    title: "Global Mobility & Overseas Reach",
    desc: "Managing full-cycle international visa processing, credential attestation, and compliant overseas mobilization across Saudi Arabia, the GCC, UK, and Europe.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical ILO Recruitment Standards",
    desc: "Strict adherence to International Labour Organization (ILO) standards, ensuring transparent employment contracts and fair worker treatment.",
  },
  {
    icon: Users,
    title: "End-to-End Workforce Partnership",
    desc: "From initial workforce planning and psychometric assessments to onboarding, payroll outsourcing, and post-placement retention support.",
  },
];

export default function NeomRecruitmentAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomRecruitmentNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Neom City Recruitment Consultants</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Connecting Exceptional Talent. <span style={{ color: theme.blue }}>Building Global Workforces.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Neom City Recruitment Consultants is a premier human resources and talent acquisition consultancy. Specializing in executive search, overseas workforce deployment for mega-developments in Saudi Arabia and the GCC, talent mapping, and complete HR operations outsourcing, we empower organizations with high-performing global human capital.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/Neom-city-recruitment/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.blue }}
                >
                  <span>Explore Industry Sectors</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/Neom-city-recruitment/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-sky-50/50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Request Talent Acquisition</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-sky-50/50" style={{ borderColor: theme.border }}>
                <Image
                  src="/neomrecruitment_hero_talent.svg"
                  alt="Neom City Recruitment Consultants Talent Command"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.blue }}>
                      ILO Standards &amp; Bureau of Emigration
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      50,000+ Placements · 2,000+ Corporate Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Number Counters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ABOUT_STATS.map((stat, idx) => {
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
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: theme.textMuted }}>
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Graphic */}
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-sky-50/50" style={{ borderColor: theme.border }}>
              <Image
                src="/neomrecruitment_hero_talent.svg"
                alt="Global Human Capital & Overseas Mobilization"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#00A896] block mb-1">
                    Human Capital Leadership
                  </span>
                  <h4 className="text-base font-bold">20+ Years of International Recruitment Integrity</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To bridge world-class talent with transformative enterprise opportunities globally, delivering compliant, rapid, and ethical workforce solutions that power economic innovation and elevate professional careers.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Global Talent Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be South Asia&apos;s most respected and technologically advanced international recruitment consultancy, celebrated worldwide for mobilizing high-caliber human capital for giga-projects, smart cities, and Fortune 500 corporations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Guiding Principles</SectionLabel>
            <SectionHeading center className="mb-4">Our Core Values</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              The vetting precision, ethical compliance, and human-centric integrity that govern every talent placement we execute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="nr-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.blue}10` }}>
                      <Icon size={26} style={{ color: theme.blue }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.navyDark }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.teal }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.blue }}>
                      ILO Compliant
                    </span>
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
                HIRING FOR MEGA-PROJECTS, HOSPITALS, TECH OR CORPORATE EXPANSION?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An Enterprise Workforce Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our senior talent acquisition directors and overseas recruitment specialists to initiate candidate sourcing, psychometric testing, and visa mobilization.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/Neom-city-recruitment/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.blue }}
              >
                <span>Initiate Hiring Request</span>
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
