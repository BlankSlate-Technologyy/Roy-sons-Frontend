"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";
import HeroSection from "@/components/pharmaceutical-consultancy/HeroSection";
import RegulatoryFrameworksStrip from "@/components/pharmaceutical-consultancy/RegulatoryFrameworksStrip";
import StrategicConceptSection from "@/components/pharmaceutical-consultancy/StrategicConceptSection";
import CapabilitiesSection from "@/components/pharmaceutical-consultancy/CapabilitiesSection";
import QualityComplianceSection from "@/components/pharmaceutical-consultancy/QualityComplianceSection";
import DocumentationPortfolioSection from "@/components/pharmaceutical-consultancy/DocumentationPortfolioSection";
import FacilityAreasSection from "@/components/pharmaceutical-consultancy/FacilityAreasSection";
import ProjectLifecycleSection from "@/components/pharmaceutical-consultancy/ProjectLifecycleSection";
import IndustriesCategoriesSection from "@/components/pharmaceutical-consultancy/IndustriesCategoriesSection";
import WhoWeServeSection from "@/components/pharmaceutical-consultancy/WhoWeServeSection";
import WhyChooseSection from "@/components/pharmaceutical-consultancy/WhyChooseSection";
import DeliverablesSection from "@/components/pharmaceutical-consultancy/DeliverablesSection";
import ConsultancyInquirySection from "@/components/pharmaceutical-consultancy/ConsultancyInquirySection";

export default function PharmaceuticalConsultancyPage() {
  const [selectedTopic, setSelectedTopic] = useState("");

  const scrollToConsultation = (topic = "") => {
    if (topic) {
      setSelectedTopic(topic);
    }
    const element = document.getElementById("consultation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
      className="min-h-screen bg-white font-serif selection:bg-[#0a7a8c] selection:text-white"
    >
      {/* Global Navigation */}
      <HeaderNavbar activeRoute="/services" />

      {/* Breadcrumb Navigation */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-3.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-500">
              <li>
                <Link href="/" className="hover:text-black transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1 text-neutral-300">
                <ChevronRight size={14} />
              </li>
              <li>
                <Link href="/services" className="hover:text-black transition-colors">
                  Services
                </Link>
              </li>
              <li className="flex items-center gap-1 text-neutral-300">
                <ChevronRight size={14} />
              </li>
              <li className="text-neutral-950 font-bold">
                Pharmaceutical Consultancy
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* 1. Hero Section & Metrics */}
      <HeroSection onGetConsultancyClick={() => scrollToConsultation()} />

      {/* 2. Regulatory & Quality Frameworks Standards Strip */}
      <RegulatoryFrameworksStrip />

      {/* 3. End-to-End Pharmaceutical & Regulatory Consultancy: Concept to Compliance */}
      <StrategicConceptSection onConsultationClick={() => scrollToConsultation("Strategic Concept Advisory")} />

      {/* 4. Our Capabilities (All 12 Capabilities in Deep Detail with Images & Scope Drawer) */}
      <CapabilitiesSection onSelectCapability={(capTitle) => scrollToConsultation(capTitle)} />

      {/* 5. Quality & Compliance: Compliance Embedded Into Every Stage */}
      <QualityComplianceSection />

      {/* 6. Pharmaceutical Documentation Portfolio */}
      <DocumentationPortfolioSection />

      {/* 7. Pharmaceutical Facility Areas We Support */}
      <FacilityAreasSection />

      {/* 8. Project Lifecycle: From Business Idea to Operational Facility */}
      <ProjectLifecycleSection />

      {/* 9. Suggested Industries & Product Categories with Images */}
      <IndustriesCategoriesSection onSelectCategory={(catTitle) => scrollToConsultation(catTitle)} />

      {/* 10. Who We Serve & Additional Organizations with Images */}
      <WhoWeServeSection />

      {/* 11. Why Choose ROYSONS */}
      <WhyChooseSection />

      {/* 12. Consultancy Deliverables */}
      <DeliverablesSection />

      {/* 13. Institutional Consultancy & Scoping Inquiry Form */}
      <ConsultancyInquirySection
        selectedTopic={selectedTopic}
        onClearSelectedTopic={() => setSelectedTopic("")}
      />

      {/* Global Footer */}
      <CorporateFooter />
    </main>
  );
}
