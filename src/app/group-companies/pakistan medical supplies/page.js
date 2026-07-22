import Image from "next/image";
import Link from "next/link";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

const COLORS = {
  primary: "#0F3D91",
  primaryDark: "#0B2E60",
  accent: "#1976D2",
  accentLight: "#E8F0FF",
  text: "#0F2140",
  muted: "#5B718F",
  border: "#D9E5FB",
  section: "#F6F9FF",
};

const STATS = [
  { value: "20+", label: "Years of Industry Experience" },
  { value: "250+", label: "Healthcare Projects" },
  { value: "100+", label: "Hospital Facilities Delivered" },
  { value: "500+", label: "Engineering Professionals" },
  { value: "99%", label: "Project Quality Compliance" },
];

const SERVICES = [
  {
    title: "Hospital Engineering",
    desc: "Complete engineering solutions for hospitals, medical centers, and healthcare facilities.",
  },
  {
    title: "Turnkey Healthcare Projects",
    desc: "End-to-end healthcare infrastructure development from planning and design to installation and commissioning.",
  },
  {
    title: "Clean Room Systems",
    desc: "Design and construction of ISO-certified clean rooms for pharmaceutical, biotechnology, and healthcare industries.",
  },
  {
    title: "HVAC Engineering",
    desc: "Specialized heating, ventilation, and air conditioning systems for hospitals, operating theatres, laboratories, and clean rooms.",
  },
  {
    title: "GMP Facility Development",
    desc: "Engineering and construction of GMP-compliant pharmaceutical manufacturing facilities and production environments.",
  },
  {
    title: "Medical Gas Pipeline Systems",
    desc: "Installation of oxygen, vacuum, compressed air, and other medical gas distribution systems for healthcare facilities.",
  },
  {
    title: "Electrical & Plumbing Systems",
    desc: "Integrated MEP solutions designed for safe, efficient, and smooth operation of healthcare infrastructure.",
  },
  {
    title: "Maintenance & Support",
    desc: "Comprehensive maintenance, upgrades, and 24/7 technical support for healthcare facilities and systems.",
  },
];

const INDUSTRIES = [
  "Hospitals",
  "Pharmaceuticals",
  "Biotechnology",
  "Research Laboratories",
  "Diagnostic Centers",
  "Medical Colleges",
  "Healthcare Institutions",
  "Clean Room Manufacturing",
  "Government Healthcare Projects",
  "Industrial Healthcare Facilities",
];

const WHY_CHOOSE = [
  "Healthcare Engineering Expertise",
  "International Standards",
  "Turnkey Project Delivery",
  "Advanced Technologies",
  "Quality Assurance",
  "Sustainable Solutions",
];

const PROCESS = [
  { step: "01", title: "Consultation & Assessment" },
  { step: "02", title: "Engineering Design" },
  { step: "03", title: "Procurement" },
  { step: "04", title: "Installation & Construction" },
  { step: "05", title: "Testing & Validation" },
  { step: "06", title: "Project Handover" },
];

const PROJECTS = [
  {
    title: "Multi-Specialty Hospital",
    image: "/project-infrastructure.png",
    subtitle: "Complete engineering and infrastructure solutions for advanced healthcare facilities.",
  },
  {
    title: "Pharmaceutical Plant",
    image: "/project-industrial.png",
    subtitle: "Design and construction of GMP-compliant pharmaceutical production environments.",
  },
  {
    title: "Research Laboratory Complex",
    image: "/project-commercial.png",
    subtitle: "Modern laboratory engineering with controlled environments and specialized systems.",
  },
  {
    title: "Clean Room Facility",
    image: "/project-infrastructure.png",
    subtitle: "High-performance clean room systems for pharmaceutical and biotechnology industries.",
  },
];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] font-black uppercase tracking-[0.32em] text-slate-500 mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-4">{title}</h2>
      {description && <p className="text-sm leading-relaxed text-slate-600">{description}</p>}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-[20px] border border-slate-200 bg-white px-6 py-7 text-center shadow-sm">
      <p className="text-3xl font-black text-slate-950 mb-2">{value}</p>
      <p className="text-sm text-slate-600 leading-relaxed">{label}</p>
    </div>
  );
}

