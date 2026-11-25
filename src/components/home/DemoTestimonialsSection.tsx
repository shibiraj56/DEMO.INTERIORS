import { Quote } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../../data/process';

/**
 * Conceptual demo testimonials section clearly marked as fictional demo content.
 */
export function DemoTestimonialsSection() {
  return (
    <section
      aria-labelledby="demo-testimonials-heading"
      className="border-t border-silver/50 bg-ivory py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-dark">
              Client Perspectives (Demo Content)
            </p>
            <h2
              id="demo-testimonials-heading"
              className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl lg:text-5xl"
            >
              Conceptual Client Stories
            </h2>
          </div>

          <span className="inline-block self-start border border-gold/50 bg-beige-soft px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-charcoal/75">
            Fictional Demo Testimonials
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {DEMO_TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between border border-silver/60 bg-beige-soft/45 p-8"
            >
              <div>
                <div className="flex items-center justify-between">
                  <Quote className="h-6 w-6 text-gold" aria-hidden="true" />
                  <span className="border border-silver/70 bg-ivory px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-charcoal/65">
                    Demo Content
                  </span>
                </div>
                <blockquote className="mt-5 font-serif text-xl italic leading-relaxed text-charcoal">
                  {item.quote}
                </blockquote>
              </div>

              <div className="mt-8 border-t border-silver/50 pt-4">
                <p className="text-xs font-semibold text-charcoal">
                  {item.personaLabel}
                </p>
                <p className="mt-1 text-[11px] text-charcoal/70">
                  {item.projectType} · {item.city}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
