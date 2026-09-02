"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Brain,
  Code2,
  Layers,
  Cloud,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  ChevronDown,
  Clock,
  Phone,
  Search,
  Send,
  Sparkles,
  Users2,
  ArrowRight,
  Server,
  Lock,
} from "lucide-react";
import {
  theme,
  DigitalZoneNavbar,
  DigitalZoneFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "./components/DigitalZoneShared";

const STATS = [
  { icon: Award, value: "15+", label: "Years of Enterprise\nSoftware Experience" },
  { icon: Code2, value: "500+", label: "Delivered Software &\nAI Deployments" },
  { icon: Users2, value: "200+", label: "Enterprise &\nGovernment Clients" },
  { icon: Brain, value: "150+", label: "Software & AI\nEngineers on Staff" },
  { icon: ShieldCheck, value: "99%", label: "Uptime SLA &\nSOC-2 Compliance" },
];

const SERVICES = [
  {
    icon: Brain,
    title: "Artificial Intelligence & ML",
    desc: "Custom LLMs, RAG semantic search, computer vision object detection, and predictive neural network analytics.",
    href: "/group-companies/digitalzone/services#artificial-intelligence",
    img: "/digitalzone_hero_tech.svg",
  },
  {
    icon: Code2,
    title: "Custom Enterprise Software",
    desc: "Scalable microservices, distributed SaaS platforms, high-concurrency database backends, and Next.js web apps.",
    href: "/group-companies/digitalzone/services#custom-software",
    img: "/digitalzone_hero_tech.svg",
  },
  {
    icon: Layers,
    title: "Enterprise ERP Systems",
    desc: "Unified ERP platforms covering financial general ledgers, multi-warehouse inventory, HRMS, and manufacturing workflows.",
    href: "/group-companies/digitalzone/services#erp-solutions",
    img: "/digitalzone_hero_tech.svg",
  },
  {
    icon: Cloud,
    title: "Cloud Computing & DevOps",
    desc: "Auto-scaling Kubernetes infrastructure across AWS, Azure, and GCP with automated CI/CD deployment pipelines.",
    href: "/group-companies/digitalzone/services#cloud-computing",
    img: "/digitalzone_hero_tech.svg",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Cybersecurity",
    desc: "SOC-2 Type II and ISO 27001 compliant security, penetration testing (VAPT), 24/7 SIEM monitoring, and data encryption.",
    href: "/group-companies/digitalzone/services#cybersecurity",
    img: "/digitalzone_hero_tech.svg",
  },
  {
    icon: Smartphone,
    title: "Mobile Application Development",
    desc: "Native iOS Swift, Android Kotlin, and high-performance React Native / Flutter apps with offline-first synchronization.",
    href: "/group-companies/digitalzone/services#mobile-apps",
    img: "/digitalzone_hero_tech.svg",
  },
];

const SOLUTIONS_PREVIEW = [
  {
    name: "DigitalZone CoreERP Platform",
    tag: "Enterprise ERP Suite",
    desc: "Centralized general ledger, automated multi-warehouse inventory, payroll, and manufacturing BOM.",
    img: "/digitalzone_hero_tech.svg",
  },
  {
    name: "DigitalZone CortexAI Engine",
    tag: "Enterprise AI Engine",
    desc: "Fine-tuned LLM document extraction, automated customer support agents, and predictive telemetry.",
    img: "/digitalzone_hero_tech.svg",
  },
  {
    name: "DigitalZone ZeroTrust CyberShield",
    tag: "Zero-Trust Cyber Defense",
    desc: "Real-time SIEM event correlation, mutual TLS API proxy, and automated security incident containment.",
    img: "/digitalzone_hero_tech.svg",
  },
];

const PROCESS_STEPS = [
  { num: "01", title: "Technical Discovery & Scope", desc: "Analyzing user workflows, business objectives, data schemas, and software architecture requirements." },
  { num: "02", title: "Cloud Architecture & UI/UX", desc: "Designing microservices diagrams, database schemas, interactive Figma prototypes, and API specifications." },
  { num: "03", title: "Agile Sprint Development", desc: "Executing 2-week agile sprint iterations with peer code reviews, Git branching, and automated unit testing." },
  { num: "04", title: "Security & Performance QA", desc: "Conducting automated load testing, vulnerability scans (VAPT), SOC-2 compliance checks, and regression tests." },
  { num: "05", title: "Zero-Downtime Deployment", desc: "Provisioning auto-scaling Kubernetes clusters, database migrations, and CI/CD production pipelines." },
  { num: "06", title: "24/7 NOC & Continuous Scaling", desc: "Providing 24/7 monitoring, telemetry logging, feature upgrades, and dedicated engineering SLAs." },
];

const FAQS = [
  {
    q: "What tech stacks does Digital Zoning Corporation specialize in?",
    a: "We specialize in modern enterprise technology stacks including Next.js, React, Node.js, Python, Go, PostgreSQL, Redis, Apache Kafka, Kubernetes, AWS, Microsoft Azure, Google Cloud, and PyTorch for AI/ML development.",
  },
  {
    q: "Can Digital Zoning develop custom ERP platforms tailored to our workflow?",
    a: "Yes. We engineer customized ERP systems with tailored general ledger accounting, multi-warehouse barcoded inventory, HRMS payroll, procurement workflows, and manufacturing bills of materials (BOM).",
  },
  {
    q: "How does Digital Zoning ensure data security and compliance?",
    a: "We enforce zero-trust security architectures, end-to-end AES-256 and mutual TLS encryption, automated penetration testing (VAPT), and full compliance readiness for ISO 27001, SOC-2 Type II, and GDPR.",
  },
  {
    q: "Does Digital Zoning offer on-premises air-gapped AI deployment?",
    a: "Yes. We deploy custom large language models (LLMs) and computer vision inference pipelines on private on-premises GPU clusters or dedicated virtual private clouds (VPC) with zero external data leakage.",
  },
];

export default function DigitalZoneHomePage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="min-h-screen bg-white text-[#3E4F61] font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* Hero Section with AI & Cloud Visual */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Leading AI &amp; Enterprise Software Development</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Intelligent Digital Systems. <span style={{ color: theme.navy }}>Built For Global Scale.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                Transforming businesses through artificial intelligence, enterprise software, ERP solutions, cloud computing, cybersecurity, and digital transformation. Digital Zoning Corporation builds intelligent digital ecosystems engineered for high performance.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/digitalzone/solutions"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore Platforms</span>
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

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/digitalzone_hero_tech.svg"
                  alt="Enterprise AI and Cloud Infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062242]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-[#0086BA]">
                        500+ Delivered Systems
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      Custom AI · Enterprise ERP · Multi-Cloud
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {STATS.map((stat, i) => {
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
                  <div className="mb-1" style={{ color: theme.navyDark }}>
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
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

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Visual */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden border shadow-lg group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/digitalzone_hero_tech.svg"
                  alt="Enterprise AI and Software Capabilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062242]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs font-black uppercase tracking-widest text-[#38BDF8] mb-1">
                      Enterprise Digital Engineering
                    </p>
                    <h4 className="text-base font-bold">15+ Years of Scalable Software Innovation</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <SectionLabel>About Our Enterprise</SectionLabel>
              <SectionHeading className="mb-6">Building Scalable Digital Ecosystems</SectionHeading>

              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Digital Zoning Corporation provides integrated software development, AI model engineering, cloud modernization, and zero-trust cybersecurity solutions. From initial requirements analysis and UX prototyping to microservices engineering and global production rollout, we deliver software that meets the highest standards of reliability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#00A8E8] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">ISO 27001 &amp; SOC-2 Certified</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <CheckCircle2 size={18} className="text-[#00A8E8] flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-800">500+ Delivered Digital Systems</span>
                </div>
              </div>

              <Link
                href="/group-companies/digitalzone/about"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all hover:gap-3 text-[#0A3A6B]"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>What We Deliver</SectionLabel>
              <SectionHeading>Our Core Divisions</SectionHeading>
            </div>

            <Link
              href="/group-companies/digitalzone/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.navyDark }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="digitalzone-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="relative w-full h-48 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-7">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${theme.navy}10` }}>
                        <Icon size={20} style={{ color: theme.navy }} />
                      </div>

                      <h3 className="text-lg font-black mb-2.5" style={{ color: theme.navyDark }}>
                        {svc.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-4" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href={svc.href}
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navyDark }}
                    >
                      <span>Explore Division</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Solutions Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <SectionLabel>Engineered Platforms</SectionLabel>
              <SectionHeading>Featured Software Platforms</SectionHeading>
            </div>

            <Link
              href="/group-companies/digitalzone/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
              style={{ color: theme.navy }}
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS_PREVIEW.map((p) => (
              <div
                key={p.name}
                className="digitalzone-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={p.img}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#00A8E8]/15 text-[#0086BA] inline-block mb-3">
                      {p.tag}
                    </span>
                    <h3 className="text-xl font-black mb-2" style={{ color: theme.navyDark }}>
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <Link
                    href="/group-companies/digitalzone/contact"
                    className="w-full py-2.5 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer"
                    style={{ borderColor: theme.border, color: theme.navyDark }}
                  >
                    <span>Request Specs</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Pathway Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Disciplined Engineering</SectionLabel>
            <SectionHeading center className="mb-4">6-Stage Software Engineering Lifecycle</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              From initial technical discovery to microservices design, automated CI/CD deployment, and 24/7 monitoring.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="p-8 rounded-3xl border bg-white shadow-xs flex flex-col justify-between"
                style={{ borderColor: theme.border }}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm text-white mb-6 shadow-sm" style={{ backgroundColor: theme.navy }}>
                    {step.num}
                  </div>
                  <h4 className="text-base font-bold mb-3" style={{ color: theme.navyDark }}>
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Frequently Asked Questions</SectionLabel>
            <SectionHeading center className="mb-4">Everything You Need To Know</SectionHeading>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={faq.q}
                className="rounded-2xl border overflow-hidden bg-white shadow-xs transition-all"
                style={{ borderColor: theme.border }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base cursor-pointer"
                  style={{ color: theme.navyDark }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 flex-shrink-0 ${
                      openFaq === idx ? "rotate-180 text-[#00A8E8]" : "text-slate-400"
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-medium leading-relaxed border-t pt-4 text-slate-600" style={{ borderColor: theme.border }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0086BA]">
                READY TO COMMENCE YOUR ENTERPRISE DIGITAL INITIATIVE?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Schedule An Architecture Consultation
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Connect with our principal software architects to review microservices blueprints, AI feasibility models, and enterprise pricing.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/digitalzone/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Project Proposal</span>
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