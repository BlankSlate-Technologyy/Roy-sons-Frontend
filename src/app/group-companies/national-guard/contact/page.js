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
  Calculator,
  UserCheck,
  Camera,
  Award,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  NationalGuardNavbar,
  NationalGuardFooter,
  SectionLabel,
  SectionHeading,
} from "../components/NationalGuardShared";

const OFFICES = [
  {
    city: "Lahore (Principal Headquarters)",
    address: "23-C, Commercial Zone, Phase 1, DHA, Lahore, Punjab, Pakistan",
    phone: "+92 321 8431665 / +92 42 35741234",
    email: "lahore@nationalguard.com.pk",
    timing: "24/7 Operations Command & Control",
    tag: "Head Office",
  },
  {
    city: "Islamabad / Rawalpindi Regional Center",
    address: "Plot 14-B, Executive Sector, Blue Area, Islamabad, Pakistan",
    phone: "+92 321 8431665 / +92 51 2805678",
    email: "isb@nationalguard.com.pk",
    timing: "Mon - Sat: 9:00 AM - 6:00 PM (Operations 24/7)",
    tag: "Regional Center",
  },
  {
    city: "Karachi Southern Regional Command",
    address: "Suite 402, Business Center, Shahrah-e-Faisal, Karachi, Sindh",
    phone: "+92 321 8431665 / +92 21 34567890",
    email: "karachi@nationalguard.com.pk",
    timing: "Mon - Sat: 9:00 AM - 6:00 PM (Operations 24/7)",
    tag: "Regional Center",
  },
];

export default function NationalGuardContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    facilityType: "Corporate Office",
    guardType: "Armed Ex-Military Guard",
    guardCount: "2 Guards",
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
          companySlug: "national-guard",
          companyName: "National Guard Security Services",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Security Deployment: ${formData.guardType} (${formData.guardCount})`,
          message: formData.message || `Facility: ${formData.facilityType} in ${formData.city}`,
          additionalFields: {
            company: formData.company,
            facilityType: formData.facilityType,
            guardType: formData.guardType,
            guardCount: formData.guardCount,
            city: formData.city,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your security quotation request has been registered. Our Chief Operations Officer will contact you within 2 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          facilityType: "Corporate Office",
          guardType: "Armed Ex-Military Guard",
          guardCount: "2 Guards",
          city: "Lahore",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit security request. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected network error occurred. Please try again or call our 24/7 control room.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#1B365D] font-sans antialiased overflow-x-hidden">
      <NationalGuardNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Contact &amp; Procurement Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
              Connect With Our <span style={{ color: theme.gold }}>Security Command</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you require rapid 24-hour guard mobilization, a confidential on-site vulnerability audit, or corporate protection quotation, our officers are ready to assist.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-slate-50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.navy }}>
                <Phone size={16} style={{ color: theme.gold }} />
                <span>24/7 Security Control:</span>
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
                <SectionLabel>Command Infrastructure</SectionLabel>
                <SectionHeading className="mb-4">Regional Operations Hubs</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Our corporate headquarters in Lahore operates 24/7 alongside regional dispatch centers in Karachi and Islamabad with rapid response units (QRF).
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
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-50 border" style={{ color: theme.gold, borderColor: theme.border }}>
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
                    DEPLOYMENT INQUIRY
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.navy }}>
                    Request Security Quotation
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Receive a customized security proposal with guard profiles and pricing within 2 hours.
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
                        placeholder="e.g. Major (R) Tariq / Director"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
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
                        placeholder="director@company.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Phone / Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Enterprise / Housing Society"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Facility Type
                      </label>
                      <select
                        value={formData.facilityType}
                        onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Corporate Office">Corporate Office</option>
                        <option value="Factory / Industrial">Factory / Industrial</option>
                        <option value="Residential Society">Residential Society</option>
                        <option value="Shopping Mall">Shopping Mall</option>
                        <option value="Hospital / Healthcare">Hospital / Clinic</option>
                        <option value="Bank / Financial">Bank Branch</option>
                        <option value="Educational Campus">School / University</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Guard Category
                      </label>
                      <select
                        value={formData.guardType}
                        onChange={(e) => setFormData({ ...formData, guardType: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Armed Ex-Military Guard">Armed (Ex-Army)</option>
                        <option value="Unarmed Civilian Guard">Unarmed Guard</option>
                        <option value="Mobile Patrol Squad">Mobile Patrol Unit</option>
                        <option value="Female Security Guard">Female Searcher</option>
                        <option value="VIP Escort Bodyguard">VIP Close Protection</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Guards Required
                      </label>
                      <select
                        value={formData.guardCount}
                        onChange={(e) => setFormData({ ...formData, guardCount: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="1-2 Guards">1 – 2 Guards</option>
                        <option value="3-5 Guards">3 – 5 Guards</option>
                        <option value="6-10 Guards">6 – 10 Guards</option>
                        <option value="10+ Guards">10+ Guards (Large Site)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                      Specific Site Requirements / Remarks
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify site location, shift requirements (12h/24h), weapon specifications, or deployment date..."
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
                    <span>{isSubmitting ? "Submitting Security Request..." : "Submit Quotation Request"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NationalGuardFooter />
    </main>
  );
}
