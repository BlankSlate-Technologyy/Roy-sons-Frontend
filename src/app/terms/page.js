"use client";

import Link from "next/link";
import { 
  ChevronRight, 
  ShieldAlert, 
  FileText, 
  Scale, 
  Building2, 
  Globe, 
  Lock, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

const SECTORS = [
  "Healthcare & Medical Technologies",
  "Government Contracting",
  "International Trade & Import/Export",
  "Engineering & Infrastructure",
  "Information Technology & AI",
  "Defense & Security",
  "Agriculture & Dairy",
  "Veterinary Solutions",
  "Pharmaceuticals & Vaccines",
  "Energy & Renewable Energy",
  "Manufacturing",
  "Food Processing",
  "Real Estate & Development",
  "Consultancy Services",
];

const SECTIONS = [
  { id: "about", title: "1. About ROYSONS" },
  { id: "acceptance", title: "2. Acceptance of Terms" },
  { id: "use", title: "3. Website Use" },
  { id: "information", title: "4. Website Information" },
  { id: "products", title: "5. Products & Services" },
  { id: "government", title: "6. Government Contracting" },
  { id: "trade", title: "7. International Trade" },
  { id: "healthcare", title: "8. Healthcare & Medical Products" },
  { id: "ip", title: "9. Intellectual Property" },
  { id: "brands", title: "10. ROYSONS & Third-Party Brands" },
  { id: "links", title: "11. Third-Party Links" },
  { id: "submissions", title: "12. User Submissions & Forms" },
  { id: "confidential", title: "13. Confidential Information" },
  { id: "privacy", title: "14. Privacy" },
  { id: "security", title: "15. Website Security" },
  { id: "disclaimer", title: "16. Disclaimer" },
  { id: "liability", title: "17. Limitation of Liability" },
  { id: "indemnification", title: "18. Indemnification" },
  { id: "availability", title: "19. Availability of Services" },
  { id: "agreements", title: "20. Business Agreements" },
  { id: "law", title: "21. Governing Law" },
  { id: "changes", title: "22. Changes to These Terms" },
  { id: "contact", title: "23. Contact Us" },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#101518] text-[#F7F5F0] font-sans selection:bg-[#dfb753]/30 selection:text-neutral-900">
      <HeaderNavbar activeRoute="/terms" />

      {/* Header Banner */}
      <section className="pt-32 pb-14 bg-[#0e1215] text-white border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#dfb753]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-neutral-400 mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#dfb753] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-neutral-600" />
            <span className="text-[#dfb753]">Terms & Conditions</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a2127] border border-[#dfb753]/40 rounded-full mb-3">
              <Scale size={12} className="text-[#dfb753]" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#dfb753]">
                Legal & Compliance
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
              Terms & Conditions
            </h1>
            
            <p className="text-[13.5px] sm:text-[14.5px] text-neutral-400 font-normal leading-relaxed">
              Effective Date: <strong className="text-white font-semibold">August 18, 2026</strong> | Last Updated: <strong className="text-white font-semibold">August 2026</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Quick Navigation Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-[#1a2127] p-6 rounded-sm border border-[#dfb753]/25">
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#dfb753] mb-4 pb-3 border-b border-[#dfb753]/20">
              <FileText size={14} className="text-[#dfb753]" />
              <span>Table of Contents</span>
            </div>
            
            <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-2 text-[12.5px] text-neutral-300 font-medium">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block py-1.5 px-2.5 rounded hover:bg-[#252c33] hover:text-[#dfb753] hover:translate-x-1 transition-all duration-200"
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-[#dfb753]/20">
              <p className="text-[11px] text-neutral-400 mb-2">Need legal clarification?</p>
              <Link
                href="/contact"
                className="text-[11px] font-bold text-[#dfb753] hover:text-white uppercase tracking-wider inline-flex items-center gap-1"
              >
                Contact Advisory Desk →
              </Link>
            </div>
          </aside>

          {/* Legal Document Content */}
          <div className="lg:col-span-8 text-neutral-200 text-[15px] sm:text-[15.5px] leading-[1.8]">
            
            {/* Intro Alert Box */}
            <div className="bg-[#1a2127] border-l-4 border-[#dfb753] border-y border-r border-[#dfb753]/20 p-6 mb-12 shadow-lg rounded-sm">
              <p className="mb-3 font-bold text-[#F7F5F0] text-[15.5px] leading-relaxed">
                Welcome to the official website of ROYSONS Pvt. Ltd. (“ROYSONS”, “we”, “us”, or “our”).
              </p>
              <p className="text-neutral-300 text-[14px] leading-relaxed">
                These Terms & Conditions govern your access to and use of our website, content, services, and digital resources. By accessing or using this website, you acknowledge that you have read, understood, and agreed to these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the website.
              </p>
            </div>

            {/* 1. About ROYSONS */}
            <section id="about" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">1.</span> About ROYSONS
              </h2>
              <p className="mb-4 text-neutral-300">
                ROYSONS Pvt. Ltd. is a diversified multi-sector enterprise operating through various businesses, subsidiaries, partners, and associated organizations across sectors including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-6">
                {SECTORS.map((sector, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 bg-[#1a2127] border border-[#dfb753]/20 rounded-sm text-[13.5px] font-medium text-neutral-200">
                    <CheckCircle2 size={15} className="text-[#dfb753] flex-shrink-0" />
                    <span>{sector}</span>
                  </div>
                ))}
              </div>
              <p className="text-neutral-300">
                Information presented on this website is intended to provide a general overview of our organization, businesses, products, capabilities, and services.
              </p>
            </section>

            {/* 2. Acceptance of Terms */}
            <section id="acceptance" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">2.</span> Acceptance of Terms
              </h2>
              <p className="mb-3">
                By accessing this website, you agree to comply with these Terms & Conditions and all applicable laws and regulations.
              </p>
              <p className="mb-3">
                ROYSONS reserves the right to update, modify, or replace these Terms & Conditions at any time. Changes will become effective once published on this website.
              </p>
              <p>
                Your continued use of the website after changes are published constitutes acceptance of the revised terms.
              </p>
            </section>

            {/* 3. Website Use */}
            <section id="use" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">3.</span> Website Use
              </h2>
              <p className="mb-4">
                You agree to use this website only for lawful purposes. You must not:
              </p>
              <ul className="space-y-2.5 pl-2 mb-6">
                {[
                  "Use the website for fraudulent or unlawful activities.",
                  "Attempt to gain unauthorized access to any part of the website.",
                  "Interfere with the website's security or operation.",
                  "Upload malicious software, viruses, or harmful code.",
                  "Attempt to collect information about other users without authorization.",
                  "Reproduce or misuse our content for unauthorized commercial purposes.",
                  "Use automated systems to scrape or extract website content without permission."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfb753] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                ROYSONS reserves the right to restrict or terminate access to the website where misuse or violation of these Terms is identified.
              </p>
            </section>

            {/* 4. Website Information */}
            <section id="information" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">4.</span> Website Information
              </h2>
              <p className="mb-3">
                We make reasonable efforts to ensure that information published on our website is accurate and up to date. However, information may occasionally contain errors or omissions, typographical mistakes, outdated information, product or service changes, or third-party information.
              </p>
              <p className="mb-3">
                ROYSONS does not guarantee that all website content will always be complete, accurate, current, or free from errors.
              </p>
              <p>
                We reserve the right to update, modify, or remove website content without prior notice.
              </p>
            </section>

            {/* 5. Products & Services */}
            <section id="products" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">5.</span> Products & Services
              </h2>
              <p className="mb-3">
                Descriptions of products and services presented on the website are provided for general informational purposes.
              </p>
              <p className="mb-3">
                Product availability, specifications, pricing, delivery schedules, technical specifications, warranties, and commercial terms may vary depending on the project, supplier, market conditions, applicable regulations, and individual agreements.
              </p>
              <p>
                Information displayed on the website does not constitute a binding offer unless expressly stated otherwise in a formal quotation, contract, purchase order, or written agreement issued by ROYSONS.
              </p>
            </section>

            {/* 6. Government Contracting & Procurement */}
            <section id="government" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">6.</span> Government Contracting & Procurement
              </h2>
              <p className="mb-3">
                Information regarding government contracting, procurement, public-sector projects, or institutional services is provided for general informational purposes.
              </p>
              <p className="mb-3">
                Specific government or institutional projects may be subject to tender requirements, procurement regulations, technical specifications, qualification criteria, contractual requirements, regulatory approvals, and applicable laws and policies.
              </p>
              <p>
                Nothing on this website should be interpreted as a guarantee of contract award, tender success, procurement approval, or government affiliation unless expressly stated and officially documented.
              </p>
            </section>

            {/* 7. International Trade */}
            <section id="trade" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">7.</span> International Trade
              </h2>
              <p className="mb-3">
                ROYSONS may facilitate international sourcing, imports, exports, procurement, and supply chain activities.
              </p>
              <p className="mb-3">
                International transactions may be subject to applicable import and export laws, customs regulations, trade restrictions, licensing requirements, sanctions and compliance requirements, product-specific regulations, and destination-country requirements.
              </p>
              <p>
                Specific commercial transactions will be governed by their respective contracts, purchase orders, quotations, invoices, and applicable trade terms.
              </p>
            </section>

            {/* 8. Healthcare & Medical Products */}
            <section id="healthcare" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">8.</span> Healthcare & Medical Products
              </h2>
              <p className="mb-3">
                Healthcare, medical, pharmaceutical, veterinary, vaccine, surgical, laboratory, and related information displayed on this website is intended primarily for professional and informational purposes.
              </p>
              <p className="mb-3">
                Product availability and use may be subject to applicable regulatory approvals, licensing requirements, manufacturer instructions, and local laws.
              </p>
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-sm text-[14px] text-amber-900 my-4">
                <strong>Medical Disclaimer:</strong> Nothing on this website should be interpreted as medical advice, diagnosis, or treatment advice. Healthcare professionals and authorized organizations should rely on official product documentation, applicable regulations, and qualified professional advice before using any healthcare-related product or service.
              </div>
            </section>

            {/* 9. Intellectual Property */}
            <section id="ip" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">9.</span> Intellectual Property
              </h2>
              <p className="mb-3">
                All intellectual property appearing on this website, unless otherwise stated, belongs to or is used by ROYSONS Pvt. Ltd. with appropriate authorization. This includes logos, brand names, text, graphics, images, videos, designs, icons, layouts, software, website structure, documents, and marketing materials.
              </p>
              <p>
                You may not reproduce, distribute, modify, publish, sell, or commercially exploit our intellectual property without prior written permission.
              </p>
            </section>

            {/* 10. ROYSONS Brand & Third-Party Brands */}
            <section id="brands" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">10.</span> ROYSONS Brand & Third-Party Brands
              </h2>
              <p className="mb-3">
                ROYSONS may display the names, logos, trademarks, products, or brands of third-party manufacturers, suppliers, partners, or organizations.
              </p>
              <p>
                Such trademarks remain the property of their respective owners. Their appearance on this website does not necessarily imply ownership, endorsement, partnership, or affiliation unless expressly stated.
              </p>
            </section>

            {/* 11. Third-Party Links */}
            <section id="links" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">11.</span> Third-Party Links
              </h2>
              <p className="mb-3">
                Our website may contain links to third-party websites, platforms, social media profiles, or external resources. These links are provided for convenience and informational purposes.
              </p>
              <p>
                ROYSONS does not control and is not responsible for third-party website content, privacy practices, security, availability, accuracy, or products and services provided by third parties. Users should review the terms and privacy policies of third-party websites before using them.
              </p>
            </section>

            {/* 12. User Submissions & Contact Forms */}
            <section id="submissions" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">12.</span> User Submissions & Contact Forms
              </h2>
              <p className="mb-3">
                If you submit information through our website, including contact forms, inquiry forms, applications, or business requests, you agree that the information provided is accurate to the best of your knowledge, you have the right to provide it, and it is not intentionally misleading or fraudulent.
              </p>
              <p>
                You authorize ROYSONS to use the submitted information for legitimate business purposes, including responding to inquiries, providing requested information, preparing proposals, and communicating regarding relevant services.
              </p>
            </section>

            {/* 13. Confidential Information */}
            <section id="confidential" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">13.</span> Confidential Information
              </h2>
              <p className="mb-3">
                Users should not submit confidential, proprietary, commercially sensitive, or legally protected information through general website forms unless specifically requested through an appropriate secure channel.
              </p>
              <p>
                Submission of information through a website contact form does not automatically establish a confidential, fiduciary, agency, or contractual relationship between you and ROYSONS.
              </p>
            </section>

            {/* 14. Privacy */}
            <section id="privacy" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">14.</span> Privacy
              </h2>
              <p>
                Your use of this website may involve the collection and processing of certain information as described in our Privacy Policy. Please review our Privacy Policy to understand how we collect, use, store, and protect information.
              </p>
            </section>

            {/* 15. Website Security */}
            <section id="security" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">15.</span> Website Security
              </h2>
              <p className="mb-3">
                We take reasonable measures to maintain the security and availability of our website. However, no internet-based service can be guaranteed to be completely secure or uninterrupted.
              </p>
              <p>
                ROYSONS shall not be responsible for losses resulting from unauthorized access, cyberattacks, malware, technical failures, or circumstances beyond our reasonable control, except where liability cannot legally be excluded.
              </p>
            </section>

            {/* 16. Disclaimer */}
            <section id="disclaimer" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">16.</span> Disclaimer
              </h2>
              <p className="mb-3">
                The website and its content are provided on an “as available” basis. To the extent permitted by applicable law, ROYSONS does not guarantee that:
              </p>
              <ul className="space-y-1.5 pl-4 mb-4 list-disc">
                <li>The website will always be available.</li>
                <li>The website will be error-free.</li>
                <li>All information will always be current.</li>
                <li>The website will be free from viruses or harmful components.</li>
                <li>Website content will meet every user's specific requirements.</li>
              </ul>
            </section>

            {/* 17. Limitation of Liability */}
            <section id="liability" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">17.</span> Limitation of Liability
              </h2>
              <p className="mb-3">
                To the maximum extent permitted by applicable law, ROYSONS Pvt. Ltd. shall not be liable for indirect, incidental, consequential, special, or business losses arising from or related to the use of, or inability to use, this website.
              </p>
              <p className="mb-3">
                This includes loss of profits, loss of business opportunities, loss of data, business interruption, or loss arising from reliance on website information.
              </p>
              <p>
                Nothing in these Terms excludes liability that cannot legally be excluded or limited under applicable law.
              </p>
            </section>

            {/* 18. Indemnification */}
            <section id="indemnification" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">18.</span> Indemnification
              </h2>
              <p>
                You agree to indemnify and hold harmless ROYSONS Pvt. Ltd., its directors, officers, employees, affiliates, representatives, and partners from claims, damages, liabilities, costs, or expenses arising from your unlawful use of the website, violation of these Terms, infringement of third-party rights, or unlawful submission of information.
              </p>
            </section>

            {/* 19. Availability of Services */}
            <section id="availability" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">19.</span> Availability of Services
              </h2>
              <p className="mb-3">
                ROYSONS may modify, suspend, discontinue, or restrict any website feature, service, product listing, or content without prior notice.
              </p>
              <p>
                Website content does not guarantee that a particular product, service, business division, or solution is currently available in every geographic market.
              </p>
            </section>

            {/* 20. Business Agreements */}
            <section id="agreements" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">20.</span> Business Agreements
              </h2>
              <p>
                Where ROYSONS enters into a formal business relationship with a client, supplier, government organization, distributor, contractor, or other party, the applicable written agreement shall govern that relationship. Where a conflict exists between these website Terms & Conditions and a specific signed contract, the terms of the applicable contract will generally prevail for that transaction or relationship.
              </p>
            </section>

            {/* 21. Governing Law */}
            <section id="law" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">21.</span> Governing Law
              </h2>
              <p className="mb-3">
                These Terms & Conditions shall be interpreted and governed in accordance with the applicable laws of the Islamic Republic of Pakistan, subject to any mandatory legal requirements applicable to the relevant transaction or party.
              </p>
              <p>
                Any disputes shall be addressed through appropriate legal or contractual procedures and, where applicable, the competent courts of Pakistan.
              </p>
            </section>

            {/* 22. Changes to These Terms */}
            <section id="changes" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">22.</span> Changes to These Terms
              </h2>
              <p>
                ROYSONS may revise these Terms & Conditions from time to time to reflect changes in business operations, services, legal requirements, regulatory requirements, website functionality, or corporate policies. The updated version will be published on this page with the revised effective date.
              </p>
            </section>

            {/* 23. Contact Us */}
            <section id="contact" className="mt-14 p-8 bg-[#1a2127] text-white rounded-sm border border-[#dfb753]/30 scroll-mt-28">
              <div className="flex items-center gap-2 text-[#dfb753] text-[11px] font-black uppercase tracking-[0.2em] mb-3">
                <Building2 size={15} />
                <span>Legal & Corporate Inquiries</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4">
                23. Contact Information
              </h3>
              <p className="text-[14px] text-neutral-300 leading-relaxed mb-6">
                If you have questions regarding these Terms & Conditions or require clarification about our products, capabilities, and governance, please reach out to our legal and corporate office:
              </p>

              <div className="space-y-3.5 text-[13.5px] text-neutral-300 border-t border-neutral-800 pt-6">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#dfb753] mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">ROYSONS Pvt. Ltd.</strong>
                    <p className="text-neutral-400">Office # 41-A, 4th Floor, DHA Plaza, DHA Phase VI Commercial, Lahore Cantonment, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#dfb753] flex-shrink-0" />
                  <a href="mailto:info@roysons.org" className="hover:text-[#dfb753] transition-colors text-neutral-300">
                    info@roysons.org
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#dfb753] flex-shrink-0" />
                  <a href="tel:+923001234567" className="hover:text-[#dfb753] transition-colors text-neutral-300">
                    +92 300 1234567
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Globe size={16} className="text-[#dfb753] flex-shrink-0" />
                  <span className="text-neutral-300">www.roysons.org</span>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      <CorporateFooter />
    </main>
  );
}
