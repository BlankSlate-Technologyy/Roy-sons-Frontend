"use client";

import Link from "next/link";
import { 
  Building2, 
  ChevronRight, 
  Layers, 
  TrendingUp, 
  Link as LinkIcon,
  ShieldCheck,
  Zap,
  Globe,
  HardHat,
  Monitor,
  HeartPulse,
  BriefcaseMedical,
  Pill,
  PawPrint,
  Sun,
  PlugZap,
  Shield,
  Sprout,
  Gem,
  Utensils,
  Lightbulb,
  Truck,
  Factory,
  GraduationCap
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

const REGIONAL_OFFICES = [
  { city: "Lahore", detail: "Corporate Headquarters - 123 Business Avenue" },
  { city: "Karachi", detail: "Southern Port Operations & Customs Desk" },
  { city: "Islamabad", detail: "Government Liaison & Diplomatic Desk" }
];

const COMPANIES = [
  {
    name: "Roy Construction (Pvt.) Ltd.",
    sector: "Construction & Infrastructure",
    desc: "Infrastructure, civil construction, highways, and structural engineering.",
    icon: HardHat
  },
  {
    name: "Roy Hospital Turnkey Engineering",
    sector: "Hospital Engineering & Clean Rooms",
    desc: "Turnkey planning, clean rooms, medical gas piping, and critical facility designs.",
    icon: BriefcaseMedical
  },
  {
    name: "Roy Health Technologies",
    sector: "Healthcare & Medical Technologies",
    desc: "Supply, installation, and support of advanced medical equipment systems.",
    icon: HeartPulse
  },
  {
    name: "Roy Pharma Consultancies",
    sector: "Pharmaceutical Consultancy",
    desc: "Strategic consultancy, GMP certifications, and pharmaceutical compliance.",
    icon: Pill
  },
  {
    name: "Roy Veterinary & Livestock Care",
    sector: "Veterinary & Livestock Solutions",
    desc: "Biosecurity, livestock pharmaceuticals, and veterinary consulting services.",
    icon: PawPrint
  },
  {
    name: "Roy Information Technology",
    sector: "Information Technology & AI",
    desc: "Enterprise systems, network infrastructures, and cloud server provisioning.",
    icon: Monitor
  },
  {
    name: "Roy AI & Cognitive Labs",
    sector: "Information Technology & AI",
    desc: "Artificial intelligence models, automation scripts, and predictive analytics.",
    icon: Lightbulb
  },
  {
    name: "Roy Power & Grid Systems",
    sector: "Electrical & Power Systems",
    desc: "Substation installations, grid components, and heavy electrical transmissions.",
    icon: Zap
  },
  {
    name: "Roy EcoEnergy & Solar",
    sector: "Renewable Energy",
    desc: "Commercial solar installations, wind setups, and grid-tied systems.",
    icon: Sun
  },
  {
    name: "Roy e-Mobility Solutions",
    sector: "Electric Mobility",
    desc: "EV charging systems, charging grids, and electric fleet management.",
    icon: PlugZap
  },
  {
    name: "Roy Defense Tech & Systems",
    sector: "Defense & Security",
    desc: "High-grade security systems, surveillance grids, and tactical defenses.",
    icon: Shield
  },
  {
    name: "Roy Agro-Forestry & Dairy",
    sector: "Agriculture & Dairy Development",
    desc: "Crop optimization, dairy farms, and high-yield agricultural setups.",
    icon: Sprout
  },
  {
    name: "Roy Mineral Exploration",
    sector: "Mining & Minerals",
    desc: "Exploration, drilling surveys, and mineral extraction contracts.",
    icon: Gem
  },
  {
    name: "Roy Food Processing Operations",
    sector: "Food Processing",
    desc: "Processing plants, secure packaging, and food chain management.",
    icon: Utensils
  },
  {
    name: "Roy Global Trading",
    sector: "International Trade & Exports",
    desc: "Global shipping desk, bulk import-export trades, and custom clearances.",
    icon: Globe
  },
  {
    name: "Roy Logistics & Freight Desk",
    sector: "International Trade & Exports",
    desc: "Fleet coordination, freight forwarding, and local dry port supply operations.",
    icon: Truck
  },
  {
    name: "Roy Real Estate & Developer",
    sector: "Construction & Infrastructure",
    desc: "Commercial plazas, corporate zones, and residential development services.",
    icon: Building2
  },
  {
    name: "Roy Manufacturing & Assembly",
    sector: "Manufacturing",
    desc: "Industrial machinery assembly and component production.",
    icon: Factory
  },
  {
    name: "Roy cleanroom Systems",
    sector: "Hospital Engineering & Clean Rooms",
    desc: "Laminar flow system setups, clean room filtration, and testing setups.",
    icon: Layers
  },
  {
    name: "Roy Power Equipment Trading",
    sector: "Electrical & Power Systems",
    desc: "Trade and distribution of industrial-grade voltage components.",
    icon: Zap
  },
  {
    name: "Roy Agri Machinery Systems",
    sector: "Agriculture & Dairy Development",
    desc: "Distributing crop harvesters, tractors, and smart drip-feed setups.",
    icon: Sprout
  },
  {
    name: "Roy Energy Storage Technologies",
    sector: "Renewable Energy / E-Mobility",
    desc: "Manufacturing grid storage battery systems and clean chargers.",
    icon: PlugZap
  },
  {
    name: "Roy Security Systems Desk",
    sector: "Defense & Security",
    desc: "Advanced industrial secure entries, biometric systems, and CCTV systems.",
    icon: ShieldCheck
  },
  {
    name: "Roy Pharma Compliance Desk",
    sector: "Pharmaceutical Consultancy",
    desc: "Audits, validation protocols, and WHO-GMP documentation consultancy.",
    icon: Pill
  },
  {
    name: "Roy University Ed-tech System",
    sector: "Government & Universities Support",
    desc: "Designing and installing smart labs, science centers, and systems for academia.",
    icon: GraduationCap
  },
  {
    name: "Roy Ventures Ltd.",
    sector: "Group Holdings",
    desc: "Advising and funding new corporate sectors under the Roys Group banner.",
    icon: TrendingUp
  }
];

export default function GroupCompaniesPage() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <HeaderNavbar activeRoute="/group-companies" />

      {/* Breadcrumb */}
      <section className="pt-8 pb-4 px-6 border-b border-neutral-100">
        <div className="mx-auto max-w-screen-xl">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-[10.5px] text-neutral-400 font-bold uppercase tracking-wider">
              <li>
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight size={11} className="text-neutral-300" />
                <span className="text-neutral-950">Group Companies</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Title Intro */}
      <section className="py-16 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black tracking-[0.3em] text-neutral-400 uppercase mb-3 block">
              OUR SUBSIDIARIES
            </span>
            <h1 className="text-4xl lg:text-5xl font-black text-neutral-950 mb-6 leading-tight tracking-tight uppercase">
              Group Companies
            </h1>
            <p className="text-[14px] text-neutral-500 leading-relaxed font-normal">
              Roys Group comprises 26 specialized corporate entities and divisions working in tandem. 
              Together, we cover all strategic business sectors to deliver turnkey capabilities for critical government, 
              private, and international operations.
            </p>
          </div>
        </div>
      </section>

      {/* 26 Companies Grid */}
      <section className="pb-24 px-6 bg-white">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {COMPANIES.map((company, index) => {
              const Icon = company.icon;
              return (
                <div key={index} className="bg-neutral-50 border border-neutral-200 p-6 flex flex-col justify-between rounded-sm group hover:border-black transition-all duration-300">
                  <div>
                    <div className="w-10 h-10 bg-white border border-neutral-250 flex items-center justify-center mb-6 rounded-sm">
                      <Icon size={20} className="text-neutral-605 group-hover:text-black transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-[8.5px] font-bold text-neutral-400 tracking-[0.14em] uppercase block mb-1">
                      {company.sector}
                    </span>
                    <h3 className="text-[13px] font-black uppercase tracking-wide text-neutral-950 mb-3 group-hover:text-black transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-[11.5px] text-neutral-500 leading-relaxed font-normal">
                      {company.desc}
                    </p>
                  </div>
                  <div className="pt-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-neutral-400 group-hover:text-black transition-colors">
                    <span>Subsidiary {index + 1} of 26</span>
                    <LinkIcon size={12} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Operations Section */}
      <section className="py-20 px-6 bg-neutral-950 text-white border-t border-neutral-850">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            
            <div className="lg:w-2/5 flex flex-col justify-center">
              <span className="text-[10px] font-black tracking-[0.24em] text-neutral-450 uppercase mb-3 block">
                NATIONWIDE NETWORK
              </span>
              <h2 className="text-3xl font-black text-white leading-tight uppercase tracking-wider mb-6">
                Regional Presence
              </h2>
              <div className="h-1 w-12 bg-white mb-6" />
              <p className="text-[12.5px] text-neutral-400 leading-relaxed font-light">
                Our companies coordinate operations through specialized regional offices that manage government pipelines, 
                port imports, trade customs, and local client consultancies.
              </p>
            </div>

            <div className="flex-1 lg:w-3/5 w-full flex flex-col gap-6 justify-center">
              <div className="grid gap-4">
                {REGIONAL_OFFICES.map((office, index) => (
                  <div key={index} className="bg-neutral-900 border border-neutral-800 p-6 rounded-sm flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center flex-shrink-0 text-white font-black text-[12px] mt-0.5">
                      0{index + 1}
                    </div>
                    <div>
                      <h4 className="text-[13px] font-black uppercase tracking-wider text-white mb-1">
                        {office.city} Office
                      </h4>
                      <p className="text-[12px] text-neutral-400 font-light">
                        {office.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
