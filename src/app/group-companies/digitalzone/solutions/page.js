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
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Smartphone,
  BarChart3,
  Server,
  Lock,
  Zap,
  Globe2,
} from "lucide-react";
import {
  theme,
  DigitalZoneNavbar,
  DigitalZoneFooter,
  SectionLabel,
  SectionHeading,
} from "../components/DigitalZoneShared";

const CATEGORIES = [
  "All",
  "Enterprise ERP",
  "AI Platforms",
  "Cyber Defense",
  "Cloud Infrastructure",
  "FinTech & Banking",
];

const PLATFORM_SOLUTIONS = [
  {
    name: "DigitalZone CoreERP Enterprise Platform",
    category: "Enterprise ERP",
    specs: [
      "Modules: Financial General Ledger, Multi-Warehouse Barcoded Inventory, HRMS, Automated Procurement",
      "Manufacturing: Production Scheduling, Bills of Materials (BOM), and Shop Floor Telemetry",
      "Integrations: REST APIs, Biometric Attendance, SAP/Oracle Connectors & Webhooks",
      "Architecture: High-Availability Cloud PostgreSQL / Redis with Multi-Company Partitioning",
    ],
    desc: "Centralized enterprise resource planning suite connecting financial ledgers, inventory warehouses, manufacturing operations, and business intelligence into one cohesive digital ecosystem.",
    image: "/images/digitalzone/solution_core_erp.jpg",
    tag: "Enterprise ERP Suite",
    icon: Layers,
  },
  {
    name: "DigitalZone CortexAI Cognitive Automation Engine",
    category: "AI Platforms",
    specs: [
      "Capabilities: Large Language Model Fine-Tuning, RAG Semantic Search, Intelligent Document OCR",
      "Deployment: On-Premises Air-Gapped GPU Clusters or Secure Dedicated Virtual Private Cloud (VPC)",
      "Latency: Sub-200ms Accelerated Neural Inference Pipeline with vLLM & TensorRT",
      "Agents: Autonomous Business Workflow Orchestration with Human-in-the-Loop Safeguards",
    ],
    desc: "Advanced enterprise AI platform empowering organizations to deploy private large language models, automate complex document processing, and power contextual conversational agents with zero data leakage.",
    image: "/images/digitalzone/solution_cortex_ai.jpg",
    tag: "Enterprise AI Engine",
    icon: Brain,
  },
  {
    name: "DigitalZone ZeroTrust CyberShield Defense System",
    category: "Cyber Defense",
    specs: [
      "Compliance: Full Alignment with SOC-2 Type II, ISO 27001, GDPR, and PCI-DSS Security Controls",
      "Monitoring: 24/7 Security Operations Center (SOC) with Automated SIEM Threat Correlation",
      "Architecture: Mutual TLS 1.3 Encryption, Ephemeral Tokens, and Micro-Segmentation",
      "Threat Intel: Automated Anomaly Containment and Zero-Day Vulnerability Shielding",
    ],
    desc: "Highly secure enterprise cybersecurity operations platform monitoring network security, identity verification, encrypted communications, and real-time threat detection across global corporate infrastructure.",
    image: "/images/digitalzone/solution_zero_trust.jpg",
    tag: "Zero-Trust Cyber Defense",
    icon: ShieldCheck,
  },
  {
    name: "DigitalZone CloudMesh Multi-Cloud Kubernetes Fabric",
    category: "Cloud Infrastructure",
    specs: [
      "Cloud Providers: Native Multi-Cloud Deployment on AWS, Microsoft Azure, and Google Cloud Platform",
      "Orchestration: Auto-Scaling Managed Kubernetes (EKS/GKE/AKS) with GitOps CI/CD",
      "High Availability: 99.99% Multi-Region Failover SLA and Geo-Distributed Traffic Routing",
      "Telemetry: Distributed Jaeger Tracing, Prometheus Metric Collection, and Grafana Executive Dashboards",
    ],
    desc: "Production-grade cloud orchestration framework delivering automated container scaling, automated security patching, distributed log tracing, and zero-downtime blue-green release pipelines.",
    image: "/images/digitalzone/hero_cloud_infra.jpg",
    tag: "Cloud Fabric",
    icon: Cloud,
  },
  {
    name: "DigitalZone PayCore FinTech Banking & Ledger Engine",
    category: "FinTech & Banking",
    specs: [
      "Compliance: Tokenized PCI-DSS Level 1 Encryption Engine and Audit-Proof Financial Ledgers",
      "Throughput: 10,000+ Real-Time Transactions Per Second (TPS) with Sub-Millisecond Latency",
      "Capabilities: Automated KYC/AML Screening, Fraud Scoring, Digital Wallets, and Open Banking APIs",
      "Reconciliation: Automated Real-Time Bank Settlement and Multi-Currency Treasury Management",
    ],
    desc: "High-throughput financial transaction engine and digital wallet platform built for commercial retail banks, microfinance institutions, and high-volume digital payment gateways.",
    image: "/images/digitalzone/service_custom_software.jpg",
    tag: "FinTech Core",
    icon: Lock,
  },
  {
    name: "DigitalZone Enterprise Mobile Connect Platform",
    category: "Enterprise ERP",
    specs: [
      "Frameworks: Native iOS Swift, Android Kotlin, and High-Velocity React Native / Flutter",
      "Data Sync: Offline-First SQLite / WatermelonDB Local Caching with Automatic Cloud Conflict Resolution",
      "Security: Enterprise Mobile Device Management (MDM) Compatibility and Biometric Enclave",
      "Push Messaging: Real-Time WebSockets, Apple APNS, and Google Firebase Cloud Messaging",
    ],
    desc: "Cross-platform mobile enterprise application suite enabling field workers, plant engineers, logistics drivers, and executives to interact with core ERP workflows on smartphones and tablets.",
    image: "/images/digitalzone/service_mobile_apps.jpg",
    tag: "Mobile Enterprise",
    icon: Smartphone,
  },
];

