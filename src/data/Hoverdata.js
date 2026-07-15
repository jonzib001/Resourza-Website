// src/data/Hoverdata.js
// Board picker data used by ResourceCardLanding on the LandingPage.
// Each entry maps to an existing route in App.jsx.

export const TOPICAL_BOARDS = [
  { id: 'o-levels', label: 'O Levels', icon: 'menu_book',         to: '/topical/o-levels' },
  { id: 'a-levels', label: 'A Levels', icon: 'auto_stories',      to: '/topical/a-levels' },
  { id: 'igcse',    label: 'IGCSE',    icon: 'workspace_premium', to: '/topical/igcse'    },
];

export const YEARLY_BOARDS = [
  { id: 'o-levels', label: 'O Levels', icon: 'menu_book',         to: '/board/o-levels' },
  { id: 'a-levels', label: 'A Levels', icon: 'auto_stories',      to: '/board/a-levels' },
  { id: 'igcse',    label: 'IGCSE',    icon: 'workspace_premium', to: '/board/igcse'    },
];

export const SUBJECT_NOTES_BOARDS = [
  { id: 'o-levels', label: 'O Levels', icon: 'menu_book',         to: '/notes/o-levels' },
  { id: 'a-levels', label: 'A Levels', icon: 'auto_stories',      to: '/notes/a-levels' },
  { id: 'igcse',    label: 'IGCSE',    icon: 'workspace_premium', to: '/notes/igcse'    },
];
