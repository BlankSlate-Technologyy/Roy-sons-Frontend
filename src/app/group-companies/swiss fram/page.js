import Image from "next/image";
import Link from "next/link";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Leaf,
  Package,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
  Zap,
  HeartPulse,
  MapPin,
  Plus,
} from "lucide-react";

const COLORS = {
  primary: "#1C522A",
  primaryLight: "#2C7A4F",
  accent: "#A2C99A",
  accentDark: "#0F3A27",
  text: "#102514",
  muted: "#486B53",
  border: "#D7E4D8",
  section: "#F4F9F2",
};

const HERO_TAGLINE = "Trusted Dairy Production & Livestock Management";

const STATS = [
  { value: "30+", label: "Years of Dairy Farming Experience" },
  { value: "25,000+", label: "Healthy Livestock" },
  { value: "120 Million+", label: "Liters of Milk Produced Annually" },
  { value: "600+", label: "Skilled Professionals" },
  { value: "100%", label: "Commitment to Animal Welfare" },
];

const CORE_SERVICES = [
  {
    icon: Truck,
    title: "Dairy Production",
    desc: "Producing fresh, nutritious, and high-quality milk using automated milking systems and internationally recognized hygiene standards.",
  },
  {
    icon: Users,
    title: "Livestock Management",
    desc: "Professional herd management focused on nutrition, health monitoring, breeding, and overall animal well-being.",
  },
  {
    icon: Leaf,
    title: "Breeding Programs",
    desc: "Advanced genetic improvement programs designed to develop healthier and more productive livestock.",
  },
  {
    icon: ShieldCheck,
    title: "Veterinary Services",
    desc: "Comprehensive veterinary care including vaccinations, disease prevention, diagnostics, and routine health monitoring.",
  },
  {
    icon: Sparkles,
    title: "Animal Nutrition",
    desc: "Scientifically balanced feeding programs that improve livestock health, productivity, and milk quality.",
  },
  {
    icon: Package,
    title: "Sustainable Farm Management",
    desc: "Environmental responsibility practices focused on efficient water use, waste management, and renewable energy.",
  },
];

const PRODUCTS = [
  "Fresh Milk",
  "Pasteurized Milk",
  "Organic Dairy Products",
  "Dairy Ingredients",
  "Livestock Genetics",
  "Breeding Programs",
  "Animal Feed Solutions",
  "Dairy Farm Resources",
];

const INDUSTRIES = [
  "Dairy Industry",
  "Food Processing",
  "Agriculture",
  "Retail Distribution",
  "Hospitality",
  "Restaurants",
  "Educational Institutions",
  "Livestock Farms",
  "Agricultural Cooperatives",
  "Government Agricultural Programs",
];

const WHY_CHOOSE = [
  {
    title: "Premium Quality",
    desc: "Consistently producing fresh and nutritious dairy products with strict quality control.",
    icon: CheckCircle2,
  },
  {
    title: "Animal Welfare",
    desc: "Providing exceptional care, comfortable housing, balanced nutrition, and veterinary support.",
    icon: HeartPulse,
  },
  {
    title: "Sustainable Farming",
    desc: "Protecting natural resources through environmentally responsible agricultural practices.",
    icon: Leaf,
  },
  {
    title: "Advanced Technology",
    desc: "Utilizing smart farm systems, precision feeding, and modern milking technologies.",
    icon: Zap,
  },
  {
    title: "Experienced Professionals",
    desc: "A team of veterinarians, dairy specialists, nutritionists, and agricultural experts committed to excellence.",
    icon: Users,
  },
  {
    title: "Continuous Innovation",
    desc: "Investing in research, breeding improvements, and modern farming technologies to maximize productivity.",
    icon: Award,
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Livestock Selection",
    desc: "Carefully selecting healthy livestock with superior genetics.",
  },
  {
    step: "02",
    title: "Nutrition & Feeding",
    desc: "Providing scientifically formulated nutrition for healthy growth and milk production.",
  },
  {
    step: "03",
    title: "Veterinary Care",
    desc: "Routine health monitoring, preventive healthcare, and professional veterinary services.",
  },
  {
    step: "04",
    title: "Dairy Production",
    desc: "Modern milking systems ensuring hygiene, efficiency, and premium milk quality.",
  },
  {
    step: "05",
    title: "Quality Assurance",
    desc: "Comprehensive laboratory testing and food safety inspections.",
  },
  {
    step: "06",
    title: "Distribution",
    desc: "Efficient cold-chain storage and distribution for fresh dairy products.",
  },
];

