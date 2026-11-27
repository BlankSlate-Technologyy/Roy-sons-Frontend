"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  MessageCircle,
} from "lucide-react";
import {
  theme,
  SwissFarmNavbar,
  SwissFarmFooter,
  SectionLabel,
  SectionHeading,
} from "../components/SwissFarmShared";

const OFFICES = [
  {
    city: "Lahore Headquarters (Principal Executive & Commercial Center)",
    address: "First Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.",
    phone: "0092-42-38924737 / 0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "info@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM (Operations 24/7)",
    tag: "Principal HQ",
  },
  {
    city: "Central Punjab Dairy Complex & Breeding Hub (Okara & Sahiwal)",
    address: "Swiss Farms Agro Complex, Multan Road, Sahiwal / Okara Dairy Belt",
    phone: "0092-321-8431665",
    whatsapp: "0092-304-7527498",
    email: "dairy.ops@roysons.org",
    timing: "Mon – Sat: 8:00 AM – 5:00 PM (Milk Dispatch 24/7)",
    tag: "Primary Dairy Complex",
  },
  {
    city: "Southern Punjab Livestock & Silage Depot (Bahawalpur)",
    address: "Regional Feed & Livestock Station, Ahmedpur Road, Bahawalpur",
    phone: "0092-42-38924737",
    whatsapp: "0092-304-7527498",
    email: "livestock@roysons.org",
    timing: "Mon – Sat: 9:00 AM – 6:00 PM",
    tag: "Feed & Silage Hub",
  },
];

const QUICK_PRODUCTS = [
  "Grade-A Bulk Raw Chilled Milk",
  "HTST Pasteurized Institutional Milk",
  "Pedigree Holstein-Friesian Heifers",
  "Sexed Bovine Semen Straws",
  "High-Energy Whole-Crop Corn Silage",
  "Matured Bovine Bio-Compost",
];

const DELIVERY_REGIONS = [
  "Punjab (Lahore / Okara / Sahiwal / Multan)",
  "Islamabad & Rawalpindi Region",
  "Sindh (Karachi / Hyderabad)",
  "Khyber Pakhtunkhwa (Peshawar / Hazara)",
  "Balochistan & Quetta",
  "Ex-Farm Gate Self Collection",
];

