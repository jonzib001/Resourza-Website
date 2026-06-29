// src/SharedComponents/BoardNavBar.jsx
// Shared Board dropdown used in the desktop navbar across every page.
// Shows four exam boards (Cambridge, Edexcel, IB, ACCA) that link to /boards/:id.
// To add/remove boards, edit the BOARDS array below.

import React from 'react';
import { Link } from 'react-router-dom';

const BOARDS = [
  { id: 'cambridge', label: 'Cambridge' },
  { id: 'edexcel',   label: 'Edexcel'   },
  { id: 'ib',        label: 'IB'        },
  { id: 'acca',      label: 'ACCA'      },
];

const BoardNavBar = () => (
  <div className="relative group cursor-pointer py-4">
    <div className="flex items-center gap-1 text-on-surface-variant font-body-md group-hover:text-primary transition-colors">
      <span>Board</span>
      <span className="material-symbols-outlined text-sm">expand_more</span>
    </div>
    <div className="absolute top-full left-0 w-44 bg-surface-container-lowest border border-tertiary/20 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2">
      {BOARDS.map((board) => (
        <Link
          key={board.id}
          to={`/boards/${board.id}`}
          className="flex items-center gap-2 px-4 py-2.5 text-on-surface-variant hover:bg-primary/5 hover:text-primary rounded-lg transition-colors font-body-md"
        >
          {board.label}
        </Link>
      ))}
    </div>
  </div>
);

export default BoardNavBar;
