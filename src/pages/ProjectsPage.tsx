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
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
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

          {/* Project Grid */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group flex flex-col justify-between border border-silver/60 bg-ivory transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_14px_34px_rgba(36,36,36,0.06)]"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-ivory/92 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal backdrop-blur-sm">
                      Concept Demo
                    </span>
                  </div>

                  <div className="p-6">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                      {project.category} · {project.location}
                    </span>
                    <h2 className="mt-2 font-serif text-2xl font-medium text-charcoal transition-colors group-hover:text-gold-dark">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-xs font-medium text-charcoal/65">
                      {project.spaceType} · {project.areaSqFt}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-silver/40 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/80 group-hover:text-gold-dark">
                  <span>View Concept Details</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
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
