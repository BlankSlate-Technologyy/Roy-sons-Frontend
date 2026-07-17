import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { COLORS } from "../constants";
import { Container, Button } from "./Shared";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative py-20 lg:py-28 overflow-hidden bg-slate-50"
      style={{ backgroundColor: COLORS.background }}
    >
      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side: Text and Call-to-actions */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest block mb-4"
              style={{ color: COLORS.secondary }}
            >
              Gateway Pharmaceuticals Consultants
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6"
              style={{ color: COLORS.textDark }}
            >
              PHARMACEUTICAL
              <br />
              <span style={{ color: COLORS.secondary }}>REGULATORY</span>
              <br />
              CONSULTANCY
            </h1>
            <p
              className="text-lg font-medium leading-relaxed mb-8 max-w-xl"
              style={{ color: COLORS.textGray }}
            >
              Offering licensing, compliance, regulatory affairs, and consultancy
              services for pharmaceutical organizations. Precision without compromise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                href="#services"
                className="group flex items-center gap-2"
              >
                Explore Services
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
              <Button variant="secondary" href="#contact">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Hero Image & Overlay badging */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[480px] h-[340px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl border"
            style={{ borderColor: COLORS.border }}
          >
            <Image
              src="/gatway header.png"
              alt="Gateway Pharmaceutical Regulatory Experts"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />

            {/* Premium Corporate Badging */}
            <div
              className="absolute bottom-6 right-6 flex items-center gap-3 p-4 rounded-xl shadow-lg border backdrop-blur-md"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: COLORS.border,
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${COLORS.secondary}15` }}
              >
                <ShieldCheck size={20} style={{ color: COLORS.secondary }} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wide text-indigo-900">
                  DRAP & Compliance
                </span>
                <span className="text-[9px] font-semibold text-slate-500 uppercase">
                  100% Accredited Audit
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
