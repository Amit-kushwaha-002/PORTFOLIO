# Antigravity Workspace Guidelines: Amit Kushwaha Portfolio

Welcome to the Antigravity project configuration for **Amit Kushwaha's Personal Portfolio**.
This file guides Antigravity and AI coding agents when working on, updating, or maintaining this codebase.

---

## 🎯 Project Overview & Identity
- **Owner:** Amit Kushwaha
- **Role:** Full Stack Developer (MERN Stack)
- **Tagline:** "Building scalable web applications and AI-powered solutions."
- **Repository:** [https://github.com/Amit-kushwaha-002/PROFILE](https://github.com/Amit-kushwaha-002/PROFILE)
- **Email:** `amit01golu@gmail.com`
- **LinkedIn:** [https://www.linkedin.com/in/amit-kushwaha-connect](https://www.linkedin.com/in/amit-kushwaha-connect)
- **GitHub:** [https://github.com/Amit-kushwaha-002](https://github.com/Amit-kushwaha-002)

---

## 🏛️ Design System & Architectural Rules
The visual design, spacing, typography, and interaction patterns replicate the institutional standard of the **UNESCO Policy Monitoring Platform**:
- **Typography:** Rasmus Andersson's **Inter** font family via Google Fonts (`400`, `500`, `600`, `700`).
- **Brand Colors:**
  - UNESCO Primary Blue: `#0077D4` (Buttons, active badges, link hover, focus outline)
  - UNESCO Dark Blue / Hover: `#005FA8`
  - UNESCO Deep Navy: `#002B49` (Footer background, high-contrast containers)
  - UNESCO Light Tint: `#EBF4FC` (Tag / badge background; border: `#CCE4F6`)
  - Neutral Background: `#F8F9FA` | Card Surface: `#FFFFFF` | Alt Surface: `#F3F6F9`
  - Text Primary: `#1A1D20` | Body: `#333940` | Muted: `#626D7A`
- **Micro-Interactions:**
  - Card lift on hover: `transform: translateY(-4px)`, elevated shadow, and `#CCE4F6` border highlight.
  - Smooth scroll behavior: `scroll-behavior: smooth`.
  - Accessible focus rings: `0 0 0 3px rgba(0, 119, 212, 0.25)`.
- **Breakpoints:**
  - Desktop: `≥1440px` (3-column project grid, 12-column split layouts, max-width `1320px`)
  - Tablet: `768px - 1024px` (2-column project grid, condensed navbar)
  - Mobile: `375px - 480px` (1-column stack, accessible hamburger navigation drawer with `≥44px` touch targets)

---

## 📁 Key File Structure & Single Source of Truth
- **`src/data/portfolio.js`:** ⭐️ **THE SINGLE SOURCE OF TRUTH.** All personal biographical info, skills, education, projects, extracurricular activities, and contact information reside here. Whenever updating portfolio content, edit this file rather than hardcoding into components.
- **`src/components/`:**
  - `Navbar.jsx`: Sticky navbar with active scroll spy & responsive mobile drawer.
  - `Hero.jsx`: UNESCO-styled title banner with breadcrumbs and dual CTAs.
  - `About.jsx`: Two-column bio, profile avatar placeholder, and architecture highlights.
  - `Education.jsx`: Academic record card with blue accent border.
  - `Skills.jsx`: Domain-grouped chip/tag matrix.
  - `Projects.jsx`: Interactive real-time search, category filter pills (`All`, `Full Stack`, `Backend`, `Python`, `AI`), and card grid.
  - `Extracurricular.jsx`: UNESCO partnership callout card.
  - `Contact.jsx`: Contact channels and validated front-end form.
  - `Footer.jsx`: Deep Navy multi-column footer with copyright and back-to-top button.
  - `Icons.jsx`: SVG icons for LinkedIn and GitHub.
- **`tailwind.config.js`:** Custom color tokens, shadows, and container specifications.

---

## ⚙️ Development Commands
- **Development Server:** `npm run dev` (runs on `http://localhost:5173/`)
- **Production Build:** `npm run build` (outputs to `dist/`)
- **Preview Production:** `npm run preview`

---

## 🚫 Strict Constraints
1. **Never display a phone number** on the site.
2. **Never invent metrics**, dataset names, or fake accuracy percentages.
3. **Do not use UNESCO logos, text, or trademarked branding**; replicate layout and design system only.
4. Keep the repository clean of temporary scrape files or unneeded build artifacts.
