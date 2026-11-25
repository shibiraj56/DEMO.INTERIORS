import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { DESIGN_PROCESS_STEPS } from '../../data/process';

gsap.registerPlugin(ScrollTrigger);

interface ProcessTimelineSectionProps {
  compact?: boolean;
}

/**
 * Animated 7-step interior design process timeline.
 */
export function ProcessTimelineSection({ compact = false }: ProcessTimelineSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-step-card', {
        y: 20,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power2.out',
        immediateRender: false,
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 92%',
          once: true,
        },
      });
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="design-process-heading"
      className="border-t border-silver/50 bg-beige-soft/55 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[84rem] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-gold-dark">
            Seven-Stage Journey
          </p>
          <h2
            id="design-process-heading"
            className="mt-3 font-serif text-3xl font-medium text-charcoal sm:text-4xl lg:text-5xl"
          >
            Our Interior Design Process
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/80 sm:text-base">
            From your initial consultation to final handover, every phase is structured for
            transparency, craft precision, and peace of mind.
          </p>
        </div>

        <div className="relative mt-14">
          {/* Vertical architectural hairline on desktop */}
          <div
            className="hidden lg:block absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold via-silver to-transparent"
            aria-hidden="true"
          />

          <ol className="space-y-6">
            {DESIGN_PROCESS_STEPS.map((item) => (
              <li
                key={item.step}
                className="process-step-card relative flex flex-col gap-5 border border-silver/60 bg-ivory p-6 sm:p-8 lg:ml-16 lg:flex-row lg:items-start lg:justify-between transition-colors duration-300 hover:border-gold"
              >
                {/* Step marker */}
                <div
                  className="hidden lg:flex absolute -left-[4.05rem] top-8 h-12 w-12 items-center justify-center border border-gold bg-ivory font-serif text-lg font-semibold text-gold-dark"
                  aria-hidden="true"
                >
                  {item.step}
                </div>

                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="lg:hidden font-serif text-xl font-semibold text-gold-dark">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-dark">
                      {item.subtitle}
                    </span>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-medium text-charcoal sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                    {item.description}
                  </p>
                </div>

                {!compact && (
                  <ul className="shrink-0 space-y-2 border-t border-silver/40 pt-4 lg:w-64 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-6">
                    {item.deliverables.map((del) => (
                      <li
                        key={del}
                        className="flex items-center gap-2 text-xs text-charcoal/85"
                      >
                        <Check className="h-3.5 w-3.5 shrink-0 text-gold-dark" aria-hidden="true" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
