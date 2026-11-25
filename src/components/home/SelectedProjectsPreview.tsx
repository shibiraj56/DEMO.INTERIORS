import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONCEPT_PROJECTS } from '../../data/projects';

/**
 * Homepage showcase of selected conceptual Tamil Nadu interior projects.
 */
export function SelectedProjectsPreview() {
  const featured = CONCEPT_PROJECTS.slice(0, 3);

  return (
    <section
      aria-labelledby="selected-projects-heading"
      className="border-t border-silver/50 bg-ivory py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-dark">
              Concept Portfolio
            </p>
            <h2
              id="selected-projects-heading"
              className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl lg:text-5xl"
            >
              Selected Interior Concepts
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-charcoal/60">
              Conceptual demo portfolio tailored for Tamil Nadu residences &amp; workspaces
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 border border-charcoal px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory self-start sm:self-auto"
          >
            <span>Explore Portfolio</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group flex flex-col border border-silver/60 bg-ivory transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_14px_34px_rgba(36,36,36,0.06)]"
            >
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

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                    {project.category} · {project.location}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-charcoal transition-colors group-hover:text-gold-dark">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/75 line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-silver/40 pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-charcoal/80 group-hover:text-gold-dark">
                  <span>View Concept Study</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
