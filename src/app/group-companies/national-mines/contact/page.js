"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  Building2,
  Mountain,
  Truck,
  FlaskConical,
  MessageCircle,
  FileCheck2,
  Scale,
} from "lucide-react";
import {
  theme,
  NationalMinesNavbar,
  NationalMinesFooter,
  SectionLabel,
} from "../components/NationalMinesShared";

const OFFICES = [
  {
    city: "Lahore Corporate Headquarters",
    subtitle: "Principal Executive & Commercial Operations Center",
    address: "First Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore, Pakistan.",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Commercial Desk 24/7)",
    tag: "Principal HQ",
    icon: Building2,
  },
  {
    city: "Quetta & Chagai Concession Command",
    subtitle: "Balochistan Field Operations & Concession Center",
    address: "Regional Exploration Operations Center, Airport Road, Quetta, Balochistan, Pakistan",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "balochistan@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 5:00 PM (Field Concessions 24/7)",
    tag: "Field Command Hub",
    icon: Mountain,
  },
  {
    city: "Karachi Port & Bulk Export Terminal",
    subtitle: "Marine Bulk Ore Logistics & Customs Clearance",
    address: "Marine Trade Logistics Zone, Port Muhammad Bin Qasim / Keamari, Karachi, Pakistan",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "export@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Vessel Dispatch 24/7)",
    tag: "Export Terminal Desk",
    icon: Truck,
  },
];

const COMMERCIAL_HIGHLIGHTS = [
  {
    title: "SGS / ISO Certified Assays",
    desc: "Every bulk consignment is accompanied by independent third-party chemical purity and grade assay certificates.",
    icon: FlaskConical,
  },
  {
    title: "Direct Concession Provenance",
    desc: "100% legally licensed provincial mining concessions with full chain-of-custody and SIFC/GSP compliance.",
    icon: FileCheck2,
  },
  {
    title: "Flexible Incoterms 2020",
    desc: "Seamless trade execution covering FOB Karachi/Gwadar/Port Qasim, CIF global ports, or Ex-Works mine pitheads.",
    icon: Scale,
  },
];

