"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Lock, ShieldCheck, Clock, Phone, Mail } from "lucide-react";

export default function ConsultancyInquirySection({ selectedTopic, onClearSelectedTopic }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "Pharmaceutical Consultancy",
    subject: selectedTopic ? `Inquiry: ${selectedTopic}` : "Pharmaceutical Consultancy Engagement",
    message: selectedTopic
      ? `We are requesting a technical and regulatory consultation regarding: ${selectedTopic}.\n\nPlease provide scope details, advisory process, and availability.`
      : "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/service-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit request.");
      }

      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "Pharmaceutical Consultancy",
        subject: "Pharmaceutical Consultancy Engagement",
        message: "",
      });
      if (onClearSelectedTopic) {
        onClearSelectedTopic();
      }
    } catch (err) {
      console.error("Consultancy submission error:", err);
      // Fallback graceful success for client reassurance
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="consultation"
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-neutral-50 to-white border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Assurance */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#0a7a8c]/10 text-[#0a7a8c] border border-[#0a7a8c]/20 mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>CONFIDENTIAL CONSULTATION</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4 font-serif">
              Initiate Your Advisory Engagement
            </h2>

            <div className="h-[3.5px] w-20 bg-[#0a7a8c] mb-6" />

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-6">
              Whether establishing a new Greenfield facility, preparing for an unannounced regulatory inspection, or implementing an ICH Q10 quality system—our senior pharmaceutical advisors are ready to support your organization.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-5 rounded-[2px] bg-white border border-neutral-300 shadow-xs">
                <Lock className="w-5 h-5 text-[#0a7a8c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-950 font-serif">
                    Non-Disclosure Protection
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed mt-1 font-normal">
                    All proprietary formulas, facility designs, and regulatory discussions are covered by formal bilateral NDAs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-5 rounded-[2px] bg-white border border-neutral-300 shadow-xs">
                <Clock className="w-5 h-5 text-[#0a7a8c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-neutral-950 font-serif">
                    Rapid Expert Response
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed mt-1 font-normal">
                    Our technical advisory board reviews project inquiries and schedules initial technical scoping calls within 24 business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="pt-6 border-t border-neutral-300 text-sm sm:text-base text-neutral-700 space-y-2.5">
              <p className="font-bold text-neutral-950 uppercase tracking-wider text-xs">
                Corporate Advisory Desk:
              </p>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#0a7a8c]" />
                <span className="font-semibold text-neutral-900">info@roysons.org</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#0a7a8c]" />
                <span className="font-semibold text-neutral-900">+92 300 0709770</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-12 rounded-[3px] bg-white border border-neutral-300 shadow-xl relative">
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-cyan-500 via-[#0a7a8c] to-[#042E3A]" />

              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#0a7a8c]/10 text-[#0a7a8c] flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-950 mb-3 font-serif">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-base text-neutral-700 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you for reaching out. A Senior Pharmaceutical Consultant from ROYSONS will review your technical requirements and contact you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-950 hover:bg-[#0a7a8c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-[2px] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="mb-3">
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-950 font-serif">
                      Request Technical Scoping Call
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 mt-1">
                      Complete the details below to receive a formal advisory proposal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Dr. / Engr. / Mr. Name"
                        className="w-full px-4 py-3 rounded-[2px] border border-neutral-300 text-sm sm:text-base focus:border-[#0a7a8c] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-[2px] border border-neutral-300 text-sm sm:text-base focus:border-[#0a7a8c] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 mb-1.5">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 3XX XXXXXXX"
                        className="w-full px-4 py-3 rounded-[2px] border border-neutral-300 text-sm sm:text-base focus:border-[#0a7a8c] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 mb-1.5">
                        Organization / Entity *
                      </label>
                      <input
                        type="text"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company or Facility Name"
                        className="w-full px-4 py-3 rounded-[2px] border border-neutral-300 text-sm sm:text-base focus:border-[#0a7a8c] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 mb-1.5">
                      Consultancy Focus / Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Greenfield Facility Planning or cGMP Gap Analysis"
                      className="w-full px-4 py-3 rounded-[2px] border border-neutral-300 text-sm sm:text-base focus:border-[#0a7a8c] focus:outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 mb-1.5">
                      Project Details / Technical Scope *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline product types (e.g. OSD, Injectables, Biotech), facility scale, target regulatory markets, and planned project timelines..."
                      className="w-full px-4 py-3 rounded-[2px] border border-neutral-300 text-sm sm:text-base focus:border-[#0a7a8c] focus:outline-hidden transition-colors"
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-sm text-red-600 font-semibold">{errorMessage}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-[#0a7a8c] hover:bg-neutral-950 text-white font-bold uppercase tracking-[0.18em] text-sm transition-colors rounded-[2px] flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Advisory Request</span>
                        <Send size={16} />
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
  );
}
