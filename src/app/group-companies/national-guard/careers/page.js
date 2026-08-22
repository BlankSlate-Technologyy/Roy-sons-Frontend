"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  UserCheck,
  Building2,
  FileCheck,
  Send,
  HeartPulse,
  Briefcase,
  DollarSign,
  ShieldAlert,
} from "lucide-react";
import {
  theme,
  NationalGuardNavbar,
  NationalGuardFooter,
  SectionLabel,
  SectionHeading,
} from "../components/NationalGuardShared";

const PERKS = [
  {
    icon: DollarSign,
    title: "Timely Monthly Salary",
    desc: "Guaranteed prompt payroll disbursed directly to bank accounts without deductions, along with performance duty allowances.",
  },
  {
    icon: HeartPulse,
    title: "Medical & Life Insurance",
    desc: "Complete operational coverage, accidental disability protection, and EOBI / Social Security benefits for all active officers.",
  },
  {
    icon: Building2,
    title: "Free Barrack Accommodation",
    desc: "Clean, furnished living facilities with hygienic mess services provided near major deployment zones.",
  },
  {
    icon: Award,
    title: "Promotions & Training",
    desc: "Regular refresher drills, weapon certification updates, and clear promotion ladder to Head Guard and Field Supervisor ranks.",
  },
];

const JOB_OPENINGS = [
  {
    id: "armed-guard",
    title: "Armed Security Guard (Ex-Army / Frontier Corps)",
    type: "Full-Time • Shift Based (12 Hours)",
    location: "Lahore, Islamabad, Karachi, Multan, Faisalabad",
    experience: "Ex-Serviceman (Army / FC / Rangers) or Civilian with Valid Arms License",
    responsibilities: [
      "Vigilant static post guarding at designated bank, embassy, or corporate gate",
      "Strict weapon safety handling and authorized round maintenance",
      "Visitor and vehicle entry logging in coordination with gate reception",
    ],
  },
  {
    id: "civilian-guard",
    title: "Unarmed Corporate Security Officer",
    type: "Full-Time • Day / Night Shifts",
    location: "Major Commercial Plazas & Residential Societies",
    experience: "Matriculation / Intermediate • Minimum Height: 5'8\" • Age: 22–45 Years",
    responsibilities: [
      "Lobby reception management and turnstile badge scanning",
      "Operating walk-through metal detectors and hand-held search wands",
      "Hourly security patrol logbook registers and premises checks",
    ],
  },
  {
    id: "field-supervisor",
    title: "Security Field Supervisor / Area Inspector",
    type: "Full-Time • Day & Night Mobile Patrol",
    location: "Lahore & Rawalpindi / Islamabad",
    experience: "Retired JCO (Naib Subedar / Subedar / Havildar) • Valid Driving License",
    responsibilities: [
      "Conducting surprise night inspections and duty turn-out audits across posts",
      "Managing guard shift handovers, attendance registers, and replacement rosters",
      "Serving as direct field liaison with client facility management",
    ],
  },
  {
    id: "cctv-controller",
    title: "CCTV & Alarm Control Room Operator",
    type: "Full-Time • 8-Hour Rotating Shifts",
    location: "Central Command Center, Lahore",
    experience: "Diploma in IT / CCTV Operations • 1+ Year Experience in Security Control Room",
    responsibilities: [
      "Real-time video feed monitoring across 50+ remote site camera streams",
      "Prompt dispatch of QRT mobile units upon unauthorized alarm triggers",
      "Maintaining digital incident logs and daily surveillance shift reports",
    ],
  },
];