function ServiceCard({ title, desc }) {
  return (
    <div className="rounded-[24px] border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-bold text-slate-950 mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}

function IndustryTag({ label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">{label}</div>
  );
}

function ReasonItem({ text }) {
  return (
    <div className="rounded-[20px] border border-slate-200 bg-white p-5 shadow-sm">
      <p className="font-semibold text-slate-950">{text}</p>
    </div>
  );
}

function ProcessStepCard({ step, title }) {
  return (
    <div className="flex gap-4 rounded-[20px] border border-slate-200 bg-white p-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-lg font-black text-slate-950">{step}</div>
      <div>
        <p className="font-bold text-slate-950">{title}</p>
      </div>
    </div>
  );
}

function ProjectCard({ title, subtitle, image }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      <div className="relative h-56 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-950 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{subtitle}</p>
        <Link href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900">
          View Project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function PakistanMedicalSuppliesPage() {
  return (
    <main className="bg-white text-slate-950 font-sans">
      <HeaderNavbar activeRoute="/group-companies" />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(19,60,145,0.22),_transparent_50%)]">
        <div className="mx-auto max-w-screen-xl px-6 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-blue-700 mb-6">
                Trusted Healthcare Infrastructure & Medical Engineering Company
              </span>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-tight mb-6">
                Engineering Healthcare. <span className="text-blue-700">Advancing Patient Care.</span>
              </h1>
              <p className="text-base leading-relaxed text-slate-600 mb-8">
                Pakistan Medical Supplies is a leading provider of hospital engineering, turnkey healthcare infrastructure, clean room solutions, HVAC systems, and GMP-compliant facilities. We deliver innovative, reliable, and sustainable healthcare environments that support hospitals, pharmaceutical industries, laboratories, and medical institutions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#solutions" className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-800 transition">
                  Explore Solutions
                </Link>
                <Link href="#expertise" className="inline-flex items-center gap-2 rounded-full border border-blue-700 bg-white px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-700 hover:text-white transition">
                  Our Expertise
                </Link>
                <Link href="#about" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition">
                  About Us
                </Link>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-slate-50 shadow-xl">
              <Image src="/pak janitorial.jpeg" alt="Healthcare engineering" width={1200} height={800} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((item, index) => (
              <StatCard key={index} value={item.value} label={item.label} />
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-[radial-gradient(circle_at_top,_rgba(232,240,255,0.78),_transparent_60%)] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Our Core Services"
            title="Building World-Class Healthcare Infrastructure"
            description="Pakistan Medical Supplies specializes in the design, engineering, construction, and commissioning of healthcare facilities. We provide integrated solutions for hospitals, pharmaceutical manufacturing plants, laboratories, research centers, and clean room environments."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} title={service.title} desc={service.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Industries We Serve"
            title="Supporting Every Healthcare Sector"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {INDUSTRIES.map((industry, index) => (
              <IndustryTag key={index} label={industry} />
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="bg-slate-50 px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl grid gap-10 lg:grid-cols-[0.95fr_0.75fr] items-start">
          <div>
            <SectionHeader
              eyebrow="Why Choose Pakistan Medical Supplies"
              title="Your Trusted Healthcare Engineering Partner"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {WHY_CHOOSE.map((reason, index) => (
                <ReasonItem key={index} text={reason} />
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950 mb-4">Our Project Process</h3>
            <div className="space-y-4">
              {PROCESS.map((item) => (
                <ProcessStepCard key={item.step} step={item.step} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Excellence in Every Project"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} title={project.title} subtitle={project.subtitle} image={project.image} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[radial-gradient(circle_at_top,_rgba(15,37,93,0.15),_transparent_55%)] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-4">Trusted by Leading Organizations</h2>
              <p className="text-sm leading-relaxed text-slate-600">Working with global partners and healthcare leaders to deliver engineering excellence, safety, and operational performance.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 text-center text-slate-700">Siemens</div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 text-center text-slate-700">Schneider Electric</div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 text-center text-slate-700">Carrier</div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 text-center text-slate-700">Johnson Controls</div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 text-center text-slate-700">Trane</div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 text-center text-slate-700">Honeywell</div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 text-center text-slate-700">Daikin</div>
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
