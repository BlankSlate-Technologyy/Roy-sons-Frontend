import React from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Shield,
  FileCheck,
  Globe,
  Award,
} from "lucide-react";
import { COLORS, NAV_LINKS } from "../constants";
import { Container } from "./Shared";

const QUICK_SERVICES = [
  { label: "Drug Licensing & Registration", icon: FileCheck },
  { label: "Regulatory Affairs Management", icon: Shield },
  { label: "GMP & Quality Compliance", icon: Award },
  { label: "Import & Export Licensing", icon: Globe },
  { label: "Dossier Preparation & Submission", icon: FileCheck },
  { label: "Renewal & Amendment Services", icon: ArrowRight },
];

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "+92 300 0000000",
    href: "tel:+923000000000",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@gatewaypharma.com",
    href: "mailto:info@gatewaypharma.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Karachi, Pakistan",
    href: null,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: COLORS.primary,
        color: COLORS.white,
      }}
    >
      {/* Top CTA Banner */}
      <div
        className="py-10 border-b"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-1">
              Ready to Navigate Regulatory Compliance?
            </h3>
            <p
              className="text-sm font-medium"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Let our experts handle the complexity — so you can focus on growth.
            </p>
          </div>
          <a
            href="#services"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 hover:opacity-90 active:scale-95"
            style={{
              backgroundColor: COLORS.secondary,
              color: COLORS.white,
            }}
          >
            Explore Services
            <ArrowRight size={15} />
          </a>
        </Container>
      </div>

      {/* Main Footer Grid */}
      <div className="py-16">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <a href="#home" className="flex items-center gap-3 select-none w-fit">
              <Image
                src="/gateway.jpeg"
                alt="Gateway Pharmaceuticals Logo"
                width={52}
                height={52}
                className="object-cover rounded-lg border shadow"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              />
              <div className="flex flex-col">
                <span
                  className="text-[13px] font-extrabold uppercase leading-tight tracking-wider text-white"
                >
                  Gateway Pharmaceuticals
                </span>
                <span
                  className="text-[10px] font-bold tracking-widest uppercase"
                  style={{ color: COLORS.secondary }}
                >
                  Consultants
                </span>
              </div>
            </a>

            <p
              className="text-sm font-medium leading-relaxed"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              A leading pharmaceutical regulatory consultancy firm, dedicated to
              helping companies navigate licensing, compliance, and dossier
              submissions with precision.
            </p>

            {/* Quality badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg w-fit"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
            >
              <Shield size={14} style={{ color: COLORS.secondary }} />
              <span
                className="text-[11px] font-bold uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                DRAP Accredited Consultants
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="text-[11px] font-extrabold uppercase tracking-widest mb-6"
              style={{ color: COLORS.secondary }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-medium transition-all duration-200 group"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: COLORS.secondary }}
                    />
                    <span className="group-hover:text-white transition-colors duration-200">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4
              className="text-[11px] font-extrabold uppercase tracking-widest mb-6"
              style={{ color: COLORS.secondary }}
            >
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_SERVICES.map((svc) => (
                <li key={svc.label}>
                  <a
                    href="#services"
                    className="flex items-center gap-2 text-sm font-medium transition-all duration-200 group"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    <ArrowRight
                      size={12}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      style={{ color: COLORS.secondary }}
                    />
                    <span className="group-hover:text-white transition-colors duration-200">
                      {svc.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4
              className="text-[11px] font-extrabold uppercase tracking-widest mb-6"
              style={{ color: COLORS.secondary }}
            >
              Contact Us
            </h4>
            <ul className="flex flex-col gap-5">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                const inner = (
                  <div className="flex gap-3 group">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    >
                      <Icon size={15} style={{ color: COLORS.secondary }} />
                    </div>
                    <div>
                      <p
                        className="text-[10px] font-bold uppercase tracking-wider mb-0.5"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      >
                        {info.label}
                      </p>
                      <p
                        className="text-sm font-medium leading-snug group-hover:text-white transition-colors duration-200"
                        style={{ color: "rgba(255,255,255,0.8)" }}
                      >
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <li key={info.label}>
                    {info.href ? (
                      <a href={info.href}>{inner}</a>
                    ) : (
                      inner
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-5 border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs font-medium"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            © {currentYear} Gateway Pharmaceuticals Consultants. All rights reserved.
          </p>
          <p
            className="text-xs font-medium"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Regulatory Excellence · Trusted Compliance · Professional Integrity
          </p>
        </Container>
      </div>
    </footer>
  );
}
