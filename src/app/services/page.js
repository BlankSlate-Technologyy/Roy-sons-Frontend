"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartPulse,
  BriefcaseMedical,
  Pill,
  PawPrint,
  Monitor,
  Zap,
  Sun,
  PlugZap,
  Shield,
  Sprout,
  Gem,
  HardHat,
  Utensils,
  Globe,
  Building2,
  ArrowRight,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

const CORE_SERVICES = [
  {
    icon: HeartPulse,
    title: "Healthcare & Medical Technologies",
    description: "Innovative medical systems and healthcare technology solutions.",
    href: "/services/healthcare-medical",
  },
  {
    icon: BriefcaseMedical,
    title: "Hospital Engineering & Clean Rooms",
    description: "Advanced engineering design and planning for healthcare clean rooms.",
    href: "/services/hospital-engineering",
  },
  {
    icon: PawPrint,
    title: "Veterinary & Livestock Solutions",
    description: "Comprehensive animal healthcare and livestock management solutions.",
    href: "/services/veterinary-livestock",
  },
  {
    icon: Pill,
    title: "Pharmaceutical Consultancy",
    description: "Professional consulting and quality systems for pharmaceuticals.",
    href: "/services/pharmaceutical-consultancy",
  },
  {
    icon: Monitor,
    title: "Information Technology & AI",
    description: "Enterprise software, cloud networks, and smart AI solutions.",
    href: "/services/it-ai",
  },
  {
    icon: Zap,
    title: "Electrical & Power Systems",
    description: "Transmission infrastructure, power distribution, and grid systems.",
    href: "/services/electrical-power-systems",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Sustainable solar, wind, and green energy infrastructure.",
    href: "/services/renewable-energy",
  },
  {
    icon: PlugZap,
    title: "Electric Mobility",
    description: "EV charging stations and electric vehicle transportation networks.",
    href: "/services/electric-mobility",
  },
  {
    icon: Shield,
    title: "Defense & Security",
    description: "Advanced safety, defense systems, and security solutions.",
    href: "/services/defense-security",
  },
  {
    icon: Sprout,
    title: "Agriculture & Dairy Development",
    description: "Modern agritech, crop management, and dairy development solutions.",
    href: "/services/agriculture-dairy-development",
  },
  {
    icon: Gem,
    title: "Mining & Minerals",
    description: "Resource exploration, extraction, and mineral processing.",
    href: "/services/mining-minerals",
  },
  {
    icon: HardHat,
    title: "Construction & Infrastructure",
    description: "Civil engineering, roadworks, and modern infrastructure systems.",
    href: "/services/construction-infrastructure",
  },
  {
    icon: Utensils,
    title: "Food Processing",
    description: "State-of-the-art agricultural food safety, packaging, and processing.",
    href: "/services/food-processing",
  },
  {
    icon: Globe,
    title: "International Trade & Exports",
    description: "Global import-export trade processes and supply chain logistics.",
    href: "/services/international-trade-exports",
  },
  {
    icon: Building2,
    title: "Real Estate & Development",
    description: "Smart housing, residential communities, and property development.",
    href: "/services/real-estate-development",
  },
];

const SERVICE_OPTIONS = [
  "Healthcare & Medical Technologies",
  "Hospital Engineering & Clean Rooms",
  "Veterinary & Livestock Solutions",
  "Pharmaceutical Consultancy",
  "Information Technology & AI",
  "Electrical & Power Systems",
  "Renewable Energy",
  "Electric Mobility",
  "Defense & Security",
  "Agriculture & Dairy Development",
  "Mining & Minerals",
  "Construction & Infrastructure",
  "Food Processing",
  "International Trade & Exports",
  "Real Estate & Development",
];

