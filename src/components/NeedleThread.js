"use client";

import { motion } from "framer-motion";

export default function NeedleThread({ children }) {
  // Path for the wavy running stitch line
  const pathD = "M 0 8 C 25 2, 35 14, 60 8 C 85 2, 95 14, 120 8 C 145 2, 155 14, 180 8 C 190 5, 195 7, 200 8";

  // Framer Motion animation variants
  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  return (
    <span className="relative inline-block text-accent">
      <span className="relative z-10 font-normal italic pr-1">{children}</span>
      <svg
        className="absolute -bottom-2.5 left-0 w-full overflow-visible"
        viewBox="0 0 200 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Animated Dashed Running Stitch Thread */}
        <motion.path
          d={pathD}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="6, 5"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </span>
  );
}
