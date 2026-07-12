import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../SharedComponents/Footer';
import BoardNavBar from '../SharedComponents/BoardNavBar';
import { handleWhatsAppGeneralInquiry, handleWhatsAppMockPapers } from '../Services/WhatsAppService';

const MockPapers = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden min-h-screen flex flex-col">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest fixed top-0 w-full z-50 border-b border-tertiary/20">
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img src="/Final-Logo.png" alt="Resourza" className="h-8" />
            <Link to="/" className="text-headline-md font-headline-md font-bold text-primary">Resourza</Link>
          </div>
          <div className="hidden md:flex items-center gap-gutter ml-auto mr-0">
            <BoardNavBar />
            
            <a href="#contact" onClick={handleWhatsAppGeneralInquiry} className="text-on-surface-variant font-body-md hover:text-primary transition-colors cursor-pointer">
              Contact Us
            </a>
            <Link to="/" className="text-on-surface-variant font-body-md hover:text-primary transition-colors cursor-pointer ml-8">
              Resources
            </Link>
          </div>
          {/* Mobile menu trigger */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </nav>
      </header>

      <main className="w-full pt-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop wavy-bg flex-1 pb-16">
        
        {/* Hero Section */}
        <div className="w-full bg-[#f1f6ff] py-12 md:py-16 mb-12 rounded-2xl px-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-tertiary/10">
          <div className="max-w-2xl">
            <h1 className="text-display-lg font-display-lg text-primary mb-6">Custom Mock Papers for Educators</h1>
            <p className="text-on-surface-variant font-body-lg leading-relaxed mb-6">
              Preparing exam-spec mock papers takes hours of tedious formatting and question hunting. Let Resourza handle it. We curate premium, custom-tailored simulation exams designed to mimic real O/A Level difficulty, complete with professional mark schemes.
            </p>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex items-center justify-center text-primary shadow-lg shrink-0">
             <span className="material-symbols-outlined text-[64px]">history_edu</span>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-16">
          <div className="bg-white p-8 rounded-xl border border-tertiary-fixed hover:border-primary transition-all group hover:soft-blue-shadow flex flex-col">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">tune</span>
            </div>
            <h3 className="font-headline-md text-primary mb-3">Tailored to Your Syllabus</h3>
            <p className="font-body-md text-on-surface-variant">Specify exact chapters, topics, and difficulty levels. We compile questions that perfectly align with your teaching schedule.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-tertiary-fixed hover:border-primary transition-all group hover:soft-blue-shadow flex flex-col">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <h3 className="font-headline-md text-primary mb-3">Official CAIE Formatting</h3>
            <p className="font-body-md text-on-surface-variant">Every mock paper is delivered in the official Cambridge examination format to ensure students get a realistic testing experience.</p>
          </div>

          <div className="bg-white p-8 rounded-xl border border-tertiary-fixed hover:border-primary transition-all group hover:soft-blue-shadow flex flex-col">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-3xl">fact_check</span>
            </div>
            <h3 className="font-headline-md text-primary mb-3">Detailed Mark Schemes</h3>
            <p className="font-body-md text-on-surface-variant">Receive comprehensive, easy-to-read marking rubrics paired with your custom exam to make grading seamless.</p>
          </div>
        </div>

        {/* Dedicated WhatsApp CTA */}
        <section className="bg-surface-container-low rounded-2xl p-8 md:p-16 flex flex-col items-center text-center border border-outline-variant/30">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4">
             <span className="material-symbols-outlined text-4xl">support_agent</span>
          </div>
          <h2 className="text-headline-lg font-headline-lg text-primary mb-4">Let's build your perfect exam.</h2>
          <p className="text-on-surface-variant font-body-lg max-w-2xl mb-8">
            Reach out to our academic team on WhatsApp. Let us know the subject, board, and topics you need, and we will prepare a professional mock paper bundle for your classroom.
          </p>
          <button 
            onClick={handleWhatsAppMockPapers}
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label-md hover:opacity-90 transition-all shadow-md hover:-translate-y-1"
          >
            <span className="material-symbols-outlined">chat</span>
            Discuss Your Requirements
          </button>
        </section>

      </main>

      {/* Shared Footer injected here */}
      <Footer />
      
    </div>
  );
};

export default MockPapers;