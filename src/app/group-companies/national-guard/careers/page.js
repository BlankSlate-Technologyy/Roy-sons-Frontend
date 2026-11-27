"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  MapPin,
  Building2,
  Send,
  HeartPulse,
  DollarSign,
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
    email: "",
    phone: "",
    cnic: "",
    city: "",
    position: "Armed Security Guard (Ex-Army / Frontier Corps)",
    exMilitary: "No - Civilian",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const candidateEmail = formData.email.trim() || "recruitment@nationalguard.com.pk";

    try {
      const res = await fetch("/api/company-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companySlug: "national-guard",
          companyName: "National Guard Security Services",
          fullName: formData.name,
          email: candidateEmail,
          phone: formData.phone,
          subject: `Security Career Application: ${formData.position}`,
          message:
            formData.message.trim() ||
            `Application for ${formData.position} | CNIC: ${formData.cnic} | City: ${formData.city} | Service Status: ${formData.exMilitary}`,
          additionalFields: {
            inquiryCategory: "career-application",
            applicantProvidedEmail: Boolean(formData.email.trim()),
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
          message:
            data.message ||
            "Application received! Our recruitment desk will call you for interview and document verification.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          cnic: "",
          city: "",
          position: "Armed Security Guard (Ex-Army / Frontier Corps)",
          exMilitary: "No - Civilian",
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

      {/* 01 — Hero Section (Unique Image: /logos/Defense & Security.jpg.jpeg) */}
      <section
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{
          background: "linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)",
          borderColor: theme.border,
        }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <SectionLabel>Recruitment &amp; Careers</SectionLabel>

              <h1
                className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase mb-4"
                style={{ color: theme.navy }}
              >
                Join Pakistan&apos;s Most{" "}
                <span style={{ color: theme.gold }}>Disciplined Security Force</span>
              </h1>

              <p
                className="text-[16px] sm:text-[18px] font-medium leading-relaxed mb-6"
                style={{ color: theme.textMuted }}
              >
                We are actively hiring retired military personnel, experienced security officers,
                CCTV controllers, and area supervisors. Join an honorable security enterprise offering
                competitive salaries, medical coverage, and free barrack accommodation.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-extrabold uppercase tracking-wide text-white shadow-md transition-all duration-300 hover:opacity-95 cursor-pointer"
                  style={{ backgroundColor: theme.navy }}
                >
                  <span>View Current Openings</span>
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#apply-form"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-extrabold uppercase tracking-wide border-2 transition-all duration-300 hover:bg-slate-50 cursor-pointer bg-white"
                  style={{ borderColor: theme.navy, color: theme.navy }}
                >
                  <span>Apply Online</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 w-full flex justify-center">
              <div
                className="relative w-full max-w-[520px] h-[340px] sm:h-[400px] rounded-3xl overflow-hidden shadow-xl border group bg-slate-100"
                style={{ borderColor: theme.border }}
              >
                <Image
                  src="/logos/Defense & Security.jpg.jpeg"
                  alt="National Guard Security Perimeter Operations & Control Team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-right group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2540]/85 via-transparent to-transparent flex items-end p-5">
                  <div
                    className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border shadow-lg w-full"
                    style={{ borderColor: theme.border }}
                  >
                    <p
                      className="text-[12.5px] font-black uppercase tracking-wider mb-1"
                      style={{ color: theme.gold }}
                    >
                      Equal Opportunity Employer
                    </p>
                    <p className="text-[15px] font-extrabold" style={{ color: theme.navy }}>
                      Ex-Army · FC · Rangers &amp; Civilian Candidates Welcome
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Employee Benefits Grid */}
      <section
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.bgLight, borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <SectionLabel center>Employee Benefits</SectionLabel>
            <SectionHeading center className="mb-3">
              Why Work With National Guard?
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[17px] font-medium" style={{ color: theme.textMuted }}>
              We ensure our security personnel are well-supported so they can perform their duties
              with pride and absolute dedication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {PERKS.map((perk) => {
              const Icon = perk.icon;
              return (
                <div
                  key={perk.title}
                  className="ng-card-hover p-6 rounded-3xl border flex flex-col justify-between bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${theme.navy}12` }}
                    >
                      <Icon size={24} style={{ color: theme.navy }} />
                    </div>
                    <h3
                      className="text-[18.5px] font-black mb-2.5 leading-snug"
                      style={{ color: theme.navy }}
                    >
                      {perk.title}
                    </h3>
                    <p
                      className="text-[14.5px] sm:text-[15px] font-medium leading-relaxed"
                      style={{ color: theme.textMuted }}
                    >
                      {perk.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 03 — Active Job Openings */}
      <section
        id="openings"
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto mb-9">
            <SectionLabel center>Open Vacancies</SectionLabel>
            <SectionHeading center className="mb-3">
              Current Opportunities
            </SectionHeading>
            <p className="text-[15.5px] sm:text-[17px] font-medium" style={{ color: theme.textMuted }}>
              Walk-in interviews conducted daily at our Regional Recruitment Centers in Lahore and
              Rawalpindi.
            </p>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-7 rounded-3xl border bg-[#F4F6F9] shadow-xs hover:shadow-md hover:border-[#C5A059] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                style={{ borderColor: theme.border }}
              >
                <div className="space-y-2.5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className="text-[12.5px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full bg-white border"
                      style={{ color: theme.gold, borderColor: theme.border }}
                    >
                      {job.type}
                    </span>
                    <span className="text-[13.5px] font-bold text-slate-600 flex items-center gap-1">
                      <MapPin size={14} style={{ color: theme.gold }} />
                      {job.location}
                    </span>
                  </div>

                  <h3 className="text-[19px] sm:text-[21px] font-black" style={{ color: theme.navy }}>
                    {job.title}
                  </h3>

                  <p className="text-[14.5px] font-extrabold text-slate-800">
                    Criteria: <span className="font-medium text-slate-700">{job.experience}</span>
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {job.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="text-[14px] sm:text-[14.5px] font-medium text-slate-700 flex items-start gap-2"
                      >
                        <CheckCircle2
                          size={15}
                          style={{ color: theme.gold }}
                          className="flex-shrink-0 mt-0.5"
                        />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="#apply-form"
                    onClick={() => setFormData((prev) => ({ ...prev, position: job.title }))}
                    className="px-6 py-3.5 rounded-xl text-[14px] font-extrabold uppercase tracking-wider text-white shadow-sm transition-all hover:opacity-95 flex items-center justify-center gap-2 cursor-pointer"
                    style={{ backgroundColor: theme.navy }}
                  >
                    <span>Apply For Position</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Online Application Form */}
      <section
        id="apply-form"
        className="py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-b"
        style={{ backgroundColor: theme.bgLight, borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <SectionLabel>Recruitment Desk</SectionLabel>
              <SectionHeading className="mb-3">Submit Your Application</SectionHeading>
              <p
                className="text-[15.5px] sm:text-[17px] font-medium leading-relaxed mb-6"
                style={{ color: theme.textMuted }}
              >
                Fill out the quick form below. Our recruitment officers will verify your credentials
                with NADRA and schedule your document verification and uniform measurement.
              </p>

              <div className="space-y-4 text-[14.5px] font-medium text-slate-700">
                <div
                  className="flex items-start gap-3 p-4 rounded-2xl border bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <ShieldCheck size={22} className="flex-shrink-0 mt-0.5" style={{ color: theme.gold }} />
                  <div>
                    <h5 className="font-black text-[15.5px] mb-1" style={{ color: theme.navy }}>
                      Required Documents For Interview
                    </h5>
                    <p className="leading-relaxed">
                      Original CNIC, 4 Passport Photos, Police Character Certificate, Ex-Army
                      Discharge Book (for ex-servicemen).
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-3 p-4 rounded-2xl border bg-white shadow-xs"
                  style={{ borderColor: theme.border }}
                >
                  <Phone size={20} className="flex-shrink-0" style={{ color: theme.gold }} />
                  <div>
                    <h5 className="font-black text-[15.5px]" style={{ color: theme.navy }}>
                      Direct Recruitment Helpline
                    </h5>
                    <a
                      href="tel:+923218431665"
                      className="font-extrabold hover:underline"
                      style={{ color: theme.navy }}
                    >
                      +92 321 8431665 (Mon–Sat, 9AM–6PM)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div
                className="p-6 sm:p-8 rounded-3xl border bg-white shadow-lg"
                style={{ borderColor: theme.border }}
              >
                {submitStatus.type === "success" && (
                  <div className="mb-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-900 text-[14.5px] font-semibold">
                    <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mb-5 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-900 text-[14.5px] font-semibold">
                    <ShieldCheck size={20} className="text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[13px] font-extrabold uppercase tracking-wider mb-1.5"
                        style={{ color: theme.navy }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Candidate Full Name"
                        className="w-full px-4 py-3 rounded-xl border text-[15px] font-medium text-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[13px] font-extrabold uppercase tracking-wider mb-1.5"
                        style={{ color: theme.navy }}
                      >
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0300-1234567"
                        className="w-full px-4 py-3 rounded-xl border text-[15px] font-medium text-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[13px] font-extrabold uppercase tracking-wider mb-1.5"
                        style={{ color: theme.navy }}
                      >
                        CNIC Number *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.cnic}
                        onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                        placeholder="35201-XXXXXXX-X"
                        className="w-full px-4 py-3 rounded-xl border text-[15px] font-medium text-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[13px] font-extrabold uppercase tracking-wider mb-1.5"
                        style={{ color: theme.navy }}
                      >
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="candidate@email.com"
                        className="w-full px-4 py-3 rounded-xl border text-[15px] font-medium text-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[13px] font-extrabold uppercase tracking-wider mb-1.5"
                        style={{ color: theme.navy }}
                      >
                        Current City / District *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Lahore, Rawalpindi"
                        className="w-full px-4 py-3 rounded-xl border text-[15px] font-medium text-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[13px] font-extrabold uppercase tracking-wider mb-1.5"
                        style={{ color: theme.navy }}
                      >
                        Are You An Ex-Serviceman? *
                      </label>
                      <select
                        value={formData.exMilitary}
                        onChange={(e) => setFormData({ ...formData, exMilitary: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border text-[15px] font-medium text-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="No - Civilian">No - Civilian Candidate</option>
                        <option value="Yes - Pak Army">Yes - Pakistan Army</option>
                        <option value="Yes - FC / Rangers">Yes - FC / Rangers / Police</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-[13px] font-extrabold uppercase tracking-wider mb-1.5"
                      style={{ color: theme.navy }}
                    >
                      Applying For Position *
                    </label>
                    <select
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-[15px] font-medium text-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white cursor-pointer"
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
                    <label
                      className="block text-[13px] font-extrabold uppercase tracking-wider mb-1.5"
                      style={{ color: theme.navy }}
                    >
                      Brief Experience / Note
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your previous security employer, weapon training, or discharge details..."
                      className="w-full px-4 py-3 rounded-xl border text-[15px] font-medium text-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D] bg-white"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-[15px] font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.navy }}
                  >
                    <Send size={17} />
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
