"use client";

import { useState } from "react";
import Image from "next/image";
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
  ShieldCheck,
} from "lucide-react";
import { RoysNavbar, RoysFooter } from "../_shared";

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "Healthcare Infrastructure",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#0f2b48] font-sans antialiased selection:bg-[#2563eb] selection:text-white overflow-hidden">
      <RoysNavbar active="Contact" />

      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative bg-[#07152b] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 px-6 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div
            data-aos="fade-down"
            data-aos-duration="600"
            className="inline-block px-3.5 py-1 rounded-full border border-[#B49438] bg-[#B49438]/10 text-[#d4af37] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4"
          >
            GLOBAL HEADQUARTERS &amp; INQUIRIES
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="700"
            className="text-3xl sm:text-4xl lg:text-[44px] font-black leading-[1.18] tracking-tight text-white mb-4 max-w-3xl mx-auto"
          >
            Connect With Our Institutional Advisory Team
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="700"
            className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-7 font-normal"
          >
            Whether inquiring about turnkey healthcare infrastructure, medical equipment procurement, or strategic international trade partnerships.
          </p>
        </div>
      </section>

      {/* ─── Contact Info & Form ───────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-[#f8fafc]">
        <div className="mx-auto max-w-screen-xl grid lg:grid-cols-12 gap-10 items-start">
          {/* Left info cards */}
          <div className="lg:col-span-5 space-y-5" data-aos="fade-right" data-aos-duration="700">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-[#0f2b48]">Corporate Headquarters</h3>
              
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <a href="tel:+9242111786786" className="flex items-start gap-3 hover:text-[#2563eb] transition-colors">
                  <div className="w-8 h-8 rounded bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0f2b48]">Phone / UAN</p>
                    <p>+92 42 111 786 786</p>
                  </div>
                </a>

                <a href="mailto:info@roysroys.com" className="flex items-start gap-3 hover:text-[#2563eb] transition-colors">
                  <div className="w-8 h-8 rounded bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0f2b48]">Official Email</p>
                    <p>info@roysroys.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0f2b48]">Location</p>
                    <p>Lahore, Punjab, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-blue-50 text-[#2563eb] flex items-center justify-center shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-[#0f2b48]">Business Hours</p>
                    <p>Monday – Saturday: 9:00 AM – 6:00 PM (PKT)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#091d34] text-white shadow-md space-y-3">
              <span className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#B49438] block">
                GLOBAL REACH
              </span>
              <h4 className="text-base font-bold text-white">Serving 30+ Nations Worldwide</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Direct export pipelines, registered vendor with international ministries, United Nations organizations, and global defense authorities.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-duration="700">
            <div className="p-7 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-md">
              <h3 className="text-lg font-bold text-[#0f2b48] mb-5">
                Send Us a Proposal Request
              </h3>

              {submitted ? (
                <div className="p-6 text-center rounded-xl bg-blue-50 border border-blue-100">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-sm font-bold text-[#0f2b48] mb-1">Inquiry Submitted Successfully!</p>
                  <p className="text-xs text-slate-600">Our directorate will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0f2b48] mb-1">Full Name</label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={form.fullName}
                        onChange={handleFormChange}
                        placeholder="Dr. / Engr. Full Name"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:border-[#2563eb] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0f2b48] mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleFormChange}
                        placeholder="official@organization.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:border-[#2563eb] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0f2b48] mb-1">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleFormChange}
                        placeholder="+92 300 0000000"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:border-[#2563eb] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0f2b48] mb-1">Organization / Hospital</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleFormChange}
                        placeholder="Ministry / Healthcare Facility"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:border-[#2563eb] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f2b48] mb-1">Inquiry Scope</label>
                    <select
                      name="inquiryType"
                      value={form.inquiryType}
                      onChange={handleFormChange}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:border-[#2563eb] transition-colors"
                    >
                      <option>Turnkey Hospital Infrastructure</option>
                      <option>Modular OT &amp; ICU Solutions</option>
                      <option>Medical Gas Pipeline (MGPS) &amp; HVAC</option>
                      <option>Medical Devices &amp; Imaging Systems</option>
                      <option>Biomedical Facility Maintenance</option>
                      <option>Institutional Contracting &amp; Global Trade</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0f2b48] mb-1">Detailed Requirements</label>
                    <textarea
                      rows={4}
                      name="message"
                      required
                      value={form.message}
                      onChange={handleFormChange}
                      placeholder="Specify project scope, technical parameters, quantities, or site location..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-800 outline-none focus:border-[#2563eb] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#0f2b48] hover:bg-[#2563eb] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors duration-200 shadow-sm cursor-pointer"
                  >
                    <span>Submit Proposal Request</span>
                    <Send size={13} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <RoysFooter />
    </main>
  );
}
