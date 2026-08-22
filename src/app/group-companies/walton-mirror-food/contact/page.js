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
  Factory,
  Snowflake,
  Package,
  Boxes,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  WaltonFoodNavbar,
  WaltonFoodFooter,
  SectionLabel,
  SectionHeading,
} from "../components/WaltonFoodShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Principal Commercial & Export Sales Hub)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 8:30 AM – 6:00 PM (Plant Operations 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "M-3 Industrial City IQF & Canning Mega-Complex",
    address: "Plot 42-48, Sector B, M-3 Industrial City, Sahianwala, Faisalabad, Punjab",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "plant.m3@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 6:00 PM",
    tag: "Manufacturing Complex",
  },
  {
    city: "Multan Agro-Sourcing & Puree Processing Hub",
    address: "Agro-Industrial Estate, Industrial Estate Phase-2, Multan, Punjab",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "multan.agro@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 6:00 PM",
    tag: "Agro-Sourcing Center",
  },
];

export default function WaltonFoodContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    businessType: "Supermarket Chain / Retail FMCG Brand",
    serviceDivision: "Turnkey Private Label OEM Contract Packing",
    volumeScale: "50 to 500 Tons Commercial Batch",
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
          companySlug: "walton-mirror-food",
          companyName: "Walton & Mirror Food Corporation",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Food Processing: ${formData.serviceDivision} (${formData.businessType})`,
          message: formData.message || `Volume: ${formData.volumeScale} in ${formData.city}`,
          additionalFields: {
            organization: formData.organization,
            businessType: formData.businessType,
            serviceDivision: formData.serviceDivision,
            volumeScale: formData.volumeScale,
            city: formData.city,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your food manufacturing inquiry has been registered. Our food science and commercial director team will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          businessType: "Supermarket Chain / Retail FMCG Brand",
          serviceDivision: "Turnkey Private Label OEM Contract Packing",
          volumeScale: "50 to 500 Tons Commercial Batch",
          city: "Lahore",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit food manufacturing inquiry. Please try again.",
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
    <main className="min-h-screen bg-white text-[#3D4E44] font-sans antialiased overflow-x-hidden">
      <WaltonFoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Commercial &amp; Private Label Quotation Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.greenDark }}>
              Request Manufacturing Quotation &amp; <span style={{ color: theme.green }}>Private Label Scoping</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you require high-capacity IQF flash freezing, shelf-stable retort meal manufacturing, aseptic bottling, or turnkey private label co-packing for global export, our food engineering team is at your service.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-emerald-50/50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.greenDark }}>
                <Phone size={16} className="text-[#2D7A4D]" />
                <span>Commercial Processing Hotline:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold text-[#2D7A4D]">
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-emerald-200">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.greenDark }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold text-[#2D7A4D]">
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
                <SectionLabel>Processing Plants &amp; Cold Storage</SectionLabel>
                <SectionHeading className="mb-4">Regional Processing Facilities</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Our food processing facilities feature automated aseptic packaging lines, IQF blast freezers, microbiology laboratories, and temperature-controlled logistics terminals.
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
                      <h4 className="text-base font-black" style={{ color: theme.greenDark }}>
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 border text-[#2D7A4D]" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-emerald-900/80">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#2D7A4D]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0 text-[#2D7A4D]" />
                        <span className="font-bold text-emerald-950">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0 text-[#2D7A4D]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0 text-[#2D7A4D]" />
                        <span className="font-semibold text-emerald-950">{office.timing}</span>
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
                  <span className="text-xs font-black uppercase tracking-widest block mb-1 text-[#2D7A4D]">
                    COMMERCIAL PROCESSING &amp; PRIVATE LABEL RFQ
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.greenDark }}>
                    Submit Manufacturing Specifications
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-emerald-800 mt-1">
                    Receive custom recipe formulation options, packaging mockups, and tiered contract volume quotes.
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
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.greenDark }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Asim Chaudhry"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E6B43] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.greenDark }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="asim@fmcg-distributor.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E6B43] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.greenDark }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0092-300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E6B43] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.greenDark }}>
                        Company / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Metro Retail Brands Ltd"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E6B43] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.greenDark }}>
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1E6B43] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Supermarket Chain / Retail FMCG Brand">Supermarket Chain / Retail</option>
                        <option value="International Export Importer / Distributor">Export Importer / Distributor</option>
                        <option value="Foodservice / Restaurant Chain">Foodservice / Restaurant</option>
                        <option value="Institutional Buyer / Government Reserves">Institutional Buyer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.greenDark }}>
                        Service Division
                      </label>
                      <select
                        value={formData.serviceDivision}
                        onChange={(e) => setFormData({ ...formData, serviceDivision: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1E6B43] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Turnkey Private Label OEM Contract Packing">Private Label OEM</option>
                        <option value="IQF Cryogenic Frozen Foods & Appetizers">IQF Frozen Foods</option>
                        <option value="Modern Automated Food Processing & Canning">Canning &amp; Processing</option>
                        <option value="Packaged FMCG Consumer Goods">Packaged FMCG Goods</option>
                        <option value="Culinary Food R&D & Recipe Innovation">R&amp;D Formulation</option>
                        <option value="Quality Control & Laboratory Testing">Lab Testing QA</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.greenDark }}>
                        Production Volume
                      </label>
                      <select
                        value={formData.volumeScale}
                        onChange={(e) => setFormData({ ...formData, volumeScale: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1E6B43] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Under 50 Tons Trial Run">Under 50 Tons Trial</option>
                        <option value="50 to 500 Tons Commercial Batch">50 – 500 Tons Batch</option>
                        <option value="500 to 5,000+ Tons Mega-Run">500 – 5,000+ Tons Mega</option>
                        <option value="Continuous Multi-Container Export Supply">Multi-Container Export</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.greenDark }}>
                      Product Specifications &amp; Formulation Details
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify product category (frozen, retort, snacks, dairy), desired packaging format, target shelf-life, and export destination countries..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1E6B43] bg-white"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.green }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Transmitting Manufacturing Inquiry..." : "Submit Manufacturing Proposal Request"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaltonFoodFooter />
    </main>
  );
}
