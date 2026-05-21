"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "Àṣàkẹ́ doesn't just make clothing; they craft a physical representation of confidence. My bespoke velvet Agbada was the centerpiece of our heritage exhibition. The drape is heavy, luxurious, and perfectly proportioned. Truly mastercraft.",
    name: "Adewale Adeleke",
    stars: 5,
    role: "Art Curator",
  },
  {
    quote: "The consultation alone was worth the trip. The cutters spent nearly an hour understanding my posture and walk before drawing a single chalk mark. The double-breasted charcoal suit fits like a second skin — a completely weightless comfort.",
    name: "Marcus Vance",
    stars: 5,
    role: "Executive Director",
  },
  {
    quote: "Finding high-quality, structured bespoke womenswear is rare. Àṣàkẹ́ drafted a magnificent double-breasted ivory pantsuit that feels empowering and exceptionally refined. It commands the room. Highly recommend the process.",
    name: "Dr. Chioma Nwachukwu",
    stars: 5,
    role: "Surgeon & Philanthropist",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Auto-advance logic
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // SVG for filled star
  const StarIcon = () => (
    <svg className="w-4 h-4 text-accent fill-current" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  return (
    <section
      className="py-24 px-6 md:px-16 lg:px-24 bg-bg overflow-hidden border-t border-text-main/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-4xl mx-auto">
        <p className="font-display text-label font-medium uppercase tracking-[0.25em] text-accent mb-4">
          PATRON VOICE
        </p>
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-display text-h1 font-normal text-text-main leading-tight">
            Stories of Fit
          </h2>
          
          {/* Arrow Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              type="button"
              className="w-10 h-10 flex items-center justify-center border border-text-main/10 text-text-muted hover:text-text-main hover:border-accent/40 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              type="button"
              className="w-10 h-10 flex items-center justify-center border border-text-main/10 text-text-muted hover:text-text-main hover:border-accent/40 rounded-full transition-colors duration-200 cursor-pointer"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Carousel Card with transitions */}
        <div className="relative min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full bg-surface border border-text-main/10 rounded-sm p-8 md:p-12 hover:border-accent/20 transition-all duration-300 relative"
            >
              {/* Stars */}
              <div className="flex gap-1 text-sm">
                {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote text inside card */}
              <blockquote className="font-display text-xl sm:text-2xl font-light italic text-text-main leading-relaxed mt-6 md:pr-12">
                “{testimonials[activeIndex].quote}”
              </blockquote>

              {/* Client meta details */}
              <div className="mt-8 flex flex-col gap-1">
                <cite className="not-italic font-body text-sm font-medium text-text-main">
                  {testimonials[activeIndex].name}
                </cite>
                <span className="font-body text-xs text-text-muted uppercase tracking-wider">
                  {testimonials[activeIndex].role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicator dots */}
        <div className="flex gap-3 justify-center mt-10">
          {testimonials.map((_, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={index}
                type="button"
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                  isActive ? "bg-accent scale-110 w-6" : "bg-text-main/20 hover:bg-text-main/40"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
