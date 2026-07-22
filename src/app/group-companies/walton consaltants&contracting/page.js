import Image from "next/image";
import Link from "next/link";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardList,
  Globe2,
  Hammer,
  Layers,
  MapPin,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Wrench,
  Bolt,
  FileText,
  SlidersHorizontal,
  Plus,
} from "lucide-react";

const HERO = {
  badge: "Trusted Engineering & Infrastructure Development Company",
  headline: "Engineering Excellence. Building Tomorrow’s Infrastructure.",
  subline:
    "Walton Consultants & Contracting is a leading engineering and construction company specializing in civil engineering, EPC projects, industrial construction, and infrastructure development. We deliver innovative, sustainable, and high-quality engineering solutions that support industrial growth and national development.",
  ctaPrimary: "Explore Projects",
  ctaSecondary: "View Our Expertise",
};

const STATS = [
  { icon: Award, value: "25+", label: "Years of Engineering Excellence" },
  { icon: Building2, value: "350+", label: "Completed Projects" },
  { icon: Users, value: "1,200+", label: "Engineering Professionals" },
  { icon: Globe2, value: "50+", label: "Industrial & Government Clients" },
  { icon: CheckCircle2, value: "99%", label: "Project Delivery Success" },
];

const CORE_SERVICES = [
  {
    icon: Building2,
    title: "Civil Engineering",
    desc: "Design and construction of roads, highways, bridges, commercial buildings, residential developments, and public infrastructure.",
  },
  {
    icon: Truck,
    title: "EPC Projects",
    desc: "Complete engineering, procurement, and construction solutions for complex industrial and infrastructure projects.",
  },
  {
    icon: Wrench,
    title: "Industrial Construction",
    desc: "Construction of factories, warehouses, manufacturing plants, processing facilities, and industrial complexes.",
  },
  {
    icon: Layers,
    title: "Infrastructure Development",
    desc: "Development of transportation systems, water infrastructure, utilities, urban development, and public facilities.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    desc: "Professional planning, scheduling, budgeting, risk management, quality assurance, and project supervision.",
  },
  {
    icon: Hammer,
    title: "Engineering Consultancy",
    desc: "Technical advisory services including structural engineering, feasibility studies, design review, and construction planning.",
  },
];

const INDUSTRIES = [
  "Infrastructure Development",
  "Oil & Gas",
  "Manufacturing",
  "Energy & Utilities",
  "Commercial Buildings",
  "Residential Communities",
  "Healthcare Facilities",
  "Educational Institutions",
  "Transportation",
  "Logistics & Warehousing",
  "Government Projects",
  "Smart Cities",
];

const WHY_CHOOSE = [
  {
    title: "Experienced Engineering Team",
    desc: "Highly qualified engineers, architects, planners, and technical experts delivering world-class solutions.",
  },
  {
    title: "Complete Project Delivery",
    desc: "Comprehensive services covering planning, design, procurement, construction, and commissioning.",
  },
  {
    title: "Advanced Engineering Technology",
    desc: "Utilizing modern engineering tools, digital planning tools, and innovative construction methodologies.",
  },
  {
    title: "Quality Assurance",
    desc: "Strict quality control procedures ensure durability, safety, and long-term project performance.",
  },
  {
    title: "Safety First",
    desc: "Maintaining international health, safety, and environmental standards across every project.",
  },
  {
    title: "Sustainable Construction",
    desc: "Developing environmentally responsible infrastructure through efficient resource management and sustainable engineering practices.",
  },
];

const PROCESS = [
  { step: "01", title: "Project Assessment", desc: "Understanding project objectives, site conditions, and engineering requirements." },
  { step: "02", title: "Planning & Design", desc: "Preparing engineering designs, feasibility studies, schedules, and technical documentation." },
  { step: "03", title: "Procurement", desc: "Efficient sourcing of materials, equipment, and engineering resources." },
  { step: "04", title: "Construction", desc: "Executing precision construction with quality control and strict safety management." },
  { step: "05", title: "Inspection & Quality Control", desc: "Conducting comprehensive testing, inspections, and compliance verification." },
  { step: "06", title: "Project Handover", desc: "Delivering fully completed projects with operational readiness and technical documentation." },
];

const CAPABILITIES = [
  { title: "Structural Engineering", desc: "Design and analysis of buildings, bridges, industrial structures, and specialized systems." },
  { title: "Transportation Infrastructure", desc: "Roads, highways, bridges, rail, tunnels, and transit networks built for operational excellence." },
  { title: "Industrial Facilities", desc: "Manufacturing plants, refineries, processing facilities, and production infrastructure." },
  { title: "Mechanical & Electrical Engineering", desc: "HVAC systems, electrical installations, utilities, and integrated engineering systems." },
  { title: "Construction Supervision", desc: "On-site management, quality inspection, and technical monitoring for project excellence." },
  { title: "Project Planning", desc: "BIM scheduling, resource allocation, and intelligent construction documentation." },
];

