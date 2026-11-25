import { ArrowUpRight, Check } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DETAILED_SERVICES } from '../../data/services';
import { SectionHeading } from '../common/SectionHeading';

const SIGNATURE_IDS = [
  'luxury-residential',
  'modular-kitchen',
  'pooja-room',
  'bedroom-wardrobe',
  'office-interiors',
  'turnkey-solutions',
];

/**
 * Interactive split editorial showcase of signature interior services.
 */
export function FeaturedServicesPreview() {
  const signatureServices = DETAILED_SERVICES.filter((s) =>
    SIGNATURE_IDS.includes(s.id)
  );
  const [activeId, setActiveId] = useState(signatureServices[0]?.id ?? '');
  const activeService =
    signatureServices.find((s) => s.id === activeId) ?? signatureServices[0];

  return (
    <section className="border-t border-silver/50 bg-beige-soft/55 py-20 sm:py-28">
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Signature Interior Disciplines"
          action={
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-charcoal px-6 py-3.5 text-xs font-medium uppercase tracking-[0.2em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
            >
              <span>View All 12 Services</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Interactive Numbered List */}
          <div
            role="tablist"
            aria-label="Signature interior services"
            className="lg:col-span-5 divide-y divide-silver/60 border-y border-silver/60"
          >
            {signatureServices.map((service) => {
              const isSelected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                  className={`group flex w-full items-center justify-between gap-4 py-5 px-3 text-left transition-colors ${
                    isSelected ? 'bg-ivory' : 'hover:bg-ivory/60'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-serif text-xl transition-colors ${
                        isSelected ? 'text-gold-dark font-semibold' : 'text-silver'
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <span
                        className={`block font-serif text-2xl transition-colors ${
                          isSelected ? 'text-charcoal font-medium' : 'text-charcoal/75'
                        }`}
                      >
                        {service.title}
                      </span>
                      <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 transition-all ${
                      isSelected
                        ? 'text-gold-dark translate-x-0 opacity-100'
                        : 'text-silver -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Active Visual & Scope Preview */}
          {activeService && (
            <div
              role="tabpanel"
              aria-label={activeService.title}
              className="lg:col-span-7 border border-silver/60 bg-ivory"
            >
              <div className="aspect-[16/10] overflow-hidden bg-beige">
                <img
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-500"
                />
              </div>
              <div className="p-7 sm:p-9">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
                    {activeService.number} · {activeService.category}
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-3xl font-medium text-charcoal">
                  {activeService.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">
                  {activeService.fullDescription}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-6 border-t border-silver/50 pt-5">
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {activeService.highlights.map((hl) => (
                      <li key={hl} className="flex items-center gap-2 text-xs text-charcoal/85">
                        <Check className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark hover:text-charcoal"
                  >
                    <span>Enquire</span>
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
