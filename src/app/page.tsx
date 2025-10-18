import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { StatsSection } from "@/components/StatsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Global animated background */}
      <AnimatedBackground />
      
      {/* Main content */}
      <HeroSection />
      <PortfolioSection />
      <StatsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </div>
  );
}
