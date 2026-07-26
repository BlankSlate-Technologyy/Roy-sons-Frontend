import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { COLORS } from "../constants";
import { Container, Button } from "./Shared";

export default function Commitment() {
  return (
    <section className="py-20 bg-white" style={{ backgroundColor: COLORS.white }}>
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Large Image */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div
            className="relative w-full max-w-[480px] h-[380px] lg:h-[440px] rounded-2xl overflow-hidden shadow-xl border group"
            style={{ borderColor: COLORS.border }}
          >
            <Image
              src="/gatway commited.png"
              alt="Hands shaking representing partner commitment"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>
        </div>

        {/* Right Side: Narrative and CTA */}
        <div className="lg:col-span-7">
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-3"
            style={{ color: COLORS.secondary }}
          >
            OUR COMMITMENT
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6"
            style={{ color: COLORS.textDark }}
          >
            Supporting Compliance,
            <br />
            Enabling Growth
          </h2>
          <p
            className="text-base font-medium leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            We believe that strong regulatory compliance is the cornerstone of a successful
            pharmaceutical business. Our team goes beyond paperwork — we become your partner
            in navigating regulatory challenges, reducing risks, and accelerating market access,
            all while upholding the highest standards of integrity.
          </p>
          <p
            className="text-base font-medium leading-relaxed mb-8"
            style={{ color: COLORS.textGray }}
          >
            Our consultancy team stays continuously updated on evolving pharmaceutical regulations,
            ensuring our clients remain compliant with the latest national and international
            requirements while minimising regulatory risks.
          </p>
          <Button
            variant="primary"
            href="#contact"
            className="group flex items-center gap-2"
          >
            Partner With Us
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </div>
      </Container>
    </section>
  );
}
