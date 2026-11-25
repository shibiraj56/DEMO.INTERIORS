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

export interface SeoMeta {
  title: string;
  description: string;
}
