"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HardHat,
  PenTool,
  Sun,
  Network,
  Monitor,
  Briefcase,
  Wrench,
  BarChart2,
  ArrowRight,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

const CORE_SERVICES = [
  {
    icon: HardHat,
    title: "Construction",
    description: "We deliver high-quality construction solutions with a focus on safety, innovation, and timely delivery.",
    href: "/services/construction",
  },
  {
    icon: PenTool,
    title: "Architecture",
    description: "Creative and functional architectural designs that blend aesthetics with sustainability.",
    href: "/services/architecture",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Sustainable energy solutions for a cleaner future and energy independence.",
    href: "/services/renewable-energy",
  },
  {
    icon: Network,
    title: "Infrastructure",
    description: "Building strong infrastructure that supports communities and drives economic growth.",
    href: "/services/infrastructure",
  },
  {
    icon: Monitor,
    title: "IT & Technology",
    description: "Smart IT solutions and digital transformation services to empower your business.",
    href: "/services/it-technology",
  },
  {
    icon: Briefcase,
    title: "Project Management",
    description: "End-to-end project management ensuring quality, transparency, and efficiency.",
    href: "/services/project-management",
  },
  {
    icon: Wrench,
    title: "Maintenance Services",
    description: "Reliable maintenance and support services to ensure long-term performance.",
    href: "/services/maintenance",
  },
  {
    icon: BarChart2,
    title: "Consulting Services",
    description: "Strategic consulting to help businesses grow, optimize and achieve their goals.",
    href: "/services/consulting",
  },
];

const SERVICE_OPTIONS = [
  "Construction",
  "Architecture",
  "Renewable Energy",
  "Infrastructure",
  "IT & Technology",
  "Project Management",
  "Maintenance Services",
  "Consulting Services",
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

function FormField({ label, placeholder, type = "text", required = false, id }) {
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
        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-700 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px]"
      />
    </div>
  );
}

function FormSelect({ label, options, required = false, id }) {
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
          defaultValue=""
          className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-500 outline-none focus:border-neutral-950 transition-colors rounded-[2px] appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Select a service
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt.toLowerCase().replace(/\s+/g, "-")}>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
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
                    />
                    <FormField
                      id="query-email"
                      label="Email Address"
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                    <FormField
                      id="query-phone"
                      label="Phone Number"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <FormField
                      id="query-company"
                      label="Company / Organization"
                      placeholder="Enter your company name"
                    />
                    <FormSelect
                      id="query-service"
                      label="Service of Interest"
                      options={SERVICE_OPTIONS}
                      required
                    />
                    <FormField
                      id="query-subject"
                      label="Subject"
                      placeholder="Enter subject"
                      required
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
                      className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-700 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px] resize-none"
                    />
                  </div>

                  <div className="flex justify-center pt-2">
                    <button
                      type="submit"
                      id="query-submit-btn"
                      className="inline-flex items-center gap-3 bg-black text-white px-10 py-3.5 text-[10.5px] font-black uppercase tracking-[0.18em] hover:bg-neutral-800 transition-colors rounded-[2px] cursor-pointer"
                    >
                      Submit Query <ArrowRight size={13} strokeWidth={2.5} />
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