const TECHNOLOGY = [
  "Building Information Modeling",
  "CAD & 3D Engineering Design",
  "Structural Analysis Software",
  "Digital Project Management",
  "GIS Mapping",
  "Drone Site Surveying",
  "Smart Infrastructure Systems",
  "Quality Monitoring Technologies",
];

const FEATURED_PROJECTS = [
  { title: "Highway Infrastructure Development", image: "/project-infrastructure.png" },
  { title: "Industrial Manufacturing Facilities", image: "/project-industrial.png" },
  { title: "Commercial & Mixed-Use Developments", image: "/project-commercial.png" },
  { title: "Utility Infrastructure Projects", image: "/project-infrastructure.png" },
];

const TESTIMONIALS = [
  {
    quote: "Walton Consultants & Contracting consistently delivers high-quality engineering solutions that exceed our expectations.",
    name: "Industrial Client",
  },
  {
    quote: "Their experienced team ensures safety, reliability, and timely project delivery in every infrastructure engineering engagement.",
    name: "Infrastructure Development Partner",
  },
];

const FAQS = [
  { q: "What services does Walton Consultants & Contracting provide?", a: "We provide civil engineering, EPC projects, industrial construction, infrastructure development, project management, and consultancy services." },
  { q: "Which industries do you serve?", a: "We serve infrastructure, oil & gas, manufacturing, energy, commercial, residential, healthcare, education, transport, logistics, and government sectors." },
  { q: "Do you provide complete EPC solutions?", a: "Yes, we offer full EPC services from design and procurement through construction and project commissioning." },
  { q: "How do you maintain project quality?", a: "Our teams apply rigorous quality control, inspection, compliance checks, and international engineering standards." },
];

function SectionHeader({ eyebrow, title, description, center }) {
  return (
    <div className={`${center ? "text-center" : ""} max-w-3xl mx-auto`}>
      <p className="text-[11px] font-black uppercase tracking-[0.32em] text-[#F8D26E] mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-4">{title}</h2>
      {description && <p className="text-sm leading-relaxed text-slate-600">{description}</p>}
    </div>
  );
}

function FeatureCard({ title, desc, icon: Icon }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E4EAF7] text-[#1D3E72] mb-4">
        <Icon size={20} />
      </div>
      <h3 className="font-bold text-lg text-slate-900 mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function StatItem({ icon: Icon, value, label }) {
  return (
    <div className="rounded-3xl border border-slate-700/10 bg-slate-950/95 p-6 text-center text-white shadow-xl">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1B3B6D] text-[#F9D67E]">
        <Icon size={20} />
      </div>
      <p className="text-3xl font-black mb-2">{value}</p>
      <p className="text-sm text-slate-300">{label}</p>
    </div>
  );
}

