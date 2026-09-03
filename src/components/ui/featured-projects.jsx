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
            ? "shadow-2xl ring-2 ring-[#0a7a8c] border-transparent"
            : "shadow-md border border-neutral-200/80 hover:shadow-xl hover:border-[#0d9488]/70"
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
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#042E3A]/85 backdrop-blur-md border border-[#0d9488]/40 text-white text-[10px] font-extrabold uppercase tracking-wider">
            {project.category}
          </div>
        )}
      </div>

      {/* Project Title and Client Label (Centered below picture) */}
      <div className="mt-3.5 px-2 text-center transition-transform duration-300">
        <h3 className="text-sm sm:text-base font-black text-[#042E3A] tracking-tight leading-snug group-hover:text-[#0a7a8c] transition-colors duration-300">
          {project.title}
        </h3>
        {project.client && (
          <p className="text-[11px] sm:text-xs font-bold text-[#042E3A]/70 uppercase tracking-wider mt-0.5 group-hover:text-[#0a7a8c] transition-colors">
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
    <section className="py-16 sm:py-24 bg-white text-[#042E3A] overflow-hidden font-sans border-t border-[#0a7a8c]/15" data-aos="fade-up">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Centered Header Section ─── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0fdfa] border border-[#0a7a8c]/25 text-[#0a7a8c] text-[11px] font-black uppercase tracking-[0.2em]">
            <Sparkles size={12} />
            <span>PORTFOLIO &amp; DEVELOPMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#042E3A] uppercase tracking-tight">
            OUR PROJECTS
          </h2>

          <p className="text-sm sm:text-base text-[#042E3A]/80 font-normal leading-relaxed max-w-2xl mx-auto">
            Our projects represent excellence across diverse sectors, delivered with the highest quality standards, engineering precision, and architectural innovation.
          </p>
        </div>

        {/* ─── Projects Showcase Carousel with Hover Zoom Out ─── */}
        <div className="relative group/carousel">
          
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll("left")}
            aria-label="Previous Projects"
            className="absolute -left-2 sm:left-2 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 border border-[#0a7a8c]/25 shadow-xl flex items-center justify-center text-[#042E3A] hover:bg-gradient-to-r hover:from-[#042E3A] hover:to-[#0a7a8c] hover:text-white hover:border-transparent hover:shadow-[0_4px_16px_rgba(10,122,140,0.35)] transition-all duration-300 cursor-pointer hidden md:flex"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll("right")}
            aria-label="Next Projects"
            className="absolute -right-2 sm:right-2 top-[38%] -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 border border-[#0a7a8c]/25 shadow-xl flex items-center justify-center text-[#042E3A] hover:bg-gradient-to-r hover:from-[#042E3A] hover:to-[#0a7a8c] hover:text-white hover:border-transparent hover:shadow-[0_4px_16px_rgba(10,122,140,0.35)] transition-all duration-300 cursor-pointer hidden md:flex"
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
            id="view-all-projects-btn"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-white bg-gradient-to-r from-[#042E3A] via-[#075d6d] to-[#0a7a8c] hover:from-[#0a7a8c] hover:to-[#0d9488] transition-all duration-300 shadow-[0_4px_16px_rgba(10,122,140,0.35)] hover:shadow-[0_8px_26px_rgba(13,148,136,0.55)] hover:-translate-y-0.5"
          >
            <span className="text-white font-black">View All</span>
            <ArrowRight size={14} className="text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}
