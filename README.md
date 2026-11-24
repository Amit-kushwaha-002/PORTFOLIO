# Amit Kushwaha - Personal Portfolio

A personal portfolio website for **Amit Kushwaha**, Full Stack Developer (MERN Stack).

The site's visual design, layout architecture, typography, spacing, and micro-interactions replicate the institutional standard of the **UNESCO Policy Monitoring Platform** ([National Portfolio Organisations](https://www.unesco.org/creativity/en/policy-monitoring-platform/national-portfolio-organisations)), featuring a content-first layout, UNESCO Blue (`#0077D4`) accents, deep navy footer (`#002B49`), and Rasmus Andersson's **Inter** typography.

---

## 🚀 Tech Stack

- **Frontend Library:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with customized UNESCO theme tokens
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Inter (Google Fonts)

---

## 📁 Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky navigation with mobile hamburger drawer
│   │   ├── Hero.jsx           # UNESCO-styled title banner, breadcrumbs & CTAs
│   │   ├── About.jsx          # 2-column bio & profile photo placeholder card
│   │   ├── Education.jsx      # Academic record card with blue accent border
│   │   ├── Skills.jsx         # Categorized chip/tag matrix (Languages, Frontend, Backend, etc.)
│   │   ├── Projects.jsx       # 3-col card grid, real-time search & category filter pills
│   │   ├── Extracurricular.jsx# UNESCO highlight callout card
│   │   ├── Contact.jsx        # Direct contact cards + validated front-end form
│   │   └── Footer.jsx         # UNESCO Deep Navy multi-column footer
│   ├── data/
│   │   └── portfolio.js       # Single editable data source for all portfolio content
│   ├── App.jsx                # Main application wrapper
│   ├── index.css              # Global styles, Tailwind directives & custom scrollbar
│   └── main.jsx               # React DOM entrypoint
├── index.html                 # Semantic HTML shell with Inter typography & favicon
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # UNESCO color palette, shadows, and container tokens
└── vite.config.js             # Vite development server configuration
```

---

## 🛠️ How to Run Locally

### Prerequisites
- Node.js (version 18 or later recommended)
- npm or pnpm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open your browser and navigate to the local server URL (typically `http://localhost:5173/`).

### 3. Build for Production
```bash
npm run build
```
This compiles optimized production assets into the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Push your repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository (`Amit-kushwaha-002/portfolio` or your chosen repo name).
4. Vercel automatically detects Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**.

### Deploy to Netlify
1. Go to [Netlify](https://www.netlify.com/) and click **"Add new site"** → **"Import an existing project"**.
2. Connect your GitHub account and select this repository.
3. Configure the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **"Deploy site"**.

---

## ✏️ How to Edit Content

All personal content (bio, projects, links, skills, education) is centralized in one single file:
👉 **`src/data/portfolio.js`**

Simply update the data in that file and the website will automatically reflect your changes.

---

## 📄 License
© 2026 Amit Kushwaha. All rights reserved.
