"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImagePreloaderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  onLoad?: () => void;
}

export function ImagePreloader({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false,
  onLoad 
}: ImagePreloaderProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => {
      setIsLoaded(true);
      onLoad?.();
    };
    img.onerror = () => {
      setHasError(true);
    };
    img.src = src;
  }, [src, onLoad]);

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-400 text-sm">Failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-[#e33c25] rounded-full animate-spin" />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        priority={priority}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
