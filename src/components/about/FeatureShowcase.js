"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

const SHOWCASE_ITEMS = [
  {
    id: "",
    badge: "Chairman & CEO",
    title: "Ijaz Naseer",
    description: "Ijaz Naseer founded ROYSONS Pvt. Ltd. with a vision to establish a diversified organization capable of delivering world-class solutions across multiple industries. Today, ROYSONS stands as a multi-sector enterprise operating in healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, and international trade. With a strong commitment to innovation, quality, and sustainable growth, the company continues to expand its capabilities and build strategic partnerships both locally and internationally. Through its diverse portfolio and professional expertise, ROYSONS aims to create lasting value for its clients, partners, and communities while contributing to economic and industrial development.",
    image: "/chairman.jpeg",
    imageAlt: "Ijaz Naseer - Chairman & CEO, ROYSONS Pvt. Ltd.",
    bgColor: "bg-white",
    borderColor: "border-neutral-200/80",
    profileHref: "/about/chairmans-message",
    linkedinHref: "https://www.linkedin.com/company/roysonspvtltd"
  },
  {
    id: "",
    badge: "Director",
    title: "Hesham Sultan Ijaz",
    description: "Hesham Sultan Ijaz serves as a Director of ROYSONS Pvt. Ltd., contributing to the organization's strategic development, corporate initiatives, and business expansion. His role focuses on supporting the growth of the company's diverse portfolio while exploring new opportunities, partnerships, and emerging markets.\n\nAs part of the Board, he contributes to strategic decision-making and the continued development of ROYSONS as a modern, diversified enterprise.",
    image: "/Hesham Sultan Ijaz.jpg.jpeg",
    imageAlt: "Hesham Sultan Ijaz - Director ROYSONS Pvt. Ltd.",
    bgColor: "bg-neutral-50",
    borderColor: "border-neutral-200",
    profileHref: "https://www.heshamsultan.com/",
    linkedinHref: "https://www.linkedin.com/company/wix-com/"
  },
  {
    id: "",
    badge: "Director",
    title: "Yahya Sultan Ijaz",
    description: "Yahya Sultan Ijaz serves as a Director of ROYSONS Pvt. Ltd., contributing to the organization's strategic growth and corporate development. He supports initiatives focused on expanding the company's business portfolio, developing new opportunities, and strengthening ROYSONS' presence across multiple sectors.\n\nHis role within the Board contributes to the organization's long-term strategy, innovation, and continued development as a diversified enterprise.",
    image: "/Hesham Sultan Ijaz.jpg.jpeg",
    imageAlt: "Yahya Sultan Ijaz - Director ROYSONS Pvt. Ltd.",
    bgColor: "bg-white",
    borderColor: "border-neutral-200/80",
    profileHref: "/about/chairmans-message",
    linkedinHref: "https://www.linkedin.com/company/roysonspvtltd"
  }
];

export default function FeatureShowcase() {
  return (
    <section className="w-full py-10 sm:py-14 lg:py-16 bg-white border-b border-neutral-100 font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <span className="text-[10px] sm:text-[11px] font-black tracking-[0.25em] text-[#C6A15A] uppercase mb-2 block">
            LEADERSHIP THAT DRIVES OUR VISION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 uppercase tracking-tight mb-3">
            Board of Directors
          </h2>
          <div className="mx-auto h-[3px] w-12 bg-neutral-950 mb-4" />
          <p className="text-[13px] sm:text-[14px] text-neutral-600 leading-relaxed font-normal">
            The Board of Directors of ROYSONS Pvt. Ltd. provides strategic leadership and direction, guiding the organization toward sustainable growth, innovation, diversification, and long-term value creation across its expanding portfolio of businesses.
          </p>
        </div>

        {SHOWCASE_ITEMS.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={index}
              className={`rounded-xl p-6 sm:p-10 lg:p-12 border ${item.borderColor} ${item.bgColor} shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14 ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full flex flex-col justify-center text-center lg:text-left">
                  {/* Badge Pill */}
                  <div className="inline-flex items-center bg-neutral-100 border border-neutral-200 px-3 py-1 rounded-full w-fit mb-4 mx-auto lg:mx-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#C6A15A]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-neutral-950 leading-snug tracking-tight mb-4">
                    {item.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-neutral-600 text-[13.5px] sm:text-[14px] leading-relaxed font-normal whitespace-pre-line mb-6">
                    {item.description}
                  </p>

                  {/* Action Buttons: View Profile & LinkedIn */}
                  <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
                    {item.profileHref && (
                      <Link
                        href={item.profileHref}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-neutral-950 hover:bg-[#C6A15A] text-white hover:text-neutral-950 text-[11px] font-black uppercase tracking-[0.15em] rounded-[2px] transition-all duration-300 group/btn shadow-xs"
                      >
                        <span>VIEW PROFILE</span>
                        <ArrowRight size={14} strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    )}

                    {item.linkedinHref && (
                      <a
                        href={item.linkedinHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.title} LinkedIn Profile`}
                        className="inline-flex items-center justify-center w-10 h-10 border border-neutral-300 bg-white hover:bg-[#0077B5] hover:border-[#0077B5] text-neutral-700 hover:text-white rounded-[2px] transition-all duration-300 shadow-xs"
                      >
                        <Linkedin size={18} strokeWidth={1.8} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full flex items-center justify-center">
                  <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] rounded-lg overflow-hidden shadow-md border border-neutral-200 bg-neutral-900 group">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
