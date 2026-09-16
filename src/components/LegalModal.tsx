import React, { useEffect } from 'react';
import { SupportedLanguage } from '../types';
import { LEGAL_DATA } from '../data/legalData';
import { X, ShieldCheck, FileText } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms';

interface LegalModalProps {
  isOpen: boolean;
  activeDoc: LegalDocType;
  setActiveDoc: (doc: LegalDocType) => void;
  onClose: () => void;
  lang: SupportedLanguage;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  activeDoc,
  setActiveDoc,
  onClose,
  lang
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentContent = LEGAL_DATA[lang] || LEGAL_DATA.en;
  const doc = activeDoc === 'privacy' ? currentContent.privacy : currentContent.terms;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div 
        className="relative w-full max-w-3xl max-h-[88vh] bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-left z-10"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/90">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
              {activeDoc === 'privacy' ? (
                <ShieldCheck className="w-4 h-4" />
              ) : (
                <FileText className="w-4 h-4" />
              )}
              <span>ChaitShil Tech • Legal</span>
            </div>
            <h2 id="legal-modal-title" className="font-display font-bold text-xl sm:text-2xl text-white">
              {doc.title}
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Last updated: {doc.lastUpdated}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            {/* Document Switcher Tabs */}
            <div className="flex p-1 rounded-xl bg-slate-950 border border-slate-800">
              <button
                type="button"
                id="modal-tab-privacy"
                onClick={() => setActiveDoc('privacy')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeDoc === 'privacy'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'mr' ? 'गोपनीयता' : lang === 'hi' ? 'गोपनीयता' : 'Privacy Policy'}
              </button>
              <button
                type="button"
                id="modal-tab-terms"
                onClick={() => setActiveDoc('terms')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeDoc === 'terms'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {lang === 'mr' ? 'नियम व अटी' : lang === 'hi' ? 'नियम व शर्तें' : 'Terms of Use'}
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              id="legal-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close legal modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm leading-relaxed divide-y divide-slate-800/60">
          {doc.sections.map((section, idx) => (
            <div key={idx} className={idx === 0 ? '' : 'pt-5'}>
              <h3 className="font-display font-bold text-sm sm:text-base text-white mb-2">
                {section.heading}
              </h3>
              <div className="space-y-2 text-slate-300">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>ChaitShil Tech • Maharashtra, India</span>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
