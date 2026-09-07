"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { FEATURED_STRUCTURAL_WORKS } from "@/lib/constants";

function ProjectCard({ project, index }) {
  return (
    <Link
      href={project.href}
      className="group block shrink-0 w-[260px] sm:w-[300px] md:w-[320px] lg:w-[340px] transition-all duration-400 select-none hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 shadow-md border border-neutral-200/80 group-hover:shadow-2xl group-hover:border-[#0d9488]/40 transition-all duration-400">
        {/*
          SMOOTH ZOOM: Starts at natural scale, zooms in slightly on hover for a gentle effect
        */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 80vw, 340px"
          className="object-cover transform scale-100 transition-transform duration-700 ease-in-out group-hover:scale-110"
        />

        {/* Bottom gradient for text readability — only visible, no harsh overlay on full image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Category Tag pill — always readable */}
        {project.category && (
          <div
            className="project-category-tag absolute top-3 left-3 px-3 py-1.5 rounded-md text-[11px] font-extrabold uppercase shadow-lg !text-white"
            style={{ backgroundColor: "rgba(0,0,0,0.85)", color: "#ffffff", letterSpacing: "0.12em" }}
          >
            {project.category}
          </div>
        )}

        {/* Arrow icon on hover */}
        <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
          <ArrowRight size={14} className="text-[#042E3A]" />
        </div>
      </div>

      {/* Project Title and Client Label */}
      <div className="mt-3.5 px-1 text-center">
        <h3 className="text-sm sm:text-base font-black text-[#042E3A] tracking-tight leading-snug group-hover:text-[#0a7a8c] transition-colors duration-300">
          {project.title}
        </h3>
        {project.client && (
          <p className="text-[11px] sm:text-xs font-semibold text-[#042E3A]/60 uppercase tracking-wider mt-0.5 group-hover:text-[#0a7a8c]/80 transition-colors">
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
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
  }, []);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, projects]);

  const handleScroll = (direction) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const firstCard = container.querySelector("a");
    const scrollStep = firstCard ? firstCard.offsetWidth + 28 : 360;

    if (direction === "left") {
      if (container.scrollLeft <= 15) {
        container.scrollTo({
          left: container.scrollWidth - container.clientWidth,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: -scrollStep,
          behavior: "smooth",
        });
      }
    } else {
      const maxScroll = container.scrollWidth - container.clientWidth - 15;
      if (container.scrollLeft >= maxScroll) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: scrollStep,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="pt-14 sm:pt-20 pb-4 sm:pb-6 bg-white text-[#042E3A] overflow-hidden font-sans border-t border-[#0a7a8c]/15" data-aos="fade-up">
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

        {/* ─── Projects Showcase Carousel ─── */}
        <div className="relative group/carousel">
          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Previous project"
            className="absolute -left-2 sm:-left-3 lg:-left-5 top-[39%] -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-[0_4px_20px_rgba(4,46,58,0.18)] flex items-center justify-center text-[#042E3A] hover:bg-[#042E3A] hover:text-white hover:border-[#042E3A] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0a7a8c]/40 cursor-pointer group/arrow"
          >
            <ChevronLeft size={24} strokeWidth={2.5} className="group-hover/arrow:-translate-x-0.5 transition-transform duration-200" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Next project"
            className="absolute -right-2 sm:-right-3 lg:-right-5 top-[39%] -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/95 backdrop-blur-md border border-neutral-200/90 shadow-[0_4px_20px_rgba(4,46,58,0.18)] flex items-center justify-center text-[#042E3A] hover:bg-[#042E3A] hover:text-white hover:border-[#042E3A] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0a7a8c]/40 cursor-pointer group/arrow"
          >
            <ChevronRight size={24} strokeWidth={2.5} className="group-hover/arrow:translate-x-0.5 transition-transform duration-200" />
          </button>

          {/* Horizontal Scrolling Track */}
          <div
            ref={carouselRef}
            className="flex items-center justify-start gap-5 sm:gap-7 overflow-x-auto pb-8 pt-4 px-2 sm:px-4 no-scrollbar scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                project={project}
                index={idx}
              />
            ))}
          </div>
        </div>

        {/* ─── Bottom CTA Button ─── */}
        <div className="text-center mt-5 sm:mt-6 mb-2" data-aos="fade-up" data-aos-delay="150">
          <Link
            href={allProjectsPath}
            id="view-all-projects-btn"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.18em] text-white bg-gradient-to-r from-[#0284c7] via-[#0891b2] to-[#10b981] hover:from-[#0369a1] hover:to-[#059669] transition-all duration-300 shadow-[0_4px_16px_rgba(2,132,199,0.35)] hover:shadow-[0_8px_26px_rgba(16,185,129,0.55)] hover:-translate-y-0.5"
          >
            <span className="text-white font-black">View All</span>
            <ArrowRight size={14} className="text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}

