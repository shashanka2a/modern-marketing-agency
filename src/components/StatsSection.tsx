"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { 
    name: "The Bandstand Pantry",
    title: "Restaurant Brand",
    metric: "15M+ Views",
    posts: "in 8 Posts",
    icon: "👁"
  },
  { 
    name: "Nostalgia Bakery", 
    title: "Bakery Brand",
    metric: "2.5M+ Views",
    posts: "in 12 Posts",
    icon: "👁"
  },
  { 
    name: "Cluckin India",
    title: "Food Brand", 
    metric: "6M+ Profile Visits",
    posts: "in 15 Posts",
    icon: "👥"
  },
  { 
    name: "Varsha Rainwear",
    title: "Fashion Brand",
    metric: "60% Sales Increase", 
    posts: "in 6 Posts",
    icon: "📈"
  },
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
            Don't Take Our Word For It.
          </h2>
          <p
            className="text-white"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
              lineHeight: "1.3",
            }}
          >
            Our{" "}
            <span className="font-bold">Work</span>{" "}
            Speaks{" "}
            <span className="font-bold text-[#e33c25]">Louder</span>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Card */}
              <motion.div
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Name */}
                <h3
                  className="text-white text-lg font-semibold mb-2"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {stat.name}
                </h3>

                {/* Title */}
                <p
                  className="text-gray-300 text-sm mb-4"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  {stat.title}
                </p>

                {/* Metric */}
                <div className="flex items-center gap-2">
                  <span className="text-[#e33c25] text-sm">{stat.icon}</span>
                  <span
                    className="text-white text-sm"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                    }}
                  >
                    {stat.metric} {stat.posts}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
