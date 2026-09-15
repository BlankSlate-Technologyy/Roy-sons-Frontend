"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Search,
  Sparkles,
  Award,
  ShieldCheck,
  Code2,
  Layers,
  Cloud,
  Lock,
  Building2,
  Cpu,
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
  "Digital Transformation",
  "AI Implementation",
  "ERP Implementation",
  "Cloud Migration",
  "Cybersecurity",
];

const FLAGSHIP_PROJECTS = [
  {
    name: "Enterprise Digital Transformation & Architecture Modernization",
    category: "Digital Transformation",
    location: "National Corporate Conglomerate, Lahore & Karachi",
    status: "Completed – Connected Multi-Department Ecosystem",
    desc: "Comprehensive digital transformation replacing legacy software silos with connected microservices, automated executive reporting dashboards, and real-time business telemetry.",
    specs: [
      "Scope: 8 Core Departments Unified via Event-Driven Architecture",
      "Impact: 42% Reduction in Manual Processing & Cycle Latency",
      "Architecture: Next.js Frontend, Go Microservices, Kafka & PostgreSQL",
      "Governance: Bi-Weekly Agile Sprints with Full Telemetry Auditing",
    ],
    image: "/images/digitalzone/project_digital_transformation.jpg",
    tag: "Digital Transformation",
    icon: Building2,
  },
  {
    name: "Intelligent AI & Automated Cognitive Agent Implementation",
    category: "AI Implementation",
    location: "Commercial Enterprise Group, Islamabad",
    status: "Live in Production – 150K Daily Inferences",
    desc: "Deployed enterprise-grade machine learning models and fine-tuned private large language models (LLMs) to automate multi-lingual document extraction and customer query triage.",
    specs: [
      "Model: Fine-Tuned LLaMA-3 with Private RAG Knowledge Base",
      "Latency: Sub-180ms Token Generation on On-Premises GPU Cluster",
      "Security: Air-Gapped Deployment with Guaranteed Zero Data Leakage",
      "Impact: 86% Automated First-Contact Customer Resolution Rate",
    ],
    image: "/images/digitalzone/project_ai_implementation.jpg",
    tag: "Enterprise AI",
    icon: Brain,
  },
  {
    name: "Multi-Plant Manufacturing Enterprise ERP Implementation",
    category: "ERP Implementation",
    location: "Industrial Manufacturing Corridor, Sheikhupura & Karachi",
    status: "Operational – 6 Industrial Plants Synchronized",
    desc: "Engineered and deployed an integrated ERP platform orchestrating production schedules, bills of materials (BOM), multi-warehouse barcoded inventory, and automated general ledger accounts.",
    specs: [
      "Scale: 6 Manufacturing Facilities & 18 Regional Distribution Centers",
      "Modules: Financial Ledger, Multi-Warehouse Inventory, HRMS, Procurement",
      "Telemetry: Real-Time Machine Floor IoT Integration & Scrap Tracking",
      "Financials: Automated Multicurrency Tax Invoicing & Bank Reconciliation",
    ],
    image: "/images/digitalzone/project_erp_implementation.jpg",
    tag: "Manufacturing ERP",
    icon: Layers,
  },
  {
    name: "Mission-Critical Multi-Cloud Infrastructure Migration",
    category: "Cloud Migration",
    location: "Financial Services & Payment Grid, Karachi",
    status: "Completed – Zero-Downtime Migration (99.995% SLA)",
    desc: "Migrated legacy on-premises servers into auto-scaling Kubernetes multi-cloud infrastructure across AWS and Microsoft Azure with automated GitOps CI/CD pipelines.",
    specs: [
      "Workloads: 240+ Microservices Migrated to Managed Kubernetes (EKS)",
      "Reliability: Multi-Region Active-Active Disaster Recovery Architecture",
      "DevOps: Automated GitHub Actions CI/CD with Container Security Scanning",
      "Efficiency: 34% Reduction in Monthly Cloud Compute & Storage Spend",
    ],
    image: "/images/digitalzone/project_cloud_migration.jpg",
    tag: "Cloud Migration",
    icon: Cloud,
  },
  {
    name: "Zero-Trust Cybersecurity Modernization & SOC Deployment",
    category: "Cybersecurity",
    location: "Sovereign Public Sector Body, Islamabad",
    status: "Live 24/7 – Zero Security Breaches Recorded",
    desc: "Designed and implemented an enterprise zero-trust security architecture featuring mutual TLS micro-segmentation, biometric IAM authentication, and 24/7 SIEM monitoring.",
    specs: [
      "Compliance: Full Alignment with SOC-2 Type II & ISO 27001 Security Controls",
      "Monitoring: 24/7 Security Operations Center with Automated Telemetry",
      "Authentication: Mutual TLS 1.3, Hardware Security Keys, and RBAC",
      "Penetration: Comprehensive VAPT Audits with Zero High-Severity Residuals",
    ],
    image: "/images/digitalzone/project_cybersecurity.jpg",
    tag: "Zero-Trust Security",
    icon: Lock,
  },
];

