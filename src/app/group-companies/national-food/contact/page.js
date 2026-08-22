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
  UtensilsCrossed,
  Hotel,
  Building2,
  Truck,
  Package,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  NFSNavbar,
  NFSFooter,
  SectionLabel,
  SectionHeading,
} from "../components/NFSShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Principal Culinary & Cold Chain Logistics Hub)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 6:00 PM (Kitchen Operations 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Islamabad Campus & Healthcare Catering Desk",
    address: "Executive Corporate Tower, Jinnah Avenue, Blue Area, Islamabad",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "islamabad.catering@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 6:00 PM",
    tag: "Campus & Hospital Hub",
  },
  {
    city: "Karachi Corporate & Industrial Food Hub",
    address: "Industrial Trade Center, Korangi / Port Qasim Industrial Area, Karachi",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "karachi.catering@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 6:00 PM",
    tag: "Industrial Desk",
  },
];

export default function NFSContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    institutionType: "Corporate Enterprise / Office Headquarters",
    servicePackage: "Turnkey Corporate Cafeteria Management",
    volumeScale: "500 to 2,000 Meals Daily",
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
          companySlug: "national-food",
          companyName: "National Food Services",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Catering Inquiry: ${formData.servicePackage} (${formData.institutionType})`,
          message: formData.message || `Scale: ${formData.volumeScale} in ${formData.city}`,
          additionalFields: {
            organization: formData.organization,
            institutionType: formData.institutionType,
            servicePackage: formData.servicePackage,
            volumeScale: formData.volumeScale,
            city: formData.city,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your catering inquiry has been received. Our executive culinary team will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          institutionType: "Corporate Enterprise / Office Headquarters",
          servicePackage: "Turnkey Corporate Cafeteria Management",
          volumeScale: "500 to 2,000 Meals Daily",
          city: "Lahore",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit catering inquiry. Please try again.",
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
    <main className="min-h-screen bg-white text-[#4E5456] font-sans antialiased overflow-x-hidden">
      <NFSNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Institutional Catering &amp; Quotation Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.maroonDark }}>
              Request Catering Proposal &amp; <span style={{ color: theme.maroon }}>Custom Menu Pricing</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you require large-scale industrial cafeteria operations, executive hospital dietary management, remote camp mess facilities, or large banquet services, our culinary and nutrition directors are ready to assist.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-rose-50/50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.maroonDark }}>
                <Phone size={16} className="text-[#8B1E2B]" />
                <span>Catering Directorate Hotline:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold text-[#8B1E2B]">
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-rose-200">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.maroonDark }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold text-[#8B1E2B]">
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
                <SectionLabel>Central Kitchens &amp; Commissary Hubs</SectionLabel>
                <SectionHeading className="mb-4">Regional Culinary Centers</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Our central production kitchens operate under strict HACCP guidelines with blast chillers, commercial combi ovens, and insulated reefer delivery vans.
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
                      <h4 className="text-base font-black" style={{ color: theme.maroonDark }}>
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-50 border text-[#8B1E2B]" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-rose-950/80">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#8B1E2B]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0 text-[#8B1E2B]" />
                        <span className="font-bold text-rose-950">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0 text-[#8B1E2B]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0 text-[#8B1E2B]" />
                        <span className="font-semibold text-rose-950">{office.timing}</span>
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
                  <span className="text-xs font-black uppercase tracking-widest block mb-1 text-[#8B1E2B]">
                    INSTITUTIONAL CATERING &amp; CAFETERIA RFP
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.maroonDark }}>
                    Submit Catering Requirements
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-rose-900 mt-1">
                    Receive 4-week rotating seasonal menus, calorie/nutritional breakdowns, and kitchen layout blueprints.
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
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.maroonDark }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Mehmood"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#6B0F24] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.maroonDark }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="tariq@hospital-network.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#6B0F24] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.maroonDark }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0092-300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#6B0F24] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.maroonDark }}>
                        Company / Institution Name
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. National Medical Complex"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#6B0F24] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.maroonDark }}>
                        Institution Type
                      </label>
                      <select
                        value={formData.institutionType}
                        onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#6B0F24] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Corporate Enterprise / Office Headquarters">Corporate Enterprise</option>
                        <option value="Hospital / Healthcare Facility Network">Hospital / Healthcare</option>
                        <option value="University / College Campus">University / College</option>
                        <option value="Industrial / Manufacturing Factory">Industrial / Factory</option>
                        <option value="Remote Site / Construction Camp">Remote Site Camp</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.maroonDark }}>
                        Required Service
                      </label>
                      <select
                        value={formData.servicePackage}
                        onChange={(e) => setFormData({ ...formData, servicePackage: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#6B0F24] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Turnkey Corporate Cafeteria Management">Corporate Cafeteria</option>
                        <option value="Hospital Clinical & Patient Nutrition">Hospital Nutrition</option>
                        <option value="University Campus Dining & Food Court">Campus Dining</option>
                        <option value="Industrial 24/7 Shift Worker Meals">Industrial Shift Meals</option>
                        <option value="Remote Site Camp Full-Board Catering">Remote Camp Catering</option>
                        <option value="Bulk Raw Food Ingredient Supply">Bulk Ingredient Supply</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.maroonDark }}>
                        Daily Meal Volume
                      </label>
                      <select
                        value={formData.volumeScale}
                        onChange={(e) => setFormData({ ...formData, volumeScale: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#6B0F24] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="200 to 500 Meals Daily">200 – 500 Meals/Day</option>
                        <option value="500 to 2,000 Meals Daily">500 – 2,000 Meals/Day</option>
                        <option value="2,000 to 10,000+ Meals Daily">2,000 – 10,000+ Meals/Day</option>
                        <option value="Multi-Campus Mega Network (10,000+ Meals)">Mega Network (10K+)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.maroonDark }}>
                      Catering Specifications &amp; Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify meal types (breakfast/lunch/dinner), dietary preferences, existing on-site kitchen facilities, and target commencement date..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#6B0F24] bg-white"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.maroon }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Transmitting Catering Proposal Request..." : "Submit Catering Proposal Request"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NFSFooter />
    </main>
  );
}
