import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { CoreValue } from "@/components/landing/CoreValue";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { AIExplain } from "@/components/landing/AIExplain";
import { Trust } from "@/components/landing/Trust";
import { Architecture } from "@/components/landing/Architecture";
import { FeaturesGrid } from "@/components/landing/FeaturesGrid";
import { Research } from "@/components/landing/Research";
import { FinalCTA } from "@/components/landing/FinalCTA";

const Index = () => {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <CoreValue />
      <HowItWorks />
      <DashboardPreview />
      <AIExplain />
      <Trust />
      <Architecture />
      <FeaturesGrid />
      <Research />
      <FinalCTA />
    </main>
  );
};

export default Index;
