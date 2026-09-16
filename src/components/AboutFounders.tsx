import React from 'react';
import { SupportedLanguage } from '../types';
import { FOUNDERS } from '../data/servicesData';
import { TRANSLATIONS } from '../data/translations';
import { 
  Sparkles, 
  Code2, 
  Palette, 
  Briefcase, 
  CheckCircle2, 
  Quote, 
  Users, 
  ShieldCheck, 
  Zap,
  Target
} from 'lucide-react';

interface AboutFoundersProps {
  lang: SupportedLanguage;
}

export const AboutFounders: React.FC<AboutFoundersProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].founders;

  return (
    <section id="founders" className="py-24 relative overflow-hidden bg-slate-900/40">
      <div id="about" className="absolute -top-12 left-0 pointer-events-none" />
      {/* Subtle Background Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/5 via-cyan-500/5 to-blue-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>{t.tag}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* The Two Founders Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {FOUNDERS.map((founder, idx) => (
            <div
              key={founder.name}
              id={`founder-card-${founder.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-8 flex flex-col justify-between shadow-xl overflow-hidden hover:border-slate-700 transition-all duration-300"
            >
              {/* Background gradient hint */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${founder.accentColor} rounded-full blur-3xl pointer-events-none`} />

              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-700">
                    {founder.division}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                    {idx === 0 ? (
                      <Palette className="w-5 h-5 text-amber-400" />
                    ) : (
                      <Code2 className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {founder.name}
                </h3>
                <div className="text-xs font-bold text-cyan-400 mt-1 mb-4">
                  {founder.role}
                </div>

                <div className="text-xs font-mono text-slate-400 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800 mb-5 inline-block">
                  {founder.titleBadge}
                </div>

                {/* Bio */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {founder.bio}
                </p>

                {/* Focus Areas */}
                <div className="space-y-2 mb-6 border-t border-slate-800 pt-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    {lang === 'mr'
                      ? 'प्रमुख जबाबदाऱ्या:'
                      : lang === 'hi'
                      ? 'प्रमुख जिम्मेदारियां:'
                      : 'Key Focus Areas:'}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote Footer */}
              <div className="pt-4 border-t border-slate-800/80 mt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                  <Quote className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <p className="text-xs italic text-slate-300">
                    {founder.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About ChaitShil Tech Card */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-display font-bold text-2xl text-white">
              {lang === 'mr'
                ? 'ChaitShil Tech बद्दल'
                : lang === 'hi'
                ? 'ChaitShil Tech के बारे में'
                : 'About ChaitShil Tech'}
            </h3>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              {lang === 'mr'
                ? 'ChaitShil Tech ही एक टेक्नॉलॉजी कंपनी आहे जी व्यवसाय, स्टार्टअप्स आणि उद्योजकांसाठी वेबसाइट्स, मोबाईल ॲप्लिकेशन्स आणि डिजिटल सोल्यूशन्स तयार करते.'
                : lang === 'hi'
                ? 'ChaitShil Tech एक टेक्नोलॉजी कंपनी है जो व्यवसायों, स्टार्टअप्स और उद्यमियों के लिए वेबसाइट्स, मोबाइल एप्लिकेशन्स और डिजिटल समाधान बनाती है।'
                : 'ChaitShil Tech is a technology company that builds websites, mobile applications and digital solutions for businesses, startups and entrepreneurs.'}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              {lang === 'mr'
                ? 'आम्ही बिझनेस समज, कल्पकता आणि तंत्रज्ञान एकत्र आणून संकल्पनांचे रूपांतर प्रत्यक्ष, उपयुक्त डिजिटल उत्पादनांत करतो.'
                : lang === 'hi'
                ? 'हम व्यावसायिक समझ, रचनात्मकता और तकनीक को मिलाकर विचारों को वास्तविक डिजिटल उत्पादों में बदलते हैं।'
                : 'We combine business understanding, creativity and technology to turn ideas into practical digital products.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-left">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                <Target className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'mr'
                  ? 'व्यवसायाभिमुख दृष्टिकोन'
                  : lang === 'hi'
                  ? 'व्यवसाय-केंद्रित दृष्टिकोण'
                  : 'Business-Focused'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'mr'
                  ? 'आम्ही सर्वप्रथम तुमच्या व्यवसायाची गरज आणि उद्दिष्टे समजून घेऊन त्यानुसार सोल्यूशन तयार करतो.'
                  : lang === 'hi'
                  ? 'हम सबसे पहले आपके व्यावसायिक उद्देश्यों को समझते हैं ताकि आपकी वेबसाइट या ऐप वास्तविक परिणाम दे सके।'
                  : 'We prioritize understanding your specific business objectives so your website or app serves a real commercial purpose.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-left">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'mr'
                  ? 'वेबसाइट आणि मोबाईल ॲप्स'
                  : lang === 'hi'
                  ? 'वेबसाइट्स और मोबाइल ऐप्स'
                  : 'Websites & Mobile Apps'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'mr'
                  ? 'वापरण्यास सोपी, आधुनिक डिझाईन आणि सर्व फोन व संगणकांवर वेगाने चालणारी साधने.'
                  : lang === 'hi'
                  ? 'उपयोग में आसान, आधुनिक डिज़ाइन और सभी फोन व कंप्यूटर पर तेज़ गति से काम करने वाले समाधान।'
                  : 'Clean design, responsive performance on all screen sizes, and easy-to-use digital interfaces.'}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-left">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-sm font-bold text-white">
                {lang === 'mr'
                  ? 'लाँचनंतर सपोर्ट'
                  : lang === 'hi'
                  ? 'लॉन्च के बाद निरंतर सपोर्ट'
                  : 'Ongoing Support'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'mr'
                  ? 'प्रकल्प पूर्ण झाल्यानंतरही अपडेट्स आणि तांत्रिक मदतीसाठी आम्ही सदैव तत्पर असतो.'
                  : lang === 'hi'
                  ? 'प्रोजेक्ट लाइव होने के बाद भी अपडेट्स, मेंटेनेंस और तकनीकी सहायता के लिए हम हमेशा उपलब्ध हैं।'
                  : 'Assistance with updates, maintenance, and technical questions even after your product is live.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
