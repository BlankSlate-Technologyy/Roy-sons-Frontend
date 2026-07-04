import { CORPORATE_SERVICES } from "@/lib/constants";

function ServiceBox({ icon: Icon, title, description, href }) {
  return (
    <a
      href={href}
      className="flex flex-col items-center text-center bg-white border border-neutral-200 p-6 hover:border-neutral-950 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300 group rounded-[3px] font-sans"
    >
      <Icon
        size={34}
        strokeWidth={1.2}
        className="text-neutral-400 mb-4 group-hover:text-black group-hover:scale-105 transition-all duration-300"
      />
      <h3 className="text-[11.5px] font-black tracking-[0.16em] uppercase text-neutral-950 mb-2.5">
        {title}
      </h3>
      <p className="text-[11px] text-neutral-500 leading-relaxed font-normal">
        {description}
      </p>
    </a>
  );
}

export default function CorporateCapabilitiesPanel({ services = CORPORATE_SERVICES }) {
  return (
    <section className="py-16 border-b border-neutral-100 bg-white font-sans">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-[22px] font-black uppercase tracking-[0.24em] text-neutral-950">
            Our Services
          </h2>
          <div className="mx-auto mt-3 h-[3px] w-12 bg-neutral-950" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {services.map((service, index) => (
            <ServiceBox 
              key={index} 
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
