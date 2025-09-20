"use client";

import Link from "next/link";
import { personalInfo } from "@/data/site";
import { useRef, useState, useEffect } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [canPlayAudio, setCanPlayAudio] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const onInteract = () => setCanPlayAudio(true);
    window.addEventListener("pointerdown", onInteract, { once: true });
    return () => window.removeEventListener("pointerdown", onInteract);
  }, []);

  const handleUnmute = async () => {
    if (!videoRef.current) return;
    try {
      videoRef.current.muted = false;
      await videoRef.current.play();
      setIsMuted(false);
    } catch {
      // Autoplay with sound may require another gesture
    }
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* High-quality video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-40 dark:opacity-50' : 'opacity-0'
          }`}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          onCanPlay={handleVideoLoad}
          src="/hero.mp4"
          poster="/hero-poster.jpg"
        />
        
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/60 dark:from-black/70 dark:via-black/40 dark:to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)] animate-pulse" />
        </div>
      </div>

      {/* Premium content with enhanced typography */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-32 text-center">
        <div className="space-y-8">
          {/* Greeting with animation */}
          <div className="space-y-2">
            <p className="text-lg sm:text-xl text-white/90 font-light tracking-wide animate-fade-in">
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent animate-slide-up">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-light tracking-wide animate-slide-up-delay">
              Full Stack Developer • AI Enthusiast • Cybersecurity Learner
            </p>
          </div>

          {/* Enhanced summary */}
          <p className="max-w-4xl mx-auto text-lg sm:text-xl text-white/85 leading-relaxed font-light animate-fade-in-delay">
            {personalInfo.summary}
          </p>

          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-delay-2">
            <Link 
              href="#projects" 
              className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <a 
              href={personalInfo.resumeUrl} 
              className="group relative px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10 backdrop-blur-sm" 
              download
            >
              <span className="relative z-10">Download Resume</span>
            </a>
            
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="group relative px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:border-white hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10">Contact Me</span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced unmute button */}
      {canPlayAudio && isMuted && (
        <div className="absolute bottom-8 left-8 z-20">
          <button
            onClick={handleUnmute}
            className="group relative px-6 py-3 bg-white/90 backdrop-blur-sm text-black font-medium rounded-full transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794L4.617 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.617l3.766-3.794a1 1 0 011.617.794zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
              </svg>
              Unmute Music
            </span>
          </button>
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
