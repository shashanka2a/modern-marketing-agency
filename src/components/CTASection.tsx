"use client";

import { motion } from "motion/react";
import { MagneticButton } from "./MagneticButton";
import { Sparkles, Rocket, Star } from "lucide-react";

export function CTASection() {
  return (
    <div className="bg-[#000000] py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e33c25 1px, transparent 1px),
              linear-gradient(to bottom, #e33c25 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#e33c25] rounded-full blur-[150px] opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#e33c25] rounded-full blur-[120px] opacity-15"
          animate={{
            scale: [1, 1.2, 1],
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Floating icons */}
        <motion.div
          className="absolute top-1/4 left-[15%] text-[#e33c25] opacity-10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-16 h-16" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-[10%] text-[#e33c25] opacity-10"
          animate={{
            y: [0, 30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Rocket className="w-20 h-20" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-[25%] text-[#e33c25] opacity-10"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star className="w-12 h-12" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-[#e33c25]" />
            </motion.div>
            <span
              className="text-gray-400 text-sm"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Let's Create Together
            </span>
          </motion.div>

          {/* Main headline with stagger animation */}
          <motion.h2
            className="text-white mb-6 sm:mb-8 px-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
            }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're not here to be your{" "}
            </motion.span>
            <motion.span
              className="inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="relative z-10 text-[#e33c25]">content agency</span>
              <motion.span
                className="absolute inset-0 bg-[#e33c25] blur-xl opacity-30"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
            <br className="hidden sm:inline" />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {" "}— we're here to be your{" "}
            </motion.span>
            <motion.span
              className="inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="relative z-10">marketing partner</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-[#e33c25] opacity-20 rounded"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />
            </motion.span>
            <motion.span
              className="inline-block text-[#e33c25]"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
            >
              .
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-gray-200 mb-10 sm:mb-12 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
              lineHeight: "1.7",
            }}
          >
            Our strategy and design have helped founders and brands build stronger foundations for their businesses.
          </motion.p>

          {/* Enhanced CTA button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <MagneticButton
              className="group relative inline-flex items-center gap-3 px-10 sm:px-12 py-4 sm:py-5 bg-[#e33c25] text-white rounded-2xl min-h-[48px] overflow-hidden"
              onClick={() => console.log("Make me better")}
            >
              {/* Animated gradient overlay */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-200%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              
              {/* Button content */}
              <motion.span
                className="relative z-10 flex items-center gap-3"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
                }}
              >
                <span>Make Me Better</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Rocket className="w-5 h-5" />
                </motion.div>
              </motion.span>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: "0 0 30px rgba(227, 60, 37, 0.6), 0 0 60px rgba(227, 60, 37, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              />
            </MagneticButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-6 sm:gap-8 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { icon: "🏆", text: "Award Winning" },
              { icon: "⚡", text: "Lightning Fast" },
              { icon: "🎯", text: "Results Driven" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-2 text-gray-400"
                style={{ fontFamily: "'Manrope', sans-serif" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.1 + i * 0.1 }}
                whileHover={{ scale: 1.05, color: "#e33c25" }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
