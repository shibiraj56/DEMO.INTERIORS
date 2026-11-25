import bedroomImg from '../assets/images/bedroom.jpg';
import commercialImg from '../assets/images/commercial.jpg';
import diningImg from '../assets/images/dining.jpg';
import heroLivingImg from '../assets/images/hero-living.jpg';
import kitchenImg from '../assets/images/kitchen.jpg';
import officeImg from '../assets/images/office.jpg';
import poojaImg from '../assets/images/pooja.jpg';
import wardrobeImg from '../assets/images/wardrobe.jpg';
import type { GalleryItem } from '../types';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-living-01',
    title: 'Fluted Teakwood & Marble Living Room',
    category: 'Living & Dining',
    locationTag: 'Coimbatore Concept',
    caption: 'Warm ivory plaster, fluted teakwood paneling with brass inlay, and sculpted chandelier.',
    src: heroLivingImg,
    alt: 'Luxury Tamil Nadu living room with fluted teakwood and cream marble flooring',
    aspect: 'landscape',
  },
  {
    id: 'gal-kitchen-01',
    title: 'Teak-Finish Island Modular Kitchen',
    category: 'Kitchen & Wardrobe',
    locationTag: 'Tiruppur Concept',
    caption: 'Ergonomic island layout with warm timber cabinetry and stone countertop.',
    src: kitchenImg,
    alt: 'Modern Indian modular kitchen with central island and rich wood cabinetry',
    aspect: 'landscape',
  },
  {
    id: 'gal-pooja-01',
    title: 'Sacred South Indian Pooja Illumination',
    category: 'Bedroom & Pooja',
    locationTag: 'Madurai Concept',
    caption: 'Traditional brass kuthu vilakku and warm diya lighting for serene pooja mandaps.',
    src: poojaImg,
    alt: 'Traditional South Indian brass lamp and diyas in a warm pooja room setting',
    aspect: 'landscape',
  },
  {
    id: 'gal-bedroom-01',
    title: 'Upholstered Master Bedroom Suite',
    category: 'Bedroom & Pooja',
    locationTag: 'Chennai Concept',
    caption: 'Tufted neutral headboard, classic wall molding, and floor-to-ceiling sheer drapes.',
    src: bedroomImg,
    alt: 'Luxury beige master bedroom interior with tufted headboard and soft drapes',
    aspect: 'landscape',
  },
  {
    id: 'gal-wardrobe-01',
    title: 'Illuminated Walk-In Wardrobe & Vanity',
    category: 'Kitchen & Wardrobe',
    locationTag: 'Trichy Concept',
    caption: 'Backlit timber wardrobe shelves paired with a marble-clad circular vanity mirror.',
    src: wardrobeImg,
    alt: 'Bespoke walk-in wardrobe with warm LED shelf lighting and dressing island',
    aspect: 'landscape',
  },
  {
    id: 'gal-dining-01',
    title: 'Warm Timber Family Dining Space',
    category: 'Living & Dining',
    locationTag: 'Erode Concept',
    caption: 'Handcrafted wood dining table anchored beneath a warm-toned pendant fixture.',
    src: diningImg,
    alt: 'Warm residential dining room with solid wood table and pendant lighting',
    aspect: 'landscape',
  },
  {
    id: 'gal-office-01',
    title: 'Executive Timber & Marble Study',
    category: 'Office & Commercial',
    locationTag: 'Chennai Corporate Concept',
    caption: 'Fluted wood wall cladding, veined marble shelving, and architectural ring lighting.',
    src: officeImg,
    alt: 'Modern luxury executive office interior with wood paneling and ring chandelier',
    aspect: 'landscape',
  },
  {
    id: 'gal-commercial-01',
    title: 'Brass Jaali Hospitality Lounge',
    category: 'Office & Commercial',
    locationTag: 'Salem Commercial Concept',
    caption: 'Laser-cut brass screens, travertine walls, and ivory seating for client lounges.',
    src: commercialImg,
    alt: 'Luxury commercial hospitality lounge with brass lattice screen and ivory armchairs',
    aspect: 'landscape',
  },
];
