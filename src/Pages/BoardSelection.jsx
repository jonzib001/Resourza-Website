// src/Pages/BoardSelection.jsx
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../SharedComponents/Footer';
import MobileHeader from '../SharedComponents/MobileHeader';
import { handleWhatsAppGeneralInquiry } from '../Services/WhatsAppService';
import BoardNavBar from '../SharedComponents/BoardNavBar';

// ─── Static data for each exam board ─────────────────────────────────────────

const examBoardData = {
  cambridge: {
    name: 'Cambridge Assessment',
    subtitle: 'International Examinations',
    icon: 'school',
    description:
      'Access comprehensive, expert-curated resources for Cambridge International Examinations. Choose your qualification level to explore topical past papers, subject notes, and yearly archives.',
    subBoards: [
      {
        id: 'o-levels',
        name: 'O Levels',
        icon: 'menu_book',
        tag: 'CORE',
        tagColor: 'bg-secondary-fixed text-primary',
        description:
          'Complete syllabus coverage for Cambridge O Level. Topical papers, detailed notes and yearly archives across all core subjects.',
      },
      {
        id: 'a-levels',
        name: 'A Levels',
        icon: 'auto_stories',
        tag: 'ADVANCED',
        tagColor: 'bg-primary-fixed text-primary',
        description:
          'Advanced AS & A Level resources including topical modules, concise notes and decade-long past paper archives.',
      },
      {
        id: 'igcse',
        name: 'IGCSE',
        icon: 'workspace_premium',
        tag: 'INTERNATIONAL',
        tagColor: 'bg-tertiary-fixed text-primary',
        description:
          'Curated study paths designed for the IGCSE curriculum with topical breakdowns, notes and yearly past papers.',
      },
    ],
  },
  edexcel: {
    name: 'Edexcel',
    subtitle: 'Pearson Qualifications',
    icon: 'account_balance',
    comingSoon: true,
    description:
      'Edexcel resources are currently being curated by our academic team. Stay tuned for topical papers, notes and past papers.',
  },
  ib: {
    name: 'IB',
    subtitle: 'International Baccalaureate',
    icon: 'public',
    comingSoon: true,
    description:
      'IB Diploma Programme resources are coming soon. We are working with IB educators to bring you the best curated content.',
  },
  acca: {
    name: 'ACCA',
    subtitle: 'Association of Chartered Certified Accountants',
    icon: 'calculate',
    comingSoon: true,
    description:
      'ACCA professional qualification resources are on the way. Check back soon for comprehensive exam prep materials.',
  },
};

// ─── Sub-board card with hover resource options ────────────────────────────────

