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
  Building2,
  Hammer,
  Truck,
  Layers,
  Wrench,
  ClipboardList,
  HardHat,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
} from "../components/WaltonShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Principal Civil Engineering & Construction Management)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Site Operations 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Islamabad & Northern Infrastructure Hub (Blue Area)",
    address: "Executive Corporate Tower, Jinnah Avenue, Blue Area, Islamabad",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "islamabad.civil@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Capital Projects Desk",
  },
  {
    city: "Karachi Regional Coastal Construction Center",
    address: "Financial Trade Center, Shahrah-e-Faisal / Port Qasim Industrial, Karachi",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "karachi.civil@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "South Region Desk",
  },
];

export default function WaltonContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    sector: "Commercial Real Estate & High-Rise Developer",
    solution: "Commercial High-Rise Superstructure & Deep Piling",
    scale: "50,000 to 200,000 Sq Ft Project",
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
          companySlug: "walton-consultants-contracting",
          companyName: "Walton Consultants & Contracting",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `EPC Tender: ${formData.solution} (${formData.sector})`,
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
          message: data.message || "Your construction tender request has been registered. Our principal structural engineer will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          sector: "Commercial Real Estate & High-Rise Developer",
          solution: "Commercial High-Rise Superstructure & Deep Piling",
          scale: "50,000 to 200,000 Sq Ft Project",
          city: "Lahore",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit project request. Please try again.",
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
    <main className="min-h-screen bg-white text-[#3A4E63] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Engineering &amp; EPC Tenders Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Commission Construction Projects &amp; <span style={{ color: theme.navy }}>Consult Our Engineers</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you are developing high-rise commercial superstructures, industrial manufacturing campuses, highway infrastructure, or complex MEP engineering plants, our registered PEC structural engineers are ready to build.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-slate-50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.navyDark }}>
                <Phone size={16} className="text-[#0D3B66]" />
                <span>Engineering Tenders Line:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold text-[#0D3B66]">
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.navyDark }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold text-[#0D3B66]">
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
                <SectionLabel>Engineering Bureaus &amp; Regional Offices</SectionLabel>
                <SectionHeading className="mb-4">Regional Contracting Desks</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Our structural design bureaus and site PMO pods coordinate material testing, plant machinery mobilization, and quality safety audits across all provinces.
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
                      <h4 className="text-base font-black" style={{ color: theme.navyDark }}>
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border text-[#0D3B66]" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#0D3B66]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0 text-[#0D3B66]" />
                        <span className="font-bold text-slate-800">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0 text-[#0D3B66]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0 text-[#0D3B66]" />
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
                  <span className="text-xs font-black uppercase tracking-widest block mb-1 text-[#0D3B66]">
                    GENERAL CONTRACTING &amp; EPC TENDERS INQUIRY
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.navyDark }}>
                    Submit Construction Project Specifications
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Receive complete Bill of Quantities (BOQ) estimates, structural engineering schedules, and turnkey EPC pricing models.
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
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Engr. Tariq Mahmood"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E2A47] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@development-group.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E2A47] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0092-300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E2A47] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Company / Developer Organization
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Prime Real Estate Developments Ltd"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E2A47] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Project Sector
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0E2A47] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Commercial Real Estate & High-Rise Developer">Commercial Real Estate</option>
                        <option value="Heavy Manufacturing & Industrial Plant">Industrial Manufacturing</option>
                        <option value="Government Infrastructure (NHA / C&W / LDA)">Government Infrastructure</option>
                        <option value="Logistics & Warehousing Hub">Logistics &amp; Warehousing</option>
                        <option value="Healthcare & Educational Campus">Campus / Institutional</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Required Solution
                      </label>
                      <select
                        value={formData.solution}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0E2A47] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Commercial High-Rise Superstructure & Deep Piling">High-Rise Superstructure</option>
                        <option value="Turnkey EPC Industrial Manufacturing Plant">Industrial EPC Plant</option>
                        <option value="Highway, Bridge & Interchange Corridor">Highway &amp; Bridges</option>
                        <option value="Pre-Engineered Building (PEB) Warehouse">PEB Steel Warehouse</option>
                        <option value="Project Management & BIM QA-QC">Project Management &amp; BIM</option>
                        <option value="Engineering Feasibility & Structural BOQs">Engineering Advisory</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Project Scale
                      </label>
                      <select
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0E2A47] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Under 50,000 Sq Ft Project">Under 50,000 Sq Ft</option>
                        <option value="50,000 to 200,000 Sq Ft Project">50,000 – 200,000 Sq Ft</option>
                        <option value="200,000+ Sq Ft Mega Project">200,000+ Sq Ft Mega</option>
                        <option value="Multi-Kilometer Highway Corridor">Multi-Km Highway</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                      Project Specifications &amp; Structural Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify site location, number of storeys/basements, covered area, soil type if tested, target completion timeline..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E2A47] bg-white"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.navy }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Transmitting Construction Tender Request..." : "Submit Construction Proposal Request"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaltonFooter />
    </main>
  );
}
