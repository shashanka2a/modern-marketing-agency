"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
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
            className="mb-12 sm:mb-16"
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
            className="text-gray-900 mb-16 sm:mb-20 text-center px-4"
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "clamp(4rem, 12vw, 10rem)",
              lineHeight: "1.05",
              letterSpacing: "-0.03em",
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
                  ease: "linear",
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

        </motion.div>


      </motion.div>

    </div>
  );
}
