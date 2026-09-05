"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Landmark,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Globe2,
  HeartPulse,
  Layers,
  X,
} from "lucide-react";

export default function GroupGatewayPortal({ forceOpen = false, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      return;
    }

    // Check if gateway has already been dismissed in this session
    const hasSeenGateway = sessionStorage.getItem("roysons_gateway_seen");
    if (!hasSeenGateway) {
      // Delay opening until after Preloader finishes (~2.6s)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2650);
      return () => clearTimeout(timer);
    }
  }, [forceOpen]);

  const handleDismiss = () => {
    sessionStorage.setItem("roysons_gateway_seen", "true");
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleNavigate = (url) => {
    sessionStorage.setItem("roysons_gateway_seen", "true");
    setIsOpen(false);
    if (onClose) onClose();
    router.push(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="group-gateway-portal"
          data-dark-section="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.45 } }}
          className="fixed inset-0 z-[99998] flex flex-col justify-between bg-[#041a22] text-white overflow-y-auto overflow-x-hidden selection:bg-[#0a7a8c] selection:text-white"
          style={{
            fontFamily: '"Times New Roman", Times, serif',
            background: "radial-gradient(ellipse at top, #063442 0%, #031e26 50%, #021217 100%)",
          }}
        >
          {/* Subtle Ambient Background Patterns */}
          <div className="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(#22d3ee_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Top Navbar Bar */}
          <header className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-6 sm:pt-8 pb-4 flex items-center justify-between border-b border-cyan-500/15">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative h-11 sm:h-14 w-40 sm:w-52">
                <Image
                  src="/logos/Roysons-03.png"
                  alt="Roysons Group"
                  fill
                  priority
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </div>

            {/* Portal Badge & Skip Button */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-[11px] font-bold uppercase tracking-[0.2em]">
                <Sparkles size={12} className="text-cyan-400" />
                <span>Group Portal</span>
              </div>

              <button
                onClick={handleDismiss}
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-[2px] bg-white/10 hover:bg-white text-white hover:text-[#042E3A] border border-white/20 hover:border-white text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] transition-all duration-300 cursor-pointer shadow-sm"
              >
                <span>Enter Main Site</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </header>

          {/* Main Content Area */}
          <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12 my-auto flex flex-col items-center">
            {/* Intro Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-black uppercase tracking-[0.3em] mb-3"
              >
                <span>SELECT YOUR DESTINATION</span>
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight drop-shadow-md"
              >
                Welcome to the Roysons Group
              </motion.h1>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-[#0a7a8c] mx-auto mb-5 rounded-full"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 }}
                className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed font-normal max-w-2xl mx-auto"
              >
                Explore our core industrial and commercial sectors, strategic corporate holdings, or community philanthropic trust initiatives.
              </motion.p>
            </div>

            {/* 3 Pillar Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1: ROYSONS (Roysons Pvt. Ltd.) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group relative flex flex-col justify-between bg-gradient-to-b from-[#052833]/90 to-[#031c24]/95 border border-cyan-500/25 hover:border-cyan-400 rounded-[3px] p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(34,211,238,0.2)] hover:-translate-y-1.5 cursor-pointer backdrop-blur-md"
                onClick={() => handleNavigate("/roysons")}
              >
                {/* Accent top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0a7a8c] via-cyan-400 to-[#0d9488] opacity-70 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-[2px] bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-[10.5px] font-black uppercase tracking-[0.2em]">
                      Core Enterprise
                    </span>
                    <div className="w-12 h-12 rounded-[2px] bg-white/5 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-400 group-hover:text-[#042E3A] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                      <Building2 size={24} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Roysons Pvt. Ltd.
                  </h2>
                  <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-cyan-400 mb-4">
                    Multi-Sector Enterprise &amp; Operations
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-6">
                    Pioneering industry leadership across 15+ specialized sectors including healthcare technology, hospital engineering, renewable energy, electrical power systems, and civil infrastructure.
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2 mb-8 text-xs sm:text-[13px] text-neutral-200 border-t border-white/10 pt-4 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>15+ Core Industrial Sectors</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Turnkey Engineering &amp; Procurement</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Global Supply Chain Network</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate("/roysons");
                  }}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] group-hover:from-cyan-400 group-hover:to-teal-300 text-white group-hover:text-[#042E3A] border border-cyan-400/40 text-xs sm:text-sm font-black uppercase tracking-[0.18em] transition-all duration-300 rounded-[2px] shadow-md cursor-pointer"
                >
                  <span>Explore Roysons Pvt. Ltd.</span>
                  <ArrowRight size={15} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Card 2: ROYSONS HOLDINGS (Main Website) */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="group relative flex flex-col justify-between bg-gradient-to-b from-[#052833]/90 to-[#031c24]/95 border border-cyan-500/25 hover:border-cyan-400 rounded-[3px] p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(34,211,238,0.2)] hover:-translate-y-1.5 cursor-pointer backdrop-blur-md"
                onClick={handleDismiss}
              >
                {/* Accent top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0d9488] via-cyan-400 to-[#38bdf8] opacity-70 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-[2px] bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-[10.5px] font-black uppercase tracking-[0.2em]">
                      Strategic Group
                    </span>
                    <div className="w-12 h-12 rounded-[2px] bg-white/5 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-400 group-hover:text-[#042E3A] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                      <Landmark size={24} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Roysons Holdings
                  </h2>
                  <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-cyan-400 mb-4">
                    Main Holding Group &amp; Enterprise
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-6">
                    The parent holding enterprise overseeing strategic group companies, defense systems, capital partnerships, and nationwide infrastructure development.
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2 mb-8 text-xs sm:text-[13px] text-neutral-200 border-t border-white/10 pt-4 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>26 Diversified Group Companies</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>National &amp; International Projects</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Corporate Governance &amp; Investment</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDismiss();
                  }}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] group-hover:from-cyan-400 group-hover:to-teal-300 text-white group-hover:text-[#042E3A] border border-cyan-400/40 text-xs sm:text-sm font-black uppercase tracking-[0.18em] transition-all duration-300 rounded-[2px] shadow-md cursor-pointer"
                >
                  <span>Enter Holding Website</span>
                  <ArrowRight size={15} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

              {/* Card 3: ROYSONS TRUST */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="group relative flex flex-col justify-between bg-gradient-to-b from-[#052833]/90 to-[#031c24]/95 border border-cyan-500/25 hover:border-cyan-400 rounded-[3px] p-6 sm:p-8 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(34,211,238,0.2)] hover:-translate-y-1.5 cursor-pointer backdrop-blur-md"
                onClick={() => handleNavigate("/roysons-trust")}
              >
                {/* Accent top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#14b8a6] via-cyan-400 to-[#2dd4bf] opacity-70 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-[2px] bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-[10.5px] font-black uppercase tracking-[0.2em]">
                      Philanthropy &amp; Welfare
                    </span>
                    <div className="w-12 h-12 rounded-[2px] bg-white/5 border border-cyan-400/30 flex items-center justify-center text-cyan-300 group-hover:bg-cyan-400 group-hover:text-[#042E3A] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                      <HeartHandshake size={24} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    Roysons Trust
                  </h2>
                  <p className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-cyan-400 mb-4">
                    Community Welfare &amp; Healthcare Aid
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-6">
                    Our dedicated non-profit philanthropic foundation advancing accessible healthcare, medical equipment grants, free surgical aid, educational development, and sustainable social impact.
                  </p>

                  {/* Key Highlights */}
                  <ul className="space-y-2 mb-8 text-xs sm:text-[13px] text-neutral-200 border-t border-white/10 pt-4 font-sans">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Free Diagnostic &amp; Surgical Assistance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Hospital Medical Equipment Grants</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>Community Healthcare &amp; Education</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate("/roysons-trust");
                  }}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 px-5 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] group-hover:from-cyan-400 group-hover:to-teal-300 text-white group-hover:text-[#042E3A] border border-cyan-400/40 text-xs sm:text-sm font-black uppercase tracking-[0.18em] transition-all duration-300 rounded-[2px] shadow-md cursor-pointer"
                >
                  <span>Visit Roysons Trust</span>
                  <ArrowRight size={15} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Bottom Quick-Access Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 sm:mt-12 text-center"
            >
              <button
                onClick={handleDismiss}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-cyan-300 transition-colors duration-300 cursor-pointer group"
              >
                <span>Or Continue to Main Corporate Website</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </main>

          {/* Footer Bar */}
          <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-5 border-t border-cyan-500/15 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-2">
            <span>&copy; {new Date().getFullYear()} Roysons Group. All rights reserved.</span>
            <span className="text-cyan-400/80 font-bold uppercase tracking-widest text-[11px]">
              Excellence &bull; Integrity &bull; Global Reach
            </span>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
