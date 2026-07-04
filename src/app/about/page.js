import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Users, 
  Star, 
  Lightbulb, 
  User, 
  Layers, 
  Clock, 
  ChevronRight,
  Lock,
  ArrowRight
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderNavbar activeRoute="/about" />

      <section className="pt-10 pb-20 px-6">
        <div className="mx-auto max-w-screen-xl">
          <nav aria-label="Breadcrumb" className="mb-12">
            <ol className="flex items-center gap-2 text-sm text-neutral-500 font-medium">
              <li>
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={14} />
                <span className="text-neutral-400">About Us</span>
              </li>
            </ol>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-black text-black mb-8 leading-[1.1] tracking-tight">
                About Roy Sons
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl">
                Roy Sons is a diversified conglomerate committed to delivering 
                excellence through innovation, integrity, and quality. Our journey is 
                built on trust, teamwork, and a vision for a better tomorrow.
              </p>
            </div>
            <div className="flex-1 w-full relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200">
                <Image 
                  src="/hero-building.png" 
                  alt="Roy Sons Modern Corporate Building" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neutral-100 -z-10 rounded-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-neutral-100 -z-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50/50">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-bold text-black relative inline-block">
              Our Values
              <span className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-16 h-1 bg-black"></span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <ValueCard 
              icon={ShieldCheck} 
              title="Integrity" 
              description="We conduct our business with honesty and transparency." 
            />
            <ValueCard 
              icon={Users} 
              title="Teamwork" 
              description="We believe in collaboration and achieving more together." 
            />
            <ValueCard 
              icon={Star} 
              title="Quality" 
              description="We are committed to delivering the highest standards." 
            />
            <ValueCard 
              icon={Lightbulb} 
              title="Innovation" 
              description="We embrace new ideas to create sustainable solutions." 
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="bg-white rounded-3xl border border-neutral-200 shadow-xl shadow-neutral-100/50 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-neutral-50 p-12 lg:p-16 border-r border-neutral-100">
              <div className="mb-10">
                <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Book a Consultation</h3>
                <p className="text-neutral-600 leading-relaxed">
                  Let&apos;s discuss your ideas and explore how we can help you achieve your goals.
                </p>
              </div>

              <div className="space-y-8">
                <InfoItem 
                  icon={User} 
                  title="Expert Guidance" 
                  description="Talk to our experienced experts." 
                />
                <InfoItem 
                  icon={Layers} 
                  title="Customized Solutions" 
                  description="Solutions tailored to your needs." 
                />
                <InfoItem 
                  icon={Clock} 
                  title="Timely Support" 
                  description="We are here to help you anytime." 
                />
              </div>
            </div>

            <div className="lg:w-2/3 p-12 lg:p-16">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormField label="Full Name" placeholder="Enter your full name" required />
                  <FormField label="Email Address" placeholder="Enter your email" type="email" required />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <FormField label="Company / Organization" placeholder="Enter company name" />
                  <FormSelect 
                    label="Service of Interest" 
                    options={["Construction", "Engineering", "Real Estate", "Manufacturing"]} 
                    required 
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <FormSelect
                    label="Consultation Type"
                    options={["In-Person", "Video Call", "Phone Call", "Site Visit"]}
                  />
                  <FormField label="Preferred Date" type="date" />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <FormSelect 
                    label="Preferred Time" 
                    options={["Morning (9AM - 12PM)", "Afternoon (1PM - 5PM)", "Evening (6PM - 9PM)"]} 
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
                    Your Message / Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your project or requirements..."
                    className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-black transition-colors resize-none text-neutral-800"
                  />
                </div>

                <div className="flex flex-col items-center gap-6 pt-4">
                  <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-3 hover:bg-neutral-800 transition-all group cursor-pointer">
                    Request Consultation
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="flex items-center gap-2 text-neutral-400 text-xs font-medium">
                    <Lock size={12} />
                    <span>Your information is safe with us. We respect your privacy.</span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CorporateFooter />
    </main>
  );
}

function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="w-16 h-16 bg-white border border-neutral-100 shadow-md rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:bg-black group-hover:border-black">
        <Icon className="text-black transition-colors group-hover:text-white" size={32} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
      <p className="text-neutral-500 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

function InfoItem({ icon: Icon, title, description }) {
  return (
    <div className="flex gap-5">
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="text-white" size={18} />
      </div>
      <div>
        <h4 className="font-bold text-black text-sm mb-1">{title}</h4>
        <p className="text-neutral-500 text-[13px] leading-tight">{description}</p>
      </div>
    </div>
  );
}

function FormField({ label, placeholder, type = "text", required = false }) {
  return (
    <div className="w-full">
      <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-black transition-colors text-neutral-800"
      />
    </div>
  );
}

function FormSelect({ label, options, required = false }) {
  return (
    <div className="w-full">
      <label className="block text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          defaultValue=""
          className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-sm outline-none focus:border-black appearance-none transition-colors cursor-pointer text-neutral-500"
        >
          <option value="" disabled>Select a service</option>
          {options.map((opt) => (
            <option key={opt} value={opt.toLowerCase().replace(/\s+/g, "-")}>
              {opt}
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
          <ChevronRight size={16} className="rotate-90" />
        </div>
      </div>
    </div>
  );
}