export default function NationalGuardCareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cnic: "",
    city: "",
    position: "Armed Security Guard (Ex-Army / Frontier Corps)",
    exMilitary: "No",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/company-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companySlug: "national-guard",
          companyName: "National Guard Security Services",
          fullName: formData.name,
          email: "careers@nationalguard.com.pk",
          phone: formData.phone,
          subject: `Security Career Application: ${formData.position}`,
          message: formData.message || `CNIC: ${formData.cnic}, City: ${formData.city}, Ex-Military: ${formData.exMilitary}`,
          additionalFields: {
            cnic: formData.cnic,
            city: formData.city,
            position: formData.position,
            exMilitary: formData.exMilitary,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Application received! Our recruitment desk will call you for interview and document verification.",
        });
        setFormData({
          name: "",
          phone: "",
          cnic: "",
          city: "",
          position: "Armed Security Guard (Ex-Army / Frontier Corps)",
          exMilitary: "No",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit career application. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected network error occurred. Please try again or contact our helpline.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#1B365D] font-sans antialiased overflow-x-hidden">
      <NationalGuardNavbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <SectionLabel>Recruitment &amp; Careers</SectionLabel>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight uppercase mb-6" style={{ color: theme.navy }}>
                Join Pakistan&apos;s Most <span style={{ color: theme.gold }}>Disciplined Security Force</span>
              </h1>

              <p className="text-base sm:text-lg font-medium leading-relaxed mb-8" style={{ color: theme.textMuted }}>
                We are actively hiring retired military personnel, experienced guards, CCTV controllers, and area supervisors. Join an honorable security enterprise that values your service with competitive pay, medical benefits, and free accommodation.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>View Current Openings</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#apply-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border transition-all duration-300 hover:bg-slate-50 cursor-pointer"
                  style={{ borderColor: theme.border, color: theme.navy }}
                >
                  <span>Apply Online</span>
                </a>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 w-full flex justify-center">
              <div className="relative w-full max-w-[500px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-50" style={{ borderColor: theme.border }}>
                <Image
                  src="/national-guard-team.png"
                  alt="National Guard Security Officers"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full" style={{ borderColor: theme.border }}>
                    <p className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: theme.gold }}>
                      Equal Opportunity Employer
                    </p>
                    <p className="text-sm font-bold" style={{ color: theme.navy }}>
                      Ex-Army · FC · Rangers &amp; Civilian Candidates Welcome
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Perks Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Employee Benefits</SectionLabel>
            <SectionHeading center className="mb-4">Why Work With National Guard?</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              We ensure our security personnel are well-supported so they can perform their duties with absolute dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="ng-card-hover p-8 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${theme.navy}10` }}>
                      <Icon size={26} style={{ color: theme.navy }} />
                    </div>
                    <h3 className="text-lg font-bold mb-3" style={{ color: theme.navy }}>
                      {perk.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium leading-relaxed" style={{ color: theme.textMuted }}>
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active Job Openings */}
      <section id="openings" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionLabel center>Open Vacancies</SectionLabel>
            <SectionHeading center className="mb-4">Current Opportunities</SectionHeading>
            <p className="text-sm sm:text-base font-medium" style={{ color: theme.textMuted }}>
              Walk-in interviews conducted daily at our Regional Recruitment Centers in Lahore and Rawalpindi.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-3xl border bg-white shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                style={{ borderColor: theme.border }}
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-50 border" style={{ color: theme.gold, borderColor: theme.border }}>
                      {job.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <MapPin size={13} />
                      {job.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold" style={{ color: theme.navy }}>
                    {job.title}
                  </h3>

                  <p className="text-xs font-bold text-slate-700">
                    Criteria: <span className="font-normal text-slate-600">{job.experience}</span>
                  </p>

                  <ul className="space-y-1 pt-2">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="text-xs font-medium text-slate-600 flex items-center gap-1.5">
                        <CheckCircle2 size={13} style={{ color: theme.gold }} className="flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="#apply-form"
                    onClick={() => setFormData((prev) => ({ ...prev, position: job.title }))}
                    className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all hover:opacity-95 flex items-center gap-2 cursor-pointer"
                    style={{ backgroundColor: theme.navy }}
                  >
                    <span>Apply For Position</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Application Form */}
      <section id="apply-form" className="py-20 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <SectionLabel>Recruitment Desk</SectionLabel>
              <SectionHeading className="mb-4">Submit Your Application</SectionHeading>
              <p className="text-sm sm:text-base font-medium leading-relaxed mb-6" style={{ color: theme.textMuted }}>
                Fill out the quick form below. Our recruitment officers will verify your credentials with NADRA and schedule your document verification and uniform measurement.
              </p>

              <div className="space-y-4 text-xs font-medium text-slate-600">
                <div className="flex items-start gap-3 p-4 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <ShieldCheck size={20} className="flex-shrink-0" style={{ color: theme.gold }} />
                  <div>
                    <h5 className="font-bold" style={{ color: theme.navy }}>Required Documents For Interview</h5>
                    <p>Original CNIC, 4 Passport Photos, Police Character Certificate, Ex-Army Discharge Book (for ex-servicemen).</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl border bg-slate-50" style={{ borderColor: theme.border }}>
                  <Phone size={18} className="flex-shrink-0" style={{ color: theme.gold }} />
                  <div>
                    <h5 className="font-bold" style={{ color: theme.navy }}>Direct Recruitment Helpline</h5>
                    <a href="tel:+923218431665" className="font-bold hover:underline" style={{ color: theme.navy }}>
                      +92 321 8431665 (Mon–Sat, 9AM–6PM)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Form Card */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl border bg-white shadow-lg" style={{ borderColor: theme.border }}>
                {submitStatus.type === "success" && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-800 text-xs font-medium">
                    <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-800 text-xs font-medium">
                    <ShieldCheck size={18} className="text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Candidate Name"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        CNIC Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cnic}
                        onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                        placeholder="35201-XXXXXXX-X"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Current City / District *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Lahore, Rawalpindi"
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Applying For Position *
                      </label>
                      <select
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        {JOB_OPENINGS.map((j) => (
                          <option key={j.id} value={j.title}>
                            {j.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                        Are You An Ex-Serviceman? *
                      </label>
                      <select
                        value={formData.exMilitary}
                        onChange={(e) => setFormData({ ...formData, exMilitary: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Yes - Pak Army">Yes - Pakistan Army</option>
                        <option value="Yes - FC / Rangers">Yes - FC / Rangers / Police</option>
                        <option value="No - Civilian">No - Civilian Candidate</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2" style={{ color: theme.navy }}>
                      Brief Experience / Note
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your previous security employer, weapon training, or discharge details..."
                      className="w-full px-4 py-3 rounded-xl border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.navy }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Submitting Application..." : "Submit Guard Application"}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NationalGuardFooter />
    </main>
  );
}
