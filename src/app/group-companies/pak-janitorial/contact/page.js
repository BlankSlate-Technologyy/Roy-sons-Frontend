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
  Hammer,
  Wind,
  Gauge,
  FlaskConical,
  Cpu,
  Microscope,
  LifeBuoy,
  HeartPulse,
  BriefcaseMedical,
  MessageCircle,
  Check,
} from "lucide-react";
import {
  theme,
  PakMedicalNavbar,
  PakMedicalFooter,
  SectionLabel,
  SectionHeading,
} from "../components/PakMedicalShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Hospital Engineering & Clean Rooms)",
    address: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Emergency Hospital Support 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Islamabad Capital Healthcare Operations (Blue Area)",
    address: "Executive Corporate Tower, Jinnah Avenue, Blue Area, Islamabad",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "islamabad.med@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Capital Medical Hub",
  },
  {
    city: "Karachi Regional Coastal Medical Center",
    address: "Financial Trade Center, Shahrah-e-Faisal / Korangi Medical Zone, Karachi",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "karachi.med@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Coastal Medical Desk",
  },
];

export default function PakMedicalContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    sector: "Tertiary Care Teaching Hospital",
    solution: "Modular Operation Theatre Suite (UltraMOT)",
    scale: "2 - 5 Operation Theatres / Suites",
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
          companySlug: "pak-janitorial",
          companyName: "Pakistan Medical Supplies & Cleanroom Engineering",
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Medical Supplies: ${formData.solution} (${formData.sector})`,
          message: formData.message || `Scale: ${formData.scale} in ${formData.city}`,
          additionalFields: {
            organization: formData.organization,
            sector: formData.sector,
            solution: formData.solution,
            scale: formData.scale,
            city: formData.city,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your medical infrastructure inquiry has been registered. Our principal biomedical engineer will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          sector: "Tertiary Care Teaching Hospital",
          solution: "Modular Operation Theatre Suite (UltraMOT)",
          scale: "2 - 5 Operation Theatres / Suites",
          city: "Lahore",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit medical supplies inquiry. Please try again.",
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
    <main className="min-h-screen bg-white text-[#1E2A3A] font-sans antialiased overflow-x-hidden">
      <PakMedicalNavbar />

      {/* ─────────────────────────────────────────────────────────────
          1. EDITORIAL CONTACT HERO
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Hospital Consultation &amp; Scoping</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6 text-[#0A2540]">
                LET&apos;S BUILD BETTER <span className="text-[#1A4FA0]">HEALTHCARE ENVIRONMENTS</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed mb-8">
                Connect with our principal biomedical engineers, cleanroom HVAC specialists, and hospital MEP designers. We support healthcare institutions nationwide from initial architectural zoning to final ISO qualification.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-[#1A4FA0] hover:bg-[#0E3570] shadow-md transition-all cursor-pointer"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight size={16} />
                </a>
                <a
                  href="tel:00924238924737"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border border-slate-300 text-[#0A2540] hover:bg-slate-50 transition-all cursor-pointer"
                >
                  <Phone size={16} className="text-[#1A4FA0]" />
                  <span>0092-42-38924737</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[520px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 group bg-slate-50">
                <Image
                  src="/images/pakmedical/contact_hero.jpg"
                  alt="Modern Hospital Engineering Consultancy Office"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200 shadow-lg w-full">
                    <p className="text-xs font-black uppercase tracking-wider mb-1 text-[#0D7C85]">
                      Direct Technical Consultation
                    </p>
                    <p className="text-sm font-bold text-[#0A2540]">
                      Lahore HQ &bull; Islamabad Blue Area &bull; Karachi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. TECHNICAL SCOPING FORM & CONSULTATION DETAILS
      ───────────────────────────────────────────────────────────── */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-[#F8FAFC]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Context & Visuals */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <SectionLabel>Direct Engineering Inquiry</SectionLabel>
                <SectionHeading>REQUEST A TECHNICAL CONSULTATION</SectionHeading>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 mb-6">
                  Fill out our clinical scoping form. Our medical facility engineers will review your requirements, prepare initial layout sketches, and arrange an on-site or virtual engineering assessment.
                </p>

                <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-6">
                  <Image
                    src="/images/pakmedical/contact_meeting.jpg"
                    alt="Engineers Meeting with Hospital Clients"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-bold text-white">
                      Complimentary Conceptual Feasibility &amp; MEP Review
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                    <ShieldCheck size={20} className="text-[#0D7C85] flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-[#0A2540] uppercase">Non-Disclosure Guaranteed</h4>
                      <p className="text-[11px] text-slate-500">All architectural plans and hospital schematics are kept confidential.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                    <Headphones size={20} className="text-[#1A4FA0] flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-[#0A2540] uppercase">Rapid 24-Hour Engineer Callback</h4>
                      <p className="text-[11px] text-slate-500">Direct coordination with a certified biomedical lead.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1A4FA0]/10 flex items-center justify-center text-[#1A4FA0] flex-shrink-0">
                    <Headphones size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-[#0A2540]">24/7 Critical Hospital Support</p>
                    <p className="text-xs text-slate-600">Oxygen leak or HVAC failure? Call: 0092-321-8431665</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-md">
                <h3 className="text-xl font-black uppercase tracking-tight text-[#0A2540] mb-6">
                  Healthcare Facility Scoping Form
                </h3>

                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl mb-6 text-xs sm:text-sm font-semibold flex items-start gap-2.5 ${
                      submitStatus.type === "success"
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                        : "bg-rose-50 text-rose-800 border border-rose-200"
                    }`}
                  >
                    <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Dr. / Engr. Muhammad Khan"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="engineer@hospital.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0321-8431665"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Hospital / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Teaching Hospital / Pharma Ltd."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Facility Type
                      </label>
                      <select
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors cursor-pointer"
                      >
                        <option>Tertiary Care Teaching Hospital</option>
                        <option>Private Multi-Specialty Surgical Center</option>
                        <option>Pharmaceutical Manufacturing Plant</option>
                        <option>Government / Military Healthcare Unit</option>
                        <option>Biotechnology &amp; Research Lab</option>
                        <option>Diagnostic &amp; Imaging Facility</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Primary Engineering Package
                      </label>
                      <select
                        value={formData.solution}
                        onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors cursor-pointer"
                      >
                        <option>Modular Operation Theatre Suite (UltraMOT)</option>
                        <option>ISO 14644 Clean Room System</option>
                        <option>Medical Gas Pipeline (MGPS) HTM 02-01</option>
                        <option>Hygienic Hospital HVAC &amp; HEPA</option>
                        <option>Complete Turnkey Hospital EPC</option>
                        <option>Central Sterile Supply (CSSD)</option>
                        <option>Annual Maintenance &amp; Validation (AMC)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Scale / Units
                      </label>
                      <select
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors cursor-pointer"
                      >
                        <option>1 - 2 Operation Theatres / Suites</option>
                        <option>2 - 5 Operation Theatres / Suites</option>
                        <option>6+ Operation Theatres (Large Complex)</option>
                        <option>100 - 250 Bed Hospital Network</option>
                        <option>250 - 500+ Bed Hospital Network</option>
                        <option>5,000 - 20,000+ Sq Ft Clean Room</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Lahore / Islamabad / Karachi..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Scope Overview / Special Technical Specifications
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify your project timelines, square footage, cleanroom class (e.g. ISO 7 or GMP Grade B), medical gas outlet counts, or existing civil stage..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:outline-hidden focus:border-[#1A4FA0] bg-slate-50 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-extrabold uppercase tracking-wider text-white bg-[#1A4FA0] hover:bg-[#0E3570] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Engineering Scoping Request</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. REGIONAL OFFICE DESKS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Regional Engineering Desks</SectionLabel>
            <SectionHeading center>OUR NATIONAL OPERATIONAL FOOTPRINT</SectionHeading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OFFICES.map((office) => (
              <div
                key={office.city}
                className="p-7 rounded-2xl border border-slate-200 bg-[#F8FAFC] flex flex-col justify-between shadow-xs hover:shadow-md transition-all"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#0D7C85] mb-2 block">
                    {office.tag}
                  </span>
                  <h4 className="text-base font-black uppercase tracking-tight text-[#0A2540] mb-4">
                    {office.city}
                  </h4>

                  <div className="space-y-3 text-xs text-slate-600 mb-6">
                    <div className="flex items-start gap-2.5">
                      <MapPin size={15} className="text-[#1A4FA0] flex-shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone size={15} className="text-[#1A4FA0] flex-shrink-0" />
                      <a href={`tel:${office.phone.split(" / ")[0]}`} className="font-bold text-[#0A2540] hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MessageCircle size={15} className="text-[#0D7C85] flex-shrink-0" />
                      <span>WhatsApp: {office.whatsapp}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Mail size={15} className="text-[#1A4FA0] flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="hover:underline">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Clock size={15} className="text-[#0D7C85] flex-shrink-0" />
                      <span>{office.timing}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${office.phone.split(" / ")[0]}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-[#0A2540] hover:bg-white transition-colors"
                >
                  <Phone size={14} />
                  <span>Call Desk Directly</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PakMedicalFooter />
    </main>
  );
}
