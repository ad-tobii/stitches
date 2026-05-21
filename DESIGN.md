# Design System — Tailoring & Fashion Design Website

> Dark luxury editorial. One bold accent. No clutter. Every element earns its place.

---

## Core Philosophy

This site lives in near-black. It doesn't shout — it pulls you in. The green accent is the only color that speaks loudly, so when it appears, it means something: a CTA, an active state, a decorative detail, a glow. Everything else is contrast, space, and type doing quiet work.

The aesthetic sits at the intersection of **luxury fashion editorial** and **modern creative studio**. Think Vogue masthead meets independent atelier. Serious about craft. Not trying to be a tech startup.

---

## Tailwind Config Extension

All custom values live here. Extend `tailwind.config.js` — do not hardcode hex values in classes.

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        bg:           '#08090a',
        surface:      '#111214',
        'text-main':  '#f5f5f0',
        'text-muted': '#7a7a75',
        accent:       '#32cd32',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['Outfit', 'sans-serif'],
      },
      fontSize: {
        'hero':  ['80px', { lineHeight: '1.1' }],
        'h1':    ['56px', { lineHeight: '1.15' }],
        'h2':    ['40px', { lineHeight: '1.2' }],
        'h3':    ['28px', { lineHeight: '1.3' }],
        'label': ['11px', { lineHeight: '1', letterSpacing: '0.25em' }],
        'ui':    ['14px', { lineHeight: '1' }],
      },
    },
  },
}
```

Google Fonts import in your root `index.html` or `layout.tsx`:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
```

---

## Color Usage Rules

| Token | Tailwind Class | Usage |
|---|---|---|
| `#08090a` | `bg-bg` / `text-bg` | Page background only |
| `#111214` | `bg-surface` | Cards, nav, inputs, section panels |
| `#f5f5f0` | `text-text-main` | All primary text |
| `#7a7a75` | `text-text-muted` | Captions, labels, meta, secondary copy |
| `#32cd32` | `text-accent` / `bg-accent` / `border-accent` | CTAs, active states, glows, section labels, decorative details |
| `rgba(50,205,50,0.12)` | `bg-accent/10` | Glow backgrounds, card hover fills |
| `rgba(245,245,240,0.08)` | `border-text-main/10` | Card borders, dividers |

- `bg-accent` as a large background fill: **never**
- `text-accent` in body copy: **never**
- Pure white (`white`) or pure black (`black`): **never**

---

## Typography

### Font Usage

| Role | Tailwind Classes |
|---|---|
| Hero headline | `font-display text-hero font-normal text-text-main` |
| Section headline (H1) | `font-display text-h1 font-normal text-text-main` |
| Sub-section headline (H2) | `font-display text-h2 font-normal text-text-main` |
| Card / Step title (H3) | `font-display text-h3 font-medium text-text-main` |
| Section label | `font-body text-label font-medium uppercase tracking-[0.25em] text-accent` |
| Body copy | `font-body text-base font-light leading-relaxed text-text-muted` |
| UI / Buttons / Nav | `font-body text-ui font-medium tracking-widest uppercase` |
| Captions / Footer | `font-body text-sm font-normal text-text-muted` |

### Rules

- Cormorant below `text-2xl`: never — it loses its character at small sizes
- Outfit above `font-semibold`: never — it gets clunky
- Cormorant italic (`italic font-light`) is available for pull quotes, accent phrases, decorative subtext
- Section labels always sit above the section headline with `mb-4`
- Body copy always `leading-relaxed` minimum

---

## Needle-Thread Underline

The signature detail. Used **exactly once** — on one keyword in the hero headline.

**What it is:** A custom SVG positioned beneath one word in the headline, styled to look like thread being sewn through the baseline. A small needle sits at the trailing end, as if mid-stitch.

**Implementation:**
```jsx
<span className="relative inline-block">
  the_word
  <svg
    className="absolute -bottom-2 left-0 w-full"
    viewBox="0 0 200 12"
    fill="none"
  >
    {/* Wavy thread line in accent color */}
    <path d="M0 6 Q25 2 50 6 Q75 10 100 6 Q125 2 150 6 Q175 10 200 6"
      stroke="#32cd32" strokeWidth="1.5" fill="none" />
    {/* Needle icon at trailing end */}
  </svg>
</span>
```

**Rules:**
- One word. One time. Entire site.
- The word must be the emotional core of the headline — the promise of the brand
- Never reused as a pattern anywhere else

---

## Ambient Glow (Bloom Effect)

Atmospheric depth. Makes images feel lit from within. Recurring motif — but restrained.

**Technique:** An absolutely positioned `div` with `rounded-full bg-accent/10 blur-3xl` placed behind the target element.

```jsx
<div className="relative">
  <div className="absolute inset-0 rounded-full bg-accent/10 blur-3xl -z-10" />
  <img ... />
</div>
```

