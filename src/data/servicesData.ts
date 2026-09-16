import { ServiceItem, Founder } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    tagline: 'Professional websites for businesses, brands and startups',
    description:
      'Professional websites for businesses, brands and startups. Fast, easy to use on mobile phones and computers, and designed to help customers find you.',
    icon: 'Globe',
    badge: 'Popular',
    features: [
      'Modern, mobile-friendly design',
      'Fast loading speed',
      'Search engine friendly (SEO)',
      'Easy to update content',
      'Domain and website setup support'
    ],
    techStack: ['Websites', 'Mobile-Friendly', 'SEO', 'Fast Loading']
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Apps',
    tagline: 'Android and iPhone apps built around your business or product',
    description:
      'Android and iPhone apps built around your business or product. Smooth performance, clear user experience, and ready for app store release.',
    icon: 'Smartphone',
    badge: 'In-Demand',
    features: [
      'Android app (APK) & iPhone app development',
      'Simple and clean user interface',
      'Notifications and alerts',
      'Works smoothly on all devices',
      'App Store and Play Store launch support'
    ],
    techStack: ['Android Apps', 'iOS Apps', 'Mobile APK', 'App Store']
  },
  {
    id: 'ecommerce',
    title: 'Online Stores',
    tagline: 'Websites that help businesses showcase and sell products online',
    description:
      'Websites that help businesses showcase and sell products online. Product catalogs, shopping cart, simple online payments, and order tracking.',
    icon: 'ShoppingBag',
    badge: 'For Business',
    features: [
      'Product catalog with clear categories',
      'UPI, Cards, and Net Banking payment setup',
      'Order notifications and customer receipts',
      'Simple admin panel to manage products',
      'Secure shopping experience for customers'
    ],
    techStack: ['Online Store', 'UPI & Payments', 'Product Catalog', 'Orders']
  },
  {
    id: 'custom-solutions',
    title: 'Custom Digital Solutions',
    tagline: 'Digital solutions created around your specific business requirement',
    description:
      'Digital solutions created around your specific business requirement. Whether you need an internal management tool, customer portal, or custom workflow.',
    icon: 'Server',
    features: [
      'Built specifically for your business workflow',
      'Customer portals and management dashboards',
      'Integration with existing tools',
      'User accounts and access control',
      'Safe and organized data storage'
    ],
    techStack: ['Custom Portals', 'Dashboards', 'Business Tools', 'Databases']
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    tagline: 'Practical AI tools and automation for businesses',
    description:
      'Practical AI tools and automation for businesses. Automate everyday tasks, answer customer inquiries faster, and improve business productivity.',
    icon: 'Palette',
    features: [
      'Smart customer query assistants',
      'Automated data organization',
      'Business process automation',
      'Content and inquiry sorting',
      'Practical tools built for daily business use'
    ],
    techStack: ['AI Assistants', 'Automation', 'Productivity Tools']
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    tagline: 'Updates, technical support and ongoing maintenance after launch',
    description:
      'Updates, technical support and ongoing maintenance after launch. We keep your website and application updated, secure, and running smoothly.',
    icon: 'ShieldCheck',
    features: [
      'Regular updates and security checks',
      'Fast bug fixes and technical support',
      'Website backup and data safety',
      'Assistance when you need new features',
      'Ongoing peace of mind after launch'
    ],
    techStack: ['Technical Support', 'Regular Updates', 'Backups', 'Uptime']
  }
];

export const FOUNDERS: Founder[] = [
  {
    name: 'Chaitanya Barvkar',
    role: 'Co-Founder — Business & Creative',
    titleBadge: 'Business Strategy • Creative Direction',
    division: 'Business & Creative',
    bio: 'Focuses on business strategy, branding, creative direction, and understanding client requirements to ensure digital products solve real business needs.',
    expertise: ['Business Understanding', 'Creative Direction', 'Brand Identity', 'User Experience'],
    quote: '"We focus on understanding your business goals and creating practical digital products that deliver real value."',
    accentColor: 'from-amber-500/20 via-orange-500/10 to-transparent'
  },
  {
    name: 'Shila Shinde',
    role: 'Co-Founder — Technology',
    titleBadge: 'Technology • App & Web Development',
    division: 'Technology',
    bio: 'Focuses on software architecture, website and mobile application development, and ensuring digital products are reliable, fast, and easy to maintain.',
    expertise: ['Website Development', 'Mobile Applications', 'System Architecture', 'Technical Support'],
    quote: '"We build reliable, clean, and practical software designed to support your business as it grows."',
    accentColor: 'from-cyan-500/20 via-blue-500/10 to-transparent'
  }
];
