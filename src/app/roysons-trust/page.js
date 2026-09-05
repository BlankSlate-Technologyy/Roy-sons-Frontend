"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Mail, Sparkles } from "lucide-react";

export default function RoysonsTrustPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#f0fdfa] via-[#f8fafc] to-[#ffffff] text-[#042E3A] flex flex-col justify-between relative overflow-x-hidden">
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#0a7a8c]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Back Button Header */}
      <header className="w-full border-b border-[#042E3A]/10 py-4 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-[3px] bg-white border border-[#042E3A]/20 hover:bg-[#042E3A]/5 text-[#042E3A] text-sm font-semibold transition-all duration-300">
              <ArrowLeft size={16} />
              Back to Home
            </button>
          </Link>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center justify-center relative z-10">
        
        {/* Logo */}
        <div className="relative w-48 h-20 sm:w-64 sm:h-28 md:w-80 md:h-32 mx-auto mb-12">
          <Image
            src="/logos/Roysons-02.png"
            alt="ROYSONS Trust Logo"
            fill
            priority
            className="object-contain object-center drop-shadow-sm"
          />
        </div>

        {/* Coming Soon Content */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="mb-6 inline-flex items-center justify-center">
            <Sparkles size={32} className="text-[#0d9488]" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#042E3A] mb-4 tracking-tight">
            Coming Soon
          </h1>
          
          <p className="text-lg sm:text-xl text-[#042E3A]/75 leading-relaxed mb-8 font-medium">
            We're working on something extraordinary for ROYSONS Trust. Our comprehensive platform showcasing our vision for purpose-driven enterprise development, stewardship, and social impact will be launching very soon.
          </p>

          <p className="text-[15px] sm:text-base text-[#042E3A]/65 mb-10 leading-relaxed">
            Stay tuned for updates on our initiatives in education, healthcare, community development, sustainability, and long-term value creation for future generations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <button className="inline-flex items-center gap-2 px-8 py-3.5 sm:py-4 rounded-[2px] bg-[#042E3A] text-white font-black uppercase tracking-wider text-sm transition-all duration-300 hover:bg-[#0a7a8c] shadow-md hover:shadow-lg">
                <ArrowLeft size={16} />
                Return Home
              </button>
            </Link>
            
            <a href="mailto:info@roysons.com" className="inline-flex items-center gap-2 px-8 py-3.5 sm:py-4 rounded-[2px] bg-white border-2 border-[#0d9488] text-[#0d9488] font-black uppercase tracking-wider text-sm transition-all duration-300 hover:bg-[#0d9488]/5">
              <Mail size={16} />
              Get Updates
            </a>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 sm:mt-20 w-full max-w-md">
          <div className="relative h-48 sm:h-56">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a7a8c]/10 to-[#0d9488]/10 rounded-lg blur-2xl" />
            <div className="relative bg-white/50 backdrop-blur-sm border border-[#0d9488]/20 rounded-lg p-6 sm:p-8 text-center">
              <p className="text-sm text-[#042E3A]/70 font-medium mb-2">ROYSONS TRUST</p>
              <p className="text-2xl sm:text-3xl font-black text-[#042E3A] mb-3">Purpose Driven</p>
              <p className="text-xs sm:text-sm text-[#042E3A]/60">Building lasting value for people, communities, and future generations</p>
            </div>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-[#042E3A]/10 py-4 px-4 text-center text-xs sm:text-[13px] text-[#042E3A]/70 font-medium relative z-10">
        © {new Date().getFullYear()} ROYSONS Pvt. Ltd. · All Rights Reserved
      </footer>
    </div>
  );
}
