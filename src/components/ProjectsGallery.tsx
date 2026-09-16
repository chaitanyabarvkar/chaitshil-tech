import React from 'react';
import { SupportedLanguage } from '../types';
import { PROJECTS } from '../data/projectsData';
import { TRANSLATIONS } from '../data/translations';
import { ExternalLink, ArrowRight, Sparkles, Layers } from 'lucide-react';

interface ProjectsGalleryProps {
  lang: SupportedLanguage;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].projects;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background Accent */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Active Projects (TreatLove and any future real additions) */}
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div>
                {/* Thumbnail */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-slate-700/80">
                      {project.projectType}
                    </span>
                    {project.status === 'in-pipeline' || project.deliverableType === 'In Pipeline' ? (
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        In Pipeline
                      </span>
                    ) : project.deliverableType ? (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-900/80 text-slate-300 border border-slate-800">
                        {project.deliverableType}
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs font-semibold text-cyan-400 mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-2">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`btn-visit-${project.id}`}
                    className="w-full mt-4 py-2.5 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>{project.buttonText || t.viewProduct}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    type="button"
                    className="w-full mt-4 py-2.5 px-4 rounded-xl bg-slate-800 text-slate-400 font-semibold text-xs cursor-default flex items-center justify-center gap-2"
                  >
                    <span>{t.comingSoon}</span>
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Expandable Future Client Project Card (Coming Soon) */}
          <div
            id="future-project-card"
            className="group flex flex-col justify-between rounded-2xl bg-slate-900/30 border border-dashed border-slate-800 hover:border-slate-700/80 transition-all duration-300 p-6 min-h-[360px]"
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-400 border border-slate-700/60">
                  {t.comingSoon}
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-900/60 text-slate-400 border border-slate-800">
                  Client Project
                </span>
              </div>

              {/* Placeholder Graphic Area */}
              <div className="h-32 rounded-xl bg-slate-950/60 border border-slate-800/60 flex items-center justify-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-all">
                  <Sparkles className="w-6 h-6" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-white">
                {t.upcomingTitle}
              </h3>
              <p className="text-xs font-semibold text-slate-400 mt-1 mb-3">
                {t.upcomingSubtitle}
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.upcomingDesc}
              </p>
            </div>

            {/* Action Button */}
            <div className="pt-6 border-t border-slate-800/60 mt-4">
              <a
                href="#contact"
                id="btn-upcoming-start"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-2"
              >
                <span>{t.startProjectCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