const SubBoardCard = ({ subBoard }) => {
  const [hovered, setHovered] = useState(false);

  const resourceLinks = [
    {
      label: 'Topical Past Papers',
      icon: 'list_alt',
      to: `/topical/${subBoard.id}`,
    },
    {
      label: 'Notes',
      icon: 'menu_book',
      to: `#notes`,
    },
    {
      label: 'Yearly Past Papers',
      icon: 'history',
      to: `/board/${subBoard.id}`,
    },
  ];

  return (
    <div
      className="relative bg-white rounded-2xl border border-tertiary-fixed hover:border-primary transition-all group soft-blue-shadow flex flex-col overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card body */}
      <div className="p-8 flex flex-col flex-1">
        {/* Icon + tag row */}
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 bg-tertiary-fixed rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-3xl">{subBoard.icon}</span>
          </div>
          <span className={`${subBoard.tagColor} px-3 py-1 rounded-full font-label-md text-[10px] uppercase tracking-widest`}>
            {subBoard.tag}
          </span>
        </div>

        <h3 className="font-headline-md text-headline-md text-primary mb-3">{subBoard.name}</h3>
        <p className="font-body-md text-on-surface-variant leading-relaxed flex-1">{subBoard.description}</p>

        {/* Hover CTA hint */}
        <div className="mt-6 flex items-center gap-1 text-primary font-label-md">
          <span>Select a resource</span>
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform duration-200">
            arrow_forward
          </span>
        </div>
      </div>

      {/* Hover reveal panel */}
      <div
        className={`absolute inset-0 bg-white/97 backdrop-blur-sm rounded-2xl border border-primary flex flex-col justify-center px-8 py-6 gap-3 transition-all duration-300 ${
          hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <p className="font-label-md text-primary uppercase tracking-widest mb-2">
          {subBoard.name} — Choose resource type
        </p>
        {resourceLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="flex items-center gap-3 p-4 rounded-xl border border-tertiary-fixed hover:border-primary hover:bg-primary/5 hover:soft-blue-shadow transition-all group/link"
          >
            <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-primary shrink-0 group-hover/link:scale-110 transition-transform">
              <span className="material-symbols-outlined">{link.icon}</span>
            </div>
            <span className="font-body-md text-on-surface group-hover/link:text-primary transition-colors">
              {link.label}
            </span>
            <span className="material-symbols-outlined text-sm text-outline ml-auto group-hover/link:text-primary transition-colors">
              chevron_right
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ─── Main Page Component ───────────────────────────────────────────────────────

const BoardSelection = () => {
  const { examBoardId } = useParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const boardInfo = examBoardData[examBoardId] || examBoardData['cambridge'];
  const isCambridge = examBoardId === 'cambridge';

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">

      {/* ── TopNavBar ─────────────────────────────────────────────────────── */}
      <header className="bg-surface-container-lowest fixed top-0 w-full z-50 border-b border-tertiary/20">
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-2">
            <Link to="/" className="text-headline-md font-headline-md font-bold text-primary">
              Resourza
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-gutter ml-auto mr-0">
            <a
              href="#contact"
              onClick={handleWhatsAppGeneralInquiry}
              className="text-on-surface-variant font-body-md hover:text-primary transition-colors cursor-pointer"
            >
              Contact Us
            </a>
            <Link to="/" className="text-on-surface-variant font-body-md hover:text-primary transition-colors">
              Resources
            </Link>
            <BoardNavBar />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-primary p-2 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>

          <MobileHeader
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        </nav>
      </header>

      {/* ── Main Content ──────────────────────────────────────────────────── */}
      <main className="w-full pt-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-1 pb-16">

        {/* ── Hero Banner ─────────────────────────────────────────────────── */}
        <div className="w-full bg-[#f1f6ff] py-12 md:py-16 mb-12 rounded-2xl px-8 border border-tertiary/10">
          <div className="max-w-container-max ml-0">

            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 mb-6 text-[#708090] font-label-md text-[12px] uppercase tracking-wider flex-wrap">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary font-bold">{boardInfo.name}</span>
            </nav>

            {/* Heading */}
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0">
                <span className="material-symbols-outlined text-4xl">{boardInfo.icon}</span>
              </div>
              <div>
                <p className="font-label-md text-on-surface-variant uppercase tracking-widest text-sm mb-1">
                  {boardInfo.subtitle}
                </p>
                <h1 className="text-display-lg font-display-lg text-primary leading-tight">
                  {boardInfo.name}
                </h1>
              </div>
            </div>

            <p className="text-on-surface-variant font-body-lg max-w-3xl leading-relaxed mt-6">
              {boardInfo.description}
            </p>
          </div>
        </div>

        {/* ── Cambridge: Sub-board cards ──────────────────────────────────── */}
        {isCambridge && (
          <>
            <div className="mb-8">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-2">
                Select a Qualification Level
              </h2>
              <p className="font-body-md text-on-surface-variant">
                Hover over a level to choose between Topical Past Papers, Notes, or Yearly Past Papers.
              </p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-16">
              {boardInfo.subBoards.map((subBoard) => (
                <SubBoardCard key={subBoard.id} subBoard={subBoard} />
              ))}
            </section>
          </>
        )}

        {/* ── Other boards: Coming Soon ────────────────────────────────────── */}
        {!isCambridge && (
          <section className="flex flex-col items-center text-center py-20 gap-6">
            <div className="w-24 h-24 bg-primary-fixed rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-5xl">construction</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary">Coming Soon</h2>
            <p className="font-body-lg text-on-surface-variant max-w-xl">
              Our academic team is currently curating resources for {boardInfo.name}. In the
              meantime, explore our Cambridge resources or reach out via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/boards/cambridge"
                className="px-8 py-4 rounded-full bg-primary text-on-primary font-label-md hover:opacity-90 shadow-lg transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">school</span>
                Explore Cambridge
              </Link>
              <button
                onClick={handleWhatsAppGeneralInquiry}
                className="px-8 py-4 rounded-full border border-primary/30 text-primary font-label-md hover:bg-primary/5 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">chat</span>
                Contact Us
              </button>
            </div>
          </section>
        )}

        {/* ── WhatsApp CTA strip (Cambridge only) ─────────────────────────── */}
        {isCambridge && (
          <section className="bg-surface-container-low rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-outline-variant/30 mb-4">
            <div>
              <h3 className="font-headline-md text-primary mb-2">Can't find what you need?</h3>
              <p className="font-body-md text-on-surface-variant max-w-lg">
                Our team sources and arranges resources on request. Just tell us what you need.
              </p>
            </div>
            <button
              onClick={handleWhatsAppGeneralInquiry}
              className="shrink-0 flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label-md hover:opacity-90 transition-all shadow-md whitespace-nowrap"
            >
              <span className="material-symbols-outlined">chat</span>
              Chat on WhatsApp
            </button>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BoardSelection;
