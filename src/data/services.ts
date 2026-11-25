import bedroomImg from '../assets/images/bedroom.jpg';
import commercialImg from '../assets/images/commercial.jpg';
import diningImg from '../assets/images/dining.jpg';
import heroLivingImg from '../assets/images/hero-living.jpg';
import kitchenImg from '../assets/images/kitchen.jpg';
import officeImg from '../assets/images/office.jpg';
import poojaImg from '../assets/images/pooja.jpg';
import wardrobeImg from '../assets/images/wardrobe.jpg';
import type { ServiceDetail } from '../types';

export const DETAILED_SERVICES: ServiceDetail[] = [
  {
    id: 'luxury-residential',
    number: '01',
    title: 'Luxury Residential Interiors',
    category: 'Residential',
    shortDescription:
      'Complete, bespoke home interiors tailored to Tamil Nadu lifestyles—blending warm natural timber, stone, and refined brass detailing.',
    fullDescription:
      'End-to-end interior design for independent villas, bungalows, and luxury apartments across Tamil Nadu. Every room is composed for natural ventilation, family warmth, and timeless material harmony.',
    highlights: ['Full-home interior concepts', 'Bespoke millwork & finishes', 'Vastu-aligned spatial flow'],
    image: heroLivingImg,
    imageAlt: 'Luxury contemporary Tamil Nadu residential living room with fluted teakwood and marble',
  },
  {
    id: 'living-room',
    number: '02',
    title: 'Living Room Interiors',
    category: 'Residential',
    shortDescription:
      'Inviting formal and family living spaces with custom wall paneling, curated seating, and layered ambient lighting.',
    fullDescription:
      'Designed as the gracious heart of your home—balancing conversational seating, sculptural chandeliers, fluted teakwood feature walls, and soft ivory drapes.',
    highlights: ['Fluted wood & marble TV walls', 'Layered cove & accent lighting', 'Custom upholstery selection'],
    image: heroLivingImg,
    imageAlt: 'Formal Indian living room with warm beige sectional sofa and brass chandelier',
  },
  {
    id: 'modular-kitchen',
    number: '03',
    title: 'Modular Kitchen Design',
    category: 'Residential',
    shortDescription:
      'Ergonomic, high-durability modular kitchens engineered for Indian cooking with premium hardware and sleek stone counters.',
    fullDescription:
      'Built with BWP-grade marine ply, soft-close European hardware, tall pantry units, and easy-to-clean quartz or granite counters tailored for heavy daily Indian culinary routines.',
    highlights: ['Island, L-shaped & parallel layouts', 'Moisture-resistant carcasses', 'Concealed chimney & appliance zoning'],
    image: kitchenImg,
    imageAlt: 'Bespoke teak-toned modular kitchen with central island and stone countertop',
  },
  {
    id: 'bedroom-wardrobe',
    number: '04',
    title: 'Bedroom & Wardrobe Interiors',
    category: 'Residential',
    shortDescription:
      'Serene master suites and walk-in wardrobes featuring custom upholstered headboards, fluted glass, and smart storage.',
    fullDescription:
      'Restful bedroom sanctuaries paired with floor-to-ceiling wardrobes, illuminated dressing niches, and soft acoustic textures for deep relaxation.',
    highlights: ['Upholstered & paneled headboards', 'Walk-in & sliding wardrobes', 'Backlit vanity & dressing zones'],
    image: bedroomImg,
    imageAlt: 'Contemporary luxury master bedroom with tufted beige headboard and draped windows',
  },
  {
    id: 'pooja-room',
    number: '05',
    title: 'Pooja Room Interiors',
    category: 'Residential',
    shortDescription:
      'Sacred, tranquil pooja mandaps crafted in Burma teakwood, backlit onyx, and traditional South Indian brass accents.',
    fullDescription:
      'Reverent prayer spaces honoring South Indian traditions—featuring carved teakwood jaali doors, brass bell detailing, marble plinths, and warm recessed lighting.',
    highlights: ['Carved teakwood mandap framing', 'Brass kuthu vilakku & bell accents', 'Concealed prayer storage drawers'],
    image: poojaImg,
    imageAlt: 'Traditional South Indian brass kuthu vilakku lamp and warm glowing diyas for pooja room interiors',
  },
  {
    id: 'false-ceiling-lighting',
    number: '06',
    title: 'False Ceiling & Lighting',
    category: 'Specialized',
    shortDescription:
      'Sculpted ceiling geometry with concealed cove illumination, recessed architectural spots, and statement chandeliers.',
    fullDescription:
      'Precision gypsum and timber-ribbed ceiling designs engineered to conceal HVAC and wiring while casting warm, glare-free ambient light across every zone.',
    highlights: ['Multi-layered cove illumination', 'Warm-dimmable scene controls', 'Timber & brass ceiling inlays'],
    image: officeImg,
    imageAlt: 'Sculpted false ceiling with circular warm LED ring lighting and slatted wood accents',
  },
  {
    id: 'custom-furniture',
    number: '07',
    title: 'Custom Furniture Design',
    category: 'Specialized',
    shortDescription:
      'Made-to-measure dining tables, consoles, study desks, and upholstered pieces proportioned precisely for your interiors.',
    fullDescription:
      'Handcrafted furniture designed in-house to match your room proportions, wood veneers, and stone finishes—ensuring cohesive visual rhythm.',
    highlights: ['Solid teak & veneer dining sets', 'Bespoke foyers & console units', 'Tailored fabric & leather upholstery'],
    image: diningImg,
    imageAlt: 'Custom solid wood dining table and chairs with warm pendant illumination',
  },
  {
    id: 'office-interiors',
    number: '08',
    title: 'Office Interiors',
    category: 'Commercial',
    shortDescription:
      'Executive suites, boardrooms, and collaborative workspaces designed for acoustic comfort and brand distinction.',
    fullDescription:
      'Refined corporate interiors for Tamil Nadu businesses—combining executive timber desks, acoustic wall paneling, ergonomic workstations, and welcoming client reception zones.',
    highlights: ['Executive cabins & boardrooms', 'Acoustic treatment & lighting', 'Integrated cable & AV planning'],
    image: officeImg,
    imageAlt: 'Executive office interior with fluted wood walls, marble backdrop, and contemporary desk',
  },
  {
    id: 'commercial-interiors',
    number: '09',
    title: 'Commercial Interiors',
    category: 'Commercial',
    shortDescription:
      'Refined retail boutiques, hospitality lounges, and showrooms crafted to elevate guest perception and flow.',
    fullDescription:
      'High-impact commercial spaces featuring brass lattice screens, travertine stone cladding, and curated display lighting designed for memorable visitor experiences.',
    highlights: ['Boutique & showroom interiors', 'Hospitality & client lounges', 'Durable high-traffic finishes'],
    image: commercialImg,
    imageAlt: 'Luxury commercial hospitality lounge with brass lattice screen and ivory armchairs',
  },
  {
    id: 'turnkey-solutions',
    number: '10',
    title: 'Turnkey Interior Solutions',
    category: 'Specialized',
    shortDescription:
      'End-to-end interior execution from concept and material procurement to site supervision and final handover.',
    fullDescription:
      'Single-point accountability covering factory-finished modular joinery, on-site civil-interior finishes, electrical lighting, soft furnishings, and deep-cleaned handover.',
    highlights: ['Dedicated site supervision', 'Curated vendor & material sourcing', 'Milestone-tracked delivery'],
    image: wardrobeImg,
    imageAlt: 'Turnkey finished walk-in wardrobe and dressing suite with integrated LED lighting',
  },
  {
    id: 'interior-elevation',
    number: '11',
    title: 'Interior Elevation Design',
    category: 'Specialized',
    shortDescription:
      'Detailed interior wall elevations, wainscoting, TV unit compositions, and foyer feature walls with millwork precision.',
    fullDescription:
      'Architectural interior wall compositions using fluted wood, brass trims, textured lime plaster, and marble cladding to give every wall depth and character.',
    highlights: ['Wainscoting & wall molding', 'Foyer & feature wall elevations', 'Millwork shop drawings'],
    image: bedroomImg,
    imageAlt: 'Detailed interior wall elevation with classic molding and warm neutral tones',
  },
  {
    id: '3d-visualization',
    number: '12',
    title: '3D Interior Visualization',
    category: 'Specialized',
    shortDescription:
      'Photorealistic 3D interior renders and material mood boards so you experience every finish before execution begins.',
    fullDescription:
      'High-definition 3D perspectives, lighting simulations, and physical material boards that eliminate guesswork and align every stakeholder before site work starts.',
    highlights: ['Photorealistic room renders', 'Day & evening lighting studies', 'Material & finish validation'],
    image: wardrobeImg,
    imageAlt: '3D-grade interior visualization of a bespoke illuminated dressing and wardrobe space',
  },
];
