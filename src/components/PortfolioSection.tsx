"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "The Bandstand Pantry",
    category: "Content Strategy",
    video: "/projects/The Bandstand Pantry _ 10M views.mp4",
    views: "10M",
    description: "10M Views Campaign",
    instagramLink: "https://www.instagram.com/reel/DAbCldyM5p5/?igsh=MWlvMXhobnp5cW9tag%3D%3D",
  },
  {
    id: 2,
    title: "Nostalgia Bakery",
    category: "Brand Growth",
    video: "/projects/Nostalgia Bakery _ 990k Views.mp4",
    views: "990K",
    description: "990K Views Campaign",
    instagramLink: "https://www.instagram.com/reel/DM5OZtptNoS/?igsh=MTA3djBvYnRocG5ydg%3D%3D",
  },
  {
    id: 3,
    title: "The Bandstand Pantry",
    category: "Engagement",
    video: "/projects/The Bandstand Pantry _ 2M+ Views.mp4",
    views: "2M+",
    description: "2M+ Views Campaign",
    instagramLink: "https://www.instagram.com/reel/DMUe8UYI66z/?igsh=c2Z0YmVlZWo0bnNy",
  },
  {
    id: 4,
    title: "Nostalgia Bakery",
    category: "Foot Traffic",
    video: "/projects/Nostalgia Bakery _ 25_ Increased Footfall.mp4",
    views: "25%",
    description: "25% Increased Footfall",
    instagramLink: "https://www.instagram.com/reel/DIN7z4fIKPp/?igsh=eWx5andsaDY3ejY5",
  },
  {
    id: 5,
    title: "The Bandstand Pantry",
    category: "Collaboration",
    video: "/projects/Swiggy India x TBP Collaboration.mp4",
    views: "Viral",
    description: "Brand Collaboration Campaign",
    instagramLink: "https://www.instagram.com/reel/C8tY59JouWe/?igsh=MWVqNGZ2dDhtYWY4dA%3D%3D",
  },
  {
    id: 6,
    title: "The Bandstand Pantry",
    category: "Viral Marketing",
    video: "/projects/The Bandstand Pantry _ 2M+ Views.mp4",
    views: "2M+",
    description: "Viral Marketing Success",
    instagramLink: "https://www.instagram.com/reel/Cy52PVJM7ri/?igsh=MTZtajJueTNmYmQzbg==",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.08,
        type: "spring",
        stiffness: 100
      }}
      className="group relative perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => setIsHovered(true)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer bg-gray-900 w-full"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        {/* Video with parallax effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${project.video.replace('.mp4', '.jpg').replace('.MOV', '.jpg')}`}
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

        {/* Play/Pause indicator */}
        <motion.div
          className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center"
          animate={{
            opacity: isPlaying ? 0.8 : 0.4,
            scale: isPlaying ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-0 h-0 border-l-[6px] border-l-white border-y-[4px] border-y-transparent ml-1"
            animate={{
              scale: isPlaying ? 0.8 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>

        {/* Content overlay - always visible on mobile */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8"
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Views badge */}
          <motion.div
            className="absolute top-4 right-4 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/30"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
          >
            <span
              className="text-white text-sm font-semibold"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              👁 {project.views}
            </span>
          </motion.div>

          {/* Category */}
          <motion.p
            className="text-[#e33c25] mb-2"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
            animate={{
              y: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0.9,
            }}
            transition={{ duration: 0.3 }}
          >
            {project.category}
          </motion.p>

          {/* Title */}
          <motion.h3
            className="text-white mb-2"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
              lineHeight: "1.2",
            }}
            animate={{
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-300 mb-3 text-sm"
            style={{
              fontFamily: "'Manrope', sans-serif",
            }}
            animate={{
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {project.description}
          </motion.p>

          {/* View project button - shows on hover */}
          <motion.a
            href={project.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white text-sm hover:text-[#e33c25] transition-colors"
            style={{ fontFamily: "'Manrope', sans-serif" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span>View on Instagram</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#e33c25]/20 via-transparent to-transparent" />
        </motion.div>

        {/* Border highlight */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-transparent pointer-events-none"
          animate={{
            borderColor: isHovered ? "rgba(227, 60, 37, 0.5)" : "rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Enhanced shadow */}
      <motion.div
        className="absolute inset-0 rounded-3xl -z-10 blur-xl"
        animate={{
          opacity: isHovered ? 0.4 : 0.2,
          scale: isHovered ? 1.05 : 1,
        }}
        style={{
          background: "linear-gradient(to bottom, rgba(227, 60, 37, 0.3), transparent)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function PortfolioSection() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-72 h-72 bg-[#e33c25] rounded-full blur-[150px] opacity-5"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 lg:mb-16"
        >
          <motion.span
            className="inline-block text-[#e33c25] uppercase tracking-wider mb-4"
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: "0.875rem",
            }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.span>
          
          <h2
            className="text-[#000000] mb-3 sm:mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: "1.1",
            }}
          >
            Recent{" "}
            <motion.span
              className="inline-block relative"
              whileInView={{ rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="relative z-10">Work</span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-3 bg-[#e33c25] opacity-20 rounded"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.span>
            .
          </h2>
          
          <p
            className="text-gray-600"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
            }}
          >
            Creating viral moments that matter
          </p>
        </motion.div>

        {/* Portfolio Carousel */}
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide">
            {projects.map((project, index) => (
              <div key={project.id} className="flex-shrink-0 w-80 snap-center">
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
          
          {/* Carousel Navigation Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#e33c25] transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* View all projects CTA */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            className="px-8 py-4 bg-black text-white rounded-xl relative overflow-hidden group"
            style={{ fontFamily: "'Manrope', sans-serif" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-[#e33c25]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">View All Projects</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
