"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { FEATURED_STRUCTURAL_WORKS } from "@/lib/constants";

function ProjectCard({ project, index, isActive, onMouseEnter, onMouseLeave }) {
  return (
    <Link
      href={project.href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`group block shrink-0 transition-all duration-500 select-none ${
        isActive
          ? "w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] -translate-y-2 z-10"
          : "w-[240px] sm:w-[270px] md:w-[290px] lg:w-[300px] opacity-95 hover:opacity-100 hover:-translate-y-1.5"
      }`}
    >
      {/* Image Container with Zoom Out Effect */}
      <div
        className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 transition-all duration-500 ${
          isActive
            ? "shadow-2xl ring-2 ring-[#C6A15A] border-transparent"
            : "shadow-md border border-neutral-200/80 hover:shadow-xl hover:border-[#C6A15A]/60"
        }`}
      >
        {/*
          HOVER ZOOM OUT EFFECT:
          Starts zoomed in (scale-[1.22]) and zooms out to scale-100 on group-hover for a smooth wide reveal!
        */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 80vw, 360px"
          className="object-cover transform scale-[1.22] transition-transform duration-700 ease-out group-hover:scale-100"
        />

        {/* Subtle Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

        {/* Category Tag pill */}
        {project.category && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider">
            {project.category}
          </div>
        )}
      </div>

      {/* Project Title and Client Label (Centered below picture) */}
      <div className="mt-3.5 px-2 text-center transition-transform duration-300">
        <h3 className="text-sm sm:text-base font-black text-neutral-900 tracking-tight leading-snug group-hover:text-[#C6A15A] transition-colors duration-300">
          {project.title}
        </h3>
        {project.client && (
          <p className="text-[11px] sm:text-xs font-bold text-neutral-500 uppercase tracking-wider mt-0.5 group-hover:text-neutral-700 transition-colors">
            {project.client}
          </p>
        )}
      </div>
    </Link>
  );
}

export default function FeaturedHoldingsShowcase({
  projects = FEATURED_STRUCTURAL_WORKS,
  allProjectsPath = "/projects",
}) {
  const scrollContainerRef = useRef(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  // Scroll left and right
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-white text-neutral-900 overflow-hidden font-sans border-t border-neutral-100" data-aos="fade-up">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Centered Header Section ─── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-[#C6A15A] text-[11px] font-black uppercase tracking-[0.2em]">
            <Sparkles size={12} />
            <span>PORTFOLIO &amp; DEVELOPMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 uppercase tracking-tight">
            OUR PROJECTS
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Our projects represent excellence across diverse sectors, delivered with the highest quality standards, engineering precision, and architectural innovation.
          </p>
        </div>

        {/* ─── Projects Showcase Carousel with Hover Zoom Out ─── */}
        <div className="relative group/carousel">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll("left")}
            aria-label="Previous Projects"
            className="absolute -left-2 sm:left-2 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 border border-neutral-200 shadow-xl flex items-center justify-center text-neutral-800 hover:bg-[#C6A15A] hover:text-white hover:border-[#C6A15A] transition-all duration-300 cursor-pointer hidden md:flex"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll("right")}
            aria-label="Next Projects"
            className="absolute -right-2 sm:right-2 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 border border-neutral-200 shadow-xl flex items-center justify-center text-neutral-800 hover:bg-[#C6A15A] hover:text-white hover:border-[#C6A15A] transition-all duration-300 cursor-pointer hidden md:flex"
          >
            <ChevronRight size={22} />
          </button>

          {/* Horizontal Scrolling Track */}
          <div
            ref={scrollContainerRef}
            className="flex items-center justify-start lg:justify-center gap-5 sm:gap-7 overflow-x-auto pb-8 pt-4 px-4 no-scrollbar scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, idx) => {
              // Default middle item is slightly prominent if none is hovered
              const defaultActiveIdx = Math.floor(projects.length / 2);
              const isActive = hoveredIdx !== null ? hoveredIdx === idx : idx === defaultActiveIdx;

              return (
                <ProjectCard
                  key={idx}
                  project={project}
                  index={idx}
                  isActive={isActive}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
              );
            })}
          </div>
        </div>

        {/* ─── Bottom CTA Button ─── */}
        <div className="text-center mt-8 sm:mt-10" data-aos="fade-up" data-aos-delay="150">
          <Link
            href={allProjectsPath}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-white bg-neutral-950 hover:bg-[#C6A15A] hover:text-neutral-950 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>View All Projects</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </section>
  );
}
