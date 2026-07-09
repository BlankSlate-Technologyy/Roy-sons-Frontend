"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES_LINKS,
  CORPORATE_HELPLINE_DETAILS,
  SOCIAL_MEDIA_HANDLES,
} from "@/lib/constants";

export default function CorporateFooter({
  caption = "Roy Sons is a diversified conglomerate committed to delivering excellence and building a better tomorrow.",
  currentYear = 2024,
}) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccessMsg, setSubmitSuccessMsg] = useState("");
  const [submitError, setSubmitError] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccessMsg("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const response = await fetch(`${apiUrl}/newsletter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to subscribe to newsletter.");
      }

      setSubscribed(true);
      setSubmitSuccessMsg(data.message || "Subscription Active");
      setEmail("");
    } catch (err) {
      console.error("Newsletter submission error:", err);
      setSubmitError(err.message || "Connection failed.");
      // Clear error after 5s
      setTimeout(() => setSubmitError(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-neutral-950 text-white font-sans border-t border-neutral-900">
      
      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
        
        <div className="lg:col-span-1 flex flex-col pr-8 lg:border-r lg:border-neutral-800 pb-12 lg:pb-0">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/Roysons Logo White.png"
              alt="Roy Sons Logo"
              width={160}
              height={60}
              className="object-contain"
            />
          </Link>
          <p className="text-[12px] text-neutral-400 leading-relaxed font-normal mb-6">
            {caption}
          </p>
          
          <div className="flex gap-2">
            {SOCIAL_MEDIA_HANDLES.map((handle, index) => {
              const SocialIcon = handle.icon;
              return (
                <a
                  key={index}
                  href={handle.href}
                  aria-label={handle.label}
                  className="w-8 h-8 rounded-sm bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-all duration-300"
                >
                  <SocialIcon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="px-8 lg:border-r lg:border-neutral-800 pb-12 lg:pb-0">
          <h4 className="text-[10px] font-black uppercase tracking-[0.24em] text-white mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {FOOTER_QUICK_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.destination}
                  className="text-[11.5px] text-neutral-400 hover:text-white hover:underline transition-all duration-200"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-8 lg:border-r lg:border-neutral-800 pb-12 lg:pb-0">
          <h4 className="text-[10px] font-black uppercase tracking-[0.24em] text-white mb-5">
            Our Services
          </h4>
          <ul className="space-y-3">
            {FOOTER_SERVICES_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.destination}
                  className="text-[11.5px] text-neutral-400 hover:text-white hover:underline transition-all duration-200"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-8 lg:border-r lg:border-neutral-800 pb-12 lg:pb-0">
          <h4 className="text-[10px] font-black uppercase tracking-[0.24em] text-white mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4">
            {CORPORATE_HELPLINE_DETAILS.map((detail, index) => {
              const DetailIcon = detail.icon;
              return (
                <li key={index} className="flex gap-3 items-start">
                  <DetailIcon size={14} className="text-neutral-500 mt-0.5 flex-shrink-0" />
                  <span className="text-[11.5px] text-neutral-400 whitespace-pre-line leading-relaxed font-normal">
                    {detail.value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="pl-8">
          <h4 className="text-[10px] font-black uppercase tracking-[0.24em] text-white mb-5">
            Newsletter
          </h4>
          <p className="text-[11.5px] text-neutral-300 leading-relaxed mb-4">
            Subscribe to our newsletter for latest updates.
          </p>
          
          {subscribed ? (
            <div className="bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-sm">
              <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">
                ✓ {submitSuccessMsg || "Subscription Active"}
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                required
                disabled={isSubmitting}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white text-[11px] text-black placeholder-neutral-500 px-4 py-3 outline-none font-medium rounded-sm disabled:bg-neutral-800 disabled:text-neutral-500"
              />
              {submitError && (
                <span className="text-[9.5px] text-red-500 font-medium tracking-wide">
                  ⚠️ {submitError}
                </span>
              )}
              <button
                type="submit"
                aria-label="Subscribe now"
                disabled={isSubmitting}
                className="w-full py-3 bg-white text-black hover:bg-neutral-200 disabled:bg-neutral-800 disabled:text-neutral-450 transition-colors flex items-center justify-center text-[11px] font-bold uppercase tracking-wider rounded-sm cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Subscribe"}
              </button>
            </form>
          )}
        </div>

      </div>

      <div className="border-t border-neutral-900 bg-neutral-950/50 py-6">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10.5px] text-neutral-500 font-semibold tracking-wider">
            © {currentYear} Roy Sons Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[10.5px] text-neutral-500 hover:text-white transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10.5px] text-neutral-500 hover:text-white transition-colors font-medium">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
