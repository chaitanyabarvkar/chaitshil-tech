import React from 'react';
import { ServiceItem, SupportedLanguage } from '../types';
import { SERVICES } from '../data/servicesData';
import { TRANSLATIONS } from '../data/translations';
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Server, 
  ShoppingBag, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface ServicesProps {
  lang: SupportedLanguage;
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ lang, onSelectService }) => {
  const t = TRANSLATIONS[lang].services;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-blue-400" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-amber-400" />;
      case 'Server':
        return <Server className="w-6 h-6 text-emerald-400" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-purple-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-rose-400" />;
      default:
        return <Globe className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{t.tag}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700/80 p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {getServiceIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-cyan-400 mt-1 mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2 mb-6 border-t border-slate-800/80 pt-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {service.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-500 hover:text-slate-950 text-slate-200 font-semibold text-xs transition-all flex items-center justify-center gap-2 group-hover:border-cyan-500/50"
                >
                  <span>
                    {lang === 'mr'
                      ? 'या सेवेची चौकशी करा'
                      : lang === 'hi'
                      ? 'इस सेवा के लिए पूछताछ करें'
                      : 'Inquire for this Service'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
