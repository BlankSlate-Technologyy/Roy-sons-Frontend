import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_STRUCTURAL_WORKS } from "@/lib/constants";

function ProjectTile({ image, title, location, href }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden block bg-neutral-100 border border-neutral-200/50 shadow-sm rounded-sm"
      style={{ minHeight: "220px" }}
    >
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale transition-all duration-[600ms] ease-out group-hover:grayscale-0 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 px-4 py-3 border-t border-neutral-200/60 backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-white">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-neutral-900 transition-colors group-hover:text-black">
          {title}
        </p>
        <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-wider mt-0.5">
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
    <section className="py-16 border-b border-neutral-100 bg-white font-sans">
      <div className="max-w-screen-xl mx-auto px-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-black uppercase tracking-[0.2em] text-neutral-950">
              Featured Projects
            </h2>
            <div className="w-10 h-0.5 bg-neutral-950 mt-1.5 hidden sm:block" />
          </div>
          
          <Link
            href={allProjectsPath}
            id="view-all-projects-btn"
            className="inline-flex items-center gap-2.5 border-2 border-neutral-950 px-6 py-2.5 text-[9.5px] font-bold tracking-[0.16em] uppercase text-neutral-950 hover:bg-neutral-950 hover:text-white transition-all duration-300"
          >
            VIEW ALL PROJECTS 
            <ArrowRight size={11} strokeWidth={2.4} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectTile 
              key={index} 
              image={project.image}
              title={project.title}
              location={project.location}
              href={project.href}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
