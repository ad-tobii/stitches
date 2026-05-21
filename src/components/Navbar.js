"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navSurface = isScrolled
    ? "bg-surface/80 border-text-main/10 backdrop-blur-xl"
    : "bg-transparent border-transparent";

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${navSurface}`}
    >
      <nav className="grid grid-cols-[1fr_auto] items-center px-6 py-3 md:px-16 lg:grid-cols-[1fr_auto_1fr]">
        <a
          href="#home"
          className="font-display text-2xl font-normal text-text-main transition-colors duration-200 hover:text-accent"
          aria-label="Àṣàkẹ́ home"
        >
          Àṣàkẹ́
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-normal text-text-muted transition-colors duration-200 hover:text-text-main"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-4 lg:flex">
          <a
            href="#contact"
            className="rounded-full border border-accent px-8 py-3 font-body text-ui font-medium uppercase tracking-widest text-accent transition-all duration-300 hover:bg-accent hover:text-bg hover:shadow-[0_0_24px_rgba(50,205,50,0.3)]"
          >
            Get In Touch
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-text-main/10 text-text-main transition-colors duration-200 hover:border-accent hover:text-accent lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="flex w-4 flex-col gap-1">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
        </button>
      </nav>

      <div
        className={`border-t border-text-main/10 bg-surface/90 px-6 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-normal text-text-muted transition-colors duration-200 hover:text-text-main"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="self-start rounded-full border border-accent px-8 py-3 font-body text-ui font-medium uppercase tracking-widest text-accent transition-all duration-300 hover:bg-accent hover:text-bg hover:shadow-[0_0_24px_rgba(50,205,50,0.3)]"
            onClick={() => setIsMenuOpen(false)}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </header>
  );
}