export default function SwissFarmContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "Grade-A Bulk Raw Chilled Milk",
    volume: "5,000 - 20,000 Liters / Day",
    deliveryFrequency: "Daily Refrigerated Tanker",
    destination: "Punjab (Lahore / Okara / Sahiwal / Multan)",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const res = await fetch("/group-companies/swiss-farm/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: `Dairy Sourcing: ${formData.product} (${formData.volume})`,
          message:
            formData.message.trim() ||
            `Product: ${formData.product} | Quantity: ${formData.volume} | Frequency: ${formData.deliveryFrequency} | Region: ${formData.destination}`,
          additionalFields: {
            company: formData.company,
            product: formData.product,
            volume: formData.volume,
            deliveryFrequency: formData.deliveryFrequency,
            destination: formData.destination,
          },
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message:
            data.message ||
            "Your dairy procurement inquiry has been registered. Our Commercial Operations Director will contact you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          product: "Grade-A Bulk Raw Chilled Milk",
          volume: "5,000 - 20,000 Liters / Day",
          deliveryFrequency: "Daily Refrigerated Tanker",
          destination: "Punjab (Lahore / Okara / Sahiwal / Multan)",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            data.message || "Failed to submit dairy procurement inquiry. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "An unexpected network error occurred. Please try again or call our commercial desk.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#1C522A] font-sans antialiased overflow-x-hidden">
      <SwissFarmNavbar />

      {/* Hero Section */}
      <section
        className="relative py-10 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-8 border-b bg-[#F4F8F4]"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="text-center max-w-3xl mx-auto">
            <SectionLabel center>Commercial Procurement Desk</SectionLabel>

            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.12] uppercase mb-5"
              style={{ color: theme.primary }}
            >
              Direct Dairy &amp;{" "}
              <span style={{ color: theme.accentGold }}>Livestock Sourcing</span>
            </h1>

            <p
              className="text-[16px] sm:text-[17.5px] font-medium leading-relaxed mb-7"
              style={{ color: theme.textMuted }}
            >
              Whether you require reliable daily deliveries of certified raw chilled milk, pregnant Holstein-Friesian heifers, pedigree sexed semen straws, or high-energy corn silage, our commercial logistics team delivers direct farm-to-processing supply chains.
            </p>

            <div
              className="inline-flex flex-wrap items-center justify-center gap-4 px-5 py-4 rounded-2xl border bg-white shadow-sm"
              style={{ borderColor: theme.border }}
            >
              <div className="flex items-center gap-2 text-[14.5px] font-bold" style={{ color: theme.primary }}>
                <Phone size={18} style={{ color: theme.accentGold }} />
                <span>Dairy Hotline:</span>
                <a
                  href="tel:00924238924737"
                  className="hover:underline text-[15.5px] font-black text-[#1C522A]"
                >
                  0092-42-38924737
                </a>
              </div>
              <span className="hidden sm:inline text-emerald-200">|</span>
              <div className="flex items-center gap-2 text-[14.5px] font-bold" style={{ color: theme.primary }}>
                <MessageCircle size={18} style={{ color: "#25D366" }} />
                <span>WhatsApp:</span>
                <a
                  href="https://wa.me/923047527498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[15.5px] font-black text-[#1C522A]"
                >
                  0092-304-7527498
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Quotation & Office Grid */}
      <section
        className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-b bg-white"
        style={{ borderColor: theme.border }}
      >
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <SectionLabel>Dairy Complex Infrastructure</SectionLabel>
                <SectionHeading className="mb-3">Regional Distribution Hubs</SectionHeading>
                <p
                  className="text-[15.5px] font-medium leading-relaxed"
                  style={{ color: theme.textMuted }}
                >
                  Our dairy farm complexes in Central &amp; Southern Punjab and regional chill terminals maintain 3,000L to 30,000L refrigerated milk silos, automated milking parlors, and food-grade insulated tankers.
                </p>
              </div>

              <div className="space-y-4">
                {OFFICES.map((office) => (
                  <div
                    key={office.city}
                    className="p-6 rounded-3xl border bg-[#F4F8F4]/70 shadow-xs hover:shadow-md transition-all space-y-3"
                    style={{ borderColor: theme.border }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-[17px] font-black leading-snug" style={{ color: theme.primary }}>
                        {office.city}
                      </h4>
                      <span
                        className="text-[12.5px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-white border"
                        style={{ borderColor: theme.border, color: theme.accentGold }}
                      >
                        {office.tag}
                      </span>
                    </div>

                    <div className="space-y-2.5 text-[14.5px] font-medium" style={{ color: theme.textMuted }}>
                      <div className="flex items-start gap-2.5">
                        <MapPin size={17} className="flex-shrink-0 mt-0.5 text-[#1C522A]" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={17} className="flex-shrink-0 text-[#1C522A]" />
                        <span className="font-extrabold text-[#1C522A]">{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <MessageCircle size={17} className="flex-shrink-0" style={{ color: "#25D366" }} />
                        <span>{office.whatsapp}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={17} className="flex-shrink-0 text-[#1C522A]" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <Clock size={17} className="flex-shrink-0 text-[#1C522A]" />
                        <span className="font-bold text-[#1C522A]">{office.timing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Quotation Form */}
            <div className="lg:col-span-7">
              <div
                className="p-6 sm:p-9 rounded-3xl border bg-white shadow-xl"
                style={{ borderColor: theme.border }}
              >
                <div className="mb-6">
                  <span
                    className="text-[13px] font-black uppercase tracking-widest block mb-1.5"
                    style={{ color: theme.accentGold }}
                  >
                    COMMERCIAL DAIRY INQUIRY
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase" style={{ color: theme.primary }}>
                    Request Milk Pricing &amp; Laboratory Assay
                  </h3>
                  <p className="text-[15px] font-medium mt-1.5" style={{ color: theme.textMuted }}>
                    Receive verified chemical assays, fat guarantees, tanker logistics, and supply contracts.
                  </p>
                </div>

                {/* Quick Select Dairy Product Pills */}
                <div className="mb-6">
                  <p
                    className="text-[13px] font-extrabold uppercase tracking-wider mb-2.5"
                    style={{ color: theme.primary }}
                  >
                    Quick Select Dairy Product:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_PRODUCTS.map((item) => {
                      const selected = formData.product === item;
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setFormData({ ...formData, product: item })}
                          className={`px-3.5 py-2 rounded-xl text-[13px] font-bold transition-all cursor-pointer border ${
                            selected
                              ? "text-white shadow-sm"
                              : "bg-[#F4F8F4] text-[#1C522A] hover:border-[#A88134]"
                          }`}
                          style={{
                            backgroundColor: selected ? theme.primary : undefined,
                            borderColor: selected ? theme.primary : theme.border,
                          }}
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {submitStatus.type === "success" && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-900 text-[14.5px] font-semibold">
                    <CheckCircle2 size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-start gap-3 text-rose-900 text-[14.5px] font-semibold">
                    <ShieldCheck size={20} className="text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>{submitStatus.message}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[13.5px] font-extrabold uppercase tracking-wider mb-2"
                        style={{ color: theme.primary }}
                      >
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Procurement Director / Manager"
                        className="w-full px-4 py-3.5 rounded-xl border text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#1C522A] bg-white text-[#1C522A]"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[13.5px] font-extrabold uppercase tracking-wider mb-2"
                        style={{ color: theme.primary }}
                      >
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="procurement@dairycorp.com"
                        className="w-full px-4 py-3.5 rounded-xl border text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#1C522A] bg-white text-[#1C522A]"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[13.5px] font-extrabold uppercase tracking-wider mb-2"
                        style={{ color: theme.primary }}
                      >
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0092-300-1234567"
                        className="w-full px-4 py-3.5 rounded-xl border text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#1C522A] bg-white text-[#1C522A]"
                        style={{ borderColor: theme.border }}
                      />
                    </div>

                    <div>
                      <label
                        className="block text-[13.5px] font-extrabold uppercase tracking-wider mb-2"
                        style={{ color: theme.primary }}
                      >
                        Company / Dairy Plant Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Pure Dairy Foods Ltd"
                        className="w-full px-4 py-3.5 rounded-xl border text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#1C522A] bg-white text-[#1C522A]"
                        style={{ borderColor: theme.border }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[13.5px] font-extrabold uppercase tracking-wider mb-2"
                        style={{ color: theme.primary }}
                      >
                        Product Required
                      </label>
                      <select
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border text-[15px] font-semibold focus:outline-none focus:ring-2 focus:ring-[#1C522A] bg-white text-[#1C522A] cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Grade-A Bulk Raw Chilled Milk">Bulk Raw Milk (Tanker)</option>
                        <option value="HTST Pasteurized Institutional Milk">Pasteurized Milk (Drums)</option>
                        <option value="Pedigree Holstein-Friesian Heifers">Pedigree Dairy Heifers</option>
                        <option value="Sexed Bovine Semen Straws">Sexed Semen Straws</option>
                        <option value="High-Energy Whole-Crop Corn Silage">Corn Silage Bales</option>
                        <option value="Matured Bovine Bio-Compost">Organic Bio-Compost</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-[13.5px] font-extrabold uppercase tracking-wider mb-2"
                        style={{ color: theme.primary }}
                      >
                        Required Quantity
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border text-[15px] font-semibold focus:outline-none focus:ring-2 focus:ring-[#1C522A] bg-white text-[#1C522A] cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Trial Batch (1,000 - 5,000 Liters)">1,000 – 5,000 Liters</option>
                        <option value="5,000 - 20,000 Liters / Day">5,000 – 20,000 Liters/Day</option>
                        <option value="20,000 - 50,000 Liters / Day">20,000 – 50,000 Liters/Day</option>
                        <option value="50,000+ Liters / Day (Annual Contract)">50,000+ Liters/Day (Annual Contract)</option>
                        <option value="10 - 50 Cattle Head">10 – 50 Cattle Head</option>
                        <option value="100+ Tons Silage / Compost">100+ Tons Silage / Compost</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-[13.5px] font-extrabold uppercase tracking-wider mb-2"
                        style={{ color: theme.primary }}
                      >
                        Delivery Terms
                      </label>
                      <select
                        value={formData.deliveryFrequency}
                        onChange={(e) => setFormData({ ...formData, deliveryFrequency: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border text-[15px] font-semibold focus:outline-none focus:ring-2 focus:ring-[#1C522A] bg-white text-[#1C522A] cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        <option value="Daily Refrigerated Tanker">Daily Refrigerated Tanker</option>
                        <option value="Ex-Farm Gate Collection">Ex-Farm Gate Collection</option>
                        <option value="Weekly Scheduled Dispatch">Weekly Scheduled Dispatch</option>
                        <option value="Custom Delivery Contract">Custom Delivery Contract</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-[13.5px] font-extrabold uppercase tracking-wider mb-2"
                        style={{ color: theme.primary }}
                      >
                        Delivery Region / Destination
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border text-[15px] font-semibold focus:outline-none focus:ring-2 focus:ring-[#1C522A] bg-white text-[#1C522A] cursor-pointer"
                        style={{ borderColor: theme.border }}
                      >
                        {DELIVERY_REGIONS.map((region) => (
                          <option key={region} value={region}>
                            {region}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-[13.5px] font-extrabold uppercase tracking-wider mb-2"
                      style={{ color: theme.primary }}
                    >
                      Specific Quality Parameters / Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify desired minimum fat %, SNF requirements, plant receiving time window, or special testing..."
                      className="w-full px-4 py-3.5 rounded-xl border text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-[#1C522A] bg-white text-[#1C522A]"
                      style={{ borderColor: theme.border }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl text-[15.5px] font-extrabold text-white flex items-center justify-center gap-2.5 shadow-lg transition-all duration-300 hover:opacity-95 cursor-pointer disabled:opacity-50"
                    style={{ backgroundColor: theme.primary }}
                  >
                    <Send size={18} />
                    <span>
                      {isSubmitting
                        ? "Transmitting Dairy Request..."
                        : "Submit Dairy Procurement Request"}
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SwissFarmFooter />
    </main>
  );
}