const SUSTAINABILITY = [
  {
    label: "Water Conservation",
    value: "Optimized irrigation and water recycling for farm operations.",
  },
  {
    label: "Renewable Energy",
    value: "Solar-powered facilities and energy efficiency across our farms.",
  },
  {
    label: "Waste Management",
    value: "Responsible waste reduction and nutrient recycling systems.",
  },
  {
    label: "Biodiversity",
    value: "Crop rotation and habitat preservation to support local ecosystems.",
  },
];

const INNOVATION = [
  "Automated Milking Systems",
  "Climate-Controlled Barns",
  "Smart Livestock Tracking",
  "Animal Health Monitoring",
  "Precision Feeding Solutions",
  "Farm Management Software",
  "Genetic Improvement Programs",
  "Agricultural Data Analytics",
];

const FEATURED_PROGRAMS = [
  {
    title: "Premium Dairy Production",
    desc: "Delivering delicious, nutritious dairy products with advanced farming methods.",
    img: "/swiss fram.jpeg",
  },
  {
    title: "Livestock Genetics Program",
    desc: "Improving herd health and productivity through responsible breeding and genetic selection.",
    img: "/swiss fram.jpeg",
  },
  {
    title: "Sustainable Farming Initiative",
    desc: "Implementing eco-friendly farm systems that support long-term agricultural development.",
    img: "/swiss fram.jpeg",
  },
];

const TESTIMONIALS = [
  {
    name: "Dairy Industry Partner",
    role: "Senior Procurement Lead",
    quote: "Swiss Farms consistently delivers exceptional dairy quality through modern, sustainable farming practices.",
  },
  {
    name: "Agricultural Specialist",
    role: "Supply Chain Director",
    quote: "Their animal welfare standards and production systems set a new benchmark for dairy farming.",
  },
];

const FAQS = [
  { q: "What products does Swiss Farms produce?", a: "Fresh milk, pasteurized milk, organic dairy products, dairy ingredients, and livestock genetics solutions." },
  { q: "How do you ensure animal welfare?", a: "Through expert veterinary care, balanced nutrition, clean housing, and humane herd management." },
  { q: "Do you use modern farming technologies?", a: "Yes, we apply automated milk systems, precision feeding, climate-controlled barns, and farm data analytics." },
  { q: "Are your farming practices sustainable?", a: "Yes, we emphasize water conservation, renewable energy, waste management, and biodiversity protection." },
];

function SectionTitle({ label, title, description }) {
  return (
    <div className="max-w-3xl">
      <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] font-black text-[#4C664E] mb-4">
        <span className="inline-block w-2 h-2 rounded-full bg-[#4C664E]" />
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#132114] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[14px] leading-relaxed text-[#4F6C58]">{description}</p>
      )}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-[#D8E4D7] bg-white p-6 shadow-sm">
      <p className="text-3xl font-black text-[#1C522A] mb-3">{value}</p>
      <p className="text-[13px] leading-relaxed text-[#556C57]">{label}</p>
    </div>
  );
}

