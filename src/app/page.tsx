import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { BrandsSection } from "@/components/BrandsSection";
import { BookingSection } from "@/components/BookingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Home() {
  return (
    <div className="min-h-screen relative bg-white">
      {/* Global animated background */}
      <AnimatedBackground />
      
      {/* Main content */}
      <HeroSection />
      <PortfolioSection />
      <BrandsSection />
      <BookingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
