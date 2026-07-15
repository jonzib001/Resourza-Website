// src/Pages/TopicalNotes.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { notesData } from '../data/NotesData';
import { handleWhatsAppGeneralInquiry } from '../Services/WhatsAppService';
import Footer from '../SharedComponents/Footer';
import MobileHeader from '../SharedComponents/MobileHeader';
import BoardNavBar from '../SharedComponents/BoardNavBar';

const TopicalNotes = () => {
  const { boardId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for selected subjects (only used if !isALevels)
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  // Fetch data based on the URL parameter, default to a-levels if not found
  const boardData = notesData[boardId] || notesData['a-levels'];

  // Reset search and selections when switching boards
  useEffect(() => {
    setSearchTerm('');
    setSelectedSubjects([]);
  }, [boardId]);

  // Dynamic filtering logic for the search bar
  const filteredSubjects = boardData.subjects.filter(subject =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    subject.code.includes(searchTerm)
  );

  // Check if subject is A-levels to make it clickable to next page
  const isALevels = boardId === 'a-levels';

  // Toggle individual subject selection
  const toggleSubject = (subjectId) => {
    if (isALevels) return; // A-levels don't use this selection logic
    setSelectedSubjects(prev => 
      prev.includes(subjectId) 
        ? prev.filter(id => id !== subjectId) 
        : [...prev, subjectId]
    );
  };

  // Select or Deselect All
  const handleSelectAll = () => {
    if (selectedSubjects.length === filteredSubjects.length) {
      setSelectedSubjects([]);
    } else {
      setSelectedSubjects(filteredSubjects.map(s => s.id));
    }
  };

  // Trigger WhatsApp
  const triggerWhatsApp = (e) => {
    const selectedSubjectNames = filteredSubjects
      .filter(s => selectedSubjects.includes(s.id))
      .map(s => `${s.name} (${s.code})`)
      .join(', ');

    const context = `${boardData?.title} — ${selectedSubjectNames} Notes`;
    handleWhatsAppGeneralInquiry(e, context);
  };

  // Shared card inner markup — used by both Link and div wrappers
  const renderCardContent = (subject, isSelected = false) => (
    <>
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-3xl">{subject.icon}</span>
          </div>
          <span className={`${subject.tagColor} px-3 py-1 rounded-full font-label-md text-[10px] uppercase`}>
            {subject.tag}
          </span>
        </div>
        <h3 className="font-headline-md text-headline-md text-primary mb-3">{subject.name} ({subject.code})</h3>
        <p className="font-body-md text-on-surface-variant mb-6">
          {subject.description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4 pt-6 border-t border-surface-container">
        <span className="inline-flex items-center text-primary font-label-md group-hover:gap-2 transition-all">
          {isALevels ? "Explore " : (isSelected ? "Selected " : "Click To Select ")} 
          {isALevels && <span className="material-symbols-outlined ml-1">chevron_right</span>}
        </span>
      </div>
    </>
  );

  const getCardClasses = (isSelected) => 
    `p-8 rounded-xl border transition-all group flex flex-col justify-between cursor-pointer ${
      isSelected 
        ? 'bg-primary/5 border-primary shadow-[0px_4px_20px_rgba(29,78,137,0.12)]' 
        : 'bg-white border-tertiary-fixed hover:border-primary hover:soft-blue-shadow'
    }`;

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest fixed top-0 w-full z-50 border-b border-tertiary/20">
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-2">
            <img src="/Final-Logo.png" alt="Resourza" className="h-8" />
            <Link to="/" className="text-headline-md font-headline-md font-bold text-primary">Resourza</Link>
          </div>

          <div className="hidden md:flex items-center gap-gutter ml-auto mr-0">
            <a href="#contact" onClick={(e) => handleWhatsAppGeneralInquiry(e, `${boardData.title} Notes`)} className="text-on-surface-variant font-body-md hover:text-primary transition-colors cursor-pointer">Contact Us</a>
            <Link to="/" className="text-primary font-bold font-body-md border-b-2 border-primary">Resources</Link>

            <BoardNavBar />
          </div>

          {/* Functional Search Bar */}
          <div className="flex items-center gap-4 ml-8">
            <div className="hidden lg:flex items-center bg-white px-4 py-2 rounded-full border border-tertiary/20 soft-blue-shadow">
              <span className="material-symbols-outlined text-primary mr-2" style={{ fontSize: '20px' }}>search</span>
              <input
                type="text"
                placeholder="Search subjects..."
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
        <div className="w-full bg-[#f1f6ff] py-12 md:py-16 mb-10 rounded-2xl px-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <nav className="flex items-center gap-2 mb-6 text-[#708090] font-label-md text-[12px] uppercase tracking-wider">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="hover:text-primary cursor-default">Cambridge Assessment</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary font-bold">{boardData.title} Notes</span>
            </nav>
            <h1 className="text-display-lg font-display-lg text-primary mb-6">{boardData.title} Notes</h1>
            <p className="text-on-surface-variant font-body-lg max-w-3xl leading-relaxed">
              {boardData.description}
            </p>
          </div>
          
          {/* Select All Toggle Button (Only for non A-Levels) */}
          {!isALevels && filteredSubjects.length > 0 && (
            <button 
              onClick={handleSelectAll}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/20 text-primary font-label-md hover:bg-primary/5 transition-all whitespace-nowrap mb-4 md:mb-0"
            >
              <span className="material-symbols-outlined text-[20px]">
                {selectedSubjects.length === filteredSubjects.length ? 'deselect' : 'done_all'}
              </span>
              {selectedSubjects.length === filteredSubjects.length ? 'Deselect All' : 'Select All Subjects'}
            </button>
          )}
        </div>

        {/* Dynamic Grid */}
        <section className="flex-1 w-full mb-12">
          {filteredSubjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
              {filteredSubjects.map((subject) => {
                const isSelected = selectedSubjects.includes(subject.id);
                return isALevels ? (
                  // A Level subject → clickable Link to NotesLevelSelection
                  <Link 
                    to={`/notes/${boardId}/${subject.id}`} 
                    key={subject.id} 
                    className={getCardClasses(false)}
                  >
                    {renderCardContent(subject)}
                  </Link>
                ) : (
                  // IGCSE / O Level → selectable card
                  <div 
                    key={subject.id} 
                    onClick={() => toggleSubject(subject.id)}
                    className={getCardClasses(isSelected)}
                  >
                    {renderCardContent(subject, isSelected)}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-surface-variant mb-4">search_off</span>
              <h3 className="text-headline-md text-primary">No subjects found</h3>
              <p className="text-on-surface-variant">Try adjusting your search term or syllabus code.</p>
            </div>
          )}
        </section>

        {/* WhatsApp CTA (Only for non A-Levels) */}
        {!isALevels && (
          <section className="mt-8 mb-16 p-8 md:p-12 bg-primary-fixed/30 rounded-xl text-center flex flex-col items-center gap-4 border border-primary/10">
            <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-primary">
              Ready to get your notes?
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
              {selectedSubjects.length > 0 
                ? `You have selected ${selectedSubjects.length} subject(s). Connect with our team to unlock them instantly.` 
                : `Check the boxes above to select the specific subjects you need for ${boardData.title}.`
              }
            </p>
            
            <button 
              onClick={triggerWhatsApp}
              disabled={selectedSubjects.length === 0}
              className={`mt-4 flex items-center gap-2 px-8 py-4 rounded-full font-label-md text-label-md transition-all shadow-sm ${
                selectedSubjects.length > 0 
                  ? 'bg-primary text-on-primary hover:opacity-90 cursor-pointer hover:-translate-y-1' 
                  : 'bg-surface-variant text-outline cursor-not-allowed opacity-70'
              }`}
            >
              <span className="material-symbols-outlined">chat</span>
              {selectedSubjects.length > 0 
                ? `Get ${selectedSubjects.length} Selected Subject${selectedSubjects.length > 1 ? 's' : ''}` 
                : 'Select subjects to continue'
              }
            </button>
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TopicalNotes;

