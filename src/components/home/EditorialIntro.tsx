import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    label: 'Bespoke Indian Sensibility',
    detail:
      'Designed for Tamil Nadu climates, family traditions, and contemporary urban living—from sacred pooja mandaps to airy living lounges.',
  },
  {
    label: 'Material & Craft Integrity',
    detail:
      'Curated Burma teakwood, Italian marble, brushed brass inlays, and moisture-resistant modular joinery built for enduring grace.',
  },
  {
    label: 'Turnkey Interior Precision',
    detail:
      'Dedicated interior design, 3D visualization, millwork detailing, and end-to-end site execution with transparent milestones.',
  },
];

/**
 * Editorial brand introduction band for the Homepage.
 */
export function EditorialIntro() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from('.intro-fade', {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        immediateRender: false,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 92%',
          once: true,
        },
      });
      ScrollTrigger.refresh();
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="border-t border-silver/50 bg-ivory py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 intro-fade">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-dark">
              Philosophy · Elegance in Every Detail
            </p>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-charcoal sm:text-4xl lg:text-5xl">
              Interiors That Honour Heritage While Embracing{' '}
              <span className="italic text-gold-dark">Contemporary Calm</span>.
            </h2>
          </div>

          <div className="lg:col-span-5 intro-fade space-y-5">
            <p className="text-sm leading-relaxed text-charcoal/80 sm:text-base">
              At ARADHANA INTERIOR, we focus exclusively on interior design, interior
              decoration, interior elevation design, and turnkey interior execution—never
              diluting our craft with exterior construction.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-b border-gold pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal transition-colors hover:text-gold-dark"
            >
              <span>Discover Our Studio</span>
              <ArrowRight className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.label}
              className="intro-fade border border-silver/60 bg-beige-soft/60 p-8 transition-colors duration-300 hover:border-gold"
            >
              <span className="font-serif text-2xl text-gold-dark">
                0{idx + 1}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-medium text-charcoal">
                {pillar.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
