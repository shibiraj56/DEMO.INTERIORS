import { Link } from 'react-router-dom';
import { PageHeader } from '../components/common/PageHeader';
import { CORE_SERVICES } from '../data/brand';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

export function ServicesPage() {
  useDocumentMeta({
    title: 'Interior Design Services | ARADHANA INTERIOR — Tamil Nadu',
    description:
      'Explore all 12 interior design services by ARADHANA INTERIOR: luxury residential interiors, modular kitchens, pooja rooms, false ceilings, offices, and 3D visualization.',
  });

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Comprehensive Interior Design & Turnkey Solutions"
        description="From bespoke modular kitchens and serene pooja rooms to executive offices and photorealistic 3D visualization across Tamil Nadu."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_SERVICES.map((service) => (
              <article
                key={service.id}
                className="flex flex-col justify-between border border-silver/60 bg-ivory p-8 transition-colors hover:border-gold"
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
                  <h2 className="mt-4 font-serif text-2xl font-medium text-charcoal">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-6 border-t border-silver/40 pt-4">
                  <Link
                    to="/contact"
                    className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-dark hover:text-charcoal"
                  >
                    Enquire for This Service →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
