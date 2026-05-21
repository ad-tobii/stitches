"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", contactInfo: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const handleInquiryEvent = (e) => {
      const { title, category } = e.detail;
      setFormState((prev) => ({
        ...prev,
        message: `I am interested in inquiring about the bespoke "${title}" (${category} Collection). Please arrange a consultation.`,
      }));
    };
    window.addEventListener("inquiry-select", handleInquiryEvent);
    return () => {
      window.removeEventListener("inquiry-select", handleInquiryEvent);
    };
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.contactInfo.trim() || !formState.message.trim()) {
      setErrorMsg("Please fill out all inquiries fields.");
      return;
    }

    setIsSubmitting(true);
    // Mimic API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", contactInfo: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24 bg-bg flex flex-col items-center text-center border-t border-text-main/5 relative">
      {/* Background glow behind form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/[0.04] blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-xl w-full z-10">
        <p className="font-display text-label font-medium uppercase tracking-[0.25em] text-accent mb-4">
          COMMISSION AN INQUIRY
        </p>
        <h2 className="font-display text-h1 font-normal text-text-main leading-tight mb-4">
          Ready to wear your story?
        </h2>
        <p className="font-body text-base font-light text-text-muted max-w-md mx-auto">
          Contact us today. A design consultant will be in touch to arrange your initial session.
        </p>

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-12 p-8 bg-surface border border-accent/20 rounded-sm text-left flex flex-col gap-4"
          >
            <h3 className="font-display text-2xl font-normal text-accent">Inquiry Received</h3>
            <p className="font-body text-sm font-light text-text-muted leading-relaxed">
              Thank you for choosing Àṣàkẹ́. A master cutter will reach out within the next business day to arrange your consultation schedule.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="font-body text-ui font-medium uppercase tracking-widest text-accent self-start hover:underline mt-2 cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full mt-12 text-left">
            {errorMsg && (
              <div className="text-red-500 font-body text-xs border border-red-500/20 bg-red-500/5 px-4 py-2.5 rounded-none">
                {errorMsg}
              </div>
            )}

            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-body text-xs text-text-muted uppercase tracking-widest">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="e.g. Samuel Adebayo"
                className="w-full bg-surface border border-text-main/10 text-text-main font-body text-sm px-4 py-3.5 rounded-none placeholder:text-text-muted/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                disabled={isSubmitting}
              />
            </div>

            {/* Email/Phone Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="contactInfo" className="font-body text-xs text-text-muted uppercase tracking-widest">
                Email or Phone Number
              </label>
              <input
                id="contactInfo"
                type="text"
                name="contactInfo"
                value={formState.contactInfo}
                onChange={handleChange}
                placeholder="e.g. samuel@example.com or +234..."
                className="w-full bg-surface border border-text-main/10 text-text-main font-body text-sm px-4 py-3.5 rounded-none placeholder:text-text-muted/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200"
                disabled={isSubmitting}
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-body text-xs text-text-muted uppercase tracking-widest">
                Commission Details / Occasion
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Describe your design goals, desired occasion, and silhouette preferences..."
                className="w-full bg-surface border border-text-main/10 text-text-main font-body text-sm px-4 py-3.5 rounded-none placeholder:text-text-muted/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all duration-200 resize-none min-h-[140px]"
                disabled={isSubmitting}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative inline-flex items-center justify-center border border-accent text-accent font-body text-ui tracking-widest uppercase py-4 mt-2 overflow-hidden transition-all duration-300 hover:bg-accent hover:text-bg hover:shadow-[0_0_24px_rgba(50,205,50,0.3)] disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? "Submitting Inquiry..." : "Submit Inquiry"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
