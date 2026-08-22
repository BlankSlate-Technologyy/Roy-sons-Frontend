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
  Mountain,
  Truck,
  FlaskConical,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
  SectionHeading,
} from "../components/NationalMinesShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Principal Executive Center)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498 / 0092-321-8431665",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Operations 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Quetta & Chagai Concession Field Command",
    address: "Regional Exploration Operations Center, Airport Road, Quetta, Balochistan",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "balochistan@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 5:00 PM (Field Concessions 24/7)",
    tag: "Field Concession Hub",
  },
  {
    city: "Karachi Port & Bulk Export Logistics Desk",
    address: "Marine Trade Tower, Port Qasim / Keamari Logistics Zone, Karachi",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "export@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Vessel Dispatch 24/7)",
    tag: "Export Terminal Desk",
  },
];

export default function NationalMinesContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    mineralType: "Copper Concentrate",
    volume: "500 - 2,000 Metric Tons",
    deliveryTerm: "FOB Karachi / Port Qasim",
    destination: "Domestic Pakistan",
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
          companySlug: "national-mines",
          companyName: "National Mines & Minerals",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Mineral Quotation: ${formData.mineralType} (${formData.volume})`,
          message: formData.message || `Delivery Term: ${formData.deliveryTerm}, Destination: ${formData.destination}`,
          additionalFields: {
            company: formData.company,
            mineralType: formData.mineralType,
            volume: formData.volume,
            deliveryTerm: formData.deliveryTerm,
            destination: formData.destination,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your mineral commodity quotation request has been registered. Our Chief Commercial Officer will contact you with grade assays within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          mineralType: "Copper Concentrate",
          volume: "500 - 2,000 Metric Tons",
          deliveryTerm: "FOB Karachi / Port Qasim",
          destination: "Domestic Pakistan",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit mineral quotation request. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected network error occurred. Please try again or call our commercial desk.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#16243E] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Commercial &amp; Procurement Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
              Direct Concession <span style={{ color: theme.gold }}>Mineral Sourcing</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you require certified gold dory bars, high-grade copper concentrate, industrial iron ore, coal, or limestone, our commercial team delivers direct mine-to-facility supply chains.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-slate-50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.navy }}>
                <Phone size={16} style={{ color: theme.gold }} />
                <span>Commercial Desk:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold" style={{ color: theme.navy }}>
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.navy }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold" style={{ color: theme.navy }}>
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
                <SectionLabel>Concession Infrastructure</SectionLabel>
                <SectionHeading className="mb-4">Regional Logistics Hubs</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Our logistics hubs in Baluchistan, Punjab, and Port Qasim manage heavy dump-truck fleets, bulk ore rail dispatch, export customs clearance, and independent SGS lab assaying.
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
                      <h4 className="text-base font-black" style={{ color: theme.navy }}>
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-50 border" style={{ borderColor: theme.border, color: theme.navy }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: theme.gold }} />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0" style={{ color: theme.gold }} />
                        <span className="font-bold text-slate-800">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0" style={{ color: theme.gold }} />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0" style={{ color: theme.gold }} />
                        <span className="font-semibold text-slate-700">{office.timing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Quotation Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-12 rounded-3xl border bg-white shadow-xl" style={{ borderColor: theme.border }}>
                <div className="mb-8">
                  <span className="text-xs font-black uppercase tracking-widest block mb-1" style={{ color: theme.gold }}>
                    BULK COMMODITY INQUIRY
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.navy }}>
                    Request Mineral Pricing &amp; Assay Report
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Receive verified chemical assays, technical specifications, and commercial FOB/CIF quotes.
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
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Procurement Director / Manager"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16243E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="procurement@industrialgroup.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16243E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0092-300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16243E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Company / Enterprise
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Steel Mill / Refiner / Trader"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16243E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Mineral Commodity
                      </label>
                      <select
                        value={formData.mineralType}
                        onChange={(e) => setFormData({ ...formData, mineralType: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#16243E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Gold Bullion / Ore">Gold (Au)</option>
                        <option value="Copper Concentrate">Copper (Cu)</option>
                        <option value="Iron Ore 62-65%">Iron Ore (Fe)</option>
                        <option value="Coal 6200 kcal">Industrial Coal</option>
                        <option value="Limestone 94%">Limestone</option>
                        <option value="Gypsum 92%">Gypsum</option>
                        <option value="Chromite Ore">Chromite</option>
                        <option value="Marble & Onyx">Marble &amp; Onyx</option>
                        <option value="Silica Sand 99%">Silica Sand</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Required Quantity
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#16243E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Trial Batch (100 - 500 Tons)">100 – 500 Tons</option>
                        <option value="500 - 2,000 Metric Tons">500 – 2,000 Tons</option>
                        <option value="2,000 - 10,000 Metric Tons">2,000 – 10,000 Tons</option>
                        <option value="10,000+ Tons (Monthly Contract)">10,000+ Tons (Annual Contract)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Delivery Terms
                      </label>
                      <select
                        value={formData.deliveryTerm}
                        onChange={(e) => setFormData({ ...formData, deliveryTerm: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#16243E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="FOB Karachi / Port Qasim">FOB Karachi / Qasim</option>
                        <option value="Ex-Works Mine Site">Ex-Works Mine Site</option>
                        <option value="Delivered At Place (DAP)">Delivered (DAP Factory)</option>
                        <option value="CIF International Port">CIF Export Port</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                      Specific Grade Specifications / Remarks
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify desired chemical purity, mesh sizing, target delivery date, or special packaging..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#16243E] bg-white"
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
                    <span>{isSubmitting ? "Transmitting Mineral Request..." : "Submit Mineral Sourcing Request"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
