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
  { value: "40%", label: "Compute Power Cut via\nIntelligent Auto-Scaling", icon: Leaf },
  { value: "100%", label: "Compliance with ISO 14001 &\nCloud ESG Standards", icon: ShieldCheck },
  { value: "15+", label: "Years of Green Software\nEngineering Stewardship", icon: Award },
];

const SUSTAINABILITY_PILLARS = [
  {
    icon: Cloud,
    title: "Green Cloud Computing & Server Dynamic Auto-Scaling",
    desc: "We engineer cloud infrastructure utilizing containerized Kubernetes microservices and serverless architectures that dynamically scale computing nodes down to zero during idle periods, eliminating wasted energy.",
    features: [
      "Eliminating zombie cloud instances and over-provisioned virtual servers",
      "Prioritizing AWS, Azure, and GCP carbon-neutral renewable energy datacenter regions",
      "Substantial long-term cloud hosting cost savings alongside carbon footprint reductions",
    ],
  },
  {
    icon: Cpu,
    title: "Carbon-Efficient AI Models & Quantized Neural Inference",
    desc: "Our machine learning engineering optimizes model architectures using post-training 8-bit quantization (INT8), sparse matrix pruning, and model distillation, delivering lightning-fast inference with up to 60% less GPU electricity consumption.",
    features: [
      "Lightweight edge AI computer vision models running on low-wattage hardware",
      "Efficient transformer architectures minimizing floating-point compute operations per token",
      "Green AI training pipelines scheduled during regional renewable grid surplus hours",
    ],
  },
  {
    icon: Leaf,
    title: "100% Paperless Digital Enterprise Automation",
    desc: "Our custom ERP platforms, digital document workflows, and e-invoicing systems eliminate physical paper trails, postage logistics, and warehouse filing cabinets for enterprises and government agencies.",
    features: [
      "Secure cryptographic digital signatures and automated cloud audit trails",
      "Saving millions of sheets of paper and preserving forest ecosystems across client networks",
      "Streamlining cross-departmental business processes from days down to seconds",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Circular Hardware Life Cycles & E-Waste Reduction",
    desc: "By migrating legacy physical server rooms into managed virtual cloud environments, we help organizations reduce physical electronic hardware replacement cycles and dispose of obsolete tech through certified e-waste recycling programs.",
    features: [
      "Virtual cloud migration extending terminal workstation lifespans via thin-client apps",
      "Zero landfill hazardous e-waste policy in all corporate research facilities",
      "Continuous ESG carbon reporting telemetry integrated into client dashboards",
    ],
  },
];

export default function DigitalZoneSustainabilityPage() {
  return (
    <main className="min-h-screen bg-white text-[#3E4F61] font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Green Computing &amp; Sustainable AI</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Sustainable Software Engineering For <span style={{ color: theme.navy }}>A Carbon-Efficient Future</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                At Digital Zoning Corporation, sustainable computing is foundational to our architecture. Through green cloud infrastructure, optimized AI inference algorithms, paperless enterprise workflows, and e-waste circularity, we engineer software that maximizes performance while minimizing carbon footprint.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/group-companies/digitalzone/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Request Green Cloud Audit</span>
                  <ArrowRight size={16} />
                </Link>

                <Link
                  href="/group-companies/digitalzone/projects"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navyDark }}
                >
                  <span>Explore Client Deployments</span>
                </Link>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/digitalzone_hero_tech.svg"
                  alt="Sustainable Cloud Computing and AI Systems"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062242]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#38BDF8]">
                      Green Cloud Engineering
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      40% Energy Cut · Quantized AI Inference
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
            {SUSTAINABILITY_STATS.map((stat, i) => {
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

      {/* Sustainability Pillars Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Strategic Framework</SectionLabel>
            <SectionHeading center className="mb-4">Our 4 Pillars of Sustainable Software Engineering</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Proven architectural methodologies designed to maximize computing throughput, energy efficiency, and digital carbon reduction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="digitalzone-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.navy}10` }}>
                      <Icon size={26} style={{ color: theme.navy }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3" style={{ color: theme.navyDark }}>
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {pillar.desc}
                    </p>

                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(210, 227, 243, 0.7)" }}>
                      {pillar.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <CheckCircle2 size={15} className="flex-shrink-0 text-[#00A8E8]" />
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
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0086BA]">
                OPTIMIZE YOUR CLOUD INFRASTRUCTURE &amp; ESG TELEMETRY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Build Carbon-Efficient Enterprise Software &amp; AI
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Receive full cloud cost audits, algorithm quantization assessments, and sustainable computing architecture recommendations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/digitalzone/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Green Cloud Review</span>
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
