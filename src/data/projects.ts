import bedroomImg from '../assets/images/bedroom.jpg';
import commercialImg from '../assets/images/commercial.jpg';
import diningImg from '../assets/images/dining.jpg';
import heroLivingImg from '../assets/images/hero-living.jpg';
import kitchenImg from '../assets/images/kitchen.jpg';
import officeImg from '../assets/images/office.jpg';
import poojaImg from '../assets/images/pooja.jpg';
import wardrobeImg from '../assets/images/wardrobe.jpg';
import type { ProjectItem } from '../types';

export const CONCEPT_PROJECTS: ProjectItem[] = [
  {
    slug: 'coimbatore-ivory-teak-residence',
    title: 'Ivory & Fluted Teak Residence',
    location: 'Coimbatore, Tamil Nadu',
    category: 'Residential',
    spaceType: '4 BHK Luxury Villa Interior',
    areaSqFt: '3,800 sq. ft. (Concept)',
    style: 'Contemporary Tamil Nadu Luxury',
    summary:
      'A serene residential interior concept pairing warm ivory lime-plaster walls with fluted Burma teakwood paneling, cream Italian marble, and brushed brass lighting.',
    scope: [
      'Formal Living & Dining Interiors',
      'Teakwood Pooja Room Mandap',
      'Island Modular Kitchen',
      'Master Suite & Walk-In Wardrobe',
    ],
    materials: ['Burma Teak Veneer', 'Cream Italian Marble', 'Brushed Royal Brass', 'Belgian Linen'],
    image: heroLivingImg,
    imageAlt: 'Concept living room with fluted teakwood paneling and brass chandelier in Coimbatore',
    galleryImages: [
      { src: heroLivingImg, alt: 'Formal living room view' },
      { src: kitchenImg, alt: 'Teak-toned modular kitchen island' },
      { src: poojaImg, alt: 'Sacred pooja room brass lamp detail' },
    ],
    isConceptDemo: true,
  },
  {
    slug: 'chennai-coastal-penthouse',
    title: 'Coastal Sanctuary & Modular Suite',
    location: 'Chennai, Tamil Nadu',
    category: 'Residential',
    spaceType: '3 BHK Sea-Facing Apartment',
    areaSqFt: '2,450 sq. ft. (Concept)',
    style: 'Warm Minimalist Elegance',
    summary:
      'Designed for coastal humidity resilience using moisture-resistant marine ply cabinetry, airy sheer drapery, and soft beige upholstered bedroom suites.',
    scope: [
      'Moisture-Resistant Modular Kitchen',
      'Master & Guest Bedroom Suites',
      'Illuminated Walk-In Wardrobe',
      'False Ceiling & Warm Cove Lighting',
    ],
    materials: ['BWP Marine Ply', 'Quartz Stone Countertop', 'Tufted Linen Headboard', 'Fluted Glass'],
    image: bedroomImg,
    imageAlt: 'Serene warm beige master bedroom concept for a Chennai apartment',
    galleryImages: [
      { src: bedroomImg, alt: 'Master bedroom suite' },
      { src: wardrobeImg, alt: 'Walk-in wardrobe with backlit shelving' },
      { src: diningImg, alt: 'Warm timber dining area' },
    ],
    isConceptDemo: true,
  },
  {
    slug: 'tiruppur-heritage-villa',
    title: 'Heritage Pooja & Culinary Villa',
    location: 'Tiruppur, Tamil Nadu',
    category: 'Residential',
    spaceType: 'Duplex Family Residence',
    areaSqFt: '3,200 sq. ft. (Concept)',
    style: 'Modern South Indian Classic',
    summary:
      'A multi-generational home interior centered around a tranquil traditional pooja alcove, spacious island kitchen, and warm wood dining room.',
    scope: [
      'Traditional Pooja Room & Brass Accents',
      'Spacious Island Modular Kitchen',
      'Custom Dining & Crockery Display',
      '3D Interior Visualization',
    ],
    materials: ['Seasoned Teakwood', 'Traditional Cast Brass', 'Ivory Porcelain Tile', 'Warm LED Coves'],
    image: kitchenImg,
    imageAlt: 'Modular island kitchen concept for a Tiruppur family residence',
    galleryImages: [
      { src: kitchenImg, alt: 'Island modular kitchen' },
      { src: poojaImg, alt: 'Traditional brass pooja lighting' },
      { src: diningImg, alt: 'Family dining space' },
    ],
    isConceptDemo: true,
  },
  {
    slug: 'madurai-executive-studio',
    title: 'Executive Chamber & Boardroom',
    location: 'Madurai, Tamil Nadu',
    category: 'Commercial',
    spaceType: 'Corporate Leadership Suite',
    areaSqFt: '1,950 sq. ft. (Concept)',
    style: 'Architectural Timber & Stone',
    summary:
      'An authoritative yet welcoming executive office interior featuring fluted walnut-toned wall paneling, dark marble feature shelves, and sculptural ring lighting.',
    scope: [
      'Director Cabin & Bespoke Desk',
      'Acoustic Timber Ceiling & Lighting',
      'Display Library & Marble Feature Wall',
      'Client Seating Lounge',
    ],
    materials: ['Fluted Walnut Veneer', 'Veined Charcoal Marble', 'Cognac Leather', 'Warm LED Rings'],
    image: officeImg,
    imageAlt: 'Executive office interior concept with fluted wood and marble shelving',
    galleryImages: [
      { src: officeImg, alt: 'Executive desk and feature wall' },
      { src: commercialImg, alt: 'Client reception lounge' },
    ],
    isConceptDemo: true,
  },
  {
    slug: 'salem-hospitality-lounge',
    title: 'Royal Brass & Travertine Lounge',
    location: 'Salem, Tamil Nadu',
    category: 'Commercial',
    spaceType: 'Boutique Hospitality & Client Lounge',
    areaSqFt: '2,800 sq. ft. (Concept)',
    style: 'Contemporary Royal Hospitality',
    summary:
      'A high-ceiling commercial reception and lounge interior defined by laser-cut brass jaali screens, travertine wall cladding, and warm ivory armchairs.',
    scope: [
      'Double-Height Reception Styling',
      'Brass Jaali Partition Screens',
      'Custom Lounge Seating & Lighting',
      'Turnkey Commercial Execution',
    ],
    materials: ['Laser-Cut Brushed Brass', 'Travertine Stone', 'Ivory Bouclé Seating', 'Fluted Timber'],
    image: commercialImg,
    imageAlt: 'Luxury commercial lounge with brass jaali screen and ivory seating',
    galleryImages: [
      { src: commercialImg, alt: 'Main lounge seating and brass screen' },
      { src: officeImg, alt: 'Private consultation suite' },
    ],
    isConceptDemo: true,
  },
  {
    slug: 'trichy-bespoke-wardrobe-suite',
    title: 'Bespoke Dressing & Suite Interiors',
    location: 'Trichy, Tamil Nadu',
    category: 'Residential',
    spaceType: 'Master Suite & Dressing Wing',
    areaSqFt: '1,400 sq. ft. (Concept)',
    style: 'Tailored Contemporary',
    summary:
      'A dedicated dressing and bedroom wing featuring illuminated open-and-glass wardrobes, marble vanity mirror, and warm wood flooring.',
    scope: [
      'Walk-In Wardrobe Joinery',
      'Backlit Marble Vanity Counter',
      'Master Bedroom Wall Elevation',
      'Layered Ambient Lighting',
    ],
    materials: ['Warm Oak Laminate', 'Tinted Mirror', 'Statuario Marble Vanity', 'Concealed LED Strips'],
    image: wardrobeImg,
    imageAlt: 'Illuminated walk-in wardrobe and marble vanity concept in Trichy',
    galleryImages: [
      { src: wardrobeImg, alt: 'Walk-in wardrobe and island' },
      { src: bedroomImg, alt: 'Adjacent master bedroom' },
    ],
    isConceptDemo: true,
  },
];
