import React from 'react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { 
  ArrowRight, 
  Smartphone, 
  Globe, 
  Sparkles, 
  ShieldCheck, 
  Code2, 
  Cpu, 
  Zap, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  lang: SupportedLanguage;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onExploreWork }) => {
  const t = TRANSLATIONS[lang].hero;

  const trustStats = [
    { label: t.statsProjects, value: 'Web & App' },
    { label: t.statsSatisfaction, value: 'Clean & Simple' },
    { label: t.statsUptime, value: 'Practical' },
    { label: t.statsDelivery, value: 'Full Support' },
  ];

  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Background Glows & Architectural Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-3xl opacity-70" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-60 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

        {/* Subtle Tech Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Availability Badge */}
          <div
            id="hero-status-badge"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-slate-300 tracking-wide">
              {t.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            id="hero-main-heading"
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] mb-6"
          >
            {t.headlineMain}{' '}
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              {t.headlineHighlight}
            </span>
          </h1>

          {/* Subheadline */}
          <p
            id="hero-subheadline"
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
          >
            {t.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <button
              type="button"
              id="hero-explore-work-btn"
              onClick={onExploreWork}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{t.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#contact"
              id="hero-contact-direct-btn"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>{t.ctaSecondary}</span>
            </a>
          </div>

          {/* Co-Founders Focus Strip */}
          <div className="w-full max-w-3xl mx-auto mb-16 p-4 rounded-2xl bg-gradient-to-r from-slate-900/80 via-slate-900/95 to-slate-900/80 border border-slate-800/90 shadow-xl backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              <div className="flex items-center gap-3.5 text-left p-2">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {lang === 'mr'
                      ? 'व्यवसाय आणि कल्पकता'
                      : lang === 'hi'
                      ? 'व्यवसाय और रचनात्मकता'
                      : 'Business & Creative'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {lang === 'mr'
                      ? 'ब्रँडिंग, सुटसुटीत डिझाईन आणि व्यवसायाची समज'
                      : lang === 'hi'
                      ? 'ब्रांडिंग, सहज डिज़ाइन और व्यावसायिक समझ'
                      : 'Brand identity, user experience and business planning'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 text-left p-2 md:pl-6 pt-3 md:pt-2">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {lang === 'mr'
                      ? 'तंत्रज्ञान आणि डेव्हलपमेंट'
                      : lang === 'hi'
                      ? 'तकनीक और डेवलपमेंट'
                      : 'Technology & Development'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {lang === 'mr'
                      ? 'अँड्रॉइड ॲप्स, आधुनिक वेबसाइट्स आणि सुरक्षित प्रणाली'
                      : lang === 'hi'
                      ? 'एंड्रॉइड ऐप्स, आधुनिक वेबसाइट्स और सुरक्षित सिस्टम'
                      : 'Android applications, websites and reliable digital systems'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Capability Indicators */}
          <div
            id="hero-stats-bar"
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm"
          >
            {trustStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-display text-xl sm:text-2xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 font-medium mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
