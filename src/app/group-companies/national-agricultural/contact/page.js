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
  ArrowRight,
  Send,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  NationalAgriculturalNavbar,
  NationalAgriculturalFooter,
  SectionLabel,
  SectionHeading,
} from "../components/NationalAgriculturalShared";

const OFFICES = [
  {
    city: "Lahore Headquarters",
    fullCity: "Lahore Headquarters (Principal Agribusiness Complex)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Field Support 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "South Punjab Hub",
    fullCity: "South Punjab Regional Farm Hub (Multan & Bahawalpur)",
    address: "Regional Agribusiness Center, Khanewal Road, Multan, Punjab",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "punjab.agri@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 5:00 PM",
    tag: "Regional Hub",
  },
  {
    city: "Sindh Extension",
    fullCity: "Sindh & Lower Indus Agricultural Extension (Hyderabad)",
    address: "Agro-Industry Complex, Auto Bhan Road, Hyderabad, Sindh",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "sindh.agri@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Indus Extension",
  },
];

export default function NationalAgriculturalContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "Solar Drip Irrigation Setup",
    acreage: "50 - 200 Acres",
    location: "Punjab",
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
          companySlug: "national-agricultural",
          companyName: "National Agricultural Corporation",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Agribusiness Inquiry: ${formData.serviceType} (${formData.acreage})`,
          message: formData.message || `Location: ${formData.location}, Company: ${formData.company}`,
          additionalFields: {
            company: formData.company,
            serviceType: formData.serviceType,
            acreage: formData.acreage,
            location: formData.location,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your agribusiness proposal request has been registered. Our Chief Agronomist will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "Solar Drip Irrigation Setup",
          acreage: "50 - 200 Acres",
          location: "Punjab",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit agribusiness inquiry. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected network error occurred. Please try again or call our agronomy desk.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#0B2535] font-sans antialiased overflow-x-hidden">
      <NationalAgriculturalNavbar />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b bg-[#F8FAFB]" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto">
            <SectionLabel center>Commercial &amp; Technical Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-4" style={{ color: theme.navy }}>
              Consult Our <span style={{ color: theme.primaryMid }}>Agronomy Specialists</span>
            </h1>

            <p className="text-sm sm:text-base font-normal leading-relaxed mb-6" style={{ color: theme.textMuted }}>
              Whether you are planning a modern dairy enterprise, high-efficiency solar drip irrigation, precision mechanization, or seeking certified seed supplies, our agribusiness engineers are ready to assist.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-3.5 p-3 px-5 rounded-xl border bg-white shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: theme.navy }}>
                <Phone size={14} style={{ color: theme.primaryMid }} />
                <span className="text-slate-500">Helpline:</span>
                <a href="tel:00924238924737" className="hover:underline font-semibold" style={{ color: theme.navy }}>
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-2 text-xs font-medium" style={{ color: theme.navy }}>
                <MessageCircle size={14} style={{ color: "#25D366" }} />
                <span className="text-slate-500">WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-semibold" style={{ color: theme.navy }}>
                  0092-304-7527498
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Quotation & Office Grid */}
      <section className="py-18 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <SectionLabel>National Footprint</SectionLabel>
                <h2 className="text-2xl font-bold tracking-tight mb-2" style={{ color: theme.navy }}>
                  Regional Agricultural Hubs
                </h2>
                <p className="text-xs sm:text-sm font-normal leading-relaxed" style={{ color: theme.textMuted }}>
                  Our agronomists, irrigation engineers, and livestock nutritionists are stationed across major agricultural corridors to deliver on-site farm assessments and support.
                </p>
              </div>

              <div className="space-y-4">
                {OFFICES.map((office) => (
                  <div
                    key={office.city}
                    className="agri-card rounded-2xl p-5 bg-white space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-[15px] font-semibold" style={{ color: theme.navy }}>
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-50 border text-slate-700" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-normal" style={{ color: theme.textMuted }}>
                      <div className="flex items-start gap-2.5">
                        <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: theme.primaryMid }} />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={14} className="flex-shrink-0" style={{ color: theme.primaryMid }} />
                        <span className="font-medium" style={{ color: theme.navy }}>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={14} className="flex-shrink-0" style={{ color: theme.primaryMid }} />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-0.5">
                        <Clock size={14} className="flex-shrink-0" style={{ color: theme.primaryMid }} />
                        <span>{office.timing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Quotation Form */}
            <div className="lg:col-span-7">
              <div className="agri-card rounded-2xl p-6 sm:p-9 bg-white shadow-sm">
                <div className="mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider block mb-1" style={{ color: theme.accent }}>
                    Commercial Agronomy Inquiry
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: theme.navy }}>
                    Request Proposal &amp; Technical Quote
                  </h3>
                  <p className="text-xs sm:text-[13px] font-normal text-slate-500 mt-1">
                    Receive expert agronomy advice, system layouts, equipment pricing, and yield projections.
                  </p>
                </div>

                {submitStatus.type === "success" && (
                  <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2.5 text-emerald-800 text-xs font-medium">
                    <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mb-5 p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-2.5 text-rose-800 text-xs font-medium">
                    <ShieldCheck size={16} className="text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide mb-1.5" style={{ color: theme.navy }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Landowner / Manager"
                        className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#236B38] bg-white transition-all"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide mb-1.5" style={{ color: theme.navy }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="farms@agribusiness.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#236B38] bg-white transition-all"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide mb-1.5" style={{ color: theme.navy }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0092-300-1234567"
                        className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#236B38] bg-white transition-all"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide mb-1.5" style={{ color: theme.navy }}>
                        Farm / Entity Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Indus Agro Farms"
                        className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#236B38] bg-white transition-all"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide mb-1.5" style={{ color: theme.navy }}>
                        Required Service
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border text-xs font-normal focus:outline-none focus:ring-1 focus:ring-[#236B38] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Agriculture Development">Agriculture Development</option>
                        <option value="Dairy Farming">Dairy Farming</option>
                        <option value="Livestock Management">Livestock Management</option>
                        <option value="Irrigation & Water Management">Irrigation &amp; Water Management</option>
                        <option value="Agricultural Technology">Agricultural Technology</option>
                        <option value="Farm Management">Farm Management</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide mb-1.5" style={{ color: theme.navy }}>
                        Land / Herd Scale
                      </label>
                      <select
                        value={formData.acreage}
                        onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border text-xs font-normal focus:outline-none focus:ring-1 focus:ring-[#236B38] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Smallholder (5 - 25 Acres)">5 – 25 Acres</option>
                        <option value="Medium Farm (25 - 100 Acres)">25 – 100 Acres</option>
                        <option value="Large Estate (100 - 500 Acres)">100 – 500 Acres</option>
                        <option value="Corporate Project (500+ Acres)">500+ Acres</option>
                        <option value="Dairy (50 - 500+ Cattle)">50 – 500+ Cattle</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wide mb-1.5" style={{ color: theme.navy }}>
                        Region
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border text-xs font-normal focus:outline-none focus:ring-1 focus:ring-[#236B38] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Punjab">Punjab</option>
                        <option value="Sindh">Sindh</option>
                        <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                        <option value="Balochistan">Balochistan</option>
                        <option value="Gilgit-Baltistan / AJK">Gilgit-Baltistan / AJK</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wide mb-1.5" style={{ color: theme.navy }}>
                      Project Description &amp; Objectives
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your crop plans, water sources, tube-well setup, or dairy objectives..."
                      className="w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-normal focus:outline-none focus:ring-1 focus:ring-[#236B38] bg-white transition-all"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2 shadow-xs transition-all hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.primaryMid }}
                  >
                    <Send size={14} />
                    <span>{isSubmitting ? "Transmitting..." : "Submit Agribusiness Inquiry"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Context Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-[#F8FAFB] border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-2xl border p-6 bg-white flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderColor: theme.border }}>
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${theme.primaryMid}12` }}>
                <MapPin size={20} style={{ color: theme.primaryMid }} />
              </div>
              <div>
                <h4 className="text-sm font-semibold" style={{ color: theme.navy }}>Principal Agribusiness Headquarters</h4>
                <p className="text-xs font-normal text-slate-500 mt-0.5">
                  1st Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore, Pakistan.
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Lahore+Ring+Road+ASK-11"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5 flex-shrink-0"
              style={{ borderColor: theme.border }}
            >
              <span>View On Maps</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>

      <NationalAgriculturalFooter />
    </main>
  );
}
