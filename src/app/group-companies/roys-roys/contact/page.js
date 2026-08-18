"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Globe,
  MessageSquare,
} from "lucide-react";
import { RoysNavbar, RoysFooter, RoysButton, SectionHeading } from "../_shared";

// ─── Local Page Color Tokens (Independent of Global CSS) ──────────────────────
const COLORS = {
  primary:     "#113658",
  primaryDark: "#0a2238",
  gold:        "#B49438",
  white:       "#ffffff",
  black:       "#000000",
  border:      "#e2e8f0",
  light:       "#f8fafc",
  teal:        "#009088",
  muted:       "#4a5568",
};

const INQUIRY_TYPES = [
  "Medical Equipment",
  "Laboratory Equipment",
  "Surgical Instruments",
  "Hospital Engineering",
  "Government / Institutional Procurement",
  "Healthcare Project Support",
  "General Inquiry",
];

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "info@roysroysinternational.com",
    sub: "We typically respond within 24–48 hours",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 000 000 0000",
    sub: "Available during business hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Lahore, Pakistan",
    sub: "ROYS & ROYS International",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon – Fri: 9:00 AM – 6:00 PM",
    sub: "Pakistan Standard Time (PKT)",
  },
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", inquiry: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const [btnHov, setBtnHov] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "13px 16px",
    fontSize: "14px",
    border: `1.5px solid ${focused === field ? COLORS.primary : COLORS.border}`,
    borderRadius: "3px",
    outline: "none",
    backgroundColor: COLORS.white,
    color: COLORS.primary,
    fontWeight: "500",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
    fontFamily: "inherit",
  });

  const labelStyle = {
    display: "block",
    color: COLORS.primary,
    fontSize: "12px",
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: "8px",
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "64px 40px" }}>
        <div style={{ width: "72px", height: "72px", borderRadius: "50%", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <CheckCircle2 size={36} color={COLORS.primary} />
        </div>
        <h3 style={{ color: COLORS.primary, fontSize: "22px", fontWeight: "900", marginBottom: "12px" }}>
          Message Received
        </h3>
        <p style={{ color: COLORS.primary, fontSize: "14.5px", lineHeight: "1.8", marginBottom: "28px", maxWidth: "380px", margin: "0 auto 28px", opacity: 0.85 }}>
          Thank you for reaching out. Our team will review your inquiry and respond within 24–48 business hours.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", inquiry: "", message: "" }); }}
          style={{ backgroundColor: COLORS.primary, color: COLORS.white, padding: "12px 28px", fontWeight: "800", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", border: "none", borderRadius: "3px", cursor: "pointer" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "44px 36px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input required name="name" value={form.name} onChange={handleChange} placeholder="Your full name" style={inputStyle("name")} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} />
        </div>
        <div>
          <label style={labelStyle}>Company / Organization</label>
          <input name="company" value={form.company} onChange={handleChange} placeholder="Your organization" style={inputStyle("company")} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "18px", marginBottom: "18px" }}>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" style={inputStyle("email")} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} />
        </div>
        <div>
          <label style={labelStyle}>Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} placeholder="+00 000 000 0000" style={inputStyle("phone")} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} />
        </div>
      </div>

      <div style={{ marginBottom: "18px" }}>
        <label style={labelStyle}>Inquiry Type *</label>
        <select required name="inquiry" value={form.inquiry} onChange={handleChange} style={{ ...inputStyle("inquiry"), appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23113658' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center", paddingRight: "40px", cursor: "pointer" }} onFocus={() => setFocused("inquiry")} onBlur={() => setFocused(null)}>
          <option value="">Select an inquiry type</option>
          {INQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div style={{ marginBottom: "26px" }}>
        <label style={labelStyle}>Message *</label>
        <textarea
          required name="message" value={form.message} onChange={handleChange}
          placeholder="Please describe your requirements, products needed, project scope, or any specific questions..."
          rows={5}
          style={{ ...inputStyle("message"), resize: "vertical", minHeight: "120px" }}
          onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          backgroundColor: btnHov ? "#0a2238" : COLORS.primary,
          color: COLORS.white,
          padding: "16px 24px",
          fontWeight: "800",
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          transition: "all 0.25s ease",
          boxShadow: btnHov ? "0 6px 18px rgba(17,54,88,0.3)" : "none",
        }}
        onMouseEnter={() => setBtnHov(true)}
        onMouseLeave={() => setBtnHov(false)}
      >
        <Send size={16} />
        Send Your Inquiry
      </button>

      <p style={{ color: COLORS.muted, fontSize: "11px", textAlign: "center", marginTop: "14px" }}>
        We respect your privacy. Your information will only be used to respond to your inquiry.
      </p>
    </form>
  );
}

