"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";

const SHOWCASE_ITEMS = [
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
  },
  {
    id: "dr-ahsan-sardar",
    badge: "Director",
    title: "Dr Ahsan Sardar",
    description: "Dr. Ahsan Sardar serves as a Director at Roys Group, contributing to strategic growth and business expansion across multiple sectors. He is the Senior Vice President of the Pakistan Medical Companies Association and an Executive Member of the Lahore Chamber of Commerce & Industry (LCCI). With a strong blend of medical expertise and corporate leadership, he focuses on building strategic partnerships, driving innovation, and delivering sustainable value for the organization.",
    image: "/logos/ashan sardar.jpeg",
    imageAlt: "Dr Ahsan Sardar - Director, ROYSONS Pvt. Ltd.",
    profileHref: "",
    linkedinHref: "https://www.linkedin.com/company/roysonspvtltd"
  }
];

export default function FeatureShowcase() {
  return (
    <section className="w-full pt-2 sm:pt-4 pb-12 sm:pb-16 bg-white border-b border-neutral-150 font-sans" data-aos="fade-up" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="100">
          <span className="text-xs sm:text-sm font-black tracking-[0.25em] text-[#0a7a8c] uppercase mb-2 block" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
            LEADERSHIP THAT DRIVES OUR VISION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042E3A] uppercase tracking-tight mb-2.5" style={{ fontFamily: '"Times New Roman", Times, serif', color: '#042E3A' }}>
            Board of Directors
          </h2>
          <div className="mx-auto h-[3px] w-12 bg-gradient-to-r from-[#042E3A] to-[#0a7a8c] mb-3.5" />
          <p className="text-[16px] sm:text-[18px] text-[#042E3A]/85 leading-[1.85] font-normal" style={{ fontFamily: '"Times New Roman", Times, serif', color: '#042E3A' }}>
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
              className="rounded-2xl p-6 sm:p-10 lg:p-12 border border-neutral-200 bg-white shadow-sm hover:border-[#0a7a8c]/40 hover:shadow-md transition-all duration-300"
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
                    <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#0a7a8c]" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                      {item.badge}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042E3A] leading-snug tracking-tight mb-4" style={{ fontFamily: '"Times New Roman", Times, serif', color: '#042E3A' }}>
                    {item.title}
                  </h3>

                  {/* Description Paragraph - Same Font & Style as Chairman Bio */}
                  <p className="text-[16.5px] sm:text-[18px] lg:text-[19px] text-[#042E3A]/85 leading-[1.85] font-normal whitespace-pre-line mb-6" style={{ fontFamily: '"Times New Roman", Times, serif', color: '#042E3A' }}>
                    {item.description}
                  </p>

                  {/* Action Buttons: View Profile & LinkedIn */}
                  <div className="flex flex-wrap items-center gap-3.5 justify-center lg:justify-start">
                    {item.profileHref && (
                      <Link
                        href={item.profileHref}
                        className="rs-cta-btn inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border-2 border-[#0a7a8c] bg-[#042E3A] hover:bg-[#0a7a8c] text-white text-xs font-black uppercase tracking-[0.18em] rounded-[2px] transition-all duration-300 group/btn shadow-xs"
                        style={{ fontFamily: '"Times New Roman", Times, serif' }}
                      >
                        <span className="text-white">VIEW PROFILE</span>
                        <ArrowRight size={14} strokeWidth={2.5} className="text-white group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Link>
                    )}

                    {item.linkedinHref && (
                      <a
                        href={item.linkedinHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${item.title} LinkedIn Profile`}
                        className="inline-flex items-center justify-center w-11 h-11 border border-[#0a7a8c]/40 bg-[#f0fdfa] hover:bg-[#0a7a8c] text-[#0a7a8c] hover:text-white rounded-[2px] transition-all duration-300 shadow-xs"
                      >
                        <Linkedin size={18} strokeWidth={1.8} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Image Side (order-1 on mobile, order-none on desktop) */}
                <div className="flex-1 w-full flex items-center justify-center order-1 lg:order-none">
                  <div className="relative w-full max-w-[320px] sm:max-w-[380px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-2 border-[#0a7a8c]/30 bg-neutral-900 group">
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
