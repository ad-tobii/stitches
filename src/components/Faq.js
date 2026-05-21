"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "What is the timeline for a bespoke commission?",
    answer: "A standard commission takes between 4 to 6 weeks. This allows for our meticulous three-stage fitting cycle: the initial postural measurement draft, the basted fitting (where the suit is loosely stitched for balance), and the final drape adjustments. Rush timelines can occasionally be accommodated upon special inquiry.",
  },
  {
    question: "How many fittings are required for a first-time patron?",
    answer: "First-time patrons typically undergo three fittings. The first is for drafting your posture and geometry, the second is the basted fitting in our atelier, and the third is for fine-tuning shoulders, sleeve lengths, and hem breaks. For returning patrons, we store your paper patterns, meaning subsequent orders usually require only one final fitting.",
  },
  {
    question: "Can I bring my own fabric for a commission?",
    answer: "We source fabrics from the world's most prestigious mills and traditional hand-loomed master weavers. While we prefer working with our catalog to guarantee how the material responds to pressing and cutting, we do accept exceptional heirloom or highly specific client-provided fabrics subject to technical inspection.",
  },
  {
    question: "What cultural and traditional garments do you specialize in?",
    answer: "We specialize in high-end traditional Yoruba attire, including structure-lined velvet and damask Agbadas, custom-woven Aso Oke wrappers, caps (Fila), and modern linen Kaftans. All traditional items are enhanced with premium silk-thread embroidery crafted by hand.",
  },
  {
    question: "Do you accommodate international clients?",
    answer: "Yes, we regularly host international patrons. We offer initial virtual design consultations and fabric selection. Physical measurements can then be completed during our seasonal traveling tailor trunk shows, or via coordinate maps from pre-approved local tailors.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-16 lg:px-24 bg-bg border-t border-text-main/5">
      <div className="max-w-4xl mx-auto">
        <p className="font-display text-label font-medium uppercase tracking-[0.25em] text-accent mb-4">
          QUESTIONS & ANSWERS
        </p>
        <h2 className="font-display text-h1 font-normal text-text-main mb-12 leading-tight">
          Frequently Asked
        </h2>

        <div className="flex flex-col border-t border-text-main/10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-text-main/10 py-6 flex flex-col transition-all duration-300"
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  className="flex justify-between items-center w-full text-left cursor-pointer group"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <h3
                    className={`font-display text-xl md:text-2xl font-medium transition-colors duration-300 ${
                      isOpen ? "text-accent" : "text-text-main group-hover:text-accent/80"
                    }`}
                  >
                    {item.question}
                  </h3>
                  
                  {/* Rotating Arrow Icon */}
                  <span
                    className={`w-6 h-6 flex items-center justify-center border border-text-main/10 rounded-full text-text-muted transition-all duration-300 group-hover:border-accent/40 ${
                      isOpen ? "rotate-45 text-accent border-accent/40" : ""
                    }`}
                  >
                    ＋
                  </span>
                </button>

                {/* Animated Dropdown Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        marginTop: 16,
                        transition: { height: { duration: 0.3 }, opacity: { duration: 0.2, delay: 0.1 } },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                        transition: { height: { duration: 0.3 }, opacity: { duration: 0.15 } },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-base font-light leading-relaxed text-text-muted max-w-3xl">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
