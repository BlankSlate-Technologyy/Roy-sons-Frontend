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
    icon: Pill,
    title: "Pharmaceutical Consultancy",
    description: "Professional consulting and quality systems for pharmaceuticals.",
    href: "/services/pharmaceutical-consultancy",
  },
  {
    icon: PawPrint,
    title: "Veterinary & Livestock Solutions",
    description: "Comprehensive animal healthcare and livestock management solutions.",
    href: "/services/veterinary-livestock",
  },
  {
    icon: Monitor,
    title: "Information Technology & AI",
    description: "Enterprise software, cloud networks, and smart AI solutions.",
    href: "/services/information-technology-ai",
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
    href: "/services/agriculture-dairy",
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
];

const SERVICE_OPTIONS = [
  "Healthcare & Medical Technologies",
  "Hospital Engineering & Clean Rooms",
  "Pharmaceutical Consultancy",
  "Veterinary & Livestock Solutions",
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
];

function ServiceCard({ icon: Icon, title, description, href }) {
  return (
    <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-14 h-14 bg-neutral-50 border border-neutral-200 rounded-sm flex items-center justify-center transition-all duration-300 group-hover:bg-black group-hover:border-black">
        <Icon
          size={26}
          strokeWidth={1.4}
          className="text-neutral-700 transition-colors duration-300 group-hover:text-white"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[13px] font-black uppercase tracking-[0.12em] text-neutral-950 mb-1.5">
          {title}
        </h3>
        <p className="text-[11.5px] text-neutral-500 leading-relaxed mb-3">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-black border-b border-black pb-0.5 hover:gap-2.5 transition-all duration-200"
        >
          Learn More <ArrowRight size={11} strokeWidth={2.5} />
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
        className="text-[10.5px] font-bold text-neutral-950 uppercase tracking-[0.12em]"
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
        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-700 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px]"
      />
    </div>
  );
}

function FormSelect({ label, options, required = false, id, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-[10.5px] font-bold text-neutral-950 uppercase tracking-[0.12em]"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-500 outline-none focus:border-neutral-950 transition-colors rounded-[2px] appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Select a service
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-black">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
        />
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
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${apiUrl}/service-query`, {
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
      setSubmitError(err.message || "Connection refused. Please ensure the backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <HeaderNavbar activeRoute="/services" />

      <section className="bg-white border-b border-neutral-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-stretch min-h-[260px]">
            <div className="flex-1 py-14 pr-0 lg:pr-16 flex flex-col justify-center">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500 mb-3">
                WHAT WE DO
              </p>
              <h1 className="text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight mb-5 leading-[1.08]">
                Our Services
              </h1>
              <p className="text-[13px] text-neutral-500 leading-relaxed max-w-md mb-8">
                Roy Sons Pvt. Ltd. offers a wide range of innovative and
                reliable services to meet the diverse needs of our clients
                across multiple industries.
              </p>
              <div>
                <Link
                  href="#request-query"
                  id="services-hero-cta"
                  className="inline-flex items-center gap-3 bg-black text-white px-7 py-3.5 text-[10.5px] font-black uppercase tracking-[0.18em] hover:bg-neutral-800 transition-colors rounded-[2px]"
                >
                  Request a Query <ArrowRight size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            <div className="hidden lg:block w-[480px] xl:w-[560px] relative overflow-hidden">
              <Image
                src="/hero-building.png"
                alt="Roy Sons modern construction building"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 mb-3">
              WHAT WE OFFER
            </p>
            <h2 className="text-[26px] font-black uppercase tracking-[0.18em] text-neutral-950">
              Our Core Services
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-neutral-950" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
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
        className="py-20 bg-neutral-50 border-t border-neutral-100"
      >
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-[280px] flex-shrink-0">
              <div className="w-10 h-10 bg-black rounded-sm flex items-center justify-center mb-5">
                <MessageSquare size={18} className="text-white" strokeWidth={1.8} />
              </div>
              <h2 className="text-2xl font-black text-neutral-950 tracking-tight mb-4 leading-snug">
                Request a Query
              </h2>
              <div className="h-[3px] w-10 bg-neutral-950 mb-5" />
              <p className="text-[12.5px] text-neutral-500 leading-relaxed">
                Have a question or need more information about our services? Fill
                out the form and our team will get back to you shortly.
              </p>
            </div>

            <div className="flex-1">
              {formSubmitted ? (
                <div className="flex items-center justify-center h-full min-h-[280px] bg-white border border-neutral-200 rounded-[3px]">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                      <ArrowRight size={22} className="text-white" />
                    </div>
                    <p className="text-[13px] font-black uppercase tracking-widest text-neutral-950">
                      Query Submitted!
                    </p>
                    <p className="text-[11.5px] text-neutral-500 mt-2">
                      Our team will get back to you shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                      className="text-[10.5px] font-bold text-neutral-950 uppercase tracking-[0.12em]"
                    >
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="query-message"
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-700 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px] resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[2px] text-[11.5px] font-medium tracking-wide">
                      ⚠️ {submitError}
                    </div>
                  )}

                  <div className="flex justify-center pt-2">
                    <button
                      type="submit"
                      id="query-submit-btn"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-3 bg-black hover:bg-neutral-800 disabled:bg-neutral-400 text-white px-10 py-3.5 text-[10.5px] font-black uppercase tracking-[0.18em] transition-colors rounded-[2px] cursor-pointer disabled:cursor-not-allowed"
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