export default function NationalMinesContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    mineralType: "Copper Concentrate (Cu)",
    volume: "500 - 2,000 Metric Tons",
    deliveryTerm: "FOB Karachi / Port Qasim",
    destination: "Domestic Pakistan",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();

    if (trimmedName.length < 2) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your full name (at least 2 characters).",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/company-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companySlug: "national-mines",
          companyName: "National Mines Corporation",
          fullName: trimmedName,
          email: trimmedEmail,
          phone: formData.phone.trim(),
          subject: `Mineral Quotation Request: ${formData.mineralType} (${formData.volume})`,
          message:
            formData.message.trim() ||
            `Commodity: ${formData.mineralType} | Volume: ${formData.volume} | Delivery Term: ${formData.deliveryTerm} | Destination: ${formData.destination}`,
          additionalFields: {
            company: formData.company.trim(),
            mineralType: formData.mineralType,
            volume: formData.volume,
            deliveryTerm: formData.deliveryTerm,
            destination: formData.destination.trim(),
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message:
            data.message ||
            "Your mineral commodity quotation request has been registered. Our commercial desk will contact you with grade assays within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          mineralType: "Copper Concentrate (Cu)",
          volume: "500 - 2,000 Metric Tons",
          deliveryTerm: "FOB Karachi / Port Qasim",
          destination: "Domestic Pakistan",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.message || "Failed to submit mineral quotation request. Please try again or reach out via phone/WhatsApp.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "An unexpected network error occurred. Please try again or contact our commercial desk directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#0B1B2B] font-sans antialiased overflow-x-hidden">
      <NationalMinesNavbar />

      {/* Hero Header — Unique Deep-Sea Port Export Terminal Background */}
      <section className="relative py-14 lg:py-18 px-4 sm:px-6 lg:px-8 border-b bg-[#0B1B2B] text-white overflow-hidden" style={{ borderColor: theme.borderDark }}>
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <Image
            src="/inverseunion/hero_maritime_freight.jpg"
            alt="Deep-Sea Bulk Mineral Export Port Terminal"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#07111C]/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-screen-xl text-center">
          <SectionLabel center dark>Commercial &amp; Procurement Desk</SectionLabel>
          <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold tracking-tight leading-[1.14] mb-4 text-white">
            Direct Concession <span style={{ color: theme.goldLight }}>Mineral Sourcing</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg font-normal leading-relaxed text-slate-200 mb-7">
            Connect directly with our commercial trading desk for certified SGS grade assays, bulk commodity pricing, rail/port logistics, and institutional off-take contracts.
          </p>

          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 px-5 py-4 rounded-xl border border-white/15 bg-white/10 backdrop-blur-sm text-sm font-medium">
            <div className="flex items-center gap-2">
              <Phone size={16} style={{ color: theme.goldLight }} />
              <span className="text-slate-200">Commercial Desk:</span>
              <a href="tel:00924238924737" className="hover:underline font-bold text-white">
                0092-42-38924737
              </a>
            </div>
            <span className="hidden sm:inline text-white/25">|</span>
            <div className="flex items-center gap-2">
              <MessageCircle size={16} className="text-emerald-400" />
              <span className="text-slate-200">Direct WhatsApp:</span>
              <a href="https://wa.me/923047527498" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold text-white">
                0092-304-7527498
              </a>
            </div>
            <span className="hidden sm:inline text-white/25">|</span>
            <div className="flex items-center gap-2">
              <Mail size={16} style={{ color: theme.goldLight }} />
              <span className="text-slate-200">Procurement:</span>
              <a href="mailto:info@roysons.org" className="hover:underline font-bold text-white">
                info@roysons.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Quotation & Regional Hubs Grid */}
      <section className="py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 border-b bg-white" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Commercial Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-2xl border bg-white shadow-sm" style={{ borderColor: theme.border }}>
                <div className="mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider block mb-1" style={{ color: theme.gold }}>
                    Bulk Commodity Inquiry
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold" style={{ color: theme.navy }}>
                    Request Quotation &amp; Assay Report
                  </h2>
                  <p className="text-sm sm:text-[15px] font-normal text-slate-600 mt-1.5">
                    Receive verified SGS chemical assays, technical specifications, and commercial FOB/CIF quotes within 24 hours.
                  </p>
                </div>

                {submitStatus.type === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-900 text-sm font-medium">
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-900 text-sm font-medium">
                    <ShieldCheck size={20} className="text-rose-600 shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wide mb-1.5 text-slate-700">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        minLength={2}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Procurement Director / Representative"
                        className="w-full px-4 py-3 rounded-lg border text-sm sm:text-[15px] font-normal focus:outline-none focus:ring-2 focus:ring-[#0F3826]/30 bg-white transition-colors"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wide mb-1.5 text-slate-700">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="procurement@industrialgroup.com"
                        className="w-full px-4 py-3 rounded-lg border text-sm sm:text-[15px] font-normal focus:outline-none focus:ring-2 focus:ring-[#0F3826]/30 bg-white transition-colors"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wide mb-1.5 text-slate-700">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+92 300 1234567"
                        className="w-full px-4 py-3 rounded-lg border text-sm sm:text-[15px] font-normal focus:outline-none focus:ring-2 focus:ring-[#0F3826]/30 bg-white transition-colors"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wide mb-1.5 text-slate-700">
                        Company / Enterprise
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Steel Mill / Refiner / Manufacturing Group"
                        className="w-full px-4 py-3 rounded-lg border text-sm sm:text-[15px] font-normal focus:outline-none focus:ring-2 focus:ring-[#0F3826]/30 bg-white transition-colors"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wide mb-1.5 text-slate-700">
                        Mineral Commodity
                      </label>
                      <select
                        value={formData.mineralType}
                        onChange={(e) => setFormData({ ...formData, mineralType: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0F3826]/30 bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Copper Concentrate (Cu)">Copper Concentrate (Chagai)</option>
                        <option value="Gold Bullion / Ore (Au)">Gold Ore / Doré Bullion</option>
                        <option value="Himalayan Pink Rock Salt (NaCl)">Himalayan Pink Rock Salt (Khewra)</option>
                        <option value="Iron Ore 62-65% (Fe)">Iron Ore (Chiniot / Kalabagh)</option>
                        <option value="Industrial Coal (Thar / Salt Range)">Industrial Coal (Thar / Salt Range)</option>
                        <option value="Chromite Ore 46-48% (Cr2O3)">Chromite Ore (Muslim Bagh)</option>
                        <option value="Limestone 94% (CaCO3)">Limestone (Margalla / Salt Range)</option>
                        <option value="Gypsum 92% (CaSO4)">Gypsum (Daudkhel / Kohat)</option>
                        <option value="Marble & Green Onyx Blocks">Marble &amp; Green Onyx</option>
                        <option value="Granite Dimensional Stone">Granite (Nagar Parkar / Mansehra)</option>
                        <option value="Silica Sand 99.2% (SiO2)">Silica Sand (Mianwali)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wide mb-1.5 text-slate-700">
                        Required Volume
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0F3826]/30 bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Trial Batch (100 - 500 Tons)">100 – 500 MT (Trial)</option>
                        <option value="500 - 2,000 Metric Tons">500 – 2,000 MT</option>
                        <option value="2,000 - 10,000 Metric Tons">2,000 – 10,000 MT</option>
                        <option value="10,000+ Tons (Monthly Contract)">10,000+ MT (Long-Term Contract)</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wide mb-1.5 text-slate-700">
                        Delivery Terms (Incoterms)
                      </label>
                      <select
                        value={formData.deliveryTerm}
                        onChange={(e) => setFormData({ ...formData, deliveryTerm: e.target.value })}
                        className="w-full px-3.5 py-3 rounded-lg border text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0F3826]/30 bg-white cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="FOB Karachi / Port Qasim">FOB Karachi / Port Qasim</option>
                        <option value="FOB Gwadar Port">FOB Gwadar Deep-Sea Port</option>
                        <option value="Ex-Works Mine Site">Ex-Works Mine Pithead</option>
                        <option value="Delivered At Place (DAP)">Delivered (DAP Factory)</option>
                        <option value="CIF International Port">CIF Export Port</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wide mb-1.5 text-slate-700">
                        Destination City / Port
                      </label>
                      <input
                        type="text"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        placeholder="e.g. Lahore, Karachi, Qingdao, Jebel Ali"
                        className="w-full px-4 py-3 rounded-lg border text-sm sm:text-[15px] font-normal focus:outline-none focus:ring-2 focus:ring-[#0F3826]/30 bg-white transition-colors"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-[13px] font-bold uppercase tracking-wide mb-1.5 text-slate-700">
                      Grade &amp; Technical Specifications
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify required chemical assay purity (e.g. Cu 28-32%, Cr2O3 46%, Fe 62%, NaCl 98%), particle sizing, preferred schedule, or specific port..."
                      className="w-full px-4 py-3 rounded-lg border text-sm sm:text-[15px] font-normal focus:outline-none focus:ring-2 focus:ring-[#0F3826]/30 bg-white transition-colors"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl text-sm sm:text-base font-bold text-white flex items-center justify-center gap-2 shadow-sm transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.forestGreen }}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Mineral Quotation Request"}</span>
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Regional Concession Hubs */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <SectionLabel>Concession Infrastructure</SectionLabel>
                <h2 className="text-2xl font-extrabold mb-2" style={{ color: theme.navy }}>
                  Regional Operations Network
                </h2>
                <p className="text-sm sm:text-[15px] font-normal text-slate-600 leading-relaxed">
                  Our strategic regional hubs connect Balochistan extraction zones, Punjab corporate management, and Port Qasim / Gwadar maritime bulk loaders.
                </p>
              </div>

              <div className="space-y-4">
                {OFFICES.map((office) => {
                  const IconComponent = office.icon;
                  return (
                    <div
                      key={office.city}
                      className="p-5 rounded-xl border bg-white shadow-xs hover:border-[#C59B27]/50 transition-all space-y-2.5"
                      style={{ borderColor: theme.border }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0"
                            style={{ backgroundColor: theme.forestGreen }}
                          >
                            <IconComponent size={18} />
                          </div>
                          <div>
                            <h3 className="text-base font-bold leading-snug" style={{ color: theme.navy }}>
                              {office.city}
                            </h3>
                            <p className="text-xs text-slate-500 font-medium">{office.subtitle}</p>
                          </div>
                        </div>
                        <span
                          className="text-[11px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-md shrink-0"
                          style={{ backgroundColor: theme.goldPale, color: theme.goldHover }}
                        >
                          {office.tag}
                        </span>
                      </div>

                      <div className="space-y-1.5 text-sm text-slate-600 font-normal pt-2 border-t" style={{ borderColor: theme.borderLight }}>
                        <div className="flex items-start gap-2">
                          <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: theme.gold }} />
                          <span className="leading-snug">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={15} className="shrink-0" style={{ color: theme.gold }} />
                          <span className="font-semibold text-slate-800">{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle size={15} className="shrink-0 text-emerald-600" />
                          <span>{office.whatsapp}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={15} className="shrink-0" style={{ color: theme.gold }} />
                          <span>{office.email}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={15} className="shrink-0" style={{ color: theme.gold }} />
                          <span className="text-slate-500 text-xs sm:text-[13px]">{office.timing}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Commercial Assurance Highlights */}
              <div className="p-5 rounded-xl border bg-slate-50 space-y-3" style={{ borderColor: theme.border }}>
                <h3 className="text-sm font-bold uppercase tracking-wider" style={{ color: theme.navy }}>
                  Commercial Assurance &amp; Compliance
                </h3>
                <div className="space-y-3">
                  {COMMERCIAL_HIGHLIGHTS.map((item) => {
                    const HIcon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-3">
                        <HIcon size={17} className="shrink-0 mt-0.5" style={{ color: theme.gold }} />
                        <div>
                          <span className="text-sm font-bold text-slate-800 block">{item.title}</span>
                          <span className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed block">{item.desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Location Map */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b" style={{ borderColor: theme.border }}>
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionLabel center>Strategic Locations</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: theme.navy }}>
              Lahore Corporate Headquarters
            </h2>
            <p className="text-sm sm:text-base font-normal text-slate-600 mt-2">
              Visitors welcome by prior appointment for institutional contract discussions, SGS assay reviews, and concession documentation.
            </p>
          </div>

          <div className="rounded-2xl border overflow-hidden shadow-xs bg-white h-[360px] relative" style={{ borderColor: theme.border }}>
            <iframe
              title="National Mines Lahore Headquarters"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.668702334707!2d74.408796!3d31.478799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909a32c6498bb%3A0x2897dd1fc6bfa588!2sAskari%20XI%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      <NationalMinesFooter />
    </main>
  );
}
