// src/Components.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { topicalData } from '../data/topicalData';
import { handleWhatsAppAllComponents } from '../Services/WhatsAppService';
import Footer from '../SharedComponents/Footer';
import MobileHeader from '../SharedComponents/MobileHeader';
import BoardNavBar from '../SharedComponents/BoardNavBar';


const Components = () => {
  // Grab BOTH parameters from the URL
  const { boardId, subjectId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Safely traverse the database to find the exact subject and its components
  const boardData = topicalData[boardId];
  const subjectData = boardData?.subjects.find(s => s.id === subjectId);

  // Reset search when URL changes
  useEffect(() => {
    setSearchTerm('');
  }, [boardId, subjectId]);

  // Dynamic filtering logic for the search bar against component names
  const filteredComponents = subjectData?.components?.filter(comp => 
    comp.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // WhatsApp Handler for ALL Components
  // const handleWhatsAppAllComponents = (e) => {
  //   e.preventDefault();
  //   const phoneNumber = "923292248788";
  //   const message = `Hi Resourza! I'm interested in purchasing ALL topical components for ${boardData?.title} ${subjectData?.name} (${subjectData?.code}). Could you share the details?`;
    
  //   const encodedMessage = encodeURIComponent(message);
  //   window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  // };

  // Fallback UI if the subject isn't found or has no components yet
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
            <Link to="/" className="text-headline-md font-headline-md font-bold text-primary">Resourza</Link>
          </div>
          
          <div className="hidden md:flex items-center gap-gutter ml-auto mr-0">
            <Link to="/contact" className="text-on-surface-variant font-body-md hover:text-primary transition-colors">Contact Us</Link>
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
                placeholder="Search components..." 
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
            {/* Dynamic Breadcrumbs */}
            <nav className="flex items-center gap-2 mb-6 text-[#708090] font-label-md text-[12px] uppercase tracking-wider">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="hover:text-primary cursor-default">Cambridge Assessment</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link to={`/topical/${boardId}`} className="hover:text-primary transition-colors">{boardData?.title || 'Board'}</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary font-bold">{subjectData.name} ({subjectData.code})</span>
            </nav>
            
            {/* Dynamic Title & Description */}
            <h1 className="text-display-lg font-display-lg text-primary mb-6">{subjectData.name} ({subjectData.code})</h1>
            <p className="text-on-surface-variant font-body-lg max-w-3xl leading-relaxed">
              {subjectData.description || "Master each syllabus component with precision. Access curated, topic-wise questions spanning over a decade of past papers."}
            </p>
          </div>
        </div>

        {/* Dynamic Components Grid */}
        <section className="w-full">
          {filteredComponents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {filteredComponents.map((comp) => (
                <Link 
                  to={`/topical/${boardId}/${subjectId}/${comp.id}`} 
                  key={comp.id} 
                  className="bg-white p-8 rounded-xl border border-tertiary-fixed hover:border-primary transition-all group hover:soft-blue-shadow flex flex-col justify-between cursor-pointer block"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-3xl">{comp.icon}</span>
                      </div>
                      <span className={`${comp.tagColor} px-3 py-1 rounded-full font-label-md text-[10px] uppercase`}>
                        {comp.type}
                      </span>
                    </div>
                    <h3 className="font-headline-md text-headline-md text-primary mb-3">{comp.name}</h3>
                    <p className="font-body-md text-on-surface-variant mb-6">{comp.description}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-6 border-t border-surface-container">
                    <span className="inline-flex items-center text-primary font-label-md group-hover:gap-2 transition-all">
                      Select Topics <span className="material-symbols-outlined ml-1">chevron_right</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
             <div className="text-center py-20">
              <span className="material-symbols-outlined text-6xl text-surface-variant mb-4">search_off</span>
              <h3 className="text-headline-md text-primary">No components found</h3>
              <p className="text-on-surface-variant">Try adjusting your search term.</p>
            </div>
          )}
        </section>

        {/* NEW: WhatsApp CTA - Get All Components */}
        <section className="mt-12 mb-16 p-8 md:p-12 bg-primary-fixed/30 rounded-xl text-center flex flex-col items-center gap-4 border border-primary/10">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-2">
             <span className="material-symbols-outlined text-4xl">inventory_2</span>
          </div>
          <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-primary">
            Want the complete subject?
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
            Skip selecting individual topics. Get instant access to all components for {subjectData.name} ({subjectData.code}) at once.
          </p>
          <button
            onClick={(e)=>handleWhatsAppAllComponents(
              e,
              boardData?.title,
              subjectData?.name,
              subjectData?.code
            )}
            className="mt-4 flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md hover:opacity-90 transition-all shadow-sm"
          >
            <span className="material-symbols-outlined">chat</span>
            Get All Components
          </button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Components;