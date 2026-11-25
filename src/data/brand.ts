import type { ServiceSummary } from '../types';

export const BRAND = {
  name: 'ARADHANA INTERIOR',
  tagline: 'ELEGANCE IN EVERY DETAIL',
  region: 'Tamil Nadu, India',
  positioning:
    'Bespoke residential & commercial interior design studio crafting timeless spaces across Tamil Nadu.',
  demoNotice:
    'Concept Demonstration Website — All visuals and testimonials are conceptual demo presentations.',
  contactPlaceholders: {
    phone: '+91 [Studio Phone Placeholder]',
    whatsapp: '+91 [WhatsApp Placeholder]',
    email: 'studio@[aradhanainterior-placeholder].in',
    address: '[Studio Address Placeholder], Tamil Nadu, India',
    hours: 'Mon – Sat · 10:00 AM – 7:00 PM IST',
  },
  serviceCities: [
    'Chennai',
    'Coimbatore',
    'Tiruppur',
    'Erode',
    'Salem',
    'Madurai',
    'Trichy',
    'Tirunelveli',
    'Vellore',
    'Thanjavur',
    'Hosur',
  ],
} as const;

export const CORE_SERVICES: ServiceSummary[] = [
  {
    id: 'luxury-residential',
    number: '01',
    title: 'Luxury Residential Interiors',
    category: 'Residential',
    shortDescription:
      'Complete, bespoke home interiors tailored to Tamil Nadu lifestyles—blending warm natural timber, stone, and refined brass detailing.',
  },
  {
    id: 'living-room',
    number: '02',
    title: 'Living Room Interiors',
    category: 'Residential',
    shortDescription:
      'Inviting formal and family living spaces with custom wall paneling, curated seating, and layered ambient lighting.',
  },
  {
    id: 'modular-kitchen',
    number: '03',
    title: 'Modular Kitchen Design',
    category: 'Residential',
    shortDescription:
      'Ergonomic, high-durability modular kitchens engineered for Indian cooking with premium hardware and sleek stone counters.',
  },
  {
    id: 'bedroom-wardrobe',
    number: '04',
    title: 'Bedroom & Wardrobe Interiors',
    category: 'Residential',
    shortDescription:
      'Serene master suites and walk-in wardrobes featuring custom upholstered headboards, fluted glass, and smart storage.',
  },
  {
    id: 'pooja-room',
    number: '05',
    title: 'Pooja Room Interiors',
    category: 'Residential',
    shortDescription:
      'Sacred, tranquil pooja mandaps crafted in Burma teakwood, backlit onyx, and traditional South Indian brass accents.',
  },
  {
    id: 'false-ceiling-lighting',
    number: '06',
    title: 'False Ceiling & Lighting',
    category: 'Specialized',
    shortDescription:
      'Sculpted ceiling geometry with concealed cove illumination, recessed architectural spots, and statement chandeliers.',
  },
  {
    id: 'custom-furniture',
    number: '07',
    title: 'Custom Furniture Design',
    category: 'Specialized',
    shortDescription:
      'Made-to-measure dining tables, consoles, study desks, and upholstered pieces proportioned precisely for your interiors.',
  },
  {
    id: 'office-interiors',
    number: '08',
    title: 'Office Interiors',
    category: 'Commercial',
    shortDescription:
      'Executive suites, boardrooms, and collaborative workspaces designed for acoustic comfort and brand distinction.',
  },
  {
    id: 'commercial-interiors',
    number: '09',
    title: 'Commercial Interiors',
    category: 'Commercial',
    shortDescription:
      'Refined retail boutiques, hospitality lounges, and showrooms crafted to elevate guest perception and flow.',
  },
  {
    id: 'turnkey-solutions',
    number: '10',
    title: 'Turnkey Interior Solutions',
    category: 'Specialized',
    shortDescription:
      'End-to-end interior execution from concept and material procurement to site supervision and final handover.',
  },
  {
    id: 'interior-elevation',
    number: '11',
    title: 'Interior Elevation Design',
    category: 'Specialized',
    shortDescription:
      'Detailed interior wall elevations, wainscoting, TV unit compositions, and foyer feature walls with millwork precision.',
  },
  {
    id: '3d-visualization',
    number: '12',
    title: '3D Interior Visualization',
    category: 'Specialized',
    shortDescription:
      'Photorealistic 3D interior renders and material mood boards so you experience every finish before execution begins.',
  },
];
