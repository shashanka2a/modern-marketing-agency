"use client";

import { motion } from "motion/react";

export function BookingSection() {
  return (
    <div className="bg-white py-16 sm:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      
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
            className="text-gray-900 mb-8 sm:mb-12"
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
            <span className="block">Make Yourself a Victim of</span>
            <motion.span
              className="inline-block relative"
              whileInView={{ rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="relative z-10">Engagement</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-[#e33c25] opacity-20 rounded"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.span>
          </motion.h2>

          {/* Calendly iframe */}
          <motion.div
            className="w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <iframe
              src="https://cal.com/adverzeo/strategy"
              width="100%"
              height="700"
              frameBorder="0"
              className="rounded-2xl shadow-2xl"
              title="Book Strategy Session"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
