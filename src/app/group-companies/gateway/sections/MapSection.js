"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { COLORS } from "../constants";

export default function MapSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50">
      {/* Floating Address Header */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 w-[92%] max-w-screen-xl pointer-events-none">
        <div
          className="pointer-events-auto flex items-center gap-3.5 rounded-2xl border bg-white/95 backdrop-blur-md px-6 py-4 shadow-xl max-w-3xl mx-auto"
          style={{ borderColor: COLORS.border }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${COLORS.primary}15` }}
          >
            <MapPin size={20} color={COLORS.primary} />
          </div>
          <div>
            <p
              className="text-[11px] font-extrabold uppercase tracking-[0.15em] mb-0.5"
              style={{ color: COLORS.primary }}
            >
              Find Us
            </p>
            <p
              className="text-xs sm:text-sm font-bold leading-snug"
              style={{ color: COLORS.textDark }}
            >
              1st Floor, Rehman Centre-2, Near Zakir Tikka, Service Lane Ring Road, Near ASK-11 Gate #3, Lahore
            </p>
          </div>
        </div>
      </div>

      {/* Map Embed - Full Width */}
      <div className="w-full h-[500px] md:h-[550px] lg:h-[600px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.0!2d74.3587!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904de60e29e3b%3A0x9a9d95ad0e1c7d50!2sRehman%20Centre-2%2C%20Ring%20Rd%2C%20Lahore!5e0!3m2!1sen!2s!4v1690000000000"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gateway Pharmaceuticals Consultants Location"
        />
      </div>
    </section>
  );
}
