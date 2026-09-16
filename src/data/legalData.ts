import { SupportedLanguage } from '../types';
import { SITE_CONFIG } from '../config/siteConfig';

export interface LegalDocument {
  title: string;
  lastUpdated: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export interface LegalContent {
  privacy: LegalDocument;
  terms: LegalDocument;
}

export const LEGAL_DATA: Record<SupportedLanguage, LegalContent> = {
  en: {
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'September 2026',
      sections: [
        {
          heading: '1. Introduction',
          content: [
            'ChaitShil Tech ("we", "our", or "us") values your privacy. This Privacy Policy explains what information we collect when you visit our website or submit an inquiry through our contact form, why we collect it, and how your information is handled.',
            'We are committed to handling your personal information responsibly and transparently in accordance with standard data protection principles.'
          ]
        },
        {
          heading: '2. Information We Collect via Contact Form',
          content: [
            'When you contact us or request an estimate through our website, we may collect the following details that you voluntarily provide:',
            '• Full Name',
            '• Email Address',
            '• Phone or WhatsApp Number',
            '• Business / Company Name (if provided)',
            '• Project Type (e.g., Website Development, Mobile App, Custom Solution)',
            '• Estimated Budget Range',
            '• Project Requirements and Message details'
          ]
        },
        {
          heading: '3. Why We Collect This Information',
          content: [
            'We collect and use the submitted information exclusively for legitimate business and communication purposes, including:',
            '• Responding directly to your inquiries and consultation requests.',
            '• Evaluating project requirements and providing technical estimates or proposals.',
            '• Communicating with you regarding project scope, timelines, and deliverables.',
            '• Providing ongoing support and services as agreed upon.'
          ]
        },
        {
          heading: '4. How Your Information Is Handled & Protected',
          content: [
            '• Confidentiality: Your project inquiries and contact details are treated confidentially.',
            '• No Third-Party Sales: We do not sell, rent, trade, or distribute your personal details to any third parties for advertising or marketing.',
            '• Secure Transmission: Inquiries submitted through our website or connected services are transmitted securely over encrypted protocols (HTTPS).',
            '• Access Restriction: Only authorized team members of ChaitShil Tech have access to inquiry submissions to respond to your request.'
          ]
        },
        {
          heading: '5. Your Privacy Rights',
          content: [
            'You have the right to request access to the information you submitted to us, ask for corrections, or request that we delete your contact records from our communication logs. To exercise any of these rights, simply email us at chaitshiltech.support@gmail.com.'
          ]
        },
        {
          heading: '6. Contact Us',
          content: [
            `If you have any questions regarding this Privacy Policy, you can reach us at:`,
            `• Email: ${SITE_CONFIG.email}`,
            `• Phone / WhatsApp: ${SITE_CONFIG.whatsappDisplay}`,
            `• Location: ${SITE_CONFIG.location.display}`
          ]
        }
      ]
    },
    terms: {
      title: 'Terms & Conditions',
      lastUpdated: 'September 2026',
      sections: [
        {
          heading: '1. Acceptance of Terms',
          content: [
            'By accessing and using the ChaitShil Tech website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.'
          ]
        },
        {
          heading: '2. Website Use & Purpose',
          content: [
            'This website is an informational portfolio and studio presentation of ChaitShil Tech. Its purpose is to showcase our services (website development, mobile application development, digital solutions), introduce our founders and in-house products, and facilitate project inquiries.'
          ]
        },
        {
          heading: '3. Service Engagements & Project Scopes',
          content: [
            '• Custom Project Scope: All development services (websites, mobile applications, software solutions) are provided based on agreed project scopes, timelines, and estimates agreed upon in writing between the client and ChaitShil Tech.',
            '• Code & Deliverable Ownership: Upon complete delivery of the project deliverables and full payment of the agreed project fees, the client receives the complete source code and ownership of their custom digital assets as specified in their project agreement.',
            '• In-House Products: Products developed in-house by ChaitShil Tech (such as TreatLove) remain the sole intellectual property of ChaitShil Tech.'
          ]
        },
        {
          heading: '4. Intellectual Property',
          content: [
            'The content, layout, design, graphics, branding, and text on this website are owned by or licensed to ChaitShil Tech and are protected by applicable intellectual property and copyright laws. Unauthorized reproduction or duplication of website materials is prohibited.'
          ]
        },
        {
          heading: '5. External Links & In-House Products',
          content: [
            'Our website may include links to external websites or in-house digital platforms (such as TreatLove). These links are provided for convenience and reference. We encourage users to review the specific terms and policies of any linked websites.'
          ]
        },
        {
          heading: '6. Disclaimer & Limitation of Liability',
          content: [
            'The website is provided on an "as is" and "as available" basis. While we strive for accuracy, ChaitShil Tech does not warrant that website functions will be completely uninterrupted or error-free.',
            'In no event shall ChaitShil Tech be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use this website.'
          ]
        },
        {
          heading: '7. Contact Information',
          content: [
            `For any questions or inquiries regarding these Terms of Use, please contact:`,
            `• Email: ${SITE_CONFIG.email}`,
            `• Phone / WhatsApp: ${SITE_CONFIG.whatsappDisplay}`,
            `• Location: ${SITE_CONFIG.location.display}`
          ]
        }
      ]
    }
  },
  hi: {
    privacy: {
      title: 'गोपनीयता नीति (Privacy Policy)',
      lastUpdated: 'सितंबर 2026',
      sections: [
        {
          heading: '1. परिचय',
          content: [
            'ChaitShil Tech ("हम", "हमारी") आपकी गोपनीयता का सम्मान करती है। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट पर आते हैं या संपर्क फॉर्म के माध्यम से पूछताछ भेजते हैं, तो हम कौन सी जानकारी एकत्र करते हैं, क्यों करते हैं और उसका प्रबंधन कैसे किया जाता है।',
            'हम आपकी व्यक्तिगत जानकारी को जिम्मेदारी और पारदर्शिता के साथ सुरक्षित रखने के लिए प्रतिबद्ध हैं।'
          ]
        },
        {
          heading: '2. संपर्क फॉर्म द्वारा एकत्रित जानकारी',
          content: [
            'जब आप हमारी वेबसाइट के माध्यम से संपर्क करते हैं, तो हम निम्नलिखित विवरण एकत्र कर सकते हैं जो आप स्वेच्छा से प्रदान करते हैं:',
            '• पूरा नाम',
            '• ईमेल पता',
            '• फोन या WhatsApp नंबर',
            '• व्यवसाय / कंपनी का नाम (यदि प्रदान किया गया हो)',
            '• प्रोजेक्ट का प्रकार (जैसे वेबसाइट डेवलपमेंट, मोबाइल ऐप, आदि)',
            '• अनुमानित बजट',
            '• प्रोजेक्ट की आवश्यकताएं और संदेश'
          ]
        },
        {
          heading: '3. जानकारी एकत्र करने का उद्देश्य',
          content: [
            'हम एकत्रित जानकारी का उपयोग केवल वैध व्यावसायिक उद्देश्यों के लिए करते हैं, जिनमें शामिल हैं:',
            '• आपकी पूछताछ और प्रोजेक्ट आवश्यकता का सीधा उत्तर देना।',
            '• प्रोजेक्ट के दायरे का मूल्यांकन करना और उपयुक्त कोटेशन/प्रस्ताव तैयार करना।',
            '• प्रोजेक्ट के संबंध में स्पष्ट संवाद बनाए रखना।'
          ]
        },
        {
          heading: '4. जानकारी की सुरक्षा और गोपनीयता',
          content: [
            '• पूर्ण गोपनीयता: आपकी प्रोजेक्ट पूछताछ को गोपनीय रखा जाता है।',
            '• कोई डेटा बिक्री नहीं: हम आपकी व्यक्तिगत जानकारी को किसी तीसरे पक्ष को विज्ञापन या मार्केटिंग के लिए नहीं बेचते या साझा नहीं करते।',
            '• सुरक्षित डेटा ट्रांसमिशन: संपर्क फॉर्म के माध्यम से डेटा सुरक्षित HTTPS प्रोटोकॉल द्वारा भेजा जाता है।'
          ]
        },
        {
          heading: '5. उपयोगकर्ता के अधिकार',
          content: [
            'आपको अपने द्वारा सबमिट की गई जानकारी की समीक्षा करने, सुधार करने या हटाने का अनुरोध करने का पूरा अधिकार है। इसके लिए आप हमें chaitshiltech.support@gmail.com पर संपर्क कर सकते हैं।'
          ]
        },
        {
          heading: '6. संपर्क विवरण',
          content: [
            `गोपनीयता नीति से संबंधित प्रश्नों के लिए संपर्क करें:`,
            `• ईमेल: ${SITE_CONFIG.email}`,
            `• फोन / WhatsApp: ${SITE_CONFIG.whatsappDisplay}`,
            `• स्थान: ${SITE_CONFIG.location.display}`
          ]
        }
      ]
    },
    terms: {
      title: 'नियम और शर्तें (Terms & Conditions)',
      lastUpdated: 'सितंबर 2026',
      sections: [
        {
          heading: '1. शर्तों की स्वीकृति',
          content: [
            'ChaitShil Tech वेबसाइट का उपयोग करके आप इन नियमों और शर्तों का पालन करने के लिए सहमत होते हैं।'
          ]
        },
        {
          heading: '2. वेबसाइट का उद्देश्य',
          content: [
            'यह वेबसाइट ChaitShil Tech के डिजिटल पोर्टफोलियो, सेवाओं (वेबसाइट, मोबाइल ऐप डेवलपमेंट) और इन-हाउस प्रोडक्ट्स की जानकारी प्रदान करने तथा प्रोजेक्ट पूछताछ के लिए है।'
          ]
        },
        {
          heading: '3. सेवा अनुबंध और स्वामित्व',
          content: [
            '• प्रोजेक्ट का दायरा: सभी डेवलपमेंट सेवाएं क्लाइंट और ChaitShil Tech के बीच लिखित में तय किए गए प्रोजेक्ट स्कोप और बजट के अनुसार प्रदान की जाती हैं।',
            '• सोर्स कोड का स्वामित्व: प्रोजेक्ट के सफल समापन और पूर्ण भुगतान के बाद, क्लाइंट को उनके कस्टम सॉफ्टवेयर/वेबसाइट का पूरा सोर्स कोड और स्वामित्व सौंपा जाता है।',
            '• इन-हाउस उत्पाद: ChaitShil Tech द्वारा विकसित उत्पाद (जैसे TreatLove) ChaitShil Tech की बौद्धिक संपदा हैं।'
          ]
        },
        {
          heading: '4. बौद्धिक संपदा',
          content: [
            'इस वेबसाइट की सामग्री, डिज़ाइन, ब्रांडिंग और टेक्स्ट ChaitShil Tech के स्वामित्व में हैं और कॉपीराइट कानूनों द्वारा संरक्षित हैं।'
          ]
        },
        {
          heading: '5. संपर्क विवरण',
          content: [
            `शर्तों से संबंधित पूछताछ के लिए:`,
            `• ईमेल: ${SITE_CONFIG.email}`,
            `• फोन / WhatsApp: ${SITE_CONFIG.whatsappDisplay}`,
            `• स्थान: ${SITE_CONFIG.location.display}`
          ]
        }
      ]
    }
  },
  mr: {
    privacy: {
      title: 'गोपनीयता धोरण (Privacy Policy)',
      lastUpdated: 'सप्टेंबर 2026',
      sections: [
        {
          heading: '1. ओळख',
          content: [
            'ChaitShil Tech ("आम्ही", "आमचे") तुमच्या गोपनीयतेचा आदर करते. तुम्ही आमच्या वेबसाइटला भेट देता किंवा संपर्क फॉर्मद्वारे चौकशी पाठवता तेव्हा आम्ही कोणती माहिती गोळा करतो आणि ती कशी वापरली जाते हे हे धोरण स्पष्ट करते.',
            'आम्ही तुमची माहिती जबाबदारीने आणि पारदर्शकपणे सुरक्षित ठेवण्यास बांधील आहोत.'
          ]
        },
        {
          heading: '2. संपर्क फॉर्मद्वारे गोळा केली जाणारी माहिती',
          content: [
            'जेव्हा तुम्ही संपर्क फॉर्मद्वारे आमच्याशी संवाद साधता, तेव्हा खालील माहिती गोळा केली जाऊ शकते:',
            '• पूर्ण नाव',
            '• ईमेल पत्ता',
            '• फोन किंवा WhatsApp नंबर',
            '• व्यवसाय / कंपनीचे नाव (उपलब्ध असल्यास)',
            '• प्रकल्पाचा प्रकार (वेबसाइट, मोबाईल ॲप इ.)',
            '• अपेक्षित बजेट',
            '• प्रकल्पाची आवश्यकता आणि संदेश'
          ]
        },
        {
          heading: '3. माहिती गोळा करण्याचे कारण',
          content: [
            'आम्ही या माहितीचा वापर केवळ अधिकृत व्यावसायिक संवादासाठी करतो, ज्यामध्ये समाविष्ट आहे:',
            '• तुमच्या चौकशीला थेट उत्तर देणे.',
            '• प्रकल्पाच्या गरजेनुसार योग्य अंदाज आणि प्रस्ताव तयार करणे.',
            '• प्रकल्प संदर्भात स्पष्ट संवाद साधणे.'
          ]
        },
        {
          heading: '4. माहितीची सुरक्षितता',
          content: [
            '• गोपनीयता: तुमची माहिती अत्यंत गोपनीय ठेवली जाते.',
            '• कोणताही डेटा विकला जात नाही: आम्ही तुमची माहिती कोणत्याही जाहिरात किंवा मार्केटिंगसाठी विकत किंवा शेअर करत नाही.',
            '• सुरक्षित ट्रान्समिशन: संपर्क फॉर्मद्वारे पाठवलेला डेटा सुरक्षित HTTPS प्रोटोकॉलने पाठवला जातो.'
          ]
        },
        {
          heading: '5. तुमचे अधिकार',
          content: [
            'तुम्हाला तुमच्या सबमिट केलेल्या माहितीबद्दल विचारणा करण्याचा किंवा ती काढून टाकण्याची विनंती करण्याचा पूर्ण अधिकार आहे. यासाठी chaitshiltech.support@gmail.com वर संपर्क साधा.'
          ]
        },
        {
          heading: '6. संपर्क',
          content: [
            `गोपनीयतेबाबत अधिक माहितीसाठी:`,
            `• ईमेल: ${SITE_CONFIG.email}`,
            `• फोन / WhatsApp: ${SITE_CONFIG.whatsappDisplay}`,
            `• ठिकाण: ${SITE_CONFIG.location.display}`
          ]
        }
      ]
    },
    terms: {
      title: 'नियम आणि अटी (Terms & Conditions)',
      lastUpdated: 'सप्टेंबर 2026',
      sections: [
        {
          heading: '1. अटींची स्वीकृती',
          content: [
            'ChaitShil Tech वेबसाइटचा वापर करून तुम्ही या नियम आणि अटींचे पालन करण्यास सहमती दर्शवता.'
          ]
        },
        {
          heading: '2. वेबसाइटचा उद्देश',
          content: [
            'ही वेबसाइट ChaitShil Tech च्या सेवा (वेबसाइट, मोबाईल ॲप्स), इन-हाउस उत्पादने आणि कामाची पद्धत दर्शवण्यासाठी तसेच प्रकल्प चौकशीसाठी तयार केली गेली आहे.'
          ]
        },
        {
          heading: '3. सेवा आणि कोडचे मालकी हक्क',
          content: [
            '• प्रकल्पाची व्याप्ती: सर्व विकास सेवा क्लायंट आणि ChaitShil Tech यांच्यातील लेखी करार आणि ठरलेल्या स्कोपवर आधारित असतात.',
            '• सोर्स कोडचे अधिकार: प्रकल्प पूर्ण झाल्यावर आणि ठरलेल्या शुल्काचा भरणा झाल्यानंतर, क्लायंटला त्यांच्या कस्टम सॉफ्टवेअरचा संपूर्ण सोर्स कोड आणि अधिकार दिले जातात.',
            '• इन-हाउस उत्पादने: ChaitShil Tech द्वारे स्वतः विकसित केलेली उत्पादने (जसे की TreatLove) ही ChaitShil Tech ची बौद्धिक संपदा आहेत.'
          ]
        },
        {
          heading: '4. बौद्धिक संपदा',
          content: [
            'या वेबसाइटवरील सर्व मजकूर, डिझाइन आणि ब्रँडिंग ChaitShil Tech च्या मालकीचे असून कॉपीराइट कायद्यानुसार संरक्षित आहे.'
          ]
        },
        {
          heading: '5. संपर्क माहिती',
          content: [
            `अटींसंबंधी चौकशीसाठी:`,
            `• ईमेल: ${SITE_CONFIG.email}`,
            `• फोन / WhatsApp: ${SITE_CONFIG.whatsappDisplay}`,
            `• ठिकाण: ${SITE_CONFIG.location.display}`
          ]
        }
      ]
    }
  }
};
