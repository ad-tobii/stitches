"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Bespoke Tailoring",
    description: "Every suit, coat, and shirt is cut from a fresh drafting board, mapped uniquely to your body's geometry with hand-stitched canvasing.",
    image: "/services/Bespoke.png",
    price: "From $1,200",
  },
  {
    title: "Heritage Traditional",
    description: "Honoring cultural legacy with premium hand-woven fabrics, custom embroidery, and perfectly structured traditional garments including luxury Agbadas.",
    image: "/services/traditional.png",
    price: "From $1,500",
  },
  {
    title: "Couture & Bridal",
    description: "Exquisite wedding gowns and evening wear crafted through rigorous drape trials, delicate hand embroidery, and premium silks to wear your love story.",
    image: "/services/couture.png",
    price: "From $2,400",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="services" className="py-24 px-6 md:px-16 lg:px-24 bg-bg">
      <div className="max-w-6xl mx-auto">
        <p className="font-display text-label font-medium uppercase tracking-[0.25em] text-accent mb-4">
          OUR SERVICES
        </p>
        <h2 className="font-display text-h1 font-normal text-text-main mb-12 leading-tight max-w-xl">
          What We Offer
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group flex flex-col bg-surface border border-text-main/10 rounded-sm overflow-hidden hover:border-accent/25 transition-colors duration-300"
              variants={cardVariants}
            >
              {/* Card Image Container: Perfect for transparent mannequins */}
              <div className="w-full h-80 overflow-hidden relative bg-[#0a0b0c] flex items-center justify-center pt-8 pb-4">
                {/* Micro-ambient radial glow behind transparent mannequin */}
                <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.04] to-transparent opacity-60 pointer-events-none" />
                <div className="absolute w-40 h-40 rounded-full bg-accent/[0.03] blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full object-contain relative z-10 filter brightness-[1.05] contrast-[1.05] group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Card Content */}
              <div className="p-8 flex flex-col flex-grow gap-4 bg-surface">
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="font-display text-h3 font-medium text-text-main group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <span className="font-body text-[11px] font-medium tracking-wider uppercase text-text-muted">
                    {service.price}
                  </span>
                </div>
                
                <p className="font-body text-sm font-light text-text-muted leading-relaxed flex-grow">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-4 self-start border border-accent text-accent font-body text-ui tracking-widest uppercase px-6 py-2.5 hover:bg-accent hover:text-bg hover:shadow-[0_0_16px_rgba(50,205,50,0.2)] transition-all duration-300 cursor-pointer"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
