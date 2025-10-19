"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface LoadingAnimationProps {
  onComplete: () => void;
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(onComplete, 500); // Small delay for smooth transition
          return 100;
        }
        return prev + Math.random() * 15; // Variable loading speed
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5, delay: isComplete ? 0 : 0 }}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Image
            src="/adverzeo.png"
            alt="Adverzeo"
            width={200}
            height={60}
            className="h-16 w-auto"
            priority
          />
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="text-gray-900 mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "1.5rem",
              lineHeight: "1.2",
            }}
          >
            The Art Of
          </h2>
          <motion.div
            className="text-[#e33c25] italic"
            style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: "1.25rem",
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading Excellence...
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#e33c25] to-[#c42d1a] rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Progress percentage */}
        <motion.div
          className="text-gray-600 text-sm"
          style={{ fontFamily: "'Manrope', sans-serif" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {Math.round(progress)}%
        </motion.div>
      </div>
    </motion.div>
  );
}