export default function ContactPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");
    return () => {
      document.body.classList.remove("roys-roys-theme");
    };
  }, []);

  return (
    <main style={{ minHeight: "100vh", backgroundColor: COLORS.white, color: COLORS.primary, fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <RoysNavbar active="Contact" />

      {/* ── HERO (IMAGE BACKGROUND + DARK OVERLAY) ───────────────────────── */}
      <section style={{ position: "relative", padding: "80px 24px 75px", overflow: "hidden", minHeight: "420px", display: "flex", alignItems: "center" }}>
        {/* Background image + overlay */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `url('/ROYS & ROYS INTERNATIONAL HERO IMAGE.jpeg')`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.58) 55%, rgba(0,0,0,0.25) 100%)" }} />
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1, width: "100%" }}>
          <nav style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "24px" }}>
            <Link href="/group-companies/roys-roys" style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>Home</Link>
            <ChevronRight size={14} color="rgba(255,255,255,0.5)" />
            <span style={{ color: COLORS.white, fontSize: "13px", fontWeight: "800" }}>Contact</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <p style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "14px" }}>
                CONTACT ROYS &amp; ROYS INTERNATIONAL
              </p>
              <h1 style={{ color: COLORS.white, fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: "900", lineHeight: "1.15", marginBottom: "18px", letterSpacing: "-0.01em" }}>
                Let's Build Better Healthcare Solutions
              </h1>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", lineHeight: "1.85", marginBottom: "32px" }}>
                Whether you need medical equipment, laboratory products, surgical supplies, hospital engineering solutions, or support for a healthcare project — our team is ready to discuss your requirements.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { icon: Mail,  text: "info@roysroysinternational.com" },
                  { icon: Phone, text: "+92 000 000 0000" },
                  { icon: Globe, text: "Serving healthcare clients internationally" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "38px", height: "38px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={18} color={COLORS.gold} />
                      </div>
                      <span style={{ color: COLORS.white, fontSize: "14.5px", fontWeight: "700" }}>{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats block */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="hidden lg:grid">
              {[
                { val: "24–48h", lbl: "Response Time" },
                { val: "30+",   lbl: "Countries Served" },
                { val: "15+",   lbl: "Years Experience" },
                { val: "1000+", lbl: "Healthcare Products" },
              ].map((s) => (
                <div key={s.lbl} style={{ backgroundColor: COLORS.white, border: `1.5px solid ${COLORS.border}`, borderRadius: "6px", padding: "26px 20px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.18)" }}>
                  <div style={{ color: COLORS.primary, fontSize: "clamp(1.5rem, 2vw, 2.2rem)", fontWeight: "900", lineHeight: "1" }}>{s.val}</div>
                  <div style={{ color: COLORS.gold, fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "6px" }}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, padding: "88px 24px", borderTop: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "36px", alignItems: "start" }}>

          {/* Left: Contact Info */}
          <div>
            <p style={{ color: COLORS.gold, fontSize: "12px", fontWeight: "800", letterSpacing: "0.35em", textTransform: "uppercase", marginBottom: "10px" }}>
              GET IN TOUCH
            </p>
            <h2 style={{ color: COLORS.primary, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: "900", lineHeight: "1.2", marginBottom: "12px" }}>
              Contact Information
            </h2>
            <div style={{ width: "40px", height: "4px", backgroundColor: COLORS.primary, borderRadius: "2px", marginBottom: "28px" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <div
                    key={info.label}
                    style={{ backgroundColor: COLORS.white, border: `1.5px solid ${COLORS.border}`, borderRadius: "6px", padding: "20px 22px", display: "flex", alignItems: "flex-start", gap: "16px" }}
                  >
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: `${COLORS.primary}12`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={20} color={COLORS.primary} />
                    </div>
                    <div>
                      <p style={{ color: COLORS.gold, fontSize: "10px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "4px" }}>{info.label}</p>
                      <p style={{ color: COLORS.primary, fontSize: "15px", fontWeight: "800", marginBottom: "3px" }}>{info.value}</p>
                      <p style={{ color: COLORS.muted, fontSize: "12px" }}>{info.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* What to expect */}
            <div style={{ backgroundColor: COLORS.white, border: `1.5px solid ${COLORS.border}`, borderRadius: "6px", padding: "28px 26px" }}>
              <h3 style={{ color: COLORS.primary, fontSize: "16px", fontWeight: "900", marginBottom: "14px" }}>What to Expect</h3>
              {[
                "We acknowledge your inquiry promptly",
                "Our team reviews your requirements",
                "We provide tailored product information",
                "We support your full procurement process",
              ].map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                  <CheckCircle2 size={16} color={COLORS.primary} style={{ flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ color: COLORS.primary, fontSize: "13.5px", fontWeight: "600" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ backgroundColor: COLORS.white, borderRadius: "8px", border: `1.5px solid ${COLORS.border}`, boxShadow: "0 10px 32px rgba(17,54,88,0.08)", overflow: "hidden" }}>
            <div style={{ backgroundColor: COLORS.primary, padding: "24px 36px" }}>
              <p style={{ color: COLORS.gold, fontSize: "11px", fontWeight: "800", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "4px" }}>
                SEND US A MESSAGE
              </p>
              <h3 style={{ color: COLORS.white, fontSize: "20px", fontWeight: "900" }}>
                Submit Your Inquiry
              </h3>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── WHAT CAN WE HELP WITH ────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.white, padding: "88px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionHeading eyebrow="OUR SERVICES" title="What Can We Help You With?" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "16px" }}>
            {[
              { emoji: "🏥", title: "Hospital Setup",          desc: "Equipment and solutions for new or expanding facilities" },
              { emoji: "🔬", title: "Lab Equipment",           desc: "Instruments and systems for diagnostic laboratories" },
              { emoji: "⚕️",  title: "Surgical Solutions",     desc: "Instruments and OR equipment for surgical teams" },
              { emoji: "🏗️",  title: "Hospital Engineering",   desc: "Modular OT, clean rooms, and HVAC systems" },
              { emoji: "🏛️",  title: "Government Procurement", desc: "Large-scale institutional and public health supply" },
              { emoji: "📦",  title: "Product Sourcing",       desc: "Identify any specific medical product you need" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: COLORS.light,
                  border: `1.5px solid ${COLORS.border}`,
                  borderRadius: "6px",
                  padding: "24px 18px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = COLORS.primary;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(17,54,88,0.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = COLORS.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "10px" }}>{item.emoji}</div>
                <h3 style={{ color: COLORS.primary, fontSize: "15px", fontWeight: "900", marginBottom: "6px" }}>{item.title}</h3>
                <p style={{ color: COLORS.primary, fontSize: "12.5px", lineHeight: "1.6", opacity: 0.8 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BROWSE STRIP ─────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: COLORS.light, borderTop: `1px solid ${COLORS.border}`, padding: "56px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: COLORS.primary, fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: "900", marginBottom: "10px" }}>
            Prefer to Browse First?
          </h2>
          <p style={{ color: COLORS.primary, fontSize: "15px", marginBottom: "28px", opacity: 0.85 }}>
            Explore our solutions, products, and industry capabilities before reaching out.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
            {[
              { label: "Our Solutions", href: "/group-companies/roys-roys/solutions" },
              { label: "Our Products",  href: "/group-companies/roys-roys/products" },
              { label: "What We Do",   href: "/group-companies/roys-roys/what-we-do" },
              { label: "Industries",   href: "/group-companies/roys-roys/industries" },
            ].map((link) => (
              <RoysButton
                key={link.label}
                href={link.href}
                variant="primary"
                style={{ fontSize: "12px", padding: "11px 22px" }}
              >
                {link.label} <ArrowRight size={13} />
              </RoysButton>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <RoysFooter />
    </main>
  );
}