function ServiceCard({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-[24px] border border-[#DDE9DD] bg-white p-6 hover:-translate-y-1 transition-transform">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#E6F1E8] text-[#1C522A] mb-5">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-[#132114] mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-[#556C57]">{desc}</p>
    </div>
  );
}

function FeatureCard({ title, desc, icon: Icon }) {
  return (
    <div className="rounded-3xl border border-[#DDE9DD] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#EEF5EC] text-[#227B3E] mb-4">
        <Icon size={18} />
      </div>
      <h3 className="text-[15px] font-black text-[#1D472D] uppercase tracking-[0.08em] mb-3">{title}</h3>
      <p className="text-sm text-[#556C57] leading-relaxed">{desc}</p>
    </div>
  );
}

function ProcessStep({ step, title, desc }) {
  return (
    <div className="rounded-[20px] border border-[#D8E4D7] bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-[13px] font-black text-[#356F45]">Step {step}</span>
        <span className="text-sm font-bold text-[#1C522A]">{title}</span>
      </div>
      <p className="text-sm text-[#5B6F5E] leading-relaxed">{desc}</p>
    </div>
  );
}

export default function SwissFarmsPage() {
  return (
    <main className="font-sans bg-white text-[#152316]">
      <HeaderNavbar activeRoute="/group-companies" />

      <section className="relative overflow-hidden bg-[#EFF7EE]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(28,82,42,0.18),_transparent_45%)]" />
        <div className="mx-auto max-w-screen-xl px-6 py-10 lg:py-16 relative">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-3 rounded-full border border-[#B5D2B0] bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#3C6F46] shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-[#3C6F46]" />
                {HERO_TAGLINE}
              </span>
              <h1 className="mt-8 text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.04em] text-[#122012]">
                Nourishing Communities Through Modern Dairy Farming
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4F6C58]">
                Swiss Farms is a leading dairy and livestock management company dedicated to producing premium-quality dairy products through advanced breeding programs, sustainable farming practices, and modern livestock care.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#farms" className="inline-flex items-center gap-2 rounded-full bg-[#1C522A] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#F5F3EA] shadow-sm hover:bg-[#164423] transition-colors">
                  Explore Our Farms <ArrowRight size={16} />
                </Link>
                <Link href="#process" className="inline-flex items-center gap-2 rounded-full border border-[#1C522A] bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#1C522A] hover:border-transparent hover:bg-[#1C522A] hover:text-white transition-colors">
                  Discover Our Process
                </Link>
              </div>
            </div>

            <div className="relative rounded-[36px] overflow-hidden shadow-[0_30px_80px_rgba(16,35,22,0.12)]">
              <Image
                src="/swiss fram.jpeg"
                alt="Swiss Farms dairy landscape"
                width={1100}
                height={760}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f321e]/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14 lg:py-20">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STATS.map((stat, index) => (
              <div key={index} className="rounded-[20px] border border-[#E0E9E3] bg-[#F9FBF9] p-6 text-center">
                <p className="text-3xl font-black text-[#1C522A] mb-3">{stat.value}</p>
                <p className="text-sm leading-relaxed text-[#526B58]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="farms" className="bg-[#F5F8F2] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Our Core Services"
            title="Expert Dairy & Livestock Services"
            description="Swiss Farms delivers end-to-end dairy operations, from breeding and nutrition to veterinary care and sustainable farm management."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CORE_SERVICES.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} desc={service.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <SectionTitle
                label="Our Products"
                title="Quality Dairy and Livestock Solutions"
                description="Delivering a broad range of dairy products and livestock support services tailored for modern agricultural supply chains."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {PRODUCTS.map((product, index) => (
                  <div key={index} className="rounded-3xl border border-[#E7EDE1] bg-[#FAFBF8] p-5 text-center hover:border-[#1C522A] transition-colors">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#1C522A] mb-2">{product}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionTitle
                label="Industries We Support"
                title="Serving Every Link In The Dairy Value Chain"
                description="Our solutions support dairy processing, retail, food service, agriculture, research, and government programs that rely on dependable dairy supply."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {INDUSTRIES.map((industry, index) => (
                  <div key={index} className="rounded-3xl border border-[#E7EDE1] bg-[#F9FBF9] px-5 py-4 text-sm font-semibold text-[#304B33]">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F8F2] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Why Choose Swiss Farms"
            title="Built For Sustainable Dairy Excellence"
            description="Our farming model combines animal welfare, green technologies, and expert management to deliver consistent quality and reliable production."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {WHY_CHOOSE.map((item, index) => (
              <FeatureCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Our Farming Process"
            title="Complete Dairy Operations From Field To Shelf"
            description="Swiss Farms follows a disciplined process to ensure every step of dairy production is safe, efficient, and quality-focused." 
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <ProcessStep key={step.step} step={step.step} title={step.title} desc={step.desc} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EFF7EE] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl grid gap-10 xl:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="rounded-[28px] border border-[#D6E6D2] bg-white p-8 shadow-sm">
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#4C6B51]">Sustainability</span>
            <h3 className="mt-4 text-3xl font-black text-[#132114]">Responsible Farming for Future Generations</h3>
            <p className="mt-5 text-sm leading-relaxed text-[#4F6C58]">Swiss Farms believes sustainable agriculture is the foundation of long-term success. Our operations reduce waste, conserve water, improve soil health, and preserve biodiversity while powering reliable dairy production.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {SUSTAINABILITY.map((item, index) => (
                <div key={index} className="rounded-3xl border border-[#E4EFE0] bg-[#FAFBF8] p-5">
                  <p className="text-sm font-black text-[#1C522A] mb-2">{item.label}</p>
                  <p className="text-sm leading-relaxed text-[#556C57]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#D6E6D2] bg-white p-8 shadow-sm">
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#4C6B51]">Innovation & Technology</span>
            <h3 className="mt-4 text-3xl font-black text-[#132114]">Smart Farming Solutions</h3>
            <p className="mt-5 text-sm leading-relaxed text-[#4F6C58]">Modern technologies enable us to improve efficiency, animal health, and dairy production through better data, automation, and precision agriculture.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {INNOVATION.map((item, index) => (
                <div key={index} className="rounded-3xl border border-[#E4EFE0] bg-[#F7FBF6] px-5 py-4 text-sm text-[#426643]">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Featured Programs"
            title="Programs That Empower Dairy Growth"
            description="Highlights of the programs that help Swiss Farms deliver better livestock outcomes and stronger agricultural communities."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {FEATURED_PROGRAMS.map((program, index) => (
              <div key={index} className="overflow-hidden rounded-[32px] bg-[#F2F7EF] shadow-sm">
                <div className="relative h-56">
                  <Image src={program.img} alt={program.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#1C522A] mb-3">{program.title}</h3>
                  <p className="text-sm leading-relaxed text-[#556C57]">{program.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5F8F2] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl grid gap-8 xl:grid-cols-3">
          <div className="rounded-[28px] border border-[#D8E4D7] bg-white p-8">
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#4C6B51]">Animal Welfare</span>
            <h3 className="mt-4 text-2xl font-black text-[#132114]">Healthy Animals. Better Dairy.</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#4F6C58]">Swiss Farms ensures comfortable housing, proper nutrition, preventative healthcare, and stress-free environments to maintain healthy and productive livestock.</p>
          </div>
          <div className="rounded-[28px] border border-[#D8E4D7] bg-white p-8">
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#4C6B51]">Quality Assurance</span>
            <h3 className="mt-4 text-2xl font-black text-[#132114]">Every Stage Meets Strict Standards</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#4F6C58]">Each dairy production stage follows safe quality standards, hygiene, and nutritional testing to protect consumer health and maintain consistent product excellence.</p>
          </div>
          <div className="rounded-[28px] border border-[#D8E4D7] bg-white p-8">
            <span className="text-[11px] uppercase tracking-[0.3em] font-black text-[#4C6B51]">Community Impact</span>
            <h3 className="mt-4 text-2xl font-black text-[#132114]">Leading Dairy Farming Into The Future</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#4F6C58]">Our modern farming systems support communities through job creation, sustainable practices, and reliable supply for families and businesses.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl grid gap-8 xl:grid-cols-2">
          <div className="rounded-[28px] border border-[#D8E4D7] bg-[#F4F8F2] p-10">
            <h3 className="text-2xl font-black text-[#1C522A] mb-4">Our Vision</h3>
            <p className="text-sm leading-relaxed text-[#4F6C58]">To become a global leader in sustainable dairy farming by producing premium-quality dairy products through innovation, responsible livestock management, and environmentally sustainable practices.</p>
          </div>
          <div className="rounded-[28px] border border-[#D8E4D7] bg-[#F4F8F2] p-10">
            <h3 className="text-2xl font-black text-[#1C522A] mb-4">Our Mission</h3>
            <p className="text-sm leading-relaxed text-[#4F6C58]">To deliver safe, nutritious dairy products while promoting animal welfare, sustainable farming, technological innovation, and operational excellence that benefits consumers, farming communities, and future generations.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#EFF7EE] px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Testimonials"
            title="What Our Partners Say"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {TESTIMONIALS.map((item, index) => (
              <div key={index} className="rounded-[28px] border border-[#D8E4D7] bg-white p-8 shadow-sm">
                <p className="text-sm leading-relaxed text-[#4F6C58] mb-6">“{item.quote}”</p>
                <p className="font-black text-[#132114]">{item.name}</p>
                <p className="text-sm text-[#6A7E6A]">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-screen-xl">
          <SectionTitle
            label="Frequently Asked Questions"
            title="Your Dairy Farming Questions Answered"
          />
          <div className="mt-10 grid gap-4"> 
            {FAQS.map((item, index) => (
              <div key={index} className="rounded-[24px] border border-[#E5EFE1] bg-[#F8FBF8] p-6">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-base font-bold text-[#1C522A]">{item.q}</h4>
                  <Plus size={18} className="text-[#1C522A]" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#4F6C58]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}
