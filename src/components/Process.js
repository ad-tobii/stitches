'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    body: 'We begin with a dialogue. We discuss your personal style, the occasion, styling requirements, silhouettes, and fabric preferences to sketch the creative direction.',
  },
  {
    number: '02',
    title: 'Measurements',
    body: "A meticulous drafting of your body's specific geometry. We record over thirty distinct points of fit, posture observations, and details to ensure a flawless drape.",
  },
  {
    number: '03',
    title: 'Fabric Selection',
    body: 'Explore a curated library of super-fine wools, silks, cottons, and bespoke hand-woven traditional fabrics. You choose every finishing detail, from buttons to linings.',
  },
  {
    number: '04',
    title: 'Production',
    body: 'Our master tailors translate the drafted paper patterns directly onto cloth. Hand-padded chest canvasing, rolled lapels, and precision sewing build the foundation.',
  },
  {
    number: '05',
    title: 'Fitting & Delivery',
    body: 'The moment of refinement. A basted fitting allows us to make micro-adjustments for perfect balance. Once perfected, your garment is delivered, ready to wear your story.',
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="bg-bg border-text-main/5 border-t px-6 py-24 md:px-16 lg:px-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-16 lg:grid-cols-12">
        {/* Left Side: Ambient Glow & Big Creative Image */}
        <div className="bg-surface border-text-main/10 relative aspect-[4/5] w-full overflow-hidden rounded-sm border lg:col-span-5 lg:h-full lg:aspect-auto">
          <div className="bg-accent/[0.08] absolute inset-0 -z-10 blur-3xl" />

          {/* Subtle overlay gradient */}
          <div className="from-bg absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent opacity-60" />

          <img
            src="/process.png"
            alt="Àṣàkẹ́ atelier process"
            className="h-full w-full object-cover contrast-[1.05] grayscale"
          />
        </div>

        {/* Right Side: Step Sequence */}
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="font-display text-label text-accent mb-4 font-medium uppercase tracking-[0.25em]">
            THE ATELIER PROCESS
          </p>
          <h2 className="font-display text-h1 text-text-main mb-10 font-normal leading-tight">
            How We Create
          </h2>

          <div className="relative flex flex-col">
            {/* Steps Timeline Line */}
            <div className="bg-text-main/10 absolute bottom-8 left-[31px] top-8 w-[1px]" />

            {steps.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  className="group relative flex cursor-pointer items-start gap-6 pb-8"
                  onMouseEnter={() => setActiveStep(idx)}
                  onClick={() => setActiveStep(idx)}
                >
                  {/* Step Number with active state opacity */}
                  <div className="bg-bg border-text-main/10 group-hover:border-accent/40 relative z-10 flex h-16 w-16 items-center justify-center rounded-full border transition-all duration-300 shrink-0">
                    <span
                      className={`font-display text-2xl font-normal transition-all duration-300 ${
                        isActive
                          ? 'text-accent scale-105 opacity-100'
                          : 'text-text-muted opacity-40 group-hover:opacity-80'
                      }`}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-grow select-none flex-col gap-2 pr-4 pt-2">
                    <h3
                      className={`font-body text-base font-semibold uppercase tracking-wider transition-colors duration-300 ${
                        isActive
                          ? 'text-accent'
                          : 'text-text-main group-hover:text-accent/80'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`font-body max-w-lg text-sm font-light leading-relaxed transition-all duration-500 ${
                        isActive ? 'text-text-main' : 'text-text-muted'
                      }`}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
