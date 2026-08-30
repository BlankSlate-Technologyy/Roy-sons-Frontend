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
      <section className="relative bg-neutral-950 py-24 px-6 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: "url('/hero-building.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-transparent" />
        
        <div className="relative mx-auto max-w-screen-xl z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-[11px] text-neutral-400 font-bold uppercase tracking-widest">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-1">
                <ChevronRight size={10} className="text-neutral-500" />
                <span className="text-white">Contact Us</span>
              </li>
            </ol>
          </nav>

          {/* Title */}
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Contact Us
            </h1>
            <div className="h-[3px] w-12 bg-white mb-6" />
            <p className="text-[13.5px] text-neutral-300 leading-relaxed font-normal">
              We would love to hear from you. Reach out to us for any inquiries, collaboration, 
              or support. Our team is here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative px-6 z-20 -mt-10" data-aos="fade-up">
        <div className="mx-auto max-w-screen-xl">
          <div className="bg-white border border-neutral-200 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.04)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-205">
            
            {/* Our Office */}
            <div className="p-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 group cursor-pointer" data-aos="fade-up" data-aos-delay="100">
              <div className="w-12 h-12 bg-neutral-950 border-2 border-[#dfb753] rounded-full flex items-center justify-center flex-shrink-0 text-[#dfb753] transition-all duration-300 group-hover:bg-[#dfb753] group-hover:text-black">
                <MapPin size={22} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[14px] font-black uppercase tracking-[0.16em] text-neutral-950 mb-2">
                  Our Office
                </h4>
                <p className="text-[13.5px] text-neutral-600 leading-relaxed">
                  1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore.
                </p>
              </div>
            </div>

            {/* Call Us */}
            <div className="p-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 group cursor-pointer" data-aos="fade-up" data-aos-delay="200">
              <div className="w-12 h-12 bg-neutral-950 border-2 border-[#dfb753] rounded-full flex items-center justify-center flex-shrink-0 text-[#dfb753] transition-all duration-300 group-hover:bg-[#dfb753] group-hover:text-black">
                <Phone size={22} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[14px] font-black uppercase tracking-[0.16em] text-neutral-950 mb-2">
                  Call Us
                </h4>
                <div className="text-[13.5px] text-neutral-600 leading-relaxed space-y-1">
                  <p className="font-bold text-neutral-900">Phone: 0092-42-38924737</p>
                  <p>WhatsApp: 0092-304-7527498</p>
                  <p className="lg:pl-[78px]">0092-321-8431665</p>
                </div>
              </div>
            </div>

            {/* Email Us */}
            <div className="p-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 group cursor-pointer" data-aos="fade-up" data-aos-delay="300">
              <div className="w-12 h-12 bg-neutral-950 border-2 border-[#dfb753] rounded-full flex items-center justify-center flex-shrink-0 text-[#dfb753] transition-all duration-300 group-hover:bg-[#dfb753] group-hover:text-black">
                <Mail size={22} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[14px] font-black uppercase tracking-[0.16em] text-neutral-950 mb-2">
                  Email Us
                </h4>
                <div className="text-[13.5px] text-neutral-600 leading-relaxed space-y-1">
                  <p className="text-neutral-900 font-bold">info@roysons.org</p>
                  <p>support@roysons.org</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 group cursor-pointer" data-aos="fade-up" data-aos-delay="400">
              <div className="w-12 h-12 bg-neutral-950 border-2 border-[#dfb753] rounded-full flex items-center justify-center flex-shrink-0 text-[#dfb753] transition-all duration-300 group-hover:bg-[#dfb753] group-hover:text-black">
                <Clock size={22} strokeWidth={2} />
              </div>
              <div>
                <h4 className="text-[14px] font-black uppercase tracking-[0.16em] text-neutral-950 mb-2">
                  Business Hours
                </h4>
                <div className="text-[13.5px] text-neutral-600 leading-relaxed space-y-1">
                  <p>Monday - Friday</p>
                  <p className="font-bold text-neutral-900">9:00 AM - 6:00 PM</p>
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
              <h2 className="text-[20px] font-black uppercase tracking-wider text-neutral-950 mb-3">
                Contact Us
              </h2>
              <p className="text-[12.5px] text-neutral-500 leading-relaxed mb-8">
                Have a question or need assistance? Fill out the form and our team will get 
                back to you as soon as possible.
              </p>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={22} className="text-white" />
                  </div>
                  <h4 className="text-[13.5px] font-black uppercase tracking-wider text-black">
                    Message Transmitted
                  </h4>
                  <p className="text-[11.5px] text-neutral-550 mt-1 max-w-xs">
                    Thank you. We have received your query and will reply to your email address as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-neutral-950 uppercase tracking-[0.14em]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="text"
                        placeholder="Enter your full name" 
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-neutral-950 uppercase tracking-[0.14em]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="email"
                        placeholder="Enter your email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px]"
                      />
                    </div>
                  </div>

                  {/* Phone and Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-neutral-950 uppercase tracking-[0.14em]">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input 
                        type="tel"
                        placeholder="Enter your phone number" 
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px]"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-black text-neutral-950 uppercase tracking-[0.14em]">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <div
                        className="relative w-full"
                        tabIndex={0}
                        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsSubjectOpen(false); }}
                      >
                        <div
                          onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                          className={`w-full bg-neutral-950 border ${isSubjectOpen ? 'border-[#dfb753]' : 'border-neutral-800'} px-4 py-3 text-[12px] text-[#dfb753] outline-none transition-colors rounded-[2px] cursor-pointer flex justify-between items-center`}
                        >
                          <span>{formData.subject ? {
                            general: 'General Inquiries',
                            services: 'Service Information',
                            partnership: 'Partnership Opportunities',
                            support: 'Support & Assistance'
                          }[formData.subject] : 'Select a subject'}</span>
                          <ChevronDown size={14} className={`text-[#a3a3a3] transition-transform duration-300 ${isSubjectOpen ? 'rotate-180' : ''}`} />
                        </div>
                        {isSubjectOpen && (
                          <div className="absolute z-50 w-full mt-1 bg-neutral-950 border border-neutral-800 rounded-[2px] shadow-xl">
                            {[
                              { value: 'general', label: 'General Inquiries' },
                              { value: 'services', label: 'Service Information' },
                              { value: 'partnership', label: 'Partnership Opportunities' },
                              { value: 'support', label: 'Support & Assistance' },
                            ].map((opt) => (
                              <div
                                key={opt.value}
                                onClick={() => { setFormData({ ...formData, subject: opt.value }); setIsSubjectOpen(false); }}
                                className="px-4 py-3 text-[12px] text-[#dfb753] hover:bg-[#dfb753] hover:text-black cursor-pointer transition-colors"
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
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-neutral-950 uppercase tracking-[0.14em]">
                      Company / Organization
                    </label>
                    <input 
                      type="text"
                      placeholder="Enter your company name" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors rounded-[2px]"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-neutral-950 uppercase tracking-[0.14em]">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      rows={5}
                      required
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-neutral-200 px-4 py-3 text-[12px] text-neutral-800 placeholder-neutral-400 outline-none focus:border-neutral-950 transition-colors resize-none rounded-[2px]"
                    />
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-[2px] text-[11.5px] font-medium tracking-wide">
                      ⚠️ {submitError}
                    </div>
                  )}

                  {/* Submit buttons */}
                  <div className="flex flex-col items-center gap-4 pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-black hover:bg-neutral-800 disabled:bg-neutral-400 text-white px-10 py-3.5 text-[10.5px] font-black uppercase tracking-[0.18em] flex items-center gap-3 transition-colors rounded-[2px] cursor-pointer disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight size={13} strokeWidth={2.5} />
                    </button>
                    <div className="flex items-center gap-2 text-neutral-400 text-[10px]">
                      <Lock size={12} />
                      <span>Your information is safe with us. We respect your privacy.</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Map & Get in Touch Panel (Right Col, 2/5 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-8" data-aos="fade-left" data-aos-delay="150">
              
              {/* Find Us Card */}
              <div className="bg-white border border-neutral-200 p-6 rounded-sm">
                <h3 className="text-[13px] font-black uppercase tracking-[0.16em] text-neutral-950 mb-4 pb-2 border-b border-neutral-200">
                  Find ROYSONS on Google Map
                </h3>

                {/* Google Maps Iframe */}
                <div className="relative w-full h-[240px] bg-neutral-100 border border-neutral-200 overflow-hidden mb-4">
                  {/* Styled google map iframe based on the maps.google.com coordinates query which targets their exact Zakir Tikka Ring Road location */}
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
                  className="flex items-start gap-3 bg-neutral-50 border border-neutral-200 p-3 hover:border-black transition-colors rounded-[2px]"
                >
                  <MapPin size={16} className="text-neutral-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[11.5px] font-black uppercase tracking-wider text-neutral-950">
                      Roy Sons Pvt. Ltd.
                    </p>
                    <p className="text-[10px] text-neutral-500 leading-tight mt-0.5">
                      1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Lahore.
                    </p>
                  </div>
                </a>
              </div>

              {/* Get in Touch Checkmarks */}
              <div className="bg-white border border-neutral-200 p-6 rounded-sm flex-1 flex flex-col justify-center">
                <h3 className="text-[13px] font-black uppercase tracking-[0.16em] text-neutral-950 mb-4 pb-2 border-b border-neutral-200">
                  Get In Touch
                </h3>
                <p className="text-[12px] text-neutral-500 leading-relaxed mb-6">
                  Whether you have a question about our services, partnerships, or anything else, 
                  our team is ready to answer all your questions.
                </p>

                {/* Checklist */}
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-neutral-950 flex-shrink-0" strokeWidth={2.2} />
                    <span className="text-[11.5px] font-bold uppercase tracking-wider text-neutral-800">
                      General Inquiries
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-neutral-950 flex-shrink-0" strokeWidth={2.2} />
                    <span className="text-[11.5px] font-bold uppercase tracking-wider text-neutral-800">
                      Service Information
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-neutral-950 flex-shrink-0" strokeWidth={2.2} />
                    <span className="text-[11.5px] font-bold uppercase tracking-wider text-neutral-800">
                      Partnership Opportunities
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-neutral-950 flex-shrink-0" strokeWidth={2.2} />
                    <span className="text-[11.5px] font-bold uppercase tracking-wider text-neutral-800">
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
