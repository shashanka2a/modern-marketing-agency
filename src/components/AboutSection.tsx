"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { BrandStrategyIllustration, CreativeProductionIllustration } from "./CustomIllustrations";

// Custom Icons
const LightbulbIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 21h6M12 3a5 5 0 0 1 5 5c0 2.36-1.5 4.5-1.5 4.5H8.5S7 10.36 7 8a5 5 0 0 1 5-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 17v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FilmIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="20" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 3v18M17 3v18M2 12h20" stroke="currentColor" strokeWidth="2"/>
    <path d="M2 7h5M2 17h5M17 7h5M17 17h5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const TrendingUpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="17 6 23 6 23 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const services = [
  {
    icon: LightbulbIcon,
    title: "01",
    description: "Brainstorming ideas and crafting ideas unique to your brand.",
    illustration: BrandStrategyIllustration,
  },
  {
    icon: FilmIcon,
    title: "02",
    description: "Execute the ideas with filming, direction, and editing of every video.",
    illustration: CreativeProductionIllustration,
  },
  {
    icon: TrendingUpIcon,
    title: "03",
    description: "Amplify your account with posting, captions, and engaging with your niche.",
    illustration: BrandStrategyIllustration,
  },
];

export function AboutSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={containerRef} className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#e33c25] rounded-full blur-[150px] opacity-5"
        style={{ y }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Two column layout with parallax */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="text-[#e33c25] uppercase tracking-wider"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "0.875rem",
                }}
              >
                Our Expertise
              </span>
            </motion.div>
            <h2
              className="text-[#000000]"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                lineHeight: "1.1",
              }}
            >
              We Run The{" "}
              <motion.span
                className="inline-block relative"
                whileInView={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="relative z-10">Whole Show</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-[#e33c25] opacity-20"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </motion.span>
            </h2>
            <motion.p
              className="text-[#000000] mt-4"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                lineHeight: "1.3",
              }}
            >
              Here's{" "}
              <span className="text-[#e33c25] font-semibold">How:</span>
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="flex items-center"
          >
            <p
              className="text-gray-700"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                lineHeight: "1.8",
              }}
            >
              We craft comprehensive marketing strategies that transform brands into cultural phenomena.
              Our approach combines data-driven insights with creative excellence to deliver campaigns
              that don't just reach audiences—they resonate with them.
            </p>
          </motion.div>
        </div>

        {/* Service Cards with Bento Grid Style */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            const Illustration = service.illustration;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Brand colored card */}
                <motion.div
                  className="relative bg-gradient-to-br from-[#e33c25] to-[#c42d1a] p-6 sm:p-8 lg:p-10 rounded-3xl overflow-hidden"
                  animate={{
                    scale: isHovered ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient background on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#e33c25]/5 to-transparent opacity-0"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* 3D hover effect */}
                  <motion.div
                    className="relative z-10"
                    animate={{
                      rotateX: isHovered ? 5 : 0,
                      rotateY: isHovered ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Emoji and illustration container */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        animate={{
                          scale: isHovered ? 1.1 : 1,
                          rotate: isHovered ? 5 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#e33c25]/10 via-[#e33c25]/5 to-transparent rounded-2xl flex items-center justify-center shadow-lg">
                          <div className="text-4xl sm:text-5xl text-white">
                            <service.icon />
                          </div>
                        </div>
                      </motion.div>

                      {/* Custom illustration */}
                      <motion.div
                        className="opacity-10 -mt-4 -mr-4"
                        animate={{
                          opacity: isHovered ? 0.2 : 0.1,
                          scale: isHovered ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-24 h-24">
                          <Illustration />
                        </div>
                      </motion.div>
                    </div>

                    <h3
                      className="text-white mb-3 sm:mb-4 font-bold"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        lineHeight: "1.2",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      className="text-white/90 mb-6"
                      style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: "clamp(0.9375rem, 1.5vw, 1rem)",
                        lineHeight: "1.7",
                      }}
                    >
                      {service.description}
                    </p>

                  </motion.div>

                  {/* Floating particles effect */}
                  {isHovered && (
                    <>
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-[#e33c25] rounded-full"
                          initial={{ 
                            x: Math.random() * 100 + "%", 
                            y: "100%",
                            opacity: 0
                          }}
                          animate={{ 
                            y: "-100%",
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 2,
                            delay: i * 0.2,
                            repeat: Infinity,
                          }}
                        />
                      ))}
                    </>
                  )}
                </motion.div>

                {/* Shadow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl -z-10"
                  animate={{
                    boxShadow: isHovered 
                      ? "0 25px 50px -12px rgba(227, 60, 37, 0.25)"
                      : "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
