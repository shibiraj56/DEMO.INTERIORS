import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import kitchenImg from '../../assets/images/kitchen.jpg';
import poojaImg from '../../assets/images/pooja.jpg';
import { SectionHeading } from '../common/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    number: '01',
    label: 'Bespoke Indian Sensibility',
    detail:
      'Designed for Tamil Nadu climates, family traditions, and contemporary urban living—from sacred pooja mandaps to airy living lounges.',
  },
  {
    number: '02',
    label: 'Material & Craft Integrity',
    detail:
      'Curated Burma teakwood, Italian marble, brushed brass inlays, and moisture-resistant modular joinery built for enduring grace.',
  },
  {
    number: '03',
    label: 'Turnkey Interior Precision',
    detail:
      'Dedicated interior design, 3D visualization, millwork detailing, and end-to-end site execution with transparent milestones.',
  },
];

/**
 * Asymmetrical editorial brand introduction with diptych interior photography.
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
          start: 'top 90%',
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
      <div className="mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">
          {/* Left Editorial Column */}
          <div className="lg:col-span-6 space-y-10 intro-fade">
            <SectionHeading
              eyebrow="Philosophy · Elegance in Every Detail"
              title={
                <>
                  Interiors That Honour Heritage While Embracing{' '}
                  <span className="italic font-normal text-gold-dark">
                    Contemporary Calm
                  </span>
                  .
                </>
              }
              description="At ARADHANA INTERIOR, we focus exclusively on interior design, interior decoration, interior elevation design, and turnkey interior execution—never diluting our craft with exterior construction."
              align="left"
            />

            <div className="divide-y divide-silver/50 border-y border-silver/50">
              {PILLARS.map((pillar) => (
                <div key={pillar.number} className="py-5 flex gap-5">
                  <span className="font-serif text-2xl text-gold-dark shrink-0">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-charcoal">
                      {pillar.label}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-charcoal/78">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2.5 border-b border-gold pb-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-gold-dark"
            >
              <span>Discover Our Studio Philosophy</span>
              <ArrowRight className="h-3.5 w-3.5 text-gold-dark" aria-hidden="true" />
            </Link>
          </div>

          {/* Right Diptych Photography Column */}
          <div className="lg:col-span-6 intro-fade grid grid-cols-12 gap-4 items-end">
            <div className="col-span-7 overflow-hidden border border-silver/60 bg-beige">
              <img
                src={kitchenImg}
                alt="Bespoke teak-finish modular island kitchen tailored for Tamil Nadu homes"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="col-span-5 space-y-4">
              <div className="overflow-hidden border border-silver/60 bg-beige">
                <img
                  src={poojaImg}
                  alt="Traditional South Indian brass kuthu vilakku lamp for serene pooja room interiors"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="border-l border-gold pl-4 py-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
                  Crafted for Tamil Nadu
                </p>
                <p className="mt-1 text-xs leading-relaxed text-charcoal/75">
                  From sacred pooja spaces to contemporary modular kitchens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
