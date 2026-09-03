"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

const SHOWCASE_ITEMS = [
  {
    id: "dr-ahsan-sardar",
    badge: "Director",
    title: "Dr Ahsan Sardar",
    description: "Dr. Ahsan Sardar serves as a Director at Roys Group, contributing to strategic growth and business expansion across multiple sectors. He is the Senior Vice President of the Pakistan Medical Companies Association and an Executive Member of the Lahore Chamber of Commerce & Industry (LCCI). With a strong blend of medical expertise and corporate leadership, he focuses on building strategic partnerships, driving innovation, and delivering sustainable value for the organization.",
    image: "/logos/ashan sardar.jpeg",
    imageAlt: "Dr Ahsan Sardar - Director, ROYSONS Pvt. Ltd.",
    profileHref: "",
    linkedinHref: "https://www.linkedin.com/company/roysonspvtltd"
  },
  {
    id: "hesham-sultan-ijaz",
    badge: "Director",
    title: "Hesham Sultan Ijaz",
    description: "Hesham Sultan Ijaz serves as a Director of ROYSONS Pvt. Ltd., contributing to the organization's strategic development, corporate initiatives, and business expansion. His role focuses on supporting the growth of the company's diverse portfolio while exploring new opportunities, partnerships, and emerging markets.\n\nAs part of the Board, he contributes to strategic decision-making and the continued development of ROYSONS as a modern, diversified enterprise.",
    image: "/Hesham Sultan Ijaz.jpg.jpeg",
    imageAlt: "Hesham Sultan Ijaz - Director ROYSONS Pvt. Ltd.",
    profileHref: "https://www.heshamsultan.com/about-me",
    linkedinHref: "https://www.linkedin.com/company/wix-com/"
  },
  {
    id: "yahya-sultan-ijaz",
    badge: "Director",
    title: "Yahya Sultan Ijaz",
    description: "Yahya Sultan Ijaz serves as a Director of ROYSONS Pvt. Ltd., contributing to the organization's strategic growth and corporate development. He supports initiatives focused on expanding the company's business portfolio, developing new opportunities, and strengthening ROYSONS' presence across multiple sectors.\n\nHis role within the Board contributes to the organization's long-term strategy, innovation, and continued development as a diversified enterprise.",
    image: "/Hesham Sultan Ijaz.jpg.jpeg",
    imageAlt: "Yahya Sultan Ijaz - Director ROYSONS Pvt. Ltd.",
    profileHref: "",
    linkedinHref: "https://www.linkedin.com/company/roysonspvtltd"
  }
];

export default function FeatureShowcase() {
  return (
    <section className="w-full py-12 sm:py-16 bg-[#0c1013] text-white border-b border-neutral-800 font-sans" data-aos="fade-up">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
          <span className="text-xs font-black tracking-[0.25em] text-[#C6A15A] uppercase mb-2.5 block">
            LEADERSHIP THAT DRIVES OUR VISION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight mb-3">
            Board of Directors
          </h2>
          <div className="mx-auto h-[3px] w-12 bg-[#C6A15A] mb-4" />
          <p className="text-[15px] sm:text-[16px] text-neutral-200 leading-relaxed font-normal">
            The Board of Directors of ROYSONS Pvt. Ltd. provides strategic leadership and direction, guiding the organization toward sustainable growth, innovation, diversification, and long-term value creation across its expanding portfolio of businesses.
          </p>
        </div>

        {SHOWCASE_ITEMS.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              className="rounded-2xl p-6 sm:p-10 lg:p-12 border border-neutral-800 bg-[#101518] shadow-xl hover:border-[#C6A15A]/40 transition-all duration-300"
            >
              <div
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-14 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Side (order-2 on mobile, order-none on desktop) */}
                <div className="flex-1 w-full flex flex-col justify-center text-center lg:text-left order-2 lg:order-none">
                  {/* Badge Pill */}
                  <div className="inline-flex items-center bg-[#f0fdfa] border border-[#0a7a8c]/30 px-4 py-1 rounded-full w-fit mb-4 mx-auto lg:mx-0">
                    <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#0a7a8c]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-snug tracking-tight mb-4">
                    {item.title}
                  </h3>

                  {/* Description Paragraph - Clear & Readable */}
                  <p className="text-neutral-200 text-[16px] sm:text-[17.5px] lg:text-[18.5px] leading-[1.8] font-normal whitespace-pre-line mb-6">
                    {item.description}
                  </p>

                  {/* Action Buttons: View Profile & LinkedIn */}
                  <div className="flex flex-wrap items-center gap-3.5 justify-center lg:justify-start">
                    {item.profileHref && (
                      <Link
                        href={item.profileHref}
                        className="rs-cta-btn inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border-2 border-[#C6A15A] bg-transparent text-[#C6A15A] hover:bg-[#C6A15A] hover:text-[#101518] text-xs font-black uppercase tracking-[0.18em] rounded-[2px] transition-all duration-300 group/btn shadow-xs"
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
                        className="inline-flex items-center justify-center w-11 h-11 border border-[#C6A15A]/40 bg-white/5 hover:bg-[#C6A15A] text-[#C6A15A] hover:text-[#101518] rounded-[2px] transition-all duration-300 shadow-xs"
                      >
                        <Linkedin size={18} strokeWidth={1.8} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Side (order-1 on mobile, order-none on desktop) */}
                <div className="flex-1 w-full flex items-center justify-center order-1 lg:order-none">
                  <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 group">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 768px) 320px, 380px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
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
