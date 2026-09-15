"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Send,
  Brain,
  Code2,
  Layers,
  Cloud,
  Smartphone,
  MessageCircle,
  Building2,
  Lock,
  Server,
  Zap,
} from "lucide-react";
import {
  theme,
  DigitalZoneNavbar,
  DigitalZoneFooter,
  SectionLabel,
  SectionHeading,
} from "../components/DigitalZoneShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Principal AI Research & Software Hub)",
    address: "1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Cloud NOC 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Islamabad Software Innovation & GovTech Center",
    address: "Executive Corporate Tower, Jinnah Avenue, Blue Area, Islamabad",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "islamabad.tech@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "GovTech Hub",
  },
  {
    city: "Karachi Regional FinTech & Enterprise Solutions Hub",
    address: "Financial Trade Center, Shahrah-e-Faisal / I.I. Chundrigar Road, Karachi",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "karachi.tech@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "FinTech Desk",
  },
];

export default function DigitalZoneContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    sector: "Banking, FinTech & Financial Services",
    solution: "Artificial Intelligence & Predictive Machine Learning",
    scale: "Mid-Market Enterprise System ($25K–$100K+)",
    city: "Lahore",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/company-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companySlug: "digitalzone",
          companyName: "Digital Zoning Corporation",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Tech Scoping: ${formData.solution} (${formData.sector})`,
          message: formData.message || `Scale: ${formData.scale} in ${formData.city}`,
          additionalFields: {
            organization: formData.organization,
            sector: formData.sector,
            solution: formData.solution,
            scale: formData.scale,
            city: formData.city,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your digital architecture request has been registered. Our lead software architect will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          sector: "Banking, FinTech & Financial Services",
          solution: "Artificial Intelligence & Predictive Machine Learning",
          scale: "Mid-Market Enterprise System ($25K–$100K+)",
          city: "Lahore",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit digital scoping inquiry. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected network error occurred. Please try again or reach our direct engineering hotline.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <DigitalZoneNavbar />

      {/* ─── EDITORIAL HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative min-h-[420px] lg:h-[460px] flex items-center overflow-hidden bg-slate-950">
        <Image
          src="/images/digitalzone/contact_hero.jpg"
          alt="Digital Zoning Corporation Technology Headquarters in Lahore"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A30]/95 via-[#0A2540]/85 to-[#061A30]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Enterprise Architecture Desk</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Ready To Build Your Next Digital System?
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              Connect with our technology architects to explore your requirements, architecture and implementation roadmap across Lahore, Islamabad, and Karachi.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                <Phone size={14} className="text-[#00A8E8]" />
                <span>Lahore Desk: 042-38924737</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                <Phone size={14} className="text-[#00A8E8]" />
                <span>Mobile Hotline: 0321-8431665</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                <Mail size={14} className="text-[#00A8E8]" />
                <span>info@roysons.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTACT & RFP GRID ───────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Coordinates & Visual Cards */}
            <div className="lg:col-span-5 space-y-6">
              {/* Consultation Visual */}
              <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <Image
                  src="/images/digitalzone/contact_consultation.jpg"
                  alt="Senior Software Architects Consultation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061A30]/85 via-[#061A30]/20 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#00A8E8] block mb-0.5">
                      Direct Architect Access
                    </span>
                    <h4 className="text-sm font-bold">Confidential Technical Architecture Scoping</h4>
                  </div>
                </div>
              </div>

              {/* Support Team Visual Card */}
              <div className="p-4 rounded-xl border border-slate-200 bg-[#F8FAFC] flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200">
                  <Image
                    src="/images/digitalzone/contact_support_team.jpg"
                    alt="24/7 Enterprise Tech Support Team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#061A30]">24/7 Cloud NOC &amp; SRE Desk</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Continuous telemetry, system monitoring, and automated incident response.</p>
                </div>
              </div>

              <div>
                <SectionLabel>National Footprint</SectionLabel>
                <SectionHeading className="text-2xl sm:text-3xl mb-3">
                  Regional Technology Desks
                </SectionHeading>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our software development centers and cloud engineering hubs operate across Pakistan for direct client collaboration.
                </p>
              </div>

              {/* Regional Office Cards */}
              <div className="space-y-4">
                {OFFICES.map((office) => (
                  <div
                    key={office.city}
                    className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#00A8E8]/50 transition-colors space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-[14px] font-bold text-[#061A30]">
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#00A8E8]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="flex-shrink-0 text-[#00A8E8]" />
                        <span className="font-semibold text-slate-800">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="flex-shrink-0 text-[#00A8E8]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2 pt-0.5 text-slate-500">
                        <Clock size={14} className="flex-shrink-0 text-slate-400" />
                        <span>{office.timing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Intellectual Property & Security Guarantee */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <Lock size={18} className="text-[#00A8E8] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800 block">Intellectual Property &amp; NDA Guarantee:</strong>
                  All proprietary algorithms, source code, data schemas, and architecture blueprints are protected under strict corporate non-disclosure agreements.
                </p>
              </div>
            </div>

            {/* Right Column: Scoping & Architecture Form */}
            <div className="lg:col-span-7">
              <div className="p-7 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-md">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00A8E8] block mb-1">
                    Technical Scope &amp; Architecture Scoping
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#061A30]">
                    Start A Conversation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Provide your preliminary platform parameters to receive customized architecture blueprints, sprint estimates, and tech stack recommendations.
                  </p>
                </div>

                {submitStatus.type === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-cyan-50 border border-cyan-200 text-[#0086BA] flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5 text-[#00A8E8]" />
                    <div>
                      <p className="font-bold">Scoping Request Transmitted</p>
                      <p className="text-xs mt-0.5">{submitStatus.message}</p>
                    </div>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm">
                    <p className="font-bold">Notice</p>
                    <p className="text-xs mt-0.5">{submitStatus.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name / Technical Lead *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Asim Raza"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Corporate / Institutional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="asim@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0300-1234567"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Organization / Enterprise Entity
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company or Government Entity"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Primary Engineering Practice
                      </label>
                      <select
                        value={formData.solution}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
                      >
                        <option value="Artificial Intelligence & Predictive Machine Learning">Artificial Intelligence &amp; ML</option>
                        <option value="Custom Enterprise Software & SaaS Platforms">Custom Enterprise Software &amp; SaaS</option>
                        <option value="Integrated Enterprise Resource Planning (ERP)">Enterprise ERP Systems</option>
                        <option value="Cloud Migration, DevOps & Multi-Cloud Infrastructure">Cloud Computing &amp; DevOps</option>
                        <option value="Zero-Trust Cybersecurity & Threat Defense">Zero-Trust Cybersecurity</option>
                        <option value="Native iOS, Android & Mobile Applications">Mobile Application Development</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target Industry / Domain
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
                      >
                        <option value="Banking, FinTech & Financial Services">Banking &amp; FinTech</option>
                        <option value="Manufacturing & Industrial Operations">Manufacturing &amp; Industrial</option>
                        <option value="Healthcare & Hospital Networks">Healthcare &amp; Life Sciences</option>
                        <option value="Logistics, Cold Chain & Transportation">Logistics &amp; Supply Chain</option>
                        <option value="Telecom & Digital Media">Telecom &amp; Digital Media</option>
                        <option value="Public Sector & GovTech">Public Sector &amp; GovTech</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Estimated System Scale / Budget
                      </label>
                      <select
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
                      >
                        <option value="Startup / Proof of Concept ($10K–$25K)">Proof of Concept / Pilot ($10K–$25K)</option>
                        <option value="Mid-Market Enterprise System ($25K–$100K+)">Mid-Market System ($25K–$100K+)</option>
                        <option value="Enterprise Platform Transformation ($100K–$500K+)">Enterprise Transformation ($100K–$500K+)</option>
                        <option value="Mega High-Concurrency Infrastructure ($500K+)">&gt; $500K Sovereign / Mega Platform</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Liaison City
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
                      >
                        <option value="Lahore">Lahore (Headquarters)</option>
                        <option value="Islamabad">Islamabad (GovTech Hub)</option>
                        <option value="Karachi">Karachi (FinTech Desk)</option>
                        <option value="Remote / Video Conference">Remote / Video Conference</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Technical Scope / Architecture Requirements Brief
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your application requirements, expected concurrent users, integration needs, or preferred cloud providers..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#00A8E8] focus:ring-1 focus:ring-[#00A8E8] bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-lg bg-[#00A8E8] hover:bg-[#0086BA] text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? "Transmitting Scope..." : "Start A Conversation"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DigitalZoneFooter />
    </main>
  );
}
