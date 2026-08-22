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
  "AI Platforms",
  "Enterprise ERP",
  "Cloud Infrastructure",
  "Cyber Defense",
  "FinTech & Banking",
  "Logistics & Telemetry",
];

const PLATFORM_SOLUTIONS = [
  {
    name: "DigitalZone CoreERP Enterprise Platform",
    category: "Enterprise ERP",
    specs: ["Modules: Finance, Multi-Warehouse Inventory, HRMS, Procurement", "Integration: REST APIs, Webhooks, SAP & Oracle Connectors", "Architecture: High-Availability Cloud PostgreSQL / Redis"],
    desc: "Complete enterprise resource planning suite connecting financial ledgers, inventory supply chains, manufacturing workflows, and workforce payroll.",
    image: "/digitalzone_hero_tech.svg",
    tag: "Enterprise ERP Suite",
  },
  {
    name: "DigitalZone CortexAI Enterprise Automation Engine",
    category: "AI Platforms",
    specs: ["Capabilities: LLM Fine-Tuning, RAG Semantic Search, Document OCR", "Deployment: On-Premises Air-Gapped or Secure VPC", "Latency: Sub-200ms Neural Inference Pipeline"],
    desc: "Intelligent AI engine empowering companies to automate routine knowledge work, process complex invoices, and power contextual conversational assistants.",
    image: "/digitalzone_hero_tech.svg",
    tag: "Enterprise AI Engine",
  },
  {
    name: "DigitalZone ZeroTrust CyberShield Defense System",
    category: "Cyber Defense",
    specs: ["Compliance: SOC-2 Type II, ISO 27001, GDPR, PCI-DSS Ready", "Monitoring: 24/7 Real-Time SIEM Threat Telemetry", "Protocols: Mutual TLS 1.3, Ephemeral RBAC Access Tokens"],
    desc: "Proactive threat detection and automated incident containment platform engineered to protect enterprise networks, APIs, and cloud workloads.",
    image: "/digitalzone_hero_tech.svg",
    tag: "Zero-Trust Cyber Defense",
  },
  {
    name: "DigitalZone CloudMesh Kubernetes Multi-Cloud Fabric",
    category: "Cloud Infrastructure",
    specs: ["Providers: AWS, Microsoft Azure, Google Cloud Platform", "Orchestration: Auto-Scaling Managed Kubernetes (EKS/GKE)", "Uptime: 99.99% Multi-Region High-Availability SLA"],
    desc: "Production-ready cloud orchestration framework delivering automated container scaling, distributed log tracing, and automated zero-downtime releases.",
    image: "/digitalzone_hero_tech.svg",
    tag: "Multi-Cloud DevOps",
  },
  {
    name: "DigitalZone PayCore FinTech Banking & Ledger Engine",
    category: "FinTech & Banking",
    specs: ["Security: Tokenized PCI-DSS Level 1 Encryption Engine", "Transactions: 10,000+ Transactions Per Second (TPS)", "Features: Automated KYC, Fraud Scoring & Wallet Core"],
    desc: "High-throughput financial transaction engine and digital wallet platform built for retail banks, microfinance institutions, and digital payment gateways.",
    image: "/digitalzone_hero_tech.svg",
    tag: "FinTech Core Engine",
  },
  {
    name: "DigitalZone LogisticsPro Supply Chain & Fleet Telemetry",
    category: "Logistics & Telemetry",
    specs: ["Tracking: Real-Time IoT GPS Fleet Telemetry & Geofencing", "Routing: AI-Powered Multi-Stop Route Optimization", "Mobile: Offline-First Driver Dispatch & E-Signature POD"],
    desc: "End-to-end supply chain orchestration platform featuring dynamic freight dispatch, automated proof of delivery, and multi-warehouse stock replenishment.",
    image: "/digitalzone_hero_tech.svg",
    tag: "Logistics & Fleet Platform",
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
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#3E4F61] font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Enterprise Platforms &amp; Software Suites</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Intelligent Software Platforms &amp; <span style={{ color: theme.navy }}>Digital Solutions</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Deploying enterprise ERP platforms, AI automation engines, zero-trust cyber defense systems, multi-cloud Kubernetes meshes, and FinTech transaction cores.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search platforms (e.g. ERP, AI Engine, CyberShield, CloudMesh, FinTech)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0A3A6B] transition-all bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-slate-50/70" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? "bg-[#0A3A6B] text-white shadow-md"
                      : "bg-white border text-slate-700 hover:border-[#0A3A6B]"
                  }`}
                  style={{ borderColor: active ? theme.navy : theme.border }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((prod) => (
              <div
                key={prod.name}
                className="digitalzone-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0A3A6B]" style={{ borderColor: theme.border }}>
                        {prod.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <h3 className="text-xl font-black mb-3" style={{ color: theme.navyDark }}>
                      {prod.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {prod.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(210, 227, 243, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Platform Specifications:
                      </p>
                      {prod.specs.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="flex-shrink-0 text-[#00A8E8]" />
                          <span className="text-xs font-medium text-slate-700">{s}</span>
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
                    <span>Request Live Demo &amp; Proposal</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between shadow-md border bg-white" style={{ borderColor: theme.border }}>
            <div>
              <span className="text-xs font-black uppercase tracking-widest block mb-2 text-[#0086BA]">
                ENTERPRISE LICENSING &amp; CUSTOM DEVELOPMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Need A Customized Enterprise Platform?
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                We provide custom architectural development, cloud hosting, and on-premises air-gapped deployment for commercial enterprises and government institutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/digitalzone/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request B2B Tech Quote</span>
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
