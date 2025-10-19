"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Zap, Sparkles, TrendingUp, Award } from "lucide-react";
import { ViralIllustration } from "./CustomIllustrations";
import Image from "next/image";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.98]);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-white min-h-screen flex items-center justify-center px-4 sm:px-6">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(at 20% 30%, rgba(227, 60, 37, 0.3) 0%, transparent 50%),
              radial-gradient(at 80% 70%, rgba(227, 60, 37, 0.2) 0%, transparent 50%),
              radial-gradient(at 40% 80%, rgba(0, 0, 0, 0.5) 0%, transparent 50%)
            `,
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e33c25 1px, transparent 1px),
              linear-gradient(to bottom, #e33c25 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-[10%] text-[#e33c25] opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles className="w-12 h-12" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-[15%] text-[#e33c25] opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <TrendingUp className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute top-[15%] right-[20%] text-[#e33c25] opacity-15"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Award className="w-10 h-10" />
      </motion.div>

      {/* Custom illustration */}
      <motion.div
        className="absolute bottom-[10%] left-[5%] opacity-10"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <ViralIllustration />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto py-20 sm:py-32 text-center w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          {/* Logo */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          >
            <Image
              src="/adverzeo.png"
              alt="Adverzeo"
              width={300}
              height={90}
              className="h-16 w-auto mx-auto"
              priority
            />
          </motion.div>

          {/* Main headline with scrolling text effect */}
          <motion.h1
            className="text-gray-900 mb-8 sm:mb-12 text-center"
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The Art Of
            </motion.span>
            <motion.span
              className="block relative overflow-hidden h-[1.1em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div
                className="flex flex-col items-center"
                animate={{ y: [0, -100, -200, -300, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <span className="h-[1.1em] flex items-center justify-center italic text-[#e33c25]">Persuasion</span>
                <span className="h-[1.1em] flex items-center justify-center italic text-[#e33c25]">Storytelling</span>
                <span className="h-[1.1em] flex items-center justify-center italic text-[#e33c25]">Strategy</span>
                <span className="h-[1.1em] flex items-center justify-center italic text-[#e33c25]">Creativity</span>
              </motion.div>
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.125rem, 2.5vw, 1.75rem)",
              lineHeight: "1.6",
            }}
          >
            Our impeccable strategy helps brands go viral, achieving millions of views and global recognition.
          </motion.p>
        </motion.div>


        {/* Social proof badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 flex items-center justify-center gap-8 flex-wrap px-4"
        >
          {["500M+ Views", "150+ Brands", "95% Retention"].map((stat, i) => (
            <motion.div
              key={stat}
              className="text-gray-400 text-sm"
              style={{ fontFamily: "'Manrope', sans-serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.1 }}
            >
              ✓ {stat}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent" />
    </div>
  );
}
