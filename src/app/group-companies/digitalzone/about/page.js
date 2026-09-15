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
  Server,
  Lock,
  Cpu,
  Globe2,
  Zap,
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
  { value: "99.9%", label: "System Uptime &\nClient Satisfaction", icon: ShieldCheck },
];

const CORE_VALUES = [
  {
    icon: Brain,
    title: "AI-First Architectural Innovation",
    desc: "Architecting intelligent software systems that automate manual operations, extract predictive insights from unstructured data, and generate defensible competitive advantages.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security & Fiduciary Integrity",
    desc: "Enforcing SOC-2 and ISO 27001 compliance, end-to-end AES-256 data encryption, automated vulnerability patching, and strict enterprise privacy standards.",
  },
  {
    icon: Cloud,
    title: "Scalable Multi-Cloud Infrastructure",
    desc: "Designing resilient microservices on Kubernetes, serverless event streams, and multi-cloud frameworks engineered for zero downtime under hyper-scale concurrency.",
  },
  {
    icon: Code2,
    title: "Agile Software Engineering Rigor",
    desc: "Deploying rapid bi-weekly sprint releases, automated CI/CD unit testing, peer code reviews, Git branching protocols, and transparent client engineering telemetry.",
  },
];

const WHY_CHOOSE_US = [
  {
    title: "Air-Gapped On-Premises AI Inference",
    desc: "Deploy proprietary large language models and cognitive agents on private on-premises GPU infrastructure with guaranteed zero data leakage.",
  },
  {
    title: "SOC-2 Type II & ISO 27001 Certified",
    desc: "Every system, database schema, and microservice is engineered under strict international compliance and continuous security telemetry.",
  },
  {
    title: "Unified Enterprise ERP Ecosystems",
    desc: "Customized ERP suites integrating general ledgers, barcoded multi-warehouse inventory, automated procurement, and manufacturing BOMs.",
  },
  {
    title: "24/7 Site Reliability Engineering (SRE)",
    desc: "Round-the-clock proactive monitoring, automated anomaly detection, and rapid incident resolution backstopped by guaranteed SLA contracts.",
  },
];

