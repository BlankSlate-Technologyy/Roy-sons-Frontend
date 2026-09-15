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
  Server,
  Lock,
  Cpu,
} from "lucide-react";
import {
  theme,
  DigitalZoneNavbar,
  DigitalZoneFooter,
  SectionLabel,
  SectionHeading,
  AnimatedCounter,
} from "../components/DigitalZoneShared";

const ALL_SERVICES = [
  {
    id: "artificial-intelligence",
    title: "Artificial Intelligence & Machine Learning",
    subtitle: "Custom LLMs, Computer Vision & Predictive Neural Models",
    desc: "Developing production-grade machine learning pipelines, fine-tuned private large language models (LLMs), automated cognitive agents, and real-time computer vision telemetry.",
    image: "/images/digitalzone/service_ai_ml.jpg",
    tag: "AI & Machine Learning",
    icon: Brain,
    techStack: ["PyTorch", "Hugging Face", "LangChain", "CUDA", "vLLM", "Python"],
    deliverables: [
      "Custom Enterprise Large Language Model (LLM) fine-tuning and private RAG document intelligence",
      "Real-time video analytics and automated computer vision object detection pipelines",
      "Predictive financial forecasting, fraud detection, and customer churn machine learning models",
      "Autonomous AI business workflow orchestrators with human-in-the-loop governance",
    ],
  },
  {
    id: "custom-software",
    title: "Custom Enterprise Software & SaaS Platforms",
    subtitle: "Scalable Microservices, Next-Gen Web Apps & High-Load APIs",
    desc: "Engineering tailored enterprise web platforms, multi-tenant SaaS architectures, distributed microservices, and high-throughput real-time database backends.",
    image: "/images/digitalzone/service_custom_software.jpg",
    tag: "Enterprise Engineering",
    icon: Code2,
    techStack: ["Next.js", "TypeScript", "Node.js", "Go", "PostgreSQL", "Kafka"],
    deliverables: [
      "High-concurrency distributed backend systems built with Node.js, Go, Python, and PostgreSQL",
      "Modern responsive frontend user experiences with Next.js, React, and TypeScript",
      "Robust REST and GraphQL API gateways with rate limiting and automated documentation",
      "Event-driven streaming architectures using Apache Kafka, RabbitMQ, and Redis distributed caching",
    ],
  },
  {
    id: "erp-solutions",
    title: "Enterprise Resource Planning (ERP) Systems",
    subtitle: "Finance, Supply Chain, HRMS & Manufacturing Workflows",
    desc: "Implementing centralized ERP platforms that connect financial accounting, multi-location inventory, automated procurement, manufacturing floor operations, and payroll.",
    image: "/images/digitalzone/service_erp.jpg",
    tag: "Enterprise ERP",
    icon: Layers,
    techStack: ["CoreERP", "PostgreSQL", "Redis", "Docker", "Python", "React"],
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
    image: "/images/digitalzone/service_cloud_devops.jpg",
    tag: "Cloud & DevOps",
    icon: Cloud,
    techStack: ["Kubernetes", "AWS", "Azure", "Terraform", "Docker", "GitHub Actions"],
    deliverables: [
      "Infrastructure as Code (IaC) utilizing Terraform, Ansible, and Helm charts for reproducible environments",
      "Auto-scaling Kubernetes (EKS/GKE/AKS) cluster deployments with zero-downtime blue-green rollouts",
      "Automated CI/CD deployment pipelines on GitHub Actions and GitLab CI with automated vulnerability scanning",
      "Cloud cost optimization, automated horizontal pod autoscaling, and Prometheus/Grafana telemetry",
    ],
  },
  {
    id: "cybersecurity",
    title: "Zero-Trust Cybersecurity & Threat Defense",
    subtitle: "SOC-2 Compliance, Penetration Testing & 24/7 SIEM Monitoring",
    desc: "Protecting mission-critical digital assets with proactive vulnerability assessments, penetration testing, endpoint threat detection, and zero-trust identity architectures.",
    image: "/images/digitalzone/service_cybersecurity.jpg",
    tag: "Cyber Defense",
    icon: ShieldCheck,
    techStack: ["SIEM", "Mutual TLS", "OAuth2/OIDC", "WAF", "CrowdStrike", "Vault"],
    deliverables: [
      "Comprehensive web application, API, and network vulnerability penetration testing (VAPT)",
      "Zero-Trust Architecture (ZTA) implementation with mutual TLS and fine-grained role-based access (RBAC)",
      "24/7 Security Operations Center (SOC) telemetry, SIEM log analysis, and automated incident containment",
      "Compliance audit readiness for ISO 27001, SOC-2 Type II, GDPR, and PCI-DSS standards",
    ],
  },
  {
    id: "mobile-apps",
    title: "Native & Cross-Platform Mobile Applications",
    subtitle: "High-Performance iOS & Android Apps with Offline-First Sync",
    desc: "Crafting fluid, intuitive native and hybrid mobile applications for consumer engagement, field technician operations, executive dashboards, and secure mobile payments.",
    image: "/images/digitalzone/service_mobile_apps.jpg",
    tag: "Mobile Development",
    icon: Smartphone,
    techStack: ["Swift", "Kotlin", "React Native", "Flutter", "SQLite", "Firebase"],
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
  { value: "99.9%", label: "System Uptime", icon: ShieldCheck },
];

export default function DigitalZoneServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const tags = ["all", "AI & Machine Learning", "Enterprise Engineering", "Enterprise ERP", "Cloud & DevOps", "Cyber Defense", "Mobile Development"];

  const filtered = ALL_SERVICES.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.tag.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "all" || s.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* ─── EDITORIAL HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative min-h-[400px] lg:h-[440px] flex items-center overflow-hidden bg-slate-950">
        <Image
          src="/images/digitalzone/hero_cloud_infra.jpg"
          alt="Digital Zoning Enterprise Technology Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A30]/95 via-[#0A2540]/85 to-[#061A30]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Engineering Practice Catalog</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Technology That Moves Business Forward
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              From intelligent AI systems to enterprise ERP, cloud infrastructure and zero-trust security, we engineer digital solutions designed for performance, scale and long-term growth.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#00A8E8]" />
                <span>6 Core Technology Divisions</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#00A8E8]" />
                <span>ISO 27001 &amp; SOC-2 Certified</span>
              </span>
              <span>•</span>
              <span>99.99% Cloud SRE SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── METRICS STRIP ─────────────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {SERVICE_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-200 bg-white p-5 text-center flex flex-col items-center justify-center shadow-xs"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 bg-cyan-50 text-[#00A8E8]">
                    <Icon size={20} />
                  </div>
                  <div className="text-[#061A30] mb-1">
                    <AnimatedCounter targetValue={stat.value} duration={1400 + idx * 100} />
                  </div>
                  <p className="text-[11.5px] font-semibold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── SEARCH & FILTER CONTROLS ──────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search capabilities (e.g. AI, ERP, Cloud, Security, Mobile)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-colors cursor-pointer ${
                    selectedTag === tag
                      ? "bg-[#061A30] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6 PRACTICE AREAS GRID ─────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.id}
                  id={svc.id}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Real Image Header */}
                    <div className="relative w-full h-56 bg-slate-100 overflow-hidden">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#061A30]/90 text-white backdrop-blur-xs">
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-7">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-cyan-50 text-[#00A8E8] flex items-center justify-center flex-shrink-0">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-lg font-bold text-[#061A30] leading-snug">
                          {svc.title}
                        </h3>
                      </div>

                      <p className="text-xs font-bold uppercase tracking-wider mb-3 text-[#00A8E8]">
                        {svc.subtitle}
                      </p>

                      <p className="text-sm text-slate-600 leading-relaxed mb-5 font-normal">
                        {svc.desc}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {svc.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10.5px] font-semibold px-2.5 py-0.5 rounded bg-slate-100 text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Deliverables List */}
                      <div className="space-y-2.5 pt-5 border-t border-slate-100">
                        <p className="text-xs font-bold uppercase tracking-wider text-[#061A30]">
                          Key Engineering Deliverables:
                        </p>
                        {svc.deliverables.map((d) => (
                          <div key={d} className="flex items-start gap-2.5">
                            <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#00A8E8]" />
                            <span className="text-xs text-slate-600 leading-snug">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <Link
                      href="/group-companies/digitalzone/contact"
                      className="w-full py-2.5 rounded-lg bg-slate-50 hover:bg-cyan-50 border border-slate-200 hover:border-[#00A8E8] text-xs font-bold text-[#061A30] hover:text-[#00A8E8] flex items-center justify-center gap-2 transition-colors cursor-pointer"
                    >
                      <span>Inquire With Solution Architect</span>
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
                Enterprise Engineering Consultation
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Need A Scalable Digital System Or Custom AI Model?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our senior architects to review your technical requirements, API blueprints, data governance protocols, and deployment timeline.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/digitalzone/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#00A8E8] hover:bg-[#0086BA] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Schedule Architecture Call
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
