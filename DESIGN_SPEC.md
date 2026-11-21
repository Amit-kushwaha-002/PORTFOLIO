# Design Specification: UNESCO Policy Monitoring Platform Design System Adaptation for Amit Kushwaha Portfolio

> **Reference Page Analyzed:** [UNESCO Policy Monitoring Platform - National Portfolio Organisations](https://www.unesco.org/creativity/en/policy-monitoring-platform/national-portfolio-organisations)  
> **Target Project:** Personal Portfolio Website for **Amit Kushwaha** (Full Stack MERN Developer)  
> **Status:** Awaiting User Approval before Build Step

---

## 1. Executive Summary & Design System Foundations

The UNESCO Policy Monitoring Platform is built upon the **UNESCO Digital Design System** (custom theme `bunesco8` structured over **Bootstrap 5.3** conventions with bespoke institutional styling). It embodies an authoritative, accessible, clean, content-first layout:
- **Tone:** Academic, highly legible, structured, modern institutional.
- **Visual Rhythm:** Generous whitespace, razor-sharp card containers with subtle borders, vibrant UNESCO blue accents (`#0077D4`), and deep navy grounding (`#002B49`).
- **Typography:** The **Inter** typeface by Rasmus Andersson, featuring neutral, open counters and high legibility across all screen densities.
- **Interactions:** Subtle, purposeful micro-interactions (elevation on hover, blue border transitions, pill selection states, smooth accordion and filter transitions).

This specification adapts UNESCO's exact design language, layout hierarchy, component tokens, and responsive behavior to create Amit Kushwaha's portfolio website.

---

## 2. Page Structure & Section Architecture

The portfolio mirrors the hierarchical layout of the reference measure page:

```
┌────────────────────────────────────────────────────────────────────────┐
│ Top Utility & Sticky Navigation Bar (Logo left, Nav links right)       │
├────────────────────────────────────────────────────────────────────────┤
│ Breadcrumb & Hero / Title Banner (Role Tag, H1 Name, Tagline, CTAs)   │
├────────────────────────────────────────────────────────────────────────┤
│ About Section (2-Column UNESCO Card Layout: Bio left, Metadata right)   │
├────────────────────────────────────────────────────────────────────────┤
│ Education & Experience (UNESCO Timeline / Institutional Record Card)   │
├────────────────────────────────────────────────────────────────────────┤
│ Skills Matrix (Categorized Filter Tag / Chip System)                   │
├────────────────────────────────────────────────────────────────────────┤
│ Projects Platform (Interactive Search, Category Filter Bar, 3-Col Grid)│
├────────────────────────────────────────────────────────────────────────┤
│ Extracurricular & Achievements (UNESCO Highlight Card / Feature Block) │
├────────────────────────────────────────────────────────────────────────┤
│ Contact Section (UNESCO Standard Form & Social Channels Container)     │
├────────────────────────────────────────────────────────────────────────┤
│ Footer (UNESCO Deep Navy Multi-Column Footer with Copyright & Links)   │
└────────────────────────────────────────────────────────────────────────┘
```

### 2.1 Navigation Bar (Header)
- **Structure:** Left brand mark / text `"Amit Kushwaha"`, right navigation menu items: `Home`, `About`, `Education`, `Skills`, `Projects`, `Contact`.
- **Sticky Behavior:** `position: sticky; top: 0; z-index: 1050;`.
- **Styling:**
  - Background: `#FFFFFF` with `backdrop-filter: blur(10px)` (at 95% opacity `rgba(255, 255, 255, 0.95)`).
  - Bottom Border: `1px solid #E1E4E8`.
  - Box Shadow (on scroll): `0 2px 10px rgba(0, 43, 73, 0.06)`.
  - Height: `72px` desktop, `64px` mobile.
  - Link States: Default text `#333940`; hover state turns `#0077D4` with a smooth 2px underline accent transition.
  - Mobile: Responsive hamburger toggle that opens a clean off-canvas drawer / mobile slide-down menu with accessible touch targets (min `44px`).

### 2.2 Hero / Page Title Area
- **Structure:** Modeled after the UNESCO Policy Platform header:
  - **Breadcrumb:** `Portfolio / Profile / Full Stack MERN Developer` (muted text `#626D7A`, chevron `/` separators).
  - **Pill Tag:** Soft blue badge `"Full Stack Developer (MERN Stack)"` with blue text (`#0077D4`) and light blue fill (`#EBF4FC`).
  - **Heading (H1):** `"Amit Kushwaha"` in bold 700 weight Inter, dark charcoal `#1A1D20`.
  - **Tagline / Lead Paragraph:** `"Building scalable web applications and AI-powered solutions."` (font size `1.25rem / 20px`, color `#4A5568`, line-height `1.5`).
  - **CTA Group:** Dual-button layout:
    - Primary CTA: `"View Projects"` (solid UNESCO blue `#0077D4`, white text, arrow icon `→`).
    - Secondary CTA: `"Contact Me"` (outline style, border `1.5px solid #0077D4`, text `#0077D4`, hover fill `#F0F7FD`).
  - **Status Badge:** `"Available for Opportunities"` indicator with pulsing green dot (`#10B981`).

### 2.3 About Section
- **Layout:** Two-column split card container (similar to UNESCO's "Measure Overview & Partner Details"):
  - Left Column (Bio & Philosophy): Formatted biographical statement highlighting MERN specialization, scalable RESTful APIs, performance optimization, AI integration, and C++/OOP problem-solving.
  - Right Column (Profile & Key Identifiers):
    - Profile photo placeholder with soft rounded frame (`rounded-2xl`, border `1px solid #E1E4E8`).
    - Quick Fact Metadata List (Role, Experience/Education Level, Primary Stack, Location, Collaboration Mode).

### 2.4 Education & Credentials
- **Structure:** Modeled after UNESCO's "Timeline / Policy Implementation History":
  - Clean card item with vertical accent border (`3px solid #0077D4` on the left border).
  - Degree: `Bachelor of Technology in Computer Science`.
  - Institution: `Malwa Institute of Technology`.
  - Period: `Aug 2023 – Jun 2027` (displayed inside a subtle gray pill badge).
  - Core Focus highlights (Computer Science principles, Data Structures & Algorithms, Object-Oriented Programming).

### 2.5 Skills Matrix
- **Structure:** Grouped chip/tag system matching the reference's policy tag taxonomy:
  - Group 1: **Languages** (`C`, `C++`, `JavaScript`, `Python`)
  - Group 2: **Frontend** (`HTML`, `CSS`, `React`, `Tailwind`)
  - Group 3: **Backend** (`Node.js`)
  - Group 4: **Database** (`MongoDB`)
  - Group 5: **Tools** (`Git`, `GitHub`)
- **Tag Style:** Pill badges (`rounded-full`), padding `8px 16px`, background `#F1F5F9`, border `1px solid #E2E8F0`, font weight 500, hover background `#E0F2FE` with text color shift to `#0077D4`.

### 2.6 Projects Platform (Card Grid & Interactive Filters)
- **Toolbar:**
  - Search Input: Real-time search with left search glass icon and clear button (`#F8F9FA` background, border `#E1E4E8`, focus border `#0077D4` with `0 0 0 3px rgba(0, 119, 212, 0.2)` ring).
  - Category Filter Pills: `All`, `Full Stack`, `Backend`, `Python`, `AI`.
    - Active Pill: Solid `#0077D4` with `#FFFFFF` text.
    - Inactive Pill: `#F1F5F9` background, `#333940` text, `#E1E4E8` border, hover background `#E2E8F0`.
  - Dynamic Counter: `"Showing X of 3 projects"` in muted text `#626D7A`.
- **Card Anatomy (UNESCO Measure Card Replication):**
  - Card Box: Background `#FFFFFF`, border `1px solid #E1E4E8`, border-radius `12px` (`0.75rem`), internal padding `24px` (`1.5rem`).
  - Header Tag Row: Category badges (e.g. `Full Stack`, `AI`) in soft blue pills.
  - Card Title: Bold H3 (font size `1.25rem / 20px`), color `#1A1D20`, transitions to `#0077D4` on card hover.
  - Bullet Points & Feature Highlights: Clean UNESCO bullet layout with check/bullet markers.
  - Tech Stack Badges: Mini pill tags showing specific technologies (`React`, `Node.js`, `Express`, `MongoDB`, etc.).
  - Card Action Footer: GitHub repo link button (`View Code on GitHub` with GitHub icon and external arrow `↗`).
- **Interactive States:** On hover, the card translates `translateY(-4px)`, shadow transitions to `0 12px 24px -4px rgba(0, 43, 73, 0.12)`, and the border subtly highlights to `#B2D6F2`.

### 2.7 Extracurricular Section
- **Card Format:** UNESCO "Civil Society Partnership" callout container:
  - Icon accent, light-blue background tint (`#F0F7FD`), border `1px solid #CCE4F6`.
  - Text: Coding events and tech fests participation, team application development, Git & GitHub coordination.

### 2.8 Contact Section
- **Layout:** Split layout:
  - Left: Contact details cards (Email `amit01golu@gmail.com`, LinkedIn URL, GitHub URL) with clean icon containers and one-click copy/open actions. (No phone number shown, strictly per instructions).
  - Right: Accessible contact form (Name, Email, Message) with real-time validation, character counters, accessible error states, and a front-end success confirmation banner with option to trigger mailto.

### 2.9 Footer
- **Background:** UNESCO Deep Navy (`#002B49`).
- **Layout:**
  - Top segment: Name/brand overview, quick navigation links, and social icon buttons (LinkedIn, GitHub, Email).
  - Divider: Subtle border `1px solid rgba(255, 255, 255, 0.12)`.
  - Bottom segment: `"© 2026 Amit Kushwaha. All rights reserved."` plus accessible "Back to Top" smooth-scroll button.

---

## 3. Typography Specification

The typography maps Rasmus Andersson's **Inter** font family with exact weights, sizes, and line heights.

| Element | Font Family | Size (Desktop / Mobile) | Weight | Line Height | Letter Spacing | Color Hex |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **H1 (Hero Name)** | Inter, sans-serif | `44px (2.75rem)` / `32px (2rem)` | 700 (Bold) | `1.15` | `-0.025em` | `#1A1D20` |
| **H2 (Section Titles)** | Inter, sans-serif | `32px (2rem)` / `24px (1.5rem)` | 700 (Bold) | `1.25` | `-0.02em` | `#1A1D20` |
| **H3 (Card Titles)** | Inter, sans-serif | `20px (1.25rem)` / `18px (1.125rem)` | 600 (Semi-Bold) | `1.35` | `-0.01em` | `#1A1D20` |
| **H4 (Subheadings)** | Inter, sans-serif | `16px (1rem)` / `15px (0.9375rem)` | 600 (Semi-Bold) | `1.4` | `0` | `#333940` |
| **Lead Paragraph** | Inter, sans-serif | `18px (1.125rem)` / `16px (1rem)` | 400 (Regular) | `1.6` | `0` | `#4A5568` |
| **Body Text** | Inter, sans-serif | `16px (1rem)` / `15px (0.9375rem)` | 400 (Regular) | `1.6` | `0` | `#333940` |
| **Nav Links** | Inter, sans-serif | `15px (0.9375rem)` / `16px (1rem)` | 500 (Medium) | `1.5` | `0` | `#333940` |
| **Buttons** | Inter, sans-serif | `15px (0.9375rem)` / `15px` | 600 (Semi-Bold) | `1` | `0.01em` | `#FFFFFF` / `#0077D4` |
| **Tags / Chips** | Inter, sans-serif | `13px (0.8125rem)` / `12px` | 500 (Medium) | `1.2` | `0.02em` | `#0077D4` / `#333940` |
| **Breadcrumbs & Meta** | Inter, sans-serif | `13px (0.8125rem)` / `12px` | 500 (Medium) | `1.4` | `0.01em` | `#626D7A` |
| **Footer Text** | Inter, sans-serif | `14px (0.875rem)` / `13px` | 400 (Regular) | `1.5` | `0` | `#A0AEC0` |

---

## 4. Color Palette & Token System

All colors are extracted from the UNESCO design tokens:

### 4.1 Primary & Brand Colors
- **UNESCO Primary Blue:** `#0077D4` (Main brand color, primary buttons, active tabs, link hover).
- **UNESCO Blue Hover / Dark:** `#005FA8` (Button hover, active link state).
- **UNESCO Deep Navy:** `#002B49` (Footer background, high contrast branding, deep accents).
- **UNESCO Light Tint:** `#EBF4FC` (Tag backgrounds, active filter soft state, callout box background).
- **UNESCO Light Border:** `#CCE4F6` (Borders for light tint containers).

### 4.2 Neutral & Grayscale Palette
- **Page Background:** `#F8F9FA` (Clean off-white background).
- **Surface / Card Background:** `#FFFFFF` (Pure white card bodies).
- **Section Alternate Background:** `#F3F6F9` (Subtle visual rhythm between sections).
- **Text Primary (Headings):** `#1A1D20` (High contrast, dark charcoal).
- **Text Body:** `#333940` (Balanced reading contrast, compliant with WCAG AAA).
- **Text Secondary / Muted:** `#626D7A` (Captions, dates, secondary labels).
- **Border Default:** `#E1E4E8` (Card borders, table dividers, input borders).
- **Border Light:** `#EEF0F2` (Subtle inner separators).

### 4.3 Feedback & Accent Colors
- **Success (Green):** `#10B981` (Available badge, form success message).
- **Success Background:** `#DCF0E9`.
- **Focus Ring Color:** `rgba(0, 119, 212, 0.25)` with `#0077D4` outline.

---

## 5. Spacing System & Grid Layout

Following Bootstrap 5.3 + UNESCO container standards:

### 5.1 Container Max-Widths
- **Desktop (≥1440px):** `1320px` max-width, `24px` horizontal padding.
- **Tablet (768px – 1024px):** `720px` to `960px` width, `20px` horizontal padding.
- **Mobile (375px – 480px):** `100%` fluid width, `16px` horizontal padding.

### 5.2 Vertical Section Rhythm
- **Desktop (1440px):** `80px (5rem)` padding top and bottom per major section.
- **Tablet (768px):** `64px (4rem)` padding top and bottom.
- **Mobile (375px):** `48px (3rem)` padding top and bottom.

### 5.3 Grid Architecture & Gaps
- **Project Cards Grid:**
  - Desktop (1440px): `3 columns` (`grid-template-columns: repeat(3, 1fr)`), `24px (1.5rem)` gap.
  - Tablet (768px): `2 columns` (`grid-template-columns: repeat(2, 1fr)`), `20px (1.25rem)` gap.
  - Mobile (375px): `1 column` (`grid-template-columns: 1fr`), `16px (1rem)` gap.
- **Card Internal Padding:**
  - Desktop / Tablet: `24px (1.5rem)`.
  - Mobile: `20px (1.25rem)`.

---

## 6. Component Specifications

### 6.1 Buttons
- **Primary Button:**
  - Background: `#0077D4`, Text: `#FFFFFF`, Border: `none`.
  - Padding: `12px 24px`, Border Radius: `8px`.
  - Font: `15px`, Weight: `600`.
  - Hover: Background `#005FA8`, `transform: translateY(-1px)`, Shadow: `0 4px 12px rgba(0, 119, 212, 0.25)`.
  - Active: Background `#004F8A`, `transform: translateY(0)`.
- **Secondary / Outline Button:**
  - Background: `transparent`, Text: `#0077D4`, Border: `1.5px solid #0077D4`.
  - Padding: `12px 24px`, Border Radius: `8px`.
  - Hover: Background `#F0F7FD`, Border `#005FA8`, Text: `#005FA8`.
- **Icon / Ghost Button:**
  - Background: `transparent`, Text: `#333940`.
  - Hover: Background `#F1F5F9`, Text: `#0077D4`.

### 6.2 Cards (UNESCO Pattern)
- **Base Style:**
  - Background: `#FFFFFF`.
  - Border: `1px solid #E1E4E8`.
  - Border Radius: `12px`.
  - Box Shadow: `0 1px 3px rgba(0, 0, 0, 0.05)`.
  - Transition: `all 0.25s cubic-bezier(0.16, 1, 0.3, 1)`.
- **Hover State:**
  - `transform: translateY(-4px)`.
  - Border Color: `#CCE4F6`.
  - Box Shadow: `0 12px 24px -4px rgba(0, 43, 73, 0.12)`.

### 6.3 Filter & Search Toolbar
- **Search Bar:**
  - Input with magnifying glass icon on the left.
  - Height: `44px`, Padding: `0 16px 0 42px`, Border Radius: `8px`.
  - Border: `1px solid #E1E4E8`, Background: `#FFFFFF`.
  - Focus: Border `#0077D4`, Box Shadow: `0 0 0 3px rgba(0, 119, 212, 0.2)`.
- **Category Filter Pills:**
  - Height: `38px`, Padding: `0 18px`, Border Radius: `9999px` (`rounded-full`).
  - Active State: Background `#0077D4`, Text `#FFFFFF`, Border `1px solid #0077D4`, Font Weight `600`.
  - Inactive State: Background `#F1F5F9`, Text `#333940`, Border `1px solid #E1E4E8`, Font Weight `500`.
  - Hover (Inactive): Background `#E2E8F0`, Text `#1A1D20`.

### 6.4 Skill Chips & Badges
- **Pill Badges:**
  - Height: `32px`, Padding: `6px 14px`, Border Radius: `9999px`.
  - Background: `#F8FAFC`, Border: `1px solid #E2E8F0`, Text: `#333940`, Font Size: `13px`.
  - Hover: Background `#EBF4FC`, Border `#CCE4F6`, Text: `#0077D4`.

### 6.5 Form Inputs
- **Fields (Name, Email, Message):**
  - Height: `46px` (Textarea `120px`), Border Radius: `8px`.
  - Border: `1px solid #E1E4E8`, Background: `#FFFFFF`.
  - Focus: Border `#0077D4`, Box Shadow: `0 0 0 3px rgba(0, 119, 212, 0.2)`.
  - Label: Font size `14px`, Weight `600`, Color `#1A1D20`, Margin Bottom `6px`.

---

## 7. Responsive Behavior Across Breakpoints

| Breakpoint | Header & Nav | Hero Banner | Project Grid | Skills Layout | Footer |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Desktop (1440px)** | Horizontal link row, height 72px, sticky with backdrop blur | 2-column layout (Headline/CTAs left, Status card right) | 3-column CSS grid, 24px gap | Horizontal flex wrap in grouped category boxes | 4-column layout, full social links & copyright |
| **Tablet (768px)** | Compact header, optional mobile drawer or condensed links | Stacked layout, centered text, full-width CTAs | 2-column CSS grid, 20px gap | Grouped category boxes with 2-column flex | 2-column layout with stacked copyright |
| **Mobile (375px)** | 64px height, hamburger menu with slide-down drawer | Stacked layout, 32px H1 title, full-width vertical buttons | 1-column stack, 16px gap, touch-friendly cards | Single-column grouped cards with wrap chips | Single-column centered stack |

---

## 8. Technology Stack Choice & Architecture

- **Chosen Stack:** **React 18 + Vite + Tailwind CSS**
  - *Reasoning:* Matches Amit Kushwaha's primary technical skill set (React / MERN), provides instant HMR development speed, produces tiny optimized production bundles, and supports Tailwind CSS utility classes customized with exact UNESCO design tokens.
- **Data Architecture:** Single source of truth in `src/data/portfolio.js` containing all profile details, skills, education, and project records so Amit can effortlessly update content in one place.
- **Accessibility & Performance Target:**
  - 100% semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Strict ARIA attributes (`aria-expanded`, `aria-label`, `role="tab"`).
  - High color contrast meeting WCAG 2.1 AAA standards.
  - Target Lighthouse scores: 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO.

---

## 9. Content Verification Check (Zero Hallucination Guarantee)

- Name: Amit Kushwaha
- Role: Full Stack Developer (MERN Stack)
- Tagline: "Building scalable web applications and AI-powered solutions."
- Education: Bachelor of Technology in Computer Science, Malwa Institute of Technology (Aug 2023 – Jun 2027)
- Projects:
  1. Pulmo AI: Early Lung Disease Detection (Categories: Full Stack, AI)
  2. Complete Authentication Backend System (Category: Backend)
  3. Jarvis: Python Voice Assistant (Categories: Python, AI)
- Strictly no fabricated metrics, dataset names, or phone numbers. Only stated facts used.

---

*This specification is prepared for user review and approval before starting code implementation in Step 2.*
