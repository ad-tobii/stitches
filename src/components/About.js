"use client";

import { motion } from "framer-motion";

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-[80vh] bg-bg px-6 py-24 md:py-32 md:px-16 lg:px-24 border-t border-text-main/5 overflow-hidden"
    >
      {/* Background graphic */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-accent/[0.02] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* Left Column: Label and Major Statement */}
        <motion.div
          className="md:col-span-5 flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={textVariants}
        >
          <p className="font-display text-label font-medium uppercase tracking-[0.25em] text-accent">
            THE ATELIER PHILOSOPHY
          </p>
          <h2 className="font-display text-h1 font-normal text-text-main leading-tight">
             pampering <br />
            the chosen.
          </h2>
          
          {/* Poetic Yoruba background for Àṣàkẹ́ */}
          <p className="font-display text-2xl font-light italic text-text-muted leading-relaxed mt-4">
            "Àṣàkẹ́ — literally meaning one chosen to be carefully pampered, revered, and adorned."
          </p>
        </motion.div>

        {/* Right Column: Detailed Narrative and Quote */}
        <motion.div
          className="md:col-span-7 flex flex-col gap-8 text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }
            }
          }}
        >
          <div className="flex flex-col gap-6">
            <p className="font-body text-base font-light leading-relaxed text-text-muted">
              At the heart of Àṣàkẹ́ is an unyielding commitment to the slow art of tailoring. 
              We do not chase trends, nor do we compromise on standard. Each piece is born 
              from a silent dialogue between client, cloth, and craftsman — a collaborative 
              exercise in precision.
            </p>
            <p className="font-body text-base font-light leading-relaxed text-text-muted">
              Sourced from the finest mills across the globe and traditional hand-woven heritage 
              weavers, our materials are selected for their character, drape, and longevity. We believe 
              a garment is not merely clothing; it is a structural representation of your legacy, tailored 
              to last a lifetime.
            </p>
          </div>

          {/* Signature Quote styling */}
          <div className="relative border-l-2 border-accent pl-8 py-2 mt-4 bg-surface/30 pr-6 rounded-sm">
            <p className="font-display text-2xl font-light text-text-main leading-relaxed">
              “True luxury is not about being noticed. It is about the intimate comfort of a garment built specifically for you.”
            </p>
            <p className="font-display text-label font-medium uppercase tracking-[0.2em] text-accent mt-4">
              — HEAD CUTTER, ÀṢÀKẸ́
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
