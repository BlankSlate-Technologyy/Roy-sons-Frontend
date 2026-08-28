"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
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

  return (
    <footer className="bg-neutral-950 text-white font-sans border-t border-neutral-900">
      {/* Top Newsletter Bar */}
      <div className="border-b border-neutral-900 bg-neutral-950/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[15px] font-black uppercase tracking-[0.2em] text-[#C6A15A] block mb-1">
              Stay Informed
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              Subscribe to Roysons Corporate Insights &amp; Market Reports
            </h3>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto flex-1 max-w-md flex flex-col gap-2">
            <div className="flex rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/80 focus-within:border-[#C6A15A] transition-colors p-1">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter corporate email..."
                className="w-full px-4 py-2 bg-transparent text-xs text-white placeholder-neutral-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubscribing}
                className="px-5 py-2.5 rounded-lg text-xs font-bold bg-[#C6A15A] text-neutral-950 flex items-center gap-1.5 hover:bg-[#d4b069] transition-colors disabled:opacity-50 cursor-pointer flex-shrink-0"
              >
                {isSubscribing ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send size={12} />
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
        <div className="lg:col-span-1 flex flex-col pr-0 lg:pr-6">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/logos/Roysons logo_logo variation 2 png.png"
              alt="Roy Sons Logo"
              width={180}
              height={80}
              className="w-auto h-12 md:h-14 lg:h-14 object-contain"
            />
          </Link>
          <p className="text-xs text-neutral-400 leading-relaxed font-normal mb-6">
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
                  className="group w-9 h-9 rounded-lg border border-[#C6A15A]/30 bg-white/5 flex items-center justify-center transition-all duration-300 hover:bg-[#C6A15A] hover:border-[#C6A15A] hover:scale-105"
                >
                  <SocialIcon size={15} className="text-[#C6A15A] group-hover:text-neutral-950 transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-[14px] font-black uppercase tracking-[0.24em] text-white mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {FOOTER_QUICK_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.destination}
                  className="text-xs text-neutral-400 font-medium hover:text-[#C6A15A] transition-colors duration-200"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[14px] font-black uppercase tracking-[0.24em] text-white mb-5">
            Our Services
          </h4>
          <ul className="space-y-3">
            {FOOTER_SERVICES_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.destination}
                  className="text-xs text-neutral-400 font-medium hover:text-[#C6A15A] transition-colors duration-200"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[14px] font-black uppercase tracking-[0.24em] text-white mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4">
            {CORPORATE_HELPLINE_DETAILS.map((detail, index) => {
              const DetailIcon = detail.icon;
              return (
                <li key={index} className="flex gap-3 items-start group">
                  <div className="p-1.5 rounded-md bg-white/5 border border-[#C6A15A]/20 transition-all duration-300 group-hover:bg-[#C6A15A] group-hover:border-[#C6A15A] mt-0.5 flex-shrink-0">
                    <DetailIcon size={13} className="text-[#C6A15A] group-hover:text-neutral-950 transition-colors duration-300" />
                  </div>
                  <span className="text-xs text-neutral-400 whitespace-pre-line leading-relaxed font-medium group-hover:text-[#C6A15A] transition-colors duration-200">
                    {detail.value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Copyright Sub-bar */}
      <div className="border-t border-neutral-900 bg-neutral-950 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 font-semibold tracking-wider text-center md:text-left">
            &copy; {currentYear} ROYSONS Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-neutral-500 font-medium hover:text-[#C6A15A] transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-neutral-500 font-medium hover:text-[#C6A15A] transition-colors duration-200">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
