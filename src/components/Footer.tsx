"use client";

import { motion } from "motion/react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex items-center justify-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/adverzeo.png"
              alt="Adverzeo"
              width={300}
              height={90}
              className="h-20 w-auto"
              priority
            />
          </motion.div>
          
          {/* Separator line */}
          <div className="w-full h-px bg-gray-300 mb-8" />
        </motion.div>

        {/* Bottom Copyright Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p
            className="text-gray-600 text-sm mb-2"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Proudly created in India.
          </p>
          <p
            className="text-gray-600 text-sm"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            All Right Reserved, All Wrong Reversed.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
