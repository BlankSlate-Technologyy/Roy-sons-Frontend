"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Building2,
  Landmark,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

export default function IntroGatewayScreen({ onEnterHome }) {
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-[#f0fdfa] via-[#f8fafc] to-[#ffffff] text-[#042E3A] flex flex-col justify-between relative overflow-x-hidden selection:bg-[#0a7a8c] selection:text-white intro-gateway-root"
      style={{
        fontFamily: "'Times New Roman', Times, serif",
        backgroundColor: "#f8fafc",
      }}
    >
      {/* Enforce Times New Roman & Bulletproof Button Hover Visibility */}
      <style jsx global>{`
        .intro-gateway-root,
        .intro-gateway-root * {
          font-family: "Times New Roman", Times, serif !important;
        }

        /* Bottom Proceed Button: 100% Visible Text on Normal and Hover */
        .intro-proceed-btn {
          background-color: #ffffff !important;
          color: #042E3A !important;
          border: 2px solid #042E3A !important;
          transition: all 0.3s ease !important;
        }
        .intro-proceed-btn * {
          color: #042E3A !important;
          stroke: #042E3A !important;
          transition: all 0.3s ease !important;
        }
        .intro-proceed-btn:hover {
          background-color: #042E3A !important;
          border-color: #042E3A !important;
          color: #ffffff !important;
          box-shadow: 0 10px 30px rgba(4, 46, 58, 0.35) !important;
        }
        .intro-proceed-btn:hover *,
        .intro-proceed-btn:hover span,
        .intro-proceed-btn:hover svg {
          color: #ffffff !important;
          stroke: #ffffff !important;
        }

        /* Top Bar Enter Button */
        .intro-top-btn {
          background-color: #042E3A !important;
          color: #ffffff !important;
          border: 1px solid #042E3A !important;
          transition: all 0.3s ease !important;
        }
        .intro-top-btn * {
          color: #ffffff !important;
          stroke: #ffffff !important;
          transition: all 0.3s ease !important;
        }
        .intro-top-btn:hover {
          background-color: #0a7a8c !important;
          border-color: #0a7a8c !important;
          color: #ffffff !important;
          box-shadow: 0 4px 15px rgba(10, 122, 140, 0.3) !important;
        }
        .intro-top-btn:hover *,
        .intro-top-btn:hover span,
        .intro-top-btn:hover svg {
          color: #ffffff !important;
          stroke: #ffffff !important;
        }

        /* Card 1 CTA Button */
        .intro-card-btn-1 {
          background: linear-gradient(to right, #042E3A, #075d6d, #0a7a8c) !important;
          color: #ffffff !important;
          transition: all 0.3s ease !important;
        }
        .intro-card-btn-1 * {
          color: #ffffff !important;
          stroke: #ffffff !important;
          transition: all 0.3s ease !important;
        }
        .intro-card-btn-1:hover {
          background: linear-gradient(to right, #0a7a8c, #075d6d, #042E3A) !important;
          color: #ffffff !important;
          box-shadow: 0 6px 20px rgba(4, 46, 58, 0.3) !important;
        }
        .intro-card-btn-1:hover *,
        .intro-card-btn-1:hover span,
        .intro-card-btn-1:hover svg {
          color: #ffffff !important;
          stroke: #ffffff !important;
        }

        /* Card 2 CTA Button */
        .intro-card-btn-2 {
          background: linear-gradient(to right, #0a7a8c, #0d9488, #10b981) !important;
          color: #ffffff !important;
          transition: all 0.3s ease !important;
        }
        .intro-card-btn-2 * {
          color: #ffffff !important;
          stroke: #ffffff !important;
          transition: all 0.3s ease !important;
        }
        .intro-card-btn-2:hover {
          background: linear-gradient(to right, #042E3A, #075d6d, #0a7a8c) !important;
          color: #ffffff !important;
          box-shadow: 0 6px 20px rgba(10, 122, 140, 0.35) !important;
        }
        .intro-card-btn-2:hover *,
        .intro-card-btn-2:hover span,
        .intro-card-btn-2:hover svg {
          color: #ffffff !important;
          stroke: #ffffff !important;
        }

        /* Card 3 CTA Button */
        .intro-card-btn-3 {
          background: linear-gradient(to right, #042E3A, #075d6d, #0a7a8c) !important;
          color: #ffffff !important;
          transition: all 0.3s ease !important;
        }
        .intro-card-btn-3 * {
          color: #ffffff !important;
          stroke: #ffffff !important;
          transition: all 0.3s ease !important;
        }
        .intro-card-btn-3:hover {
          background: linear-gradient(to right, #0a7a8c, #075d6d, #042E3A) !important;
          color: #ffffff !important;
          box-shadow: 0 6px 20px rgba(4, 46, 58, 0.3) !important;
        }
        .intro-card-btn-3:hover *,
        .intro-card-btn-3:hover span,
        .intro-card-btn-3:hover svg {
          color: #ffffff !important;
          stroke: #ffffff !important;
        }
      `}</style>

      {/* Subtle Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#0a7a8c]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* MAIN CONTENT: Introduction & 3 Pillar Horizontal Alternating Cards */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col justify-center relative z-10">
        
        {/* Intro Header with Centered Large Brand Logo */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="relative w-64 h-28 sm:w-80 sm:h-36 md:w-[420px] md:h-44 lg:w-[540px] lg:h-[200px] mx-auto mb-6">
            <Image
              src="/logos/Roysons-02.png"
              alt="ROYSONS Corporate Logo"
              fill
              priority
              className="object-contain object-center drop-shadow-sm"
            />
          </div>
          <p className="text-[17px] sm:text-[19px] lg:text-[21px] text-[#042E3A]/85 font-normal leading-relaxed">
           ROYSONS is a diversified institutional ecosystem comprising ROYSONS Trust, ROYSONS Holdings, and 26+ specialized companies operating across traditional and emerging industries. The Trust provides long-term purpose and stewardship, ROYSONS Holdings drives strategic investment and portfolio development, while its operating companies deliver specialized products, services, technologies, and solutions across multiple sectors.

Together, they form one integrated platform built around purpose, enterprise, innovation, sustainable growth, and long-term value creation.
          </p>
        </div>

        {/* 3 Pillars Alternating Cards Container */}
        <div className="flex flex-col space-y-8 sm:space-y-12 lg:space-y-14 w-full">

          {/* ========================================================================= */}
          {/* CARD 1: ROYSONS TRUST (Left: Image | Right: Content & Button)             */}
          {/* ========================================================================= */}
          <div className="bg-white rounded-[6px] border-2 border-[#042E3A]/15 hover:border-[#0d9488] p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-lg hover:shadow-2xl group">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              
              {/* Left Side: Image */}
              <div className="w-full lg:w-1/2 order-1 lg:order-1">
                <div className="relative w-full h-64 sm:h-80 lg:h-[380px] rounded-[4px] overflow-hidden border border-neutral-200 shadow-sm">
                  <Image
                    src="/logos/roysons logo mockup building.png"
                    alt="ROYSONS Trust Headquarters Building"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Right Side: Content & Button */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042E3A] group-hover:text-[#0d9488] transition-colors mb-2 tracking-tight">
                  ROYSONS TRUST
                </h2>
                <p className="text-[15px] sm:text-[17px] text-[#042E3A]/85 leading-relaxed font-normal mb-5">
                  ROYSONS Trust is envisioned as the purpose-driven institution supporting the long-term development, stewardship, and social impact of the ROYSONS enterprise. The Trust is designed around a simple philosophy: business growth should create lasting value for people, communities, and future generations. Through its relationship with ROYSONS Pvt. Ltd., the Trust aims to support responsible enterprise development, strengthen long-term institutional ownership, and channel resources toward initiatives in education, healthcare, community development, skills, research, sustainability, and other areas of public benefit.</p>
                {/* CTA Button */}
               <div>
                  <Link href="/roysons-trust">
                    <button
                      type="button"
                      className="intro-card-btn-2 inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-[2px] text-[14px] sm:text-[15px] font-black uppercase tracking-wider shadow-md w-full sm:w-auto cursor-pointer"
                    >
                      <span>Explore Website</span>
                      <ArrowRight size={17} />
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* CARD 2: ROYSONS HOLDINGS (Left: Image | Right: Content & Button)          */}
          {/* ========================================================================= */}
          <div className="bg-white rounded-[6px] border-2 border-[#042E3A]/15 hover:border-[#0a7a8c] p-6 sm:p-8 lg:p-10 transition-all duration-300 shadow-lg hover:shadow-2xl group">

            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              
              {/* Left Side: Content & Button */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#042E3A] group-hover:text-[#0a7a8c] transition-colors mb-2 tracking-tight">
                  ROYSONS HOLDINGS
                </h2>

                

                <p className="text-[15px] sm:text-[17px] text-[#042E3A]/85 leading-relaxed font-normal mb-5">
                  ROYSONS Holdings is a diversified multi-sector enterprise built with a vision to establish a dynamic organization capable of delivering world-class solutions across multiple industries. With a growing portfolio of specialized companies and business divisions, ROYSONS operates across healthcare, engineering, technology, defense, agriculture, mining, energy, infrastructure, international trade, manufacturing, real estate, food, and consultancy.
                </p>



                {/* CTA Button -> Enters the original home website directly */}
                <div>
                  <button
                    type="button"
                    onClick={onEnterHome}
                    className="intro-card-btn-2 inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:py-4 rounded-[2px] text-[14px] sm:text-[15px] font-black uppercase tracking-wider shadow-md w-full sm:w-auto cursor-pointer"
                  >
                    <span>Enter Main Website</span>
                    <ArrowRight size={17} />
                  </button>
                </div>
              </div>
                   {/* Right Side: Image */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 lg:h-[380px] rounded-[4px] overflow-hidden border border-neutral-200 shadow-sm">
                  <Image
                    src="/logos/ROYSONS HOLDINGS.jpeg"
                    alt="ROYSONS Holdings Group"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* BOTTOM BRAND FOOTER (No corporate footer, just minimal copyright bar) */}
      <footer className="w-full border-t border-[#042E3A]/10 py-4 px-4 text-center text-xs sm:text-[13px] text-[#042E3A]/70 font-medium">
        © {new Date().getFullYear()} ROYSONS  · All Rights Reserved
      </footer>
    </div>
  );
}
