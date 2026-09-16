import React from 'react';
import { SupportedLanguage } from '../types';
import { 
  Compass, 
  PenTool, 
  Code, 
  Rocket, 
  CheckCircle2
} from 'lucide-react';

interface DevelopmentProcessProps {
  lang: SupportedLanguage;
}

export const DevelopmentProcess: React.FC<DevelopmentProcessProps> = ({ lang }) => {
  const steps = [
    {
      number: '01',
      title:
        lang === 'mr'
          ? 'गरज आणि नियोजन'
          : lang === 'hi'
          ? 'आवश्यकता और योजना'
          : 'Requirements & Planning',
      subtitle:
        lang === 'mr'
          ? 'व्यवसायाची उद्दिष्टे समजून घेणे'
          : lang === 'hi'
          ? 'उद्देश्यों को समझना'
          : 'Understanding Your Goals',
      desc:
        lang === 'mr'
          ? 'आम्ही तुमच्या व्यवसायाचे स्वरूप आणि उद्दिष्टे समजून घेतो. कोणत्या पानांची आणि वैशिष्ट्यांची गरज आहे त्याचे नियोजन केले जाते.'
          : lang === 'hi'
          ? 'हम आपके व्यवसाय के लक्ष्यों को समझते हैं और वेबसाइट या ऐप के लिए आवश्यक फीचर्स व पेजों की स्पष्ट योजना बनाते हैं।'
          : 'We discuss your business, what you want to achieve, and create a clear list of pages and features needed for your website or app.',
      icon: Compass,
      points:
        lang === 'mr'
          ? ['गरजांवर चर्चा', 'फीचर्सची यादी', 'प्रकल्पाची कालमर्यादा']
          : lang === 'hi'
          ? ['आवश्यकता विश्लेषण', 'फीचर्स सूची', 'प्रोजेक्ट टाइमलाइन']
          : ['Requirements Discussion', 'Feature List', 'Project Timeline']
    },
    {
      number: '02',
      title:
        lang === 'mr'
          ? 'डिझाईन'
          : lang === 'hi'
          ? 'UI/UX डिज़ाइन'
          : 'UI/UX Design',
      subtitle:
        lang === 'mr'
          ? 'सोपे आणि आकर्षक रूप'
          : lang === 'hi'
          ? 'सहज और आधुनिक लेआउट'
          : 'Clean & Visual Layout',
      desc:
        lang === 'mr'
          ? 'वापरण्यास अत्यंत सोपे, आधुनिक आणि मोबाईलवर सुटसुटीत दिसणारे स्क्रीन डिझाईन तयार केले जाते.'
          : lang === 'hi'
          ? 'हम ऐसे स्क्रीन डिज़ाइन तैयार करते हैं जो मोबाइल और कंप्यूटर दोनों पर बहुत आसान और आकर्षक दिखें।'
          : 'We design clear, modern screens that look great on both mobile phones and desktop computers.',
      icon: PenTool,
      points:
        lang === 'mr'
          ? ['मोबाईल व डेस्कटॉप लेआउट', 'सुटसुटीत वापर', 'डिझाईन तपासणी']
          : lang === 'hi'
          ? ['मोबाइल व डेस्कटॉप लेआउट', 'सहज यूज़र एक्सपीरियंस', 'डिज़ाइन रिव्यू']
          : ['Mobile & Desktop Layout', 'Clear User Experience', 'Design Review']
    },
    {
      number: '03',
      title:
        lang === 'mr'
          ? 'डेव्हलपमेंट'
          : lang === 'hi'
          ? 'डेवलपमेंट'
          : 'Development',
      subtitle:
        lang === 'mr'
          ? 'वेबसाइट आणि ॲपची निर्मिती'
          : lang === 'hi'
          ? 'वेबसाइट और ऐप निर्माण'
          : 'Building Website & App',
      desc:
        lang === 'mr'
          ? 'मानक आणि विश्वासू पद्धती वापरून वेबसाइट आणि अँड्रॉइड ॲप्लिकेशनचे कोडिंग पूर्ण केले जाते.'
          : lang === 'hi'
          ? 'हम आधुनिक और सुरक्षित तकनीक का उपयोग करके आपकी वेबसाइट और एंड्रॉइड ऐप का कोडिंग पूरा करते हैं।'
          : 'We build your website or Android application with clean code, fast page speeds, and secure functionality.',
      icon: Code,
      points:
        lang === 'mr'
          ? ['रिस्पॉन्सिव्ह वेबसाइट', 'अँड्रॉइड मोबाईल ॲप', 'डेटाबेस सेटअप']
          : lang === 'hi'
          ? ['रिस्पॉन्सिव वेबसाइट', 'एंड्रॉइड मोबाइल ऐप', 'डेटाबेस सेटअप']
          : ['Responsive Website', 'Android Mobile App', 'Database Setup']
    },
    {
      number: '04',
      title:
        lang === 'mr'
          ? 'तपासणी आणि लाँच'
          : lang === 'hi'
          ? 'टेस्टिंग और लॉन्च'
          : 'Testing & Launch',
      subtitle:
        lang === 'mr'
          ? 'अंतिम चाचणी आणि हस्तांतरण'
          : lang === 'hi'
          ? 'लाइव करना और सपोर्ट'
          : 'Going Live & Support',
      desc:
        lang === 'mr'
          ? 'वेगवेगळ्या फोन्सवर चाचणी करून वेबसाइट किंवा ॲप लाईव्ह केले जाते आणि सर्व ॲक्सेस व कोड तुमच्या स्वाधीन केले जातात.'
          : lang === 'hi'
          ? 'विभिन्न डिवाइसेज पर परीक्षण करने के बाद वेबसाइट या ऐप को लाइव किया जाता है और पूरा सोर्स कोड आपको सौंपा जाता है।'
          : 'We test across devices, help you launch on your domain or app store, hand over the source code, and offer launch support.',
      icon: Rocket,
      points:
        lang === 'mr'
          ? ['डिव्हाइस टेस्टिंग', 'डोमेन व लाँच सेटअप', 'सोर्स कोड हस्तांतरण']
          : lang === 'hi'
          ? ['डिवाइस टेस्टिंग', 'डोमेन व लॉन्च सेटअप', 'सोर्स कोड हैंडओवर']
          : ['Device Testing', 'Domain & Launch Setup', 'Code Handover']
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{lang === 'mr' ? 'कामाची पद्धत' : lang === 'hi' ? 'कार्य प्रणाली' : 'How We Work'}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            {lang === 'mr'
              ? 'आयडियापासून ते लाँचपर्यंत ४ सोपे टप्पे'
              : lang === 'hi'
              ? 'विचार से लॉन्च तक ४ आसान चरण'
              : 'From Idea to Launch in 4 Simple Steps'}
          </h2>
          <p className="mt-4 text-base text-slate-400 max-w-2xl leading-relaxed">
            {lang === 'mr'
              ? 'आम्ही पारदर्शक आणि स्पष्ट पद्धतीने काम करतो जेणेकरून तुमचा प्रकल्प वेळेत आणि ठरल्याप्रमाणे पूर्ण होतो.'
              : lang === 'hi'
              ? 'हम एक पारदर्शी और सुव्यवस्थित प्रक्रिया अपनाते हैं ताकि आपका प्रोजेक्ट समय पर और सर्वोत्तम गुणवत्ता के साथ पूरा हो।'
              : 'A straightforward, structured process so you always know the status of your project.'}
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col justify-between rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-7 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Step Top Row */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display font-black text-3xl text-slate-800 group-hover:text-slate-700">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <step.icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-cyan-400 mb-3">
                  {step.subtitle}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              {/* Points */}
              <div className="space-y-2 border-t border-slate-800/80 pt-4">
                {step.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2 text-[11px] text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
