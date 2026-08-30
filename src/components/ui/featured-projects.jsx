import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_STRUCTURAL_WORKS } from "@/lib/constants";

function ProjectTile({ image, title, location, href }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden block border border-[#C6A15A]/30 shadow-lg rounded-sm bg-[#101518]"
      style={{ minHeight: "230px" }}
    >
      <div className="relative w-full h-[230px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale transition-all duration-[600ms] ease-out group-hover:grayscale-0 group-hover:scale-[1.05]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101518] via-[#101518]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-[#101518]/95 px-4 py-3 border-t border-[#C6A15A]/40 backdrop-blur-md transition-colors duration-300">
        <p className="text-[15px] font-extrabold uppercase tracking-[0.14em] text-[#C6A15A] transition-colors group-hover:text-[#D9B87A]" style={{ textShadow: "0 0 10px rgba(198,161,90,0.3)" }}>
          {title}
        </p>
        <p className="text-[14px] text-[#F7F5F0]/80 font-semibold uppercase tracking-wider mt-0.5">
          {location}
        </p>
      </div>
    </Link>
  );
}

export default function FeaturedHoldingsShowcase({
  projects = FEATURED_STRUCTURAL_WORKS,
  allProjectsPath = "/projects",
}) {
  return (
    <section className="py-16 font-sans" style={{ backgroundColor: "#101518" }} data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8" data-aos="fade-up" data-aos-delay="100">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-black uppercase tracking-[0.2em] text-[#F7F5F0]">
              Featured Projects
            </h2>
            <div className="w-10 h-0.5 bg-[#C6A15A] mt-1.5 hidden sm:block" />
          </div>
          
          <Link
            href={allProjectsPath}
            id="view-all-projects-btn"
            className="rs-cta-btn inline-flex items-center gap-2.5 border-2 border-[#C6A15A] bg-transparent px-6 py-2.5 text-[13.5px] font-bold tracking-[0.16em] uppercase hover:bg-[#C6A15A] hover:border-[#C6A15A] transition-all duration-300 group"
          >
            <span className="text-[#C6A15A] group-hover:text-[#2D3136] transition-colors duration-300">VIEW ALL PROJECTS</span>
            <ArrowRight size={11} strokeWidth={2.4} className="text-[#C6A15A] group-hover:text-[#2D3136] group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => {
            const staggerDelay = ((index % 4) + 1) * 100;
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={staggerDelay}
              >
                <ProjectTile 
                  image={project.image}
                  title={project.title}
                  location={project.location}
                  href={project.href}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
