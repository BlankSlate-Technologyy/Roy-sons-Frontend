import HeaderNavbar from "@/components/ui/navigation-menu";
import BillboardSlider from "@/components/ui/hero-slider";
import ChairmanAddressBlock from "@/components/ui/chairman-section";
import SubsidiariesHoldingsGrid from "@/components/ui/group-companies";
import CorporateCapabilitiesPanel from "@/components/ui/services-section";
import FeaturedHoldingsShowcase from "@/components/ui/featured-projects";
import ConsultationBanner from "@/components/ui/cta-banner";
import CorporateNewsDesk from "@/components/ui/news-section";
import CorporateFooter from "@/components/ui/footer";

export default function RootHomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeaderNavbar activeRoute="/" />
      <BillboardSlider />
      <ChairmanAddressBlock />
      <SubsidiariesHoldingsGrid />
      <CorporateCapabilitiesPanel />
      <FeaturedHoldingsShowcase />
      <ConsultationBanner />
      <CorporateNewsDesk />
      <CorporateFooter />
    </main>
  );
}