| Location | Classes | Notes |
|---|---|---|
| Hero image (right side) | `bg-accent/10 blur-3xl` | Centered behind portrait, elliptical |
| Process section image | `bg-accent/[0.08] blur-2xl` | Softer, supporting role |
| CTA button hover | `hover:shadow-[0_0_24px_rgba(50,205,50,0.3)]` | Applied directly on button |
| Active gallery tab | `border-b-2 border-accent` | Underline only, no full glow |

- Two glows never compete in the same viewport — one is always dominant
- Glow on text: **never**
- Opacity ceiling: `bg-accent/[0.15]` — above that it reads like a bug

---

## Spacing

Stick to this scale across all sections:

| Use | Class |
|---|---|
| Micro gaps (icon-to-text) | `gap-1` / `p-1` |
| Tight internal | `gap-2` / `p-2` |
| Component internal padding | `p-4` |
| Between related elements | `gap-6` |
| Between grouped elements | `gap-10` |
| Section vertical padding | `py-16` |
| Major section breaks | `py-24` |
| Hero vertical padding | `py-32` |

---

## Component Patterns

### Navigation

```
Wrapper:       fixed top-0 w-full z-50
               bg-transparent → scroll → bg-surface border-b border-text-main/10
               transition-all duration-300 px-16 py-5 flex justify-between items-center

Logo:          font-display text-xl text-text-main

Nav links:     font-body text-sm text-text-muted
               hover:text-text-main transition-colors duration-200

CTA link:      border border-accent text-accent px-5 py-2
               font-body text-ui tracking-widest uppercase
               hover:bg-accent hover:text-bg transition-all duration-300
```

---

### Primary Button (CTA)

```
border border-accent text-accent
font-body text-ui tracking-widest uppercase
px-8 py-3
hover:bg-accent hover:text-bg
hover:shadow-[0_0_24px_rgba(50,205,50,0.3)]
transition-all duration-300 cursor-pointer
```

### Secondary Button (Ghost)

```
border border-text-main/10 text-text-muted
font-body text-ui tracking-widest uppercase
px-8 py-3
hover:border-accent hover:text-text-main
transition-all duration-300 cursor-pointer
```

---

### Cards (Services, Testimonials)

```
bg-surface border border-text-main/10 rounded-sm p-8
hover:border-accent/25
transition-colors duration-300
```

- No drop shadows — border color shift on hover is the pattern
- `rounded-sm` max — this is not a mobile app

---

### Section Label

```
font-body text-label font-medium uppercase tracking-[0.25em] text-accent mb-4
```

Always above the section headline. e.g. "OUR SERVICES" above "What We Offer."

---

### Dividers

```
border-t border-text-main/10
```

Used sparingly. If whitespace separates sections cleanly, skip it.

---

## Section-Specific Patterns

### Hero

```
Wrapper:    grid grid-cols-2 gap-16 items-center py-32 px-16 bg-bg min-h-screen

Left col:   flex flex-col gap-6

  Label:    font-body text-label font-medium uppercase tracking-[0.25em] text-accent

  Headline: font-display text-hero font-normal text-text-main
            (one keyword wrapped in needle-thread SVG span — see above)

  Subtext:  font-body text-base font-light leading-relaxed text-text-muted max-w-md

  CTA:      primary button pattern

  Metrics:  flex gap-10 mt-4
    Value:  font-display text-h2 text-accent font-medium
    Label:  font-body text-xs text-text-muted uppercase tracking-widest

Right col:  relative flex items-center justify-center
  Glow:     absolute inset-0 rounded-full bg-accent/10 blur-3xl -z-10
  Image:    relative z-10 w-full h-full object-cover
```

---

### Services Section

```
Wrapper:      py-24 px-16 bg-bg
Label:        section label pattern
Headline:     font-display text-h1 font-normal text-text-main mb-12

Grid:         grid grid-cols-3 gap-6

Card:         bg-surface border border-text-main/10 rounded-sm overflow-hidden
              hover:border-accent/25 transition-colors duration-300

  Image:      w-full h-56 object-cover

  Content:    p-6 flex flex-col gap-3
    Title:    font-display text-h3 font-medium text-text-main
    Body:     font-body text-sm font-light text-text-muted leading-relaxed
    Button:   primary button pattern — mt-4 self-start
              label: "Get In Touch"
```

---

### Gallery / Portfolio

```
Wrapper:      py-24 px-16 bg-bg
Label:        section label pattern
Headline:     font-display text-h1 font-normal text-text-main mb-8

Tabs:         flex gap-8 border-b border-text-main/10 mb-8
  Inactive:   font-body text-sm text-text-muted pb-3 cursor-pointer
              hover:text-text-main transition-colors duration-200
  Active:     text-text-main border-b-2 border-accent pb-3

Tab options:  All | Men | Women | Traditional | Bridal

Grid:         grid grid-cols-4 gap-2 (12 images total)

Image:        w-full aspect-square object-cover rounded-none
              hover:brightness-110 hover:ring-1 hover:ring-accent/20
              transition-all duration-200

Filter swap:  transition-opacity duration-200 — fade out, swap, fade in
```

