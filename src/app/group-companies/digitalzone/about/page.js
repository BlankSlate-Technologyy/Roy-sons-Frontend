"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Code2,
  Layers,
  Cloud,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Phone,
  Users2,
  Sparkles,
} from "lucide-react";
import {
  theme,
  DigitalZoneNavbar,
  DigitalZoneFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/DigitalZoneShared";

const ABOUT_STATS = [
  { value: "15+", label: "Years of Enterprise\nSoftware Excellence", icon: Award },
  { value: "500+", label: "Successful Digital &\nAI Systems Delivered", icon: Code2 },
  { value: "200+", label: "Enterprise &\nGovernment Clients", icon: Users2 },
  { value: "150+", label: "Software & AI\nEngineers on Staff", icon: Brain },
  { value: "99%", label: "System Uptime &\nClient Satisfaction", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: Brain,
    title: "AI-First Innovation",
    desc: "Architecting intelligent software systems that automate manual operations, extract predictive insights, and build proprietary competitive advantages.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security & Integrity",
    desc: "Enforcing SOC-2 and ISO 27001 compliance, end-to-end data encryption, automated vulnerability patching, and strict enterprise privacy standards.",
  },
  {
    icon: Cloud,
    title: "Scalable Cloud Architecture",
    desc: "Designing resilient microservices on Kubernetes, serverless event streams, and multi-cloud frameworks engineered for zero downtime under high load.",
  },
  {
    icon: Code2,
    title: "Agile Engineering Excellence",
    desc: "Deploying rapid bi-weekly sprint releases, automated CI/CD unit testing, rigorous peer code reviews, and transparent client engineering telemetry.",
  },
];

export default function DigitalZoneAboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#3E4F61] font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>About Digital Zoning Corporation</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Architecting Intelligent Digital Systems. <span style={{ color: theme.navy }}>Powering Enterprise Transformation.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Digital Zoning Corporation is a premier artificial intelligence, custom software development, and enterprise cloud consulting company. We engineer scalable digital platforms that enable organizations to optimize workflows, safeguard sensitive data, and scale globally.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/digitalzone/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Platforms &amp; Solutions</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/digitalzone/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Consult AI Architect</span>
                </Link>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/digitalzone_hero_tech.svg"
                  alt="Digital Zoning AI & Enterprise Cloud Systems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062242]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.cyanHover }}>
                      ISO 27001 &amp; SOC-2 Certified
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      500+ Delivered Enterprise Systems
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
                  className="digitalzone-counter-box rounded-2xl border p-6 text-center flex flex-col items-center justify-center bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: `${theme.navy}10` }}>
                    <Icon size={22} style={{ color: theme.navy }} />
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
            <div className="relative w-full h-[380px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
              <Image
                src="/digitalzone_hero_tech.svg"
                alt="AI and Enterprise Cloud Ecosystems"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062242]/85 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8] block mb-1">
                    Enterprise Software Powerhouse
                  </span>
                  <h4 className="text-base font-bold">15+ Years of Digital Innovation Across 25+ Nations</h4>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="space-y-8">
              <div>
                <SectionLabel>Our Core Purpose</SectionLabel>
                <SectionHeading className="mb-4">Mission Statement</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To empower enterprises, financial institutions, and government bodies with intelligent AI automation, robust ERP systems, secure multi-cloud architectures, and mission-critical custom software that accelerate productivity and unlock continuous digital growth.
                </p>
              </div>

              <div className="pt-6 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Strategic Horizon</SectionLabel>
                <SectionHeading className="mb-4">Our Vision</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  To be South Asia&apos;s leading AI and digital engineering organization, recognized worldwide for pioneering ethical artificial intelligence, zero-trust cloud security, and transformative enterprise platforms.
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
              The software architectural rigor, zero-trust cybersecurity protocols, and agile governance that define every product we deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="digitalzone-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.navy}10` }}>
                      <Icon size={26} style={{ color: theme.navy }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.navyDark }}>
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t flex items-center gap-2" style={{ borderColor: theme.border }}>
                    <CheckCircle2 size={15} style={{ color: theme.cyan }} />
                    <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
                      ISO 27001 &amp; SOC-2
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: theme.cyanHover }}>
                BUILDING CUSTOM SOFTWARE, AI MODELS, OR ERP PLATFORMS?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An Enterprise Tech Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our principal software architects to conduct technical discovery, cloud infrastructure audits, and software scoping.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/digitalzone/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Software Proposal</span>
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold border-2 flex items-center gap-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                style={{ borderColor: theme.navy, color: theme.navy }}
              >
                <Phone size={15} />
                <span>0092-42-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DigitalZoneFooter />
    </main>
  );
}
