import { ArrowUpRight, Check } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { ConsultationBanner } from '../components/common/ConsultationBanner';
import { PageHeader } from '../components/common/PageHeader';
import { DETAILED_SERVICES } from '../data/services';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const SERVICE_CATEGORIES = ['All', 'Residential', 'Commercial', 'Specialized'] as const;
type ServiceFilter = (typeof SERVICE_CATEGORIES)[number];

export function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const activeCategory: ServiceFilter = SERVICE_CATEGORIES.includes(
    categoryParam as ServiceFilter
  )
    ? (categoryParam as ServiceFilter)
    : 'All';

  const setActiveCategory = (category: ServiceFilter) => {
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

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
        <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
          {/* Category Filter Bar */}
          <div className="flex flex-col justify-between gap-4 border-b border-silver/50 pb-6 sm:flex-row sm:items-center">
            <div
              role="tablist"
              aria-label="Filter services by category"
              className="flex flex-wrap items-center gap-2.5"
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

            <p className="text-xs uppercase tracking-[0.16em] text-charcoal/65">
              Showing {filteredServices.length}{' '}
              {filteredServices.length === 1 ? 'Discipline' : 'Disciplines'}
            </p>
          </div>

          {/* Editorial 2-Column Architectural Service Spreads */}
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-2">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col justify-between border-b border-silver/60 pb-10"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden border border-silver/60 bg-beige">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-3.5 left-3.5 bg-ivory/94 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-dark backdrop-blur-sm">
                      {service.number} · {service.category}
                    </span>
                  </div>

                  <div className="mt-6">
                    <h2 className="font-serif text-3xl font-medium text-charcoal transition-colors group-hover:text-gold-dark">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">
                      {service.fullDescription}
                    </p>

                    <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 border-t border-silver/40 pt-4">
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

                <div className="mt-6 pt-2">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 border-b border-gold pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-gold-dark"
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
