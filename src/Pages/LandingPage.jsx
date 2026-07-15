import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { handleWhatsAppGeneralInquiry } from '../Services/WhatsAppService';
import Footer from '../SharedComponents/Footer';
import MobileHeader from '../SharedComponents/MobileHeader';
import ResourceCardLanding from '../SharedComponents/ResourceCardLanding';
import { TOPICAL_BOARDS, YEARLY_BOARDS,SUBJECT_NOTES_BOARDS } from '../data/Hoverdata';
import BoardNavBar from '../SharedComponents/BoardNavBar';

import heroImage from '../assets/Hero.jpeg';

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      {/* TopNavBar */}
      <header className="bg-surface-container-lowest fixed top-0 w-full z-50 border-b border-tertiary/20">
        <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <img src="/Final-Logo.png" alt="Resourza" className="h-8" />
            <Link to="/" className="text-headline-md font-headline-md font-bold text-primary">Resourza</Link>
          </div>
          <div className="hidden md:flex  items-center gap-gutter ml-auto mr-0">
            <BoardNavBar />
            <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors" href="#contact" onClick={handleWhatsAppGeneralInquiry}>Contact Us</a>
            <a className="text-on-surface-variant font-body-md hover:text-primary transition-colors" href="#academic-support">Resources</a>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-primary p-2 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </nav>
        <MobileHeader
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative wavy-bg min-h-screen flex items-center overflow-hidden py-12 md:py-0">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-12 items-center w-full">
            <div className="z-10 space-y-6 order-2 md:order-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <span className="px-4 py-1.5 rounded-full bg-tertiary-fixed text-primary font-label-md">Trusted by 1500+ Educators</span>
              </div>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary leading-tight">
                Your Complete Resource Hub for O/A Level & IGCSE Success
              </h1>
              <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-lg mx-auto md:mx-0">
                Premium notes, topical past papers, and mock exams built for educators and students who want results, not just resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                {/* Scroll Action Trigger */}
                <button
                  onClick={() => scrollToSection('academic-support')}
                  className="px-8 py-4 rounded-full bg-primary text-on-primary font-label-md hover:opacity-90 shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Explore Resources <span className="material-symbols-outlined">arrow_forward</span>
                </button>

                <button className="px-8 py-4 rounded-full bg-surface-container-lowest border border-tertiary/20 text-on-surface font-label-md hover:bg-surface-container-low transition-all whitespace-nowrap" onClick={() => scrollToSection('advantage-section')}>
                  Why Choose Resourza
                </button>

              </div>
            </div>
            <div className="relative z-10 order-1 md:order-2 px-4 md:px-0">
              <div className="rounded-2xl overflow-hidden soft-blue-shadow bg-white p-2 md:p-4 rotate-0 md:rotate-2 transform hover:rotate-0 transition-transform duration-500 max-w-md mx-auto md:max-w-none">
                <img alt="Digital Education Tools" className="w-full h-auto rounded-lg" src={heroImage} />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 md:w-24 md:h-24 bg-secondary-container/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 md:w-40 md:h-40 bg-primary-fixed/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-primary py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-gutter">
            <div className="text-center">
              <div className="text-primary-fixed text-headline-lg-mobile md:text-display-lg font-display-lg">1.5K+</div>
              <div className="text-on-primary/70 font-label-md uppercase tracking-widest text-sm md:text-base">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-primary-fixed text-headline-lg-mobile md:text-display-lg font-display-lg">15+</div>
              <div className="text-on-primary/70 font-label-md uppercase tracking-widest text-sm md:text-base">Core Subjects</div>
            </div>
            <div className="text-center">
              <div className="text-primary-fixed text-headline-lg-mobile md:text-display-lg font-display-lg">92%</div>
              <div className="text-on-primary/70 font-label-md uppercase tracking-widest text-sm md:text-base">Success Rate</div>
            </div>
          </div>
        </section>

        {/* Boards Section */}
        <section className="py-16 md:py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Expert Support Across All Major Boards</h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Resourza provides comprehensive coverage tailored to the specific requirements of international examination boards.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              <div className="bg-white p-8 rounded-xl border border-tertiary-fixed hover:soft-blue-shadow transition-all text-center">
                <h3 className="font-headline-md text-primary mb-4">O Levels</h3>
                <p className="font-body-md text-on-surface-variant">Master the fundamentals with meticulously organized topical past papers and premium revision notes tailored for core subjects.</p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-tertiary-fixed hover:soft-blue-shadow transition-all text-center">
                <h3 className="font-headline-md text-primary mb-4">A Levels</h3>
                <p className="font-body-md text-on-surface-variant">Conquer advanced concepts with chapter-by-chapter solved past papers and deep-dive resources designed for top-tier exam prep. </p>
              </div>
              <div className="bg-white p-8 rounded-xl border border-tertiary-fixed hover:soft-blue-shadow transition-all text-center">
                <h3 className="font-headline-md text-primary mb-4">IGCSE</h3>
                <p className="font-body-md text-on-surface-variant">Accelerate your revision with high-yield, chapter-wise questions and comprehensive study aids built strictly to latest syllabus standards.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section (Target for Smooth Scroll) */}
        {/* Services Section (Target for Smooth Scroll) */}
        <section id="academic-support" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">Comprehensive Academic Support</h2>
              <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Our resources are meticulously curated by subject experts to ensure they align perfectly with the latest O/A & IGCSE Level curriculum.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-gutter">

              {/* Mock Papers Card -> Routes to /mock-papers */}
              <Link to="/mock-papers" className="block bg-white p-8 rounded-xl border border-tertiary-fixed hover:border-primary transition-all group hover:soft-blue-shadow relative cursor-pointer">
                <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-3xl">description</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Mock Papers</h3>
                <p className="font-body-md text-on-surface-variant mb-6">Simulation exams designed to mimic real O/A Level difficulty and format.</p>
                <span className="inline-flex items-center text-primary font-label-md group-hover:gap-2 transition-all">Request Now <span className="material-symbols-outlined ml-1">chevron_right</span></span>
              </Link>

              {/* Subject Notes Card -> Placeholder link until page is built
              <Link to="#notes" className="block bg-white p-8 rounded-xl border border-tertiary-fixed hover:border-primary transition-all group hover:soft-blue-shadow relative cursor-pointer">
                <div className="w-12 h-12 bg-tertiary-fixed rounded-lg flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-3xl">menu_book</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-3">Subject Notes</h3>
                <p className="font-body-md text-on-surface-variant mb-6">Concise, well-structured summaries of complex topics for fast revision.</p>
                <span className="inline-flex items-center text-primary font-label-md group-hover:gap-2 transition-all">Read Notes <span className="material-symbols-outlined ml-1">chevron_right</span></span>
              </Link> */}

               <ResourceCardLanding
                icon="menu_book"
                title="Subject Notes"
                description="Concise, well-structured summaries of complex topics for fast revision."
                cta="View Notes"
                boards={SUBJECT_NOTES_BOARDS}
              />

              {/* Topical Past Papers Card — interactive board picker */}
              <ResourceCardLanding
                icon="list_alt"
                title="Topical Past Papers"
                description="Master specific chapters with questions categorized by topic."
                cta="View Papers"
                boards={TOPICAL_BOARDS}
              />

              {/* Yearly Past Papers Card — interactive board picker */}
              <ResourceCardLanding
                icon="history"
                title="Yearly Past Papers"
                description="Access a decade of previous examination papers with official mark schemes."
                cta="View All"
                boards={YEARLY_BOARDS}
              />

            </div>
          </div>
        </section>

        {/* The Resourza Advantage Section */}
        <section className="py-16 md:py-24 bg-background relative overflow-hidden" id='advantage-section'>
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary text-center mb-12 md:mb-16">The Resourza Advantage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-gutter items-stretch">
              <div className="bg-surface-container-low p-6 md:p-10 rounded-2xl border border-outline-variant/30 flex flex-col">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center text-error shrink-0">
                    <span className="material-symbols-outlined">cancel</span>
                  </div>
                  <h3 className="font-headline-md text-on-surface"> Unsorted Resources</h3>
                </div>
                <ul className="space-y-6 flex-grow">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-error mt-1 shrink-0">remove</span>
                    <span className="font-body-md text-on-surface-variant"> Hours wasted hunting for relevant past papers and notes scattered across multiple, sketchy sites. </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-error mt-1 shrink-0">remove</span>
                    <span className="font-body-md text-on-surface-variant">Messy, chaotic folders of PDFs with no clear chapter or topical categorization. </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-error mt-1 shrink-0">remove</span>
                    <span className="font-body-md text-on-surface-variant"> Outdated material that completely misses recent syllabus revisions and exam patterns. </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 md:p-10 rounded-2xl border-2 border-primary soft-blue-shadow flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 md:p-4 bg-primary text-on-primary font-label-md rounded-bl-xl text-xs md:text-sm">RECOMMENDED</div>
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined">check_circle</span>
                  </div>
                  <h3 className="font-headline-md text-primary">Resourza Digital Platform</h3>
                </div>
                <ul className="space-y-6 flex-grow">
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1 shrink-0">check</span>
                    <span className="font-body-md text-on-surface"> Instant, one-click access to meticulously organized, chapter-by-chapter past papers and notes. </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1 shrink-0">check</span>
                    <span className="font-body-md text-on-surface">  Can't find a specific resource? We source, compile, and arrange it on request, just for you.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1 shrink-0">check</span>
                    <span className="font-body-md text-on-surface"> Expertly curated materials continuously updated to match the latest international board specifications. </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Empowering Your Students Section */}
        <section className="py-16 md:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary text-center mb-12 md:mb-16">Empowering Your Students</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-gutter">
              <div className="bg-surface-container-low p-8 rounded-lg flex flex-col items-center text-center hover:soft-blue-shadow transition-all">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-4xl" style={{ color: 'rgb(29, 78, 137)' }}>menu_book</span>
                </div>
                <h3 className="font-headline-md text-primary mb-4">Topical Precision  </h3>
                <p className="font-body-md text-on-surface-variant"> Skip the chapters you haven't learned yet. Master your syllabus with past paper questions meticulously organized by topic and chapter. </p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-lg flex flex-col items-center text-center hover:soft-blue-shadow transition-all">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-4xl" style={{ color: 'rgb(29, 78, 137)' }}>assignment_turned_in</span>
                </div>
                <h3 className="font-headline-md text-primary mb-4">Exam Readiness</h3>
                <p className="font-body-md text-on-surface-variant">Practice with authentic, curriculum-specific questions and expert-solved solutions designed to build rock-solid exam confidence.</p>
              </div>
              <div className="bg-surface-container-low p-8 rounded-lg flex flex-col items-center text-center hover:soft-blue-shadow transition-all sm:col-span-2 md:col-span-1">
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                  <span className="material-symbols-outlined text-4xl" style={{ color: 'rgb(29, 78, 137)' }}>timer</span>
                </div>
                <h3 className="font-headline-md text-primary mb-4"> Streamlined Revision</h3>
                <p className="font-body-md text-on-surface-variant"> Download classroom-ready PDFs instantly. Study anywhere, anytime with premium resources built for efficient, independent revision. </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary text-center mb-12 md:mb-16">Trusted by Educators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="p-8 md:p-10 bg-surface-container-low rounded-2xl relative">
                <span className="material-symbols-outlined text-primary/10 text-6xl absolute top-6 right-8">format_quote</span>
                <p className="font-body-lg text-body-md md:text-body-lg text-on-surface mb-8 italic relative z-10">
                  "Resourza has revolutionized how I prepare my students for their O Level Biology. The topical past papers are a game-changer for reinforcing specific concepts."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold shrink-0">MS</div>
                  <div>
                    <div className="font-headline-md text-primary leading-tight">Mariam S.</div>
                    <div className="font-caption text-on-surface-variant">Senior Biology Tutor</div>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 bg-surface-container-low rounded-2xl relative">
                <span className="material-symbols-outlined text-primary/10 text-6xl absolute top-6 right-8">format_quote</span>
                <p className="font-body-lg text-body-md md:text-body-lg text-on-surface mb-8 italic relative z-10">
                  "I recommend Resourza to all my A Level Economics students. The clarity of the subject notes allows for quick review during the final exam push."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold shrink-0">RJ</div>
                  <div>
                    <div className="font-headline-md text-primary leading-tight">Rachel J.</div>
                    <div className="font-caption text-on-surface-variant">Economics Department Head</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-container z-0"></div>
          <div className="absolute inset-0 wavy-bg opacity-30 z-10"></div>
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-20 text-center">
            <h2 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-primary mb-6 md:mb-8">Ready to Transform Your Learning Journey?</h2>
            <p className="font-body-lg text-body-md md:text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10 md:mb-12">Join over 1500+ students and tutors who are achieving academic excellence with Resourza. Start your journey today with no obligation.</p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <button onClick={() => scrollToSection('academic-support')}
                className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded-full bg-white text-primary font-headline-md hover:bg-primary-fixed transition-all shadow-xl">View Our Resources</button>
              <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 rounded-full border-2 border-white/40 text-white font-headline-md hover:bg-white/10 transition-all flex items-center justify-center gap-2 whitespace-nowrap" onClick={handleWhatsAppGeneralInquiry}>Talk To An Expert</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;