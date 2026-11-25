import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConsultationBanner } from '../components/common/ConsultationBanner';
import { PageHeader } from '../components/common/PageHeader';
import { CONCEPT_PROJECTS } from '../data/projects';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const PROJECT_FILTERS = ['All', 'Residential', 'Commercial'] as const;
type ProjectFilter = (typeof PROJECT_FILTERS)[number];

export function ProjectsPage() {
  const [filter, setFilter] = useState<ProjectFilter>('All');

  useDocumentMeta({
    title: 'Portfolio & Concept Projects | ARADHANA INTERIOR',
    description:
      'Conceptual residential and commercial interior design portfolio tailored for Tamil Nadu homes and businesses.',
    path: '/projects',
  });

  const visibleProjects =
    filter === 'All'
      ? CONCEPT_PROJECTS
      : CONCEPT_PROJECTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Concept Portfolio"
        title="Curated Residential & Commercial Interiors"
        description="Conceptual demo interior showcases crafted for Tamil Nadu homes, executive offices, and hospitality lounges. All entries are conceptual studio presentations."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
          {/* Interactive Category Filter */}
          <div className="flex flex-col justify-between gap-4 border-b border-silver/50 pb-6 sm:flex-row sm:items-center">
            <div
              role="tablist"
              aria-label="Filter projects by category"
              className="flex flex-wrap gap-2.5"
            >
              {PROJECT_FILTERS.map((cat) => {
                const isSelected = filter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setFilter(cat)}
                    className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                      isSelected
                        ? 'bg-charcoal text-ivory'
                        : 'border border-silver/70 bg-ivory text-charcoal/80 hover:border-gold hover:text-charcoal'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            <p className="text-xs uppercase tracking-[0.16em] text-charcoal/65">
              Showing {visibleProjects.length} Concept{' '}
              {visibleProjects.length === 1 ? 'Study' : 'Studies'}
            </p>
          </div>

          {/* Large Editorial 2-Column Portfolio Plates */}
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group flex flex-col border-b border-silver/60 pb-8"
              >
                <div className="relative aspect-[16/10] overflow-hidden border border-silver/60 bg-beige">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-ivory/94 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal backdrop-blur-sm">
                    Concept Demo
                  </span>
                </div>

                <div className="mt-6 flex flex-1 flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                      <span>
                        {project.category} · {project.location}
                      </span>
                      <span className="text-charcoal/60">{project.areaSqFt}</span>
                    </div>

                    <h2 className="mt-2.5 font-serif text-3xl font-medium text-charcoal transition-colors group-hover:text-gold-dark">
                      {project.title}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-charcoal/65">
                      {project.spaceType}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/85 group-hover:text-gold-dark">
                    <span>Explore Concept Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-gold-dark transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner />
    </>
  );
}
