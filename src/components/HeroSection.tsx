"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { Zap, Sparkles, TrendingUp, Award } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { ViralIllustration } from "./CustomIllustrations";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[#000000] min-h-screen flex items-center justify-center px-4 sm:px-6">
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
          {/* Animated logo badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-[#e33c25]" />
            </motion.div>
            <span
              className="text-white tracking-wider"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              }}
            >
              ADVERZEO
            </span>
            <motion.div
              className="w-2 h-2 rounded-full bg-[#e33c25]"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Main headline with stagger effect */}
          <motion.h1
            className="text-white mb-4 sm:mb-6 px-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2.5rem, 8vw, 6.5rem)",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The Agency Behind
            </motion.span>
            <br />
            <motion.span
              className="inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="relative z-10">Millions of Views</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#e33c25] to-transparent opacity-20 blur-xl"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
            <motion.span
              className="inline-block text-[#e33c25]"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
            >
              .
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-200 max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
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

        {/* Enhanced CTA form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-xl mx-auto px-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <motion.div
            className="flex-1 relative"
            animate={{ 
              boxShadow: isFocused 
                ? "0 0 0 2px rgba(227, 60, 37, 0.3)" 
                : "0 0 0 0px rgba(227, 60, 37, 0)"
            }}
            style={{ borderRadius: "12px" }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              aria-label="Email address"
              className="w-full px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 backdrop-blur-md focus:outline-none focus:border-[#e33c25] transition-all duration-300 min-h-[48px]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            />
          </motion.div>

          <MagneticButton
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#e33c25] text-white rounded-xl min-h-[48px] whitespace-nowrap relative overflow-hidden group"
            onClick={() => console.log("Book a call")}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <span
              className="relative z-10"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Book a Call
            </span>
          </MagneticButton>
        </motion.form>

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
