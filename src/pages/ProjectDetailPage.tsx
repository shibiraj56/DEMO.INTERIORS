import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ConsultationBanner } from '../components/common/ConsultationBanner';
import { PageHeader } from '../components/common/PageHeader';
import { CONCEPT_PROJECTS } from '../data/projects';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project =
    CONCEPT_PROJECTS.find((p) => p.slug === slug) ?? CONCEPT_PROJECTS[0];

  useDocumentMeta({
    title: `${project.title} | ARADHANA INTERIOR Concept Portfolio`,
    description: project.summary,
  });

  return (
    <>
      <PageHeader
        eyebrow={`${project.category} Concept Demo · ${project.location}`}
        title={project.title}
        description={project.summary}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Primary Visual */}
          <div className="relative overflow-hidden border border-silver/60 bg-beige">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="w-full max-h-[600px] object-cover"
            />
            <span className="absolute top-4 left-4 bg-ivory/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal">
              Conceptual Demo Presentation
            </span>
          </div>

          {/* Specifications Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4 border border-silver/60 bg-beige-soft/50 p-7 space-y-4">
              <h2 className="font-serif text-2xl font-medium text-charcoal">
                Concept Brief
              </h2>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    Location Context
                  </dt>
                  <dd className="mt-0.5 text-charcoal">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    Space Typology
                  </dt>
                  <dd className="mt-0.5 text-charcoal">{project.spaceType}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    Estimated Scale
                  </dt>
                  <dd className="mt-0.5 text-charcoal">{project.areaSqFt}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    Design Direction
                  </dt>
                  <dd className="mt-0.5 text-charcoal">{project.style}</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-4 border border-silver/60 bg-ivory p-7">
              <h2 className="font-serif text-2xl font-medium text-charcoal">
                Interior Scope
              </h2>
              <ul className="mt-4 space-y-3">
                {project.scope.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4 border border-silver/60 bg-ivory p-7">
              <h2 className="font-serif text-2xl font-medium text-charcoal">
                Material Palette
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.materials.map((mat) => (
                  <span
                    key={mat}
                    className="border border-silver/70 bg-beige-soft/60 px-3 py-1.5 text-xs font-medium text-charcoal"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Multi-View Concept Gallery */}
          <div>
            <h2 className="font-serif text-2xl font-medium text-charcoal sm:text-3xl">
              Additional Interior Views
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {project.galleryImages.map((img, i) => (
                <div key={i} className="overflow-hidden border border-silver/60 bg-beige">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-silver/50 pt-6">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal hover:text-gold-dark"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Back to Portfolio</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-charcoal px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-gold hover:text-charcoal"
            >
              <span>Request Similar Interior Design</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
