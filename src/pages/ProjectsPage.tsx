import { Link } from 'react-router-dom';
import heroLivingImg from '../assets/images/hero-living.jpg';
import { PageHeader } from '../components/common/PageHeader';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const CONCEPT_PORTFOLIO = [
  {
    slug: 'coimbatore-ivory-residence',
    title: 'Ivory & Teakwood Residence (Concept Demo)',
    location: 'Coimbatore, Tamil Nadu',
    category: 'Residential',
  },
  {
    slug: 'chennai-coastal-penthouse',
    title: 'Contemporary Coastal Living Suite (Concept Demo)',
    location: 'Chennai, Tamil Nadu',
    category: 'Residential',
  },
  {
    slug: 'madurai-executive-lounge',
    title: 'Executive Studio & Client Lounge (Concept Demo)',
    location: 'Madurai, Tamil Nadu',
    category: 'Commercial',
  },
];

export function ProjectsPage() {
  useDocumentMeta({
    title: 'Portfolio & Concept Projects | ARADHANA INTERIOR',
    description:
      'Conceptual residential and commercial interior design portfolio tailored for Tamil Nadu homes and businesses.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Concept Portfolio"
        title="Curated Residential & Commercial Interiors"
        description="Conceptual interior design showcases crafted for Tamil Nadu residences and commercial spaces. Full interactive filtering and case studies will expand in Milestone 2."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {CONCEPT_PORTFOLIO.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group border border-silver/60 bg-ivory transition-all hover:border-gold"
              >
                <div className="aspect-[16/10] overflow-hidden bg-beige">
                  <img
                    src={heroLivingImg}
                    alt={`${project.title} — ${project.location}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    {project.category} · {project.location}
                  </span>
                  <h2 className="mt-2 font-serif text-2xl font-medium text-charcoal group-hover:text-gold-dark">
                    {project.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
