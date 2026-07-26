import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { COLORS } from "../constants";
import { Container, Button } from "./Shared";

export default function About() {
  const checkmarks = [
    { title: "Proven Regulatory Expertise", desc: "Deep knowledge of DRAP, FDA, EMA, and international regulatory bodies." },
    { title: "Experienced Professional Team", desc: "Specialists in pharmaceutical law, quality management, and regulatory affairs." },
    { title: "End-to-End Support", desc: "From initial dossier to approval and post-marketing obligations." },
  ];

  return (
    <section id="about" className="py-20" style={{ backgroundColor: COLORS.white }}>
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left column: Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span
            className="text-xs font-bold uppercase tracking-widest block mb-3"
            style={{ color: COLORS.secondary }}
          >
            About Us
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6"
            style={{ color: COLORS.textDark }}
          >
            Your Trusted Regulatory Partner
          </h2>
          <p
            className="text-base font-medium leading-relaxed mb-4"
            style={{ color: COLORS.textGray }}
          >
            GATEWAY PHARMACEUTICALS CONSULTANTS is a leading regulatory consultancy
            firm dedicated to helping pharmaceutical, biotech, and healthcare
            industries navigate complex licensing, compliance, and regulatory
            affairs requirements.
          </p>
          <p
            className="text-base font-medium leading-relaxed mb-8"
            style={{ color: COLORS.textGray }}
          >
            Our team of regulatory experts, pharmacists, and compliance specialists work
            closely with manufacturers, importers, and healthcare organisations to ensure
            smooth product registration, licensing, and adherence to standards.
          </p>

          <div className="flex flex-col gap-5 mb-8">
            {checkmarks.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: `${COLORS.secondary}15` }}
                >
                  <CheckCircle2 size={16} style={{ color: COLORS.secondary }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold" style={{ color: COLORS.textDark }}>
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium mt-0.5" style={{ color: COLORS.textGray }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <Button variant="primary" href="#services" className="w-fit">
            Our Services
          </Button>
        </div>

        {/* Right column: Collage layout of Images */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4">
          <div
            className="col-span-2 relative h-[280px] rounded-2xl overflow-hidden shadow-lg border group"
            style={{ borderColor: COLORS.border }}
          >
            <Image
              src="/gatway about.png"
              alt="Healthcare professionals team work"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
          <div
            className="relative h-[210px] rounded-2xl overflow-hidden shadow-md border group"
            style={{ borderColor: COLORS.border }}
          >
            <Image
              src="/gatway commited.png"
              alt="Medical dosage check"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 50vw, 300px"
            />
          </div>
          <div
            className="relative h-[210px] rounded-2xl overflow-hidden shadow-md border group"
            style={{ borderColor: COLORS.border }}
          >
            <Image
              src="/gatwayareaofexperince.png"
              alt="Accredited testing compliance"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 50vw, 300px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
