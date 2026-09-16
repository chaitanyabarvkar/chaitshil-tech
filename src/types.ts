export type ProjectCategory = 'all' | 'mobile' | 'web' | 'fullstack';

export interface ApkDetails {
  version: string;
  size: string;
  minAndroid: string;
  packageId: string;
  features: string[];
  apkFileName: string;
}

export interface ProjectStat {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  projectType: string;
  description: string;
  image: string;
  liveUrl?: string;
  buttonText?: string;
  status?: 'live' | 'upcoming' | 'in-pipeline' | string;
  category?: ProjectCategory;
  categoryLabel?: string;
  client?: string;
  year?: string;
  featured?: boolean;
  isFlagship?: boolean;
  badge?: string;
  challenge?: string;
  solution?: string;
  keyFeatures?: string[];
  techStack?: string[];
  deliverableType?: string;
  apkDetails?: ApkDetails;
  stats?: ProjectStat[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  badge?: string;
  features: string[];
  techStack: string[];
}

export interface Founder {
  name: string;
  role: string;
  titleBadge: string;
  division: string;
  bio: string;
  expertise: string[];
  quote: string;
  accentColor: string;
}

export type SupportedLanguage = 'en' | 'mr' | 'hi';
