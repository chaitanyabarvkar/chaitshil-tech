import React, { useState, useEffect } from 'react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  Code2, 
  Smartphone, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight,
  Layers,
  Globe
} from 'lucide-react';

interface NavbarProps {
  lang: SupportedLanguage;
  setLang: (lang: SupportedLanguage) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  interface NavLinkItem {
    label: string;
    href: string;
    badge?: string;
  }

  const navLinks: NavLinkItem[] = [
    { label: t.services, href: '#services' },
    { label: t.about, href: '#founders' },
    { label: t.projects, href: '#projects' },
    { label: t.process, href: '#process' },
    { label: t.contact, href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Branding */}
          <a
            href="#"
            id="brand-logo-link"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-black text-lg font-display">CS</span>
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-950 rounded-full" title="Online & Taking Projects" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-xl text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                  ChaitShil
                </span>
                <span className="font-display font-bold text-xl text-cyan-400 tracking-tight">
                  Tech
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
                Web & Mobile App Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                id={`nav-link-${link.href.replace('#', '')}`}
                className="relative px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/70 transition-all flex items-center gap-1.5"
              >
                {link.label}
                {link.badge && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-1 text-xs">
              <button
                type="button"
                id="lang-toggle-en"
                onClick={() => setLang('en')}
                className={`px-2 py-1 rounded font-semibold transition-all ${
                  lang === 'en'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                id="lang-toggle-mr"
                onClick={() => setLang('mr')}
                className={`px-2 py-1 rounded font-semibold transition-all ${
                  lang === 'mr'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="मराठी"
              >
                मराठी
              </button>
              <button
                type="button"
                id="lang-toggle-hi"
                onClick={() => setLang('hi')}
                className={`px-2 py-1 rounded font-semibold transition-all ${
                  lang === 'hi'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="हिंदी"
              >
                हिंदी
              </button>
            </div>

            {/* Start Project CTA */}
            <a
              href="#contact"
              id="nav-start-project-btn"
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg shadow-md shadow-cyan-500/20 transition-all flex items-center gap-1.5"
            >
              <span>{t.getQuote}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Lang Button (cycles en -> hi -> mr -> en) */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg p-0.5 text-xs">
              {(['en', 'mr', 'hi'] as SupportedLanguage[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded text-[11px] font-bold transition-all ${
                    lang === l
                      ? 'bg-cyan-500 text-slate-950'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {l === 'en' ? 'EN' : l === 'mr' ? 'मराठी' : 'हिंदी'}
                </button>
              ))}
            </div>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 mt-2 shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-900 rounded-lg flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}

            {/* Mobile Lang Row */}
            <div className="py-2 flex items-center justify-between border-t border-slate-800/80">
              <span className="text-xs text-slate-400 font-medium">Language / भाषा:</span>
              <div className="flex items-center gap-1">
                {(['en', 'mr', 'hi'] as SupportedLanguage[]).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => {
                      setLang(l);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-2.5 py-1 text-xs rounded-md font-semibold transition-all ${
                      lang === l
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-900 text-slate-300 border border-slate-800'
                    }`}
                  >
                    {l === 'en' ? 'English' : l === 'mr' ? 'मराठी' : 'हिंदी'}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg text-center flex items-center justify-center gap-1.5"
              >
                <span>{t.getQuote}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
