import React, { useState } from 'react';
import { SupportedLanguage } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutFounders } from './components/AboutFounders';
import { ProjectsGallery } from './components/ProjectsGallery';
import { DevelopmentProcess } from './components/DevelopmentProcess';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LegalModal, LegalDocType } from './components/LegalModal';

export default function App() {
  const [lang, setLang] = useState<SupportedLanguage>('en');
  const [prefilledScope, setPrefilledScope] = useState('');
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>('privacy');

  const handleOpenLegal = (doc: LegalDocType) => {
    setActiveLegalDoc(doc);
    setIsLegalModalOpen(true);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledScope(`I am interested in inquiring about your "${serviceTitle}" services for my upcoming project.`);
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased">
      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          lang={lang}
          onExploreWork={handleExploreWork}
        />

        {/* 2. What ChaitShil Tech Does / Services */}
        <Services
          lang={lang}
          onSelectService={handleSelectService}
        />

        {/* 3. About ChaitShil Tech & Founders */}
        <AboutFounders lang={lang} />

        {/* 4. Projects & Products (TreatLove as in-house product card) */}
        <ProjectsGallery lang={lang} />

        {/* 5. How We Work (The 4-Step Development Process) */}
        <DevelopmentProcess lang={lang} />

        {/* 6. Contact Section & Inquiry Form */}
        <ContactSection
          lang={lang}
          prefilledScope={prefilledScope}
        />
      </main>

      {/* Footer */}
      <Footer 
        lang={lang} 
        onOpenLegal={handleOpenLegal}
      />

      {/* Legal Documents Modal */}
      <LegalModal
        isOpen={isLegalModalOpen}
        activeDoc={activeLegalDoc}
        setActiveDoc={setActiveLegalDoc}
        onClose={() => setIsLegalModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
