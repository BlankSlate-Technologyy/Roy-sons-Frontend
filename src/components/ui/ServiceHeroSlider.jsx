"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ServiceHeroSlider({ slides = [], defaultTag = "ROYSONS SOLUTIONS" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = slides.length;

  useEffect(() => {
    if (total <= 1 || isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [total, isHovered]);

  if (!slides || slides.length === 0) return null;

  return (
    <div 
      className="relative rounded-xl p-1 bg-gradient-to-b from-white/30 via-white/10 to-teal-500/20 shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[320px] sm:h-[400px] lg:h-[440px] w-full overflow-hidden rounded-lg bg-neutral-950">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.src || idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt || slide.title || "ROYSONS Service"}
                fill
                priority={idx === 0}
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              {/* Ambient Dark Gradient for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 pointer-events-none" />
              
              {/* Slide Caption Box */}
              <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 bg-black/75 backdrop-blur-md border border-white/20 rounded-lg shadow-lg">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-teal-300">
                    {slide.tag || defaultTag}
                  </p>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-snug drop-shadow-sm line-clamp-2">
                  {slide.title}
                </p>
              </div>
            </div>
          );
        })}

        {/* Pagination Dots */}
        {total > 1 && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(dotIdx);
                }}
                aria-label={`Slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  dotIdx === currentIndex
                    ? "w-5 h-2 bg-gradient-to-r from-teal-300 to-emerald-400"
                    : "w-2 h-2 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
