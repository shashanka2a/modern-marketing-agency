"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Creative Workspace",
    category: "Agency Branding",
    image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGFnZW5jeSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjA2NjQ3OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    views: "2.5M",
  },
  {
    id: 2,
    title: "Brand Identity System",
    category: "Visual Design",
    image: "https://images.unsplash.com/photo-1655141559812-42f8c1e8942d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMG1vY2t1cHxlbnwxfHx8fDE3NjA3NjMwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    views: "1.8M",
  },
  {
    id: 3,
    title: "Digital Strategy",
    category: "Marketing Campaign",
    image: "https://images.unsplash.com/photo-1542744094-f77e9f7a10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MDcxNzA4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    views: "3.2M",
  },
  {
    id: 4,
    title: "Creative Branding",
    category: "Brand Development",
    image: "https://images.unsplash.com/photo-1758873272540-439a105db676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwcHJvamVjdHxlbnwxfHx8fDE3NjA3NzkzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    views: "4.1M",
  },
  {
    id: 5,
    title: "Modern Brand Identity",
    category: "Corporate Design",
    image: "https://images.unsplash.com/photo-1760263137421-7dc09d372e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBicmFuZCUyMGlkZW50aXR5fGVufDF8fHx8MTc2MDc4NjI0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    views: "2.9M",
  },
  {
    id: 6,
    title: "Design Studio",
    category: "Creative Direction",
    image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYwNjk3MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    views: "1.5M",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    mouseX.set(0);
    mouseY.set(0);
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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onTouchStart={() => setIsHovered(true)}
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="relative overflow-hidden rounded-3xl aspect-[4/5] cursor-pointer bg-gray-900"
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
      >
        {/* Image with parallax effect */}
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: isHovered ? 1.15 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

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
            className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3 + index * 0.05, type: "spring" }}
          >
            <span
              className="text-white text-xs"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              👁 {project.views} views
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
            className="text-white mb-3"
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

          {/* View project button - shows on hover */}
          <motion.button
            className="flex items-center gap-2 text-white text-sm"
            style={{ fontFamily: "'Manrope', sans-serif" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span>View Project</span>
            <ExternalLink className="w-4 h-4" />
          </motion.button>
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

        {/* Bento-style Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
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