function ServiceCard({ icon: Icon, title, description, href }) {
  return (
    <div className="flex flex-row items-start gap-4 group">
      {/* Icon Box */}
      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 border border-[#0a7a8c]/25 bg-[#f0fdfa] rounded-sm flex items-center justify-center group-hover:border-[#0d9488] group-hover:bg-gradient-to-br group-hover:from-[#042E3A] group-hover:to-[#0a7a8c] group-hover:shadow-[0_6px_20px_rgba(10,122,140,0.3)] transition-all duration-300">
        <Icon
          size={24}
          strokeWidth={1.6}
          className="text-[#0a7a8c] group-hover:text-white group-hover:scale-110 transition-all duration-300"
        />
      </div>

      {/* Text & Action */}
      <div className="flex-1 flex flex-col justify-start">
        <h3 className="text-base sm:text-lg font-black tracking-[0.05em] uppercase text-[#042E3A] mb-2 leading-snug group-hover:text-[#0a7a8c] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[13px] sm:text-[14px] text-[#042E3A]/75 leading-relaxed font-normal mb-3">
          {description}
        </p>
        <Link
          href={href || "#"}
          className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-bold tracking-[0.16em] uppercase text-[#0a7a8c] hover:text-[#0d9488] transition-all duration-300 group/link"
        >
          <span>LEARN MORE</span>
          <ArrowRight
            size={12}
            strokeWidth={2}
            className="group-hover/link:translate-x-1 transition-transform duration-300 text-[#0a7a8c]"
          />
        </Link>
      </div>
    </div>
  );
}

function FormField({ label, placeholder, type = "text", required = false, id, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[11px] sm:text-xs font-bold text-neutral-950 uppercase tracking-[0.1em]"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white border border-neutral-200 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] transition-colors rounded-[2px]"
      />
    </div>
  );
}

function FormSelect({ label, options, required = false, id, value, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[11px] sm:text-xs font-bold text-neutral-950 uppercase tracking-[0.1em]"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className="relative"
        tabIndex={0}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsOpen(false); }}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full bg-[#f0fdfa] border ${isOpen ? 'border-[#0a7a8c] ring-2 ring-[#0a7a8c]/20' : 'border-[#0a7a8c]/30'} px-3.5 py-2.5 text-xs sm:text-sm text-[#042E3A] font-medium outline-none transition-colors rounded-[2px] cursor-pointer flex justify-between items-center`}
        >
          <span>{value || 'Select a service'}</span>
          <ChevronDown size={14} className={`text-[#0a7a8c] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>

        {isOpen && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-[#0a7a8c]/30 rounded-[2px] max-h-60 overflow-y-auto shadow-xl">
            <div
              onClick={() => { onSelect(''); setIsOpen(false); }}
              className="px-3.5 py-2 text-xs sm:text-sm text-[#042E3A]/50 hover:bg-[#0a7a8c] hover:text-white cursor-pointer transition-colors"
            >
              Select a service
            </div>
            {options.map((opt) => (
              <div
                key={opt}
                onClick={() => { onSelect(opt); setIsOpen(false); }}
                className="px-3.5 py-2 text-xs sm:text-sm text-[#042E3A] hover:bg-[#0a7a8c] hover:text-white cursor-pointer transition-colors"
              >
                {opt}
              </div>
            ))}
          </div>
        )}
        <select id={id} required={required} value={value} onChange={() => {}} className="hidden">
          <option value="" disabled>Select a service</option>
          {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/service-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit query request.");
      }

      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        subject: "",
        message: ""
      });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(err.message || "An error occurred while submitting your inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <HeaderNavbar activeRoute="/services" />

      {/* Services Hero Banner - Centered Gradient Design */}
      <section 
        className="services-hero-gradient relative py-16 sm:py-20 lg:py-24 px-6 overflow-hidden text-center flex flex-col items-center justify-center border-b border-[#0a7a8c]/20"
        style={{
          background: "linear-gradient(90deg, #005f77 0%, #088192 50%, #009e75 100%)",
          backgroundColor: "#088192",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Top Tag */}
          <span 
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/85 mb-2.5 block"
            style={{ color: "rgba(255, 255, 255, 0.85)" }}
          >
            WHAT WE DO
          </span>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight drop-shadow-sm"
            style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
          >
            Our Services
          </h1>

          <p 
            className="text-[15px] sm:text-[17px] text-white/95 leading-relaxed max-w-2xl mx-auto mb-8 font-normal drop-shadow-sm"
            style={{ color: "rgba(255, 255, 255, 0.95)", WebkitTextFillColor: "rgba(255, 255, 255, 0.95)" }}
          >
            ROYSONS Pvt. Ltd. offers a wide range of innovative and
            reliable services to meet the diverse needs of our clients
            across multiple industries.
          </p>

          <div>
            <Link
              href="#request-query"
              id="services-hero-cta"
              className="inline-flex items-center justify-center bg-white hover:bg-neutral-100 text-[#042E3A] font-bold px-8 py-3.5 text-sm sm:text-[15px] rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95"
              style={{ borderRadius: "9999px", backgroundColor: "#ffffff", color: "#042E3A" }}
            >
              <span className="text-[#042E3A] font-bold">Request a Query</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white font-sans border-t border-b border-[#0a7a8c]/15">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14 sm:mb-20">
            <h4 className="text-xs sm:text-sm font-black tracking-[0.28em] uppercase text-[#0a7a8c] mb-3.5">
              WHAT WE OFFER
            </h4>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-[0.16em] text-[#042E3A]">
              Our Core Services
            </h2>
            <div className="mx-auto mt-5 h-[3.5px] w-16 bg-gradient-to-r from-[#042E3A] via-[#0a7a8c] to-[#0d9488]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">
            {CORE_SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="request-query"
        className="py-16 sm:py-20 bg-neutral-50 border-t border-neutral-100"
      >
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-[300px] flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-[#042E3A] to-[#0a7a8c] rounded-sm flex items-center justify-center mb-5 shadow-sm">
                <MessageSquare size={18} className="text-white" strokeWidth={1.8} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight mb-3 leading-snug">
                Request a Query
              </h2>
              <div className="h-[3px] w-10 bg-gradient-to-r from-[#042E3A] to-[#0a7a8c] mb-4" />
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Have a question or need more information about our services? Fill
                out the form and our team will get back to you shortly.
              </p>
            </div>

            <div className="flex-1">
              {formSubmitted ? (
                <div className="flex items-center justify-center h-full min-h-[280px] bg-white border border-neutral-200 rounded-[3px]">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-[#0a7a8c] rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight size={22} className="text-white" />
                    </div>
                    <p className="text-sm sm:text-base font-black uppercase tracking-widest text-neutral-950">
                      Query Submitted!
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1.5 font-normal">
                      Our team will get back to you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormField
                      id="query-fullname"
                      label="Full Name"
                      placeholder="Enter your full name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    <FormField
                      id="query-email"
                      label="Email Address"
                      placeholder="Enter your email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <FormField
                      id="query-phone"
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormField
                      id="query-company"
                      label="Company / Organization"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                    <FormSelect
                      id="query-service"
                      label="Service of Interest"
                      options={SERVICE_OPTIONS}
                      required
                      value={formData.service}
                      onSelect={(val) => setFormData({ ...formData, service: val })}
                    />
                    <FormField
                      id="query-subject"
                      label="Subject"
                      placeholder="Enter subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="query-message"
                      className="text-[11px] sm:text-xs font-bold text-neutral-950 uppercase tracking-[0.1em]"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="query-message"
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-neutral-200 px-3.5 py-2.5 text-xs sm:text-sm text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] transition-colors rounded-[2px] resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2.5 rounded-[2px] text-xs sm:text-sm font-medium tracking-wide">
                      ⚠️ {submitError}
                    </div>
                  )}

                  <div className="flex justify-start sm:justify-end pt-2">
                    <button
                      type="submit"
                      id="query-submit-btn"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] disabled:bg-neutral-400 text-white font-black px-8 py-3 text-xs uppercase tracking-[0.16em] transition-all duration-300 rounded-[2px] cursor-pointer disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(10,122,140,0.35)]"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Query"} <ArrowRight size={13} strokeWidth={2.5} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
