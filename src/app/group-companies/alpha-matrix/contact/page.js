"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building,
  Headphones,
  CheckCircle2,
} from "lucide-react";
import {
  theme,
  hexToRgba,
  AlphaMatrixNavbar,
  AlphaMatrixFooter,
  ContactForm,
  SectionLabel,
  SectionHeading,
} from "../components/AlphaMatrixShared";

export default function AlphaMatrixContactPage() {
  return (
    <div className="alpha-matrix-theme min-h-screen font-sans selection:bg-[#005691] selection:text-white bg-white" style={{ backgroundColor: theme.bg, color: theme.navy }}>
      <AlphaMatrixNavbar />

      {/* Hero Header (Clean White Background) */}
      <section className="relative py-20 lg:py-24 px-6 overflow-hidden border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/alpha_hero_defense.svg"
            alt="Alpha Matrix Defense Contact Desk"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 bg-white/90 shadow-xs" style={{ borderColor: theme.border }}>
            <Headphones size={14} style={{ color: theme.gold }} />
            <span className="text-[10.5px] font-black uppercase tracking-[0.25em]" style={{ color: theme.gold }}>Defense Consultation &amp; Procurement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-4" style={{ color: theme.navy }}>
            Connect With Our <span style={{ color: theme.gold }}>Defense Specialists</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[13.5px] md:text-[15px] leading-relaxed" style={{ color: theme.textMuted }}>
            For defense procurement, site security audits, tender specifications, or technical C4ISR integration inquiries, our engineering and advisory desk is at your service.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Grid */}
      <section className="py-20 lg:py-24 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <SectionLabel>Headquarters &amp; Operations</SectionLabel>
                <SectionHeading className="mb-4">Operational Directives &amp; Inquiries</SectionHeading>
                <p className="text-[13px] leading-relaxed" style={{ color: theme.textMuted }}>
                  Our regional command office coordinates defense technology deployments, equipment testing, and support across Pakistan and global defense partner networks.
                </p>
              </div>

              {/* Location Card */}
              <div className="p-6 rounded-2xl border shadow-xs space-y-4 bg-white" style={{ borderColor: theme.border }}>
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center border flex-shrink-0" style={{ borderColor: theme.border, backgroundColor: hexToRgba(theme.gold, 0.08) }}>
                    <MapPin size={18} style={{ color: theme.gold }} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-black uppercase" style={{ color: theme.navy }}>Defense Headquarters</h4>
                    <p className="text-[12px] leading-relaxed mt-1" style={{ color: theme.textMuted }}>
                      1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore, Pakistan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t" style={{ borderColor: theme.border }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center border flex-shrink-0" style={{ borderColor: theme.border, backgroundColor: hexToRgba(theme.gold, 0.08) }}>
                    <Phone size={18} style={{ color: theme.gold }} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-black uppercase" style={{ color: theme.navy }}>Direct Defense Lines</h4>
                    <p className="text-[12px] mt-1" style={{ color: theme.textMuted }}>Landline: 0092-42-38924737</p>
                    <p className="text-[12px]" style={{ color: theme.textMuted }}>WhatsApp / Rapid: 0092-304-7527498 | 0092-321-8431665</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t" style={{ borderColor: theme.border }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center border flex-shrink-0" style={{ borderColor: theme.border, backgroundColor: hexToRgba(theme.gold, 0.08) }}>
                    <Mail size={18} style={{ color: theme.gold }} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-black uppercase" style={{ color: theme.navy }}>Official Electronic Mail</h4>
                    <p className="text-[12px] mt-1" style={{ color: theme.textMuted }}>info@roysons.org</p>
                    <p className="text-[12px]" style={{ color: theme.textMuted }}>support@roysons.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t" style={{ borderColor: theme.border }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center border flex-shrink-0" style={{ borderColor: theme.border, backgroundColor: hexToRgba(theme.gold, 0.08) }}>
                    <Clock size={18} style={{ color: theme.gold }} />
                  </div>
                  <div>
                    <h4 className="text-[13px] font-black uppercase" style={{ color: theme.navy }}>Operational Support Desk</h4>
                    <p className="text-[12px] mt-1" style={{ color: theme.textMuted }}>Mon – Sat: 09:00 AM – 06:00 PM (PKT)</p>
                    <p className="text-[12px]" style={{ color: theme.textMuted }}>Emergency &amp; SOC Support: 24/7 / 365</p>
                  </div>
                </div>
              </div>

              {/* Security Assurance Badge */}
              <div className="p-5 rounded-2xl border flex items-center gap-3 bg-white shadow-xs" style={{ borderColor: theme.border }}>
                <ShieldCheck size={24} style={{ color: theme.gold }} className="flex-shrink-0" />
                <p className="text-[12px] font-medium" style={{ color: theme.textMuted }}>
                  All procurement inquiries and operational specifications are handled under strict NDA and sovereign security guidelines.
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

      <AlphaMatrixFooter />
    </div>
  );
}
