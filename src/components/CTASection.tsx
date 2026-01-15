"use client";

import { motion } from "motion/react";

export function CTASection() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 backdrop-blur-sm border border-gray-200 mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span
              className="text-gray-600 text-sm"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Let's Create Together
            </span>
          </motion.div>

          {/* Main headline with stagger animation */}
          <motion.h2
            className="text-gray-900 mb-6 sm:mb-8 px-4"
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
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-[#e33c25]">content agency</span>
            </motion.span>
            <br className="hidden sm:inline" />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {" "}we're here to be your{" "}
            </motion.span>
            <motion.span
              className="inline-block relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <span className="relative z-10 text-[#e33c25]">marketing partner</span>
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


        </motion.div>
      </div>
    </div>
  );
}
