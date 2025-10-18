"use client";

import { Zap, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = [
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Case Studies", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Privacy", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-black py-16 px-4 sm:px-6">
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
            className="flex items-center justify-center gap-2 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            <span
              className="text-white text-4xl font-bold"
              style={{
                fontFamily: "'Manrope', sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              Adverzeo
            </span>
          </motion.div>
          
          {/* Separator line */}
          <div className="w-full h-px bg-white/20 mb-8" />
        </motion.div>

        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Social Media Icons */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
              { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    delay: 0.2 + index * 0.1 
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="flex flex-wrap items-center gap-6 sm:gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {footerLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-300 transition-colors duration-300 text-sm font-medium"
                style={{ fontFamily: "'Manrope', sans-serif" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Copyright Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p
            className="text-white/70 text-sm mb-2"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Proudly created in India.
          </p>
          <p
            className="text-white/70 text-sm"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            All Right Reserved, All Wrong Reversed.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
