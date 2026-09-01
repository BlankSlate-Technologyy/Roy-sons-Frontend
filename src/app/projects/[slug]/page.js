"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  Layers, 
  Check, 
  Sparkles, 
  ChevronRight, 
  Share2, 
  ShieldCheck,
  TrendingUp,
  Briefcase
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import { PROJECTS_DATA } from "@/lib/projects-data";

export default function ProjectDetailPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams?.slug;
  const project = PROJECTS_DATA[slug] || PROJECTS_DATA["commercial-complex"];

  // Related projects list (exclude current slug)
  const relatedProjects = Object.values(PROJECTS_DATA).filter(
    (p, index, self) => p.slug !== slug && p.slug !== "corporate-office-complex" && self.findIndex(t => t.title === p.title) === index
  );

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#dfb753]/30 selection:text-neutral-900">
      <HeaderNavbar activeRoute="/projects" />

      {/* Header Banner */}
      <section className="pt-28 pb-10 bg-[#0e1215] text-white border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#dfb753]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-neutral-400 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#dfb753] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-neutral-600" />
            <Link href="/projects" className="hover:text-[#dfb753] transition-colors">Projects</Link>
            <ChevronRight size={12} className="text-neutral-600" />
            <span className="text-[#dfb753]">{project.title}</span>
          </div>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a2127] border border-[#dfb753]/40 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-[#dfb753] animate-pulse" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#dfb753]">
                {project.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white tracking-tight leading-[1.1] mb-4">
              {project.title}
            </h1>

            <p className="text-[15px] sm:text-[17px] text-neutral-300 font-normal leading-relaxed max-w-3xl mb-8">
              {project.subtitle}
            </p>

            {/* Quick Specs Chips */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-neutral-800/80 text-[12px] text-neutral-300">
              {project.client && (
                <>
                  <div className="flex items-center gap-2">
                    <Building2 size={14} className="text-[#dfb753]" />
                    <span>Client: <strong className="text-white font-semibold">{project.client}</strong></span>
                  </div>
                  <div className="h-4 w-px bg-neutral-800 hidden sm:block" />
                </>
              )}
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#dfb753]" />
                <span className="font-semibold">{project.location}</span>
              </div>
              <div className="h-4 w-px bg-neutral-800 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Layers size={14} className="text-[#dfb753]" />
                <span>{project.focus}</span>
              </div>
              <div className="h-4 w-px bg-neutral-800 hidden sm:block" />
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#dfb753]" />
                <span className="text-emerald-400 font-semibold">{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Showcase */}
      <section className="bg-neutral-900 py-6 sm:py-10 border-b border-neutral-800">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-neutral-950 rounded-sm overflow-hidden shadow-2xl border border-neutral-800">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-sm border border-[#dfb753]/40">
              <p className="text-[11px] font-black uppercase tracking-widest text-[#dfb753]">
                {project.title} • {project.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Project Overview */}
            <section className="bg-white border border-neutral-200/80 p-8 sm:p-10 rounded-sm shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#dfb753] mb-3">
                <Sparkles size={14} />
                <span>PROJECT OVERVIEW</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight mb-5">
                {project.subtitle}
              </h2>
              <p className="text-[16px] text-neutral-600 leading-relaxed font-normal">
                {project.overview}
              </p>
            </section>

            {/* Project Highlights Grid */}
            <section className="bg-neutral-50/70 border border-neutral-200/70 p-8 sm:p-10 rounded-sm">
              <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-6 flex items-center gap-2.5">
                <CheckCircle2 size={22} className="text-[#dfb753]" />
                <span>Project Highlights</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3.5 bg-white border border-neutral-200/80 rounded-sm shadow-sm hover:border-[#dfb753]/60 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#dfb753]/15 flex items-center justify-center flex-shrink-0 text-[#dfb753]">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-[13.5px] font-semibold text-neutral-800">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Designed for Modern Business */}
            <section className="space-y-4">
              <h3 className="text-2xl font-black text-neutral-950 tracking-tight">
                Designed for Modern Business
              </h3>
              <p className="text-[15.5px] text-neutral-600 leading-relaxed">
                {project.designedForBusiness}
              </p>
            </section>

            {/* Architecture & Design */}
            <section className="space-y-4 pt-6 border-t border-neutral-200">
              <h3 className="text-2xl font-black text-neutral-950 tracking-tight">
                Architecture & Design Philosophy
              </h3>
              <p className="text-[15.5px] text-neutral-600 leading-relaxed">
                {project.architectureAndDesign}
              </p>
            </section>

            {/* Business Opportunities */}
            <section className="space-y-4 pt-6 border-t border-neutral-200">
              <h3 className="text-2xl font-black text-neutral-950 tracking-tight">
                Commercial & Business Opportunities
              </h3>
              <p className="text-[15.5px] text-neutral-600 leading-relaxed">
                {project.businessOpportunities}
              </p>
            </section>

            {/* Key Benefits Grid */}
            <section className="pt-6 border-t border-neutral-200">
              <h3 className="text-2xl font-black text-neutral-950 tracking-tight mb-6">
                Key Strategic Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {project.keyBenefits.map((benefit, idx) => (
                  <div 
                    key={idx}
                    className="p-6 bg-white border border-neutral-200 rounded-sm shadow-sm border-l-4 border-l-[#dfb753] hover:shadow-md transition-shadow"
                  >
                    <h4 className="text-[15px] font-black text-neutral-950 uppercase tracking-wider mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-[13.5px] text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Project Impact & Outcome */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-neutral-200">
              <div className="p-6 bg-[#0e1215] text-white rounded-sm border border-neutral-800">
                <div className="flex items-center gap-2 text-[#dfb753] text-[11px] font-black uppercase tracking-widest mb-3">
                  <TrendingUp size={14} />
                  <span>Socio-Economic Impact</span>
                </div>
                <h4 className="text-lg font-black text-white mb-2">Project Impact</h4>
                <p className="text-[13.5px] text-neutral-300 leading-relaxed">
                  {project.projectImpact}
                </p>
              </div>

              <div className="p-6 bg-[#1a2127] border border-[#dfb753]/30 rounded-sm text-white">
                <div className="flex items-center gap-2 text-[#dfb753] text-[11px] font-black uppercase tracking-widest mb-3">
                  <Building2 size={14} />
                  <span>Delivery Milestone</span>
                </div>
                <h4 className="text-lg font-black text-white mb-2">Project Outcome</h4>
                <p className="text-[13.5px] text-neutral-300 leading-relaxed">
                  {project.projectOutcome}
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar Info & Contact Panel */}
          <aside className="lg:col-span-4 space-y-8 sticky top-28">
            
            {/* Quick Specs Table */}
            <div className="bg-[#101518] text-white p-7 rounded-sm border border-neutral-800 shadow-xl">
              <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#dfb753] mb-5 pb-3 border-b border-neutral-800">
                PROJECT SPECIFICATIONS
              </h4>
              <div className="space-y-4 text-[13px]">
                {Object.entries(project.specs).map(([key, val], idx) => (
                  <div key={idx} className="flex flex-col pb-3 border-b border-neutral-800/60 last:border-0 last:pb-0">
                    <span className="text-[10.5px] text-neutral-400 font-bold uppercase tracking-wider mb-0.5">
                      {key}
                    </span>
                    <span className="text-neutral-100 font-semibold">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Inquiry Card */}
            <div className="bg-gradient-to-br from-neutral-900 to-[#161c20] text-white p-7 rounded-sm border border-[#dfb753]/40 shadow-lg text-center">
              <div className="w-12 h-12 rounded-full bg-[#dfb753]/20 border border-[#dfb753]/40 mx-auto flex items-center justify-center text-[#dfb753] mb-4">
                <Briefcase size={20} />
              </div>
              <h4 className="text-lg font-black text-white mb-2">
                Commercial Inquiries & Leasing
              </h4>
              <p className="text-[13px] text-neutral-300 leading-relaxed mb-6">
                Interested in retail, corporate office spaces, or partnerships at this commercial complex?
              </p>
              <Link
                href="/contact"
                className="rs-cta-btn inline-flex items-center justify-center gap-2 w-full py-3.5 text-[11px] font-black tracking-[0.16em] uppercase text-black border-2 border-[#dfb753] bg-[#dfb753] hover:bg-black hover:text-[#dfb753] hover:border-black transition-all duration-300 rounded-[2px]"
              >
                <span>Request Space Details</span>
                <ArrowRight size={13} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Back to all projects */}
            <div className="text-center pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-neutral-600 hover:text-black transition-colors"
              >
                <ArrowLeft size={13} />
                <span>Return to Projects Overview</span>
              </Link>
            </div>

          </aside>

        </div>
      </div>

      {/* Related Projects Showcase */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-[#0e1215] text-white border-t border-neutral-800 font-sans">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-10 pb-4 border-b border-neutral-800">
              <div>
                <p className="text-[10.5px] font-extrabold uppercase tracking-[0.25em] text-[#dfb753] mb-1.5">
                  PORTFOLIO
                </p>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                  Other Strategic Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#dfb753] hover:text-white transition-colors"
              >
                <span>View Full Portfolio</span>
                <ArrowRight size={13} strokeWidth={2.5} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((item, idx) => (
                <div 
                  key={idx}
                  className="group bg-[#161c20] border border-neutral-800 hover:border-[#dfb753]/60 rounded-sm overflow-hidden flex flex-col transition-all duration-300"
                >
                  <div className="relative w-full h-56 overflow-hidden bg-neutral-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md border border-[#dfb753]/40 px-2.5 py-1 rounded text-[9.5px] font-black text-[#dfb753] uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[11px] font-bold text-neutral-400 mb-2">{item.location}</p>
                      <h3 className="text-lg font-black text-white group-hover:text-[#dfb753] transition-colors leading-snug mb-3">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-neutral-400 line-clamp-2 mb-4">
                        {item.overview}
                      </p>
                    </div>

                    <Link
                      href={`/projects/${item.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] uppercase text-[#dfb753] group-hover:text-white transition-colors pt-4 border-t border-neutral-800"
                    >
                      <span>Explore Project</span>
                      <ArrowRight size={12} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CorporateFooter />
    </main>
  );
}
