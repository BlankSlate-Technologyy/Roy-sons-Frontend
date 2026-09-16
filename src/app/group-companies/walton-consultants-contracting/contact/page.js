"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  ShieldCheck,
  CheckCircle2,
  HardHat,
  Compass,
  ArrowRight,
} from "lucide-react";
import {
  theme,
  WaltonNavbar,
  WaltonFooter,
  SectionLabel,
  SectionHeading,
} from "../components/WaltonShared";

export default function WaltonContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "Engineering Consultancy",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate brief network submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#2C3E50] font-sans antialiased overflow-x-hidden">
      <WaltonNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. CONTACT HERO: MODERN ENGINEERING CONSULTANCY OFFICE
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <SectionLabel>Direct Engineering Engagement</SectionLabel>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black tracking-tight leading-[1.15] uppercase mb-4 text-[#0A1E34]">
                LET&apos;S BUILD WHAT&apos;S NEXT
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                Have an infrastructure, engineering or development challenge? Our team can help turn complex requirements into practical, scalable solutions.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Licensed PEC Category C-A (No Limit) Constructor</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Direct consultation with Principal Structural Engineers</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <CheckCircle2 size={16} className="text-[#C5A059]" />
                  <span>Strict non-disclosure agreement (NDA) guaranteed on all blueprints</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="tel:00924238924737"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md hover:brightness-110 transition-all"
                  style={{ backgroundColor: theme.navy }}
                >
                  <Phone size={15} />
                  <span>Call +92 42 3892-4737</span>
                </a>
              </div>
            </div>

            {/* Right: CONTACT HERO IMAGE */}
            <div className="lg:col-span-6">
              <div className="relative w-full h-[340px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <Image
                  src="/images/walton/contact_hero.jpg"
                  alt="Modern Engineering Consultancy Office Meeting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E34]/85 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-md w-full">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#C5A059]">
                        Corporate Headquarters
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-xs sm:text-sm font-bold text-[#0A1E34]">
                      Engineering Consultation Boardroom &middot; Lahore, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN CONTACT SECTION: FORM & CORPORATE DETAILS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F7FA] border-b border-slate-200">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Engage Chief Engineer</SectionLabel>
            <SectionHeading center className="mb-3">
              Let&apos;s Build Something That Matters
            </SectionHeading>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Submit your project specifications or arrange a formal technical review with our consulting team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left 5 Columns: Corporate Office Details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Address Card */}
              <div className="walton-card-lift p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0E2A47]/10 flex items-center justify-center text-[#0E2A47] shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A1E34] mb-1">
                      Head Office
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Walton Corporate Complex, Rehman Centre 2, DHA Phase 5, Ring Road Service Lane, Lahore, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone & Direct Desk */}
              <div className="walton-card-lift p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0E2A47]/10 flex items-center justify-center text-[#0E2A47] shrink-0 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A1E34] mb-1">
                      Telephone
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal">
                      Office:{" "}
                      <a href="tel:00924238924737" className="font-bold text-[#0E2A47] hover:underline">
                        +92 (42) 3892-4737
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">
                      Direct Mobile:{" "}
                      <a href="tel:+923001234567" className="font-bold text-[#0E2A47] hover:underline">
                        +92 (300) 123-4567
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Address */}
              <div className="walton-card-lift p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0E2A47]/10 flex items-center justify-center text-[#0E2A47] shrink-0 mt-0.5">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A1E34] mb-1">
                      Electronic Mail
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal">
                      General Inquiries:{" "}
                      <a href="mailto:info@waltonconsultants.com" className="font-bold text-[#0E2A47] hover:underline">
                        info@waltonconsultants.com
                      </a>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">
                      Engineering Tenders:{" "}
                      <a href="mailto:tenders@waltonconsultants.com" className="font-bold text-[#0E2A47] hover:underline">
                        tenders@waltonconsultants.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="walton-card-lift p-6 rounded-2xl border border-slate-200 bg-white shadow-xs">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0E2A47]/10 flex items-center justify-center text-[#0E2A47] shrink-0 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#0A1E34] mb-1">
                      Business Hours
                    </h4>
                    <p className="text-xs text-slate-600 font-normal">
                      Monday &ndash; Friday: <span className="font-bold text-slate-800">08:30 AM &ndash; 06:00 PM</span>
                    </p>
                    <p className="text-xs text-slate-600 font-normal mt-0.5">
                      Saturday: <span className="font-bold text-slate-800">09:00 AM &ndash; 02:00 PM</span>
                    </p>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">
                      Sunday: Closed (Emergency field teams on call 24/7)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Clean, Premium Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl border border-slate-200 bg-white shadow-md">
                <h3 className="text-xl font-black text-[#0A1E34] uppercase tracking-tight mb-2">
                  Project Consultation &amp; RFP Form
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 font-normal">
                  Complete the fields below to connect directly with our engineering estimating desk.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={28} />
                    </div>
                    <h4 className="text-lg font-black text-emerald-900 mb-2">
                      Inquiry Successfully Received
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Thank you. Our Chief Estimating Engineer and technical director will review your specifications and contact you within one business day.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Engr. Tariq Mahmood"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A1E34] focus:outline-hidden focus:border-[#C5A059] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A1E34] focus:outline-hidden focus:border-[#C5A059] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+92 300 0000000"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A1E34] focus:outline-hidden focus:border-[#C5A059] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Organization / Department
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="Ministry / Enterprise name"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A1E34] focus:outline-hidden focus:border-[#C5A059] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Primary Service Required
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A1E34] bg-white focus:outline-hidden focus:border-[#C5A059] transition-colors cursor-pointer"
                        >
                          <option>Engineering Consultancy</option>
                          <option>Project Management</option>
                          <option>Construction Management</option>
                          <option>Infrastructure Development</option>
                          <option>Architecture &amp; Planning</option>
                          <option>Feasibility &amp; Technical Studies</option>
                          <option>Quantity Surveying</option>
                          <option>Procurement &amp; Contract Management</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Estimated Budget (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          placeholder="e.g. PKR 500M+"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A1E34] focus:outline-hidden focus:border-[#C5A059] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Scope &amp; Requirements *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe project location, estimated timeline, structural requirements, and any existing geotechnical or CAD drawings..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-[#0A1E34] focus:outline-hidden focus:border-[#C5A059] transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 transition-all shadow-md hover:brightness-110 active:scale-98 cursor-pointer"
                      style={{ backgroundColor: theme.navy }}
                    >
                      {submitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Submit Engineering Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. LOCATION MAP SECTION
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="rounded-3xl border border-slate-200 p-8 lg:p-10 bg-[#F4F7FA] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <SectionLabel>Geographic Coverage</SectionLabel>
              <h3 className="text-xl sm:text-2xl font-black text-[#0A1E34] uppercase tracking-tight mb-3">
                Strategic Infrastructure Presence
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                Headquartered along Lahore&apos;s prime Ring Road corridor with field operating bases across Punjab, Khyber Pakhtunkhwa, Sindh, and federal infrastructure territories.
              </p>

              <div className="space-y-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Central Corporate Office: DHA Phase 5, Lahore</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Northern Infrastructure Field Base: Rawalpindi / Islamabad</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span>Industrial Corridor Site Offices: Faisalabad M-3 &amp; Sundar</span>
                </div>
              </div>
            </div>

            {/* Stylized Map Card */}
            <div className="lg:col-span-7">
              <div className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white flex flex-col justify-between p-6">
                {/* Background Map Visual */}
                <div className="absolute inset-0 opacity-15">
                  <Image
                    src="/images/walton/service_04_infrastructure.jpg"
                    alt="Map Location"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative z-10 flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-[#0E2A47] text-white">
                    <MapPin size={24} className="text-[#C5A059]" />
                  </div>
                  <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-[#0E2A47]/10 text-[#0E2A47]">
                    Headquarters
                  </span>
                </div>

                <div className="relative z-10 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200">
                  <h4 className="text-sm font-bold text-[#0A1E34]">
                    Walton Consultants &amp; Contracting
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Rehman Centre 2, DHA Phase 5, Ring Road Service Lane, Lahore, Pakistan
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0E2A47]">+92 42 3892-4737</span>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-wider text-[#C5A059] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Open in Maps</span>
                      <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaltonFooter />
    </main>
  );
}
