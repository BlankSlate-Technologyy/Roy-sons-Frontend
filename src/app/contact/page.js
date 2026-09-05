"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ChevronDown
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    company: "",
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit message. Please try again.");
      }

      setFormSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        company: "",
        message: ""
      });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitError(err.message || "An unexpected error occurred. Please try again or call our hotline.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans">
      <HeaderNavbar activeRoute="/contact" />

      {/* Hero Section */}
      <section className="relative bg-white py-14 sm:py-18 px-6 border-b border-[#042E3A]/10">
        <div className="relative mx-auto max-w-screen-xl z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-[13px] sm:text-[14px] font-bold uppercase tracking-widest text-[#042E3A]/70">
              <li>
                <Link href="/" className="text-[#042E3A]/70 hover:text-[#0a7a8c] transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight size={13} className="text-[#0a7a8c]" />
                <span className="text-[#042E3A] font-bold">Contact Us</span>
              </li>
            </ol>
          </nav>

          {/* Title */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#042E3A] mb-4 tracking-tight">
              Contact Us
            </h1>
            <div className="h-[4px] w-16 bg-gradient-to-r from-[#042E3A] to-[#0a7a8c] mb-5 rounded-full" />
            <p className="text-[17px] sm:text-[19px] text-[#042E3A]/90 leading-relaxed font-normal">
              We would love to hear from you. Reach out to us for any inquiries, collaboration, 
              or support. Our team is here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative px-6 z-20 -mt-10" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="bg-white border border-neutral-200 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.06)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200">
            
            {/* Our Office */}
            <div className="p-7 sm:p-8 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
              <div className="w-14 h-14 bg-[#f0fdfa] border-2 border-[#0a7a8c] rounded-full flex items-center justify-center flex-shrink-0 text-[#0a7a8c] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#042E3A] group-hover:to-[#0a7a8c] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(10,122,140,0.35)]">
                <MapPin size={26} strokeWidth={2.2} />
              </div>
              <div>
                <h4 className="text-[17px] sm:text-[18.5px] font-black uppercase tracking-[0.14em] text-[#042E3A] mb-2.5 group-hover:text-[#0a7a8c] transition-colors">
                  Our Office
                </h4>
                <p className="text-[15.5px] sm:text-[16.5px] text-neutral-700 leading-relaxed">
                  1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.
                </p>
              </div>
            </div>

            {/* Call Us */}
            <div className="p-7 sm:p-8 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 group cursor-pointer" data-aos="fade-up" data-aos-delay="200">
              <div className="w-14 h-14 bg-[#f0fdfa] border-2 border-[#0a7a8c] rounded-full flex items-center justify-center flex-shrink-0 text-[#0a7a8c] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#042E3A] group-hover:to-[#0a7a8c] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(10,122,140,0.35)]">
                <Phone size={26} strokeWidth={2.2} />
              </div>
              <div>
                <h4 className="text-[17px] sm:text-[18.5px] font-black uppercase tracking-[0.14em] text-[#042E3A] mb-2.5 group-hover:text-[#0a7a8c] transition-colors">
                  Call Us
                </h4>
                <div className="text-[15.5px] sm:text-[16.5px] text-neutral-700 leading-relaxed space-y-1">
                  <p className="font-bold text-[#042E3A]">Phone: 0092-42-38924737</p>
                  <p>WhatsApp: 0092-304-7527498</p>
                  <p className="lg:pl-[86px]">0092-321-8431665</p>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="p-7 sm:p-8 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 group cursor-pointer" data-aos="fade-up" data-aos-delay="300">
              <div className="w-14 h-14 bg-[#f0fdfa] border-2 border-[#0a7a8c] rounded-full flex items-center justify-center flex-shrink-0 text-[#0a7a8c] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#042E3A] group-hover:to-[#0a7a8c] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(10,122,140,0.35)]">
                <Mail size={26} strokeWidth={2.2} />
              </div>
              <div>
                <h4 className="text-[17px] sm:text-[18.5px] font-black uppercase tracking-[0.14em] text-[#042E3A] mb-2.5 group-hover:text-[#0a7a8c] transition-colors">
                  Email Us
                </h4>
                <div className="text-[15.5px] sm:text-[16.5px] text-neutral-700 leading-relaxed space-y-1">
                  <p className="text-[#042E3A] font-bold">info@roysons.org</p>
                  <p>support@roysons.org</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-7 sm:p-8 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 group cursor-pointer" data-aos="fade-up" data-aos-delay="400">
              <div className="w-14 h-14 bg-[#f0fdfa] border-2 border-[#0a7a8c] rounded-full flex items-center justify-center flex-shrink-0 text-[#0a7a8c] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#042E3A] group-hover:to-[#0a7a8c] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_4px_16px_rgba(10,122,140,0.35)]">
                <Clock size={26} strokeWidth={2.2} />
              </div>
              <div>
                <h4 className="text-[17px] sm:text-[18.5px] font-black uppercase tracking-[0.14em] text-[#042E3A] mb-2.5 group-hover:text-[#0a7a8c] transition-colors">
                  Business Hours
                </h4>
                <div className="text-[15.5px] sm:text-[16.5px] text-neutral-700 leading-relaxed space-y-1">
                  <p>Monday - Friday</p>
                  <p className="font-bold text-[#042E3A]">9:00 AM - 6:00 PM</p>
                  <p>Saturday - 9:00 AM - 1:00 PM</p>
                  <p className="text-neutral-400">(Sunday Closed)</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-20 px-6 bg-white" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-stretch">
            
            {/* Form Panel (Left Col, 3/5 cols) */}
            <div className="lg:col-span-3 bg-white border border-neutral-200 p-8 sm:p-10 rounded-sm" data-aos="fade-right" data-aos-delay="100">
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-[#042E3A] mb-3">
                Send Us A Message
              </h2>
              <p className="text-[16px] sm:text-[17px] text-neutral-600 leading-relaxed mb-8">
                Have a question or need assistance? Fill out the form and our team will get 
                back to you as soon as possible.
              </p>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={26} className="text-white" />
                  </div>
                  <h4 className="text-[17px] sm:text-[19px] font-black uppercase tracking-wider text-black">
                    Message Transmitted
                  </h4>
                  <p className="text-[14px] sm:text-[15px] text-neutral-600 mt-2 max-w-sm">
                    Thank you. We have received your query and will reply to your email address as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] sm:text-[14px] font-black text-[#042E3A] uppercase tracking-[0.12em]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        placeholder="Enter your full name" 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white border border-neutral-300 px-4 py-3.5 text-[15px] sm:text-[16px] text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] focus:ring-1 focus:ring-[#0a7a8c] transition-all rounded-[2px]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] sm:text-[14px] font-black text-[#042E3A] uppercase tracking-[0.12em]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email"
                        placeholder="Enter your email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-neutral-300 px-4 py-3.5 text-[15px] sm:text-[16px] text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] focus:ring-1 focus:ring-[#0a7a8c] transition-all rounded-[2px]"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] sm:text-[14px] font-black text-[#042E3A] uppercase tracking-[0.12em]">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel"
                        placeholder="Enter your phone number" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-neutral-300 px-4 py-3.5 text-[15px] sm:text-[16px] text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] focus:ring-1 focus:ring-[#0a7a8c] transition-all rounded-[2px]"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[13px] sm:text-[14px] font-black text-[#042E3A] uppercase tracking-[0.12em]">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div
                        className="relative w-full"
                        tabIndex={0}
                        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsSubjectOpen(false); }}
                      >
                        <div
                          onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                          className={`w-full bg-[#f0fdfa] border ${isSubjectOpen ? 'border-[#0a7a8c] ring-2 ring-[#0a7a8c]/20' : 'border-[#0a7a8c]/40'} px-4 py-3.5 text-[15px] sm:text-[16px] text-[#042E3A] font-medium outline-none transition-colors rounded-[2px] cursor-pointer flex justify-between items-center`}
                        >
                          <span>{formData.subject ? {
                            general: 'General Inquiries',
                            services: 'Service Information',
                            partnership: 'Partnership Opportunities',
                            support: 'Support & Assistance'
                          }[formData.subject] : 'Select a subject'}</span>
                          <ChevronDown size={16} className={`text-[#0a7a8c] transition-transform duration-300 ${isSubjectOpen ? 'rotate-180' : ''}`} />
                        </div>
                        {isSubjectOpen && (
                          <div className="absolute z-50 w-full mt-1 bg-white border border-[#0a7a8c]/30 rounded-[2px] shadow-xl overflow-hidden">
                            {[
                              { value: 'general', label: 'General Inquiries' },
                              { value: 'services', label: 'Service Information' },
                              { value: 'partnership', label: 'Partnership Opportunities' },
                              { value: 'support', label: 'Support & Assistance' },
                            ].map((opt) => (
                              <div
                                key={opt.value}
                                onClick={() => { setFormData({ ...formData, subject: opt.value }); setIsSubjectOpen(false); }}
                                className="px-4 py-3.5 text-[14.5px] sm:text-[15.5px] text-[#042E3A] hover:bg-[#0a7a8c] hover:text-white cursor-pointer transition-colors"
                              >
                                {opt.label}
                              </div>
                            ))}
                          </div>
                        )}
                        <select required value={formData.subject} onChange={() => {}} className="hidden">
                          <option value="" disabled>Select a subject</option>
                          <option value="general">General Inquiries</option>
                          <option value="services">Service Information</option>
                          <option value="partnership">Partnership Opportunities</option>
                          <option value="support">Support & Assistance</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] sm:text-[14px] font-black text-[#042E3A] uppercase tracking-[0.12em]">
                      Company / Organization
                    </label>
                    <input 
                      type="text"
                      placeholder="Enter your company name" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-neutral-300 px-4 py-3.5 text-[15px] sm:text-[16px] text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] focus:ring-1 focus:ring-[#0a7a8c] transition-all rounded-[2px]"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] sm:text-[14px] font-black text-[#042E3A] uppercase tracking-[0.12em]">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-neutral-300 px-4 py-3.5 text-[15px] sm:text-[16px] text-neutral-900 placeholder-neutral-400 outline-none focus:border-[#0a7a8c] focus:ring-1 focus:ring-[#0a7a8c] transition-all resize-none rounded-[2px]"
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3.5 rounded-[2px] text-[14px] font-medium tracking-wide">
                      ⚠️ {submitError}
                    </div>
                  )}

                  {/* Submit buttons */}
                  <div className="flex flex-col items-center gap-4 pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] disabled:opacity-50 text-white px-12 py-4 text-[14px] sm:text-[15px] font-black uppercase tracking-[0.16em] flex items-center gap-3 transition-all duration-300 rounded-[3px] shadow-[0_4px_16px_rgba(10,122,140,0.35)] hover:shadow-[0_8px_26px_rgba(13,148,136,0.55)] hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed"
                    >
                      <span className="text-white font-black">{isSubmitting ? "Sending..." : "Send Message"}</span>
                      <ArrowRight size={16} strokeWidth={2.5} className="text-white" />
                    </button>
                    <div className="flex items-center gap-2 text-neutral-500 text-[13px]">
                      <Lock size={14} />
                      <span>Your information is safe with us. We respect your privacy.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Map & Get in Touch Panel (Right Col, 2/5 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-8" data-aos="fade-left" data-aos-delay="150">
              
              {/* Find Us Card */}
              <div className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-sm">
                <h3 className="text-[16px] sm:text-[17px] font-black uppercase tracking-[0.14em] text-[#042E3A] mb-4 pb-2 border-b border-neutral-200">
                  Find ROYSONS on Google Map
                </h3>

                {/* Google Maps Iframe */}
                <div className="relative w-full h-[240px] bg-neutral-100 border border-neutral-200 overflow-hidden mb-4">
                  <iframe 
                    src="https://maps.google.com/maps?q=Rehman%20Centre-2,%20Zakir%20Tikka%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="Roy Sons Pvt. Ltd. Location Map"
                  />
                </div>

                {/* Details layout inside map block */}
                <a 
                  href="https://maps.app.goo.gl/skeG9WX8Vxfxp2X29" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start gap-3 bg-[#f0fdfa] border border-[#0a7a8c]/25 p-3.5 hover:border-[#0a7a8c] transition-colors rounded-[2px]"
                >
                  <MapPin size={18} className="text-[#0a7a8c] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[14.5px] font-black uppercase tracking-wider text-[#042E3A]">
                      Roy Sons Pvt. Ltd.
                    </p>
                    <p className="text-[13px] text-neutral-600 leading-normal mt-0.5">
                      1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Lahore.
                    </p>
                  </div>
                </a>
              </div>

              {/* Get in Touch Checkmarks */}
              <div className="bg-white border border-neutral-200 p-6 sm:p-7 rounded-sm flex-1 flex flex-col justify-center">
                <h3 className="text-[16px] sm:text-[17px] font-black uppercase tracking-[0.14em] text-[#042E3A] mb-4 pb-2 border-b border-neutral-200">
                  Get In Touch
                </h3>
                <p className="text-[15px] sm:text-[16px] text-neutral-600 leading-relaxed mb-6">
                  Whether you have a question about our services, partnerships, or anything else, 
                  our team is ready to answer all your questions.
                </p>

                {/* Checklist */}
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={19} className="text-[#0a7a8c] flex-shrink-0" strokeWidth={2.4} />
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold uppercase tracking-wider text-[#042E3A]">
                      General Inquiries
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={19} className="text-[#0a7a8c] flex-shrink-0" strokeWidth={2.4} />
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold uppercase tracking-wider text-[#042E3A]">
                      Service Information
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={19} className="text-[#0a7a8c] flex-shrink-0" strokeWidth={2.4} />
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold uppercase tracking-wider text-[#042E3A]">
                      Partnership Opportunities
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={19} className="text-[#0a7a8c] flex-shrink-0" strokeWidth={2.4} />
                    <span className="text-[14.5px] sm:text-[15.5px] font-bold uppercase tracking-wider text-[#042E3A]">
                      Support & Assistance
                    </span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
