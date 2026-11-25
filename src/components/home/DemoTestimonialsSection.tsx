import { Quote } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../../data/process';
import { SectionHeading } from '../common/SectionHeading';

/**
 * Editorial pull-quote testimonials clearly labeled as fictional demo content.
 */
export function DemoTestimonialsSection() {
  return (
    <section
      aria-labelledby="demo-testimonials-heading"
      className="border-t border-silver/50 bg-ivory py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Client Perspectives (Demo Content)"
          title={<span id="demo-testimonials-heading">Conceptual Client Stories</span>}
          action={
            <span className="inline-block border border-gold/55 bg-beige-soft px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-charcoal/80">
              Fictional Demo Testimonials
            </span>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
          {DEMO_TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between border-t-2 border-gold/70 pt-6"
            >
              <div>
                <div className="flex items-center justify-between">
                  <Quote className="h-5 w-5 text-gold" aria-hidden="true" />
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-charcoal/55">
                    Demo Content
                  </span>
                </div>
                <blockquote className="mt-5 font-serif text-2xl italic leading-relaxed text-charcoal">
                  {item.quote}
                </blockquote>
              </div>

              <div className="mt-8 border-t border-silver/40 pt-4">
                <p className="text-xs font-semibold text-charcoal">
                  {item.personaLabel}
                </p>
                <p className="mt-1 text-[11px] text-charcoal/68">
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
