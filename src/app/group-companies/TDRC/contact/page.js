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
  Leaf,
  FileSearch,
  Sprout,
  Scale,
  Users2,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  TDRCNavbar,
  TDRCFooter,
  SectionLabel,
  SectionHeading,
} from "../components/TDRCShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Principal Research Secretariat & GIS Lab)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Field Research Stations Active 24/7)",
    tag: "Principal Secretariat",
  },
  {
    city: "Bhakkar Arid Zone Research Sub-Station & Demonstration Farm",
    address: "Chak 45/TDA, Main Darya Khan Road, District Bhakkar, Punjab",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "bhakkar.station@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 5:00 PM",
    tag: "Field Demonstration Farm",
  },
  {
    city: "Layyah Community Livelihoods & Agro-Processing Hub",
    address: "Civil Lines, Near Agriculture Complex, Layyah, South Punjab",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "layyah.hub@roysons.org",
    timing: "Mon – Sat: 8:30 AM – 5:00 PM",
    tag: "Community Field Hub",
  },
];

export default function TDRCContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    sector: "Government Ministry / Public Authority",
    service: "Environmental Impact Assessment (EIA & IEE)",
    region: "Punjab (Thal / Central / South)",
    timeline: "Immediate (1 - 3 Months)",
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
          companySlug: "TDRC",
          companyName: "Thal Development & Research Corporation",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Research ToR: ${formData.service} (${formData.sector})`,
          message: formData.message || `Region: ${formData.region}, Timeline: ${formData.timeline}`,
          additionalFields: {
            organization: formData.organization,
            sector: formData.sector,
            service: formData.service,
            region: formData.region,
            timeline: formData.timeline,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your research inquiry has been registered. Our scientific directorate will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          sector: "Government Ministry / Public Authority",
          service: "Environmental Impact Assessment (EIA & IEE)",
          region: "Punjab (Thal / Central / South)",
          timeline: "Immediate (1 - 3 Months)",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit research inquiry. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected network error occurred. Please try again or call our research desk.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#0E1F17] font-sans antialiased overflow-x-hidden">
      <TDRCNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Scientific Secretariat &amp; Advisory Desk</SectionLabel>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.ink }}>
              Commission Research &amp; <span style={{ color: theme.primaryDark }}>Consult Our Scientists</span>
            </h1>

            <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
              Whether you are preparing a multi-basin environmental impact assessment, planning arid irrigation infrastructure, or commissioning socio-economic baseline surveys, our senior scientists are ready to assist.
            </p>

            <div className="inline-flex flex-wrap items-center justify-center gap-4 p-4 rounded-2xl border bg-emerald-50/50 shadow-xs" style={{ borderColor: theme.border }}>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.ink }}>
                <Phone size={16} className="text-[#0E5B37]" />
                <span>Research Hotline:</span>
                <a href="tel:00924238924737" className="hover:underline text-sm font-extrabold text-[#0E5B37]">
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-emerald-200">|</span>
              <div className="flex items-center gap-2 text-xs font-bold" style={{ color: theme.ink }}>
                <MessageCircle size={16} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-extrabold text-[#0E5B37]">
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
                <SectionLabel>Scientific Centers &amp; Laboratories</SectionLabel>
                <SectionHeading className="mb-4">Regional Research Desks</SectionHeading>
                <p className="text-sm sm:text-base font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                  Our research scientists maintain certified analytical testing laboratories, GIS satellite telemetry suites, and field stations across Pakistan's key agro-ecological zones.
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
                      <h4 className="text-base font-black" style={{ color: theme.ink }}>
                        {office.city}
                      </h4>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 border text-[#0E5B37]" style={{ borderColor: theme.border }}>
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-medium text-emerald-950/80">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={15} className="flex-shrink-0 mt-0.5 text-[#0E5B37]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={15} className="flex-shrink-0 text-[#0E5B37]" />
                        <span className="font-bold text-emerald-950">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={15} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={15} className="flex-shrink-0 text-[#0E5B37]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={15} className="flex-shrink-0 text-[#0E5B37]" />
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
                  <span className="text-xs font-black uppercase tracking-widest block mb-1 text-[#0E5B37]">
                    SCIENTIFIC CONSULTATION &amp; STUDY INQUIRY
                  </span>
                  <h3 className="text-2xl font-black uppercase" style={{ color: theme.ink }}>
                    Commission Research Study / Request ToR
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Receive complete methodology frameworks, surveying milestones, and institutional fee schedules.
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
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.ink }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Dr. Asim Qureshi"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9E54] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.ink }}>
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="asim@development.org"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9E54] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.ink }}>
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0092-300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9E54] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.ink }}>
                        Organization / University / Donor Name
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Provincial Environmental Protection Agency"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9E54] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.ink }}>
                        Organization Type
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9E54] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Government Ministry / Public Authority">Government / Ministry</option>
                        <option value="International Donor (UN / WB / ADB)">International Donor</option>
                        <option value="University / Academic Institution">Academic University</option>
                        <option value="Private Infrastructure Developer">Private Developer</option>
                        <option value="Non-Governmental Organization (NGO)">NGO / Development Trust</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.ink }}>
                        Research Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9E54] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Environmental Impact Assessment (EIA & IEE)">EIA &amp; IEE Studies</option>
                        <option value="Applied Ecological & Botanical Research">Applied Ecology &amp; Soil</option>
                        <option value="Climate Adaptation & Desert Greening">Climate &amp; Afforestation</option>
                        <option value="Hydrological Aquifer Telemetry & MAR">Hydrology &amp; Aquifers</option>
                        <option value="Evidence-Based Policy Research">Policy &amp; Governance</option>
                        <option value="GIS Mapping & Drone Surveys">GIS &amp; Remote Sensing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.ink }}>
                        Target Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3 py-3 rounded-xl border text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9E54] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Immediate (1 - 3 Months)">Immediate (1 – 3 Months)</option>
                        <option value="Medium-Term (3 - 6 Months)">Medium-Term (3 – 6 Months)</option>
                        <option value="Long-Term Program (1+ Year)">Multi-Year Program</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.ink }}>
                      Project Scope &amp; Research Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please outline study objectives, field geographical boundaries, sample size, statutory EPA requirements..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#2E9E54] bg-white"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.primaryDark }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Transmitting Research Proposal Request..." : "Submit Research Proposal Request"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TDRCFooter />
    </main>
  );
}
