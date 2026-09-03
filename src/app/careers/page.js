"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  Users,
  GraduationCap,
  TrendingUp,
  Award,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  MapPin,
  Clock,
  Send,
  Building2,
  Mail,
  Phone,
  Sparkles,
  ChevronDown
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

const CAREER_BENEFITS = [
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "Rapid career advancement pathways across 26+ diversified business entities."
  },
  {
    icon: Award,
    title: "Competitive Compensation",
    description: "Industry-leading salary packages, performance bonuses, and health benefits."
  },
  {
    icon: Building2,
    title: "Multi-Domain Exposure",
    description: "Work across Healthcare, Technology, Energy, Defense, Infrastructure, and Trade."
  },
  {
    icon: GraduationCap,
    title: "Learning & Mentorship",
    description: "Executive training, technical certifications, and direct mentorship from industry leaders."
  }
];

const OPEN_POSITIONS = [
  {
    id: "eng-01",
    title: "Senior Project Engineer (EPC & Infrastructure)",
    department: "Construction & Engineering",
    location: "Islamabad, Pakistan",
    type: "Full-Time",
    experience: "5+ Years",
    description: "Lead civil and structural turnkey projects, oversee site operations and quality compliance."
  },
  {
    id: "tech-02",
    title: "Full-Stack AI Solutions Developer",
    department: "Information Technology & AI",
    location: "Lahore / Hybrid",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Develop enterprise cloud applications, AI integrations, and intelligent automation systems."
  },
  {
    id: "med-03",
    title: "Healthcare Technology Specialist",
    department: "Medical Technologies",
    location: "Lahore, Pakistan",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Manage medical equipment deployment, hospital engineering clean room installations, and QA."
  },
  {
    id: "trade-04",
    title: "International Supply Chain Manager",
    department: "Trade & Global Logistics",
    location: "Karachi, Pakistan",
    type: "Full-Time",
    experience: "6+ Years",
    description: "Oversee worldwide procurement, customs clearance, and global import-export distribution."
  },
  {
    id: "fin-05",
    title: "Corporate Financial Analyst",
    department: "Finance & Strategy",
    location: "Lahore, Pakistan",
    type: "Full-Time",
    experience: "3+ Years",
    description: "Conduct financial modeling, investment appraisal, and feasibility studies for new acquisitions."
  },
  {
    id: "legal-06",
    title: "Regulatory & Compliance Consultant",
    department: "Pharmaceutical & Legal",
    location: "Islamabad, Pakistan",
    type: "Full-Time",
    experience: "4+ Years",
    description: "Handle regulatory approvals, licensing, and corporate statutory compliance across group companies."
  }
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState("");
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    linkedin: "",
    coverNote: ""
  });

  const handleApplyClick = (roleTitle) => {
    setSelectedRole(roleTitle);
    setFormData((prev) => ({ ...prev, position: roleTitle }));
    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/careers-apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit application.");
      }

      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        linkedin: "",
        coverNote: ""
      });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <HeaderNavbar activeRoute="/careers" />

      {/* Hero Section */}
      <section className="relative bg-[#101518] py-20 sm:py-24 px-4 sm:px-6 overflow-hidden border-b border-neutral-800">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/hero-building.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101518] via-[#101518]/90 to-transparent" />

        <div className="relative mx-auto max-w-screen-xl z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-bold uppercase tracking-widest">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight size={10} className="text-[#C6A15A]" />
                <span className="text-[#C6A15A]">Careers</span>
              </li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#C6A15A] uppercase mb-3 block">
              JOIN ROYSONS GROUP
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-[0.12em] text-white mb-5 leading-tight">
              Build Your Future With Us
            </h1>
            <p className="text-[13px] sm:text-[14px] text-neutral-300 leading-relaxed font-light mb-8">
              Be a part of a forward-thinking conglomerate driving innovation across 26+ group companies. We empower visionary professionals to solve critical challenges and shape national industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] text-white font-black px-7 py-3.5 text-[11px] tracking-[0.16em] uppercase rounded-[3px] transition-all duration-300 shadow-[0_4px_16px_rgba(10,122,140,0.35)] hover:shadow-[0_8px_26px_rgba(13,148,136,0.55)] hover:-translate-y-0.5"
              >
                <span className="text-white font-black">View Open Positions</span>
                <ArrowRight size={14} strokeWidth={2.5} className="text-white" />
              </a>
              <a
                href="#application-form"
                className="inline-flex items-center gap-2 border border-neutral-600 hover:border-white text-white font-bold px-6 py-3 text-[11px] tracking-[0.16em] uppercase rounded-sm transition-all duration-300 hover:bg-white/5"
              >
                <span>Drop Your Resume</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Build Your Career Here */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-100" data-aos="fade-up">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14" data-aos="fade-up" data-aos-delay="100">
            <span className="text-[10px] font-black tracking-[0.25em] text-neutral-400 uppercase mb-3 block">
              WHY JOIN US
            </span>
            <h2 className="text-[24px] sm:text-[28px] font-black uppercase tracking-[0.16em] text-neutral-950">
              Life at ROYSONS
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-[#C6A15A]" />
            <p className="text-[13px] text-neutral-500 mt-4 max-w-xl mx-auto leading-relaxed">
              We foster an environment of continuous learning, entrepreneurial spirit, and merit-based recognition.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREER_BENEFITS.map((benefit, index) => {
              const Icon = benefit.icon;
              const staggerDelay = (index + 1) * 100;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={staggerDelay}
                  className="bg-white border border-neutral-200 p-7 rounded-sm hover:border-[#C6A15A] hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#101518] border border-neutral-800 rounded-sm flex items-center justify-center mb-5 group-hover:border-[#C6A15A]/70 group-hover:bg-[#1a2127] transition-all duration-300">
                    <Icon size={22} className="text-white group-hover:text-[#C6A15A] transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[15px] font-bold uppercase tracking-wider text-neutral-950 mb-2 group-hover:text-[#C6A15A] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-[12.5px] text-neutral-500 leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-16 sm:py-20 bg-[#101518] text-white border-b border-neutral-800" data-aos="fade-up">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14" data-aos="fade-up" data-aos-delay="100">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#C6A15A] uppercase mb-3 block">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="text-[24px] sm:text-[28px] font-black uppercase tracking-[0.16em] text-white">
              Open Positions
            </h2>
            <div className="mx-auto mt-4 h-[3px] w-12 bg-[#C6A15A]" />
            <p className="text-[13px] text-neutral-400 mt-4 max-w-xl mx-auto leading-relaxed font-light">
              Explore open roles across our corporate headquarters and specialized subsidiaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPEN_POSITIONS.map((job, index) => {
              const staggerDelay = ((index % 2) + 1) * 100;
              return (
                <div
                  key={job.id}
                  data-aos="fade-up"
                  data-aos-delay={staggerDelay}
                  className="bg-[#161c20]/90 border border-neutral-800 p-6 sm:p-7 rounded-sm hover:border-[#C6A15A]/60 hover:bg-[#1a2127] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#C6A15A] bg-[#C6A15A]/10 px-2.5 py-1 rounded-sm border border-[#C6A15A]/30">
                        {job.department}
                      </span>
                      <span className="text-[11px] text-neutral-400 flex items-center gap-1 font-medium">
                        <Clock size={12} className="text-[#C6A15A]" /> {job.type}
                      </span>
                    </div>

                    <h3 className="text-[16px] sm:text-[17px] font-bold uppercase tracking-wide text-white mb-2.5 group-hover:text-[#C6A15A] transition-colors duration-300">
                      {job.title}
                    </h3>

                    <p className="text-[12.5px] text-neutral-400 leading-relaxed font-light mb-5">
                      {job.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-4 text-[11.5px] text-neutral-400">
                      <span className="flex items-center gap-1">
                        <MapPin size={13} className="text-[#C6A15A]" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={13} className="text-[#C6A15A]" /> {job.experience}
                      </span>
                    </div>

                    <button
                      onClick={() => handleApplyClick(job.title)}
                      className="inline-flex items-center gap-1.5 text-[11px] font-black tracking-[0.15em] uppercase text-[#0a7a8c] hover:text-[#0d9488] transition-colors duration-200 cursor-pointer group/btn"
                    >
                      <span className="text-[#0a7a8c] group-hover/btn:text-[#0d9488]">Apply Now</span>
                      <ArrowRight size={13} strokeWidth={2.5} className="text-[#0a7a8c] group-hover/btn:text-[#0d9488] group-hover/btn:translate-x-0.5 transition-all duration-200" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 sm:py-20 bg-white" data-aos="fade-up">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-neutral-200 rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-sm">
            {/* Left Info Panel */}
            <div className="lg:w-1/3 bg-[#101518] text-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 border border-neutral-800 bg-[#161c20] rounded-sm flex items-center justify-center mb-6">
                  <Sparkles size={18} className="text-[#C6A15A]" />
                </div>
                <h3 className="text-[20px] font-black uppercase tracking-[0.14em] text-white mb-3">
                  Submit Your Application
                </h3>
                <div className="h-[2px] w-8 bg-[#C6A15A] mb-5" />
                <p className="text-[12.5px] text-neutral-400 leading-relaxed font-light mb-8">
                  Didn&apos;t find an exact match for your profile? Submit your resume for our executive talent pool and we will reach out when a relevant position opens.
                </p>

                <div className="space-y-4 pt-4 border-t border-neutral-800">
                  <div className="flex items-center gap-3 text-[12px] text-neutral-300">
                    <Mail size={15} className="text-[#C6A15A] flex-shrink-0" />
                    <span>careers@roysons.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-[12px] text-neutral-300">
                    <Phone size={15} className="text-[#C6A15A] flex-shrink-0" />
                    <span>+92 (42) 111-769-766</span>
                  </div>
                  <div className="flex items-center gap-3 text-[12px] text-neutral-300">
                    <MapPin size={15} className="text-[#C6A15A] flex-shrink-0" />
                    <span>ROYSONS Corporate Tower, Lahore, Pakistan</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-neutral-800/80">
                <p className="text-[11px] text-neutral-500 font-light">
                  ROYSONS Pvt. Ltd. is an equal opportunity employer valuing diversity and inclusion.
                </p>
              </div>
            </div>

            {/* Right Application Form */}
            <div className="flex-1 p-8 sm:p-10 lg:p-12">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[350px] text-center">
                  <div className="w-16 h-16 bg-[#101518] border border-[#C6A15A] rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={28} className="text-[#C6A15A]" />
                  </div>
                  <h4 className="text-[18px] font-black uppercase tracking-wider text-neutral-950 mb-2">
                    Application Received!
                  </h4>
                  <p className="text-[12.5px] text-neutral-500 max-w-md leading-relaxed mb-6">
                    Thank you for your interest in joining ROYSONS Pvt. Ltd. Our recruitment committee will review your profile and contact shortlisted candidates.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-[11px] font-bold uppercase tracking-widest text-[#C6A15A] hover:underline cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10.5px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#C6A15A] transition-colors rounded-[2px]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10.5px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#C6A15A] transition-colors rounded-[2px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10.5px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#C6A15A] transition-colors rounded-[2px]"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10.5px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                        Total Experience <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 4 Years"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#C6A15A] transition-colors rounded-[2px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10.5px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                        Target Position / Field <span className="text-red-500">*</span>
                      </label>
                      <div
                        className="relative"
                        tabIndex={0}
                        onBlur={(e) => {
                          if (!e.currentTarget.contains(e.relatedTarget)) setIsRoleDropdownOpen(false);
                        }}
                      >
                        <div
                          onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                          className={`w-full bg-[#101518] border ${
                            isRoleDropdownOpen ? "border-[#C6A15A]" : "border-neutral-800"
                          } px-4 py-3 text-[12px] text-[#C6A15A] outline-none transition-colors rounded-[2px] cursor-pointer flex justify-between items-center`}
                        >
                          <span className="truncate">
                            {formData.position || "Select a Position / Domain"}
                          </span>
                          <ChevronDown
                            size={14}
                            className={`text-neutral-400 transition-transform duration-300 ${
                              isRoleDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {isRoleDropdownOpen && (
                          <div className="absolute z-50 w-full mt-1 bg-[#101518] border border-neutral-800 rounded-[2px] max-h-56 overflow-y-auto shadow-2xl">
                            <div
                              onClick={() => {
                                setFormData({ ...formData, position: "General / Other Role" });
                                setIsRoleDropdownOpen(false);
                              }}
                              className="px-4 py-2.5 text-[11.5px] text-[#C6A15A] hover:bg-[#C6A15A] hover:text-black cursor-pointer transition-colors"
                            >
                              General / Executive Pool
                            </div>
                            {OPEN_POSITIONS.map((p) => (
                              <div
                                key={p.id}
                                onClick={() => {
                                  setFormData({ ...formData, position: p.title });
                                  setIsRoleDropdownOpen(false);
                                }}
                                className="px-4 py-2.5 text-[11.5px] text-white hover:bg-[#C6A15A] hover:text-black cursor-pointer transition-colors"
                              >
                                {p.title}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10.5px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                        LinkedIn Profile / Portfolio Link
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#C6A15A] transition-colors rounded-[2px]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10.5px] font-bold text-neutral-950 uppercase tracking-[0.14em]">
                      Cover Note / Professional Summary <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly highlight your key achievements, areas of expertise, and why you wish to join ROYSONS..."
                      value={formData.coverNote}
                      onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                      className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-[#C6A15A] transition-colors rounded-[2px] resize-none"
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[2px] text-[11.5px] font-medium">
                      {submitError}
                    </div>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] disabled:opacity-50 text-white font-black px-9 py-4 text-[11px] tracking-[0.18em] uppercase rounded-[3px] transition-all duration-300 cursor-pointer shadow-[0_4px_16px_rgba(10,122,140,0.35)] hover:shadow-[0_8px_26px_rgba(13,148,136,0.55)] hover:-translate-y-0.5"
                    >
                      <span className="text-white font-black">{isSubmitting ? "Submitting..." : "Submit Application"}</span>
                      <Send size={13} strokeWidth={2.5} className="text-white" />
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
