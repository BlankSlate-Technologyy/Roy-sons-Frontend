"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, CheckCircle2, AlertCircle, Loader2, ChevronUp } from "lucide-react";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES_LINKS,
  CORPORATE_HELPLINE_DETAILS,
  SOCIAL_MEDIA_HANDLES,
} from "@/lib/constants";

export default function CorporateFooter({
  caption = "ROYSONS Pvt. Ltd. is a diversified conglomerate committed to delivering excellence and building a better tomorrow.",
  currentYear = new Date().getFullYear(),
}) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState({ type: null, message: "" });

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setIsSubscribing(true);
    setNewsletterStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setNewsletterStatus({
          type: "success",
          message: data.message || "Thank you for subscribing to our corporate updates.",
        });
        setNewsletterEmail("");
      } else {
        setNewsletterStatus({
          type: "error",
          message: data.message || "Subscription could not be processed. Please try again.",
        });
      }
    } catch {
      setNewsletterStatus({
        type: "error",
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubscribing(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="roysons-dark-footer bg-[#042630] text-white font-sans border-t border-[#0a7a8c]/30" data-aos="fade-up">
      {/* Top Newsletter Bar */}
      <div className="footer-newsletter-bar border-b border-[#0a7a8c]/25 bg-[#031e25] py-8 px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="100">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="newsletter-tag text-xs font-black uppercase tracking-[0.2em] text-[#2dd4bf]">
              STAY INFORMED
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Subscribe to Roysons Corporate Insights &amp; Market Reports
            </h3>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto flex-1 max-w-md flex flex-col gap-2">
            <div className="flex rounded-xl overflow-hidden border border-[#0a7a8c]/40 bg-[#052831] focus-within:border-[#2dd4bf] focus-within:shadow-[0_0_14px_rgba(45,212,191,0.25)] transition-all p-1">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter corporate email..."
                className="w-full px-4 py-2 bg-transparent text-xs text-white placeholder-teal-200/50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-6 py-2.5 rounded-lg text-xs font-black bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] text-white flex items-center gap-1.5 transition-all duration-300 shadow-[0_4px_14px_rgba(10,122,140,0.35)] hover:shadow-[0_6px_22px_rgba(13,148,136,0.55)] disabled:opacity-50 cursor-pointer flex-shrink-0"
              >
                {isSubscribing ? (
                  <Loader2 size={14} className="animate-spin text-white" />
                ) : (
                  <>
                    <span className="text-white font-black">Subscribe</span>
                    <Send size={12} className="text-white" />
                  </>
                )}
              </button>
            </div>

            {newsletterStatus.type === "success" && (
              <div className="flex items-center gap-1.5 text-[15px] font-semibold text-emerald-400">
                <CheckCircle2 size={13} className="flex-shrink-0" />
                <span>{newsletterStatus.message}</span>
              </div>
            )}

            {newsletterStatus.type === "error" && (
              <div className="flex items-center gap-1.5 text-[15px] font-semibold text-rose-400">
                <AlertCircle size={13} className="flex-shrink-0" />
                <span>{newsletterStatus.message}</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        <div className="lg:col-span-1 flex flex-col pr-0 lg:pr-6" data-aos="fade-up" data-aos-delay="100">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logos/royson-hoding.png"
              alt="Roy Sons Logo"
              width={180}
              height={80}
              className="w-auto h-12 md:h-14 lg:h-14 object-contain brightness-0 invert"
            />
          </Link>
          <p className="footer-caption text-xs text-teal-100/75 leading-relaxed font-normal mb-6">
            {caption}
          </p>

          <div className="flex gap-2.5">
            {SOCIAL_MEDIA_HANDLES.map((handle, index) => {
              const SocialIcon = handle.icon;
              return (
                <a
                  key={index}
                  href={handle.href}
                  aria-label={handle.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon group w-9 h-9 rounded-lg border border-[#0a7a8c]/30 bg-[#063340] flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0a7a8c] hover:to-[#0d9488] hover:border-[#14b8a6] hover:shadow-[0_4px_14px_rgba(10,122,140,0.3)] hover:scale-105"
                >
                  <SocialIcon size={15} className="text-[#2dd4bf] group-hover:text-white transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="footer-heading text-[14px] font-black uppercase tracking-[0.24em] text-[#2dd4bf] mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {FOOTER_QUICK_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.destination}
                  className="footer-link text-xs text-[#2dd4bf] hover:text-white font-medium transition-colors duration-200 inline-block"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="footer-heading text-[14px] font-black uppercase tracking-[0.24em] text-[#2dd4bf] mb-5">
            Our Services
          </h4>
          <ul className="space-y-3">
            {FOOTER_SERVICES_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.destination}
                  className="footer-link text-xs text-[#2dd4bf] hover:text-white font-medium transition-colors duration-200 inline-block"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <h4 className="footer-heading text-[14px] font-black uppercase tracking-[0.24em] text-[#2dd4bf] mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4">
            {CORPORATE_HELPLINE_DETAILS.map((detail, index) => {
              const DetailIcon = detail.icon;
              return (
                <li key={index} className="footer-contact-item flex gap-3 items-start group">
                  <div className="p-1.5 rounded-md bg-[#063340] border border-[#0a7a8c]/30 transition-all duration-300 group-hover:bg-[#0a7a8c] group-hover:border-[#14b8a6] group-hover:shadow-[0_2px_8px_rgba(10,122,140,0.3)] mt-0.5 flex-shrink-0">
                    <DetailIcon size={13} className="text-[#2dd4bf] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs text-teal-100/85 whitespace-pre-line leading-relaxed font-medium group-hover:text-white transition-colors duration-200">
                    {detail.value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Copyright Sub-bar */}
      <div className="footer-copyright-bar border-t border-[#0a7a8c]/20 bg-[#021a20] py-3 sm:py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-teal-200/60 font-semibold tracking-wider text-center sm:text-left">
            &copy; {currentYear} ROYSONS Pvt. Ltd. All Rights Reserved.
          </p>

          {/* Right Section: Privacy Policy, Terms & Conditions, and Scroll to Top Button aligned horizontally */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/privacy" className="footer-legal-link text-xs text-[#2dd4bf] font-medium hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-legal-link text-xs text-[#2dd4bf] font-medium hover:text-white transition-colors duration-200">
              Terms &amp; Conditions
            </Link>

            {/* Scroll to Top Button inline next to Terms & Conditions */}
            <button
              type="button"
              id="scroll-to-top-btn"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-[3px] border border-[#14b8a6] bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] text-white flex items-center justify-center shadow-[0_2px_10px_rgba(10,122,140,0.3)] hover:shadow-[0_4px_16px_rgba(13,148,136,0.5)] transition-all duration-300 group cursor-pointer hover:-translate-y-0.5 ml-1"
            >
              <ChevronUp size={16} strokeWidth={2.6} className="text-white transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
