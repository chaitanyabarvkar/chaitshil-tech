export interface SiteConfig {
  companyName: string;
  shortName: string;
  tagline: string;
  description: string;
  email: string;
  whatsappNumber: string; // Configurable via VITE_WHATSAPP_NUMBER (e.g. "9198XXXXXXXX")
  whatsappDisplay: string;
  location: {
    state: string;
    country: string;
    display: string;
  };
  founders: {
    name: string;
    role: string;
  }[];
  urls: {
    treatlove: string;
    contactApi?: string;
  };
}

export const SITE_CONFIG: SiteConfig = {
  companyName: 'ChaitShil Tech',
  shortName: 'ChaitShil',
  tagline: 'Website & Mobile App Development Studio',
  description:
    'ChaitShil Tech is a technology company building modern websites, mobile applications, and custom digital solutions for businesses, startups, and entrepreneurs.',
  // Email from verified company metadata
  email: import.meta.env.VITE_CONTACT_EMAIL || 'chaitshiltech.support@gmail.com',
  // Configured WhatsApp: 919922710432 / +91 9922710432
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '919922710432',
  whatsappDisplay: import.meta.env.VITE_WHATSAPP_DISPLAY || '+91 9922710432',
  location: {
    state: 'Maharashtra',
    country: 'India',
    display: 'Maharashtra, India'
  },
  founders: [
    {
      name: 'Chaitanya Barvkar',
      role: 'Co-Founder — Business & Creative'
    },
    {
      name: 'Shila Shinde',
      role: 'Co-Founder — Technology'
    }
  ],
  urls: {
    treatlove: 'https://treatlove.in',
    contactApi: import.meta.env.VITE_CONTACT_API_URL || ''
  }
};

/**
 * Generates a clean WhatsApp direct link with pre-filled message
 */
export function getWhatsAppLink(messageText: string = ''): string {
  const encodedMsg = encodeURIComponent(
    messageText || 'Hello ChaitShil Tech, I would like to inquire about a website/mobile app project.'
  );
  if (SITE_CONFIG.whatsappNumber) {
    const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanNumber}?text=${encodedMsg}`;
  }
  // Generic WhatsApp web send link if no specific phone number is hardcoded
  return `https://api.whatsapp.com/send?text=${encodedMsg}`;
}

/**
 * Generates a clean mailto link
 */
export function getMailtoLink(subject: string = '', body: string = ''): string {
  const encSubject = encodeURIComponent(subject || 'Project Inquiry - ChaitShil Tech');
  const encBody = encodeURIComponent(body || '');
  return `mailto:${SITE_CONFIG.email}?subject=${encSubject}&body=${encBody}`;
}
