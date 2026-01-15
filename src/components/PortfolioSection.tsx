"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Bandstand Pantry",
    category: "Content Strategy",
    video: "/projects/The Bandstand Pantry _ 10M views.mp4",
    metric: "10M+ Views",
    posts: "in 8 Posts",
    icon: "👁",
    instagramLink: "https://www.instagram.com/reel/DAbCldyM5p5/?igsh=MWlvMXhobnp5cW9tag%3D%3D",
  },
  {
    id: 2,
    title: "Nostalgia Bakery",
    category: "Brand Growth",
    video: "/projects/Nostalgia Bakery _ 990k Views.mp4",
    metric: "990K Views",
    posts: "",
    icon: "👁",
    instagramLink: "https://www.instagram.com/reel/DM5OZtptNoS/?igsh=MTA3djBvYnRocG5ydg%3D%3D",
  },
  {
    id: 3,
    title: "Bandstand Pantry",
    category: "Collaboration",
    video: "/projects/Swiggy India x TBP Collaboration.mp4",
    metric: "Viral Campaign",
    posts: "",
    icon: "🤝",
    instagramLink: "https://www.instagram.com/reel/C8tY59JouWe/?igsh=MWVqNGZ2dDhtYWY4dA%3D%3D",
  },
  {
    id: 4,
    title: "Nostalgia Bakery",
    category: "Foot Traffic",
    video: "/projects/Nostalgia Bakery _ 25_ Increased Footfall.mp4",
    metric: "25% Footfall Up",
    posts: "in 3 Posts",
    icon: "📈",
    instagramLink: "https://www.instagram.com/reel/DIN7z4fIKPp/?igsh=eWx5andsaDY3ejY5",
  },
  {
    id: 5,
    title: "Bandstand Pantry",
    category: "Engagement",
    video: "/projects/The Bandstand Pantry _ 2M+ Views.mp4",
    metric: "2M+ Views",
    posts: "in 4 Posts",
    icon: "👁",
    instagramLink: "https://www.instagram.com/reel/DMUe8UYI66z/?igsh=c2Z0YmVlZWo0bnNy",
  },
  {
    id: 6,
    title: "Bandstand Pantry",
    category: "Viral Marketing",
    video: "/projects/The Bandstand Pantry _ 2M+ Views.mp4",
    metric: "2M+ Views",
    posts: "in 5 Posts",
    icon: "👁",
    instagramLink: "https://www.instagram.com/reel/Cy52PVJM7ri/?igsh=MTZtajJueTNmYmQzbg==",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnailLoaded, setThumbnailLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  // Preload video thumbnail (first frame) on mount
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const loadThumbnail = () => {
      // Set video to load first frame
      video.currentTime = 0;
      video.muted = true;
      
      const handleLoadedData = () => {
        // Seek to first frame to show as thumbnail
        video.currentTime = 0.1;
        setThumbnailLoaded(true);
      };
      
      video.addEventListener('loadeddata', handleLoadedData, { once: true });
      video.addEventListener('loadedmetadata', () => {
        video.currentTime = 0.1;
      }, { once: true });
      
      // Force load
      video.load();
    };

    // Small delay to ensure video element is ready
    const timer = setTimeout(loadThumbnail, 100);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="flex flex-col">
        {/* Video Section - YouTube Shorts Style */}
        <motion.div
          className="relative overflow-hidden rounded-2xl aspect-[9/16] cursor-pointer bg-gray-900 w-full"
          style={{
            rotateX: isHovered ? rotateX : 0,
            rotateY: isHovered ? rotateY : 0,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          onClick={() => window.open(project.instagramLink, '_blank')}
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
              onLoadedMetadata={() => {
                if (videoRef.current) {
                  videoRef.current.currentTime = 0.1;
                }
              }}
            >
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

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

          {/* Video Info Overlay - Reference Style */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
            <div className="flex items-end justify-between">
              <div className="flex-1">
                <h3 
                  className="text-white font-semibold text-xl mb-2"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-gray-300 text-sm mb-1"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {project.category}
                </p>
                <p 
                  className="text-white text-lg font-semibold"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {project.posts ? (project.posts.includes('in ') ? `${project.metric} ${project.posts}` : `${project.metric} in ${project.posts}`) : project.metric}
                </p>
              </div>
              <div className="ml-4">
                <button 
                  className="w-12 h-12 bg-[#e33c25] rounded-full flex items-center justify-center hover:bg-[#c42d1a] transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.instagramLink, '_blank');
                  }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

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

      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Preload all videos when component mounts and load first frame as thumbnail
  useEffect(() => {
    projects.forEach((project) => {
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.src = project.video;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      
      // Load first frame as thumbnail
      video.addEventListener('loadedmetadata', () => {
        video.currentTime = 0.1;
      }, { once: true });
      
      video.load(); // Force loading
    });
  }, []);

  const scrollToProject = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 320; // w-80 = 320px
      const gap = 24; // gap-6 = 24px
      const scrollPosition = index * (cardWidth + gap);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    scrollToProject(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(projects.length - 1, currentIndex + 1);
    scrollToProject(newIndex);
  };

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
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
          {/* Navigation Arrows */}
          <motion.button
            onClick={scrollLeft}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#e33c25] hover:border-[#e33c25] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={scrollRight}
            disabled={currentIndex === projects.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:text-[#e33c25] hover:border-[#e33c25] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 scrollbar-hide"
          >
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
                onClick={() => scrollToProject(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#e33c25]' : 'bg-gray-300 hover:bg-[#e33c25]'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
