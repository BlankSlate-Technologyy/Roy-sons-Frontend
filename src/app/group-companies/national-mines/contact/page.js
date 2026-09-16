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
  CheckCircle2,
  Send,
  Building2,
  Mountain,
  Truck,
  FlaskConical,
  MessageCircle,
  FileCheck2,
  Scale,
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
    city: "Lahore Corporate Headquarters",
    subtitle: "Principal Executive & Commercial Operations Center",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore, Pakistan.",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Commercial Desk 24/7)",
    tag: "Principal HQ",
    icon: Building2,
  },
  {
    city: "Quetta & Chagai Concession Command",
    subtitle: "Balochistan Field Operations & Concession Center",
    address: "Regional Exploration Operations Center, Airport Road, Quetta, Balochistan, Pakistan",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "balochistan@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 5:00 PM (Field Concessions 24/7)",
    tag: "Field Command Hub",
    icon: Mountain,
  },
  {
    city: "Karachi Port & Bulk Export Terminal",
    subtitle: "Marine Bulk Ore Logistics & Customs Clearance",
    address: "Marine Trade Logistics Zone, Port Muhammad Bin Qasim / Keamari, Karachi, Pakistan",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "export@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Vessel Dispatch 24/7)",
    tag: "Export Terminal Desk",
    icon: Truck,
  },
];

const COMMERCIAL_HIGHLIGHTS = [
  {
    title: "SGS / ISO Certified Assays",
    desc: "Every bulk consignment comes accompanied by independent third-party chemical purity and grade assay certificates.",
    icon: FlaskConical,
  },
  {
    title: "Direct Concession Provenance",
    desc: "100% legally secured mining concessions with full chain-of-custody documentation and government regulatory compliance.",
    icon: FileCheck2,
  },
  {
    title: "Flexible Incoterms 2020",
    desc: "Comprehensive trade execution covering FOB Karachi/Port Qasim, CIF global destination ports, or Ex-Works mine pitheads.",
    icon: Scale,
  },
];

