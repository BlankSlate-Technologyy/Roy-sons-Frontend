"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { DEFAULT_BILLBOARD_SLIDES } from "@/lib/constants";

export default function BillboardSlider({ slides = DEFAULT_BILLBOARD_SLIDES, videoSrc }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const resolvedSlides = videoSrc
    ? [
        {
          id: "video-slide",
          type: "video",
          src: videoSrc,
          subtitle: "WELCOME TO ROY SONS",
          title: "BUILDING",
          highlight: "A BETTER TOMORROW",
          description:
            "Roy Sons is a diversified conglomerate delivering excellence in construction, engineering, real estate, and multiple industries.",
          cta: { label: "EXPLORE MORE", href: "/about" },
        },
        ...slides,
      ]
    : slides;

  const navigateToSlide = (targetIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setActiveSlideIndex(targetIndex);
      setIsTransitioning(false);
    }, 280);
  };

  const handlePrev = () => {
    const total = resolvedSlides.length;
    const prevPosition = (activeSlideIndex - 1 + total) % total;
    navigateToSlide(prevPosition);
  };

  const handleNext = () => {
    const total = resolvedSlides.length;
    const nextPosition = (activeSlideIndex + 1) % total;
    navigateToSlide(nextPosition);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 5500);
    return () => clearInterval(timer);
  }, [activeSlideIndex]);

  const activeSlide = resolvedSlides[activeSlideIndex] || resolvedSlides[0];

  return (
    <section 
      className="relative w-full overflow-hidden bg-stone-950 font-sans min-h-[500px] sm:min-h-[650px] md:min-h-[650px] lg:min-h-[700px] flex items-center" 
      aria-label="Featured Showcase Slider"
    >
      <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
        {activeSlide.type === "video" ? (
          <video
            key={activeSlide.src}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={activeSlide.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            key={activeSlide.src}
            src={activeSlide.src}
            alt={`${activeSlide.title} ${activeSlide.highlight}`}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      <div className="relative z-10 w-full py-16 md:py-20 flex items-center">
        <div className="max-w-screen-xl mx-auto px-6 w-full">
          <div className="max-w-[820px]">
            <p className={`text-[13px] md:text-[14px] font-bold tracking-[0.28em] uppercase text-white mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] transition-all duration-500 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
              {activeSlide.subtitle}
            </p>

            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-black leading-none text-white uppercase tracking-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)] transition-all duration-500 delay-75 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
              {activeSlide.title}
            </h1>
            {activeSlide.highlight && (
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black leading-none text-white uppercase tracking-tight mb-3 drop-shadow-[0_3px_10px_rgba(0,0,0,0.85)] transition-all duration-500 delay-100 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
                {activeSlide.highlight}
              </h2>
            )}

            {activeSlide.subheading && (
              <p className={`text-[14px] md:text-[15px] font-semibold tracking-[0.12em] uppercase text-white mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] transition-all duration-500 delay-100 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
                {activeSlide.subheading}
              </p>
            )}

            <p className={`text-sm sm:text-base text-white leading-snug mb-3 max-w-[720px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] transition-all duration-500 delay-150 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
              {activeSlide.description}
            </p>

            {activeSlide.supportingText && (
              <p className={`text-sm sm:text-base text-white/90 leading-snug mb-6 max-w-[720px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] transition-all duration-500 delay-150 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
                {activeSlide.supportingText}
              </p>
            )}

            <div className={`flex flex-wrap gap-3 transition-all duration-500 delay-200 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
              <Link
                href={activeSlide.cta1?.href || activeSlide.cta?.href || "/"}
                className="rs-cta-btn inline-flex items-center gap-3 bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] border-2 border-[#0d9488]/60 text-[12px] md:text-[13px] font-black tracking-[0.2em] uppercase px-7 py-3.5 rounded-[3px] transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <span className="text-white group-hover:text-white transition-colors duration-300">{activeSlide.cta1?.label || activeSlide.cta?.label}</span>
                <ArrowRight size={13} strokeWidth={2.4} className="text-white group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300" />
              </Link>
              {activeSlide.cta2 && (
                <Link
                  href={activeSlide.cta2.href}
                  className="rs-cta-btn-secondary inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border-2 border-white/80 hover:border-white text-[12px] md:text-[13px] font-black tracking-[0.2em] uppercase px-7 py-3.5 rounded-[3px] hover:bg-white text-white hover:text-[#042E3A] transition-all duration-300 hover:-translate-y-0.5 group shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.35)]"
                >
                  <span className="text-white group-hover:text-[#042E3A] transition-colors duration-300">{activeSlide.cta2.label}</span>
                  <ArrowRight size={13} strokeWidth={2.4} className="text-white group-hover:text-[#042E3A] group-hover:translate-x-1.5 transition-all duration-300" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {resolvedSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToSlide(index)}
            aria-label={`Switch to slide ${index + 1}`}
            className={`w-2.5 h-2.5 rounded-full border border-white/50 transition-all duration-300 cursor-pointer ${
              index === activeSlideIndex ? "bg-white scale-110" : "bg-transparent hover:bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
