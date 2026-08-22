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
  Globe,
  Ship,
  Truck,
  FileText,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  InverseUnionNavbar,
  InverseUnionFooter,
  SectionLabel,
  SectionHeading,
} from "../components/InverseUnionShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Global Trade Desk & Procurement Hub)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 8:30 AM – 6:00 PM (Global Operations 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Karachi Port & Customs Clearance Bureau",
    address: "West Wharf Commercial Tower, Marine Drive, Port of Karachi",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "karachi.customs@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Port Bureau",
  },
  {
    city: "Gwadar Deep-Sea Logistics & Free Zone Office",
    address: "Gwadar Port Free Zone Phase-1 Commercial Complex, Gwadar, Balochistan",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "gwadar.trade@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Free Zone Office",
  },
];

export default function InverseUnionContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sector: "Construction & Infrastructure",
    serviceDivision: "Global Sourcing & Direct Procurement",
    incoterm: "CIF (Cost, Insurance & Freight)",
    budgetScope: "PKR 10M to 50M Medium Consignment",
    originCountry: "China / East Asia",
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
          companySlug: "inverse&union",
          companyName: "Inverse & Union Corporation",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Trade Inquiry: ${formData.serviceDivision} (${formData.sector})`,
          message: formData.message || `Incoterm: ${formData.incoterm}, Scope: ${formData.budgetScope}, Origin: ${formData.originCountry}`,
          additionalFields: {
            company: formData.company,
            sector: formData.sector,
            serviceDivision: formData.serviceDivision,
            incoterm: formData.incoterm,
            budgetScope: formData.budgetScope,
            originCountry: formData.originCountry,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your trade quotation request has been registered. Our international procurement team will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          sector: "Construction & Infrastructure",
          serviceDivision: "Global Sourcing & Direct Procurement",
          incoterm: "CIF (Cost, Insurance & Freight)",
          budgetScope: "PKR 10M to 50M Medium Consignment",
          originCountry: "China / East Asia",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit trade inquiry. Please try again.",
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
    <main className="min-h-screen bg-white text-[#4A5568] font-sans antialiased overflow-x-hidden">
      <InverseUnionNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>International Trade &amp; Customs Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Request International Trade &amp; <span style={{ color: theme.blue }}>Procurement Quotation</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you require heavy machinery import from Europe, high-volume construction rebar shipments, tariff optimization, or bonded warehousing, our senior trade consultants are ready to assist.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-slate-50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.navyDark }}>
                <Phone size={16} className="text-[#0B3C5D]" />
                <span>Trade Hotline:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold text-[#0B3C5D]">
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.navyDark }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold text-[#0B3C5D]">
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
                <SectionLabel>Global Trade Ports &amp; Desks</SectionLabel>
                <SectionHeading className="mb-4">Regional Supply Centers</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Our international trade hubs coordinate bonded freight clearance, multi-modal container tracking, and direct bank LC execution.
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
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border text-[#0B3C5D]" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#0B3C5D]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0 text-[#0B3C5D]" />
                        <span className="font-bold text-slate-800">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0 text-[#0B3C5D]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0 text-[#0B3C5D]" />
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
                  <span className="text-xs font-black uppercase tracking-widest block mb-1 text-[#0072CE]">
                    INTERNATIONAL SOURCING &amp; CIF RFQ
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.navyDark }}>
                    Submit Trade Parameters
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Receive verified manufacturer mill test certificates, HS code tariff breakdowns, and multi-modal transit schedules.
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
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Mehmood"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="procurement@industrial-group.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] bg-white"
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
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Company / Importer Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Mehmood Construction & Heavy Engineering Ltd."
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Target Sector
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Construction & Infrastructure">Construction</option>
                        <option value="Manufacturing & Heavy Plants">Manufacturing</option>
                        <option value="Oil, Gas & Petrochemicals">Oil &amp; Gas</option>
                        <option value="Agriculture & Commodities">Agriculture</option>
                        <option value="Energy & Power">Energy &amp; Power</option>
                        <option value="Consumer Goods & FMCG">FMCG / Retail</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Trade Division
                      </label>
                      <select
                        value={formData.serviceDivision}
                        onChange={(e) => setFormData({ ...formData, serviceDivision: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Global Sourcing & Direct Procurement">Global Sourcing</option>
                        <option value="Import & Export Trade Management">Import / Export</option>
                        <option value="Multi-Modal Freight Logistics">Freight Logistics</option>
                        <option value="Trade Compliance & Customs Clearance">Customs Clearance</option>
                        <option value="Bulk Commodity Sourcing">Bulk Commodity</option>
                        <option value="Supply Chain Risk Management & Finance">Risk &amp; Finance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Incoterms 2020
                      </label>
                      <select
                        value={formData.incoterm}
                        onChange={(e) => setFormData({ ...formData, incoterm: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="CIF (Cost, Insurance & Freight)">CIF (Port of Karachi)</option>
                        <option value="FOB (Free On Board)">FOB (Origin Port)</option>
                        <option value="DDP (Delivered Duty Paid)">DDP (Doorstep Delivery)</option>
                        <option value="Ex-Works (Origin Factory)">Ex-Works</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                      Cargo Details, Required Quantities &amp; HS Codes
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify target commodities, machinery models, required container units (FCL/LCL), origin country, and target delivery port..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0080FF] bg-white"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.blue }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Transmitting Trade Request..." : "Submit Global Procurement Quotation Request"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InverseUnionFooter />
    </main>
  );
}
