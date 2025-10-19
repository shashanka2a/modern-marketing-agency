"use client";

import { motion } from "motion/react";
import { Calendar, ArrowRight } from "lucide-react";

export function BookingSection() {
  return (
    <div className="bg-black py-16 sm:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Main headline */}
          <motion.h2
            className="text-white mb-8 sm:mb-12"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: "1.1",
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Make Yourself a Victim of Engagement
          </motion.h2>

          {/* CTA Button */}
          <motion.a
            href="https://cal.com/adverzeo/strategy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#e33c25] hover:bg-[#c42d1a] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#e33c25]/25"
            style={{ fontFamily: "'Manrope', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="w-5 h-5" />
            <span>Book Strategy Session</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          {/* Subtitle */}
          <motion.p
            className="text-gray-300 mt-6 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Ready to transform your brand's digital presence? Let's create content that your audience can't ignore.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
