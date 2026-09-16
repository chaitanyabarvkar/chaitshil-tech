export interface Translations {
  nav: {
    services: string;
    about: string;
    projects: string;
    process: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    badge: string;
    headlineMain: string;
    headlineHighlight: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statsProjects: string;
    statsSatisfaction: string;
    statsUptime: string;
    statsDelivery: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
  };
  founders: {
    tag: string;
    title: string;
    subtitle: string;
  };
  projects: {
    tag: string;
    title: string;
    subtitle: string;
    viewProduct: string;
    viewProject: string;
    comingSoon: string;
    upcomingTitle: string;
    upcomingSubtitle: string;
    upcomingDesc: string;
    startProjectCta: string;
  };
  process: {
    tag: string;
    title: string;
    subtitle: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formPhone: string;
    formBusinessName: string;
    formType: string;
    formBudget: string;
    formMessage: string;
    submitButton: string;
    whatsappDirect: string;
    emailDirect: string;
  };
}

export const TRANSLATIONS: Record<'en' | 'mr' | 'hi', Translations> = {
  en: {
    nav: {
      services: 'Services',
      about: 'About Us',
      projects: 'Projects & Products',
      process: 'How We Work',
      contact: 'Contact',
      getQuote: 'Start a Project'
    },
    hero: {
      badge: 'Available for New Projects',
      headlineMain: 'We Build Websites and',
      headlineHighlight: 'Mobile Applications',
      subheadline:
        'ChaitShil Tech is a technology company that builds websites, mobile applications and digital solutions for businesses, startups and entrepreneurs. We combine business understanding, creativity and technology to turn ideas into practical digital products.',
      ctaPrimary: 'Explore Projects',
      ctaSecondary: 'Contact Us',
      statsProjects: 'Platforms',
      statsSatisfaction: 'Design',
      statsUptime: 'Solutions',
      statsDelivery: 'Support'
    },
    services: {
      tag: 'Our Services',
      title: 'Digital Solutions for Your Business',
      subtitle:
        'Clear, practical digital services designed to help businesses showcase their products, reach more customers, and work efficiently.'
    },
    founders: {
      tag: 'Leadership',
      title: 'About ChaitShil Tech & Founders',
      subtitle:
        'ChaitShil Tech was founded by Chaitanya Barvkar and Shila Shinde, combining business understanding, creative direction and technology development.'
    },
    projects: {
      tag: 'Our Work',
      title: 'Projects & Products',
      subtitle:
        'A collection of digital products and client solutions built by ChaitShil Tech.',
      viewProduct: 'Visit TreatLove',
      viewProject: 'View Project',
      comingSoon: 'Coming Soon',
      upcomingTitle: 'Future Client Project',
      upcomingSubtitle: 'Website or Mobile Application',
      upcomingDesc:
        'We collaborate with entrepreneurs and businesses to build custom digital products. Our next client deployment will be showcased here.',
      startProjectCta: 'Start Your Project'
    },
    process: {
      tag: 'Our Process',
      title: 'How We Work',
      subtitle:
        'A straightforward, transparent four-step journey from initial discussion to live deployment.'
    },
    contact: {
      tag: 'Get In Touch',
      title: 'Let’s Discuss Your Project',
      subtitle:
        'Have a website, mobile app or digital product in mind? Send us a message and we will respond promptly.',
      formName: 'Your Name',
      formEmail: 'Email Address',
      formPhone: 'Phone or WhatsApp Number',
      formBusinessName: 'Business / Company Name (Optional)',
      formType: 'What are you looking to build?',
      formBudget: 'Estimated Budget Range',
      formMessage: 'Briefly describe your requirements...',
      submitButton: 'Send Inquiry',
      whatsappDirect: 'Chat on WhatsApp',
      emailDirect: 'Send an Email'
    }
  },
  hi: {
    nav: {
      services: 'सेवाएं',
      about: 'हमारे बारे में',
      projects: 'प्रोजेक्ट्स और प्रोडक्ट्स',
      process: 'कार्य प्रणाली',
      contact: 'संपर्क',
      getQuote: 'प्रोजेक्ट शुरू करें'
    },
    hero: {
      badge: 'नए प्रोजेक्ट्स के लिए उपलब्ध',
      headlineMain: 'हम बनाते हैं आधुनिक',
      headlineHighlight: 'वेबसाइट्स और मोबाइल ऐप्स',
      subheadline:
        'ChaitShil Tech एक टेक्नोलॉजी कंपनी है जो व्यवसायों, स्टार्टअप्स और उद्यमियों के लिए वेबसाइट्स, मोबाइल एप्लिकेशन्स और डिजिटल समाधान बनाती है। हम व्यावसायिक समझ, रचनात्मकता और तकनीक को मिलाकर विचारों को व्यावहारिक डिजिटल उत्पादों में बदलते हैं।',
      ctaPrimary: 'हमारे प्रोजेक्ट्स देखें',
      ctaSecondary: 'संपर्क करें',
      statsProjects: 'प्लेटफॉर्म्स',
      statsSatisfaction: 'डिज़ाइन',
      statsUptime: 'समाधान',
      statsDelivery: 'सपोर्ट'
    },
    services: {
      tag: 'हमारी सेवाएं',
      title: 'आपके व्यवसाय के लिए डिजिटल समाधान',
      subtitle:
        'व्यावहारिक और स्पष्ट डिजिटल सेवाएं जो व्यवसायों को अपने उत्पाद प्रदर्शित करने, अधिक ग्राहकों तक पहुंचने और कुशलता से काम करने में मदद करती हैं।'
    },
    founders: {
      tag: 'नेतृत्व',
      title: 'ChaitShil Tech और संस्थापक',
      subtitle:
        'ChaitShil Tech की स्थापना चैतन्य बारवकर और शीला शिंदे द्वारा की गई है, जो व्यावसायिक रणनीति, रचनात्मक दिशा और सॉफ्टवेयर तकनीक का संयोजन करते हैं।'
    },
    projects: {
      tag: 'हमारा काम',
      title: 'प्रोजेक्ट्स और प्रोडक्ट्स',
      subtitle:
        'ChaitShil Tech द्वारा विकसित और संचालित डिजिटल उत्पाद और समाधान।',
      viewProduct: 'TreatLove पर जाएं',
      viewProject: 'प्रोजेक्ट देखें',
      comingSoon: 'जल्द आ रहा है',
      upcomingTitle: 'आगामी क्लाइंट प्रोजेक्ट',
      upcomingSubtitle: 'वेबसाइट या मोबाइल एप्लिकेशन',
      upcomingDesc:
        'हम उद्यमियों और व्यवसायों के साथ मिलकर कस्टम डिजिटल उत्पाद विकसित कर रहे हैं। हमारा अगला क्लाइंट प्रोजेक्ट यहाँ प्रदर्शित किया जाएगा।',
      startProjectCta: 'अपना प्रोजेक्ट शुरू करें'
    },
    process: {
      tag: 'कार्य प्रणाली',
      title: 'विचार से लॉन्च तक ४ आसान चरण',
      subtitle:
        'एक स्पष्ट और पारदर्शी प्रक्रिया ताकि आपको हमेशा अपने प्रोजेक्ट की स्थिति की जानकारी रहे।'
    },
    contact: {
      tag: 'संपर्क करें',
      title: 'आइए अपने प्रोजेक्ट पर चर्चा करें',
      subtitle:
        'क्या आपके पास वेबसाइट, मोबाइल ऐप या डिजिटल उत्पाद का कोई विचार है? हमें संदेश भेजें, हम शीघ्र उत्तर देंगे।',
      formName: 'आपका नाम',
      formEmail: 'ईमेल पता',
      formPhone: 'फोन या WhatsApp नंबर',
      formBusinessName: 'व्यवसाय / कंपनी का नाम (वैकल्पिक)',
      formType: 'आप क्या बनवाना चाहते हैं?',
      formBudget: 'अनुमानित बजट',
      formMessage: 'अपनी आवश्यकताओं के बारे में संक्षेप में बताएं...',
      submitButton: 'पूछताछ भेजें',
      whatsappDirect: 'WhatsApp पर चैट करें',
      emailDirect: 'ईमेल भेजें'
    }
  },
  mr: {
    nav: {
      services: 'सेवा',
      about: 'आमच्याबद्दल',
      projects: 'प्रकल्प आणि उत्पादने',
      process: 'कामाची पद्धत',
      contact: 'संपर्क',
      getQuote: 'प्रकल्प सुरू करा'
    },
    hero: {
      badge: 'नवीन प्रकल्पांसाठी उपलब्ध',
      headlineMain: 'आम्ही बनवतो दर्जेदार',
      headlineHighlight: 'वेबसाइट्स आणि मोबाईल ॲप्स',
      subheadline:
        'ChaitShil Tech ही एक टेक्नॉलॉजी कंपनी आहे जी व्यवसाय, स्टार्टअप्स आणि उद्योजकांसाठी वेबसाइट्स, मोबाईल ॲप्लिकेशन्स आणि डिजिटल सोल्यूशन्स तयार करते. आम्ही बिझनेस, कल्पकता आणि तंत्रज्ञानाचा संगम साधून कल्पनांचे उपयुक्त डिजिटल उत्पादनांत रूपांतर करतो.',
      ctaPrimary: 'आमचे प्रकल्प पहा',
      ctaSecondary: 'संपर्क साधा',
      statsProjects: 'प्लॅटफॉर्म्स',
      statsSatisfaction: 'डिझाईन',
      statsUptime: 'सोल्यूशन्स',
      statsDelivery: 'सपोर्ट'
    },
    services: {
      tag: 'आमच्या सेवा',
      title: 'तुमच्या व्यवसायासाठी डिजिटल सोल्यूशन्स',
      subtitle:
        'व्यवसाय वाढवण्यासाठी आणि ग्राहकांपर्यंत पोहोचण्यासाठी सोपी, विश्वासू आणि उपयुक्त तंत्रज्ञान साधने.'
    },
    founders: {
      tag: 'संस्थापक',
      title: 'ChaitShil Tech आणि संस्थापक',
      subtitle:
        'ChaitShil Tech ची स्थापना चैतन्य बारवकर आणि शीला शिंदे यांनी केली असून, यामध्ये व्यवसाय, कल्पकता आणि तंत्रज्ञानाची थेट जबाबदारी आहे.'
    },
    projects: {
      tag: 'आमचे काम',
      title: 'प्रकल्प आणि उत्पादने',
      subtitle:
        'ChaitShil Tech द्वारे विकसित आणि चालवली जाणारी डिजिटल उत्पादने आणि सोल्यूशन्स.',
      viewProduct: 'TreatLove ला भेट द्या',
      viewProject: 'प्रकल्प पहा',
      comingSoon: 'लवकरच येत आहे',
      upcomingTitle: 'भावी क्लायंट प्रकल्प',
      upcomingSubtitle: 'वेब किंवा मोबाईल ॲप्लिकेशन',
      upcomingDesc:
        'आम्ही व्यवसाय आणि उद्योजकांसाठी उपयुक्त डिजिटल उत्पादने विकसित करत आहोत. पुढील क्लायंट प्रकल्प येथे जोडला जाईल.',
      startProjectCta: 'प्रकल्प सुरू करा'
    },
    process: {
      tag: 'कामाची पद्धत',
      title: 'आम्ही कसे काम करतो',
      subtitle:
        'प्रकल्पाच्या सुरुवातीच्या चर्चेपासून ते थेट लाँचपर्यंतची सोपी आणि पारदर्शक चार टप्प्यांची पद्धत.'
    },
    contact: {
      tag: 'संपर्क साधा',
      title: 'तुमच्या प्रोजेक्टवर चर्चा करूया',
      subtitle:
        'तुमच्या व्यवसायासाठी वेबसाइट किंवा मोबाईल ॲप हवे आहे का? थेट आम्हाला संदेश पाठवा.',
      formName: 'तुमचे नाव',
      formEmail: 'ईमेल पत्ता',
      formPhone: 'फोन किंवा WhatsApp नंबर',
      formBusinessName: 'व्यवसाय / कंपनीचे नाव (पर्यायी)',
      formType: 'तुम्हाला काय बनवायचे आहे?',
      formBudget: 'अपेक्षित बजेट',
      formMessage: 'तुमच्या गरजेबद्दल थोडक्यात सांगा...',
      submitButton: 'माहिती पाठवा',
      whatsappDirect: 'WhatsApp वर संपर्क करा',
      emailDirect: 'ईमेल पाठवा'
    }
  }
};
