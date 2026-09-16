# Bhartiya Nadi Parishad - Official Website Redesign 🌊

> **A modern, fluid redesign of [Bhartiya Nadi Parishad](https://www.bhartiyanadiparishad.org/) (Indian River Council)**  
> Engineered with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.  
> Features Pine Labs-inspired text transitions, scroll word reveals, spotlight interactive cards, and a neurobiologically calibrated color palette (light river blue + subtle *konchem* emerald green).

---

## 🌟 Key Highlights

* **Pine Labs Motion System**:
  * `MaskedHeading`: Clean masked typography upward reveals with cubic-bezier easing.
  * `ScrollWordReveal`: Signature Pine Labs word-by-word scroll-linked illumination across the core manifesto.
  * `SpotlightCard`: Cursor-following radial light glow accentuating frosted glass hairline borders.
  * Frosted pill navigation bar with active state indicators.
* **310+ Pulled Assets & 21 Policy PDFs**:
  * Complete 156+ MB offline asset bundle.
  * High-res river photography, council portraits, and video loops (`membership-Cox8YYqx.mp4`).
  * 21 downloadable official research & policy PDFs (*UP River Policy 2024 Draft*, *River Restoration Bill 2016*, *Hindon Rejuvenation Plan*, *NITI Aayog Framework*).
* **Neurobiologically Tuned Color Architecture**:
  * 60% Low-Chroma Mist Substrate (`#F6FAFC`) to eliminate visual fatigue.
  * 30% Deep River Slate Structure & Ink (`#0A1D33` / `#3B536E`).
  * 10% Accents: River Azure (`#2B8EE8`) and Sacred Riverbank Emerald (`#10B981`).

---

## 🚀 Getting Started

### Clone & Install
```bash
git clone https://github.com/viswakpullepu/bhartiya-nadi-parishad-redesign.git
cd bhartiya-nadi-parishad-redesign
npm install
```

### Run Locally (Dev Server)
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build & Preview
```bash
npm run build
npm run preview
```

---

## 🏛️ Project Structure
```
├── public/
│   └── assets/             # 292 images, logos, video loops, and 21 PDFs
├── src/
│   ├── components/
│   │   ├── PineLabsAnimations.jsx  # MaskedHeading, ScrollWordReveal, SpotlightCard
│   │   ├── Navbar.jsx              # Frosted pill header
│   │   ├── Hero.jsx                # Hero with video integration & masked title
│   │   ├── NarrativeReveal.jsx     # Pine Labs scroll word reveal & action pillars
│   │   ├── RiverExplorer.jsx       # Interactive river basins showcase
│   │   ├── SangamSection.jsx       # Rashtriya Nadi Sangam at Bharat Mandapam
│   │   ├── PublicationsCatalog.jsx # Searchable & filterable 21 PDF documents library
│   │   ├── VideoDocuSection.jsx    # Curated field documentaries & video talks
│   │   ├── LeadershipSection.jsx   # Council & Advisory Board
│   │   ├── JoinModal.jsx           # River Warrior volunteer modal
│   │   └── Footer.jsx              # 44-route directory & sitemap
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## 📜 License
Developed for ecological advocacy and the public domain in service of Indian River Rejuvenation (Water Vision 2047).