export default function NationalMinesContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    mineralType: "Copper Concentrate (Cu)",
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
          companyName: "National Mines Corporation",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Mineral Quotation Request: ${formData.mineralType} (${formData.volume})`,
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
          message:
            data.message ||
            "Your mineral commodity quotation request has been registered. Our Chief Commercial Officer will contact you with grade assays within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          mineralType: "Copper Concentrate (Cu)",
          volume: "500 - 2,000 Metric Tons",
          deliveryTerm: "FOB Karachi / Port Qasim",
          destination: "Domestic Pakistan",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit mineral quotation request. Please try again or reach out via direct phone/WhatsApp.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected network error occurred. Please try again or contact our commercial desk directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Header */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#0B1B2B] text-white" style={{ borderColor: theme.borderDark }}>
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <Image
            src="/services/mining-2.jpg"
            alt="National Mines Operations"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <SectionLabel center>Commercial &amp; Procurement Desk</SectionLabel>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight uppercase mb-4 text-white">
            Direct Concession <span style={{ color: theme.gold }}>Mineral Sourcing</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base font-normal leading-relaxed text-slate-300 mb-8">
            Connect directly with our commercial trading desk for certified grade assays, bulk commodity pricing, multi-modal haulage logistics, and institutional procurement contracts.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium">
            <div className="flex items-center gap-2">
              <Phone size={14} style={{ color: theme.gold }} />
              <span className="text-slate-300">Commercial Desk:</span>
              <a href="tel:00924238924737" className="hover:underline font-semibold text-white">
                0092-42-38924737
              </a>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-2">
              <MessageCircle size={14} className="text-emerald-400" />
              <span className="text-slate-300">Direct WhatsApp:</span>
              <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold text-white">
                0092-304-7527498
              </a>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-2">
              <Mail size={14} style={{ color: theme.gold }} />
              <span className="text-slate-300">Procurement:</span>
              <a href="mailto:info@roysons.org" className="hover:underline font-semibold text-white">
                info@roysons.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Quotation & Regional Hubs Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left: Commercial Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-2xl border bg-white shadow-sm" style={{ borderColor: theme.border }}>
                <div className="mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider block mb-1" style={{ color: theme.gold }}>
                    Bulk Commodity Inquiry
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold uppercase" style={{ color: theme.navy }}>
                    Request Quotation &amp; Assay Report
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-slate-500 mt-1">
                    Receive verified chemical assays, technical specifications, and commercial FOB/CIF quotes within 24 hours.
                  </p>
                </div>

                {submitStatus.type === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-xs font-medium">
                    <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-xs font-medium">
                    <ShieldCheck size={18} className="text-rose-600 shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-slate-700">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Procurement Director / Representative"
                        className="w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#0F3826] bg-white transition-colors"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-slate-700">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="procurement@industrialgroup.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#0F3826] bg-white transition-colors"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-slate-700">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#0F3826] bg-white transition-colors"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-slate-700">
                        Company / Enterprise
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Steel Mill / Refiner / Manufacturing Group"
                        className="w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#0F3826] bg-white transition-colors"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-slate-700">
                        Mineral Commodity
                      </label>
                      <select
                        value={formData.mineralType}
                        onChange={(e) => setFormData({ ...formData, mineralType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg border text-xs font-normal focus:outline-none focus:ring-1 focus:ring-[#0F3826] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Copper Concentrate (Cu)">Copper Concentrate</option>
                        <option value="Gold Bullion / Ore (Au)">Gold Ore / Bullion</option>
                        <option value="Iron Ore 62-65% (Fe)">Iron Ore (Magnetite/Hematite)</option>
                        <option value="Industrial Coal (6,200 kcal)">Industrial Coal</option>
                        <option value="Limestone 94% (CaCO3)">Limestone</option>
                        <option value="Gypsum 92% (CaSO4)">Gypsum</option>
                        <option value="Chromite Ore (Cr2O3)">Chromite Ore</option>
                        <option value="Marble & Onyx Blocks">Marble &amp; Onyx</option>
                        <option value="Silica Sand 99% (SiO2)">Silica Sand</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-slate-700">
                        Required Volume
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg border text-xs font-normal focus:outline-none focus:ring-1 focus:ring-[#0F3826] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Trial Batch (100 - 500 Tons)">100 – 500 MT (Trial)</option>
                        <option value="500 - 2,000 Metric Tons">500 – 2,000 MT</option>
                        <option value="2,000 - 10,000 Metric Tons">2,000 – 10,000 MT</option>
                        <option value="10,000+ Tons (Monthly Contract)">10,000+ MT (Long-term)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-slate-700">
                        Delivery Terms
                      </label>
                      <select
                        value={formData.deliveryTerm}
                        onChange={(e) => setFormData({ ...formData, deliveryTerm: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-lg border text-xs font-normal focus:outline-none focus:ring-1 focus:ring-[#0F3826] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="FOB Karachi / Port Qasim">FOB Karachi / Qasim</option>
                        <option value="Ex-Works Mine Site">Ex-Works Mine Pithead</option>
                        <option value="Delivered At Place (DAP)">Delivered (DAP Factory)</option>
                        <option value="CIF International Port">CIF Export Port</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-slate-700">
                      Destination &amp; Grade Specifications
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify required chemical assay purity (e.g. Cu 22-26%, Fe 62%), particle sizing, preferred delivery schedule, or specific discharge port..."
                      className="w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#0F3826] bg-white transition-colors"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-medium text-white flex items-center justify-center gap-2 shadow-sm transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.forestGreen }}
                  >
                    <Send size={15} />
                    <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Mineral Quotation Request"}</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Regional Concession Hubs */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <SectionLabel>Concession Infrastructure</SectionLabel>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2" style={{ color: theme.navy }}>
                  Regional Operations Network
                </h3>
                <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
                  Our strategic regional nodes connect Baluchistan extraction zones, Punjab corporate management, and Port Qasim maritime bulk loaders.
                </p>
              </div>

              <div className="space-y-4">
                {OFFICES.map((office) => {
                  const IconComponent = office.icon;
                  return (
                    <div
                      key={office.city}
                      className="p-5 rounded-xl border bg-white shadow-xs hover:border-slate-300 transition-all space-y-2.5"
                      style={{ borderColor: theme.border }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0"
                            style={{ backgroundColor: theme.forestGreen }}
                          >
                            <IconComponent size={16} />
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold" style={{ color: theme.navy }}>
                              {office.city}
                            </h4>
                            <p className="text-[11px] text-slate-500 font-normal">{office.subtitle}</p>
                          </div>
                        </div>
                        <span
                          className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-md shrink-0"
                          style={{ backgroundColor: theme.goldPale, color: theme.goldHover }}
                        >
                          {office.tag}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-xs text-slate-600 font-normal pt-1 border-t" style={{ borderColor: theme.border }}>
                        <div className="flex items-start gap-2 pt-1">
                          <MapPin size={13} className="shrink-0 mt-0.5" style={{ color: theme.gold }} />
                          <span className="leading-snug">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={13} className="shrink-0" style={{ color: theme.gold }} />
                          <span className="font-medium text-slate-800">{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle size={13} className="shrink-0 text-emerald-600" />
                          <span>{office.whatsapp}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={13} className="shrink-0" style={{ color: theme.gold }} />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={13} className="shrink-0" style={{ color: theme.gold }} />
                          <span className="text-slate-500">{office.timing}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Commercial Assurance Highlights */}
              <div className="p-5 rounded-xl border bg-slate-50 space-y-3" style={{ borderColor: theme.border }}>
                <h4 className="text-xs font-semibold uppercase tracking-wider" style={{ color: theme.navy }}>
                  Commercial Assurance &amp; Compliance
                </h4>
                <div className="space-y-2.5">
                  {COMMERCIAL_HIGHLIGHTS.map((item) => {
                    const HIcon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-2.5">
                        <HIcon size={14} className="shrink-0 mt-0.5" style={{ color: theme.gold }} />
                        <div>
                          <span className="text-xs font-medium text-slate-800 block">{item.title}</span>
                          <span className="text-[11px] text-slate-500 font-normal leading-relaxed block">{item.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <SectionLabel center>Strategic Locations</SectionLabel>
            <h3 className="text-2xl font-semibold tracking-tight uppercase" style={{ color: theme.navy }}>
              Lahore Corporate Headquarters
            </h3>
            <p className="text-xs sm:text-sm font-normal text-slate-600 mt-2">
              Visitors welcome by prior appointment for institutional contract discussions, assay reviews, and concession documentation.
            </p>
          </div>

          <div className="rounded-2xl border overflow-hidden shadow-xs bg-white h-[380px] relative" style={{ borderColor: theme.border }}>
            <iframe
              title="National Mines Lahore Headquarters"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.668702334707!2d74.408796!3d31.478799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909a32c6498bb%3A0x2897dd1fc6bfa588!2sAskari%20XI%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
