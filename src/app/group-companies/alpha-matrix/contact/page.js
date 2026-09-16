"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Headphones,
  ChevronRight,
  Radio,
  FileCheck,
} from "lucide-react";
import {
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
  ContactForm,
} from "../components/AlphaMatrixShared";

export default function AlphaMatrixContactPage() {
  return (
    <main className="alpha-matrix-theme min-h-screen font-sans bg-[#08182B] text-slate-100 selection:bg-[#0284C7] selection:text-white">
      <AlphaMatrixNavbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-24 px-6 overflow-hidden border-b border-white/10 bg-[#08182B]">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#0284C7_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-mono">
            <Link href="/group-companies/alpha-matrix" className="hover:text-white transition-colors">
              ALPHA MATRIX
            </Link>
            <ChevronRight size={12} className="text-slate-500" />
            <span className="text-[#38BDF8]">CONTACT</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0284C7]/30 bg-[#0284C7]/10 mb-4 text-[#38BDF8] text-[11px] font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            DEFENSE CONSULTATION &amp; PROCUREMENT
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 max-w-4xl">
            Direct Command &amp; Technical Consultation Desk
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            For confidential defense procurement, site risk evaluations, classified C4ISR architecture specifications, or emergency 24/7 technical field support, connect with our command engineers.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Grid */}
      <section className="py-20 lg:py-24 px-6 bg-[#050E1A] border-b border-white/10">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">Command Liaison</span>
                <h2 className="text-2xl sm:text-3xl font-medium text-white tracking-tight mt-1 mb-3">
                  Operational Headquarters
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed">
                  Our headquarters coordinates defense technology integration, hardware testing, and rapid on-site field deployment teams across national borders and strategic facilities.
                </p>
              </div>

              {/* Coordinates Card */}
              <div className="p-6 rounded-2xl border border-white/10 bg-[#08182B] space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 text-[#38BDF8] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Defense Headquarters</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mt-1">
                      1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 text-[#38BDF8] shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Direct Tactical Lines</h4>
                    <p className="text-xs text-slate-300 mt-1">Direct: <span className="font-mono text-white">0092-42-38924737</span></p>
                    <p className="text-xs text-slate-400 mt-0.5">Rapid Mobile: <span className="font-mono text-slate-300">0092-304-7527498</span> / <span className="font-mono text-slate-300">0092-321-8431665</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 text-[#38BDF8] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Official Communications</h4>
                    <p className="text-xs text-slate-300 mt-1">Defense Tenders: <span className="font-mono text-white">info@roysons.org</span></p>
                    <p className="text-xs text-slate-400 mt-0.5">C4ISR Support: <span className="font-mono text-slate-300">support@roysons.org</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 bg-white/5 text-[#38BDF8] shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Operational Availability</h4>
                    <p className="text-xs text-slate-300 mt-1">Briefing Desk: Mon – Sat, 09:00 – 18:00 PKT</p>
                    <p className="text-xs text-[#38BDF8] mt-0.5 font-medium">Emergency C4ISR Support: 24/7 / 365</p>
                  </div>
                </div>
              </div>

              {/* NDA Assurance Notice */}
              <div className="p-5 rounded-xl border border-[#0284C7]/20 bg-[#0284C7]/5 flex items-start gap-3">
                <ShieldCheck size={20} className="text-[#38BDF8] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  All procurement inquiries, site coordinates, and technical project files submitted through this desk are handled under strict non-disclosure (NDA) and sovereign data security frameworks.
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
      <section className="h-96 w-full border-b border-white/10 relative grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
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
        <div className="absolute top-4 left-4 p-3 rounded-lg border border-white/10 bg-[#08182B]/90 backdrop-blur-md text-xs text-white">
          <p className="font-semibold text-[#38BDF8]">Alpha Matrix Defence Systems</p>
          <p className="text-slate-300 text-[11px]">Rehman Centre-2, Lahore, Pakistan</p>
        </div>
      </section>

      <AlphaMatrixFooter />
    </main>
  );
}
