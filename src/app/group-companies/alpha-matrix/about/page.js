"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Cpu,
  Globe2,
  Lock,
  ArrowRight,
  CheckCircle2,
  Radar,
  Radio,
  Eye,
  Server,
  ChevronRight,
} from "lucide-react";
import {
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
} from "../components/AlphaMatrixShared";

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Mission-Critical Reliability",
    desc: "Every system is engineered to perform without compromise in high-threat, harsh climatic, and zero-downtime defense environments.",
  },
  {
    icon: Cpu,
    title: "AI-Driven Sensory Fusion",
    desc: "Pioneering multi-spectral sensor fusion, neural target identification, and automated threat prioritization for ultra-fast reaction times.",
  },
  {
    icon: Lock,
    title: "Zero-Trust Sovereign Security",
    desc: "Rigorous defense-grade encryption, air-gapped data sovereignty, and strict architectural isolation protecting classified operational streams.",
  },
  {
    icon: Globe2,
    title: "Interoperable Systems Architecture",
    desc: "Full adherence to international STANAG and C4ISR protocols, ensuring seamless cross-branch deployment and mission scalability.",
  },
];

const engineeringDivisions = [
  {
    icon: Radar,
    title: "Advanced Sensor & C4ISR Labs",
    desc: "Integration facilities dedicated to continuous radar calibration, optronic telemetry mapping, and multi-domain sensor alignment.",
  },
  {
    icon: Radio,
    title: "Tactical Communications & EW",
    desc: "Engineering hardened point-to-multipoint frequency-hopping mesh radios and electronic countermeasure suppression shields.",
  },
  {
    icon: Eye,
    title: "Autonomous Counter-UAS Systems",
    desc: "Multi-layered drone detection, RF protocol jamming, and precision kinetic/spoofing interception nodes for air corridor protection.",
  },
  {
    icon: Server,
    title: "Cyber-Physical Hardening Unit",
    desc: "Developing air-gapped server nodes, secure cryptographic key storage, and SCADA protection for critical sovereign infrastructure.",
  },
];

