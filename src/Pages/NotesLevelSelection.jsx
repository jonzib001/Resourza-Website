import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { notesData } from '../data/NotesData';
import { handleWhatsAppGeneralInquiry } from '../Services/WhatsAppService';
import Footer from '../SharedComponents/Footer';
import MobileHeader from '../SharedComponents/MobileHeader';
import BoardNavBar from '../SharedComponents/BoardNavBar';

const NotesLevelSelection = () => {
  const { boardId, subjectId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State for selected levels
  const [selectedLevels, setSelectedLevels] = useState([]);
  
  const boardData = notesData[boardId];
  const subjectData = boardData?.subjects.find(s => s.id === subjectId);

  // Reset search and selections when URL changes
  useEffect(() => {
    setSearchTerm('');
    setSelectedLevels([]);
  }, [boardId, subjectId]);

  const levels = [
    { id: 'as-level', name: 'AS Level', icon: 'menu_book' },
    { id: 'a2-level', name: 'A2 Level', icon: 'auto_stories' }
  ];

  // Toggle individual level
  const toggleLevel = (levelId) => {
    setSelectedLevels(prev => 
      prev.includes(levelId) 
        ? prev.filter(id => id !== levelId) 
        : [...prev, levelId]
    );
  };

  // Call external WhatsApp Service
  const triggerWhatsApp = (e) => {
    const selectedLevelNames = levels
      .filter(l => selectedLevels.includes(l.id))
      .map(l => l.name)
      .join(' and ');

    const context = `${boardData?.title} ${subjectData?.name} (${subjectData?.code}) — ${selectedLevelNames} Notes`;
    handleWhatsAppGeneralInquiry(e, context);
  };

  if (!subjectData) {
    return <div className="p-20 text-center text-primary text-headline-lg">Subject not found.</div>;
  }

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest fixed top-0 w-full z-50 border-b border-tertiary/20">
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-2">
            <img src="/Final-Logo.png" alt="Resourza" className="h-8" />
            <Link to="/" className="text-headline-md font-headline-md font-bold text-primary transition-all hover:text-secondary-container">Resourza</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-gutter ml-auto mr-0">
            <a href="#contact" onClick={(e) => handleWhatsAppGeneralInquiry(e, `${boardData?.title} ${subjectData?.name} (${subjectData?.code}) Notes`)} className="text-on-surface-variant font-body-md hover:text-primary transition-colors cursor-pointer">Contact Us</a>
            <Link to="/" className="text-primary font-bold font-body-md border-b-2 border-primary">Resources</Link>
            
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

      <main className="w-full pt-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-1 pb-12">
        {/* Dynamic Breadcrumbs */}
        <nav className="mb-8 flex items-center text-caption font-caption text-on-surface-variant overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="material-symbols-outlined mx-2 text-sm">chevron_right</span>
          <span className="hover:text-primary cursor-default">Cambridge Assessment</span>
          <span className="material-symbols-outlined mx-2 text-sm">chevron_right</span>
          <Link to={`/notes/${boardId}`} className="hover:text-primary transition-colors">{boardData?.title || 'Board'} Notes</Link>
          <span className="material-symbols-outlined mx-2 text-sm">chevron_right</span>
          <span className="text-primary font-medium">{subjectData.name} ({subjectData.code})</span>
        </nav>
        
        {/* Header Area */}
        <div className="mb-10 border-b border-tertiary/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mb-4">
              {subjectData.name} ({subjectData.code}) Notes
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
              Select the levels below to request comprehensive notes for this subject.
            </p>
          </div>
        </div>

        {/* Level Selection Options */}
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {levels.map((level) => {
              const isSelected = selectedLevels.includes(level.id);
              return (
                <div 
                  key={level.id} 
                  onClick={() => toggleLevel(level.id)}
                  className={`group flex items-center p-6 gap-4 cursor-pointer rounded-xl border transition-all ${
                    isSelected 
                      ? 'bg-primary/5 border-primary shadow-[0px_4px_20px_rgba(29,78,137,0.12)]' 
                      : 'bg-surface-container-lowest border-tertiary-fixed-dim/30 hover:border-primary/50 hover:shadow-[0px_4px_20px_rgba(29,78,137,0.08)]'
                  }`}
                >
                  <div className={`shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-primary border-primary text-white' : 'border-outline-variant bg-white'
                  }`}>
                    {isSelected && <span className="material-symbols-outlined text-[16px] font-bold">check</span>}
                  </div>
                  
                  <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">{level.icon}</span>
                  </div>
                  
                  <span className="text-headline-md font-headline-md text-on-surface group-hover:text-primary transition-colors leading-tight">
                    {level.name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dynamic WhatsApp CTA based on selection */}
        <section className="mt-12 p-8 md:p-12 bg-primary-fixed/30 rounded-xl text-center flex flex-col items-center gap-4 border border-primary/10">
          <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-primary">
            Ready to get your notes?
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
            {selectedLevels.length > 0 
              ? `You have selected ${selectedLevels.length} level(s). Connect with our team to get your notes instantly.` 
              : `Check the boxes above to select the levels you need for ${subjectData.name}.`
            }
          </p>
          
          <button 
            onClick={triggerWhatsApp}
            disabled={selectedLevels.length === 0}
            className={`mt-4 flex items-center gap-2 px-8 py-4 rounded-full font-label-md text-label-md transition-all shadow-sm ${
              selectedLevels.length > 0 
                ? 'bg-primary text-on-primary hover:opacity-90 cursor-pointer hover:-translate-y-1' 
                : 'bg-surface-variant text-outline cursor-not-allowed opacity-70'
            }`}
          >
            <span className="material-symbols-outlined">chat</span>
            {selectedLevels.length > 0 
              ? `Get ${selectedLevels.length === 2 ? 'Both Levels' : 'Selected Level'}` 
              : 'Select levels to continue'
            }
          </button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NotesLevelSelection;
