import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ConsultationBanner } from '../components/common/ConsultationBanner';
import { PageHeader } from '../components/common/PageHeader';
import { CONCEPT_PROJECTS } from '../data/projects';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ProjectDetailPage() {
  const { slug } = useParams();
  const currentIndex = Math.max(
    0,
    CONCEPT_PROJECTS.findIndex((p) => p.slug === slug)
  );
  const project = CONCEPT_PROJECTS[currentIndex];
  const prevProject =
    CONCEPT_PROJECTS[(currentIndex - 1 + CONCEPT_PROJECTS.length) % CONCEPT_PROJECTS.length];
  const nextProject =
    CONCEPT_PROJECTS[(currentIndex + 1) % CONCEPT_PROJECTS.length];

  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const activeMedia = project.galleryImages[selectedImageIdx] ?? {
    src: project.image,
    alt: project.imageAlt,
  };

  useDocumentMeta({
    title: `${project.title} | ARADHANA INTERIOR Concept Portfolio`,
    description: project.summary,
    path: `/projects/${project.slug}`,
    noIndex: true,
  });

  return (
    <>
      <PageHeader
        eyebrow={`${project.category} Concept Demo · ${project.location}`}
        title={project.title}
        description={project.summary}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10 space-y-14">
          {/* Interactive Editorial Image Stage */}
          <div className="space-y-4">
            <div className="relative overflow-hidden border border-silver/60 bg-beige">
              <img
                src={activeMedia.src}
                alt={activeMedia.alt}
                className="aspect-[16/9] max-h-[620px] w-full object-cover transition-opacity duration-300"
              />
              <span className="absolute top-4 left-4 bg-ivory/95 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal">
                Concept Demo Presentation
              </span>
            </div>

            {project.galleryImages.length > 1 && (
              <div
                role="group"
                aria-label="Select concept view"
                className="grid grid-cols-3 gap-3 sm:max-w-lg"
              >
                {project.galleryImages.map((img, i) => {
                  const isActive = i === selectedImageIdx;
                  return (
                    <button
                      key={`${project.slug}-thumb-${i}`}
                      type="button"
                      onClick={() => setSelectedImageIdx(i)}
                      aria-label={`View ${img.alt}`}
                      aria-pressed={isActive}
                      className={`overflow-hidden border transition-all ${
                        isActive
                          ? 'border-gold ring-1 ring-gold'
                          : 'border-silver/60 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Editorial Specifications Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4 border border-silver/60 bg-beige-soft/50 p-7 space-y-4">
              <h2 className="font-serif text-2xl font-medium text-charcoal">
                Concept Brief
              </h2>
              <dl className="space-y-3.5 text-sm">
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
                Materials &amp; Finishes
              </h2>
              <p className="mt-2 text-xs text-charcoal/65">
                Curated tactile finishes specified for this concept study:
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2.5">
                {project.materials.map((mat, idx) => (
                  <div
                    key={mat}
                    className="flex items-center justify-between border border-silver/60 bg-beige-soft/45 px-3.5 py-2.5 text-xs font-medium text-charcoal"
                  >
                    <span>{mat}</span>
                    <span className="font-serif text-sm text-gold-dark">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Previous / Next Conceptual Project Navigation */}
          <nav
            aria-label="Conceptual project pagination"
            className="grid grid-cols-1 gap-4 border-y border-silver/60 py-6 sm:grid-cols-2"
          >
            <Link
              to={`/projects/${prevProject.slug}`}
              onClick={() => setSelectedImageIdx(0)}
              className="group flex items-center gap-4 border border-silver/50 bg-ivory p-5 transition-colors hover:border-gold"
            >
              <ArrowLeft className="h-4 w-4 shrink-0 text-gold-dark transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/60">
                  Previous Concept
                </span>
                <span className="mt-1 block font-serif text-xl font-medium text-charcoal group-hover:text-gold-dark">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            <Link
              to={`/projects/${nextProject.slug}`}
              onClick={() => setSelectedImageIdx(0)}
              className="group flex items-center justify-end gap-4 border border-silver/50 bg-ivory p-5 text-right transition-colors hover:border-gold"
            >
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/60">
                  Next Concept
                </span>
                <span className="mt-1 block font-serif text-xl font-medium text-charcoal group-hover:text-gold-dark">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-gold-dark transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal hover:text-gold-dark"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>All Concept Projects</span>
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
