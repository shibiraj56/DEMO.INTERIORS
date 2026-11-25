export interface NavItem {
  label: string;
  path: string;
  description?: string;
}

export interface AnnouncementItem {
  id: string;
  text: string;
  highlight?: string;
}

export interface ServiceSummary {
  id: string;
  number: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Specialized';
  shortDescription: string;
}

export interface ServiceDetail {
  id: string;
  number: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Specialized';
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  location: string;
  category: 'Residential' | 'Commercial';
  spaceType: string;
  areaSqFt: string;
  style: string;
  summary: string;
  scope: string[];
  materials: string[];
  image: string;
  imageAlt: string;
  galleryImages: { src: string; alt: string }[];
  isConceptDemo: true;
}

export type GalleryCategory =
  | 'All'
  | 'Living & Dining'
  | 'Kitchen & Wardrobe'
  | 'Bedroom & Pooja'
  | 'Office & Commercial';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  locationTag: string;
  caption: string;
  src: string;
  alt: string;
  aspect: 'landscape' | 'tall';
}

export interface ProcessStepItem {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  personaLabel: string;
  city: string;
  projectType: string;
  quote: string;
  isDemo: true;
}

export interface SeoMeta {
  title: string;
  description: string;
}
