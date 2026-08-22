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
  Home as HomeIcon,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  SwissHomesNavbar,
  SwissHomesFooter,
  SectionLabel,
  SectionHeading,
} from "../components/SwissHomesShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Principal Sales & Executive Center)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Site Visits 7 Days Open)",
    tag: "Principal HQ",
  },
  {
    city: "Islamabad & Rawalpindi Regional Sales Gallery",
    address: "Executive Corporate Tower, Jinnah Avenue, Blue Area, Islamabad",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "islamabad.sales@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Site Offices 7 Days Open)",
    tag: "Capital Sales Hub",
  },
  {
    city: "Karachi Corporate Property Center",
    address: "Financial Trade Center, Shahrah-e-Faisal / Clifton Block-4, Karachi",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "karachi.sales@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "South Region Desk",
  },
];

export default function SwissHomesContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "Swiss Enclave Luxury Villas",
    propertyType: "1 Kanal Luxury Villa",
    budget: "PKR 50 Million - 100 Million",
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
          companySlug: "swiss-homes",
          companyName: "Swiss Homes & Real Estate",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Property Inquiry: ${formData.propertyType} (${formData.project})`,
          message: formData.message || `Budget: ${formData.budget} in ${formData.city}`,
          additionalFields: {
            project: formData.project,
            propertyType: formData.propertyType,
            budget: formData.budget,
            city: formData.city,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your property inquiry has been received. A senior property consultant will contact you with full brochures and pricing within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          project: "Swiss Enclave Luxury Villas",
          propertyType: "1 Kanal Luxury Villa",
          budget: "PKR 50 Million - 100 Million",
          city: "Lahore",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit property inquiry. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected network error occurred. Please try again or call our booking desk.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#2B2B2B] font-sans antialiased overflow-x-hidden">
      <SwissHomesNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Sales &amp; Booking Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.charcoal }}>
              Book Your Property Tour &amp; <span style={{ color: theme.red }}>Consult Our Advisors</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you are looking to purchase your dream family villa, reserve a prime commercial shop, or acquire high-growth land plots, our dedicated real estate advisors provide seamless assistance.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-slate-50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.charcoal }}>
                <Phone size={16} className="text-[#B01B2E]" />
                <span>Sales Desk:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold text-[#B01B2E]">
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.charcoal }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold text-[#B01B2E]">
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
                <SectionLabel>Property Galleries</SectionLabel>
                <SectionHeading className="mb-4">Regional Sales Centers</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Visit our regional site experience centers for 3D architectural scale model walkthroughs, virtual VR home tours, and dedicated payment plan consultations.
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
                      <h4 className="text-base font-black" style={{ color: theme.charcoal }}>
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-50 border text-[#B01B2E]" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#B01B2E]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0 text-[#B01B2E]" />
                        <span className="font-bold text-slate-800">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0 text-[#B01B2E]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0 text-[#B01B2E]" />
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
                  <span className="text-xs font-black uppercase tracking-widest block mb-1 text-[#B01B2E]">
                    PROPERTY RESERVATION &amp; INQUIRY
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.charcoal }}>
                    Request Price List &amp; Payment Schedule
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Receive complete brochure packs, floor plans, and flexible installment structures.
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
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.charcoal }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Mahmood"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B01B2E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.charcoal }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@gmail.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B01B2E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.charcoal }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0092-300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B01B2E] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.charcoal }}>
                        Preferred City
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#B01B2E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Lahore">Lahore</option>
                        <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
                        <option value="Karachi">Karachi</option>
                        <option value="Overseas Pakistani">Overseas Pakistani Investor</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.charcoal }}>
                        Project of Interest
                      </label>
                      <select
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#B01B2E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Swiss Enclave Luxury Villas">Swiss Enclave Luxury Villas</option>
                        <option value="Swiss Crest Smart Heights">Swiss Crest Smart Heights</option>
                        <option value="Swiss Executive Business Tower">Swiss Executive Business Tower</option>
                        <option value="Alpine Meadows Gated Community">Alpine Meadows Gated Community</option>
                        <option value="Swiss Boulevard Commercial Arcade">Swiss Boulevard Commercial Arcade</option>
                        <option value="Lakeview Eco-Villas & Resorts">Lakeview Eco-Villas &amp; Resorts</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.charcoal }}>
                        Property Unit Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#B01B2E] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="5 Marla Residential Plot / Villa">5 Marla Residential Plot / Villa</option>
                        <option value="10 Marla Luxury Villa">10 Marla Luxury Villa</option>
                        <option value="1 Kanal Executive Villa">1 Kanal Executive Villa</option>
                        <option value="2 Kanal Waterfront Villa">2 Kanal Waterfront Villa</option>
                        <option value="1, 2 or 3 Bed Smart Apartment">1, 2 or 3 Bed Smart Apartment</option>
                        <option value="Commercial Office / Retail Shop">Commercial Office / Retail Shop</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.charcoal }}>
                      Additional Preferences / Inquiries
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify if you prefer full cash discount, 3-year installment plan, or wish to schedule an on-site visit..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#B01B2E] bg-white"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.red }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Transmitting Reservation Request..." : "Submit Property Inquiry"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SwissHomesFooter />
    </main>
  );
}
