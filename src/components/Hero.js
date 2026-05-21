"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NeedleThread from "./NeedleThread";

const cyclingWords = ["silhouettes", "identities", "garments", "elegance", "legacy"];

// High-fidelity performance counter using requestAnimationFrame
const StatCounter = ({ value, duration = 1.6, suffix = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseFloat(value);
    if (isNaN(end)) return;
    
    const startTime = performance.now();
    
    const updateCount = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Quadratic ease out
      const easeProgress = progress * (2 - progress);
      const current = start + easeProgress * (end - start);
      
      setCount(current);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [value, duration]);

  const isDecimal = value.includes('.');
  const formatted = isDecimal ? count.toFixed(1) : Math.floor(count);
  
  return <span>{formatted}{suffix}</span>;
};

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  // Cycle keywords every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative flex min-h-[80vh] max-h-[780px] items-center overflow-hidden bg-bg px-6 pt-20 pb-8 sm:pt-24 sm:pb-10 md:pt-24 md:pb-10 md:px-16 lg:pt-28 lg:pb-12 lg:px-24">
      
      {/* --- ATMOSPHERIC AMBIENT GLOW MESHES --- */}
      
      {/* 1. Large Top-Left Corner Glow (Flowing behind brand logo/nav) */}
      <div 
        className="pointer-events-none absolute -top-60 -left-60 h-[500px] w-[500px] rounded-full bg-accent/[0.09] blur-[130px] -z-10" 
        aria-hidden="true"
      />

      {/* 2. Deep Bottom-Left Base Glow (Flowing softly behind stats and CTA columns) */}
      <div 
        className="pointer-events-none absolute -bottom-80 left-[10%] h-[600px] w-[600px] rounded-full bg-accent/[0.06] blur-[140px] -z-10" 
        aria-hidden="true"
      />

      {/* 3. Micro-ambient glow directly behind the Headline copy to highlight the stitch text */}
      <div 
        className="pointer-events-none absolute left-[5%] top-[35%] w-[450px] h-[250px] rounded-full bg-accent/[0.03] blur-[100px] -z-10" 
        aria-hidden="true"
      />

      {/* items-start grid: Top of text and top of image now align perfectly */}
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start z-10">
        
        {/* Left Column: Sharp Clear Copy & Counters */}
        <motion.div
          className="md:col-span-7 flex flex-col gap-4 md:gap-5 text-left relative pt-1 md:pt-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="font-display text-label font-medium uppercase tracking-[0.25em] text-accent"
            variants={itemVariants}
          >
            Bespoke Tailoring Studio
          </motion.p>

          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-h1 font-normal text-text-main leading-tight"
            variants={itemVariants}
          >
            Crafted{" "}
            {/* Dynamic cycling word wrapped in the running stitch underline */}
            <span className="inline-block min-w-[140px] text-accent">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="inline-block"
                >
                  <NeedleThread>{cyclingWords[wordIndex]}</NeedleThread>
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            for every story.
          </motion.h1>

          <motion.p
            className="max-w-lg font-body text-sm sm:text-base font-light leading-relaxed text-text-muted"
            variants={itemVariants}
          >
            From masterfully cut suits to couture bridal gowns and heritage traditional wear, 
            we handcraft custom garments tailored precisely to your silhouette, character, and story.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            className="flex flex-wrap gap-3 sm:gap-4 mt-1 sm:mt-2"
            variants={itemVariants}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center border border-accent text-accent font-body text-ui tracking-widest uppercase px-6 py-3 overflow-hidden transition-all duration-300 hover:bg-accent hover:text-bg hover:shadow-[0_0_20px_rgba(50,205,50,0.3)] cursor-pointer"
            >
              Commission a Piece
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border border-text-main/10 text-text-muted font-body text-ui tracking-widest uppercase px-6 py-3 transition-all duration-300 hover:border-accent hover:text-text-main cursor-pointer"
            >
              Explore Gallery
            </a>
          </motion.div>

          {/* Upgraded Stats Section with Hover and Counters */}
          <motion.div
            className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 pt-4 sm:mt-5 sm:pt-5 border-t border-text-main/10 max-w-lg"
            variants={itemVariants}
          >
            <div className="group/stat bg-surface/5 border border-text-main/5 px-2.5 py-3 sm:px-4 sm:py-3 rounded-sm hover:border-accent/20 hover:bg-surface/20 transition-all duration-300">
              <div className="font-display text-xl sm:text-2xl md:text-h2 text-accent font-medium leading-none transition-transform duration-300 group-hover/stat:scale-[1.03]">
                <StatCounter value="12" suffix="+" />
              </div>
              <div className="font-body text-[9px] sm:text-[10px] text-text-muted uppercase tracking-wider mt-1.5 leading-none">
                Years of Craft
              </div>
            </div>
            <div className="group/stat bg-surface/5 border border-text-main/5 px-2.5 py-3 sm:px-4 sm:py-3 rounded-sm hover:border-accent/20 hover:bg-surface/20 transition-all duration-300">
              <div className="font-display text-xl sm:text-2xl md:text-h2 text-accent font-medium leading-none transition-transform duration-300 group-hover/stat:scale-[1.03]">
                <StatCounter value="100" suffix="%" />
              </div>
              <div className="font-body text-[9px] sm:text-[10px] text-text-muted uppercase tracking-wider mt-1.5 leading-none">
                Bespoke Fit
              </div>
            </div>
            <div className="group/stat bg-surface/5 border border-text-main/5 px-2.5 py-3 sm:px-4 sm:py-3 rounded-sm hover:border-accent/20 hover:bg-surface/20 transition-all duration-300">
              <div className="font-display text-xl sm:text-2xl md:text-h2 text-accent font-medium leading-none transition-transform duration-300 group-hover/stat:scale-[1.03]">
                <StatCounter value="4.9" suffix="★" />
              </div>
              <div className="font-body text-[9px] sm:text-[10px] text-text-muted uppercase tracking-wider mt-1.5 leading-none">
                Patron Rating
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Original Color Photo */}
        <div className="md:col-span-5 relative flex items-start justify-center w-full z-10 pt-2 md:pt-2">
          
          {/* Soft radial glow behind the image */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190%] aspect-square rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(50,205,50,0.28) 0%, rgba(50,205,50,0.14) 40%, transparent 70%)",
              filter: "blur(55px)"
            }}
            aria-hidden="true"
          />

          {/* Original Color Image */}
          <motion.div
            className="relative w-full max-w-[280px] sm:max-w-[310px] md:max-w-[300px] lg:max-w-[340px] aspect-[3/4] overflow-hidden group"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/Hero img.png"
              alt="Àṣàkẹ́ Atelier Portrait"
              className="w-full h-full object-cover scale-[1.02] group-hover:scale-105 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
