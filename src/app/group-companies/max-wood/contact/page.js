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
  Sofa,
  Home,
  Briefcase,
  Hammer,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  MaxWoodNavbar,
  MaxWoodFooter,
  SectionLabel,
  SectionHeading,
} from "../components/MaxWoodShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Design Atelier & Master Woodcraft Hub)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 8:30 AM – 6:00 PM (Showroom Appointments 7 Days)",
    tag: "Principal HQ",
  },
  {
    city: "Islamabad Interior Architecture Studio",
    address: "Sector F-6/2, Super Market Commercial Plaza, Islamabad",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "islamabad.design@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Design Studio",
  },
  {
    city: "Karachi Commercial Millwork & Fitout Bureau",
    address: "Clifton Block 4, Marine Drive Commercial Avenue, Karachi",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "karachi.fitout@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Commercial Bureau",
  },
];

export default function MaxWoodContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    projectType: "Luxury Residential Villa / Penthouse",
    serviceDivision: "Bespoke Luxury Residential Furniture",
    budgetScope: "PKR 5M to 25M Commercial Fitout",
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
          companySlug: "max-wood",
          companyName: "Max Wood & Furniture",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Woodwork Request: ${formData.serviceDivision} (${formData.projectType})`,
          message: formData.message || `Scope: ${formData.budgetScope} in ${formData.city}`,
          additionalFields: {
            organization: formData.organization,
            projectType: formData.projectType,
            serviceDivision: formData.serviceDivision,
            budgetScope: formData.budgetScope,
            city: formData.city,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your custom joinery inquiry has been registered. Our master woodworker and design team will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          projectType: "Luxury Residential Villa / Penthouse",
          serviceDivision: "Bespoke Luxury Residential Furniture",
          budgetScope: "PKR 5M to 25M Commercial Fitout",
          city: "Lahore",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit woodwork inquiry. Please try again.",
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
    <main className="min-h-screen bg-white text-[#5C5248] font-sans antialiased overflow-x-hidden">
      <MaxWoodNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Interior Architecture &amp; Joinery Consultation</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.darkWood }}>
              Request Bespoke Furniture &amp; <span style={{ color: theme.primary }}>Interior Fitout Scoping</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you are an architect detailing custom millwork, a corporate enterprise designing a flagship boardroom, or a homeowner envisioning heirloom furniture, our design studio is ready to bring your vision to life.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-amber-50/50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.darkWood }}>
                <Phone size={16} className="text-[#8B5A2B]" />
                <span>Design Studio Hotline:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold text-[#8B5A2B]">
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-amber-200">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.darkWood }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold text-[#8B5A2B]">
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
                <SectionLabel>Design Studios &amp; Joinery Yards</SectionLabel>
                <SectionHeading className="mb-4">Regional Experience Centers</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Visit our material galleries and joinery studios to touch timber veneers, examine live Italian lacquer finishes, and review 3D photorealistic architectural renders.
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
                      <h4 className="text-base font-black" style={{ color: theme.darkWood }}>
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-50 border text-[#8B5A2B]" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-amber-900/80">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#8B5A2B]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0 text-[#8B5A2B]" />
                        <span className="font-bold text-amber-950">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0 text-[#8B5A2B]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0 text-[#8B5A2B]" />
                        <span className="font-semibold text-amber-950">{office.timing}</span>
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
                  <span className="text-xs font-black uppercase tracking-widest block mb-1 text-[#8B5A2B]">
                    CUSTOM JOINERY &amp; FITOUT INQUIRY
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.darkWood }}>
                    Submit Fitout Parameters
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-amber-800 mt-1">
                    Receive timber swatch portfolios, 3D concept joinery drawings, and comprehensive itemized quotes.
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
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkWood }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ar. Bilal Farooq"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5C3A21] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkWood }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="bilal@architecture-studio.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5C3A21] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkWood }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0092-300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5C3A21] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkWood }}>
                        Company / Residence Name
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Farooq Design Atelier / Private Residence"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5C3A21] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkWood }}>
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#5C3A21] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Luxury Residential Villa / Penthouse">Residential Villa</option>
                        <option value="Corporate Office / Executive Headquarters">Corporate Office</option>
                        <option value="5-Star Hotel / Luxury Hospitality Resort">Hospitality / Hotel</option>
                        <option value="Restaurant / Fine-Dining Lounge">Restaurant / Dining</option>
                        <option value="Commercial Retail / Flagship Store">Commercial Retail</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkWood }}>
                        Woodwork Division
                      </label>
                      <select
                        value={formData.serviceDivision}
                        onChange={(e) => setFormData({ ...formData, serviceDivision: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#5C3A21] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Bespoke Luxury Residential Furniture">Residential Furniture</option>
                        <option value="Corporate Executive Office Fitouts">Corporate Fitouts</option>
                        <option value="Turnkey Luxury Interior Architecture">Turnkey Interior Design</option>
                        <option value="Hospitality & 5-Star Hotel Furniture">Hospitality Furniture</option>
                        <option value="Architectural Wood Paneling & Ceilings">Architectural Paneling</option>
                        <option value="Modular Kitchens & Smart Wardrobes">Kitchens &amp; Wardrobes</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkWood }}>
                        Budget / Scope
                      </label>
                      <select
                        value={formData.budgetScope}
                        onChange={(e) => setFormData({ ...formData, budgetScope: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#5C3A21] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Under PKR 5 Million Private Suite">Under PKR 5M</option>
                        <option value="PKR 5M to 25M Commercial Fitout">PKR 5M – 25M</option>
                        <option value="PKR 25M to 100M+ Mega-Development">PKR 25M – 100M+</option>
                        <option value="Multi-Suite Hospitality">Hospitality Multi-Suite</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.darkWood }}>
                      Design Specifications &amp; Architectural Dimensions
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify preferred timber species (walnut, teak, oak, sheesham), required furniture pieces, finish sheen, and target installation timeline..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5C3A21] bg-white"
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
                    <span>{isSubmitting ? "Transmitting Design Inquiry..." : "Submit Interior Fitout Proposal Request"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MaxWoodFooter />
    </main>
  );
}
