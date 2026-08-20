"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollProgress from "@/components/animations/ScrollProgress";
import Counter from "@/components/animations/Counter";
import { VetvacNavbar, VetvacFooter, HeroPrimaryButton, HeroOutlineButton } from "../components/VetvacShared";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Syringe,
  Handshake,
  Headphones,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

// ─── Design Tokens ──────────────────────────────────────────────────────────
const COLORS = {
  primary: "#094C80",       // Primary Blue: Shield, headings, buttons
  primaryDk: "#0B2745",     // Dark Navy: Logo text, main text
  ink: "#0B2745",           // Dark Navy: Logo text, main text
  green: "#1E855C",         // Green: Paw/health accent
  white: "#FFFFFF",         // White: Background, text on blue
  lightBg: "#EAF3F8",       // Light Blue: Section backgrounds
  lightGreen: "#EAF6F0",    // Light Green: Health/feature backgrounds
  muted: "#4B6178",         // Muted secondary text
  border: "#D0E2EE",        // Soft border matching palette
  borderGreen: "#CBE8D9",   // Soft border for green cards
  footerBg: "#071B30",      // Deep rich navy for footer
};

const INQUIRY_CATEGORIES = [
  {
    title: "Product Inquiries",
    desc: "Learn more about our veterinary vaccines, biological products, and healthcare solutions.",
    icon: Syringe,
  },
  {
    title: "Business Partnerships",
    desc: "Explore distribution, collaboration, and business opportunities.",
    icon: Handshake,
  },
  {
    title: "Technical Support",
    desc: "Connect with our team regarding product and animal-health requirements.",
    icon: Headphones,
  },
  {
    title: "General Inquiries",
    desc: "For general information about VET VAC PHARMA and our solutions.",
    icon: Mail,
  },
];

const STATS = [
  { icon: Headphones, value: "24/7", label: "Consultation Support" },
  { icon: ShieldCheck, value: "100%", label: "Professional Response" },
  { icon: Handshake, value: "500+", label: "Farms & Clinics Connected" },
  { icon: Clock, value: "24h", label: "Average Response Time" },
];

