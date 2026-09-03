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
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0a7a8c] mb-1.5">
          {category}
        </span>
        <h3 className="text-[15px] font-black uppercase tracking-tight text-neutral-950 mb-2 leading-snug group-hover:text-[#0a7a8c] transition-colors">
          {title}
        </h3>
        <p className="text-[12.5px] text-neutral-600 leading-relaxed flex-1 mb-5">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.16em] text-neutral-950 hover:text-[#0a7a8c] self-start transition-all duration-200 group-hover:translate-x-1"
        >
          <span>View Project Details</span>
          <ArrowRight size={12} strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}

function QueryFormField({ id, label, placeholder, type = "text", required = false, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-[10px] font-bold text-neutral-950 uppercase tracking-[0.12em]"
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
        className="w-full bg-white border border-neutral-200 px-3 py-2.5 text-[11.5px] text-neutral-700 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px]"
      />
    </div>
  );
}

function QueryFormSelect({ id, label, options, required = false, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-[10px] font-bold text-neutral-950 uppercase tracking-[0.12em]"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full bg-white border border-neutral-200 px-3 py-2.5 text-[11.5px] text-neutral-500 outline-none focus:border-neutral-950 transition-colors rounded-[2px] appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Select a subject
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} className="text-black">
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown
          size={13}
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

      <section className="bg-white border-b border-neutral-100 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-stretch min-h-[240px]">
            <div className="flex-1 py-12 pr-0 lg:pr-16 flex flex-col justify-center">
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex items-center gap-2 text-[11px] text-neutral-500 font-medium">
                  <li>
                    <Link href="/" className="hover:text-black transition-colors">
                      Home
                    </Link>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight size={12} />
                    <span className="text-neutral-400">Projects</span>
                  </li>
                </ol>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight mb-4 leading-[1.08]">
                Our Projects
              </h1>
              <p className="text-[12.5px] text-neutral-500 leading-relaxed max-w-sm">
                Excellence in every project we deliver. Explore our diverse
                portfolio of successfully completed projects across multiple
                industries.
              </p>
            </div>

            <div className="hidden lg:block w-[500px] xl:w-[580px] relative overflow-hidden">
              <Image
                src="/bright-corporate-building.jpg"
                alt="Roy Sons project portfolio"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 min-w-0">
              <h2 className="text-[16px] font-black uppercase tracking-[0.18em] text-neutral-950 mb-1">
                Featured Projects
              </h2>
              <div className="h-[3px] w-10 bg-gradient-to-r from-[#042E3A] to-[#0a7a8c] mb-8" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {FEATURED_PROJECTS.map((project, idx) => (
                  <ProjectCard key={idx} {...project} />
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <Link
                  href="/projects/all"
                  id="view-all-projects-btn"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] text-white px-9 py-3.5 text-[10.5px] font-black uppercase tracking-[0.18em] transition-all duration-300 rounded-[2px] shadow-[0_4px_16px_rgba(10,122,140,0.35)]"
                >
                  View All <ArrowRight size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            <div className="lg:w-[300px] flex-shrink-0">
              <div className="bg-white border border-neutral-200 p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-[#f0fdfa] border border-[#0a7a8c]/30 rounded-sm flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#042E3A] hover:to-[#0a7a8c] group cursor-pointer">
                    <Shield size={17} className="text-[#0a7a8c] transition-colors duration-300 group-hover:text-white" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-black uppercase tracking-[0.1em] text-neutral-950 leading-tight">
                      General Query
                    </h3>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-500 leading-relaxed mb-5">
                  Have a question or need more information? Fill out the form and
                  our team will get back to you shortly.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-8 gap-3">
                    <div className="w-10 h-10 bg-[#0a7a8c] rounded-full flex items-center justify-center">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-neutral-950 text-center">
                      Query Submitted!
                    </p>
                    <p className="text-[10.5px] text-neutral-500 text-center">
                      We&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
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

                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="sidebar-message"
                        className="text-[10px] font-bold text-neutral-950 uppercase tracking-[0.12em]"
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
                        className="w-full bg-white border border-neutral-200 px-3 py-2.5 text-[11.5px] text-neutral-700 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] transition-colors rounded-[2px] resize-none"
                      />
                    </div>

                    {submitError && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-[2px] text-[11px] font-medium tracking-wide">
                        ⚠️ {submitError}
                      </div>
                    )}

                    <button
                      type="submit"
                      id="sidebar-query-submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] disabled:bg-neutral-400 text-white py-3 text-[10px] font-black uppercase tracking-[0.18em] transition-all duration-300 rounded-[2px] cursor-pointer disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(10,122,140,0.35)]"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Query"} <ArrowRight size={12} strokeWidth={2.5} />
                    </button>

                    <div className="flex items-center gap-2 text-neutral-400 text-[10px] font-medium pt-1">
                      <Lock size={11} />
                      <span>Your information is safe with us. We respect your privacy.</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#f0fdfa] border-t border-[#0a7a8c]/15">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(({ icon: Icon, count, label }, idx) => (
              <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#042E3A] via-[#075d6d] to-[#0a7a8c] border-2 border-[#0d9488]/40 shadow-[0_4px_16px_rgba(10,122,140,0.3)] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_6px_22px_rgba(13,148,136,0.5)]">
                  <Icon
                    size={26}
                    strokeWidth={1.8}
                    className="text-white transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[#042E3A] leading-none">
                    {count}
                  </p>
                  <p className="text-[11px] text-[#042E3A]/75 font-medium tracking-wide mt-1">
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
