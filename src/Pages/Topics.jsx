// src/Pages/Topics.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { topicalData } from '../data/topicalData';
import { handleWhatsappTopics, handleWhatsAppGeneralInquiry } from '../Services/WhatsAppService';
import Footer from '../SharedComponents/Footer';
import MobileHeader from '../SharedComponents/MobileHeader';
import BoardNavBar from '../SharedComponents/BoardNavBar';

const Topics = () => {
  const { boardId, subjectId, componentId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // State to hold an array of selected topic IDs
  const [selectedTopics, setSelectedTopics] = useState([]);
  
  const boardData = topicalData[boardId];
  const subjectData = boardData?.subjects.find(s => s.id === subjectId);
  const componentData = subjectData?.components?.find(c => c.id === componentId);

  // Reset search and selections when URL changes
  useEffect(() => {
    setSearchTerm('');
    setSelectedTopics([]);
  }, [boardId, subjectId, componentId]);

  const filteredTopics = componentData?.topics?.filter(topic => 
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  // Toggle individual topic
  const toggleTopic = (topicId) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId) 
        : [...prev, topicId]
    );
  };

  // Select or Deselect All
  const handleSelectAll = () => {
    if (selectedTopics.length === filteredTopics.length) {
      setSelectedTopics([]); // Deselect all if all are currently selected
    } else {
      setSelectedTopics(filteredTopics.map(t => t.id)); // Select all
    }
  };

  // Call external WhatsApp Service
  const triggerWhatsApp = (e) => {
    // Extract just the names of the selected topics
    const selectedTopicNames = filteredTopics
      .filter(t => selectedTopics.includes(t.id))
      .map(t => t.name);

    // Pass everything to the service
    handleWhatsappTopics(
      e,
      boardData?.title,
      subjectData?.name,
      subjectData?.code,
      componentData?.name,
      selectedTopicNames
    );
  };

  if (!componentData) {
    return <div className="p-20 text-center text-primary text-headline-lg">Component not found.</div>;
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
            <a href="#contact" onClick={(e) => handleWhatsAppGeneralInquiry(e, `${boardData?.title} ${subjectData?.name} (${subjectData?.code}) — ${componentData?.name} Topics`)} className="text-on-surface-variant font-body-md hover:text-primary transition-colors cursor-pointer">Contact Us</a>
            <Link to="/" className="text-primary font-bold font-body-md border-b-2 border-primary">Resources</Link>
            
            {/* Nested Board Dropdown */}
            <BoardNavBar />
          </div>
          
          {/* Functional Search Bar */}
          <div className="flex items-center gap-4 ml-8">
            <div className="hidden lg:flex items-center bg-white px-4 py-2 rounded-full border border-tertiary/30 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <span className="material-symbols-outlined text-outline ml-2" style={{ fontSize: '20px' }}>search</span>
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-sm w-48 font-body-md outline-none text-on-surface placeholder-outline-variant"
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

      <main className="w-full pt-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex-1 pb-12">
        {/* Dynamic Breadcrumbs */}
        <nav className="mb-8 flex items-center text-caption font-caption text-on-surface-variant overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="material-symbols-outlined mx-2 text-sm">chevron_right</span>
          <span className="hover:text-primary cursor-default">Cambridge Assessment</span>
          <span className="material-symbols-outlined mx-2 text-sm">chevron_right</span>
          <Link to={`/topical/${boardId}`} className="hover:text-primary transition-colors">{boardData?.title || 'Board'}</Link>
          <span className="material-symbols-outlined mx-2 text-sm">chevron_right</span>
          <Link to={`/topical/${boardId}/${subjectId}`} className="hover:text-primary transition-colors">{subjectData.name} ({subjectData.code})</Link>
          <span className="material-symbols-outlined mx-2 text-sm">chevron_right</span>
          <span className="text-primary font-medium">{componentData.name}</span>
        </nav>
        
        {/* Header Area */}
        <div className="mb-10 border-b border-tertiary/10 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface mb-4">
              {componentData.name} ({subjectData.code})
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl">
              Select specific topics below to purchase individual resources, or select all for the complete module.
            </p>
          </div>
          
          {/* Select All Toggle Button */}
          {filteredTopics.length > 0 && (
            <button 
              onClick={handleSelectAll}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-primary/20 text-primary font-label-md hover:bg-primary/5 transition-all whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[20px]">
                {selectedTopics.length === filteredTopics.length ? 'deselect' : 'done_all'}
              </span>
              {selectedTopics.length === filteredTopics.length ? 'Deselect All' : 'Select All Topics'}
            </button>
          )}
        </div>

        {/* Dynamic Topics List Layout */}
        <section className="w-full">
          {filteredTopics.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {filteredTopics.map((topic) => {
                const isSelected = selectedTopics.includes(topic.id);
                return (
                  // Entire card is clickable to toggle the checkbox. Added gap-4 to prevent overlap.
                  <div 
                    key={topic.id} 
                    onClick={() => toggleTopic(topic.id)}
                    className={`group flex items-center justify-between p-4 gap-4 cursor-pointer rounded-lg border transition-all ${
                      isSelected 
                        ? 'bg-primary/5 border-primary shadow-[0px_4px_20px_rgba(29,78,137,0.12)]' 
                        : 'bg-surface-container-lowest border-tertiary-fixed-dim/30 hover:border-primary/50 hover:shadow-[0px_4px_20px_rgba(29,78,137,0.08)]'
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      {/* ADDED shrink-0 HERE */}
                      <div className={`shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-primary border-primary text-white' : 'border-outline-variant bg-white'
                      }`}>
                        {isSelected && <span className="material-symbols-outlined text-[14px]">check</span>}
                      </div>
                      
                      {/* ADDED shrink-0 HERE */}
                      <div className="shrink-0 w-10 h-10 rounded bg-primary-fixed/30 flex items-center justify-center text-primary font-label-md">
                        {topic.number}
                      </div>
                      <span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors leading-tight">
                        {topic.name}
                      </span>
                    </div>
                    {/* ADDED shrink-0 and whitespace-nowrap HERE */}
                    <span className="shrink-0 text-caption font-caption text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full whitespace-nowrap">
                      {topic.count}
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-6xl text-surface-variant mb-4">search_off</span>
              <h3 className="text-headline-md text-primary">No topics found</h3>
              <p className="text-on-surface-variant">Try adjusting your search term.</p>
            </div>
          )}
        </section>

        {/* Dynamic WhatsApp CTA based on selection */}
        <section className="mt-12 p-8 md:p-12 bg-primary-fixed/30 rounded-xl text-center flex flex-col items-center gap-4 border border-primary/10">
          <h2 className="text-headline-md md:text-headline-lg font-headline-lg text-primary">
            Ready to get premium access?
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">
            {selectedTopics.length > 0 
              ? `You have selected ${selectedTopics.length} topic(s). Connect with our team to unlock them instantly.` 
              : `Check the boxes above to select the specific topics you need for ${componentData.name}.`
            }
          </p>
          
          <button 
            onClick={triggerWhatsApp}
            disabled={selectedTopics.length === 0}
            className={`mt-4 flex items-center gap-2 px-8 py-4 rounded-full font-label-md text-label-md transition-all shadow-sm ${
              selectedTopics.length > 0 
                ? 'bg-primary text-on-primary hover:opacity-90 cursor-pointer hover:-translate-y-1' 
                : 'bg-surface-variant text-outline cursor-not-allowed opacity-70'
            }`}
          >
            <span className="material-symbols-outlined">chat</span>
            {selectedTopics.length > 0 
              ? `Get ${selectedTopics.length} Selected Topic${selectedTopics.length > 1 ? 's' : ''}` 
              : 'Select topics to continue'
            }
          </button>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Topics;