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
  Briefcase,
  FileSearch,
  TrendingUp,
  Handshake,
  PiggyBank,
  Settings,
  Scale,
  MessageCircle,
  Building2,
  Lock,
} from "lucide-react";
import {
  theme,
  PakConsultNavbar,
  PakConsultFooter,
  SectionLabel,
  SectionHeading,
} from "../components/PakConsultShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Principal Advisory & PMO Hub)",
    address: "1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Emergency Advisory 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Islamabad Public Sector & Sovereign Policy Desk",
    address: "Executive Corporate Suites, Jinnah Avenue, Blue Area, Islamabad",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "islamabad.consult@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Govt & PPP Desk",
  },
  {
    city: "Karachi Financial & Transaction Advisory Desk",
    address: "Financial Trade Center, Shahrah-e-Faisal / Clifton Block 4, Karachi",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "karachi.consult@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Financial Desk",
  },
];

export default function PakConsultContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    sector: "Infrastructure & Transport",
    solution: "Techno-Economic Feasibility Studies",
    scale: "PKR 100M – 1 Billion Scale",
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
          companySlug: "pakistan-consultancy",
          companyName: "Pakistan Consultancy Services",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Consulting RFP: ${formData.solution} (${formData.sector})`,
          message: formData.message || `Program scale: ${formData.scale} in ${formData.city}`,
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
          message: data.message || "Your consulting inquiry has been received. Our senior advisory partner will contact you within 24 business hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          sector: "Infrastructure & Transport",
          solution: "Techno-Economic Feasibility Studies",
          scale: "PKR 100M – 1 Billion Scale",
          city: "Lahore",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit inquiry. Please check details and try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected network error occurred. Please try again or reach our direct telephone desk.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* ─── EDITORIAL HERO BANNER ─────────────────────────────────────────── */}
      <section className="relative min-h-[420px] lg:h-[460px] flex items-center overflow-hidden bg-slate-900">
        <Image
          src="/images/pakconsult/contact_hero.jpg"
          alt="Pakistan Consultancy Services Corporate Advisory Desks"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071727]/95 via-[#0A2540]/85 to-[#0A2540]/50 z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            <SectionLabel light>Strategic Engagement Desk</SectionLabel>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Commission Strategic Advisory &amp; Consult Our Partners
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed mb-6 max-w-2xl">
              Whether structuring a multi-billion PKR public-private concession, drafting bankable feasibility studies, or establishing an institutional PMO, our senior partners across Pakistan are ready to assist.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                <Phone size={14} className="text-[#0D7C85]" />
                <span>Lahore Desk: 042-38924737</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                <Phone size={14} className="text-[#C5A059]" />
                <span>Mobile Hotline: 0321-8431665</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                <Mail size={14} className="text-[#0D7C85]" />
                <span>info@roysons.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT & RFP MAIN GRID ───────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Coordinates & Visual Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Partner Consultation Visual */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <Image
                  src="/images/pakconsult/contact_meeting.jpg"
                  alt="Senior Partner Strategy Consultation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/85 via-[#0A2540]/20 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <span className="text-[10.5px] font-bold uppercase tracking-widest text-[#C5A059] block mb-0.5">
                      Direct Senior Access
                    </span>
                    <h4 className="text-sm font-bold">Confidential Partner-Led Consultations</h4>
                  </div>
                </div>
              </div>

              <div>
                <SectionLabel>National Footprint</SectionLabel>
                <SectionHeading className="text-2xl sm:text-3xl mb-3">
                  Regional Advisory Desks
                </SectionHeading>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our directors maintain permanent presence in Lahore, Islamabad, and Karachi for direct governmental liaison and client meetings.
                </p>
              </div>

              {/* Regional Office Cards */}
              <div className="space-y-4">
                {OFFICES.map((office) => (
                  <div
                    key={office.city}
                    className="p-5 rounded-xl border border-slate-200 bg-white shadow-xs hover:border-[#0D7C85]/50 transition-colors space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-[14px] font-bold text-[#0A2540]">
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600">
                      <div className="flex items-start gap-2">
                        <MapPin size={14} className="flex-shrink-0 mt-0.5 text-[#0D7C85]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={14} className="flex-shrink-0 text-[#0D7C85]" />
                        <span className="font-semibold text-slate-800">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={14} className="flex-shrink-0 text-[#0D7C85]" />
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

              {/* Confidentiality Commitment */}
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-3">
                <Lock size={18} className="text-[#0D7C85] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-slate-800 block">Strict Non-Disclosure Guarantee:</strong>
                  All proprietary feasibility data, technical scopes, and business models are safeguarded under strict corporate confidentiality protocols.
                </p>
              </div>
            </div>

            {/* Right Column: RFP & Consultation Form */}
            <div className="lg:col-span-7">
              <div className="p-7 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-md">
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0D7C85] block mb-1">
                    Terms of Reference &amp; Proposal Inquiry
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0A2540]">
                    Commission Advisory Engagement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Provide your preliminary program parameters to receive customized Terms of Reference (ToR) blueprints and team profiles.
                  </p>
                </div>

                {submitStatus.type === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-teal-50 border border-teal-200 text-[#08545A] flex items-start gap-3 text-sm">
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5 text-[#0D7C85]" />
                    <div>
                      <p className="font-bold">Inquiry Successfully Transmitted</p>
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
                        Full Name / Senior Contact *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Engr. Tariq Mahmood"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
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
                        placeholder="tariq@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
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
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Organization / Ministry / Sponsor
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Company or Government Entity"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Primary Advisory Service
                      </label>
                      <select
                        value={formData.solution}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
                      >
                        <option value="Techno-Economic Feasibility Studies">Techno-Economic Feasibility Studies</option>
                        <option value="Investment Structuring & PPP Concessions">Investment Structuring &amp; PPP Concessions</option>
                        <option value="PMO Setup & Governance">PMO Setup &amp; Governance</option>
                        <option value="Strategic Advisory & Policy Development">Strategic Advisory &amp; Policy Development</option>
                        <option value="Infrastructure & Engineering Advisory">Infrastructure &amp; Engineering Advisory</option>
                        <option value="ESG, Environmental & Climate Resilience">ESG, Environmental &amp; Climate Resilience</option>
                        <option value="Water Resources & Hydrological Planning">Water Resources &amp; Hydrological Planning</option>
                        <option value="Industrial & SEZ Master Planning">Industrial &amp; SEZ Master Planning</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Target Industry / Sector
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
                      >
                        <option value="Infrastructure & Transport">Infrastructure &amp; Transport</option>
                        <option value="Energy & Renewables">Energy &amp; Renewables</option>
                        <option value="Real Estate & Urban Development">Real Estate &amp; Urban Development</option>
                        <option value="Industrial & Special Economic Zones">Industrial &amp; Special Economic Zones</option>
                        <option value="Water & Environmental Engineering">Water &amp; Environmental Engineering</option>
                        <option value="Public Sector & Sovereign Bodies">Public Sector &amp; Sovereign Bodies</option>
                        <option value="Banking & Project Finance">Banking &amp; Project Finance</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Estimated Capital Outlay
                      </label>
                      <select
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
                      >
                        <option value="Under PKR 100M Scale">Under PKR 100 Million</option>
                        <option value="PKR 100M – 1 Billion Scale">PKR 100M – 1 Billion</option>
                        <option value="PKR 1 Billion – 10 Billion Scale">PKR 1 Billion – 10 Billion</option>
                        <option value="Exceeding PKR 10 Billion Mega Program">Exceeding PKR 10 Billion (Mega Program)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Liaison City
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
                      >
                        <option value="Lahore">Lahore (Head Office)</option>
                        <option value="Islamabad">Islamabad (Public Sector)</option>
                        <option value="Karachi">Karachi (Financial Hub)</option>
                        <option value="Other / Remote Video">Other / Video Conference</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Program Summary / Terms of Reference Brief
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline preliminary objectives, site location, timeline expectations, or statutory deadlines..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#0D7C85] focus:ring-1 focus:ring-[#0D7C85] bg-white transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-lg bg-[#0D7C85] hover:bg-[#08545A] text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? "Transmitting RFP..." : "Submit Consulting Terms of Reference"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PakConsultFooter />
    </main>
  );
}
