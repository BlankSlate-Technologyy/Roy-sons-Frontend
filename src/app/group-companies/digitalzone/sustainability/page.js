"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Award,
  Leaf,
  Cloud,
  Cpu,
  Sparkles,
  Server,
  Zap,
  Globe2,
  Building2,
  Scale,
} from "lucide-react";
import {
  theme,
  DigitalZoneNavbar,
  DigitalZoneFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/DigitalZoneShared";

const SUSTAINABILITY_STATS = [
  { value: "500+", label: "Sustainable Digital Systems\nDeployed Worldwide", icon: Cloud },
  { value: "40%", label: "Compute Power Cut via\nIntelligent Auto-Scaling", icon: Zap },
  { value: "100%", label: "Compliance with ISO 14001 &\nCloud ESG Standards", icon: ShieldCheck },
  { value: "15+", label: "Years of Green Software\nEngineering Stewardship", icon: Award },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Server,
    title: "Green Data Centers & Renewable Cloud Infrastructure",
    tag: "Green Cloud",
    image: "/images/digitalzone/sustainability_datacenter.jpg",
    desc: "We engineer cloud infrastructure utilizing containerized Kubernetes microservices and serverless architectures that dynamically scale computing nodes down to zero during idle periods, prioritizing 100% renewable-powered cloud regions.",
    features: [
      "Eliminating zombie cloud compute instances and over-provisioned virtual servers",
      "Prioritizing AWS, Azure, and GCP carbon-neutral renewable energy datacenter regions",
      "Intelligent liquid-cooled and thermodynamic server telemetry monitoring",
      "Substantial cloud infrastructure cost savings alongside measurable carbon reductions",
    ],
  },
  {
    icon: Globe2,
    title: "Sustainable Digital Infrastructure & Smart City Systems",
    tag: "Smart Infrastructure",
    image: "/images/digitalzone/sustainability_smart_city.jpg",
    desc: "Developing intelligent IoT telemetry, smart transportation networks, connected energy grids, and green building management systems that optimize metropolitan resource allocation and minimize urban emissions.",
    features: [
      "Dynamic urban traffic signal optimization via edge computer vision algorithms",
      "Smart utility smart-metering and automated water/power loss detection",
      "Decentralized cloud connectivity reducing physical transportation requirements",
      "High-efficiency building automation integrating solar microgrid inverters",
    ],
  },
  {
    icon: Brain,
    title: "Responsible & Ethical Artificial Intelligence",
    tag: "Responsible AI",
    image: "/images/digitalzone/sustainability_responsible_ai.jpg",
    desc: "Our machine learning research prioritizes algorithmic fairness, transparent explainability, data privacy governance, and energy-efficient neural model training using 8-bit quantization and model distillation.",
    features: [
      "Post-training model quantization (INT8/FP4) reducing inference electricity by up to 60%",
      "Strict data lineage tracking and automated algorithmic bias auditing",
      "Transparent model explainability (XAI) and human-in-the-loop validation",
      "Scheduling intensive GPU training runs during regional renewable grid surplus hours",
    ],
  },
  {
    icon: Cpu,
    title: "Code Efficiency & High-Concurrency Software Design",
    tag: "Efficient Code",
    image: "/images/digitalzone/sustainability_hero.jpg",
    desc: "Writing mathematically optimized, compiled backend services in Go, Rust, and optimized C++ runtimes that handle millions of transactions with a fraction of the CPU cycles and memory footprints required by legacy monolithic code.",
    features: [
      "Replacing bloated interpreted scripts with high-performance compiled microservices",
      "Event-driven non-blocking I/O architectures using Redis and Kafka streaming",
      "Zero-copy memory allocations minimizing CPU thermal generation",
      "Continuous performance profiling and memory leak elimination in automated CI/CD",
    ],
  },
];

export default function DigitalZoneSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* ─── EDITORIAL HERO BANNER (USER'S CATCHY HEADLINE) ─────────────────── */}
      <section className="relative min-h-[420px] lg:h-[460px] flex items-center overflow-hidden bg-slate-950">
        <Image
          src="/images/digitalzone/sustainability_hero.jpg"
          alt="Digital Zoning Green Computing & Sustainable Technology"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A30]/95 via-[#0A2540]/85 to-[#061A30]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Green IT &amp; Responsible AI</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Building Technology With A Smaller Footprint
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              We combine intelligent infrastructure, responsible AI and efficient digital systems to create technology that delivers business value while reducing unnecessary resource consumption.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#00A8E8]" />
                <span>Green Cloud &amp; Efficient AI</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#00A8E8]" />
                <span>ISO 14001 Standards</span>
              </span>
              <span>•</span>
              <span>40% Compute Energy Cut</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS COUNTER STRIP ───────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {SUSTAINABILITY_STATS.map((stat, i) => {
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
                    <AnimatedCounter targetValue={stat.value} duration={1400 + i * 100} />
                  </div>
                  <p className="text-[11.5px] font-semibold text-slate-500 uppercase tracking-wider whitespace-pre-line leading-tight">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4 SUSTAINABILITY PILLARS GRID ─────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Engineering Architecture</SectionLabel>
            <SectionHeading center className="mb-3">
              The 4 Pillars of Sustainable Enterprise Technology
            </SectionHeading>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Empirical methodologies ensuring that every line of software, cloud cluster, and AI model delivers maximum enterprise throughput with minimum environmental overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Real Image Header */}
                    <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#061A30]/90 text-white backdrop-blur-xs">
                          {pillar.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#00A8E8] flex items-center justify-center mb-3">
                        <Icon size={18} />
                      </div>

                      <h3 className="text-[17px] font-bold text-[#061A30] mb-2 leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="text-[13px] text-slate-600 leading-relaxed mb-5 font-normal">
                        {pillar.desc}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 pt-4 border-t border-slate-100">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#061A30]">
                          Practice Deliverables &amp; Controls:
                        </p>
                        {pillar.features.map((f) => (
                          <div key={f} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-[#00A8E8]" />
                            <span className="text-[12px] text-slate-600 leading-tight">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/group-companies/digitalzone/contact"
                      className="w-full py-2.5 rounded-lg bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-[#00A8E8] text-xs font-bold text-[#061A30] hover:text-[#00A8E8] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Request Green Cloud Audit</span>
                      <ArrowRight size={13} />
                    </Link>
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
                Sustainable Infrastructure &amp; Green Computing
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Conduct A Green Cloud &amp; AI Efficiency Audit
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our cloud architects and AI researchers to assess your Kubernetes clusters, neural model quantization, and data center energy consumption.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/digitalzone/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#00A8E8] hover:bg-[#0086BA] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Schedule Green IT Audit
              </Link>
              <a
                href="tel:00924238924737"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer"
              >
                <Phone size={15} />
                <span>042-38924737</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <DigitalZoneFooter />
    </main>
  );
}
