"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Code2,
  Layers,
  Cloud,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Award,
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

const IT_SERVICES = [
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence & Machine Learning",
    subtitle: "Custom LLMs, Computer Vision & Predictive Neural Models",
    desc: "Developing production-grade machine learning pipelines, fine-tuned large language models (LLMs), AI automation bots, and real-time computer vision telemetry.",
    image: "/digitalzone_hero_tech.svg",
    tag: "AI & Machine Learning",
    icon: Brain,
    deliverables: [
      "Custom Enterprise Large Language Model (LLM) fine-tuning and RAG document intelligence",
      "Real-time video analytics and automated computer vision object detection models",
      "Predictive financial forecasting, fraud detection, and customer churn machine learning",
      "Automated AI business workflow orchestrators with human-in-the-loop governance",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Enterprise Software & SaaS Platforms",
    subtitle: "Scalable Microservices, Next-Gen Web Apps & High-Load APIs",
    desc: "Engineering tailored enterprise web platforms, multi-tenant SaaS architectures, distributed microservices, and high-throughput real-time database backends.",
    image: "/digitalzone_hero_tech.svg",
    tag: "Enterprise Engineering",
    icon: Code2,
    deliverables: [
      "High-concurrency distributed backend systems built with Node.js, Go, Python, and PostgreSQL",
      "Modern responsive frontend user experiences with Next.js, React, and TypeScript",
      "Robust REST and GraphQL API gateways with rate limiting and automated documentation",
      "Event-driven architectures using Apache Kafka, RabbitMQ, and Redis distributed caching",
    ],
  },
  {
    id: "erp-solutions",
    title: "Enterprise Resource Planning (ERP) Systems",
    subtitle: "Finance, Supply Chain, HRMS & Manufacturing Workflows",
    desc: "Implementing centralized ERP platforms that connect financial accounting, multi-location inventory, procurement, manufacturing floor operations, and payroll.",
    image: "/digitalzone_hero_tech.svg",
    tag: "Enterprise ERP",
    icon: Layers,
    deliverables: [
      "General ledger accounting, automated tax invoicing, and multi-currency treasury modules",
      "Real-time barcoded inventory tracking, batch expiry management, and automated purchase orders",
      "HRMS payroll automation, employee self-service portals, and biometric attendance sync",
      "Custom manufacturing bills of materials (BOM), production scheduling, and shop floor telemetry",
    ],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing & DevOps Engineering",
    subtitle: "Multi-Cloud Migration, Kubernetes & Automated CI/CD Pipelines",
    desc: "Provisioning high-availability cloud infrastructure on AWS, Azure, and Google Cloud with automated Docker containerization, Kubernetes orchestration, and 99.99% uptime.",
    image: "/digitalzone_hero_tech.svg",
    tag: "Cloud & DevOps",
    icon: Cloud,
    deliverables: [
      "Infrastructure as Code (IaC) utilizing Terraform, Ansible, and Helm charts",
      "Auto-scaling Kubernetes (EKS/GKE/AKS) cluster deployments with zero downtime rollouts",
      "Automated CI/CD deployment pipelines on GitHub Actions and GitLab CI with security scanning",
      "Comprehensive cloud cost optimization, server monitoring, and distributed log aggregation",
    ],
  },
  {
    id: "cybersecurity",
    title: "Zero-Trust Cybersecurity & Threat Defense",
    subtitle: "SOC-2 Compliance, Penetration Testing & 24/7 SIEM Monitoring",
    desc: "Protecting mission-critical digital assets with proactive vulnerability assessments, penetration testing, endpoint threat detection, and zero-trust identity architectures.",
    image: "/digitalzone_hero_tech.svg",
    tag: "Cyber Defense",
    icon: ShieldCheck,
    deliverables: [
      "Comprehensive web application, API, and network penetration testing (VAPT)",
      "Zero-Trust Architecture (ZTA) implementation with mutual TLS and role-based access (RBAC)",
      "24/7 Security Operations Center (SOC) telemetry, SIEM log analysis, and incident containment",
      "Compliance audit readiness for ISO 27001, SOC-2 Type II, GDPR, and PCI-DSS",
    ],
  },
  {
    id: "mobile-apps",
    title: "Native & Cross-Platform Mobile Applications",
    subtitle: "High-Performance iOS & Android Apps with Offline-First Sync",
    desc: "Crafting fluid, intuitive native and hybrid mobile applications for consumer engagement, field technician operations, executive dashboards, and secure mobile payments.",
    image: "/digitalzone_hero_tech.svg",
    tag: "Mobile Development",
    icon: Smartphone,
    deliverables: [
      "Native iOS (Swift) and Android (Kotlin) development optimized for maximum hardware performance",
      "High-velocity cross-platform mobile apps built on React Native and Flutter frameworks",
      "Offline-first local SQLite / WatermelonDB database synchronization with automatic cloud merge",
      "Biometric authentication (FaceID/Fingerprint), push notifications, and payment gateway integration",
    ],
  },
];

