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
      className="relative w-full overflow-hidden bg-stone-950 font-sans" 
      style={{ height: "580px" }}
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
        <div className="absolute inset-0 bg-neutral-900/35" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-screen-xl mx-auto px-6 w-full">
          <div className="max-w-[820px]">
            <p className={`text-[11px] font-bold tracking-[0.28em] uppercase text-white/90 mb-3.5 transition-all duration-500 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
              {activeSlide.subtitle}
            </p>

            <h1 className={`text-3xl md:text-4xl lg:text-5xl font-black leading-snug text-white uppercase tracking-tight transition-all duration-500 delay-75 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
              {activeSlide.title}
            </h1>
            {activeSlide.highlight && (
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black leading-snug text-white uppercase tracking-tight mb-3 transition-all duration-500 delay-100 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
                {activeSlide.highlight}
              </h2>
            )}

            {activeSlide.subheading && (
              <p className={`text-[13px] font-semibold tracking-[0.12em] uppercase text-white/70 mb-3 transition-all duration-500 delay-100 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
                {activeSlide.subheading}
              </p>
            )}

            <p className={`text-sm text-white/85 leading-loose mb-3 max-w-[720px] transition-all duration-500 delay-150 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
              {activeSlide.description}
            </p>

            {activeSlide.supportingText && (
              <p className={`text-sm text-white/65 leading-loose mb-7 max-w-[720px] transition-all duration-500 delay-150 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
                {activeSlide.supportingText}
              </p>
            )}

            <div className={`flex flex-wrap gap-3 transition-all duration-500 delay-200 transform ${isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}>
              <Link
                href={activeSlide.cta1?.href || activeSlide.cta?.href || "/"}
                className="inline-flex items-center gap-3 bg-white text-black text-[11px] font-bold tracking-[0.2em] uppercase px-7 py-3.5 hover:bg-neutral-950 hover:text-white transition-all duration-300"
              >
                {activeSlide.cta1?.label || activeSlide.cta?.label}
                <ArrowRight size={13} strokeWidth={2.4} />
              </Link>
              {activeSlide.cta2 && (
                <Link
                  href={activeSlide.cta2.href}
                  className="inline-flex items-center gap-3 bg-transparent text-white text-[11px] font-bold tracking-[0.2em] uppercase px-7 py-3.5 border border-white/50 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                >
                  {activeSlide.cta2.label}
                  <ArrowRight size={13} strokeWidth={2.4} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <button
        id="hero-prev"
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/40 text-white flex items-center justify-center rounded-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
      >
        <ChevronLeft size={22} strokeWidth={1.8} />
      </button>
      <button
        id="hero-next"
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 border border-white/40 text-white flex items-center justify-center rounded-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
      >
        <ChevronRight size={22} strokeWidth={1.8} />
      </button>

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
