"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Target,
  Award,
  Users,
  Compass,
  Cpu,
  Globe2,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  theme,
  hexToRgba,
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
  SectionLabel,
  SectionHeading,
} from "../components/AlphaMatrixShared";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Mission-Critical Reliability",
    desc: "Every system is engineered to perform without compromise in high-threat, harsh, and zero-downtime defense environments.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Technological Edge",
    desc: "Pioneering sensor fusion, neural vision analytics, and automated threat interception for faster response times.",
  },
  {
    icon: Lock,
    title: "Zero-Trust Cyber Resilience",
    desc: "Rigorous defense-grade encryption and architectural isolation protecting sensitive operational data streams.",
  },
  {
    icon: Globe2,
    title: "Global Defense Partnerships",
    desc: "Collaborating with world-leading defense OEMs, radar manufacturers, and surveillance leaders to integrate state-of-the-art platforms.",
  },
];

const leadershipPillars = [
  {
    title: "Defense Engineering Leadership",
    desc: "Our multidisciplinary engineering teams possess decades of hands-on experience in military surveillance, electronic warfare integration, and physical security architecture.",
  },
  {
    title: "Turnkey Project Execution",
    desc: "From initial tactical risk surveys and sensor mapping to full-scale on-site deployment, sovereign data integration, and 24/7 technical operations.",
  },
  {
    title: "International Quality Standards",
    desc: "Fully compliant with ISO defense quality benchmarks, international C4ISR interoperability protocols, and strict national security regulations.",
  },
];

