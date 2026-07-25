"use client";

import React, { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import TrustedBy from "./sections/TrustedBy";
import Statistics from "./sections/Statistics";
import About from "./sections/About";
import Services from "./sections/Services";
import Expertise from "./sections/Expertise";
import WhyChooseUs from "./sections/WhyChooseUs";
import Commitment from "./sections/Commitment";
import MissionVision from "./sections/MissionVision";
import CoreValues from "./sections/CoreValues";
import Industries from "./sections/Industries";
import Process from "./sections/Process";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import MapSection from "./sections/MapSection";
import { COLORS } from "./constants";

export default function GatewayPage() {
  useEffect(() => {
    document.body.classList.add("roys-roys-theme");

    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => sec.classList.add("section-animate"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-section-fade");
          }
        });
      },
      { threshold: 0.08 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      document.body.classList.remove("roys-roys-theme");
      observer.disconnect();
    };
  }, []);

  return (
    <main
      className="min-h-screen text-[15px] font-sans antialiased overflow-x-hidden"
      style={{
        backgroundColor: COLORS.background,
        color: COLORS.textDark,
      }}
    >
      <style>{`
        @keyframes sectionFadeUp {
          from {
            opacity: 0;
            transform: translateY(55px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .section-animate {
          opacity: 0;
          will-change: transform, opacity;
        }
        .animate-section-fade {
          animation: sectionFadeUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Statistics />
      <About />
      <Services />
      <Expertise />
      <WhyChooseUs />
      <Commitment />
      <MissionVision />
      <CoreValues />
      <Industries />
      <Process />
      <Contact />
      <MapSection />
      <Footer />
    </main>
  );
}
