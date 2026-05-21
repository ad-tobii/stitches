"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Men", "Women", "Suits", "Bridal"];

const items = [
  {
    id: 1,
    category: "Men",
    title: "Double-Breasted Wool Suit",
    subtitle: "Obsidian Slate edition",
    image: "/gallery/Men 1.jpg",
    fabric: "Holland & Sherry Super 150s Merino Wool",
    hours: "48 Hours",
    narrative: "An architectural double-breasted silhouette featuring a sharp peak lapel, hand-rolled canvas chest, and a natural drop shoulder. Tailored for command and presence.",
  },
  {
    id: 2,
    category: "Men",
    title: "Bespoke Cashmere Overcoat",
    subtitle: "Hand-finished tailored layer",
    image: "/gallery/Men 2.jpg",
    fabric: "Loro Piana 100% Pure Mongolian Cashmere",
    hours: "64 Hours",
    narrative: "A heavyweight mastercoat tailored with unlined raw-edge finishing, hand-stitched pick detailing, and deep storm welt pockets. Built to endure generations.",
  },
  {
    id: 3,
    category: "Men",
    title: "Classic Velvet Tuxedo",
    subtitle: "Peak lapel silk lining",
    image: "/gallery/Men 3.jpg",
    fabric: "Italian Silk Velvet & Grosgrain Silk Accents",
    hours: "52 Hours",
    narrative: "A midnight obsidian formal tuxedo boasting high-lustre silk-satin peak lapels, hand-finished silk piping, and a custom corset waist adjuster.",
  },
  {
    id: 4,
    category: "Women",
    title: "Ivory Structured Pantsuit",
    subtitle: "Drape fit tailoring",
    image: "/gallery/Women 1.jpg",
    fabric: "Heavyweight Silk Crepe de Chine",
    hours: "44 Hours",
    narrative: "A sharp, sculptural blazer paired with fluid high-waisted wide-leg trousers. Featuring concealed front plackets and handmade silk-bound buttonholes.",
  },
  {
    id: 5,
    category: "Women",
    title: "Silk Draped Evening Gown",
    subtitle: "Premium couture details",
    image: "/gallery/Women 2.jpg",
    fabric: "100% Organic Mulberry Silk Satin",
    hours: "70 Hours",
    narrative: "A fluid, asymmetrical gown hand-draped on the stand over a customized structural foundation. Features a low cowl back and a soft sweeping train.",
  },
  {
    id: 6,
    category: "Women",
    title: "Sleek Atelier Blazer",
    subtitle: "Single-breasted architectural fit",
    image: "/gallery/Women 3.jpg",
    fabric: "Premium Escorial Wool & Satin Lining",
    hours: "38 Hours",
    narrative: "A modern classic single-breasted blazer with clean-cut minimalist lines, working surgeon cuffs, and a sharp horn-button closure.",
  },
  {
    id: 7,
    category: "Women",
    title: "Architectural Trench Dress",
    subtitle: "Bespoke cotton twill",
    image: "/gallery/Women 4.jpg",
    fabric: "Long-Staple Egyptian Cotton Gabardine",
    hours: "46 Hours",
    narrative: "A tailored double-breasted dress inspired by heritage outerwear. Featuring hand-wrapped leather buckles and a wide structural waist belt.",
  },
  {
    id: 8,
    category: "Women",
    title: "Minimalist Linen Gown",
    subtitle: "Atelier summer bespoke line",
    image: "/gallery/Women 5.jpg",
    fabric: "Hand-Loomed Belgian Flax Linen",
    hours: "32 Hours",
    narrative: "An airy, minimalist sleeveless gown with a quiet boat neck and structured side pleats. Designed for effortless resort elegance.",
  },
  {
    id: 9,
    category: "Suits",
    title: "Obsidian Classic Suit",
    subtitle: "Three-piece formal commission",
    image: "/gallery/Suit 1.jpg",
    fabric: "Dormeuil Super 130s Wool & Silk Blend",
    hours: "42 Hours",
    narrative: "A timeless three-piece suit designed with a classic two-button front, double vents, and a matching silk-backed waistcoat.",
  },
  {
    id: 10,
    category: "Suits",
    title: "Navy Striped Double-Breasted",
    subtitle: "Premium Italian chalkstripe wool",
    image: "/gallery/Suit 2.jpg",
    fabric: "Fox Brothers Somerset English Chalkstripe Wool",
    hours: "48 Hours",
    narrative: "A bold heritage chalkstripe double-breasted power suit featuring a traditional 6x2 button configuration, high armholes, and structural canvasing.",
  },
  {
    id: 11,
    category: "Suits",
    title: "Bronze Patron Blazer",
    subtitle: "Bespoke brass button details",
    image: "/gallery/Suit 3.jpg",
    fabric: "Pure Irish Linen & Vintage Brass Hardware",
    hours: "36 Hours",
    narrative: "A warm bronze seasonal blazer detailed with authentic hand-burnished vintage brass buttons, patch pockets, and a casual unconstructed shoulder.",
  },
  {
    id: 12,
    category: "Bridal",
    title: "Mikado Silk Wedding Gown",
    subtitle: "Atelier custom structured corset",
    image: "/gallery/Bridal 1.jpg",
    fabric: "Luxury Japanese Mikado Silk & French Tulle",
    hours: "95 Hours",
    narrative: "A dramatic ballgown with an architectural pleated bodice, a built-in waist-defining corset, and a spectacular hand-finished chapel train.",
  },
  {
    id: 13,
    category: "Bridal",
    title: "Intricate Lace Reception Gown",
    subtitle: "Hand-guided silk floral appliques",
    image: "/gallery/Bridal 2.jpg",
    fabric: "Solstiss French Lace & Organza Appliques",
    hours: "110 Hours",
    narrative: "A fitted column dress featuring hand-cut lace panels, individually stitched floral appliques, and delicate micro-bead embroidery.",
  },
  {
    id: 14,
    category: "Bridal",
    title: "Bespoke Velvet Groom Tuxedo",
    subtitle: "Deep wine silk collar",
    image: "/gallery/Bridal 3.jpg",
    fabric: "Plush Cotton Velvet & Grosgrain Lapels",
    hours: "56 Hours",
    narrative: "A rich burgundy velvet tuxedo jacket detailed with wide grosgrain shawl lapels, silk-covered buttons, and matching slim-cut trousers.",
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedItem]);

  const filteredItems =
    activeTab === "All"
      ? items
      : items.filter((item) => item.category === activeTab);

  const isAllTab = activeTab === "All";

  const handleInquiry = () => {
    if (!selectedItem) return;
    const title = selectedItem.title;
    const category = selectedItem.category;
    setSelectedItem(null);
    
    // Dispatch custom event to prefill the inquiry message in the Contact component
    const event = new CustomEvent("inquiry-select", {
      detail: { title, category },
    });
    window.dispatchEvent(event);

    // Smooth scroll to the contact form
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        const nameInput = document.getElementById("name");
        if (nameInput) {
          nameInput.focus();
        }
      }
    }, 100);
  };

  return (
    <section id="portfolio" className="py-24 px-6 md:px-16 lg:px-24 bg-bg relative">
      <div className="max-w-6xl mx-auto">
        <p className="font-display text-label font-medium uppercase tracking-[0.25em] text-accent mb-4">
          THE ATELIER GALLERY
        </p>
        <h2 className="font-display text-h1 font-normal text-text-main mb-8 leading-tight">
          Selected Creations
        </h2>

        {/* Tab Navigation */}
        <div className="flex gap-8 border-b border-text-main/10 mb-12 overflow-x-auto scrollbar-none pb-0.5">
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`font-body text-sm tracking-widest uppercase pb-3 cursor-pointer transition-all duration-200 relative ${
                  isActive ? "text-text-main" : "text-text-muted hover:text-text-main"
                }`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
                {isActive && (
                  <motion.span
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Conditional Layout Display */}
        {isAllTab ? (
          /* "All" Tab: Dynamic Masonry Grid (CSS Columns for organic aspect ratios) */
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance] w-full">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ scale: 1.04, y: -4, zIndex: 30 }}
                  onClick={() => setSelectedItem(item)}
                  className="break-inside-avoid mb-4 group relative w-full bg-surface/50 border border-text-main/10 rounded-sm overflow-hidden cursor-pointer hover:border-accent/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-300 z-10"
                >
                  <div className="absolute inset-0 bg-bg/20 z-10 transition-colors duration-300 group-hover:bg-bg/5" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover rounded-none grayscale contrast-[1.03] group-hover:scale-[1.01] group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border border-transparent group-hover:border-accent/20 group-hover:ring-1 group-hover:ring-accent/20 transition-all duration-300 z-20 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-bg via-bg/90 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 flex flex-col gap-1">
                    <span className="font-body text-[9px] font-medium tracking-[0.2em] text-accent uppercase">
                      {item.category} Collection
                    </span>
                    <h4 className="font-display text-lg font-medium text-text-main leading-tight">
                      {item.title}
                    </h4>
                    <p className="font-body text-[11px] font-light text-text-muted">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Category Tabs: Structured Uniform Grid (Structured column layout for sleek alignment) */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ scale: 1.04, y: -4, zIndex: 30 }}
                  onClick={() => setSelectedItem(item)}
                  className="group relative w-full aspect-[3/4] bg-surface/50 border border-text-main/10 rounded-sm overflow-hidden cursor-pointer hover:border-accent/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-300 z-10"
                >
                  <div className="absolute inset-0 bg-bg/20 z-10 transition-colors duration-300 group-hover:bg-bg/5" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-none grayscale contrast-[1.03] group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 border border-transparent group-hover:border-accent/20 group-hover:ring-1 group-hover:ring-accent/20 transition-all duration-300 z-20 pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-bg via-bg/90 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 flex flex-col gap-1">
                    <span className="font-body text-[9px] font-medium tracking-[0.2em] text-accent uppercase">
                      {item.category} Collection
                    </span>
                    <h4 className="font-display text-lg font-medium text-text-main leading-tight">
                      {item.title}
                    </h4>
                    <p className="font-body text-[11px] font-light text-text-muted">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Interactive "Atelier Detail" Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:p-12 bg-bg/85 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
              className="relative w-full max-w-4xl h-auto max-h-[85vh] md:h-[500px] md:max-h-[80vh] bg-surface/90 backdrop-blur-2xl border border-text-main/15 rounded-md shadow-2xl overflow-hidden flex flex-col md:grid md:grid-cols-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-50 text-text-main/70 hover:text-accent bg-bg/60 backdrop-blur-md border border-text-main/10 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105"
                aria-label="Close details"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Left Side: High-res Crop Image */}
              <div className="relative md:col-span-5 h-[200px] md:h-full bg-bg/50">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-bg/25 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Side: Atelier Specification Card */}
              <div className="md:col-span-7 h-auto md:h-full overflow-y-auto p-6 md:p-8 flex flex-col justify-start gap-4 bg-surface/50">
                <div className="flex flex-col">
                  {/* Category & Title */}
                  <span className="font-body text-[10px] font-semibold tracking-[0.2em] text-accent uppercase mb-2 block">
                    {selectedItem.category} Collection
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-normal text-text-main mb-2 leading-tight">
                    {selectedItem.title}
                  </h3>
                  <p className="font-body text-xs font-light text-text-muted mb-4 italic">
                    {selectedItem.subtitle}
                  </p>

                  {/* Craftsmanship Spec Cards */}
                  <div className="flex flex-col gap-5 border-t border-text-main/10 pt-4">
                    {/* Fabric Origin */}
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v18M8 5h8M8 19h8M6 9h12M6 15h12" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body text-[10px] font-medium uppercase tracking-[0.15em] text-accent mb-0.5">
                          Fabric Origin
                        </span>
                        <span className="font-body text-sm text-text-main font-light leading-relaxed">
                          {selectedItem.fabric}
                        </span>
                      </div>
                    </div>

                    {/* Hours of Handcraft */}
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body text-[10px] font-medium uppercase tracking-[0.15em] text-accent mb-0.5">
                          Craftsmanship Time
                        </span>
                        <span className="font-body text-sm text-text-main font-light leading-relaxed">
                          {selectedItem.hours} of Bespoke Handcraft
                        </span>
                      </div>
                    </div>

                    {/* Design Narrative */}
                    <div className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full border border-accent/20 bg-accent/5 flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-body text-[10px] font-medium uppercase tracking-[0.15em] text-accent mb-0.5">
                          Design Narrative
                        </span>
                        <p className="font-body text-sm text-text-muted font-light leading-relaxed pr-2">
                          {selectedItem.narrative}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