function ProcessCard({ step, title, desc }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F8D26E]/20 text-[#B0781A] font-black">{step}</div>
        <h4 className="text-base font-bold text-slate-900">{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

export default function WaltonConsultantsPage() {
  return (
    <main className="font-sans bg-white text-slate-900">
      <HeaderNavbar activeRoute="/group-companies" />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/walton.jpeg"
            alt="Walton Consultants & Contracting hero"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-screen-xl px-6 py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_0.95fr] items-center">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5A82C9] bg-[#11337A]/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-[#C5D5FF] font-bold mb-6">
                {HERO.badge}
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-white">
                {HERO.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200">{HERO.subline}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#F8D26E] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-slate-950/10 hover:bg-[#e2c35e] transition">
                  {HERO.ctaPrimary} <ArrowRight size={16} />
                </Link>
                <Link href="#expertise" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white hover:bg-white/15 transition">
                  {HERO.ctaSecondary} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
              <div className="overflow-hidden rounded-[28px] border border-white/10">
                <Image src="/hero-building.png" alt="Infrastructure project" width={900} height={600} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.95fr] items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-5">Building Strong Foundations for the Future</h2>
              <p className="text-base leading-relaxed text-slate-600 mb-6">
                Walton Consultants & Contracting provides integrated engineering, procurement, construction, and infrastructure solutions across multiple industries. From concept and design to execution and project completion, we combine technical expertise, innovation, and operational excellence to deliver projects that meet the highest standards of quality and performance.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Our multidisciplinary team of engineers, architects, project managers, and technical specialists is committed to delivering sustainable infrastructure that creates lasting value for businesses and communities.
              </p>
            </div>
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 shadow-sm">
              <Image src="/walton&mirrorfood.jpeg" alt="Walton building" width={880} height={560} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#132D5B] px-6 py-14 lg:py-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-4 md:grid-cols-5">
            {STATS.map((item, index) => (
              <div key={index} className="rounded-[26px] bg-[#0D264C] p-6 text-center text-white shadow-xl border border-white/5">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8D26E]/15 text-[#F8D26E]">
                  <item.icon size={22} />
                </div>
                <p className="text-3xl font-black mb-2">{item.value}</p>
                <p className="text-sm leading-relaxed text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Core Services"
            title="Expert Services Across Every Phase"
            description="From civil engineering to EPC delivery, Walton provides comprehensive solutions for complex industrial and infrastructure projects."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {CORE_SERVICES.map((service, index) => (
              <FeatureCard key={index} title={service.title} desc={service.desc} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Industries" title="Industries We Serve" description="Delivering tailored engineering excellence across sectors that shape modern economies." center />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((industry, index) => (
              <div key={index} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5 text-sm font-semibold text-slate-800">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-[#F7F8FB] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Why Choose Walton" title="Why Choose Walton Consultants & Contracting" description="A strong blend of experienced teams, advanced technology, and sustainability focus makes Walton the trusted partner for large-scale infrastructure projects." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <div key={index} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-[#153C75] text-2xl font-black mb-4">•</div>
                <h3 className="text-lg font-bold text-slate-950 mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Our Engineering Process" title="Our Engineering Process" description="A disciplined workflow that ensures every project meets performance, schedule, and quality expectations." />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PROCESS.map((item, index) => (
              <ProcessCard key={index} step={item.step} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-slate-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
          <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm">
            <SectionHeader eyebrow="Engineering Capabilities" title="Comprehensive Engineering Capabilities" description="Robust technical expertise spans structural design, site development, facility construction, and integrated system delivery." />
            <div className="mt-10 grid gap-4">
              {CAPABILITIES.map((item, index) => (
                <div key={index} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-bold text-slate-900 mb-2">{item.title}</p>
                  <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-4">Technology & Innovation</h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">Modern engineering solutions powered by advanced technologies that improve design accuracy, project delivery, and construction monitoring.</p>
              <div className="grid gap-3">
                {TECHNOLOGY.map((item, index) => (
                  <div key={index} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">{item}</div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-4">Sustainability</h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">Engineering with environmental responsibility through energy efficiency, material optimization, and waste reduction.</p>
              <div className="space-y-3">
                <div className="rounded-3xl bg-[#EFF3FF] p-4">
                  <p className="font-semibold text-slate-900">Safety Standards</p>
                  <p className="mt-2 text-sm text-slate-600">We maintain rigorous safety and environmental standards on all worksites.</p>
                </div>
                <div className="rounded-3xl bg-[#EFF3FF] p-4">
                  <p className="font-semibold text-slate-900">Quality Assurance</p>
                  <p className="mt-2 text-sm text-slate-600">Strict quality management ensures resilient infrastructure delivery.</p>
                </div>
                <div className="rounded-3xl bg-[#EFF3FF] p-4">
                  <p className="font-semibold text-slate-900">Risk Management</p>
                  <p className="mt-2 text-sm text-slate-600">Advanced planning mitigates risk across engineering execution.</p>
                </div>
                <div className="rounded-3xl bg-[#EFF3FF] p-4">
                  <p className="font-semibold text-slate-900">Continuous Training</p>
                  <p className="mt-2 text-sm text-slate-600">Our people stay updated with the latest engineering standards and technologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Featured Projects" title="Engineering Projects Delivered" description="Selected works that demonstrate our capability across infrastructure, industrial, commercial, and utility development." />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {FEATURED_PROJECTS.map((project, index) => (
              <div key={index} className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 shadow-sm">
                <div className="relative h-52 w-full">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-950">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FB] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl grid gap-6 xl:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-black text-slate-950 mb-4">Our Vision</h3>
            <p className="text-sm leading-relaxed text-slate-600">To become a globally recognized engineering and contracting company delivering innovative infrastructure solutions, strengthening communities, and supporting sustainable growth.</p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-black text-slate-950 mb-4">Our Mission</h3>
            <p className="text-sm leading-relaxed text-slate-600">To provide integrated engineering, procurement, and construction services through innovation, technical excellence, operational efficiency, and a strong commitment to quality and sustainability.</p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-black text-slate-950 mb-4">Client Testimonials</h3>
            <div className="space-y-6">
              {TESTIMONIALS.map((item, index) => (
                <div key={index}>
                  <p className="text-sm leading-relaxed text-slate-600">“{item.quote}”</p>
                  <p className="mt-4 font-semibold text-slate-900">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader eyebrow="Frequently Asked Questions" title="Common Questions" description="Answers to the most common project and service questions." center />
          <div className="mt-10 grid gap-4">
            {FAQS.map((item, index) => (
              <details key={index} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                <summary className="cursor-pointer text-base font-bold text-slate-900">{item.q}</summary>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-screen-xl flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#A7C5FF] font-bold mb-3">Engineering Sustainable Infrastructure for Future Generations</p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">Walton Consultants & Contracting continues to deliver engineering excellence through innovation, technical expertise, and sustainable infrastructure development.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="#projects" className="inline-flex items-center gap-2 rounded-full bg-[#F8D26E] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-950 hover:bg-[#e2c35e] transition">
              Engineering Excellence
            </Link>
            <Link href="#expertise" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white hover:bg-white/10 transition">
              Innovation & Technology
            </Link>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
