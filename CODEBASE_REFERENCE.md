# Resourza — Codebase Reference

> **Last Updated:** 2026-06-29  
> **Project:** Resourza — Cambridge academic resource platform (O/A Levels, IGCSE)  
> **Stack:** React 19, React Router v7, Tailwind CSS v3, Vite 8

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Directory Structure](#2-directory-structure)
3. [Tech Stack & Tooling](#3-tech-stack--tooling)
4. [Routing Architecture](#4-routing-architecture)
5. [Page-by-Page Breakdown](#5-page-by-page-breakdown)
   - [LandingPage](#51-landingpage)
   - [SubjectMarketplace](#52-subjectmarketplace-yearly-past-papers)
   - [TopicalPastPapers](#53-topicalpastpapers)
   - [Components](#54-components)
   - [Topics](#55-topics)
   - [MockPapers](#56-mockpapers)
6. [Shared Components](#6-shared-components)
   - [MobileHeader](#61-mobileheader)
   - [Footer](#62-footer)
   - [ScrollToTop](#63-scrolltotop)
7. [Services](#7-services)
   - [WhatsAppService](#71-whatsappservice)
8. [Data Layer](#8-data-layer)
   - [boardsData.js](#81-boardsdatajs)
   - [topicalData.js](#82-topicaldatajs)
9. [Design System (Tailwind Config)](#9-design-system-tailwind-config)
   - [Color Tokens](#91-color-tokens)
   - [Typography Scale](#92-typography-scale)
   - [Spacing & Layout](#93-spacing--layout)
10. [Global CSS (index.css)](#10-global-css-indexcss)
11. [Page Navigation Flow (User Journey)](#11-page-navigation-flow-user-journey)
12. [Known Patterns & Conventions](#12-known-patterns--conventions)
13. [Known Issues & TODOs](#13-known-issues--todos)

---

## 1. Project Overview

Resourza is a digital academic resource marketplace targeting O Level, A Level, and IGCSE students and educators in Pakistan/international Cambridge markets.

**Core user flow:**
- User lands on a marketing landing page
- Navigates to a board (O Levels / A Levels / IGCSE)
- Selects a resource type (Topical Past Papers OR Yearly Past Papers)
- For Topical: drills down `Board → Subject → Component → Topics`
- Selects topics and contacts Resourza via WhatsApp to purchase
- For Mock Papers: lands on a dedicated pitch page and contacts via WhatsApp

**Business model:** All transactions happen via WhatsApp — there is no in-app checkout. The site is a lead-generation funnel.

---

## 2. Directory Structure

```
d:/JZ's Code/LandingPage/
├── Resourza/                   ← Main React app
│   ├── index.html              ← HTML entry point (favicon, root div)
│   ├── vite.config.js          ← Vite + React plugin config
│   ├── tailwind.config.js      ← Full design system (colors, fonts, spacing)
│   ├── postcss.config.js       ← PostCSS (autoprefixer)
│   ├── eslint.config.js        ← ESLint rules
│   ├── vercel.json             ← Vercel deployment config (SPA rewrites)
│   ├── package.json            ← Dependencies & scripts
│   └── src/
│       ├── main.jsx            ← React entry: renders <App /> into #root
│       ├── App.jsx             ← Router + all route definitions
│       ├── index.css           ← Tailwind directives + custom utilities
│       ├── Pages/
│       │   ├── LandingPage.jsx         ← Route: /
│       │   ├── SubjectMarketplace.jsx  ← Route: /board/:boardId
│       │   ├── TopicalPastPapers.jsx   ← Route: /topical/:boardId
│       │   ├── Components.jsx          ← Route: /topical/:boardId/:subjectId
│       │   ├── Topics.jsx              ← Route: /topical/:boardId/:subjectId/:componentId
│       │   ├── MockPapers.jsx          ← Route: /mock-papers
│       │   └── main.jsx               ← (Unused — duplicate of src/main.jsx)
│       ├── SharedComponents/
│       │   ├── MobileHeader.jsx        ← Slide-in mobile nav menu
│       │   ├── Footer.jsx              ← Site-wide footer
│       │   └── ScrollToTop.jsx         ← Auto-scroll on route change
│       ├── Services/
│       │   └── WhatsAppService.jsx     ← All WhatsApp link generators
│       ├── data/
│       │   ├── boardsData.js           ← Static data for Yearly Past Papers
│       │   └── topicalData.js          ← Static data for Topical flow (large: ~1200 lines)
│       └── assets/
│           ├── hero.png                ← (Unused — hero uses an external URL)
│           ├── react.svg               ← Vite default
│           └── vite.svg                ← Vite default
```

---

## 3. Tech Stack & Tooling

| Tool | Version | Role |
|---|---|---|
| React | ^19.2.6 | UI framework |
| React DOM | ^19.2.6 | DOM renderer |
| React Router DOM | ^7.17.0 | Client-side routing (SPA) |
| Vite | ^8.0.12 | Dev server & bundler |
| Tailwind CSS | ^3.4.19 | Utility-first CSS |
| @tailwindcss/forms | ^0.5.11 | Form reset plugin |
| @tailwindcss/container-queries | ^0.1.1 | Container query plugin |
| PostCSS + Autoprefixer | latest | CSS processing |
| ESLint | ^10.3.0 | Code linting |
| Google Fonts | (CDN) | Hanken Grotesk + Inter |
| Material Symbols Outlined | (CDN) | Icon library (variable font) |

**Dev scripts:**
```bash
npm run dev       # Start Vite dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

---

## 4. Routing Architecture

Defined in [`src/App.jsx`](./src/App.jsx). Uses `BrowserRouter` + `Routes` + `Route`.

```
/                                           → LandingPage
/board/:boardId                             → SubjectMarketplace  (Yearly Past Papers)
/topical/:boardId                           → TopicalPastPapers   (Subject list)
/topical/:boardId/:subjectId               → Components           (Component list)
/topical/:boardId/:subjectId/:componentId  → Topics               (Topic selector)
/mock-papers                               → MockPapers
```

**Valid `boardId` values:** `o-levels`, `a-levels`, `igcse`  
(Both `boardsData` and `topicalData` use these exact keys as dictionary keys)

**Global behavior:**  
`<ScrollToTop />` is placed inside `<Router>` — it fires `window.scrollTo(0, 0)` on every `pathname` change, ensuring pages always open at the top.

---

## 5. Page-by-Page Breakdown

### 5.1 LandingPage
**File:** [`src/Pages/LandingPage.jsx`](./src/Pages/LandingPage.jsx)  
**Route:** `/`

**Sections (top to bottom):**
1. **Fixed NavBar** — Desktop hover-dropdown for Board (O/A/IGCSE → Topical/Yearly), Contact Us (→ WhatsApp), Resources (→ `#academic-support` scroll). Mobile hamburger opens `<MobileHeader>`.
2. **Hero** — Full-screen, animated image card, two CTA buttons (scroll to `#academic-support` and `#advantage-section`).
3. **Stats Bar** — Blue background strip: 1.5K+ Students, 15+ Subjects, 92% Success Rate.
4. **Boards Section** — 3 cards: O Levels, A Levels, IGCSE (static, no links).
5. **Services Section** (`id="academic-support"`) — 4 cards linking to: `/mock-papers`, `#notes` (placeholder), `/topical/a-levels`, `/board/a-levels`.
6. **Resourza Advantage** (`id="advantage-section"`) — Side-by-side comparison: Manual Prep vs Resourza.
7. **Empowering Students** — 3 feature cards (Interactive Learning, Exam Readiness, Self-Paced Mastery).
8. **Testimonials** — 2 educator quotes.
9. **CTA Section** — Full-width blue gradient, two buttons (scroll to services + WhatsApp).
10. **Footer** — `<Footer />` component.

**State:** `isMobileMenuOpen` (boolean) — controls mobile nav overlay.

**Key behavior:**
- `scrollToSection(id)` — smoothly scrolls to a section by DOM ID.
- `handleWhatsAppGeneralInquiry` — fires on "Contact Us" and "Talk to an Expert" clicks.

---

### 5.2 SubjectMarketplace (Yearly Past Papers)
**File:** [`src/Pages/SubjectMarketplace.jsx`](./src/Pages/SubjectMarketplace.jsx)  
**Route:** `/board/:boardId`

**What it does:**  
Displays a searchable grid of subjects for yearly past papers (sourced from `boardsData`). Cards are presentational only — the "Explore" button has no navigation action (not yet linked).

**State:**
- `searchTerm` — filters subjects by name or code
- `isMobileMenuOpen` — controls mobile nav

**Data flow:**
```js
const boardData = boardsData[boardId] || boardsData['a-levels'];
// Falls back to A Levels if boardId is invalid
```

**Note:** The NavBar here has a slightly different structure than LandingPage — it includes a "Resources" link that goes to `/` and a "Contact Us" link that goes to `/contact` (a non-existent route). The search bar is only visible on `lg` screens.

---

### 5.3 TopicalPastPapers
**File:** [`src/Pages/TopicalPastPapers.jsx`](./src/Pages/TopicalPastPapers.jsx)  
**Route:** `/topical/:boardId`

**What it does:**  
Displays a searchable grid of subjects for the selected board, sourced from `topicalData`. Each subject card is a `<Link>` navigating to the Components page.

**State:** Same as SubjectMarketplace.

**Data flow:**
```js
const boardData = topicalData[boardId] || topicalData['a-levels'];
```

**Special behavior:**  
If `boardId === 'a-levels'`, two extra filter buttons appear below the breadcrumbs: `AS Level` and `A2 Level`. These are **currently non-functional** (no filter logic attached).

**Navigation from cards:**
```jsx
<Link to={`/topical/${boardId}/${subject.id}`}>
```

---

### 5.4 Components
**File:** [`src/Pages/Components.jsx`](./src/Pages/Components.jsx)  
**Route:** `/topical/:boardId/:subjectId`

**What it does:**  
Shows the list of exam components (papers) for a chosen subject. Each component card navigates deeper into Topics. A WhatsApp CTA at the bottom lets users buy ALL components at once.

**URL params used:** `boardId`, `subjectId`

**Data flow:**
```js
const boardData = topicalData[boardId];
const subjectData = boardData?.subjects.find(s => s.id === subjectId);
const filteredComponents = subjectData?.components?.filter(...)
```

**Fallback UI:** If `subjectData` is not found (bad URL), renders a simple "Subject not found." div.

**WhatsApp CTA:**
```js
handleWhatsAppAllComponents(e, boardData.title, subjectData.name, subjectData.code)
// Generates: "interested in ALL components for [Board] [Subject] ([Code])"
```

**Navigation from cards:**
```jsx
<Link to={`/topical/${boardId}/${subjectId}/${comp.id}`}>
```

---

### 5.5 Topics
**File:** [`src/Pages/Topics.jsx`](./src/Pages/Topics.jsx)  
**Route:** `/topical/:boardId/:subjectId/:componentId`

**What it does:**  
The deepest page. Shows a checkable list of topics for the chosen component. User selects topics, then contacts via WhatsApp. Most interactive page in the app.

**URL params used:** `boardId`, `subjectId`, `componentId`

**State:**
- `searchTerm` — filters topic names
- `selectedTopics` — array of selected topic IDs (`string[]`)
- `isMobileMenuOpen`

**Data flow:**
```js
const boardData = topicalData[boardId];
const subjectData = boardData?.subjects.find(s => s.id === subjectId);
const componentData = subjectData?.components?.find(c => c.id === componentId);
const filteredTopics = componentData?.topics?.filter(...);
```

**Key interactions:**
- Click any topic row → toggles its ID in `selectedTopics`
- "Select All Topics" button → selects/deselects all filtered topics
- WhatsApp CTA button is **disabled** until at least 1 topic is selected

**WhatsApp trigger:**
```js
triggerWhatsApp(e) → handleWhatsappTopics(e, boardTitle, subjectName, subjectCode, componentName, selectedTopicNames[])
// Message includes a bulleted list of all selected topic names
```

**Fallback UI:** If `componentData` not found → renders "Component not found." div.

---

### 5.6 MockPapers
**File:** [`src/Pages/MockPapers.jsx`](./src/Pages/MockPapers.jsx)  
**Route:** `/mock-papers`

**What it does:**  
A marketing/pitch page for Resourza's custom mock paper service. No data fetching. Three feature cards, then a single WhatsApp CTA button.

**WhatsApp trigger:**
```js
handleWhatsAppMockPapers(e)
// Message: "interested in your custom Mock Paper service"
```

**Note:** Mobile menu button in this page does NOT use `<MobileHeader>` (likely a bug — the overlay is missing).

---

## 6. Shared Components

### 6.1 MobileHeader
**File:** [`src/SharedComponents/MobileHeader.jsx`](./src/SharedComponents/MobileHeader.jsx)

A full-screen slide-in overlay (fixed, `z-[100]`, translates from right). Used by LandingPage, SubjectMarketplace, TopicalPastPapers, Components, and Topics.

**Props:**
```ts
isMobileMenuOpen: boolean
setIsMobileMenuOpen: (open: boolean) => void
```

**Internal State:**
- `isBoardOpen` — whether the main Board accordion is expanded
- `openSubBoard` — which sub-board accordion is open (`'o-levels' | 'a-levels' | 'igcse' | ''`)

**Structure:**
- Top bar with Resourza logo and close (X) button
- **Board** accordion → sub-accordions per board → links (Topical / Yearly Past Papers)
- **Contact Us** link → triggers `handleWhatsAppGeneralInquiry` + closes menu
- **Resources** link → smooth-scrolls to `#academic-support` on same page, OR navigates to `/#academic-support` if section not in DOM

**`boardsList` array:**
```js
[
  { name: 'O Levels', id: 'o-levels' },
  { name: 'A Levels', id: 'a-levels' },
  { name: 'IGCSE',    id: 'igcse' }
]
```

---

### 6.2 Footer
**File:** [`src/SharedComponents/Footer.jsx`](./src/SharedComponents/Footer.jsx)

4-column grid footer (collapses on mobile).

**Columns:**
1. **Brand** — Resourza logo, tagline, social icon links (currently `#facebook`, `#twitter` — placeholders)
2. **Resources** — Links to: `/mock-papers`, `#notes` (placeholder), `/board/a-levels`, `/topical/a-levels`
3. **Company** — `#about` (placeholder), `#support` → `handleWhatsAppGeneralInquiry`
4. **Newsletter** — Email input + Subscribe button (no logic attached — purely decorative)

**Bottom bar:** Copyright text + Terms of Service / Privacy Policy links (both `#` placeholders).

---

### 6.3 ScrollToTop
**File:** [`src/SharedComponents/ScrollToTop.jsx`](./src/SharedComponents/ScrollToTop.jsx)

A renderless utility component. Uses `useLocation` to watch `pathname`. On every route change, fires `window.scrollTo(0, 0)`.

Must be placed **inside** `<Router>` but **outside** `<Routes>` in App.jsx (which it is).

---

## 7. Services

### 7.1 WhatsAppService
**File:** [`src/Services/WhatsAppService.jsx`](./src/Services/WhatsAppService.jsx)

Centralized service for all WhatsApp deep links. All functions share the same phone number.

**Phone number:** `923292248788` (hardcoded — Pakistan format, no `+`)

| Export | Used By | Message |
|---|---|---|
| `handleWhatsAppGeneralInquiry(e)` | LandingPage, Footer, MobileHeader | General inquiry about resources |
| `handleWhatsAppAllComponents(e, boardTitle, subjectName, subjectCode)` | Components page | Interested in ALL components for a subject |
| `handleWhatsappTopics(e, boardTitle, subjectName, subjectCode, componentName, selectedTopicNames[])` | Topics page | Lists specific selected topics (bulleted) |
| `handleWhatsAppMockPapers(e)` | MockPapers page | Interested in custom mock paper service |

**All functions:**
1. Call `e.preventDefault()`
2. Build a message string with interpolated data
3. `encodeURIComponent()` the message
4. `window.open('https://wa.me/NUMBER?text=ENCODED', '_blank')`

**Guard clause in `handleWhatsappTopics`:** Returns early if `selectedTopicNames` array is empty.

---

## 8. Data Layer

All data is **static JavaScript objects** — no API calls, no database.

### 8.1 boardsData.js
**File:** [`src/data/boardsData.js`](./src/data/boardsData.js)  
**Used by:** `SubjectMarketplace`

**Structure:**
```js
boardsData = {
  "o-levels": {
    title: string,
    description: string,
    subjects: Subject[]
  },
  "a-levels": { ... },
  "igcse": { ... }
}

Subject = {
  id: string,         // e.g. "ol-math"
  name: string,       // e.g. "Mathematics"
  code: string,       // e.g. "4024"
  icon: string,       // Material Symbol name
  tag: string,        // e.g. "PAST PAPERS"
  tagColor: string,   // Tailwind classes
  resources: string   // e.g. "1.2k"
}
```

**Subjects per board:**
- O Levels: 9 subjects (Math, Chem, Bio, Physics, CS, Econ, Accounting, Business, Add Math)
- IGCSE: 13 subjects
- A Levels: 9 subjects

---

### 8.2 topicalData.js
**File:** [`src/data/topicalData.js`](./src/data/topicalData.js)  
**Used by:** `TopicalPastPapers`, `Components`, `Topics`  
**Size:** ~1,200 lines, ~106KB — the largest file in the project.

**Structure (extends boardsData with components and topics):**
```js
topicalData = {
  "o-levels": {
    title: string,
    description: string,
    subjects: SubjectWithComponents[]
  },
  "a-levels": { ... },
  "igcse": { ... }
}

SubjectWithComponents = {
  id, name, code, icon, tag, tagColor, resources,  // Same as boardsData
  description: string,                              // NEW: subject-level description
  components: Component[]
}

Component = {
  id: string,           // e.g. "p1", "p2", "p4"
  name: string,         // e.g. "Paper 1 - Non-Calculator"
  type: string,         // e.g. "Core", "Extended", "Practical"
  tagColor: string,     // Tailwind classes
  icon: string,         // Material Symbol name
  description: string,  // Component description
  topics: Topic[]
}

Topic = {
  id: string,     // e.g. "t1"
  number: string, // Display number, e.g. "01"
  name: string,   // Topic name
  count: string   // Always "Questions" (placeholder — not a real count)
}
```

**Note:** Several subjects have `components: []` (empty arrays) — e.g., O Level Chemistry, O Level Add Math, IGCSE Add Math. These subjects are listed in TopicalPastPapers but will show no components when drilled into.

---

## 9. Design System (Tailwind Config)

All custom tokens are in [`tailwind.config.js`](./tailwind.config.js) under `theme.extend`.

### 9.1 Color Tokens

The palette follows Material Design 3 naming conventions with a deep blue primary.

| Token | Hex Value | Usage |
|---|---|---|
| `primary` | `#00376c` | Brand navy — buttons, headings, links |
| `primary-container` | `#1d4e89` | Darker primary for CTA backgrounds |
| `primary-fixed` | `#d5e3ff` | Light blue tint for tags, highlights |
| `secondary` | `#0060a9` | Secondary actions |
| `secondary-container` | `#59a6fd` | Decorative blobs |
| `tertiary` | `#2a3844` | Borders, subtle dividers |
| `tertiary-fixed` | `#d5e4f3` | Card borders, icon backgrounds |
| `background` | `#f7f9fb` | Page background |
| `surface` | `#f7f9fb` | Surface areas |
| `surface-container-lowest` | `#ffffff` | Navbar, card backgrounds |
| `surface-container-low` | `#f2f4f6` | Section backgrounds |
| `on-surface` | `#191c1e` | Primary text |
| `on-surface-variant` | `#424750` | Secondary/muted text |
| `on-primary` | `#ffffff` | Text on primary buttons |
| `error` | `#ba1a1a` | Error states |
| `outline-variant` | `#c3c6d1` | Subtle borders |

### 9.2 Typography Scale

Two font families:
- **Hanken Grotesk** (weights 600, 700) — headings, labels, display text
- **Inter** (weights 400, 600) — body text, captions

| Token | Size | Line Height | Weight | Font |
|---|---|---|---|---|
| `display-lg` | 48px | 56px | 700 | Hanken Grotesk |
| `headline-lg` | 32px | 40px | 700 | Hanken Grotesk |
| `headline-lg-mobile` | 28px | 36px | 700 | Hanken Grotesk |
| `headline-md` | 24px | 32px | 600 | Hanken Grotesk |
| `label-md` | 14px | 20px | 600 | Hanken Grotesk (letter-spacing: 0.05em) |
| `body-lg` | 18px | 28px | 400 | Inter |
| `body-md` | 16px | 24px | 400 | Inter |
| `caption` | 12px | 16px | 400 | Inter |

### 9.3 Spacing & Layout

| Token | Value | Usage |
|---|---|---|
| `margin-desktop` | 64px | Horizontal page padding on desktop |
| `margin-mobile` | 20px | Horizontal page padding on mobile |
| `gutter` | 24px | Grid gaps between cards |
| `container-max` | 1280px | Max page width (`max-w-container-max`) |
| `unit` | 8px | Base spacing unit |

**Max-width note:** LandingPage and MockPapers use `max-w-7xl` (Tailwind default 1280px), while SubjectMarketplace, TopicalPastPapers, Components, and Topics use `max-w-container-max` (custom 1280px token). Both resolve to the same value.

---

## 10. Global CSS (index.css)

**File:** [`src/index.css`](./src/index.css)

```css
/* Google Fonts (Hanken Grotesk 600/700 + Inter 400/600) */
@import url('...');

/* Material Symbols Outlined variable icon font */
@import url('...');

/* Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom utilities */
@layer utilities {
  .wavy-bg       /* SVG wave pattern, bottom-positioned, semi-transparent blue */
  .soft-blue-shadow  /* box-shadow: 0px 4px 20px rgba(29, 78, 137, 0.08) */
}

/* Icon weight override */
.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}

/* Native smooth scroll */
html { scroll-behavior: smooth; }
```

**`.wavy-bg`** — Used on the hero section and main content areas of inner pages. Adds a subtle decorative wave at the bottom of sections.  
**`.soft-blue-shadow`** — Applied on hover for card elements throughout the app.

---

## 11. Page Navigation Flow (User Journey)

```
/                           (LandingPage)
├── Click "Topical Past Papers" →  /topical/a-levels
│                                   (TopicalPastPapers)
│                                   └── Click a subject → /topical/a-levels/al-math
│                                                           (Components)
│                                                           └── Click a component → /topical/a-levels/al-math/p1
│                                                                                    (Topics)
│                                                                                    └── Select topics → WhatsApp
│
├── Click "Yearly Past Papers" →  /board/a-levels
│                                  (SubjectMarketplace)
│                                  └── [Cards have no links — endpoint page]
│
├── Click "Mock Papers" →  /mock-papers
│                           (MockPapers)
│                           └── Click CTA → WhatsApp
│
├── Board Dropdown → /topical/o-levels  OR  /board/o-levels  (and same for a-levels, igcse)
│
└── Contact Us → WhatsApp (general inquiry)
```

**Breadcrumb trail for topical flow:**
```
Home > Cambridge Assessment > [Board Title] > [Subject (Code)] > [Component Name]
```

---

## 12. Known Patterns & Conventions

### NavBar Duplication
Every page contains its own inline NavBar JSX (not a shared component). This is a known architectural decision — likely for per-page customization. The desktop nav is identical across SubjectMarketplace, TopicalPastPapers, Components, and Topics. LandingPage and MockPapers have slightly different nav variants.

### Search Bar Pattern
All inner pages (SubjectMarketplace, TopicalPastPapers, Components, Topics) share the same search pattern:
```js
const [searchTerm, setSearchTerm] = useState('');
useEffect(() => { setSearchTerm(''); }, [boardId, subjectId, ...]);
const filtered = data.filter(item => 
  item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  item.code?.includes(searchTerm)
);
```
Search bar is only visible on `lg` screens and above.

### Empty State Pattern
All pages with dynamic grids show a consistent empty state when no results match:
```jsx
<span className="material-symbols-outlined">search_off</span>
<h3>No [items] found</h3>
<p>Try adjusting your search term.</p>
```

### Data Fallback Pattern
Both SubjectMarketplace and TopicalPastPapers default to `a-levels` if `boardId` doesn't match any key:
```js
const boardData = data[boardId] || data['a-levels'];
```

### Mobile Menu State
Every page manages its own `isMobileMenuOpen` state and passes it as props to `<MobileHeader>`. This is not lifted to a global store.

### Material Icons
Used via `<span className="material-symbols-outlined">icon_name</span>`. Requires the CDN import in `index.css`. Icon variation settings are globally overridden in CSS to weight 400, fill 0.

---

## 13. Known Issues & TODOs

| Issue | Location | Severity |
|---|---|---|
| `MockPapers` imports `MobileHeader` but never renders it — mobile menu button toggles state but has no overlay | `MockPapers.jsx` L65 | 🟡 Medium |
| "Contact Us" in inner-page NavBars links to `/contact` — a route that doesn't exist | SubjectMarketplace, TopicalPastPapers, Components, Topics NavBars | 🟡 Medium |
| AS Level / A2 Level filter buttons on TopicalPastPapers are decorative only (no filter logic) | `TopicalPastPapers.jsx` L133-138 | 🟡 Medium |
| "Subject Notes" card on LandingPage links to `#notes` — placeholder, no notes page exists | `LandingPage.jsx` L183 | 🟡 Medium |
| Footer social links (`#facebook`, `#twitter`) and legal links (`#terms`, `#privacy`) are placeholders | `Footer.jsx` | 🟢 Low |
| Footer newsletter Subscribe button has no handler | `Footer.jsx` L40 | 🟢 Low |
| `SubjectMarketplace` subject cards have "Explore" buttons with no navigation | `SubjectMarketplace.jsx` L158 | 🟡 Medium |
| Multiple subjects in `topicalData` have `components: []` — users reach a Components page with no content | `topicalData.js` | 🟡 Medium |
| `topic.count` is always the string `"Questions"` — not an actual question count | `topicalData.js` | 🟢 Low |
| `src/Pages/main.jsx` is a duplicate of `src/main.jsx` and appears unused | `src/Pages/main.jsx` | 🟢 Low |
| Hero image in LandingPage uses a Google AIDA external URL (may break) | `LandingPage.jsx` L111 | 🟡 Medium |
| `assets/hero.png` exists but is unused (hero uses external URL instead) | `src/assets/hero.png` | 🟢 Low |

---

*Generated by code analysis — covers all source files as of 2026-06-29.*
