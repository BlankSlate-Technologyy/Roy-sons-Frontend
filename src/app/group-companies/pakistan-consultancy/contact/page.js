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
    city: "Lahore Headquarters (Principal Management Consulting & PMO Practice)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Transaction Team 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Islamabad Public Sector & Policy Advisory Center",
    address: "Executive Corporate Tower, Jinnah Avenue, Blue Area, Islamabad",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "islamabad.consult@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Govt & PPP Desk",
  },
  {
    city: "Karachi Financial & Transaction Structuring Hub",
    address: "Financial Trade Center, Shahrah-e-Faisal / I.I. Chundrigar Road, Karachi",
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
    sector: "Infrastructure & Real Estate Development",
    solution: "Techno-Economic Feasibility Studies",
    scale: "100M to 1 Billion PKR Project",
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
          message: data.message || "Your consulting inquiry has been received. Our senior advisory partner will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          sector: "Infrastructure & Real Estate Development",
          solution: "Techno-Economic Feasibility Studies",
          scale: "100M to 1 Billion PKR Project",
          city: "Lahore",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit consulting inquiry. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected network error occurred. Please try again or call our hotline.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#48525D] font-sans antialiased overflow-x-hidden">
      <PakConsultNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Strategic Advisory &amp; Transaction Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.slateDark }}>
              Commission Strategic Studies &amp; <span style={{ color: theme.slate }}>Consult Our Partners</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you are preparing a multi-billion PKR public-private partnership tender, restructuring corporate balance sheets, conducting techno-economic feasibility studies, or optimizing institutional operations, our senior partners are ready to assist.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-slate-50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.slateDark }}>
                <Phone size={16} className="text-[#334155]" />
                <span>Advisory Hotline:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold text-[#334155]">
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.slateDark }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold text-[#334155]">
                  0092-304-7527498
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Quotation & Office Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <SectionLabel>Advisory Bureaus &amp; Practice Desks</SectionLabel>
                <SectionHeading className="mb-4">Regional Advisory Desks</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Our advisory directors maintain direct practice presence in key financial, regulatory, and provincial capitals across Pakistan.
                </p>
              </div>

              <div className="space-y-5">
                {OFFICES.map((office) => (
                  <div
                    key={office.city}
                    className="p-6 rounded-3xl border bg-white shadow-xs hover:shadow-md transition-all space-y-3"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-black" style={{ color: theme.slateDark }}>
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border text-[#334155]" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#334155]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0 text-[#334155]" />
                        <span className="font-bold text-slate-800">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0 text-[#334155]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0 text-[#334155]" />
                        <span className="font-semibold text-slate-700">{office.timing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl border bg-white shadow-xl" style={{ borderColor: theme.border }}>
                <div className="mb-8">
                  <span className="text-xs font-black uppercase tracking-widest block mb-1 text-[#334155]">
                    STRATEGIC ADVISORY &amp; ENGAGEMENT INQUIRY
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.slateDark }}>
                    Commission Consulting Engagement
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Receive customized Terms of Reference (TOR) blueprints, timeline estimates, and team composition profiles.
                  </p>
                </div>

                {submitStatus.type === "success" && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-xs font-medium">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-xs font-medium">
                    <ShieldCheck size={18} className="text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.slateDark }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Salman Qureshi"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3A444E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.slateDark }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="salman@development-authority.gov.pk"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3A444E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.slateDark }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0092-300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3A444E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.slateDark }}>
                        Company / Government Entity
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Infrastructure Development Authority"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3A444E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.slateDark }}>
                        Client Sector
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#3A444E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Government & Public Sector (Federal/Provincial)">Government &amp; Public Sector</option>
                        <option value="Infrastructure & Real Estate Development">Infrastructure &amp; Real Estate</option>
                        <option value="Manufacturing & Special Economic Zones">Manufacturing &amp; SEZ</option>
                        <option value="Energy, Renewable & Utilities">Energy &amp; Utilities</option>
                        <option value="Banking, Financial Services & DFIs">Banking &amp; DFIs</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.slateDark }}>
                        Required Advisory
                      </label>
                      <select
                        value={formData.solution}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#3A444E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Techno-Economic Feasibility Studies">Techno-Economic Feasibility</option>
                        <option value="PPP Concession & Transaction Advisory">PPP Transaction Advisory</option>
                        <option value="Project Management Office (PMO) Setup">PMO Setup &amp; Governance</option>
                        <option value="Procurement & FIDIC Contract Advisory">Procurement &amp; PPRA</option>
                        <option value="Corporate Restructuring & Strategy">Corporate Strategy &amp; BPR</option>
                        <option value="ESG & Environmental Impact Study">ESG &amp; EIA Feasibility</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.slateDark }}>
                        Project Capex Scale
                      </label>
                      <select
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#3A444E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Under 100M PKR Study">Under 100M PKR</option>
                        <option value="100M to 1 Billion PKR Project">100M – 1 Billion PKR</option>
                        <option value="1B to 10B+ PKR Mega Project">1B – 10B+ PKR Mega</option>
                        <option value="Multilateral International Program">Multilateral DFI Program</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.slateDark }}>
                      Terms of Reference (TOR) &amp; Scope Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify objectives, key deliverables expected, target completion timeline, and any existing baseline data..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#3A444E] bg-white"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.slate }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Transmitting Advisory Proposal Request..." : "Submit Strategic Proposal Request"}</span>
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
