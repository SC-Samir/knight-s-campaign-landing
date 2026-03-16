import HeroSection from "@/components/HeroSection";
import LoreSection from "@/components/LoreSection";
import CampaignSection from "@/components/CampaignSection";
import CharactersSection from "@/components/CharactersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <LoreSection />
      <CampaignSection />
      <CharactersSection />
      <Footer />
    </div>
  );
};

export default Index;
