// src/SharedComponents/ResourceCardLanding.jsx
// Interactive service card used in the "Comprehensive Academic Support" section
// of LandingPage. Supports:
//   Desktop  — hover to reveal a full-card overlay with board links
//   Mobile   — tap the CTA button to toggle an inline list of board links

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * @param {string}   icon        Material Symbol icon name for the card
 * @param {string}   title       Card heading
 * @param {string}   description Short body text
 * @param {string}   cta         Call-to-action label shown before the board list
 * @param {Array}    boards      Array of { id, label, icon, to } from Hoverdata.js
 */
const ResourceCardLanding = ({ icon, title, description, cta, boards }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative bg-white rounded-xl border border-tertiary-fixed hover:border-primary transition-all overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => {
        // Toggle open state on mobile/tablet views
        if (window.innerWidth < 768) {
          setIsOpen(prev => !prev);
        }
      }}
    >
      {/* ── Static card body ──────────────────────────────────────────────── */}
      <div className="p-8 flex flex-col h-full">
        <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center mb-6 text-primary transition-transform duration-300 group-hover:scale-110">
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-primary mb-3">{title}</h3>
        <p className="font-body-md text-on-surface-variant mb-6">{description}</p>

        {/* Desktop: static CTA hint (the hover overlay takes over on md+) */}
        <span className="hidden md:inline-flex items-center text-primary font-label-md gap-1">
          {cta}
          <span className="material-symbols-outlined text-sm">chevron_right</span>
        </span>

        {/* Mobile: tap-to-toggle indicator (now passive, parent handles click) */}
        <div className="md:hidden inline-flex items-center gap-1 text-primary font-label-md mt-auto">
          <span>{isOpen ? 'Close' : cta}</span>
          <span
            className="material-symbols-outlined text-sm transition-transform duration-200"
            style={{ transform: isOpen ? 'rotate(90deg)' : 'none' }}
          >
            chevron_right
          </span>
        </div>

        {/* Mobile: inline board list — slides open on tap */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-56 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent toggling/closing when clicking links
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-tertiary-fixed">
            {boards.map((board) => (
              <Link
                key={board.id}
                to={board.to}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-colors font-body-md text-sm"
              >
                <span className="material-symbols-outlined text-base text-primary shrink-0">{board.icon}</span>
                <span className="flex-1">{board.label}</span>
                <span className="material-symbols-outlined text-sm text-outline">chevron_right</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── Desktop: full-card hover overlay (same pattern as BoardSelection) ── */}
      <div
        className={`hidden md:flex absolute inset-0 bg-white/[0.97] rounded-xl border border-primary flex-col justify-center px-8 py-6 gap-3 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <p className="font-label-md text-primary uppercase tracking-widest text-[11px] mb-1">
          {title} — Choose a level
        </p>
        {boards.map((board) => (
          <Link
            key={board.id}
            to={board.to}
            className="flex items-center gap-3 p-3 rounded-xl border border-tertiary-fixed hover:border-primary hover:bg-primary/5 hover:soft-blue-shadow transition-all group/link"
          >
            <div className="w-9 h-9 rounded-lg bg-tertiary-fixed flex items-center justify-center text-primary shrink-0 group-hover/link:scale-110 transition-transform">
              <span className="material-symbols-outlined text-base">{board.icon}</span>
            </div>
            <span className="flex-1 font-body-md text-on-surface group-hover/link:text-primary transition-colors text-sm">
              {board.label}
            </span>
            <span className="material-symbols-outlined text-sm text-outline group-hover/link:text-primary transition-colors">
              chevron_right
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResourceCardLanding;
