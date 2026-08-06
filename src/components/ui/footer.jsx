"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES_LINKS,
  CORPORATE_HELPLINE_DETAILS,
  SOCIAL_MEDIA_HANDLES,
} from "@/lib/constants";

export default function CorporateFooter({
  caption = "ROYSONS Pvt.Ltd is a diversified conglomerate committed to delivering excellence and building a better tomorrow.",
  currentYear = 2024,
}) {
  return (
    <footer className="bg-neutral-950 text-white font-sans">

      <div className="max-w-screen-xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">

        <div className="lg:col-span-1 flex flex-col pr-8 pb-12 lg:pb-0">
          <Link href="/" className="inline-block mb-4">
            <Image
              src="/ROYSONS logo.png"
              alt="Roy Sons Logo"
              width={250}
              height={100}
              className="object-contain"
            />
          </Link>
          <p className="text-[12px] text-neutral-400 leading-relaxed font-normal mb-6">
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
                  className="group w-9 h-9 rounded-sm border border-[#C6A15A]/40 bg-transparent flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#C6A15A] hover:border-[#C6A15A] hover:scale-110 hover:shadow-[0_0_12px_rgba(198,161,90,0.4)]"
                >
                  <SocialIcon size={15} className="text-[#C6A15A] group-hover:text-[#2D3136] transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="px-8 pb-12 lg:pb-0">
          <h4 className="text-[10px] font-black uppercase tracking-[0.24em] text-white mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {FOOTER_QUICK_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.destination}
                  className="text-[11.5px] text-neutral-400 font-normal hover:text-[#C6A15A] transition-colors duration-200"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-8 pb-12 lg:pb-0">
          <h4 className="text-[10px] font-black uppercase tracking-[0.24em] text-white mb-5">
            Our Services
          </h4>
          <ul className="space-y-3">
            {FOOTER_SERVICES_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.destination}
                  className="text-[11.5px] text-neutral-400 font-normal hover:text-[#C6A15A] transition-colors duration-200"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-8 pb-12 lg:pb-0">
          <h4 className="text-[10px] font-black uppercase tracking-[0.24em] text-white mb-5">
            Contact Us
          </h4>
          <ul className="space-y-4">
            {CORPORATE_HELPLINE_DETAILS.map((detail, index) => {
              const DetailIcon = detail.icon;
              return (
                <li key={index} className="flex gap-3 items-start group cursor-pointer">
                  <div className="p-1.5 rounded bg-white/5 border border-[#C6A15A]/20 transition-all duration-300 group-hover:bg-[#C6A15A] group-hover:border-[#C6A15A] group-hover:scale-110 group-hover:shadow-[0_0_10px_rgba(198,161,90,0.3)] mt-0.5 flex-shrink-0">
                    <DetailIcon size={13} className="text-[#C6A15A] group-hover:text-[#2D3136] transition-colors duration-300" />
                  </div>
                  <span className="text-[11.5px] text-neutral-400 whitespace-pre-line leading-relaxed font-normal group-hover:text-[#C6A15A] transition-colors duration-200">
                    {detail.value}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

      </div>

      <div className="bg-neutral-950/50 py-6">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10.5px] text-neutral-500 font-semibold tracking-wider">
            © {currentYear} ROYSONS Pvt. Ltd. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[10.5px] text-neutral-500 font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10.5px] text-neutral-500 font-medium">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