export default function ContactPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    document.body.classList.add("vetvac-pharma-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
      document.body.classList.remove("vetvac-pharma-theme");
    };
  }, []);

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    requirement: "Product Inquiries",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/group-companies/Vetvacpharma/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName,
          company: form.company,
          email: form.email,
          phone: form.phone,
          requirement: form.requirement,
          subject: form.requirement,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit message.");
      }
      setStatus("sent");
      setForm({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        requirement: "Product Inquiries",
        message: "",
      });
    } catch (err) {
      alert(err.message || "Failed to send message.");
      setStatus(null);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "11px 14px",
    fontSize: 13.5,
    border: `1.5px solid ${COLORS.border}`,
    borderRadius: 8,
    outline: "none",
    color: COLORS.green,
    backgroundColor: COLORS.white,
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.white, color: COLORS.green }}>
      <ScrollProgress color={COLORS.primary} />

      <VetvacNavbar />

      {/* Hero Header */}
      <section
        className="py-20 px-6 border-b"
        style={{ backgroundColor: COLORS.white, borderColor: COLORS.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-3xl">
            <span
              className="text-[11.5px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 border bg-white shadow-sm"
              style={{ color: COLORS.green, borderColor: COLORS.border }}
            >
              <Phone size={13} />
              <span>06 — Contact Us</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 leading-tight" style={{ color: COLORS.green }}>
              Contact VET VAC PHARMA
            </h1>
            <p className="text-[18px] font-bold mb-3" style={{ color: COLORS.green }}>
              Let&apos;s Work Together for Better Animal Health
            </p>
            <p className="text-[15.5px] leading-relaxed mb-6" style={{ color: COLORS.green }}>
              Whether you are a veterinarian, farmer, distributor, agricultural organization, or animal-health professional, our team is ready to discuss your requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <HeroPrimaryButton href="#form">
                <span>Send An Inquiry</span>
                <ArrowRight size={15} />
              </HeroPrimaryButton>
              <HeroOutlineButton href="/group-companies/Vetvacpharma/solutions">
                <span>Explore Healthcare Solutions</span>
              </HeroOutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Counter Stats */}
      <section className="py-10 px-6 border-b bg-white" style={{ borderColor: COLORS.border }}>
        <div className="mx-auto max-w-screen-xl grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map(({ icon: Icon, value, label }, idx) => (
            <div
              key={label}
              className="p-4 rounded-xl border text-center"
              style={{
                backgroundColor: idx % 2 === 0 ? COLORS.lightBg : COLORS.lightGreen,
                borderColor: idx % 2 === 0 ? COLORS.border : COLORS.borderGreen,
              }}
            >
              <Icon size={24} className="mx-auto mb-2" style={{ color: idx % 2 === 0 ? COLORS.primary : COLORS.green }} />
              <div className="text-2xl font-black mb-1" style={{ color: idx % 2 === 0 ? COLORS.primary : COLORS.green }}>
                <Counter value={value} duration={2} />
              </div>
              <p className="text-[12px] font-bold" style={{ color: COLORS.green }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Inquiry Channels */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl space-y-16">
          <div>
            <div className="mb-6">
              <span
                className="text-[11.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-1 border"
                style={{ backgroundColor: COLORS.white, color: COLORS.green, borderColor: COLORS.border }}
              >
                SPECIALIZED CHANNELS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black" style={{ color: COLORS.green }}>
                Get in Touch
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {INQUIRY_CATEGORIES.map(({ title, desc, icon: Icon }) => {
                const isSelected = form.requirement === title;
                return (
                  <div
                    key={title}
                    onClick={() => setForm((prev) => ({ ...prev, requirement: title }))}
                    className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-md cursor-pointer flex flex-col justify-between"
                    style={{
                      backgroundColor: isSelected ? COLORS.lightBg : COLORS.white,
                      borderColor: isSelected ? COLORS.primary : COLORS.border,
                    }}
                  >
                    <div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{
                          backgroundColor: isSelected ? COLORS.primary : COLORS.lightGreen,
                          color: isSelected ? COLORS.white : COLORS.green,
                        }}
                      >
                        <Icon size={24} />
                      </div>
                      <h3 className="text-[16px] font-black mb-2" style={{ color: COLORS.green }}>
                        {title}
                      </h3>
                      <p className="text-[13px] leading-relaxed" style={{ color: COLORS.green }}>
                        {desc}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t text-[12px] font-bold flex items-center gap-1" style={{ borderColor: COLORS.border, color: COLORS.green }}>
                      <span>{isSelected ? "Selected Category ✓" : "Select Channel →"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form & Office Info with AI Image */}
          <div
            id="form"
            className="rounded-2xl border overflow-hidden shadow-sm"
            style={{ borderColor: COLORS.border }}
          >
            <div className="grid lg:grid-cols-12">
              {/* Left Info */}
              <div
                className="lg:col-span-5 p-8 sm:p-12 text-white flex flex-col justify-between"
                style={{ backgroundColor: COLORS.primary }}
              >
                <div>
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#EAF3F8] block mb-2">
                    RELIABLE SUPPORT
                  </span>
                  <h3 className="text-2xl font-black mb-3 leading-snug">
                    Let&apos;s Work Together
                  </h3>
                  <p className="text-[13.5px] text-white/85 leading-relaxed mb-6">
                    Have questions about our products or services? Our team is ready to help you find the right veterinary solutions.
                  </p>

                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6 border border-white/20">
                    <Image
                      src="/vetvac_contact_ai.jpg"
                      alt="Customer Support & Consultation"
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        icon: MapPin,
                        label: "Our Office",
                        value: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
                      },
                      { icon: Phone, label: "Call Us", value: "0092-42-38924737" },
                      { icon: Phone, label: "WhatsApp", value: "0092-304-7527498 | 0092-321-8431665" },
                      {
                        icon: Mail,
                        label: "Email Us",
                        value: "info@roysons.org | support@roysons.org",
                      },
                    ].map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                        >
                          <Icon size={15} color="white" />
                        </div>
                        <div>
                          <p className="text-[10.5px] font-bold uppercase tracking-wide text-white/70">
                            {label}
                          </p>
                          <p className="text-[12.5px] text-white font-medium leading-snug">
                            {value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/20 flex gap-3">
                  {[Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 transition-colors"
                    >
                      <Icon size={14} color="white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Form */}
              <div className="lg:col-span-7 p-8 sm:p-12 bg-white">
                <span className="text-[11px] font-black uppercase tracking-widest block mb-1" style={{ color: COLORS.green }}>
                  DIRECT INQUIRY
                </span>
                <h3 className="text-2xl font-black mb-6" style={{ color: COLORS.green }}>
                  Contact Form
                </h3>

                {status === "sent" ? (
                  <div
                    className="flex flex-col items-center justify-center gap-4 py-16 px-6 rounded-xl text-center"
                    style={{ backgroundColor: COLORS.lightGreen }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-sm"
                    >
                      <CheckCircle2 size={32} style={{ color: COLORS.green }} />
                    </div>
                    <p className="text-[16px] font-black" style={{ color: COLORS.green }}>
                      Inquiry Submitted Successfully!
                    </p>
                    <p className="text-[13px]" style={{ color: COLORS.green }}>
                      Our veterinary specialist will get back to you promptly.
                    </p>
                    <button
                      onClick={() => setStatus(null)}
                      className="mt-2 px-6 py-2.5 rounded-lg text-[13px] font-bold text-white transition-all duration-300 hover:opacity-90 cursor-pointer"
                      style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[12px] font-bold block mb-1.5" style={{ color: COLORS.green }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Dr. John Smith / Farm Manager"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label className="text-[12px] font-bold block mb-1.5" style={{ color: COLORS.green }}>
                          Company / Farm / Clinic
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Green Valley Dairy Farms"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[12px] font-bold block mb-1.5" style={{ color: COLORS.green }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="doctor@farm.com"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label className="text-[12px] font-bold block mb-1.5" style={{ color: COLORS.green }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+92 300 1234567"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[12px] font-bold block mb-1.5" style={{ color: COLORS.green }}>
                        Inquiry Category
                      </label>
                      <select
                        name="requirement"
                        value={form.requirement}
                        onChange={handleChange}
                        style={{ ...inputStyle, cursor: "pointer" }}
                      >
                        {INQUIRY_CATEGORIES.map((c) => (
                          <option key={c.title} value={c.title}>
                            {c.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[12px] font-bold block mb-1.5" style={{ color: COLORS.green }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Please write your inquiry details here..."
                        style={{ ...inputStyle, resize: "none" }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full py-3.5 rounded-lg text-[14px] font-bold text-white flex items-center justify-center gap-2 hover:bg-[#1E855C] transition-all duration-300 disabled:opacity-70 cursor-pointer shadow-md"
                      style={{ backgroundColor: COLORS.primary, color: COLORS.white }}
                    >
                      {status === "sending" ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Final CTA Banner */}
          <div
            className="rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl"
            style={{ backgroundColor: COLORS.primary }}
          >
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span
                  className="text-[11.5px] font-black uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-3"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#CBE8D9" }}
                >
                  PROACTIVE PREVENTION
                </span>
                <h2 className="text-2xl sm:text-3xl font-black mb-2 text-white">
                  Better Animal Health Starts With Prevention
                </h2>
                <p className="text-[14.5px] text-white/90 leading-relaxed">
                  Discover veterinary healthcare solutions designed to support healthier animals and more productive farming.
                </p>
              </div>
              <Link
                href="/group-companies/Vetvacpharma#solutions"
                className="px-7 py-3.5 rounded-lg text-[13.5px] font-bold bg-white text-[#094C80] hover:bg-[#1E855C] hover:text-white transition-all duration-300 flex-shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Explore Products</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <VetvacFooter />
    </main>
  );
}
