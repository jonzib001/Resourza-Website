// src/TopicalPastPapers.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { topicalData } from '../data/topicalData';
import { handleWhatsAppGeneralInquiry } from '../Services/WhatsAppService';
import Footer from '../SharedComponents/Footer';
import MobileHeader from '../SharedComponents/MobileHeader';
import BoardNavBar from '../SharedComponents/BoardNavBar';

const TopicalPastPapers = () => {
  const { boardId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Fetch data based on the URL parameter, default to a-levels if not found
  const boardData = topicalData[boardId] || topicalData['a-levels'];

  // Reset search when switching boards
  useEffect(() => {
    setSearchTerm('');
  }, [boardId]);

  // Dynamic filtering logic for the search bar
  const filteredSubjects = boardData.subjects.filter(subject => 
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    subject.code.includes(searchTerm)
  );

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest fixed top-0 w-full z-50 border-b border-tertiary/20">
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-2">
            {/* Redirects to landing page */}
            <img src="/Final-Logo.png" alt="Resourza" className="h-8" />
            <Link to="/" className="text-headline-md font-headline-md font-bold text-primary">Resourza</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-gutter ml-auto mr-0">
            <a href="#contact" onClick={(e) => handleWhatsAppGeneralInquiry(e, `${boardData.title} Topicals`)} className="text-on-surface-variant font-body-md hover:text-primary transition-colors cursor-pointer">Contact Us</a>
            <Link to="/" className="text-primary font-bold font-body-md border-b-2 border-primary">Resources</Link>
            
            {/* Nested Board Dropdown */}
            <BoardNavBar />
          </div>
          
          {/* Functional Search Bar */}
          <div className="flex items-center gap-4 ml-8">
            <div className="hidden lg:flex items-center bg-white px-4 py-2 rounded-full border border-tertiary/20 soft-blue-shadow">
              <span className="material-symbols-outlined text-primary mr-2" style={{ fontSize: '20px' }}>search</span>
              <input 
                type="text" 
                placeholder="Search resources..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-sm w-40 font-body-md outline-none"
              />
            </div>
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

      <main className="w-full pt-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop wavy-bg flex-1">
        {/* Hero Section */}
        <div className="w-full bg-[#f1f6ff] py-12 md:py-16 mb-10 rounded-2xl px-8">
          <div className="max-w-container-max ml-0">
            <nav className="flex items-center gap-2 mb-6 text-[#708090] font-label-md text-[12px] uppercase tracking-wider">
              {/* Redirects to landing page */}
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="hover:text-primary cursor-default">Cambridge Assessment</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary font-bold">{boardData.title} Topicals</span>
            </nav>
            <h1 className="text-display-lg font-display-lg text-primary mb-6">{boardData.title} Topicals</h1>
            <p className="text-on-surface-variant font-body-lg max-w-3xl leading-relaxed">
              {boardData.description}
            </p>
            
            {/* Level filters - Dynamically show only if it is A Levels */}
            {boardId === 'a-levels' && (
              <div className="flex gap-4 mt-8">
                <button className="px-6 py-2 rounded-full bg-primary text-on-primary font-label-md shadow-md">AS Level</button>
                <button className="px-6 py-2 rounded-full bg-white text-primary border border-primary/20 hover:bg-primary/5 transition-colors font-label-md">A2 Level</button>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Grid */}
        <section className="flex-1 mb-16 w-full">
          {filteredSubjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
              {filteredSubjects.map((subject) => (
                <Link 
                  to={`/topical/${boardId}/${subject.id}`} 
                  key={subject.id} 
                  className="bg-white p-8 rounded-xl border border-tertiary-fixed hover:border-primary transition-all group hover:soft-blue-shadow flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">{subject.icon}</span>
                      </div>
                      <span className={`${subject.tagColor} px-3 py-1 rounded-full font-label-md text-[10px] uppercase`}>
                        {subject.tag}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-3">{subject.name}({subject.code})</h3>
                    <p className="font-body-md text-on-surface-variant mb-6">
                      Pure Mathematics, Statistics & Mechanics modules with solved marks.
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-6 border-t border-surface-container">
                    <span className="text-primary font-bold font-label-md">{subject.resources} Resources</span>
                    <span className="inline-flex items-center text-primary font-label-md group-hover:gap-2 transition-all">
                      Explore <span className="material-symbols-outlined ml-1">chevron_right</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-surface-variant mb-4">search_off</span>
              <h3 className="text-headline-md text-primary">No subjects found</h3>
              <p className="text-on-surface-variant">Try adjusting your search term or syllabus code.</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TopicalPastPapers;