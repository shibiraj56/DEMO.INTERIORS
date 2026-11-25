import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONCEPT_PROJECTS } from '../../data/projects';
import { SectionHeading } from '../common/SectionHeading';

/**
 * Asymmetrical magazine-style portfolio showcase on the Homepage.
 */
export function SelectedProjectsPreview() {
  const [leadProject, ...secondaryProjects] = CONCEPT_PROJECTS.slice(0, 3);

  return (
    <section
      aria-labelledby="selected-projects-heading"
      className="border-t border-silver/50 bg-ivory py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Concept Portfolio"
          title={
            <span id="selected-projects-heading">Selected Interior Concepts</span>
          }
          description="Conceptual demo portfolio tailored for Tamil Nadu residences and executive spaces."
          action={
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-charcoal px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
            >
              <span>Explore Portfolio</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Featured Large Editorial Project */}
          {leadProject && (
            <Link
              to={`/projects/${leadProject.slug}`}
              className="group lg:col-span-7 flex flex-col border border-silver/60 bg-ivory transition-colors hover:border-gold"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                <img
                  src={leadProject.image}
                  alt={leadProject.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-ivory/94 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal">
                  Concept Demo
                </span>
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
                  {leadProject.category} · {leadProject.location} · {leadProject.areaSqFt}
                </p>
                <h3 className="mt-2 font-serif text-3xl font-medium text-charcoal transition-colors group-hover:text-gold-dark">
                  {leadProject.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/78">
                  {leadProject.summary}
                </p>
              </div>
            </Link>
          )}

          {/* Stacked Secondary Projects */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            {secondaryProjects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group flex flex-1 flex-col sm:flex-row lg:flex-col xl:flex-row border border-silver/60 bg-ivory transition-colors hover:border-gold"
              >
                <div className="relative sm:w-48 lg:w-full xl:w-48 shrink-0 overflow-hidden bg-beige">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="aspect-[16/10] sm:h-full lg:aspect-[16/10] xl:h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-ivory/94 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-charcoal">
                    Concept Demo
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                      {project.category} · {project.location}
                    </p>
                    <h3 className="mt-1.5 font-serif text-2xl font-medium text-charcoal transition-colors group-hover:text-gold-dark">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-charcoal/75 line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/80 group-hover:text-gold-dark">
                    <span>View Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