export default function DigitalZoneAboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* ─── EDITORIAL HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative min-h-[420px] lg:h-[460px] flex items-center overflow-hidden bg-slate-950">
        <Image
          src="/images/digitalzone/about_ecosystem.jpg"
          alt="Digital Zoning Corporation Connected Enterprise Digital Ecosystem"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A30]/95 via-[#0A2540]/85 to-[#061A30]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Corporate Engineering Profile</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Architecting Scalable Digital Ecosystems for Global Scale
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              Digital Zoning Corporation is an enterprise technology powerhouse specializing in AI model engineering, mission-critical custom software, integrated ERP platforms, and zero-trust cybersecurity ecosystems.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#00A8E8]" />
                <span>Established 2011</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#00A8E8]" />
                <span>ISO 27001 &amp; SOC-2 Certified</span>
              </span>
              <span>•</span>
              <span>Lahore • Islamabad • Karachi</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ───────────────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {ABOUT_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 text-center flex flex-col items-center justify-center shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2.5 bg-cyan-50 text-[#00A8E8]">
                    <Icon size={20} />
                  </div>
                  <div className="text-[#061A30] mb-1">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider whitespace-pre-line leading-tight">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHO WE ARE / TEAM SECTION ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6">
              <SectionLabel>Who We Are</SectionLabel>
              <SectionHeading className="mb-5">
                Engineers, Architects &amp; Researchers Building Next-Gen Systems
              </SectionHeading>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p>
                  Digital Zoning Corporation (Pvt) Ltd was established with a singular mission: to provide large-scale organizations with the software engineering rigor, mathematical data science, and cloud resilience required to dominate in a software-driven global economy.
                </p>
                <p>
                  Our multidisciplinary engineering council comprises senior software architects, machine learning researchers, certified Kubernetes administrators, and zero-trust cybersecurity specialists based across our innovation centers in Lahore, Islamabad, and Karachi.
                </p>
                <p>
                  As an integral technology anchor within the Roy &amp; Sons enterprise portfolio, Digital Zoning maintains dedicated R&amp;D testbeds for generative AI inference, high-throughput microservices, and private enterprise blockchain networks.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#061A30] bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                  <Brain size={16} className="text-[#00A8E8]" />
                  <span>AI &amp; LLM Engineering Lab</span>
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-[#061A30] bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
                  <Server size={16} className="text-[#00A8E8]" />
                  <span>AWS &amp; Azure Certified Architects</span>
                </span>
              </div>
            </div>

            {/* Right Photography */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                <Image
                  src="/images/digitalzone/about_team.jpg"
                  alt="Digital Zoning Senior Software Architects and AI Leadership Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A30]/90 via-[#061A30]/20 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#00A8E8] block mb-1">
                      Engineering Leadership
                    </span>
                    <h3 className="text-base sm:text-lg font-bold">
                      Multidisciplinary Software &amp; AI Architects
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Collaborating on distributed cloud backends, LLM models, and enterprise security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TECHNOLOGY INNOVATION & ARCHITECTURE ──────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <Image
                  src="/images/digitalzone/about_innovation.jpg"
                  alt="Software Architects Designing Microservices and Cloud Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A30]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#00A8E8] block mb-1">
                      Architecture Blueprinting
                    </span>
                    <p className="text-sm font-semibold">
                      Microservices, event-driven streaming, and zero-trust API gateways.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-6">
              <SectionLabel>Technology Innovation</SectionLabel>
              <SectionHeading className="mb-4">
                Disciplined Architecture Backed by Modern Stacks
              </SectionHeading>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                We believe that modern enterprise software must be engineered like critical infrastructure: fault-tolerant, horizontally scalable, and self-healing. Our architecture teams reject monolithic complexity in favor of clean microservices, automated CI/CD test coverage, and strict API governance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <Zap size={18} className="text-[#00A8E8] mb-2" />
                  <h4 className="text-sm font-bold text-[#061A30]">Event-Driven Streaming</h4>
                  <p className="text-xs text-slate-500 mt-1">High-throughput Kafka and Redis streams handling millions of events/sec.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                  <Lock size={18} className="text-[#00A8E8] mb-2" />
                  <h4 className="text-sm font-bold text-[#061A30]">Zero-Trust Authorization</h4>
                  <p className="text-xs text-slate-500 mt-1">Mutual TLS, ephemeral cryptographic tokens, and least-privilege RBAC.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION SPLIT ────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 shadow-xs">
              <SectionLabel>Our Core Purpose</SectionLabel>
              <h3 className="text-xl font-bold text-[#061A30] mb-3">
                Mission Statement
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                To empower enterprises, financial institutions, and government bodies with intelligent AI automation, robust ERP systems, secure multi-cloud architectures, and mission-critical custom software that accelerate productivity, eliminate technical debt, and unlock continuous digital growth.
              </p>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 shadow-xs">
              <SectionLabel>Strategic Horizon</SectionLabel>
              <h3 className="text-xl font-bold text-[#061A30] mb-3">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                To be South Asia&apos;s leading AI and digital engineering organization, recognized globally for pioneering ethical artificial intelligence, zero-trust cloud security, and transformative enterprise platforms that move businesses forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE DIGITAL ZONING ─────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Strategic Differentiator</SectionLabel>
            <SectionHeading center className="mb-3">
              Why Leading Enterprises Trust Digital Zoning
            </SectionHeading>
            <p className="text-sm text-slate-600 font-normal">
              Enterprise engineering advantages built on uncompromised code quality, private data custody, and transparent SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#00A8E8]/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-md bg-cyan-50 text-[#00A8E8] flex items-center justify-center mb-3">
                  <CheckCircle2 size={18} />
                </div>
                <h4 className="text-sm font-bold text-[#061A30] mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ───────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Guiding Principles</SectionLabel>
            <SectionHeading center className="mb-3">
              Our Institutional Values
            </SectionHeading>
            <p className="text-sm text-slate-600">
              The architectural standards, security protocols, and engineering governance that define every platform we deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#00A8E8]/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-cyan-50 text-[#00A8E8] flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-[15px] font-bold text-[#061A30] mb-2">
                      {val.title}
                    </h3>
                    <p className="text-[12.5px] text-slate-600 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#00A8E8] uppercase tracking-wider">
                    <ShieldCheck size={13} />
                    <span>ISO 27001 Certified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-[#061A30] to-[#0A2540] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A8E8] block mb-2">
                Engage Our Software &amp; AI Architects
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Ready To Build Your Next Digital System?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our technology architects in Lahore, Islamabad, or Karachi to review your technical requirements and software implementation roadmap.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/digitalzone/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#00A8E8] hover:bg-[#0086BA] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Start A Conversation
              </Link>
              <Link
                href="/group-companies/digitalzone/services"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-semibold tracking-wide transition-all text-center cursor-pointer"
              >
                Explore Practices
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DigitalZoneFooter />
    </main>
  );
}
