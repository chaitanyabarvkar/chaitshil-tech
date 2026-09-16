import React from 'react';
import { SupportedLanguage } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';
import { 
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  lang: SupportedLanguage;
  onOpenLegal?: (doc: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Identity & Mission */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 text-sm shadow-lg shadow-cyan-500/20">
                CS
              </div>
              <span className="font-display font-black text-xl text-white tracking-tight">
                ChaitShil <span className="text-cyan-400">Tech</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {lang === 'mr'
                ? 'ChaitShil Tech ही एक टेक्नॉलॉजी कंपनी आहे जी व्यवसाय, स्टार्टअप्स आणि उद्योजकांसाठी वेबसाइट्स, मोबाईल ॲप्लिकेशन्स आणि डिजिटल सोल्यूशन्स तयार करते.'
                : lang === 'hi'
                ? 'ChaitShil Tech एक टेक्नोलॉजी कंपनी है जो व्यवसायों, स्टार्टअप्स और उद्यमियों के लिए वेबसाइट्स, मोबाइल एप्लिकेशन्स और डिजिटल समाधान बनाती है।'
                : 'ChaitShil Tech is a technology company that builds websites, mobile applications and digital solutions for businesses, startups and entrepreneurs.'}
            </p>

            <div className="pt-1 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Co-Founders:</span>{' '}
              Chaitanya Barvkar &amp; Shila Shinde
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-3 text-left">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              {lang === 'mr' ? 'आमच्या सेवा' : lang === 'hi' ? 'हमारी सेवाएं' : 'Services'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Website Development</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Mobile Apps (Android &amp; iOS)</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Online Stores</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Custom Digital Solutions</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">AI Solutions</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Maintenance &amp; Support</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-left">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              {lang === 'mr' ? 'महत्वाचे दुवे' : lang === 'hi' ? 'महत्वपूर्ण लिंक' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{lang === 'mr' ? 'सेवा' : lang === 'hi' ? 'सेवाएं' : 'Services'}</a></li>
              <li><a href="#founders" className="hover:text-cyan-400 transition-colors">{lang === 'mr' ? 'संस्थापक' : lang === 'hi' ? 'संस्थापक' : 'About Us & Founders'}</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">{lang === 'mr' ? 'प्रकल्प आणि उत्पादने' : lang === 'hi' ? 'प्रोजेक्ट्स और प्रोडक्ट्स' : 'Projects & Products'}</a></li>
              <li><a href="#process" className="hover:text-cyan-400 transition-colors">{lang === 'mr' ? 'कामाची पद्धत' : lang === 'hi' ? 'कार्य प्रणाली' : 'How We Work'}</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">{lang === 'mr' ? 'संपर्क' : lang === 'hi' ? 'संपर्क' : 'Contact'}</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-left">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">
              {lang === 'mr' ? 'संपर्क माहिती' : lang === 'hi' ? 'संपर्क विवरण' : 'Contact Information'}
            </h4>
            <p className="text-xs text-slate-300">
              {SITE_CONFIG.location.display}
            </p>
            <div className="pt-2 text-[11px] text-slate-400 space-y-1">
              <div>Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-cyan-400 hover:underline">{SITE_CONFIG.email}</a></div>
              <div>{lang === 'mr' ? 'नवीन प्रकल्पांसाठी चौकशी स्वागतार्ह आहे' : lang === 'hi' ? 'नए प्रोजेक्ट्स के लिए पूछताछ आमंत्रित हैं' : 'Inquiries welcome for new projects'}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5 text-xs text-slate-400">
            <span>© {new Date().getFullYear()} ChaitShil Tech. All rights reserved.</span>
            <span>•</span>
            <button
              type="button"
              id="footer-privacy-link"
              onClick={() => onOpenLegal?.('privacy')}
              className="hover:text-cyan-400 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              {lang === 'mr' ? 'गोपनीयता धोरण' : lang === 'hi' ? 'गोपनीयता नीति' : 'Privacy Policy'}
            </button>
            <span>•</span>
            <button
              type="button"
              id="footer-terms-link"
              onClick={() => onOpenLegal?.('terms')}
              className="hover:text-cyan-400 transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              {lang === 'mr' ? 'नियम व अटी' : lang === 'hi' ? 'नियम व शर्तें' : 'Terms & Conditions'}
            </button>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
