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
  Settings,
  Package,
  ClipboardList,
  HardHat,
  Truck,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  MaxPakNavbar,
  MaxPakFooter,
  SectionLabel,
  SectionHeading,
} from "../components/MaxPakShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Procurement & Central Warehouse Hub)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 8:30 AM – 6:00 PM (Emergency Industrial Support 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Karachi Maritime Port Logistics & Bonded Yard",
    address: "Port Qasim Industrial & Maritime Zone, Karachi, Sindh",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "karachi.procurement@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Port Logistics Yard",
  },
  {
    city: "Islamabad EPC Engineering & Liaison Office",
    address: "Commercial Blue Area, Sector F-6/F-7, Islamabad",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "islamabad.epc@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "EPC Liaison Desk",
  },
];

export default function MaxPakContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    sector: "Construction & Infrastructure",
    serviceDivision: "Construction Materials & Structural Steel",
    orderScope: "500 to 5,000 Tons / Medium Infrastructure",
    destination: "Lahore / Punjab Industrial Zone",
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
          companySlug: "max-pak-corrpration",
          companyName: "Max Pak Corporation",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `RFQ: ${formData.serviceDivision} (${formData.sector})`,
          message: formData.message || `Procurement Scope: ${formData.orderScope} to ${formData.destination}`,
          additionalFields: {
            company: formData.company,
            sector: formData.sector,
            serviceDivision: formData.serviceDivision,
            orderScope: formData.orderScope,
            destination: formData.destination,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your RFQ has been received. Our materials engineer will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          sector: "Construction & Infrastructure",
          serviceDivision: "Construction Materials & Structural Steel",
          orderScope: "500 to 5,000 Tons / Medium Infrastructure",
          destination: "Lahore / Punjab Industrial Zone",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit RFQ. Please check your inputs and try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again or call our hotline.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <MaxPakNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Industrial RFQ &amp; Procurement Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Request Industrial Quotation &amp; <span style={{ color: theme.navy }}>Procurement Scoping</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you require bulk ASTM Grade 60 steel rebar, heavy earthmoving equipment fleets, high-voltage switchgear, API linepipes, or turnkey EPC sourcing, our procurement engineers are ready to assist.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-slate-50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.navyDark }}>
                <Phone size={16} className="text-[#1B365D]" />
                <span>Industrial Hotline:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold text-[#1B365D]">
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.navyDark }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold text-[#1B365D]">
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
                <SectionLabel>Warehouses &amp; Logistics Hubs</SectionLabel>
                <SectionHeading className="mb-4">Regional Supply Centers</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Our strategically located warehouses house heavy overhead cranes, computerized rebar cutting yards, and temperature-controlled storage for critical industrial materials.
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
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border text-[#1B365D]" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#1B365D]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0 text-[#1B365D]" />
                        <span className="font-bold text-slate-800">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0 text-[#1B365D]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0 text-[#1B365D]" />
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
                  <span className="text-xs font-black uppercase tracking-widest block mb-1 text-[#16A34A]">
                    INDUSTRIAL TRADING &amp; SUPPLIES RFQ
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.navyDark }}>
                    Submit Procurement Parameters
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Receive verified manufacturer mill test certificates (MTC), itemized unit pricing, and batch delivery schedules.
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
                        placeholder="e.g. Engr. Tariq Mehmood"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Official Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="procurement@contractor-firm.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
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
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Company / Contractor Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Mehmood EPC Construction Ltd"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
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
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Construction & Infrastructure">Construction &amp; Infra</option>
                        <option value="Heavy Manufacturing & Plants">Heavy Manufacturing</option>
                        <option value="Energy & Power Utilities">Energy &amp; Utilities</option>
                        <option value="Oil, Gas & Petrochemical">Oil, Gas &amp; Refining</option>
                        <option value="Mining & Minerals">Mining &amp; Minerals</option>
                        <option value="Automotive Assembly">Automotive Assembly</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Procurement Division
                      </label>
                      <select
                        value={formData.serviceDivision}
                        onChange={(e) => setFormData({ ...formData, serviceDivision: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Heavy Industrial Equipment & Machinery">Industrial Machinery</option>
                        <option value="Construction Materials & Structural Steel">Structural Steel Rebar</option>
                        <option value="Turnkey EPC Engineering Procurement">Turnkey EPC Sourcing</option>
                        <option value="Heavy Earthmoving Machinery & Lifting Plants">Heavy Equipment Fleet</option>
                        <option value="Warehousing, Logistics & Supply Chain">Supply Chain Logistics</option>
                        <option value="Technical Support & Spare Parts">Technical &amp; Spares</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Target Delivery Location
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Lahore / Punjab Industrial Zone">Lahore / Punjab</option>
                        <option value="Karachi / Port Qasim Maritime Hub">Karachi / Port Qasim</option>
                        <option value="Gwadar Port / CPEC Corridor">Gwadar / CPEC</option>
                        <option value="Islamabad / KPK Region">Islamabad / KPK</option>
                        <option value="Other Project Site">Other Project Site</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                      Bill of Quantities (BOQ), Material Specifications &amp; Delivery Timeline
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify item descriptions, required ASTM/API standards, total tonnage/quantities, project milestone dates, and on-site delivery requirements..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
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
                    <span>{isSubmitting ? "Transmitting RFQ Request..." : "Submit Industrial Procurement RFQ"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MaxPakFooter />
    </main>
  );
}
