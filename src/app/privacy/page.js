"use client";

import Link from "next/link";
import { 
  ChevronRight, 
  ShieldCheck, 
  FileText, 
  Lock, 
  Building2, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Cookie,
  UserCheck,
  Server,
  Share2,
  Sparkles
} from "lucide-react";
import HeaderNavbar from "@/components/ui/navigation-menu";
import CorporateFooter from "@/components/ui/footer";

const SECTIONS = [
  { id: "collection", title: "1. Information We Collect" },
  { id: "usage", title: "2. How We Use Your Information" },
  { id: "commercial", title: "3. Business & Commercial Data" },
  { id: "cookies", title: "4. Cookies & Tracking" },
  { id: "analytics", title: "5. Analytics & Performance" },
  { id: "sharing", title: "6. Sharing of Information" },
  { id: "transfers", title: "7. International Data Transfers" },
  { id: "security", title: "8. Data Security" },
  { id: "retention", title: "9. Data Retention" },
  { id: "rights", title: "10. Your Privacy Rights" },
  { id: "thirdparty", title: "11. Third-Party Websites" },
  { id: "children", title: "12. Children's Privacy" },
  { id: "marketing", title: "13. Marketing Communications" },
  { id: "regulated", title: "14. Regulated Industries" },
  { id: "changes", title: "15. Changes to This Policy" },
  { id: "contact", title: "16. Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#dfb753]/30 selection:text-neutral-900">
      <HeaderNavbar activeRoute="/privacy" />

      {/* Header Banner */}
      <section className="pt-32 pb-14 bg-[#0e1215] text-white border-b border-neutral-800 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#dfb753]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold text-neutral-400 mb-4 uppercase tracking-wider">
            <Link href="/" className="hover:text-[#dfb753] transition-colors">Home</Link>
            <ChevronRight size={12} className="text-neutral-600" />
            <span className="text-[#dfb753]">Privacy Policy</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1a2127] border border-[#dfb753]/40 rounded-full mb-3">
              <ShieldCheck size={13} className="text-[#dfb753]" />
              <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#dfb753]">
                Data Protection & Trust
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
              Privacy Policy
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
          
          {/* Sticky Navigation Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-neutral-50 p-6 rounded-sm border border-neutral-200">
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-neutral-900 mb-4 pb-3 border-b border-neutral-200">
              <FileText size={14} className="text-[#dfb753]" />
              <span>Policy Index</span>
            </div>
            
            <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-2 text-[12.5px] text-neutral-600 font-medium">
              {SECTIONS.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="block py-1.5 px-2.5 rounded hover:bg-white hover:text-black hover:translate-x-1 transition-all duration-200"
                >
                  {sec.title}
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-neutral-200">
              <p className="text-[11px] text-neutral-500 mb-2">Have a privacy inquiry?</p>
              <Link
                href="/contact"
                className="text-[11px] font-bold text-[#dfb753] hover:text-black uppercase tracking-wider inline-flex items-center gap-1"
              >
                Contact Data Governance →
              </Link>
            </div>
          </aside>

          {/* Policy Document Content */}
          <div className="lg:col-span-8 text-neutral-700 text-[15px] sm:text-[15.5px] leading-[1.8]">
            
            {/* Intro Alert Box */}
            <div className="bg-[#fcfbf7] border-l-4 border-[#dfb753] p-6 mb-12 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
              <p className="mb-3 font-semibold text-neutral-900">
                At ROYSONS Pvt. Ltd., we respect your privacy and are committed to protecting the personal information you provide when using our website.
              </p>
              <p className="text-neutral-600 text-[14px]">
                This Privacy Policy explains what information we may collect, how we use it, how we protect it, and your rights regarding your information. By accessing or using the ROYSONS website, you acknowledge and agree to the practices described in this Privacy Policy.
              </p>
            </div>

            {/* 1. Information We Collect */}
            <section id="collection" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">1.</span> Information We Collect
              </h2>
              <p className="mb-4">
                We may collect information that you voluntarily provide when you interact with our website, including when you:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
                {[
                  "Submit a contact or inquiry form",
                  "Request information about products/services",
                  "Request a quotation or consultation",
                  "Contact our business development team",
                  "Submit partnership or supplier inquiries",
                  "Subscribe to communications",
                  "Apply for opportunities through our website"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2.5 bg-neutral-50 border border-neutral-100 rounded-sm text-[13.5px] font-medium text-neutral-800">
                    <CheckCircle2 size={14} className="text-[#dfb753] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 mb-3">
                This information may include: Full name, company or organization name, job title, email address, phone number, country or location, business requirements, project details, and any other information you choose to provide.
              </p>
              
              <div className="mt-6 p-5 bg-neutral-50 border border-neutral-200 rounded-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-2 flex items-center gap-2">
                  <Server size={14} className="text-[#dfb753]" />
                  <span>Automatically Collected Technical Information</span>
                </h3>
                <p className="text-[13.5px] text-neutral-600 leading-relaxed mb-3">
                  When you visit our website, certain technical information may be collected automatically, such as IP address, browser type, device type, operating system, pages visited, referring website, date and time of access, and general website usage metrics.
                </p>
                <p className="text-[13px] text-neutral-500 italic">
                  This information is used exclusively to improve website performance, security, and user experience.
                </p>
              </div>
            </section>

            {/* 2. How We Use Your Information */}
            <section id="usage" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">2.</span> How We Use Your Information
              </h2>
              <p className="mb-4">
                ROYSONS may use collected information for legitimate business purposes, including:
              </p>
              <ul className="space-y-2.5 pl-2 mb-6">
                {[
                  "Responding to inquiries and customer requests.",
                  "Providing requested information, quotations, and commercial proposals.",
                  "Understanding customer requirements to provide tailored solutions.",
                  "Managing commercial relationships and partnership inquiries.",
                  "Improving website experience, technical performance, and digital resources.",
                  "Communicating important corporate and service-related updates.",
                  "Maintaining website security, fraud prevention, and system integrity.",
                  "Complying with applicable legal and regulatory requirements."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[14px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dfb753] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                We will not use your information for purposes materially unrelated to the reason it was collected without appropriate notice or consent where required.
              </p>
            </section>

            {/* 3. Business & Commercial Information */}
            <section id="commercial" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">3.</span> Business & Commercial Information
              </h2>
              <p className="mb-3">
                If you provide information about your company, organization, project, procurement requirement, or business activity, we may use that information to evaluate your request and provide appropriate products, services, quotations, consultancy, or business solutions.
              </p>
              <p>
                For sensitive commercial or confidential project information, we recommend using an appropriate secure communication channel rather than submitting highly confidential information through a general website contact form.
              </p>
            </section>

            {/* 4. Cookies & Similar Technologies */}
            <section id="cookies" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">4.</span> Cookies & Similar Technologies
              </h2>
              <p className="mb-3">
                Our website may use cookies and similar technologies to improve functionality, understand website usage, and enhance user experience. Cookies help us remember user preferences, improve site performance, analyze visitor behavior, and maintain platform security.
              </p>
              <p>
                You may manage or disable cookies through your individual browser settings. Disabling certain cookies may affect some website functionality.
              </p>
            </section>

            {/* 5. Analytics & Website Performance */}
            <section id="analytics" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">5.</span> Analytics & Website Performance
              </h2>
              <p className="mb-3">
                We may use analytics technologies to evaluate how visitors interact with our website. This includes aggregated metrics regarding page views, traffic sources, visitor behavior, device categories, general geographic regions, and load performance.
              </p>
              <p>
                Analytics information is primarily used to refine our content, services, navigation, and digital interface.
              </p>
            </section>

            {/* 6. Sharing of Information */}
            <section id="sharing" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">6.</span> Sharing of Information
              </h2>
              <div className="p-4 bg-neutral-50 border-l-4 border-neutral-900 font-medium text-neutral-900 mb-4">
                ROYSONS does not sell or rent your personal information as a commercial data product.
              </div>
              <p className="mb-3">
                We may share information when reasonably necessary with:
              </p>
              <ul className="space-y-1.5 pl-4 mb-4 list-disc text-[14px]">
                <li>Authorized employees and internal business divisions.</li>
                <li>Professional consultants and advisory partners.</li>
                <li>Technology service providers and hosting partners.</li>
                <li>Logistics, procurement, and supply chain partners.</li>
                <li>Legal, regulatory, or governmental authorities where legally mandated.</li>
              </ul>
              <p>
                Where third parties process information on our behalf, we seek to use appropriate contractual or organizational measures to ensure data protection.
              </p>
            </section>

            {/* 7. International Business & Data Transfers */}
            <section id="transfers" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">7.</span> International Business & Data Transfers
              </h2>
              <p className="mb-3">
                ROYSONS operates across global markets including international trade, global procurement, healthcare technologies, manufacturing, and consultancy.
              </p>
              <p>
                Where business activities require information to be shared with authorized international partners, suppliers, or service providers, such transfers are limited to what is reasonably necessary for the business purpose and handled in accordance with applicable requirements.
              </p>
            </section>

            {/* 8. Data Security */}
            <section id="security" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">8.</span> Data Security
              </h2>
              <p className="mb-3">
                We take reasonable technical and organizational measures to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure.
              </p>
              <p>
                However, no internet transmission or electronic storage is 100% secure. Users should avoid transmitting passwords, financial credentials, or highly confidential information through open contact forms.
              </p>
            </section>

            {/* 9. Data Retention */}
            <section id="retention" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">9.</span> Data Retention
              </h2>
              <p className="mb-3">
                We retain personal information only for as long as reasonably necessary to fulfill the purposes for which it was collected, including responding to inquiries, maintaining corporate records, fulfilling contractual agreements, meeting legal requirements, and resolving disputes.
              </p>
              <p>
                Retention periods vary depending on the nature and regulatory context of the information.
              </p>
            </section>

            {/* 10. Your Privacy Rights */}
            <section id="rights" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">10.</span> Your Privacy Rights
              </h2>
              <p className="mb-3">
                Depending on applicable data protection laws, you may have rights regarding your personal information, such as:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
                {[
                  "Request access to your personal data",
                  "Request correction of inaccurate information",
                  "Request deletion where legally applicable",
                  "Withdraw consent where processing relies on consent",
                  "Object to certain forms of data processing",
                  "Request information regarding data usage"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-neutral-50 border border-neutral-100 rounded-sm text-[13.5px] font-medium text-neutral-800">
                    <UserCheck size={14} className="text-[#dfb753] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 11. Third-Party Websites */}
            <section id="thirdparty" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">11.</span> Third-Party Websites
              </h2>
              <p className="mb-3">
                Our website may contain links to third-party websites, including partners, suppliers, social media channels, or regulatory agencies. ROYSONS is not responsible for the privacy practices, security, or content of third-party platforms.
              </p>
              <p>
                We recommend reviewing the privacy notices of each external website you visit.
              </p>
            </section>

            {/* 12. Children's Privacy */}
            <section id="children" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">12.</span> Children's Privacy
              </h2>
              <p>
                Our website is intended primarily for businesses, organizations, professionals, institutions, and adult users. We do not knowingly collect personal information from children. If you believe a minor has submitted personal information, please contact us for prompt deletion.
              </p>
            </section>

            {/* 13. Marketing Communications */}
            <section id="marketing" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">13.</span> Marketing Communications
              </h2>
              <p>
                Where permitted by law, ROYSONS may use contact details to share relevant corporate updates, industry publications, or service insights. You can opt out of marketing communications at any time by contacting us or clicking the unsubscribe link in our emails.
              </p>
            </section>

            {/* 14. Government & Regulated Industries */}
            <section id="regulated" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">14.</span> Government & Regulated Industries
              </h2>
              <p>
                Because ROYSONS operates in sectors including healthcare, medical devices, veterinary solutions, vaccines, pharmaceuticals, defense/security, government contracting, and international trade, certain business records may be subject to statutory retention, auditing, security, or regulatory compliance mandates.
              </p>
            </section>

            {/* 15. Changes to This Privacy Policy */}
            <section id="changes" className="mb-12 scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mb-4 flex items-center gap-2.5">
                <span className="text-[#dfb753]">15.</span> Changes to This Privacy Policy
              </h2>
              <p>
                ROYSONS may revise this Privacy Policy periodically to reflect changes in business operations, regulatory requirements, technology, or governance practices. Updated versions will be published on this page with the revised effective date.
              </p>
            </section>

            {/* 16. Contact Us */}
            <section id="contact" className="mt-14 p-8 bg-neutral-900 text-white rounded-sm border border-neutral-800 scroll-mt-28">
              <div className="flex items-center gap-2 text-[#dfb753] text-[11px] font-black uppercase tracking-[0.2em] mb-3">
                <Building2 size={15} />
                <span>Privacy & Data Protection Inquiries</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-4">
                16. Contact Information
              </h3>
              <p className="text-[14px] text-neutral-300 leading-relaxed mb-6">
                If you have questions, concerns, or requests regarding this Privacy Policy or how your personal information is handled, please contact our data governance desk:
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

            {/* Privacy Commitment Box */}
            <div className="mt-10 p-8 bg-gradient-to-br from-[#101518] to-[#1a2127] border border-[#dfb753]/30 rounded-sm text-white relative overflow-hidden">
              <div className="flex items-center gap-2 text-[#dfb753] text-[11px] font-black uppercase tracking-[0.2em] mb-2">
                <Sparkles size={14} />
                <span>Privacy Commitment</span>
              </div>
              <h4 className="text-lg font-black text-white mb-2">Your Trust Matters to Us</h4>
              <p className="text-[13.5px] text-neutral-300 leading-relaxed mb-4">
                At ROYSONS Pvt. Ltd., we believe responsible handling of information is an essential part of building long-term relationships. We are committed to maintaining appropriate privacy, security, and transparency as we serve our customers, partners, institutions, and stakeholders.
              </p>
              <p className="text-[12px] font-bold text-[#dfb753] tracking-wider uppercase">
                ROYSONS Pvt. Ltd. — Building Trust Through Integrity, Innovation & Excellence.
              </p>
            </div>

          </div>
        </div>
      </div>

      <CorporateFooter />
    </main>
  );
}
