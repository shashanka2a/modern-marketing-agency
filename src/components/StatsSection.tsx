"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "M+", label: "Total Views Generated" },
  { value: 150, suffix: "+", label: "Brands Amplified" },
  { value: 95, suffix: "%", label: "Client Retention" },
  { value: 50, suffix: "X", label: "Average ROI" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <div className="bg-black py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
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
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: "1.2",
            }}
          >
            Results That Speak
          </h2>
          <p
            className="text-gray-400"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
            }}
          >
            Numbers don't lie
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                className="relative inline-block mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className="absolute inset-0 bg-[#e33c25] rounded-2xl blur-xl opacity-0 group-hover:opacity-30"
                  transition={{ duration: 0.3 }}
                />
                <div
                  className="text-white relative"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: "clamp(2.5rem, 6vw, 4rem)",
                    lineHeight: "1",
                  }}
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
              </motion.div>
              <p
                className="text-gray-400"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                  lineHeight: "1.5",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
