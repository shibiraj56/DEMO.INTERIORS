import { ArrowUpRight, Check } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ConsultationBanner } from '../components/common/ConsultationBanner';
import { PageHeader } from '../components/common/PageHeader';
import { DETAILED_SERVICES } from '../data/services';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const SERVICE_CATEGORIES = ['All', 'Residential', 'Commercial', 'Specialized'] as const;
type ServiceFilter = (typeof SERVICE_CATEGORIES)[number];

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<ServiceFilter>('All');

  useDocumentMeta({
    title: 'Interior Design Services | ARADHANA INTERIOR — Tamil Nadu',
    description:
      'Explore all 12 interior design services by ARADHANA INTERIOR: luxury residential interiors, modular kitchens, pooja rooms, false ceilings, offices, and 3D visualization.',
    path: '/services',
  });

  const filteredServices =
    activeCategory === 'All'
      ? DETAILED_SERVICES
      : DETAILED_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Comprehensive Interior Design & Turnkey Solutions"
        description="Exclusively focused on interior design, interior elevation, modular joinery, and turnkey interior execution across Tamil Nadu."
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
          {/* Category Filter Bar */}
          <div
            role="tablist"
            aria-label="Filter services by category"
            className="flex flex-wrap items-center gap-2.5 border-b border-silver/50 pb-6"
          >
            {SERVICE_CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                    isSelected
                      ? 'bg-charcoal text-ivory'
                      : 'border border-silver/70 bg-ivory text-charcoal/80 hover:border-gold hover:text-charcoal'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Rich Service Cards */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col justify-between border border-silver/60 bg-ivory transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_14px_34px_rgba(36,36,36,0.06)]"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-beige">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-ivory/92 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-dark backdrop-blur-sm">
                      {service.number} · {service.category}
                    </span>
                  </div>

                  <div className="p-7">
                    <h2 className="font-serif text-2xl font-medium text-charcoal transition-colors group-hover:text-gold-dark">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                      {service.fullDescription}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-silver/40 pt-4">
                      {service.highlights.map((hl) => (
                        <li
                          key={hl}
                          className="flex items-center gap-2 text-xs text-charcoal/85"
                        >
                          <Check className="h-3.5 w-3.5 shrink-0 text-gold-dark" aria-hidden="true" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-silver/40 px-7 py-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-gold-dark"
                  >
                    <span>Book Service Consultation</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConsultationBanner
        eyebrow="Custom Interior Scope"
        title="Need a Tailored Combination of Services?"
        description="Whether you are furnishing a new apartment in Chennai or executing a turnkey villa in Coimbatore, we craft custom scope packages."
      />
    </>
  );
}
