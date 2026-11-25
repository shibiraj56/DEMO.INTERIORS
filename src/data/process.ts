import type { ProcessStepItem, TestimonialItem } from '../types';

export const DESIGN_PROCESS_STEPS: ProcessStepItem[] = [
  {
    step: '01',
    title: 'Initial Consultation',
    subtitle: 'Understanding Lifestyle & Vision',
    description:
      'We begin with an in-depth conversation about your family or business needs, aesthetic preferences, Tamil Nadu city location, and target budget.',
    deliverables: ['Requirement brief', 'Scope alignment', 'Preliminary timeline'],
  },
  {
    step: '02',
    title: 'Site Assessment',
    subtitle: 'Precision Measurements & Natural Light Study',
    description:
      'Our interior team inspects the bare shell or existing space—recording exact dimensions, plumbing/electrical points, and daylight orientation.',
    deliverables: ['Laser site measurements', 'Service point mapping', 'Condition report'],
  },
  {
    step: '03',
    title: 'Space Planning',
    subtitle: 'Ergonomic & Vastu-Aligned Layouts',
    description:
      'We craft optimized 2D furniture and circulation layouts that maximize storage, comfort, and natural ventilation across every room.',
    deliverables: ['2D furniture layouts', 'Kitchen & wardrobe zoning', 'Traffic flow optimization'],
  },
  {
    step: '04',
    title: 'Design Concept',
    subtitle: 'Mood Boards & Material Direction',
    description:
      'Curated colour palettes, wood veneers, stone samples, fabrics, and brass hardware are composed into a cohesive interior direction.',
    deliverables: ['Room-by-room mood boards', 'Colour & texture palette', 'Fixture direction'],
  },
  {
    step: '05',
    title: '3D Visualization',
    subtitle: 'Photorealistic Spatial Previews',
    description:
      'Experience your future living room, modular kitchen, or pooja room in high-definition 3D renders with realistic day and evening lighting.',
    deliverables: ['Photorealistic 3D views', 'False ceiling & lighting renders', 'Elevation previews'],
  },
  {
    step: '06',
    title: 'Material Selection & Execution',
    subtitle: 'Craftsmanship & Site Supervision',
    description:
      'Approved designs move into factory-precision modular fabrication, on-site millwork, electrical lighting, and supervised installation.',
    deliverables: ['Material sign-off', 'Dedicated site supervision', 'Quality checklists'],
  },
  {
    step: '07',
    title: 'Final Handover',
    subtitle: 'Styling, Walkthrough & Care Guide',
    description:
      'Every hinge, light scene, and surface is inspected, deep-cleaned, and handed over with a comprehensive care guide for lasting elegance.',
    deliverables: ['Joint quality walkthrough', 'As-built interior drawings', 'Surface care manual'],
  },
];

export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'demo-test-1',
    personaLabel: 'Conceptual Homeowner Persona · Demo Review',
    city: 'Coimbatore, Tamil Nadu',
    projectType: 'Luxury Residential & Pooja Room (Demo)',
    quote:
      '“Our goal was a calm, ivory-and-teakwood home with a sacred pooja room at its heart. Every 3D render matched the final finish down to the brass inlay.”',
    isDemo: true,
  },
  {
    id: 'demo-test-2',
    personaLabel: 'Conceptual Villa Client Persona · Demo Review',
    city: 'Chennai, Tamil Nadu',
    projectType: 'Modular Kitchen & Master Suite (Demo)',
    quote:
      '“The modular kitchen handles heavy everyday South Indian cooking effortlessly while looking like an editorial showcase. Clean lines and zero clutter.”',
    isDemo: true,
  },
  {
    id: 'demo-test-3',
    personaLabel: 'Conceptual Commercial Client Persona · Demo Review',
    city: 'Madurai, Tamil Nadu',
    projectType: 'Executive Office Interiors (Demo)',
    quote:
      '“From acoustic timber paneling to warm ring lighting, the executive suite transformed how clients experience our studio from the moment they step in.”',
    isDemo: true,
  },
];
