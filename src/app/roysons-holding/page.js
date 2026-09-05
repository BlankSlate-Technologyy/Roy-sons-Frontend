import HeaderNavbar from "@/components/ui/navigation-menu";
import BillboardSlider from "@/components/ui/hero-slider";
import SubsidiariesHoldingsGrid from "@/components/ui/group-companies";
import CorporateCapabilitiesPanel from "@/components/ui/services-section";
import FeaturedHoldingsShowcase from "@/components/ui/featured-projects";
import ConsultationBanner from "@/components/ui/cta-banner";
import CorporateNewsDesk from "@/components/ui/news-section";
import CorporateFooter from "@/components/ui/footer";

export const metadata = {
  title: "ROYSONS Holding – Main Corporate Holding Group",
  description:
    "The parent holding enterprise overseeing strategic group companies, corporate governance, global investments, and national partnerships.",
};

export default function RoysonsHoldingPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderNavbar activeRoute="/roysons-holding" />
      <BillboardSlider />
      <SubsidiariesHoldingsGrid />
      <CorporateCapabilitiesPanel />
      <FeaturedHoldingsShowcase />
      <ConsultationBanner />
      <CorporateNewsDesk />
      <CorporateFooter />
    </main>
  );
}
