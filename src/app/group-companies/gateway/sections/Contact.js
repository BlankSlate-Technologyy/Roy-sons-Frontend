"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import { COLORS, SERVICES } from "../constants";
import { Container } from "./Shared";

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Our Office",
    value: "1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    href: "#",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "0092-42-38924737",
    href: "tel:+924238924737",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "0092-304-7527498 | 0092-321-8431665",
    href: "https://wa.me/923047527498",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@roysons.org | support@roysons.org",
    href: "mailto:info@roysons.org",
  },
];

const inputBase = {
  width: "100%",
  padding: "12px 16px",
  border: `1.5px solid ${COLORS.border}`,
  borderRadius: "10px",
  fontSize: "13.5px",
  color: COLORS.textDark,
  background: "#F8FAFC",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#F0F5FF", padding: "80px 24px" }}
    >
      <Container>
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <span
            style={{
              fontSize: "11.5px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: COLORS.primary,
            }}
          >
            Get In Touch
          </span>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: 900,
              color: COLORS.textDark,
              margin: "6px 0 10px",
            }}
          >
            Contact{" "}
            <span style={{ color: COLORS.primary }}>Gateway Pharma</span>
          </h2>
          <p
            style={{
              fontSize: "14px",
              color: COLORS.textGray,
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Have a regulatory question or need a consultation? Fill out the form
            below and our expert team will respond promptly.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "32px",
            alignItems: "start",
          }}
          className="gateway-contact-grid"
        >
          {/* Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  padding: "18px 20px",
                  borderRadius: "14px",
                  background: COLORS.white,
                  border: `1px solid ${COLORS.border}`,
                  boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    backgroundColor: `${COLORS.primary}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color={COLORS.primary} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: COLORS.primary,
                      marginBottom: "3px",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontSize: "13.5px",
                      fontWeight: 600,
                      color: COLORS.textDark,
                    }}
                  >
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Form Card */}
          <div
            style={{
              background: COLORS.white,
              borderRadius: "18px",
              border: `1px solid ${COLORS.border}`,
              boxShadow: "0 4px 24px rgba(23,63,138,0.08)",
              padding: "36px",
            }}
          >
            {status === "sent" ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "60px 20px",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: `${COLORS.secondary}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                  }}
                >
                  <Send size={28} color={COLORS.secondary} />
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 800,
                    color: COLORS.textDark,
                    marginBottom: "8px",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: COLORS.textGray,
                    marginBottom: "24px",
                  }}
                >
                  Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setForm({ name: "", email: "", phone: "", service: "", message: "" });
                    setStatus("idle");
                  }}
                  style={{
                    padding: "10px 28px",
                    borderRadius: "8px",
                    background: COLORS.primary,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "13px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                {/* Name + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, marginBottom: "6px", color: COLORS.textGray, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Full Name *
                    </label>
                    <input
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Dr. Ahmed Ali"
                      style={inputBase}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, marginBottom: "6px", color: COLORS.textGray, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Email Address *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="ahmed@company.com"
                      style={inputBase}
                    />
                  </div>
                </div>

                {/* Phone + Service */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, marginBottom: "6px", color: COLORS.textGray, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 3XX XXXXXXX"
                      style={inputBase}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, marginBottom: "6px", color: COLORS.textGray, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Service *
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputBase, appearance: "auto" }}
                    >
                      <option value="" disabled>Select a service…</option>
                      {SERVICES.map(({ title }) => (
                        <option key={title} value={title}>{title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontSize: "11.5px", fontWeight: 700, marginBottom: "6px", color: COLORS.textGray, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your regulatory needs..."
                    style={{ ...inputBase, resize: "none" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "10px",
                    background: status === "sending"
                      ? `${COLORS.primary}99`
                      : COLORS.primary,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "13.5px",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    border: "none",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "opacity 0.2s",
                  }}
                >
                  {status === "sending" ? "Sending…" : (
                    <>Send Message <ArrowRight size={16} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .gateway-contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
