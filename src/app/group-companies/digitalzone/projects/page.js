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
  "Cloud & Infrastructure",
  "FinTech",
  "Healthcare",
  "Logistics",
];

const SIGNATURE_PROJECTS = [
  {
    name: "National Commercial Bank Core AI Credit Risk & Fraud Engine",
    category: "FinTech",
    location: "Headquarters, Karachi, Sindh",
    status: "Live in Production – 2.5M Daily Transactions",
    desc: "Engineered real-time machine learning inference pipeline evaluating loan default risk and detecting payment anomalies in sub-40ms latency across digital banking channels.",
    specs: ["Throughput: 2,500+ TPS Real-Time Event Stream", "Accuracy: 99.4% Fraud Classification Precision", "Architecture: Apache Kafka, Python ML, Redis Cache"],
    image: "/digitalzone_hero_tech.svg",
    tag: "FinTech AI Engine",
  },
  {
    name: "Multi-Hospital Healthcare Information Management System (HIMS)",
    category: "Healthcare",
    location: "14 Hospital Facilities, Lahore & Islamabad",
    status: "Operational – 1.2M Patient Records",
    desc: "Turnkey enterprise healthcare platform integrating electronic health records (EHR), pharmacy barcode dispensing, lab analyzer telemetry, and DICOM PACS medical imaging.",
    specs: ["Scale: 14 Major Medical Centers Synchronized", "Compliance: HIPAA & HL7 FHIR Interoperability", "Features: Real-Time Bed Allocation & Doctor Scheduling"],
    image: "/digitalzone_hero_tech.svg",
    tag: "Enterprise Healthcare",
  },
  {
    name: "National Logistics & Cold Chain IoT Telemetry Platform",
    category: "Logistics",
    location: "Nationwide Fleet Network, Pakistan",
    status: "Active Fleet – 1,800 Monitored Trucks",
    desc: "Real-time IoT telemetry system monitoring GPS coordinates, reefer cargo temperature thresholds, fuel consumption, and AI dynamic dispatch routing.",
    specs: ["Fleet Size: 1,800 Commercial Freight Vehicles", "Telemetry: 5-Second Interval Real-Time IoT Ingestion", "Savings: 18% Fleet Fuel & Idle Time Reduction"],
    image: "/digitalzone_hero_tech.svg",
    tag: "IoT Logistics Platform",
  },
  {
    name: "Tier-1 Telecom Customer Support AI & Conversational Agent",
    category: "AI Platforms",
    location: "National Telecom Grid, Islamabad",
    status: "Deployed – 150K Daily Queries",
    desc: "Fine-tuned multilingual conversational AI agent handling mobile balance inquiries, package provisioning, and billing disputes with 88% automated resolution.",
    specs: ["Volume: 150,000+ Daily Subscriber Conversations", "Languages: English, Urdu & Roman Urdu Support", "Resolution: 88% First-Contact Resolution Rate"],
    image: "/digitalzone_hero_tech.svg",
    tag: "Conversational AI",
  },
  {
    name: "Federal Revenue Authority Cloud Migration & Zero-Trust Mesh",
    category: "Cloud & Infrastructure",
    location: "Federal Government, Islamabad",
    status: "Completed – 10M Annual Tax Filings",
    desc: "Architected multi-region Kubernetes cloud infrastructure with zero-trust network access (ZTNA), automated disaster recovery, and mutual TLS encryption.",
    specs: ["Scale: 10 Million Annual Tax Returns Processed", "Security: SOC-2 Type II & Zero-Trust Network Mesh", "Uptime: 99.995% Availability During Peak Tax Season"],
    image: "/digitalzone_hero_tech.svg",
    tag: "GovTech Cloud Mesh",
  },
  {
    name: "Smart City Urban Traffic & AI Video Telemetry Grid",
    category: "AI Platforms",
    location: "Metropolitan Police Command Center, Lahore",
    status: "Operational – 400 Intersections",
    desc: "Edge-deployed computer vision neural network analyzing real-time CCTV camera feeds to dynamically optimize traffic signal timing and detect road accidents.",
    specs: ["Intersections: 400 Intelligent Signal Nodes", "Inference: Edge TensorRT Computer Vision Models", "Impact: 22% Reduction in Peak Hour Urban Congestion"],
    image: "/digitalzone_hero_tech.svg",
    tag: "Smart City AI",
  },
];

export default function DigitalZoneProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = SIGNATURE_PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-[#3E4F61] font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Enterprise Client Case Studies</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Signature Deployments &amp; <span style={{ color: theme.navy }}>Client Solutions</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Explore our landmark deployments across banking fraud AI engines, multi-hospital HIMS, nationwide logistics telemetry grids, telecom LLM bots, and government cloud migrations.
            </p>

            {/* Live Search */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search case studies by name, technology, or sector..."
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

      {/* Category Filter Pills */}
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

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((proj) => (
              <div
                key={proj.name}
                className="digitalzone-card-hover rounded-3xl border overflow-hidden flex flex-col justify-between bg-white shadow-xs"
                style={{ borderColor: theme.border }}
              >
                <div>
                  {/* Card Image */}
                  <div className="relative w-full h-52 bg-slate-100 overflow-hidden group">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/95 border shadow-sm text-[#0A3A6B]" style={{ borderColor: theme.border }}>
                        {proj.tag}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-black" style={{ color: theme.navyDark }}>
                        {proj.name}
                      </h3>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs font-semibold text-slate-500 mb-3">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#0A3A6B]" />
                      <span>{proj.location}</span>
                    </div>

                    <div className="mb-4">
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded bg-[#0A3A6B]/10 text-[#0A3A6B]">
                        {proj.status}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                      {proj.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-2 pt-4 border-t" style={{ borderColor: "rgba(210, 227, 243, 0.7)" }}>
                      <p className="text-xs font-bold uppercase tracking-wider" style={{ color: theme.navyDark }}>
                        Architecture Scope &amp; Deliverables:
                      </p>
                      {proj.specs.map((s) => (
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
                    <span>Request Technical Architecture Deck</span>
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
                STARTING AN ENTERPRISE DIGITAL PROJECT?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-2" style={{ color: theme.navyDark }}>
                Partner With South Asia&apos;s Leading AI &amp; Software Enterprise
              </h2>
              <p className="text-sm font-medium max-w-xl" style={{ color: theme.textMuted }}>
                From architectural design and proof-of-concept AI models to high-concurrency production deployments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/group-companies/digitalzone/contact"
                className="flex-1 lg:flex-none justify-center px-6 py-3.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 transition-all duration-300 shadow-md hover:opacity-95 cursor-pointer"
                style={{ backgroundColor: theme.navy }}
              >
                <span>Request Project Scoping</span>
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
