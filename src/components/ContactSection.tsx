import React, { useState } from 'react';
import { SupportedLanguage } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SITE_CONFIG, getWhatsAppLink, getMailtoLink } from '../config/siteConfig';
import { 
  Send, 
  Mail, 
  MapPin, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle,
  Loader2,
  ExternalLink,
  RotateCcw
} from 'lucide-react';

interface ContactSectionProps {
  lang: SupportedLanguage;
  prefilledScope?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  prefilledScope = '',
}) => {
  const t = TRANSLATIONS[lang].contact;

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [projectType, setProjectType] = useState('Website Development');
  const [budget, setBudget] = useState('₹25,000 - ₹50,000');
  const [message, setMessage] = useState(prefilledScope);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Update message if prefilledScope changes
  React.useEffect(() => {
    if (prefilledScope) {
      setMessage(prefilledScope);
    }
  }, [prefilledScope]);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!fullName.trim()) {
      errors.fullName = lang === 'mr' ? 'कृपया तुमचे नाव प्रविष्ट करा.' : lang === 'hi' ? 'कृपया अपना नाम दर्ज करें।' : 'Please enter your name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = lang === 'mr' ? 'कृपया तुमचा ईमेल पत्ता प्रविष्ट करा.' : lang === 'hi' ? 'कृपया अपना ईमेल पता दर्ज करें।' : 'Please enter your email.';
    } else if (!emailRegex.test(email.trim())) {
      errors.email = lang === 'mr' ? 'कृपया वैध ईमेल पत्ता प्रविष्ट करा.' : lang === 'hi' ? 'कृपया एक मान्य ईमेल दर्ज करें।' : 'Please enter a valid email address.';
    }

    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (!phone.trim()) {
      errors.phone = lang === 'mr' ? 'कृपया फोन किंवा WhatsApp नंबर प्रविष्ट करा.' : lang === 'hi' ? 'कृपया फोन या WhatsApp नंबर दर्ज करें।' : 'Please enter phone or WhatsApp number.';
    } else if (cleanPhone.length < 7) {
      errors.phone = lang === 'mr' ? 'कृपया वैध फोन नंबर प्रविष्ट करा.' : lang === 'hi' ? 'कृपया मान्य फोन नंबर दर्ज करें।' : 'Please enter a valid phone number.';
    }

    if (!message.trim()) {
      errors.message = lang === 'mr' ? 'कृपया तुमच्या गरजेबद्दल थोडक्यात सांगा.' : lang === 'hi' ? 'कृपया अपनी आवश्यकताओं के बारे में संक्षेप में बताएं।' : 'Please enter a brief message describing your requirements.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const getFormattedMessage = () => {
    return `Project Inquiry: ${projectType}
Name: ${fullName.trim()}
Business: ${businessName.trim() || 'N/A'}
Email: ${email.trim()}
Phone: ${phone.trim()}
Budget Range: ${budget}

Requirements:
${message.trim()}`;
  };

  const directWhatsAppUrl = getWhatsAppLink(
    `Hello ChaitShil Tech,\n\nI would like to inquire about *${projectType}*.\n\n*Name:* ${fullName.trim() || 'Client'}\n*Business:* ${businessName.trim() || 'N/A'}\n*Budget:* ${budget}\n*Contact:* ${phone.trim() || email.trim()}\n\n*Details:* ${message.trim() || 'Please contact me to discuss.'}`
  );

  const directMailtoUrl = getMailtoLink(
    `Project Inquiry: ${projectType} - ${fullName.trim() || 'New Client'}`,
    getFormattedMessage()
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      if (SITE_CONFIG.urls.contactApi) {
        // Real API Submission to configured endpoint
        const response = await fetch(SITE_CONFIG.urls.contactApi, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: fullName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            businessName: businessName.trim() || undefined,
            projectType,
            budget,
            message: message.trim(),
            submittedAt: new Date().toISOString(),
            source: 'ChaitShil Tech Web Form'
          })
        });

        if (!response.ok) {
          throw new Error(`Server returned error HTTP ${response.status}`);
        }

        setSubmitted(true);
      } else {
        // Direct Client-to-Business delivery without fake simulation
        // Trigger direct mail client with prefilled inquiry package
        window.location.href = directMailtoUrl;
        setSubmitted(true);
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Connection failed';
      setSubmitError(
        lang === 'mr'
          ? `संदेश पाठवण्यात समस्या आली (${errorMsg}). कृपया खाली दिलेल्या ईमेल किंवा WhatsApp द्वारे थेट संपर्क साधा.`
          : lang === 'hi'
          ? `संदेश भेजने में समस्या आई (${errorMsg})। कृपया नीचे दिए गए ईमेल या WhatsApp के माध्यम से सीधे संपर्क करें।`
          : `Submission encountered an issue (${errorMsg}). Please reach out directly using Email or WhatsApp below.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

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

        {/* Contact Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
              <div>
                <h3 className="font-display font-bold text-xl text-white">
                  {lang === 'mr'
                    ? 'थेट संपर्क साधा'
                    : lang === 'hi'
                    ? 'सीधा संपर्क करें'
                    : 'Direct Contact'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'mr'
                    ? 'तुमच्या व्यवसायाच्या गरजेनुसार वेबसाइट किंवा ॲप बनवण्यासाठी आमच्याशी संपर्क साधा.'
                    : lang === 'hi'
                    ? 'अपने व्यवसाय के लिए वेबसाइट, मोबाइल ऐप या डिजिटल समाधान हेतु हमसे संपर्क करें।'
                    : 'Reach out to discuss a website, mobile app or custom digital solution for your business.'}
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="w-full p-3.5 rounded-2xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div>{t.whatsappDirect}</div>
                      <div className="text-[10px] text-emerald-400/80 font-normal">{SITE_CONFIG.whatsappDisplay}</div>
                    </div>
                  </div>
                  <span className="text-xs">Chat →</span>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}?subject=Project%20Inquiry%20-%20ChaitShil%20Tech`}
                  id="contact-email-btn"
                  className="w-full p-3.5 rounded-2xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="truncate max-w-[200px] sm:max-w-xs">{SITE_CONFIG.email}</div>
                      <div className="text-[10px] text-cyan-400/80 font-normal">Direct Email</div>
                    </div>
                  </div>
                  <span className="text-xs">Email →</span>
                </a>
              </div>

              {/* Location */}
              <div className="pt-2 text-xs border-t border-slate-800">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] mb-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    Location
                  </div>
                  <div className="font-bold text-white">{SITE_CONFIG.location.display}</div>
                </div>
              </div>
            </div>

            {/* Simple Promise */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {lang === 'mr'
                  ? 'आमची बांधिलकी'
                  : lang === 'hi'
                  ? 'हमारी प्रतिबद्धता'
                  : 'Our Commitment'}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {lang === 'mr'
                  ? 'तुमच्या व्यवसायाची गरज काळजीपूर्वक ऐकून घेणे, पारदर्शक बजेट देणे आणि पूर्ण झालेल्या कामाचे संपूर्ण अधिकार तुम्हाला सोपवणे.'
                  : lang === 'hi'
                  ? 'स्पष्ट संवाद, पारदर्शी बजट और प्रोजेक्ट पूरा होने पर पूरा सोर्स कोड आपके सुपुर्द करना।'
                  : 'Clear communication, transparent estimates, and full source code handover upon project completion.'}
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form or Submission State */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl text-left">
              {submitted ? (
                <div className="py-8 flex flex-col items-center text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-white">
                    {lang === 'mr'
                      ? 'चौकशी तयार झाली आहे!'
                      : lang === 'hi'
                      ? 'पूछताछ तैयार है!'
                      : 'Inquiry Ready!'}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md leading-relaxed">
                    {lang === 'mr'
                      ? `धन्यवाद ${fullName || ''}! तुमची माहिती तयार आहे. त्वरित प्रतिसादासाठी तुम्ही थेट WhatsApp वर देखील संदेश पाठवू शकता.`
                      : lang === 'hi'
                      ? `धन्यवाद ${fullName || ''}! आपकी पूछताछ तैयार है। त्वरित प्रतिक्रिया के लिए आप WhatsApp पर भी भेज सकते हैं।`
                      : `Thank you, ${fullName || 'there'}! Your inquiry details are ready. You can also send them directly via WhatsApp or Email below.`}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-left w-full max-w-md space-y-1.5 mt-4">
                    <div className="font-bold text-white mb-2 pb-1 border-b border-slate-800">Inquiry Summary</div>
                    <div><span className="text-slate-500">Name:</span> {fullName}</div>
                    {businessName && <div><span className="text-slate-500">Business:</span> {businessName}</div>}
                    <div><span className="text-slate-500">Service:</span> {projectType}</div>
                    <div><span className="text-slate-500">Budget:</span> {budget}</div>
                    <div><span className="text-slate-500">Contact:</span> {phone} • {email}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full max-w-md">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{lang === 'mr' ? 'WhatsApp वर पाठवा' : lang === 'hi' ? 'WhatsApp पर भेजें' : 'Send on WhatsApp'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={directMailtoUrl}
                      className="flex-1 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{lang === 'mr' ? 'ईमेलने पाठवा' : lang === 'hi' ? 'ईमेल से भेजें' : 'Send via Email'}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setEmail('');
                      setPhone('');
                      setBusinessName('');
                      setMessage('');
                      setValidationErrors({});
                    }}
                    className="mt-2 text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>{lang === 'mr' ? 'नवीन फॉर्म भरा' : lang === 'hi' ? 'नया फॉर्म भरें' : 'Start a new inquiry'}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-slate-800 pb-4">
                    <h3 className="font-display font-bold text-xl text-white">
                      {lang === 'mr'
                        ? 'प्रकल्प चौकशी फॉर्म'
                        : lang === 'hi'
                        ? 'प्रोजेक्ट पूछताछ फॉर्म'
                        : 'Project Inquiry Form'}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {lang === 'mr'
                        ? 'खालील माहिती भरा आणि आम्हाला पाठवा.'
                        : lang === 'hi'
                        ? 'संपर्क करने के लिए नीचे दिया गया फॉर्म भरें।'
                        : 'Fill out this simple form to get in touch with ChaitShil Tech.'}
                    </p>
                  </div>

                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-400" />
                      <div>
                        <div>{submitError}</div>
                        <div className="mt-2 flex gap-3">
                          <a
                            href={directMailtoUrl}
                            className="underline font-bold text-rose-200 hover:text-white"
                          >
                            Open in Email App
                          </a>
                          <span>•</span>
                          <a
                            href={directWhatsAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline font-bold text-emerald-300 hover:text-white"
                          >
                            Open in WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Name and Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        {t.formName} *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                          if (validationErrors.fullName) {
                            setValidationErrors({ ...validationErrors, fullName: '' });
                          }
                        }}
                        placeholder="e.g. Chaitanya / Rahul"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${
                          validationErrors.fullName ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                        } focus:outline-none text-xs text-white placeholder:text-slate-600 transition-colors`}
                      />
                      {validationErrors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1">{validationErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        {t.formBusinessName}
                      </label>
                      <input
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="e.g. Acme Stores / Startup"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-xs text-white placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        {t.formEmail} *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (validationErrors.email) {
                            setValidationErrors({ ...validationErrors, email: '' });
                          }
                        }}
                        placeholder="yourname@domain.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${
                          validationErrors.email ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                        } focus:outline-none text-xs text-white placeholder:text-slate-600 transition-colors`}
                      />
                      {validationErrors.email && (
                        <p className="text-[11px] text-rose-400 mt-1">{validationErrors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        {t.formPhone} *
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (validationErrors.phone) {
                            setValidationErrors({ ...validationErrors, phone: '' });
                          }
                        }}
                        placeholder="+91 98XXXXXXXX"
                        className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${
                          validationErrors.phone ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                        } focus:outline-none text-xs text-white placeholder:text-slate-600 transition-colors`}
                      />
                      {validationErrors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1">{validationErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Service Requirement & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        {t.formType}
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-xs text-white transition-colors"
                      >
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile Apps (Android / iOS)">Mobile Apps (Android / iOS)</option>
                        <option value="Online Stores">Online Stores</option>
                        <option value="Custom Digital Solutions">Custom Digital Solutions</option>
                        <option value="AI Solutions">AI Solutions</option>
                        <option value="Maintenance & Support">Maintenance & Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                        {t.formBudget}
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-cyan-500 focus:outline-none text-xs text-white transition-colors"
                      >
                        <option value="Under ₹25,000">Under ₹25,000</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                        <option value="₹1,00,000+">₹1,00,000+</option>
                        <option value="Not sure yet">Not sure yet</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">
                      {t.formMessage} *
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (validationErrors.message) {
                          setValidationErrors({ ...validationErrors, message: '' });
                        }
                      }}
                      placeholder="Briefly describe what your business does and what kind of website or app you need..."
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-950 border ${
                        validationErrors.message ? 'border-rose-500 focus:border-rose-500' : 'border-slate-800 focus:border-cyan-500'
                      } focus:outline-none text-xs text-white placeholder:text-slate-600 transition-colors`}
                    />
                    {validationErrors.message && (
                      <p className="text-[11px] text-rose-400 mt-1">{validationErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Processing Inquiry...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.submitButton}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
