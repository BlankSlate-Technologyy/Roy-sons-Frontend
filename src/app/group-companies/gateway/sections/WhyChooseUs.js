import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { COLORS, WHY_CHOOSE } from "../constants";
import { Container } from "./Shared";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-slate-50" style={{ backgroundColor: COLORS.background }}>
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Copy and checklist */}
        <div className="lg:col-span-7">
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-3"
            style={{ color: COLORS.secondary }}
          >
            YOUR RELIABLE REGULATORY PARTNER
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-8"
            style={{ color: COLORS.textDark }}
          >
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {WHY_CHOOSE.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: `${COLORS.secondary}15` }}
                >
                  <Check size={16} style={{ color: COLORS.secondary }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold" style={{ color: COLORS.textDark }}>
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium mt-1 leading-relaxed" style={{ color: COLORS.textGray }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Showcase image */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div
            className="relative w-full max-w-[480px] h-[380px] lg:h-[440px] rounded-2xl overflow-hidden shadow-xl border group"
            style={{ borderColor: COLORS.border }}
          >
            <Image
              src="/gatway about.png"
              alt="Professional audit collaboration"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
