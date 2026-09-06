"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  X,
  CheckCircle2,
  Building2,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
  Send,
  FileText,
} from "lucide-react";
import { getRelatedEquipment } from "@/lib/healthcare-portfolio-data";

export default function EquipmentDetailModal({
  equipment,
  isOpen,
  onClose,
  onSelectRelated,
  onRequestQuote,
}) {
  // Close modal on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Lock body scroll
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !equipment) return null;

  const relatedItems = getRelatedEquipment(equipment);

  const handleRequestClick = () => {
    if (onRequestQuote) {
      onRequestQuote(equipment);
    }
    onClose();
    // Smooth scroll to consultation form
    const formElement = document.getElementById("cta-consultation");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop with soft blur */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-equipment-title"
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-3xl shadow-2xl overflow-y-auto z-10 border border-slate-100 flex flex-col focus:outline-none animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur border-b border-slate-100">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[12px] text-slate-500 overflow-x-auto">
            <span className="text-slate-400">Healthcare</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-[#0a7a8c] font-medium whitespace-nowrap">
              {equipment.categoryTitle}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="text-slate-700 font-semibold truncate max-w-[180px] sm:max-w-[260px]">
              {equipment.name}
            </span>
          </nav>

          {/* Close button */}
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors ml-3"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Hero Section: Image & Title Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* 16:9 Medical Hero Image */}
            <div className="md:col-span-6 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-sm">
              <Image
                src={equipment.image}
                alt={equipment.imageAlt || equipment.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover object-center"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-white/90 text-[#0a7a8c] shadow-sm backdrop-blur-sm border border-slate-200/60">
                  {equipment.categoryTitle?.split("&")[0]?.trim()}
                </span>
              </div>
            </div>

            {/* Title & Quick Summary */}
            <div className="md:col-span-6 flex flex-col justify-between h-full space-y-4">
              <div>
                <h3
                  id="modal-equipment-title"
                  className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight"
                >
                  {equipment.name}
                </h3>
                <p className="mt-3 text-[16px] sm:text-[17px] text-slate-700 leading-relaxed font-normal">
                  {equipment.shortDescription}
                </p>
              </div>

              {/* Verified Clinical Standard Tag */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#0a7a8c] shrink-0 mt-0.5" />
                <div className="text-[14px] text-slate-700 leading-snug">
                  <span className="font-semibold text-slate-900">Verified Clinical Standard</span>
                  <p className="text-slate-600 mt-0.5 text-[13px]">
                    Evaluated and supplied in adherence with verified hospital procurement standards.
                  </p>
                </div>
              </div>

              {/* Consultation Quick Action */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRequestClick}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0a7a8c] text-white text-[15px] font-semibold hover:bg-[#005f6e] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0a7a8c] focus:ring-offset-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Specifications</span>
                </button>
              </div>
            </div>
          </div>

          {/* Clinical Overview */}
          <div className="border-t border-slate-100 pt-6">
            <h4 className="text-[19px] font-bold text-slate-900 flex items-center gap-2 mb-3">
              <Stethoscope className="w-5 h-5 text-[#0a7a8c]" />
              Clinical Overview
            </h4>
            <p className="text-[16px] sm:text-[17px] text-slate-700 leading-relaxed font-normal">
              {equipment.overview}
            </p>
          </div>

          {/* Applications & Features 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-6">
            {/* Clinical Applications */}
            <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/60">
              <h4 className="text-[17px] font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0a7a8c]" />
                Clinical Applications
              </h4>
              <ul className="space-y-3">
                {equipment.applications?.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-slate-700 leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-[#01b576] shrink-0 mt-1" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Technical Features */}
            <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/60">
              <h4 className="text-[17px] font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#01b576]" />
                Equipment Capabilities
              </h4>
              <ul className="space-y-3">
                {equipment.features?.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[15px] sm:text-[16px] text-slate-700 leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-[#0a7a8c] shrink-0 mt-1" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Healthcare Environments */}
          {equipment.healthcareEnvironment && equipment.healthcareEnvironment.length > 0 && (
            <div className="border-t border-slate-100 pt-6">
              <h4 className="text-[17px] font-bold text-slate-900 flex items-center gap-2 mb-3">
                <Building2 className="w-4 h-4 text-[#0a7a8c]" />
                Target Healthcare Environments
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {equipment.healthcareEnvironment.map((env, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-[13px] sm:text-[14px] font-medium bg-[#0a7a8c]/5 text-[#0a7a8c] border border-[#0a7a8c]/20"
                  >
                    {env}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Equipment Section */}
          {relatedItems && relatedItems.length > 0 && (
            <div className="border-t border-slate-100 pt-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[15px] font-bold text-slate-900">
                  Related Medical Equipment
                </h4>
                <span className="text-[12px] text-slate-400">
                  Explore complementary systems
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedItems.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelated && onSelectRelated(rel)}
                    className="group flex items-center gap-3 p-3 rounded-xl border border-slate-200/80 bg-white hover:border-[#0a7a8c]/50 hover:shadow-sm cursor-pointer transition-all"
                  >
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[13px] font-semibold text-slate-900 truncate group-hover:text-[#0a7a8c] transition-colors">
                        {rel.name}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {rel.categoryTitle}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0a7a8c] group-hover:translate-x-0.5 transition-all shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Procurement Disclaimer */}
          <div className="border-t border-slate-100 pt-4 text-center">
            <p className="text-[11px] text-slate-400 max-w-xl mx-auto">
              ROYSONS partners with authorized medical institutions for customized hospital deployments, turnkey installations, and biomedical technical services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
