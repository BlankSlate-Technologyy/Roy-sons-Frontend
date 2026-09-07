"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Building2,
  Users,
  Award,
  HardHat,
  Shield,
  Lock,
  ChevronDown,
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

const FEATURED_PROJECTS = [
  {
    image: "/project-commercial-complex.jpg",
    category: "Commercial Development",
    title: "Commercial Complex",
    description: "A thoughtfully planned commercial complex bringing retail, corporate office spaces, and business services together in one modern destination.",
    href: "/projects/commercial-complex",
  },
  {
    image: "/project-gourmet-foods.jpg",
    category: "Food & Industrial Infrastructure",
    title: "Infrastructure Development (GOURMET FOODS)",
    description: "A professionally planned infrastructure development created to support modern food production, reliable facilities, and efficient supply chain operations.",
    href: "/projects/gourmet-foods",
  },
  {
    image: "/project-industrial.png",
    category: "Industrial Development",
    title: "Industrial Plant (GO)",
    description: "A purpose-built industrial facility developed to support efficient production, heavy-duty operational infrastructure, and long-term manufacturing growth.",
    href: "/projects/industrial-plant",
  },
  {
    image: "/project-residential-towers.jpg",
    category: "Residential Development",
    title: "Residential Towers (FANGROW)",
    description: "A contemporary residential development designed around modern lifestyles, comfort, efficient living, and community-focused architecture.",
    href: "/projects/residential-towers",
  },
  {
    image: "/project-roysons-infrastructure.jpg",
    category: "Commercial & Industrial Infrastructure",
    title: "Infrastructure Development (ROYSONS PVT. LTD.)",
    description: "An infrastructure development delivering functional, durable, and professionally designed facilities capable of supporting long-term business requirements.",
    href: "/projects/roysons-infrastructure",
  },
  {
    image: "/healthcare_infrastructure.jpg",
    category: "Healthcare",
    title: "Specialized Healthcare Facility",
    description: "Modern hospital and clean room infrastructure designed for critical care, advanced diagnostics, and surgical excellence.",
    href: "/projects/commercial-complex",
  },
];

const SUBJECT_OPTIONS = [
  "Construction",
  "Architecture",
  "Renewable Energy",
  "Infrastructure",
  "IT & Technology",
  "Project Management",
  "Other",
];

const STATS = [
  { icon: Building2, count: "150+", label: "Projects Completed" },
  { icon: Users, count: "100+", label: "Satisfied Clients" },
  { icon: Award, count: "15+", label: "Years of Excellence" },
  { icon: HardHat, count: "500+", label: "Skilled Professionals" },
];

