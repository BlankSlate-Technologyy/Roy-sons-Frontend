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
    image: "/project-commercial.png",
    category: "Commercial",
    title: "Corporate Office Complex",
    description: "A state-of-the-art office complex designed for modern businesses.",
    href: "/projects/corporate-office-complex",
  },
  {
    image: "/project-infrastructure.png",
    category: "Infrastructure",
    title: "City Infrastructure Development",
    description: "Major infrastructure project to improve urban connectivity and mobility.",
    href: "/projects/city-infrastructure",
  },
  {
    image: "/project-industrial.png",
    category: "Industrial",
    title: "Industrial Manufacturing Plant",
    description: "High-performance manufacturing facility built with precision engineering.",
    href: "/projects/industrial-manufacturing-plant",
  },
  {
    image: "/project-residential.png",
    category: "Residential",
    title: "Luxury Residential Towers",
    description: "Premium residential towers offering luxury and comfort.",
    href: "/projects/luxury-residential-towers",
  },
  {
    image: "/project-commercial.png",
    category: "Renewable Energy",
    title: "Solar Energy Park",
    description: "Sustainable solar power project contributing to a greener future.",
    href: "/projects/solar-energy-park",
  },
  {
    image: "/project-infrastructure.png",
    category: "Healthcare",
    title: "Healthcare Facility",
    description: "Modern healthcare facility designed for better patient care.",
    href: "/projects/healthcare-facility",
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
    <div className="group flex flex-col bg-white border border-neutral-200 overflow-hidden hover:border-neutral-950 hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-[9.5px] font-black uppercase tracking-[0.2em] text-neutral-400 mb-1.55">
          {category}
        </span>
        <h3 className="text-[13px] font-black uppercase tracking-[0.08em] text-neutral-950 mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-[11.5px] text-neutral-500 leading-relaxed flex-1 mb-4">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-black border-b border-black pb-0.5 self-start hover:gap-3 transition-all duration-200"
        >
          View Details <ArrowRight size={11} strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}

function QueryFormField({ id, label, placeholder, type = "text", required = false }) {
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
        className="w-full bg-white border border-neutral-200 px-3 py-2.5 text-[11.5px] text-neutral-700 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px]"
      />
    </div>
  );
}

function QueryFormSelect({ id, label, options, required = false }) {
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
          defaultValue=""
          className="w-full bg-white border border-neutral-200 px-3 py-2.5 text-[11.5px] text-neutral-500 outline-none focus:border-neutral-950 transition-colors rounded-[2px] appearance-none cursor-pointer"
        >
          <option value="" disabled>
            Select a subject
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt.toLowerCase().replace(/\s+/g, "-")}>
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
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
                src="/hero-building.png"
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
              <div className="h-[3px] w-10 bg-neutral-950 mb-8" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {FEATURED_PROJECTS.map((project, idx) => (
                  <ProjectCard key={idx} {...project} />
                ))}
              </div>

              <div className="flex justify-center mt-10">
                <Link
                  href="/projects/all"
                  id="view-all-projects-btn"
                  className="inline-flex items-center gap-3 bg-black text-white px-9 py-3.5 text-[10.5px] font-black uppercase tracking-[0.18em] hover:bg-neutral-800 transition-colors rounded-[2px]"
                >
                  View All Projects <ArrowRight size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            <div className="lg:w-[300px] flex-shrink-0">
              <div className="bg-white border border-neutral-200 p-6 sticky top-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 bg-black rounded-sm flex items-center justify-center flex-shrink-0">
                    <Shield size={17} className="text-white" strokeWidth={1.8} />
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
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
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
                    />
                    <QueryFormField
                      id="sidebar-email"
                      label="Email Address"
                      placeholder="Enter your email"
                      type="email"
                      required
                    />
                    <QueryFormField
                      id="sidebar-phone"
                      label="Phone Number"
                      placeholder="Enter your phone number"
                    />
                    <QueryFormSelect
                      id="sidebar-subject"
                      label="Subject"
                      options={SUBJECT_OPTIONS}
                      required
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
                        className="w-full bg-white border border-neutral-200 px-3 py-2.5 text-[11.5px] text-neutral-700 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="sidebar-query-submit"
                      className="w-full flex items-center justify-center gap-2.5 bg-black text-white py-3 text-[10px] font-black uppercase tracking-[0.18em] hover:bg-neutral-800 transition-colors rounded-[2px] cursor-pointer"
                    >
                      Submit Query <ArrowRight size={12} strokeWidth={2.5} />
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

      <section className="py-14 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map(({ icon: Icon, count, label }, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <Icon
                  size={40}
                  strokeWidth={1.2}
                  className="text-neutral-300 flex-shrink-0"
                />
                <div>
                  <p className="text-3xl font-black text-neutral-950 leading-none">
                    {count}
                  </p>
                  <p className="text-[11px] text-neutral-500 font-medium tracking-wide mt-1">
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