export default function DigitalZoneSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = PLATFORM_SOLUTIONS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* ─── EDITORIAL HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative min-h-[400px] lg:h-[440px] flex items-center overflow-hidden bg-slate-950">
        <Image
          src="/images/digitalzone/solutions_hero.jpg"
          alt="Digital Zoning Enterprise Technology Platforms Ecosystem"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A30]/95 via-[#0A2540]/85 to-[#061A30]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Enterprise Product Suites</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Our Technology. Your Competitive Advantage.
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              Purpose-built enterprise platforms designed to automate operations, accelerate decisions and protect critical digital infrastructure across Pakistan and global markets.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#00A8E8]" />
                <span>Turnkey Platforms</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#00A8E8]" />
                <span>Air-Gapped &amp; VPC Ready</span>
              </span>
              <span>•</span>
              <span>REST &amp; GraphQL APIs</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SEARCH & FILTER CONTROLS ──────────────────────────────────────── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-8">
            {/* Live Search */}
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search platforms (e.g. CoreERP, CortexAI, ZeroTrust)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
              />
            </div>

            {/* Counter */}
            <span className="text-xs font-semibold text-slate-500">
              Showing {filtered.length} of {PLATFORM_SOLUTIONS.length} Enterprise Platforms
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    active
                      ? "bg-[#061A30] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PLATFORMS GRID ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Real Image Header */}
                    <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#061A30]/90 text-white backdrop-blur-xs">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-2.5 mb-2.5">
                        <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#00A8E8] flex items-center justify-center flex-shrink-0">
                          <Icon size={18} />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#00A8E8]">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="text-[17px] font-bold text-[#061A30] mb-2.5 leading-snug">
                        {item.name}
                      </h3>

                      <p className="text-[13px] text-slate-600 leading-relaxed mb-5 font-normal">
                        {item.desc}
                      </p>

                      {/* Specs List */}
                      <div className="space-y-2 pt-4 border-t border-slate-100">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#061A30]">
                          Platform Architecture &amp; Capabilities:
                        </p>
                        {item.specs.map((s) => (
                          <div key={s} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5 text-[#00A8E8]" />
                            <span className="text-[12px] text-slate-600 leading-tight">{s}</span>
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
                      <span>Request Platform Demo</span>
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
                Custom Enterprise Platform Deployment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Ready To Deploy A Custom Enterprise Solution?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our software architects to review licensing, API integrations, custom module development, and private on-premises GPU hosting.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/digitalzone/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#00A8E8] hover:bg-[#0086BA] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Schedule Technical Scoping
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