---

### Process Section

```
Wrapper:    grid grid-cols-2 gap-16 items-start py-24 px-16 bg-bg

Left:       relative min-h-[600px]
  Glow:     absolute inset-0 bg-accent/[0.08] blur-2xl -z-10
  Image:    w-full h-full object-cover

Right:      flex flex-col
  Label:    section label pattern
  Headline: font-display text-h1 font-normal text-text-main mb-10

  Step:     flex gap-6 items-start pb-10 relative
    Number: font-display text-[64px] font-normal italic text-accent opacity-20 leading-none
            (hover/active: opacity-100)
    Title:  font-body text-base font-semibold text-text-main
            (hover/active: text-accent)
    Body:   font-body text-sm font-light text-text-muted leading-relaxed

  Connector line between steps:
            absolute left-[22px] top-16 bottom-0 w-px bg-text-main/10
```

Steps:
1. Consultation — Discuss style, occasion, and budget
2. Measurements — Get sized up
3. Fabric Selection — Pick your material
4. Production — We get to work
5. Fitting & Delivery — Final adjustments, then pick up

---

### Testimonials Carousel

```
Wrapper:  py-24 px-16 bg-bg overflow-hidden
Label:    section label pattern
Headline: font-display text-h1 font-normal text-text-main mb-12

Card:     bg-surface border border-text-main/10 rounded-sm p-8 mx-4

  Stars:  flex gap-1 text-sm text-accent (filled) / text-text-muted (empty)

  Quote:  font-body text-sm font-light italic text-text-muted leading-relaxed mt-4

  Name:   font-body text-sm font-medium text-text-main mt-6

Dots:     w-2 h-2 rounded-full bg-text-main/20 — active: bg-accent
          flex gap-2 justify-center mt-8

Arrows:   text-text-muted hover:text-text-main transition-colors duration-200

Behavior: auto-advances every 5s, pauses on hover
```

---

### Contact Section

```
Wrapper:    py-24 px-16 bg-bg flex flex-col items-center text-center

Headline:   font-display text-h1 font-normal text-text-main
            "Ready to wear your story?"

Subtext:    font-body text-base font-light text-text-muted max-w-md mt-4
            "Contact us today. We'll get in touch within minutes."

Form:       flex flex-col gap-4 w-full max-w-lg mt-10 text-left

Input:      w-full bg-surface border border-text-main/10
            text-text-main font-body text-sm px-4 py-3 rounded-none
            placeholder:text-text-muted
            focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10
            transition-all duration-200

Textarea:   same as input + resize-none min-h-[140px]

Submit:     primary button pattern + w-full justify-center mt-2
```

Fields: Name, Email or Phone, Message, Submit

---

### Footer

```
Wrapper:    bg-surface border-t border-text-main/10 py-12 px-16

Row 1:      flex justify-between items-center
  Logo:     font-display text-lg text-text-main
  Nav:      flex gap-8
    Links:  font-body text-sm text-text-muted hover:text-text-main transition-colors
  Socials:  flex gap-4
    Icons:  text-text-muted hover:text-accent transition-colors duration-200

Row 2:      border-t border-text-main/10 mt-8 pt-8
            text-center font-body text-xs text-text-muted/60
```

---

## Animation Conventions

Use Tailwind's `transition-*` and `duration-*` for all hover states. For scroll reveals and staggered load, use **Framer Motion** (React) or **AOS** (vanilla).

| Interaction | Approach |
|---|---|
| All hover states | `transition-all duration-300` or `transition-colors duration-200` |
| Page load stagger | Framer: `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}` |
| Scroll reveal | `opacity-0 translate-y-4` → `opacity-100 translate-y-0 transition-all duration-[600ms]` |
| Gallery filter swap | `transition-opacity duration-200` |
| Carousel slide | smooth horizontal translate, no bounce |

**Never:** parallax, scroll-jacking, bounce easings, auto-playing video, or stacking more than two animated elements in the same viewport.

---

## What To Never Do

- No `bg-accent` on any large surface — the green is a detail, not a background
- No `text-white` or `bg-black` — use `text-text-main` and `bg-bg` exclusively
- No `rounded-lg` or above on cards — `rounded-sm` max
- No `font-bold` on Cormorant — `font-medium` is the ceiling
- No `font-semibold` on Outfit at display sizes — fine for UI labels and step titles only
- No `shadow-*` on cards — border color shift on hover is the pattern
- No emoji in headings or UI copy
- No pill-style or boxed section labels — plain text, spaced, `text-accent`
- No colors outside the defined palette — no purple, blue, warm tones, or grays not in the system

---

*This document is the single source of truth for all design decisions on this site. Every class written should trace back to something defined here.*