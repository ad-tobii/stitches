"use client";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Instagram", href: "#", icon: "IG" },
  { label: "Pinterest", href: "#", icon: "PN" },
  { label: "Twitter", href: "#", icon: "TW" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-text-main/10 py-12 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col">
        
        {/* Row 1: Logo, Nav, Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8">
          
          {/* Logo */}
          <a
            href="#home"
            className="font-display text-2xl font-normal text-text-main tracking-wide hover:text-accent transition-colors duration-200"
          >
            Àṣàkẹ́
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-normal text-text-muted hover:text-text-main transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="font-body text-xs text-text-muted hover:text-accent border border-text-main/10 hover:border-accent/40 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Row 2: Divider and Copyright Info */}
        <div className="border-t border-text-main/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <span className="font-body text-xs text-text-muted/60">
            © {new Date().getFullYear()} Àṣàkẹ́ Atelier. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="font-body text-[10px] text-text-muted/40 hover:text-accent transition-colors duration-200">
              PRIVACY POLICY
            </a>
            <a href="#" className="font-body text-[10px] text-text-muted/40 hover:text-accent transition-colors duration-200">
              TERMS OF SERVICE
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
