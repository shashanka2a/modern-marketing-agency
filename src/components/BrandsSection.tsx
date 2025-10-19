"use client";

import { motion } from "motion/react";
import { ImagePreloader } from "./ImagePreloader";

const brands = [
  { name: "Awedeet", logo: "/brands/awedeet-01.png" },
  { name: "Bloomora", logo: "/brands/bloomora-lockup@4x.png" },
  { name: "Cafe", logo: "/brands/Cafe logo copy.png" },
  { name: "CC", logo: "/brands/cc.png" },
  { name: "Cluckin", logo: "/brands/Cluckin_Icon_Yellow Colour (1) copy.png" },
  { name: "Dental Wellness", logo: "/brands/Dental Wellness Logo.png" },
  { name: "Ekjyot", logo: "/brands/ekjyot final file-03.png" },
  { name: "Final Logo", logo: "/brands/final logo-06.png" },
  { name: "Final Logo 2", logo: "/brands/final logo.png" },
  { name: "GC", logo: "/brands/gc.png" },
  { name: "Green", logo: "/brands/green.png" },
  { name: "Jaipuriya", logo: "/brands/jaipuriya.png" },
  { name: "Kepchaki", logo: "/brands/kepchaki dp.jpg" },
  { name: "Lafa", logo: "/brands/lafa.png" },
  { name: "LF", logo: "/brands/lf logo new 2.png" },
  { name: "Lickcious", logo: "/brands/Lickcious_logo_Combined_series.png" },
  { name: "Logo 01", logo: "/brands/logo-01.png" },
  { name: "Logo 03", logo: "/brands/logo-03.png" },
  { name: "Logo 05", logo: "/brands/logo-05.png" },
  { name: "Nos", logo: "/brands/nos logo copy.png" },
  { name: "Shifft", logo: "/brands/Shifft Logo copy.png" },
  { name: "SRGM", logo: "/brands/srgm logo copy.png" },
  { name: "SS Final", logo: "/brands/ss_final logo-06.png" },
  { name: "The GC Show", logo: "/brands/the gc show final logo-01.png" },
  { name: "Trust", logo: "/brands/trust logo_final-01.png" },
  { name: "Varsha", logo: "/brands/varsha logo-01.png" },
  { name: "Whitearth", logo: "/brands/whitearth.png" },
];

export function BrandsSection() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-gray-900 mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
            }}
          >
            Our Clients
          </h2>
        </motion.div>

        {/* Scrolling brands */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
              {/* First set of brands */}
              {brands.map((brand, index) => (
                <motion.div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <div className="w-40 h-20 sm:w-48 sm:h-24 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-40 hover:opacity-80 mx-4">
                    <ImagePreloader
                      src={brand.logo}
                      alt={brand.name}
                      width={192}
                      height={96}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {brands.map((brand, index) => (
                <motion.div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + brands.length) * 0.05 }}
                >
                  <div className="w-40 h-20 sm:w-48 sm:h-24 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-40 hover:opacity-80 mx-4">
                    <ImagePreloader
                      src={brand.logo}
                      alt={brand.name}
                      width={192}
                      height={96}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
