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
  Users,
  Users2,
  UserSearch,
  Globe2,
  FileCheck,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  NeomRecruitmentNavbar,
  NeomRecruitmentFooter,
  SectionLabel,
  SectionHeading,
} from "../components/NeomRecruitmentShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Global Talent & Executive Search Hub)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 8:30 AM – 6:00 PM (Global Talent Hotline 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Islamabad Overseas Employment & Embassy Liaison Desk",
    address: "Sector F-7/2, Commercial Blue Area, Islamabad",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "islamabad.recruitment@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Embassy Liaison",
  },
  {
    city: "Karachi Corporate & Maritime Recruitment Desk",
    address: "Clifton Block 5, Marine Financial Promenade, Karachi",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "karachi.talent@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Corporate Bureau",
  },
];

export default function NeomRecruitmentContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    userType: "Employer Seeking Talent",
    sector: "Construction & Engineering",
    serviceDivision: "Executive Search & C-Suite Headhunting",
    headcount: "10 to 50 Technical Specialists",
    destination: "Saudi Arabia (NEOM / Riyadh)",
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
          companySlug: "Neom-city-recruitment",
          companyName: "Neom City Recruitment Consultants",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Talent Request: ${formData.serviceDivision} (${formData.sector})`,
          message: formData.message || `Scope: ${formData.headcount} for ${formData.destination} (${formData.userType})`,
          additionalFields: {
            organization: formData.organization,
            userType: formData.userType,
            sector: formData.sector,
            serviceDivision: formData.serviceDivision,
            headcount: formData.headcount,
            destination: formData.destination,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your recruitment request has been registered. Our talent acquisition team will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          userType: "Employer Seeking Talent",
          sector: "Construction & Engineering",
          serviceDivision: "Executive Search & C-Suite Headhunting",
          headcount: "10 to 50 Technical Specialists",
          destination: "Saudi Arabia (NEOM / Riyadh)",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit recruitment request. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again or contact our talent desk.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#475569] font-sans antialiased overflow-x-hidden">
      <NeomRecruitmentNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Global Talent &amp; Executive Search Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navyDark }}>
              Request Talent Acquisition &amp; <span style={{ color: theme.blue }}>Workforce Scoping</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you are an enterprise employer seeking C-suite leaders, a giga-project contractor mobilizing thousands of technical specialists to Saudi Arabia/GCC, or a professional submitting credentials, our recruitment desk is ready to assist.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-sky-50/50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.navyDark }}>
                <Phone size={16} className="text-[#0072CE]" />
                <span>Talent Acquisition Line:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold text-[#0072CE]">
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-slate-300">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.navyDark }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold text-[#0072CE]">
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
                <SectionLabel>Global Talent Hubs &amp; Desks</SectionLabel>
                <SectionHeading className="mb-4">Regional Recruitment Bureaus</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Our recruitment hubs house modern technical interview suites, trade testing workshops, biometric verification terminals, and embassy visa processing channels.
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
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-50/60 border text-[#0072CE]" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#0072CE]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0 text-[#0072CE]" />
                        <span className="font-bold text-slate-800">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0 text-[#0072CE]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0 text-[#0072CE]" />
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
                  <span className="text-xs font-black uppercase tracking-widest block mb-1 text-[#0072CE]">
                    TALENT ACQUISITION &amp; RECRUITMENT INQUIRY
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.navyDark }}>
                    Submit Workforce Requirements
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Receive customized candidate salary benchmarks, trade testing protocols, and mobilization schedules.
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
                        placeholder="e.g. Engr. Hamza Malik"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="hr@infrastructure-contractor.com"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] bg-white"
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
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Company / Organization Name
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Malik Engineering & Construction JV"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Inquiring As
                      </label>
                      <select
                        value={formData.userType}
                        onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Employer Seeking Talent">Employer / Corporate</option>
                        <option value="Candidate Submitting CV">Candidate Profile</option>
                        <option value="International Agency Partner">Agency Partner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Target Sector
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Construction & Engineering">Construction &amp; Civil</option>
                        <option value="Healthcare & Medical">Healthcare &amp; Hospital</option>
                        <option value="Information Technology">IT, AI &amp; Cloud</option>
                        <option value="Oil & Gas">Oil, Gas &amp; Energy</option>
                        <option value="Hospitality & Tourism">Luxury Hospitality</option>
                        <option value="Manufacturing">Manufacturing / FMCG</option>
                        <option value="Logistics & Aviation">Aviation &amp; Supply Chain</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Required Service
                      </label>
                      <select
                        value={formData.serviceDivision}
                        onChange={(e) => setFormData({ ...formData, serviceDivision: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Executive Search & C-Suite Headhunting">Executive Search</option>
                        <option value="Overseas Workforce Deployment">Overseas Deployment</option>
                        <option value="Enterprise Talent Acquisition">Talent Acquisition</option>
                        <option value="Strategic HR Advisory">HR Consultancy</option>
                        <option value="Contractual Staffing">Contract Staffing</option>
                        <option value="Payroll Processing & Outsourcing">Payroll Outsourcing</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Required Headcount / Roles
                      </label>
                      <select
                        value={formData.headcount}
                        onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="1 to 5 Executive Roles">1 – 5 Executive Roles</option>
                        <option value="10 to 50 Technical Specialists">10 – 50 Specialists</option>
                        <option value="50 to 500+ Mass Mobilization">50 – 500+ Mass Hiring</option>
                        <option value="500+ Mega-Project Contingent">500+ Mega-Contingent</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                        Deployment Location
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Saudi Arabia (NEOM / Riyadh)">Saudi Arabia (NEOM/KSA)</option>
                        <option value="UAE / Qatar / Gulf">UAE / Qatar / GCC</option>
                        <option value="Pakistan Domestic">Pakistan (Domestic)</option>
                        <option value="UK / Europe / Global">UK / Europe / Global</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navyDark }}>
                      Role Descriptions, Qualifications &amp; Mobilization Timeline
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please detail required job titles, experience level, educational certifications, compensation range, and target deployment timeline..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0072CE] bg-white"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.blue }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Transmitting Talent Request..." : "Submit Talent Acquisition & Recruitment Inquiry"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NeomRecruitmentFooter />
    </main>
  );
}