export default function AlphaMatrixAboutPage() {
  return (
    <main className="alpha-matrix-theme min-h-screen font-sans bg-[#08182B] text-slate-100 selection:bg-[#0284C7] selection:text-white">
      <AlphaMatrixNavbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 px-6 overflow-hidden border-b border-white/10 bg-[#08182B]">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-mono">
            <Link href="/group-companies/alpha-matrix" className="hover:text-white transition-colors">
              ALPHA MATRIX
            </Link>
            <ChevronRight size={12} className="text-slate-500" />
            <span className="text-[#38BDF8]">ABOUT US</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0284C7]/30 bg-[#0284C7]/10 mb-4 text-[#38BDF8] text-[11px] font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            CORPORATE OVERVIEW &amp; MISSION
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 max-w-4xl">
            Engineering Strategic Advantage &amp; Sovereign Resilience
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            Alpha Matrix Defence Systems is an international defense technology integrator and security engineering specialist. We deliver mission-critical C4ISR platforms, perimeter surveillance arrays, counter-drone networks, and hardened tactical infrastructures to protect sovereignty and critical assets.
          </p>
        </div>
      </section>

      {/* Narrative & Strategic Intent - Light Section for Visual Rhythm */}
      <section className="py-20 lg:py-24 px-6 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-slate-200 shadow-xl alpha-img-wrapper">
                <Image
                  src="/national-guard-mobile-patrol.png"
                  alt="Alpha Matrix Tactical Operations & Rapid Deployment"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182B]/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#38BDF8] uppercase">Deployment Unit</span>
                    <p className="text-sm font-medium text-white">Tactical Perimeter Security &amp; Mobile Surveillance Fleet</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">Strategic Identity</span>
                <h2 className="text-2xl sm:text-3xl font-medium text-[#08182B] tracking-tight mt-1 mb-4">
                  Safeguarding Critical Assets Through Integrated Technology
                </h2>
                <p className="text-sm text-slate-600 font-normal leading-relaxed mb-4">
                  Modern operational theaters and critical facilities demand real-time awareness, predictive intelligence, and resilient coordination. Founded to bridge high-performance defense engineering with tactical requirements, Alpha Matrix delivers turnkey mission systems from threat analysis to 24/7 lifecycle sustainment.
                </p>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  We integrate multi-spectral sensors, secure mesh telemetry, and automated countermeasure arrays into unified operational software, empowering commanders and security directors with total situational clarity.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-2xl font-semibold text-[#08182B]">15+</p>
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5">Years Experience</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-2xl font-semibold text-[#08182B]">250+</p>
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5">Tactical Sites</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-2xl font-semibold text-[#08182B]">99.98%</p>
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5">C4ISR Uptime</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-2xl font-semibold text-[#08182B]">STANAG</p>
                  <p className="text-[11px] text-slate-500 font-normal mt-0.5">Standardized</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Principles & Values - Dark Section */}
      <section className="py-20 lg:py-24 px-6 bg-[#050E1A] border-b border-white/10">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">Core Tenets</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight mt-1 mb-3">
              The Pillars of Defense Engineering
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-normal">
              Built on strict sovereign discipline, technological superiority, and zero tolerance for operational failure.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-2xl border border-white/10 bg-[#08182B]/60 transition-all duration-300 hover:border-[#0284C7]/50 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 border border-white/10 bg-white/5 text-[#38BDF8]">
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 tracking-wide">
                  {title}
                </h3>
                <p className="text-xs text-slate-400 font-normal leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Divisions & Technical Governance */}
      <section className="py-20 lg:py-24 px-6 bg-[#08182B] border-b border-white/10">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">Operational Units</span>
                <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mt-1 mb-4">
                  Multi-Domain Engineering Disciplines
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                  Our specialized technical divisions work in synchronized concert to provide defense clients with turn-key tactical superiority and resilient operational infrastructure.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {engineeringDivisions.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="p-5 rounded-xl border border-white/10 bg-white/5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3 bg-[#0284C7]/15 text-[#38BDF8]">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-xs font-semibold text-white mb-1.5">{title}</h4>
                    <p className="text-[11px] text-slate-400 font-normal leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl alpha-img-wrapper">
                <Image
                  src="/national-guard-about.png"
                  alt="Alpha Matrix High-Tech Security Access Facility"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08182B] via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#38BDF8] uppercase">Facility Security</span>
                    <p className="text-sm font-medium text-white">Biometric Defense Gateway &amp; Zero-Trust Access Control</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Compliance & Standards - Light Section */}
      <section className="py-20 lg:py-24 px-6 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold tracking-wider text-[#0284C7] uppercase">Quality &amp; Defense Benchmarks</span>
              <h2 className="text-2xl sm:text-3xl font-medium text-[#08182B] tracking-tight">
                Sovereign Governance &amp; Strict Compliance
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                We operate under rigorous national defense compliance guidelines, security clearance frameworks, and international engineering standards to ensure total operational integrity.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#08182B]">ISO 9001:2015 &amp; ISO 27001</p>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5">Certified quality and defense-grade information security management.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#08182B]">STANAG Interoperability</p>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5">Standardized data links and protocols for multi-coalition operations.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#08182B]">Air-Gapped Data Sovereign</p>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5">Zero external telemetry leakage with isolated local computation nodes.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-[#08182B]">24/7 Redundant SLA</p>
                    <p className="text-[11px] text-slate-500 font-normal mt-0.5">Continuous technical field support and rapid component replacement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#08182B] text-white flex items-center justify-center mb-4">
                <Award size={20} />
              </div>
              <h3 className="text-base font-semibold text-[#08182B] mb-2">Defense Credentials &amp; Clearances</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed mb-6">
                Direct government and sovereign client procurement teams can request our defense supplier credentials, classified deployment portfolios, and technical capabilities documents.
              </p>
              <Link
                href="/group-companies/alpha-matrix/contact"
                className="alpha-link-arrow text-xs font-medium text-[#0284C7]"
              >
                <span>Request Defense Dossier</span>
                <ArrowRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Callout Banner */}
      <section className="py-20 px-6 bg-[#050E1A] border-t border-white/10">
        <div className="mx-auto max-w-screen-lg text-center space-y-6">
          <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">Operational Engagement</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white tracking-tight">
            Ready to Bolster Your Critical Defense Architecture?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-xl mx-auto leading-relaxed">
            Consult with our defense systems engineers to plan, integrate, and deploy mission-grade perimeter, sensor, and cyber-physical protection.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/group-companies/alpha-matrix/solutions"
              className="alpha-link-arrow text-xs font-medium text-[#38BDF8] px-5 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <span>Explore Tactical Solutions</span>
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/group-companies/alpha-matrix/contact"
              className="alpha-link-arrow text-xs font-medium text-white px-5 py-2.5 rounded-lg bg-[#0284C7] hover:bg-[#0284C7]/90 transition-colors"
            >
              <span>Contact Command Team</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <AlphaMatrixFooter />
    </main>
  );
}