export default function DigitalZoneProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = FLAGSHIP_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* ─── EDITORIAL HERO BANNER (USER'S CATCHY HEADING) ─────────────────── */}
      <section className="relative min-h-[400px] lg:h-[440px] flex items-center overflow-hidden bg-slate-950">
        <Image
          src="/images/digitalzone/hero_enterprise_software.jpg"
          alt="Digital Zoning Engineering Digital Transformation Projects"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A30]/95 via-[#0A2540]/85 to-[#061A30]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Case Studies &amp; Client Deployments</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Engineering Digital Transformation
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              Explore how intelligent software, AI and enterprise technology can turn complex operational challenges into scalable digital solutions.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={15} className="text-[#00A8E8]" />
                <span>500+ Deployments</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#00A8E8]" />
                <span>Zero-Downtime Releases</span>
              </span>
              <span>•</span>
              <span>99.99% Uptime SLAs</span>
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
                placeholder="Search case studies by keyword, sector, or architecture..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
              />
            </div>

            {/* Counter */}
            <span className="text-xs font-semibold text-slate-500">
              Showing {filtered.length} of {FLAGSHIP_PROJECTS.length} Landmark Deployments
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

      {/* ─── 5 FLAGSHIP PROJECTS GRID ──────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.name}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Real Project Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3.5 left-3.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#061A30]/90 text-white backdrop-blur-xs">
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-[17px] font-bold text-[#061A30] mb-2 leading-snug">
                      {proj.name}
                    </h3>

                    <div className="flex items-start gap-1.5 text-xs text-slate-500 mb-3">
                      <MapPin size={14} className="text-[#00A8E8] flex-shrink-0 mt-0.5" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[10.5px] font-bold uppercase px-2.5 py-1 rounded bg-cyan-50 text-[#0086BA] border border-cyan-100 inline-block">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-[13px] text-slate-600 leading-relaxed mb-5 font-normal">
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t border-slate-100">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-[#061A30]">
                        Architecture Scope &amp; Deliverables:
                      </p>
                      {proj.specs.map((s) => (
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
                    <span>Request Technical Case Study</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-r from-[#061A30] to-[#0A2540] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#00A8E8] block mb-2">
                Proven Technology Execution
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Ready To Engineer Your Enterprise Solution?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Connect with our software architects to review architecture diagrams, integration roadmaps, security compliance, and sprint timelines.
              </p>
            </div>

            <div className="flex flex-wrap gap-3.5 w-full lg:w-auto">
              <Link
                href="/group-companies/digitalzone/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3 rounded-lg bg-[#00A8E8] hover:bg-[#0086BA] text-white text-sm font-bold tracking-wide transition-all text-center cursor-pointer shadow-md"
              >
                Inquire With Senior Architects
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
