import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CORE_SERVICES } from '../../data/brand';

/**
 * Preview grid of featured interior design services on the Homepage.
 */
export function FeaturedServicesPreview() {
  const featured = CORE_SERVICES.slice(0, 6);

  return (
    <section className="border-t border-silver/50 bg-beige-soft/50 py-20 sm:py-28">
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-dark">
              Our Expertise
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl lg:text-5xl">
              Curated Interior Services
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 border border-charcoal px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory self-start sm:self-auto"
          >
            <span>View All 12 Services</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between border border-silver/60 bg-ivory p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_12px_32px_rgba(36,36,36,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl text-gold-dark">
                    {service.number}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/55">
                    {service.category}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-2xl font-medium text-charcoal group-hover:text-gold-dark transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                  {service.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-silver/40">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal/80 transition-colors group-hover:text-gold-dark"
                >
                  <span>Explore Scope</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