function ProjectCard({ image, category, title, description, href }) {
  return (
    <div className="group flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:border-[#0a7a8c] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform scale-[1.20] transition-transform duration-700 ease-out group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#0a7a8c] mb-2">
          {category}
        </span>
        <h3 className="text-lg sm:text-[19px] font-black uppercase tracking-tight text-neutral-950 mb-2.5 leading-snug group-hover:text-[#0a7a8c] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-5">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-black uppercase tracking-[0.16em] text-neutral-950 hover:text-[#0a7a8c] self-start transition-all duration-200 group-hover:translate-x-1"
        >
          <span>View Project Details</span>
          <ArrowRight size={14} strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}

function QueryFormField({ id, label, placeholder, type = "text", required = false, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-bold text-neutral-950 uppercase tracking-[0.12em]"
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
        className="w-full bg-white border border-neutral-200 px-3.5 py-2.5 text-xs sm:text-[13px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] transition-colors rounded-[2px]"
      />
    </div>
  );
}

function QueryFormSelect({ id, label, options, required = false, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-bold text-neutral-950 uppercase tracking-[0.12em]"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-white border border-neutral-200 px-3.5 py-2.5 text-xs sm:text-[13px] text-neutral-700 outline-none focus:border-[#0a7a8c] transition-colors rounded-[2px] appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Select a subject
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-neutral-900 text-xs sm:text-[13px]">
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

export default function ProjectsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/project-query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit project query.");
      }

      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
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
      <HeaderNavbar activeRoute="/projects" />

      {/* Projects Hero Banner - Centered Gradient Design */}
      <section 
        className="projects-hero-gradient services-hero-gradient relative py-10 sm:py-12 lg:py-16 px-6 overflow-hidden text-center flex flex-col items-center justify-center border-b border-[#0a7a8c]/20"
        style={{
          background: "linear-gradient(90deg, #005f77 0%, #088192 50%, #009e75 100%)",
          backgroundColor: "#088192",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Top Tag */}
          <span 
            className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/90 mb-2 block"
            style={{ color: "rgba(255, 255, 255, 0.9)" }}
          >
            WHAT WE DO
          </span>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 leading-tight drop-shadow-sm"
            style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
          >
            Our Projects
          </h1>

          <p 
            className="text-base sm:text-lg md:text-xl lg:text-[21px] text-white/95 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-7 font-normal drop-shadow-sm"
            style={{ color: "rgba(255, 255, 255, 0.95)", WebkitTextFillColor: "rgba(255, 255, 255, 0.95)" }}
          >
            ROYSONS Pvt. Ltd. offers a wide range of innovative and
            reliable projects to meet the diverse needs of our clients
            across multiple industries.
          </p>

          <div>
            <Link
              href="#project-query-section"
              id="projects-hero-cta"
              className="inline-flex items-center justify-center bg-white hover:bg-neutral-100 text-[#042E3A] font-bold px-8 py-3 sm:py-3.5 text-xs sm:text-sm rounded-full transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.25)] hover:scale-105 active:scale-95 whitespace-nowrap"
              style={{ borderRadius: "9999px", backgroundColor: "#ffffff", color: "#042E3A" }}
            >
              <span className="text-[#042E3A] font-bold uppercase tracking-wider text-xs sm:text-sm whitespace-nowrap">Request a Query</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-neutral-950 mb-2">
                Featured Projects
              </h2>
              <div className="h-[3px] w-14 bg-gradient-to-r from-[#042E3A] to-[#0a7a8c] mb-8" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {FEATURED_PROJECTS.map((project, idx) => (
                  <ProjectCard key={idx} {...project} />
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Link
                  href="/projects/all"
                  id="view-all-projects-btn"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] text-white px-10 py-3.5 text-xs sm:text-sm font-black uppercase tracking-[0.18em] transition-all duration-300 rounded-[2px] shadow-[0_4px_16px_rgba(10,122,140,0.35)]"
                >
                  View All <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            <div id="project-query-section" className="lg:w-[320px] flex-shrink-0 scroll-mt-24">
              <div className="bg-white border border-neutral-200 p-6 sm:p-7 sticky top-24 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#f0fdfa] border border-[#0a7a8c]/30 rounded-md flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#042E3A] hover:to-[#0a7a8c] group cursor-pointer">
                    <Shield size={18} className="text-[#0a7a8c] transition-colors duration-300 group-hover:text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-[0.1em] text-neutral-950 leading-tight">
                      General Query
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed mb-5">
                  Have a question or need more information? Fill out the form and
                  our team will get back to you shortly.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 gap-3">
                    <div className="w-10 h-10 bg-[#0a7a8c] rounded-full flex items-center justify-center">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <p className="text-sm font-black uppercase tracking-widest text-neutral-950 text-center">
                      Query Submitted!
                    </p>
                    <p className="text-xs text-neutral-500 text-center">
                      We&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <QueryFormField
                      id="sidebar-fullname"
                      label="Full Name"
                      placeholder="Enter your full name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                    <QueryFormField
                      id="sidebar-email"
                      label="Email Address"
                      placeholder="Enter your email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <QueryFormField
                      id="sidebar-phone"
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                    <QueryFormSelect
                      id="sidebar-subject"
                      label="Subject"
                      options={SUBJECT_OPTIONS}
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="sidebar-message"
                        className="text-xs font-bold text-neutral-950 uppercase tracking-[0.12em]"
                      >
                        Your Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="sidebar-message"
                        rows={4}
                        placeholder="Write your message..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-3.5 py-2.5 text-xs sm:text-[13px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] transition-colors rounded-[2px] resize-none"
                      />
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-[2px] text-xs font-medium tracking-wide">
                        ⚠️ {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      id="sidebar-query-submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] disabled:bg-neutral-400 text-white py-3.5 text-xs sm:text-[13px] font-black uppercase tracking-[0.18em] transition-all duration-300 rounded-[2px] cursor-pointer disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(10,122,140,0.35)]"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Query"} <ArrowRight size={14} strokeWidth={2.5} />
                    </button>

                    <div className="flex items-center gap-2 text-neutral-400 text-xs font-medium pt-1">
                      <Lock size={13} />
                      <span>Your information is safe with us. We respect your privacy.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Strip - Button Gradient Design */}
      <section 
        data-dark-section="true"
        className="roysons-preserve-dark relative py-12 sm:py-16 overflow-hidden border-t border-b border-[#0a7a8c]/30 shadow-md"
        style={{
          background: "linear-gradient(90deg, #042E3A 0%, #075d6d 50%, #0a7a8c 100%)",
          backgroundColor: "#075d6d",
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(({ icon: Icon, count, label }, idx) => (
              <div key={idx} className="flex items-center gap-4 sm:gap-5 group cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm shadow-[0_4px_16px_rgba(0,0,0,0.2)] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40">
                  <Icon
                    size={28}
                    strokeWidth={1.8}
                    className="text-white transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                  />
                </div>
                <div>
                  <p 
                    className="text-3xl sm:text-4xl font-black text-white leading-none tracking-tight drop-shadow-sm"
                    style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff" }}
                  >
                    {count}
                  </p>
                  <p 
                    className="text-xs sm:text-[13px] text-white/90 font-bold tracking-wider mt-2 uppercase"
                    style={{ color: "rgba(255, 255, 255, 0.9)", WebkitTextFillColor: "rgba(255, 255, 255, 0.9)" }}
                  >
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
