"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "@/components/animations/ScrollProgress";
import { BiomaxNavbar, BiomaxFooter, COLORS } from "../components/BiomaxShared";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Send,
  Building2,
  ShieldCheck,
  Headphones,
} from "lucide-react";

export default function BiomaxContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    email: "",
    phone: "",
    service: "Laboratory Equipment",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) {
      setError("Please fill in all required fields (Name, Email, Message).");
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/group-companies/biomax/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          company: form.organization,
          email: form.email,
          phone: form.phone,
          service: form.service,
          subject: `BioMax Inquiry: ${form.service}`,
          message: `Service/Category: ${form.service} | Organization: ${form.organization || "N/A"} | Message: ${form.message}`,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send message.");
      }
      setSubmitted(true);
      setForm({
        firstName: "",
        lastName: "",
        organization: "",
        email: "",
        phone: "",
        service: "Laboratory Equipment",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    document.body.classList.add("biomax-theme");
    return () => {
      document.body.classList.remove("biomax-theme");
    };
  }, []);

  return (
    <main className="min-h-screen biomax-theme bg-white" style={{ backgroundColor: COLORS.white, color: COLORS.primary }}>
      <ScrollProgress color={COLORS.accent} />
      <BiomaxNavbar />

      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative py-16 lg:py-24 px-6 overflow-hidden bg-white border-b" style={{ borderColor: COLORS.border }}>
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="/biomax_products_hero_ai.jpg"
            alt="BioMax Laboratory"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="mx-auto max-w-screen-xl relative z-10">
          <div className="max-w-3xl">
            <span
              className="text-[11.5px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-4 border bg-white shadow-sm"
              style={{ color: COLORS.accent, borderColor: COLORS.border }}
            >
              <Sparkles size={14} />
              <span>GET IN TOUCH WITH BIOMAX</span>
            </span>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight mb-4"
              style={{ color: COLORS.primary }}
            >
              Contact BIO MAX Corporation
            </h1>

            <p className="text-[15.5px] sm:text-[17px] leading-relaxed max-w-2xl font-medium" style={{ color: COLORS.muted }}>
              Have questions about our laboratory instruments, diagnostic equipment, or biotechnology reagents? Our technical specialists and customer service team are here to support your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Main Contact Info & Form Section ──────────────────────────────── */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Contact Cards & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] font-black uppercase tracking-widest block mb-1" style={{ color: COLORS.accent }}>
                  OFFICE &amp; SUPPORT
                </span>
                <h2 className="text-2xl font-black" style={{ color: COLORS.primary }}>
                  Get in Touch Directly
                </h2>
                <p className="text-[13.5px] mt-1" style={{ color: COLORS.muted }}>
                  Reach out to us via telephone, WhatsApp, email, or visit our Lahore corporate facility.
                </p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    icon: MapPin,
                    title: "Corporate Facility Location",
                    value: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore, Pakistan.",
                  },
                  {
                    icon: Phone,
                    title: "Telephone Line",
                    value: "0092-42-38924737",
                  },
                  {
                    icon: Phone,
                    title: "Direct WhatsApp Inquiries",
                    value: "0092-304-7527498 | 0092-321-8431665",
                  },
                  {
                    icon: Mail,
                    title: "Official Email Inquiries",
                    value: "info@roysons.org | support@roysons.org",
                  },
                  {
                    icon: Clock,
                    title: "Operational Hours",
                    value: "Monday – Saturday: 9:00 AM – 6:00 PM (PKT)",
                  },
                ].map(({ icon: Icon, title, value }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-4 rounded-xl border bg-white shadow-sm biomax-card-hover cursor-pointer"
                    style={{ borderColor: COLORS.border }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: `${COLORS.primary}15`, color: COLORS.primary }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-[11px] font-black uppercase tracking-wider" style={{ color: COLORS.primary }}>
                        {title}
                      </p>
                      <p className="text-[13px] font-semibold mt-0.5 leading-snug" style={{ color: COLORS.muted }}>
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Interactive Google Map Embed */}
              <div
                className="rounded-2xl border overflow-hidden shadow-md h-64 relative"
                style={{ borderColor: COLORS.border }}
              >
                <iframe
                  title="BioMax Corporation Location"
                  src="https://maps.google.com/maps?q=Lahore%20Ring%20Road%20Rehman%20Centre&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right Column: Contact & Quotation Form */}
            <div
              className="lg:col-span-7 p-8 sm:p-10 rounded-3xl border-2 bg-white shadow-xl"
              style={{ borderColor: COLORS.border }}
            >
              <div className="mb-6">
                <span className="text-[11px] font-black uppercase tracking-widest block mb-1" style={{ color: COLORS.accent }}>
                  ONLINE INQUIRY &amp; QUOTATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.primary }}>
                  Send Us a Message
                </h3>
                <p className="text-[13.5px] mt-1" style={{ color: COLORS.muted }}>
                  Fill in your project requirements below. A dedicated technical specialist will respond promptly.
                </p>
              </div>

              {submitted ? (
                <div
                  className="flex flex-col items-center justify-center gap-4 py-16 px-6 rounded-2xl text-center bg-white border"
                  style={{ borderColor: COLORS.border }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow-md">
                    <CheckCircle2 size={36} style={{ color: COLORS.accent }} />
                  </div>
                  <h4 className="text-xl font-black" style={{ color: COLORS.primary }}>
                    Thank You! Message Sent Successfully.
                  </h4>
                  <p className="text-[13.5px] max-w-md" style={{ color: COLORS.muted }}>
                    Your message has been received by our BioMax technical team. We will review your inquiry and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-7 py-3 rounded-lg text-[13px] font-bold text-white shadow-md hover:opacity-90 transition-opacity cursor-pointer"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {error && (
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
                      {error}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold mb-1.5" style={{ color: COLORS.primary }}>
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Dr. Tariq"
                        className="w-full px-4 py-3 rounded-xl border text-[13px] outline-none transition-all focus:border-[#165B7E]"
                        style={{ borderColor: COLORS.border, color: COLORS.primary }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold mb-1.5" style={{ color: COLORS.primary }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Mahmood"
                        className="w-full px-4 py-3 rounded-xl border text-[13px] outline-none transition-all focus:border-[#165B7E]"
                        style={{ borderColor: COLORS.border, color: COLORS.primary }}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold mb-1.5" style={{ color: COLORS.primary }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tariq@diagnostics.pk"
                        className="w-full px-4 py-3 rounded-xl border text-[13px] outline-none transition-all focus:border-[#165B7E]"
                        style={{ borderColor: COLORS.border, color: COLORS.primary }}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold mb-1.5" style={{ color: COLORS.primary }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-3 rounded-xl border text-[13px] outline-none transition-all focus:border-[#165B7E]"
                        style={{ borderColor: COLORS.border, color: COLORS.primary }}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold mb-1.5" style={{ color: COLORS.primary }}>
                        Organization / Laboratory
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        placeholder="e.g. Central Clinical Labs"
                        className="w-full px-4 py-3 rounded-xl border text-[13px] outline-none transition-all focus:border-[#165B7E]"
                        style={{ borderColor: COLORS.border, color: COLORS.primary }}
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-bold mb-1.5" style={{ color: COLORS.primary }}>
                        Product &amp; Solution Area *
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border text-[13px] outline-none transition-all focus:border-[#165B7E]"
                        style={{ borderColor: COLORS.border, color: COLORS.primary }}
                      >
                        <option value="Laboratory Equipment">Laboratory Equipment (Centrifuges, Incubators, Microscopes)</option>
                        <option value="Diagnostic Equipment">Diagnostic Equipment (Clinical Analyzers, Sample Systems)</option>
                        <option value="Biotechnology Solutions">Biotechnology Solutions (PCR, DNA/RNA, Cell Culture)</option>
                        <option value="Laboratory Consumables">Laboratory Consumables (Plasticware, Glassware, Tips)</option>
                        <option value="Scientific Instruments">Scientific Instruments (Spectrophotometers, HPLC, Balances)</option>
                        <option value="General Corporate Inquiry">General Scientific Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-bold mb-1.5" style={{ color: COLORS.primary }}>
                      Equipment Details &amp; Message *
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please specify instrument models, required volume, technical parameters, or delivery timelines..."
                      className="w-full px-4 py-3 rounded-xl border text-[13px] outline-none transition-all focus:border-[#165B7E] resize-none"
                      style={{ borderColor: COLORS.border, color: COLORS.primary }}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-[14px] font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-70 cursor-pointer shadow-lg"
                    style={{ backgroundColor: COLORS.primary }}
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Quotation Request</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <BiomaxFooter />
    </main>
  );
}
