"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import {
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
  ContactForm,
} from "../components/AlphaMatrixShared";

export default function AlphaMatrixContactPage() {
  return (
    <main
      className="min-h-screen font-sans selection:bg-[#0284C7] selection:text-white"
      style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
    >
      <AlphaMatrixNavbar />

      {/* Hero Banner */}
      <section
        className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 px-6 overflow-hidden border-b border-white/10"
        style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
      >
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-6 font-mono">
            <Link href="/group-companies/alpha-matrix" className="hover:text-white transition-colors">
              ALPHA MATRIX
            </Link>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-[#38BDF8] font-bold">CONTACT</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#0284C7]/40 bg-[#0284C7]/15 mb-5 text-[#38BDF8] text-xs sm:text-[13px] font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            DEFENSE CONSULTATION &amp; PROCUREMENT
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl uppercase leading-[1.1]">
            Direct Command &amp; Technical Consultation Desk
          </h1>

          <p className="max-w-3xl text-base sm:text-lg font-medium leading-relaxed" style={{ color: "#E2E8F0" }}>
            For confidential defense procurement, site risk evaluations, classified C4ISR architecture specifications, or emergency 24/7 technical field support, connect with our command engineers.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Grid */}
      <section
        className="py-20 lg:py-24 px-6 border-b border-white/10"
        style={{ backgroundColor: "#050E1A", color: "#FFFFFF" }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs sm:text-[13px] font-bold tracking-widest text-[#38BDF8] uppercase block mb-2">
                  Command Liaison
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase leading-tight mb-4">
                  Operational Headquarters
                </h2>
                <p className="text-base font-medium leading-relaxed" style={{ color: "#CBD5E1" }}>
                  Our headquarters coordinates defense technology integration, hardware testing, and rapid on-site field deployment teams across national borders and strategic facilities.
                </p>
              </div>

              {/* Coordinates Card */}
              <div
                className="p-7 sm:p-8 rounded-3xl border border-sky-500/20 space-y-6 shadow-2xl"
                style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-sky-500/30 bg-[#005691]/20 text-[#38BDF8] shrink-0 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#38BDF8] uppercase tracking-wider">Defense Headquarters</h4>
                    <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed mt-1">
                      First Floor, Rehman Centre-2, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-5 border-t border-white/10">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-sky-500/30 bg-[#005691]/20 text-[#38BDF8] shrink-0 shadow-sm">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#38BDF8] uppercase tracking-wider">Direct Tactical Lines</h4>
                    <p className="text-sm sm:text-base text-slate-100 font-medium mt-1">Direct: <span className="font-mono text-white font-bold">0092-42-38924737</span></p>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">Rapid Mobile: <span className="font-mono text-slate-200">0092-304-7527498</span> / <span className="font-mono text-slate-200">0092-321-8431665</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-5 border-t border-white/10">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-sky-500/30 bg-[#005691]/20 text-[#38BDF8] shrink-0 shadow-sm">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#38BDF8] uppercase tracking-wider">Official Communications</h4>
                    <p className="text-sm sm:text-base text-slate-100 font-medium mt-1">Defense Tenders: <span className="font-mono text-white font-bold">info@roysons.org</span></p>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5">C4ISR Support: <span className="font-mono text-slate-200">support@roysons.org</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-5 border-t border-white/10">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center border border-sky-500/30 bg-[#005691]/20 text-[#38BDF8] shrink-0 shadow-sm">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-bold text-[#38BDF8] uppercase tracking-wider">Operational Availability</h4>
                    <p className="text-sm sm:text-base text-slate-100 font-medium mt-1">Briefing Desk: Mon – Sat, 09:00 – 18:00 PKT</p>
                    <p className="text-sm text-[#38BDF8] mt-1 font-bold">Emergency C4ISR Support: 24/7 / 365</p>
                  </div>
                </div>
              </div>

              {/* NDA Assurance Notice */}
              <div
                className="p-6 rounded-2xl border border-sky-500/30 flex items-start gap-3.5 shadow-lg"
                style={{ backgroundColor: "#08182B", color: "#FFFFFF" }}
              >
                <ShieldCheck size={22} className="text-[#38BDF8] shrink-0 mt-0.5" />
                <p className="text-sm text-slate-200 font-medium leading-relaxed">
                  All procurement inquiries, site coordinates, and technical project files submitted through this desk are handled under strict non-disclosure (NDA) and sovereign defense data security frameworks.
                </p>
              </div>

            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="h-96 w-full border-b border-white/10 relative grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.483988673516!2d74.4285741!3d31.4558296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909a80b06b747%3A0x88981df98efb0b9b!2sRehman%20Centre-2!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Alpha Matrix Defense Systems Operational Headquarters"
        />
        <div className="absolute top-4 left-4 p-4 rounded-xl border border-sky-500/30 bg-[#08182B]/95 backdrop-blur-md text-sm text-white shadow-xl">
          <p className="font-black text-[#38BDF8]">Alpha Matrix Defence Systems</p>
          <p className="text-slate-200 text-xs mt-0.5">Rehman Centre-2, Lahore, Pakistan</p>
        </div>
      </section>

      <AlphaMatrixFooter />
    </main>
  );
}