const SERVICE_STATS = [
  { value: "15+", label: "Years Experience", icon: Award },
  { value: "500+", label: "Completed Projects", icon: Code2 },
  { value: "150+", label: "Engineers on Staff", icon: Users2 },
  { value: "99%", label: "System Uptime", icon: ShieldCheck },
];

export default function DigitalZoneServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = IT_SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-[#3E4F61] font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Enterprise Technology &amp; AI Engineering</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
                Comprehensive IT Solutions For <span style={{ color: theme.navy }}>Global Enterprises</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                From production-grade artificial intelligence and custom SaaS platforms to unified ERP systems, multi-cloud Kubernetes infrastructure, and zero-trust cybersecurity, Digital Zoning delivers uncompromised software performance.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#services-catalog"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>Explore All 6 Divisions</span>
                  <ArrowRight size={16} />
                </a>

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
                  alt="Digital Zoning IT & Cloud Capabilities"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062242]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.cyanHover }}>
                      Enterprise Software Engineering
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navyDark }}>
                      Custom AI · ERP Systems · Cloud &amp; Security
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
            {SERVICE_STATS.map((stat, idx) => {
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

      {/* Services Grid Section */}
      <section id="services-catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SectionLabel center>Our Core Divisions</SectionLabel>
            <SectionHeading center className="mb-4">Specialized Software &amp; AI Capabilities</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Engineered in accordance with ISO 27001, SOC-2 Type II, and modern cloud microservices architectures.
            </p>

            {/* Live Search */}
            <div className="mt-8 flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search IT capabilities (e.g. AI, ERP, Cloud, Security, Mobile)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A3A6B] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="digitalzone-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    {/* Card Image */}
                    <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0A3A6B]" style={{ borderColor: theme.border }}>
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.navy}10` }}>
                          <Icon size={20} style={{ color: theme.navy }} />
                        </div>
                        <div>
                          <h3 className="text-lg font-black leading-tight" style={{ color: theme.navyDark }}>
                            {svc.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#0086BA]">
                        {svc.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                        {svc.desc}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-2.5 pt-4 border-t" style={{ borderColor: "rgba(210, 227, 243, 0.7)" }}>
                        <p className="text-xs font-extrabold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                          Key Engineering Deliverables:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#00A8E8]" />
                            <span className="text-xs font-medium text-slate-700 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/digitalzone/contact"
                      className="w-full py-3 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors cursor-pointer"
                      style={{ borderColor: theme.border, color: theme.navyDark }}
                    >
                      <span>Inquire About This Division</span>
                      <ArrowRight size={14} />
                    </Link>
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
                ENTERPRISE DIGITAL TRANSFORMATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Ready To Modernize Your Enterprise Tech Stack?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                Speak with our chief software director to conduct system architecture reviews, AI feasibility assessments, and software pricing.
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
