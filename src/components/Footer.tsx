"use client";

import { Zap, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const footerLinks = [
  { name: "Services", href: "#" },
  { name: "Portfolio", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[#000000] border-t border-white/10 py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e33c25] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-8 sm:gap-12 mb-12">
          {/* Brand section */}
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center gap-2 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#e33c25]" />
              </motion.div>
              <span
                className="text-white"
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                }}
              >
                Adverzeo
              </span>
            </motion.div>

            <p
              className="text-gray-400 mb-6 max-w-sm"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                lineHeight: "1.7",
              }}
            >
              The agency behind millions of views. We transform brands into viral sensations through strategic marketing and creative excellence.
            </p>

            {/* Email */}
            <motion.a
              href="mailto:hello@adverzeo.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#e33c25] transition-colors duration-300 group"
              style={{ fontFamily: "'Manrope', sans-serif" }}
              whileHover={{ x: 5 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">hello@adverzeo.com</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>

          {/* Quick links */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-2 group"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                    whileHover={{ x: 5 }}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Follow Us
            </h3>
            <div className="flex gap-3 sm:gap-4">
              {[
                { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200,
                      delay: 0.3 + index * 0.1 
                    }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#e33c25] blur-lg opacity-0 group-hover:opacity-50"
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Button */}
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#e33c25] group-hover:border-[#e33c25] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Stats */}
            <motion.div
              className="mt-6 grid grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { value: "500M+", label: "Total Views" },
                { value: "150+", label: "Happy Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center sm:text-left"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <div
                    className="text-white"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-gray-500 text-xs"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-gray-500 text-center sm:text-left"
              style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: "clamp(0.8125rem, 1.2vw, 0.875rem)",
              }}
            >
              © 2025 Adverzeo. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              {["Privacy", "Terms"].map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors text-sm"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.05 }}
                  whileHover={{ x: 2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated background gradient */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#e33c25] rounded-full blur-[150px] opacity-5 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </footer>
  );
}
