"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { BrandsSection } from "@/components/BrandsSection";
import { BookingSection } from "@/components/BookingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { LoadingAnimation } from "@/components/LoadingAnimation";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [preloadComplete, setPreloadComplete] = useState(false);

  useEffect(() => {
    // Preload critical images
    const preloadImages = async () => {
      const imageUrls = [
        '/adverzeo.png',
        '/logo.png',
        // Add brand logos
        '/brands/awedeet-01.png',
        '/brands/bloomora-lockup@4x.png',
        '/brands/Cafe logo copy.png',
        '/brands/cc.png',
        '/brands/Cluckin_Icon_Yellow Colour (1) copy.png',
        '/brands/Dental Wellness Logo.png',
        '/brands/ekjyot final file-03.png',
        '/brands/final logo-06.png',
        '/brands/final logo.png',
        '/brands/gc.png',
        '/brands/green.png',
        '/brands/jaipuriya.png',
        '/brands/kepchaki dp.jpg',
        '/brands/lafa.png',
        '/brands/lf logo new 2.png',
        '/brands/Lickcious_logo_Combined_series.png',
        '/brands/logo-01.png',
        '/brands/logo-03.png',
        '/brands/logo-05.png',
        '/brands/nos logo copy.png',
        '/brands/Shifft Logo copy.png',
        '/brands/srgm logo copy.png',
        '/brands/ss_final logo-06.png',
        '/brands/the gc show final logo-01.png',
        '/brands/trust logo_final-01.png',
        '/brands/varsha logo-01.png',
        '/brands/whitearth.png',
        // Add video thumbnails
        '/projects/Cluckin India _ 6M+ Profile Visits.MOV',
        '/projects/The Bandstand Pantry _ 15M Views.mp4',
        '/projects/Varsha Rainwear _ 60% Increased Sales.mp4',
        '/projects/Nostalgia Bakery _ Brand Growth.mp4',
        '/projects/Bandstand Collaboration _ Content Strategy.mp4',
        '/projects/Engagement _ Social Media Strategy.mp4'
      ];

      const imagePromises = imageUrls.map(url => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Don't fail on missing images
          img.src = url;
        });
      });

      await Promise.all(imagePromises);
      setPreloadComplete(true);
    };

    preloadImages();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

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
