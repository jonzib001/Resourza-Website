import React from 'react';
import { Link } from 'react-router-dom';
import { handleWhatsAppGeneralInquiry } from '../Services/WhatsAppService';

const Footer = () => {
  return (
    <footer className="bg-surface-container border-t border-tertiary/10 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1">
            <span className="text-headline-md font-headline-md font-bold text-primary mb-4 md:mb-6 block">Resourza</span>
            <p className="font-body-md text-on-surface-variant mb-6">Empowering O/A Level Educators and Students through premium digital academic resources.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#facebook"><span className="material-symbols-outlined">public</span></a>
              <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#twitter"><span className="material-symbols-outlined">forum</span></a>
            </div>
          </div>
          <div>
            <h4 className="font-label-md text-primary uppercase mb-6 tracking-wider">Resources</h4>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/mock-papers">Mock Papers</Link></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#notes">Subject Notes</a></li>
              {/* Pointing to A-Levels as the default gateway for Past Papers */}
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/board/a-levels">Past Papers</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" to="/topical/a-levels">Topical Past Papers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-primary uppercase mb-6 tracking-wider">Company</h4>
            <ul className="space-y-4">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#about">About Us</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#support" onClick={handleWhatsAppGeneralInquiry}>Contact Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-label-md text-primary uppercase mb-6 tracking-wider">Newsletter</h4>
            <p className="font-caption text-on-surface-variant mb-4">Stay updated with the latest exam patterns.</p>
            <div className="flex flex-col gap-2">
              <input className="px-4 py-2.5 rounded-lg border border-tertiary/20 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Enter your email" type="email" />
              <button className="px-4 py-2.5 bg-primary text-on-primary rounded-lg font-label-md hover:opacity-90 shadow-md transition-all">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-tertiary/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <span className="font-caption text-on-surface-variant">© 2024 Resourza. Empowering O/A Level Educators.</span>
          <div className="flex gap-8">
            <a className="font-caption text-on-surface-variant hover:text-primary transition-colors" href="#terms">Terms of Service</a>
            <a className="font-caption text-on-surface-variant hover:text-primary transition-colors" href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;