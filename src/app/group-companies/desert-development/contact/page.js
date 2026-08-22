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
  Trees,
  Globe,
  Droplets,
  Sprout,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  DesertDevNavbar,
  DesertDevFooter,
  SectionLabel,
  SectionHeading,
} from "../components/DesertDevShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Environmental Engineering & GIS Hub)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 8:30 AM – 6:00 PM (Emergency Arid Support 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Bahawalpur Cholistan Desert Field Station",
    address: "Model Town A, Commercial Avenue, Bahawalpur, Punjab",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "cholistan.station@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 5:00 PM",
    tag: "Field Station",
  },
  {
    city: "Gwadar Coastal Arid Operations Bureau",
    address: "Gwadar Free Zone Phase-1 Commercial Complex, Gwadar, Balochistan",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "gwadar.arid@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Coastal Bureau",
  },
];

export default function DesertDevContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    sector: "Government Authorities / Forest Dept",
    serviceDivision: "Large-Scale Afforestation & Green Belts",
    areaScope: "500 to 2,500 Hectares Commercial Belt",
    region: "Thar Desert / Sindh",
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
          companySlug: "desert-development",
          companyName: "Desert Development & Rehabilitation",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Restoration Scope: ${formData.serviceDivision} (${formData.sector})`,
          message: formData.message || `Scope: ${formData.areaScope} in ${formData.region}`,
          additionalFields: {
            organization: formData.organization,
            sector: formData.sector,
            serviceDivision: formData.serviceDivision,
            areaScope: formData.areaScope,
            region: formData.region,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your project proposal request has been registered. Our environmental engineering team will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          sector: "Government Authorities / Forest Dept",
          serviceDivision: "Large-Scale Afforestation & Green Belts",
          areaScope: "500 to 2,500 Hectares Commercial Belt",
          region: "Thar Desert / Sindh",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit proposal request. Please check your inputs and try again.",
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
    <main className="min-h-screen bg-white text-[#425C52] font-sans antialiased overflow-x-hidden">
      <DesertDevNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Arid Land Restoration &amp; Consultation</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkGreen }}>
              Request Desert Rehabilitation &amp; <span style={{ color: theme.primary }}>Environmental Proposal</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you are a government agency initiating an afforestation green belt, an agricultural developer reclaiming saline arid land, or an infrastructure contractor stabilizing sand dunes, our environmental team is ready to assist.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-emerald-50/50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.darkGreen }}>
                <Phone size={16} className="text-[#107C41]" />
                <span>Environmental Hotline:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold text-[#107C41]">
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-emerald-200">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.darkGreen }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold text-[#107C41]">
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
                <SectionLabel>Field Research &amp; Stations</SectionLabel>
                <SectionHeading className="mb-4">Regional Ecological Hubs</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Our field research centers house mobile soil salinity testing laboratories, GIS satellite telemetry mapping desks, and automated drought-tolerant nursery facilities.
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
                      <h4 className="text-base font-black" style={{ color: theme.darkGreen }}>
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 border text-[#107C41]" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-emerald-800/80">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#107C41]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0 text-[#107C41]" />
                        <span className="font-bold text-emerald-950">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0 text-[#107C41]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0 text-[#107C41]" />
                        <span className="font-semibold text-emerald-900">{office.timing}</span>
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
                  <span className="text-xs font-black uppercase tracking-widest block mb-1 text-[#107C41]">
                    ENVIRONMENTAL PROPOSAL &amp; SCOPING
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.darkGreen }}>
                    Submit Project Parameters
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-emerald-700 mt-1">
                    Receive customized afforestation blueprints, satellite soil reports, and turn-key cost estimates.
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
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkGreen }}>
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Salman Qureshi"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkGreen }}>
                        Official Corporate / Agency Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="salman@forest-department.gov.pk"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkGreen }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0092-300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkGreen }}>
                        Organization / Developer Name
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Sindh Forest & Wildlife Dept / Agri Corp"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkGreen }}>
                        Target Sector
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Government Authorities / Forest Dept">Government Authority</option>
                        <option value="Environmental Agency / NGO">Environmental Agency</option>
                        <option value="Commercial Agriculture & Farming">Commercial Agriculture</option>
                        <option value="Renewable Energy Solar Farm">Renewable Solar Farm</option>
                        <option value="Infrastructure Developers">Infrastructure Dev</option>
                        <option value="Mining & Mineral Corridor">Mining Corridor</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkGreen }}>
                        Engineering Division
                      </label>
                      <select
                        value={formData.serviceDivision}
                        onChange={(e) => setFormData({ ...formData, serviceDivision: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Scientific Desert Rehabilitation & Dune Fixation">Dune Stabilization</option>
                        <option value="Arid Land Reclamation & Soil Regeneration">Soil Reclamation</option>
                        <option value="Sustainable Arid Infrastructure & Earthworks">Arid Infrastructure</option>
                        <option value="Deep Aquifer & Solar Drip Water Management">Water Hydrology</option>
                        <option value="Large-Scale Afforestation & Green Belts">Afforestation</option>
                        <option value="Desert Renewable Solar & Wind Development">Solar &amp; Wind Energy</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkGreen }}>
                        Target Arid Region
                      </label>
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Thar Desert / Sindh">Thar Desert (Sindh)</option>
                        <option value="Cholistan Desert / Punjab">Cholistan (Punjab)</option>
                        <option value="Thal Desert / Punjab">Thal Desert (Punjab)</option>
                        <option value="Coastal Makran & Gwadar / Balochistan">Gwadar / Coastal</option>
                        <option value="Chagai & Kharan / Balochistan">Chagai / Balochistan</option>
                        <option value="Other Arid Zone">Other Arid Basin</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkGreen }}>
                      Project Objectives, Acreage &amp; Hydrology Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify total target land area (hectares/acres), existing water sources (brackish wells, canal proximity), soil conditions, and intended project outcomes..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B4D3E] bg-white"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.primary }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Transmitting Scoping Request..." : "Submit Desert Rehabilitation Scoping Request"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DesertDevFooter />
    </main>
  );
}
