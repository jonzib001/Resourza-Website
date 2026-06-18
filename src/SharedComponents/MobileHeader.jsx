import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { handleWhatsAppGeneralInquiry } from '../Services/WhatsAppService';

const MobileHeader = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  // States to handle the accordion dropdowns
  const [isBoardOpen, setIsBoardOpen] = useState(false);
  const [openSubBoard, setOpenSubBoard] = useState(''); // 'o-levels', 'a-levels', or 'igcse'

  // Close the menu and reset all dropdowns
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setIsBoardOpen(false);
    setOpenSubBoard('');
  };

  // Smooth scroll or redirect for the Resources link
  const handleResourcesClick = (e) => {
    e.preventDefault();
    closeMenu();
    const element = document.getElementById('academic-support');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#academic-support';
    }
  };

  // Trigger WhatsApp service and close menu
  const handleContactClick = (e) => {
    handleWhatsAppGeneralInquiry(e);
    closeMenu();
  };

  // Toggle nested board dropdowns safely
  const toggleSubBoard = (board) => {
    setOpenSubBoard(openSubBoard === board ? '' : board);
  };

  // Helper array to keep JSX clean
  const boardsList = [
    { name: 'O Levels', id: 'o-levels' },
    { name: 'A Levels', id: 'a-levels' },
    { name: 'IGCSE', id: 'igcse' }
  ];

  return (
    <div 
      className={`fixed inset-0 bg-white z-[100] transform transition-transform duration-300 md:hidden flex flex-col ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Top Bar matching new design */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-tertiary/20">
        <Link to="/" onClick={closeMenu} className="text-2xl font-headline-md font-bold tracking-tight text-primary">
          Resourza
        </Link>
        <button 
          onClick={closeMenu} 
          aria-label="Close menu" 
          className="p-2 text-primary hover:bg-surface-container-low rounded-full transition-colors"
        >
          <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" x2="6" y1="6" y2="18"></line>
            <line x1="6" x2="18" y1="6" y2="18"></line>
          </svg>
        </button>
      </header>

      {/* Main Navigation List */}
      <nav className="flex-grow pt-4 overflow-y-auto">
        <ul className="flex flex-col">
          
          {/* 1. Board Accordion */}
          <li className="border-b border-tertiary/20">
            <button 
              onClick={() => setIsBoardOpen(!isBoardOpen)} 
              className="w-full flex items-center justify-between px-6 py-6 text-xl font-semibold text-primary hover:bg-primary/5 transition-colors group"
            >
              <span>Board</span>
              <svg 
                className={`w-5 h-5 text-outline-variant group-hover:text-primary transition-transform duration-300 ${isBoardOpen ? 'rotate-180 text-primary' : ''}`} 
                fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
            
            {/* Nested Sub-boards */}
            <div className={`overflow-hidden transition-all duration-300 ${isBoardOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col px-6 pb-6 bg-white/50">
                {boardsList.map((board) => (
                  <div key={board.id} className="flex flex-col border-l-2 border-tertiary/10 ml-2 pl-4 mt-2">
                    <button 
                      onClick={() => toggleSubBoard(board.id)} 
                      className="flex items-center justify-between py-4 text-lg font-medium text-on-surface-variant hover:text-primary transition-colors"
                    >
                      <span>{board.name}</span>
                      <span className={`material-symbols-outlined transition-transform duration-200 ${openSubBoard === board.id ? 'rotate-180 text-primary' : ''}`}>
                        expand_more
                      </span>
                    </button>
                    
                    {/* Nested Links for specific Board */}
                    <div className={`overflow-hidden transition-all duration-300 flex flex-col pl-4 gap-4 border-l-2 border-primary/20 ml-2 ${openSubBoard === board.id ? 'max-h-40 py-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <Link 
                        to={`/topical/${board.id}`} 
                        onClick={closeMenu} 
                        className="text-base text-on-surface-variant hover:text-primary transition-colors"
                      >
                        Topical Past Papers
                      </Link>
                      <Link 
                        to={`/board/${board.id}`} 
                        onClick={closeMenu} 
                        className="text-base text-on-surface-variant hover:text-primary transition-colors"
                      >
                        Yearly Past Papers
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {/* 2. Contact Us */}
          <li className="border-b border-tertiary/20">
            <a 
              href="#contact" 
              onClick={handleContactClick} 
              className="block px-6 py-6 text-xl font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Contact Us
            </a>
          </li>

          {/* 3. Resources */}
          <li className="border-b border-tertiary/20">
            <a 
              href="#academic-support" 
              onClick={handleResourcesClick} 
              className="block px-6 py-6 text-xl font-semibold text-primary hover:bg-primary/5 transition-colors"
            >
              Resources
            </a>
          </li>

        </ul>
      </nav>

      {/* Footer */}
      <footer className="p-8 mt-auto">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-outline-variant font-medium uppercase tracking-widest">One Source Every Resource</p>
          <div className="h-1 w-12 bg-primary"></div>
        </div>
      </footer>

    </div>
  );
};

export default MobileHeader;