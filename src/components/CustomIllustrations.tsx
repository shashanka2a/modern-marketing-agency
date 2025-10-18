"use client";

import { motion } from "motion/react";

export function BrandStrategyIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="100"
        cy="100"
        r="60"
        stroke="#e33c25"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, rotate: 0 }}
        animate={{ pathLength: 1, rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        cx="100"
        cy="100"
        r="40"
        stroke="#e33c25"
        strokeWidth="2"
        fill="none"
        strokeDasharray="4 4"
        initial={{ pathLength: 0, rotate: 0 }}
        animate={{ pathLength: 1, rotate: -360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      <motion.path
        d="M100 60 L120 100 L100 140 L80 100 Z"
        fill="#e33c25"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
      />
    </svg>
  );
}

export function CreativeProductionIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.rect
        x="60"
        y="60"
        width="80"
        height="60"
        rx="4"
        stroke="#e33c25"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.circle
        cx="100"
        cy="90"
        r="15"
        fill="#e33c25"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      <motion.path
        d="M85 90 L95 100 L110 80"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.line
        x1="70"
        y1="140"
        x2="130"
        y2="140"
        stroke="#e33c25"
        strokeWidth="2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      />
    </svg>
  );
}

export function ViralIllustration() {
  return (
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M150 50 L200 100 L180 150 L220 200 L150 180 L80 200 L120 150 L100 100 Z"
        stroke="#e33c25"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <motion.circle
          key={angle}
          cx={150 + Math.cos((angle * Math.PI) / 180) * 70}
          cy={150 + Math.sin((angle * Math.PI) / 180) * 70}
          r="8"
          fill="#e33c25"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        />
      ))}
      <motion.circle
        cx="150"
        cy="150"
        r="20"
        fill="#e33c25"
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.3, 1] }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </svg>
  );
}
