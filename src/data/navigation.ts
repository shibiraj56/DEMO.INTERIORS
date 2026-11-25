import type { AnnouncementItem, NavItem } from '../types';

export const ANNOUNCEMENTS: AnnouncementItem[] = [
  {
    id: 'tn-coverage',
    text: 'Bespoke Interior Design Across Chennai, Coimbatore, Tiruppur, Madurai & All of Tamil Nadu',
    highlight: 'Now Booking Demo Consultations',
  },
  {
    id: 'turnkey',
    text: 'Luxury Residential Interiors · Modular Kitchens · Pooja Rooms · Turnkey Execution',
    highlight: 'Elegance in Every Detail',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
];