export default function AlphaMatrixAboutPage() {
  return (
    <div className="alpha-matrix-theme min-h-screen font-sans selection:bg-[#005691] selection:text-white bg-white" style={{ backgroundColor: theme.bg, color: theme.navy }}>
      <AlphaMatrixNavbar />

      {/* Hero Banner (Clean White Theme) */}
      <section className="relative py-20 lg:py-24 px-6 overflow-hidden border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/alpha_hero_defense.svg"
            alt="Alpha Matrix Defense Overview"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 bg-white/90 shadow-xs" style={{ borderColor: theme.border }}>
            <Award size={14} style={{ color: theme.gold }} />
            <span className="text-[10.5px] font-black uppercase tracking-[0.25em]" style={{ color: theme.gold }}>About Alpha Matrix Defence Systems</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4" style={{ color: theme.navy }}>
            Protecting Nations Through <span style={{ color: theme.gold }}>Advanced Defense Technology</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[13.5px] md:text-[15px] leading-relaxed" style={{ color: theme.textMuted }}>
            A trusted defense and security technology integrator empowering armed forces, intelligence agencies, and critical infrastructure operators with next-generation surveillance and tactical systems.
          </p>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 lg:py-24 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Facility Graphic */}
            <div className="lg:col-span-6 relative min-h-[400px] rounded-2xl overflow-hidden border shadow-sm bg-white" style={{ borderColor: theme.border }}>
              <Image
                src="/alpha_about_facility.svg"
                alt="Alpha Matrix Defense Integration Center"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="text-[11px] font-black uppercase tracking-wider" style={{ color: theme.gold }}>System Integration Facility</p>
                  <p className="text-[14px] font-black uppercase" style={{ color: theme.navy }}>Tactical C4ISR &amp; Sensor Calibration Labs</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <SectionLabel>Our Mission</SectionLabel>
                <SectionHeading className="mb-4">Safeguarding Sovereignty &amp; Critical Assets</SectionHeading>
                <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ color: theme.textMuted }}>
                  To engineer, deploy, and sustain advanced defense technologies that deliver total situational awareness, superior response speed, and uncompromised protection for national borders, defense installations, and critical infrastructure.
                </p>
              </div>

              <div className="pt-4 border-t" style={{ borderColor: theme.border }}>
                <SectionLabel>Our Strategic Vision</SectionLabel>
                <p className="text-[13px] md:text-[14px] leading-relaxed" style={{ color: theme.textMuted }}>
                  To be the global benchmark in intelligent defense systems integration, recognized for cutting-edge AI surveillance, resilient command architectures, and flawless mission execution in complex threat landscapes.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <div className="p-4 rounded-xl border flex-1 min-w-[140px] bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <p className="text-2xl font-black" style={{ color: theme.gold }}>15+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-1" style={{ color: theme.textFaint }}>Years Defense Experience</p>
                </div>
                <div className="p-4 rounded-xl border flex-1 min-w-[140px] bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <p className="text-2xl font-black" style={{ color: theme.gold }}>250+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-1" style={{ color: theme.textFaint }}>Critical Deployments</p>
                </div>
                <div className="p-4 rounded-xl border flex-1 min-w-[140px] bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <p className="text-2xl font-black" style={{ color: theme.gold }}>50+</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider mt-1" style={{ color: theme.textFaint }}>Technology Partners</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 lg:py-24 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionLabel center>Core Principles</SectionLabel>
            <SectionHeading center>The Pillars of Defense Excellence</SectionHeading>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md bg-white"
                style={{ borderColor: theme.border }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border" style={{ borderColor: theme.border, backgroundColor: hexToRgba(theme.gold, 0.08) }}>
                  <Icon size={22} style={{ color: theme.gold }} />
                </div>
                <h3 className="text-[13.5px] font-black uppercase tracking-wide mb-2.5" style={{ color: theme.navy }}>
                  {title}
                </h3>
                <p className="text-[12px] leading-relaxed" style={{ color: theme.textMuted }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Capabilities */}
      <section className="py-20 lg:py-24 px-6 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel>Operational Capability</SectionLabel>
              <SectionHeading>Engineered For Extreme Threat Scenarios</SectionHeading>
              
              {leadershipPillars.map((p, idx) => (
                <div key={idx} className="p-5 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 size={18} style={{ color: theme.gold }} />
                    <h4 className="text-[13px] font-black uppercase" style={{ color: theme.navy }}>{p.title}</h4>
                  </div>
                  <p className="text-[12px] leading-relaxed pl-7" style={{ color: theme.textMuted }}>{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6 p-8 md:p-10 rounded-2xl border shadow-md bg-white" style={{ borderColor: theme.border }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-4 bg-white" style={{ borderColor: theme.border }}>
                <ShieldCheck size={14} style={{ color: theme.gold }} />
                <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: theme.gold }}>Sovereign Standards</span>
              </div>
              <h3 className="text-2xl font-black uppercase mb-4" style={{ color: theme.navy }}>Enterprise &amp; Sovereign Defense Governance</h3>
              <p className="text-[13px] leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Alpha Matrix operates with strict confidentiality, security clearance protocols, and compliance mechanisms to meet the sensitive operational needs of national armed forces and intelligence agencies.
              </p>
              
              <ul className="space-y-3 text-[12.5px]" style={{ color: theme.textMuted }}>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} style={{ color: theme.gold }} />
                  <span>ISO 9001:2015 Quality &amp; ISO 27001 Information Security Certified</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} style={{ color: theme.gold }} />
                  <span>Strict Defense Interoperability (STANAG &amp; C4ISR Compliant)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={16} style={{ color: theme.gold }} />
                  <span>24/7 Redundant Operations &amp; Secure Rapid Support</span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t" style={{ borderColor: theme.border }}>
                <Link
                  href="/group-companies/alpha-matrix/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-[11.5px] font-black uppercase tracking-wider transition-all text-white shadow-xs"
                  style={{ backgroundColor: theme.gold, color: theme.white }}
                >
                  <span>Request Defense Credentials &amp; Briefing</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl text-center">
          <SectionHeading center className="mb-4">Ready To Secure Your Critical Infrastructure?</SectionHeading>
          <p className="text-[13px] max-w-xl mx-auto mb-8" style={{ color: theme.textMuted }}>
            Consult with our defense technology architects to design a bespoke surveillance, perimeter, and command solution.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/group-companies/alpha-matrix/solutions"
              className="px-7 py-3.5 rounded-md text-[12px] font-black uppercase tracking-wider transition-all shadow-md text-white"
              style={{ backgroundColor: theme.gold, color: theme.white }}
            >
              Explore All Solutions
            </Link>
            <Link
              href="/group-companies/alpha-matrix/contact"
              className="px-7 py-3.5 rounded-md text-[12px] font-black uppercase tracking-wider transition-all border bg-white shadow-xs"
              style={{ borderColor: theme.borderStrong, color: theme.navy }}
            >
              Contact Defense Team
            </Link>
          </div>
        </div>
      </section>

      <AlphaMatrixFooter />
    </div>
  );
}
